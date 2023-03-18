"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[88176],{29835:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={},l="Bigquery Denormalized",p={unversionedId:"integrations/destinations/bigquery-denormalized",id:"integrations/destinations/bigquery-denormalized",title:"Bigquery Denormalized",description:"See destinations/bigquery",source:"@site/../docs/integrations/destinations/bigquery-denormalized.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/bigquery-denormalized",permalink:"/integrations/destinations/bigquery-denormalized",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/bigquery-denormalized.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"AzureBlobStorage",permalink:"/integrations/destinations/azure-blob-storage"},next:{title:"BigQuery",permalink:"/integrations/destinations/bigquery"}},d={},m=[{value:"Changelog",id:"changelog",level:2},{value:"bigquery-denormalized",id:"bigquery-denormalized-1",level:3}],o={toc:m},g="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(g,(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigquery-denormalized"},"Bigquery Denormalized"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/destinations/bigquery"},"destinations/bigquery")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"bigquery-denormalized-1"},"bigquery-denormalized"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23788"},"#23788")),(0,n.kt)("td",{parentName:"tr",align:"left"},"S3-Parquet: added handler to process null values in arrays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23931"},"#","23931")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support for periodic buffer flush")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23466"},"#23466")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Changed S3 Avro type from Int to Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22497"},"#22497")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed table already exists error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20631"},"#20631")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support for destination checkpointing with staging")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21087"},"#21087")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wrap Authentication Errors as Config Exceptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21144"},"#21144")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added explicit error message if sync fails due to a config issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20730"},"#20730")),(0,n.kt)("td",{parentName:"tr",align:"left"},"An incoming source Number type will create a big query integer rather than a float.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20501"},"#20501")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Report GCS staging failures that occur during connection check")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19489"},"#19489")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added non-billable projects handle to check connection stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19358"},"#19358")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed check method to capture mismatch dataset location")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18554"},"#18554")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve check connection method to handle more errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18162"},"#18162")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve error logs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16890"},"#16890")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add user-agent header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17054"},"#17054")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Respect stream namespace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15668"},"15668")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(bugged, do not use) Wrap logs in AirbyteLogMessage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16401"},"16401")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(bugged, do not use) Wrapping string objects with TextNode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14023"},"#14023")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(bugged, do not use) Cover arrays only if they are nested")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16243"},"#16243")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix Json to Avro conversion when there is field name clash from combined restrictions (",(0,n.kt)("inlineCode",{parentName:"td"},"anyOf"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"oneOf"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"allOf")," fields)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14784"},"14784")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enabling Application Default Credentials")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14801"},"14801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix multiple log bindings")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15180"},"15180")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix standard loading mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14079"},"14079")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Map "airbyte_type": "big_integer" to INT64')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14114"},"14114")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Remove "additionalProperties": false from specs for connectors with staging')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13852"},"13852")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13753"},"13753")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Deprecate and remove PART_SIZE_MB fields from connectors based on StreamTransferManager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13579"},"13579")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Always check GCS bucket for GCS loading method to catch invalid HMAC keys.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13424"},"13424")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reordered fields for specification.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12768"},"12768")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Clarify that the service account key json field is required on cloud.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12805"},"12805")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated to latest base-java to emit AirbyteTraceMessage on error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12578"},"12578")),(0,n.kt)("td",{parentName:"tr",align:"left"},"In JSON to Avro conversion, log JSON field values that do not follow Avro schema for debugging.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12528"},"12528")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update Dataset location field description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12477"},"12477")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Dataset location is a required field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11978"},"11978")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed emittedAt timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11776"},"11776")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use serialized buffering strategy to reduce memory consumption.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11166"},"11166")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed handling of anyOf and allOf fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11620"},"11620")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11636"},"11636")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added new unit tests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11454"},"11454")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integration test enhancement for picking test-data and schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10793"},"10793")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix namespace with invalid characters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10755"},"10755")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make sure to kill children threads and stop JVM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9959"},"9959")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix null pointer exception from buffered stream consumer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9745"},"9745")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integrate with Sentry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9573"},"9573")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery Destination : update description for some input fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/8383"},"8383")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery/BiqQuery denorm Destinations : Support dataset-id prefixed by project-id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9415"},"9415")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery Destination : Fix GCS processing of Facebook data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9039"},"9039")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added part_size configuration to UI for GCS staging")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8574"},"8574")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added namespace to Avro and Parquet record types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8788"},"8788")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery/BiqQuery denorm Destinations : Add possibility to use different types of GCS files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/8816"},"8816")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update dataset locations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7804"},"7804")),(0,n.kt)("td",{parentName:"tr",align:"left"},"handle null values in fields described by a $ref definition")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7736"},"7736")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed the handling of ObjectNodes with $ref definition key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7413"},"7413")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed DATETIME conversion for BigQuery")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7240"},"7240")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Output partitioned/clustered tables")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6145"},"6145")),(0,n.kt)("td",{parentName:"tr",align:"left"},'BigQuery Denormalized support for date, datetime & timestamp types through the json "format" key')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5881"},"5881")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery Denormalized NPE fix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5813"},"5813")),(0,n.kt)("td",{parentName:"tr",align:"left"},'fix Stackoverflow error when receive a schema from source where "Array" type doesn\'t contain a required "items" element')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5261"},"5261")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc1b Destination BigQuery","(","Denormalized",")",": Fix processing arrays of records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5125"},"5125")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalPropertities")," in spec.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3555"},"3555")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Partial Success in BufferedStreamConsumer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4176"},"4176")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Destination using Typed Struct and Repeated fields")))))}f.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},g="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),g=m(a),k=n,N=g["".concat(d,".").concat(k)]||g[k]||f[k]||i;return a?r.createElement(N,l(l({ref:e},o),{},{components:a})):r.createElement(N,l({ref:e},o))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[g]="string"==typeof t?t:n,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);