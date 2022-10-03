"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},o="Authentication",l={unversionedId:"connector-development/config-based/understanding-the-yaml-file/authentication",id:"connector-development/config-based/understanding-the-yaml-file/authentication",title:"Authentication",description:"The Authenticator defines how to configure outgoing HTTP requests to authenticate on the API source.",source:"@site/../docs/connector-development/config-based/understanding-the-yaml-file/authentication.md",sourceDirName:"connector-development/config-based/understanding-the-yaml-file",slug:"/connector-development/config-based/understanding-the-yaml-file/authentication",permalink:"/connector-development/config-based/understanding-the-yaml-file/authentication",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/understanding-the-yaml-file/authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Request Options",permalink:"/connector-development/config-based/understanding-the-yaml-file/request-options"},next:{title:"Error handling",permalink:"/connector-development/config-based/understanding-the-yaml-file/error-handling"}},c={},u=[{value:"Authenticators",id:"authenticators",level:2},{value:"ApiKeyAuthenticator",id:"apikeyauthenticator",level:3},{value:"BearerAuthenticator",id:"bearerauthenticator",level:3},{value:"BasicHttpAuthenticator",id:"basichttpauthenticator",level:3},{value:"OAuth",id:"oauth",level:3}],s={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Authenticator")," defines how to configure outgoing HTTP requests to authenticate on the API source."),(0,r.kt)("h2",{id:"authenticators"},"Authenticators"),(0,r.kt)("h3",{id:"apikeyauthenticator"},"ApiKeyAuthenticator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiKeyAuthenticator"),' sets an HTTP header on outgoing requests.\nThe following definition will set the header "Authorization" with a value "Bearer hello":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authenticator:\n  type: "ApiKeyAuthenticator"\n  header: "Authorization"\n  token: "Bearer hello"\n')),(0,r.kt)("h3",{id:"bearerauthenticator"},"BearerAuthenticator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BearerAuthenticator")," is a specialized ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiKeyAuthenticator"),' that always sets the header "Authorization" with the value "Bearer {token}".\nThe following definition will set the header "Authorization" with a value "Bearer hello"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authenticator:\n  type: "BearerAuthenticator"\n  token: "hello"\n')),(0,r.kt)("p",null,"More information on bearer authentication can be found ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"here"),"."),(0,r.kt)("h3",{id:"basichttpauthenticator"},"BasicHttpAuthenticator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicHttpAuthenticator"),' set the "Authorization" header with a (USER ID/password) pair, encoded using base64 as per ',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme"},"RFC 7617"),'.\nThe following definition will set the header "Authorization" with a value "Basic {encoded credentials}"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authenticator:\n  type: "BasicHttpAuthenticator"\n  username: "hello"\n  password: "world"\n')),(0,r.kt)("p",null,"The password is optional. Authenticating with APIs using Basic HTTP and a single API key can be done as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authenticator:\n  type: "BasicHttpAuthenticator"\n  username: "hello"\n')),(0,r.kt)("h3",{id:"oauth"},"OAuth"),(0,r.kt)("p",null,"OAuth authentication is supported through the ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuthAuthenticator"),", which requires the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"token_refresh_endpoint: The endpoint to refresh the access token"),(0,r.kt)("li",{parentName:"ul"},"client_id: The client id"),(0,r.kt)("li",{parentName:"ul"},"client_secret: The client secret"),(0,r.kt)("li",{parentName:"ul"},"refresh_token: The token used to refresh the access token"),(0,r.kt)("li",{parentName:"ul"},"scopes (Optional): The scopes to request. Default: Empty list"),(0,r.kt)("li",{parentName:"ul"},'token_expiry_date (Optional): The access token expiration date formatted as RFC-3339 ("%Y-%m-%dT%H:%M:%S.%f%z")'),(0,r.kt)("li",{parentName:"ul"},'access_token_name (Optional): The field to extract access token from in the response. Default: "access_token".'),(0,r.kt)("li",{parentName:"ul"},'expires_in_name (Optional): The field to extract expires_in from in the response. Default: "expires_in"'),(0,r.kt)("li",{parentName:"ul"},"refresh_request_body (Optional): The request body to send in the refresh request. Default: None")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'authenticator:\n  type: "OAuthAuthenticator"\n  token_refresh_endpoint: "https://api.searchmetrics.com/v4/token"\n  client_id: "{{ config[\'api_key\'] }}"\n  client_secret: "{{ config[\'client_secret\'] }}"\n  refresh_token: ""\n')))}h.isMDXComponent=!0}}]);