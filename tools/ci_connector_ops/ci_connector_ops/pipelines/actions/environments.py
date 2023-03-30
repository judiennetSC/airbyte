#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

"""This modules groups functions made to create reusable environments packaged in dagger containers."""

from __future__ import annotations

from typing import TYPE_CHECKING, List, Optional

from ci_connector_ops.pipelines.utils import get_file_contents
from dagger import CacheSharingMode, CacheVolume, Container, Directory, Secret

if TYPE_CHECKING:
    from ci_connector_ops.pipelines.contexts import ConnectorTestContext


PYPROJECT_TOML_FILE_PATH = "pyproject.toml"

CONNECTOR_TESTING_REQUIREMENTS = [
    "pip==21.3.1",
    "mccabe==0.6.1",
    "flake8==4.0.1",
    "pyproject-flake8==0.0.1a2",
    "black==22.3.0",
    "isort==5.6.4",
    "pytest==6.2.5",
    "coverage[toml]==6.3.1",
    "pytest-custom_exit_code",
]

INSTALL_LOCAL_REQUIREMENTS_CMD = ["python", "-m", "pip", "install", "-r", "requirements.txt"]
INSTALL_CONNECTOR_PACKAGE_CMD = ["python", "-m", "pip", "install", "."]
DEFAULT_PYTHON_EXCLUDE = [".venv"]
CI_CREDENTIALS_SOURCE_PATH = "tools/ci_credentials"
CI_CONNECTOR_OPS_SOURCE_PATH = "tools/ci_connector_ops"


def with_python_base(context: ConnectorTestContext, python_image_name: str = "python:3.9-slim") -> Container:
    """Builds a Python container with a cache volume for pip cache.

    Args:
        context (ConnectorTestContext): The current test context, providing a dagger client and a repository directory.
        python_image_name (str, optional): The python image to use to build the python base environment. Defaults to "python:3.9-slim".

    Raises:
        ValueError: Raised if the python_image_name is not a python image.

    Returns:
        Container: The python base environment container.
    """
    if not python_image_name.startswith("python:3"):
        raise ValueError("You have to use a python image to build the python base environment")
    pip_cache: CacheVolume = context.dagger_client.cache_volume("pip_cache")
    return (
        context.dagger_client.container()
        .from_(python_image_name)
        .with_mounted_cache("/root/.cache/pip", pip_cache, sharing=CacheSharingMode.SHARED)
        .with_mounted_directory("/tools", context.get_repo_dir("tools", include=["ci_credentials", "ci_common_utils"], exclude=[".venv"]))
        .with_exec(["pip", "install", "--upgrade", "pip"])
    )


def with_testing_dependencies(context: ConnectorTestContext) -> Container:
    """Builds a testing environment by installing testing dependencies on top of a python base environment.

    Args:
        context (ConnectorTestContext): The current test context, providing a dagger client and a repository directory.

    Returns:
        Container: The testing environment container.
    """
    python_environment: Container = with_python_base(context)
    pyproject_toml_file = context.get_repo_dir(".", include=[PYPROJECT_TOML_FILE_PATH]).file(PYPROJECT_TOML_FILE_PATH)
    return python_environment.with_exec(["pip", "install"] + CONNECTOR_TESTING_REQUIREMENTS).with_file(
        f"/{PYPROJECT_TOML_FILE_PATH}", pyproject_toml_file
    )


def with_python_package(
    context: ConnectorTestContext,
    python_environment: Container,
    package_source_code_path: str,
    exclude: Optional[List] = None,
) -> Container:
    """Load a python package source code to a python environment container.

    Args:
        context (ConnectorTestContext): The current test context, providing the repository directory from which the python sources will be pulled.
        python_environment (Container): An existing python environment in which the package will be installed.
        package_source_code_path (str): The local path to the package source code.
        additional_dependency_groups (Optional[List]): extra_requires dependency of setup.py to install. Defaults to None.
        exclude (Optional[List]): A list of file or directory to exclude from the python package source code.

    Returns:
        Container: A python environment container with the python package source code.
    """
    if exclude:
        exclude = DEFAULT_PYTHON_EXCLUDE + exclude
    else:
        exclude = DEFAULT_PYTHON_EXCLUDE
    package_source_code_directory: Directory = context.get_repo_dir(package_source_code_path, exclude=exclude)
    container = python_environment.with_mounted_directory("/" + package_source_code_path, package_source_code_directory).with_workdir(
        "/" + package_source_code_path
    )
    return container


async def with_installed_python_package(
    context: ConnectorTestContext,
    python_environment: Container,
    package_source_code_path: str,
    additional_dependency_groups: Optional[List] = None,
    exclude: Optional[List] = None,
) -> Container:
    """Installs a python package in a python environment container.

    Args:
        context (ConnectorTestContext): The current test context, providing the repository directory from which the python sources will be pulled.
        python_environment (Container): An existing python environment in which the package will be installed.
        package_source_code_path (str): The local path to the package source code.
        additional_dependency_groups (Optional[List]): extra_requires dependency of setup.py to install. Defaults to None.
        exclude (Optional[List]): A list of file or directory to exclude from the python package source code.

    Returns:
        Container: A python environment container with the python package installed.
    """

    container = with_python_package(context, python_environment, package_source_code_path, exclude=exclude)
    if requirements_txt := await get_file_contents(container, "requirements.txt"):
        for line in requirements_txt.split("\n"):
            if line.startswith("-e ."):
                local_dependency_path = package_source_code_path + "/" + line[3:]
                container = container.with_mounted_directory(
                    "/" + local_dependency_path, context.get_repo_dir(local_dependency_path, exclude=DEFAULT_PYTHON_EXCLUDE)
                )
        container = container.with_exec(INSTALL_LOCAL_REQUIREMENTS_CMD)

    container = container.with_exec(INSTALL_CONNECTOR_PACKAGE_CMD)

    if additional_dependency_groups:
        container = container.with_exec(
            INSTALL_CONNECTOR_PACKAGE_CMD[:-1] + [INSTALL_CONNECTOR_PACKAGE_CMD[-1] + f"[{','.join(additional_dependency_groups)}]"]
        )

    return container


def with_airbyte_connector(context: ConnectorTestContext) -> Container:
    """Load an airbyte connector source code in a testing environment.

    Args:
        context (ConnectorTestContext): The current test context, providing the repository directory from which the connector sources will be pulled.
    Returns:
        Container: A python environment container (with the connector source code).
    """
    connector_source_path = str(context.connector.code_directory)
    testing_environment: Container = with_testing_dependencies(context)
    return with_python_package(context, testing_environment, connector_source_path, exclude=["secrets"])


async def with_installed_airbyte_connector(context: ConnectorTestContext) -> Container:
    """Installs an airbyte connector python package in a testing environment.

    Args:
        context (ConnectorTestContext): The current test context, providing the repository directory from which the connector sources will be pulled.
    Returns:
        Container: A python environment container (with the connector installed).
    """
    connector_source_path = str(context.connector.code_directory)
    testing_environment: Container = with_testing_dependencies(context)
    return await with_installed_python_package(
        context, testing_environment, connector_source_path, additional_dependency_groups=["dev", "tests", "main"], exclude=["secrets"]
    )


async def with_ci_credentials(context: ConnectorTestContext, gsm_secret: Secret) -> Container:
    """Installs the ci_credentials package in a python environment.

    Args:
        context (ConnectorTestContext): The current test context, providing the repository directory from which the ci_credentials sources will be pulled.
        gsm_secret (Secret): The secret holding GCP_GSM_CREDENTIALS env variable value.

    Returns:
        Container: A python environment with the ci_credentials package installed.
    """
    python_base_environment: Container = with_python_base(context)
    ci_credentials = await with_installed_python_package(context, python_base_environment, CI_CREDENTIALS_SOURCE_PATH)

    return ci_credentials.with_env_variable("VERSION", "dev").with_secret_variable("GCP_GSM_CREDENTIALS", gsm_secret).with_workdir("/")


async def with_ci_connector_ops(context: ConnectorTestContext) -> Container:
    """Installs the ci_connector_ops package in a Container running Python > 3.10 with git..

    Args:
        context (ConnectorTestContext): The current test context, providing the repository directory from which the ci_connector_sources sources will be pulled.

    Returns:
        Container: A python environment container with ci_connector_ops installed.
    """
    python_base_environment: Container = with_python_base(context, "python:3-alpine")
    python_with_git = python_base_environment.with_exec(["apk", "add", "gcc", "libffi-dev", "musl-dev", "git"])
    return await with_installed_python_package(context, python_with_git, CI_CONNECTOR_OPS_SOURCE_PATH, exclude=["pipelines"])


def with_dockerd_service(context, shared_tmp_volume):
    dockerd = (
        context.dagger_client.container()
        .from_("docker:23.0.1-dind")
        .with_mounted_cache("/var/lib/docker/overlays2", context.dagger_client.cache_volume("docker-lib-overlays2"))
        .with_mounted_cache("/tmp", shared_tmp_volume)
        .with_exposed_port(2375)
        .with_exec(["dockerd", "--log-level=info", "--host=tcp://0.0.0.0:2375", "--tls=false"], insecure_root_capabilities=True)
    )
    return dockerd


def with_java_base(context: ConnectorTestContext, jdk_version="17.0.4") -> Container:
    return context.dagger_client.container().from_(f"amazoncorretto:{jdk_version}")


def with_bound_docker_host(container, dockerd):
    return container.with_env_variable("DOCKER_HOST", "tcp://docker:2375").with_service_binding("docker", dockerd)


def with_docker_cli(context, dockerd):
    docker_cli = context.dagger_client.container().from_("docker:23.0.1-cli")
    return with_bound_docker_host(docker_cli, dockerd)


def with_cat(context, dockerd, shared_tmp_volume):
    if context.connector_acceptance_test_image.endswith(":dev"):
        cat_container = context.connector_acceptance_test_source_dir.docker_build()
    else:
        cat_container = context.dagger_client.container().from_(context.connector_acceptance_test_image)
    return (
        with_bound_docker_host(cat_container, dockerd)
        .with_mounted_cache("/tmp", shared_tmp_volume)
        .with_entrypoint(["pip"])
        .with_exec(["install", "pytest-custom_exit_code"])
        .with_mounted_directory("/test_input", context.get_connector_dir(exclude=["secrets", ".venv"]))
        .with_directory("/test_input/secrets", context.secrets_dir)
        .with_workdir("/test_input")
        .with_entrypoint(["python", "-m", "pytest", "-p", "connector_acceptance_test.plugin", "--suppress-tests-failed-exit-code"])
        .with_exec(["--acceptance-test-config", "/test_input"])
    )


async def with_gradle(context: ConnectorTestContext, sources_to_include: List[str] = None) -> Container:
    airbyte_gradle_cache: CacheVolume = context.dagger_client.cache_volume(f"{context.connector.technical_name}_airbyte_gradle_cache")
    root_gradle_cache: CacheVolume = context.dagger_client.cache_volume(f"{context.connector.technical_name}_root_gradle_cache")

    dagger_client = context.dagger_client
    dockerd, docker_host, shared_tmp_volume = get_dind_container_and_host(dagger_client, "gradle")

    include = [
        ".env",
        "build.gradle",
        "deps.toml",
        "gradle.properties",
        "gradle",
        "gradlew",
        "LICENSE_SHORT",
        "publish-repositories.gradle",
        "settings.gradle",
        "build.gradle",
        "tools/gradle",
        "spotbugs-exclude-filter-file.xml",
        "airbyte-api",
        "airbyte-commons-cli",
        "airbyte-commons-protocol",
        "airbyte-commons",
        "airbyte-config",
        "airbyte-connector-test-harnesses",
        "airbyte-db",
        "airbyte-integrations/bases",
        "airbyte-integrations/connectors/source-jdbc",
        "airbyte-integrations/connectors/source-relational-db",
        "airbyte-json-validation",
        "airbyte-protocol",
        "airbyte-test-utils",
        "buildSrc",
        "tools/bin/build_image.sh",
        "tools/lib/lib.sh",
    ]

    if sources_to_include:
        include += sources_to_include

    return (
        with_docker_cli(context, dockerd, await docker_host)
        .with_mounted_cache("/tmp", shared_tmp_volume)
        .with_exec(["apk", "add", "openjdk17", "bash", "jq"])
        .with_exec(["mkdir", "/root/.gradle"])
        .with_mounted_cache("/root/.gradle", root_gradle_cache)
        .with_exec(["mkdir", "/airbyte"])
        .with_mounted_directory("/airbyte", context.get_repo_dir(".", include=include))
        .with_mounted_cache("/airbyte/.gradle", airbyte_gradle_cache)
        .with_workdir("/airbyte")
    )


def with_integration_base(context):
    return (
        context.dagger_client.container()
        .from_("amazonlinux:2022.0.20220831.1")
        .with_workdir("/airbyte")
        .with_file("base.sh", context.get_repo_dir(include="airbyte-integrations/bases/base").file("base.sh"))
        .with_env_variable("AIRBYTE_ENTRYPOINT", "/airbyte/base.sh")
        .with_entrypoint("/airbyte/base.sh")
    )


def with_integration_base_java(context):
    return (
        context.dagger_client.container()
        .from_("amazoncoretto:17.0.4")
        .with_directory("/airbyte", with_java_base(context).directory("/airbyte"))
        .with_exec(["yum", "install", "-y", "tar", "openssl", "&&", "yum", "clean", "all"])
        .with_workdir("/airbyte")
        .with_file("dd-java-agent.jar", context.dagger_client.http("https://dtdg.co/latest-java-tracer"))
        .with_file("base.sh", context.get_repo_dir(include="airbyte-integrations/bases/base-java").file("javabase.sh"))
        .with_env_variable("AIRBYTE_SPEC_CMD", "/airbyte/javabase.sh --spec")
        .with_env_variable("AIRBYTE_CHECK_CMD", "/airbyte/javabase.sh --check")
        .with_env_variable("AIRBYTE_DISCOVER_CMD", "/airbyte/javabase.sh --discover")
        .with_env_variable("AIRBYTE_WRITE_CMD", "/airbyte/javabase.sh --write")
        .with_env_variable("AIRBYTE_ENTRYPOINT", "/airbyte/base.sh")
        .with_entrypoint("/airbyte/base.sh")
    )


async def with_java_connector(context):
    build_dir = (
        with_gradle(context)
        .with_mounted_directory(str(context.connector.code_directory), context.get_connector_dir(exclude=["secrets", "builds"]))
        .with_exec(["./gradlew", f":airbyte-integrations:connectors:{context.connector.technical_name}:build"])
        .directory(f"{str(context.connector.code_directory)}/build")
    )

    tar_file = None
    for entry in await build_dir.entries():
        if entry.endswith(".tar"):
            tar_file = build_dir.file(tar_file)
    if tar_file is None:
        raise Exception("Could not find the tar file")

    return (
        with_integration_base_java(context)
        .with_workdir("/airbyte")
        .with_env_variable("APPLICATION", context.connector.technical_name)
        .with_file(f"{context.connector.technical_name}.tar", tar_file)
        .with_exec(
            [
                "tar",
                "xf",
                f"{context.connector.technical_name}.tar",
                "--strip-components=1",
                "&&",
                "rm",
                "-rf",
                f"{context.connector.technical_name}.tar",
            ]
        )
    )
