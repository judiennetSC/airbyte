"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3977],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(a),u=n,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(k,o(o({ref:e},d),{},{components:a})):r.createElement(k,o({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17729:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="Paypal Transaction",l={unversionedId:"integrations/sources/paypal-transaction",id:"integrations/sources/paypal-transaction",title:"Paypal Transaction",description:"This page contains the setup guide and reference information for the Paypal Transaction source connector.",source:"@site/../docs/integrations/sources/paypal-transaction.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/paypal-transaction",permalink:"/integrations/sources/paypal-transaction",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/paypal-transaction.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PagerDuty",permalink:"/integrations/sources/pagerduty"},next:{title:"Paystack",permalink:"/integrations/sources/paystack"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Paypal Transaction",id:"step-1-set-up-paypal-transaction",level:3},{value:"Step 2: Set up the Paypal Transaction connector in Airbyte",id:"step-2-set-up-the-paypal-transaction-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte Open Source:",id:"for-airbyte-open-source",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"paypal-transaction"},"Paypal Transaction"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Paypal Transaction source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/api/transaction-search/v1/"},"Paypal Transaction API")," is used to get the history of transactions for a PayPal account."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-paypal-transaction"},"Step 1: Set up Paypal Transaction"),(0,n.kt)("p",null,"In order to get an ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Secret")," please go to ",(0,n.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/platforms/get-started/"},"this")," page and follow the instructions. After registration you may find your ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Secret")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.paypal.com/developer/accounts/"},"here"),"."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Note: Our Paypal Transactions Source Connector does not support OAuth at this time due to limitations outside of our control. If OAuth for Paypal Transactions is critical to your business, ",(0,n.kt)("a",{parentName:"p",href:"mailto:product@airbyte.io"},"please reach out to us")," to discuss how we may be able to partner on this effort."))),(0,n.kt)("h2",{id:"step-2-set-up-the-paypal-transaction-connector-in-airbyte"},"Step 2: Set up the Paypal Transaction connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Paypal Transaction connector and select ",(0,n.kt)("strong",{parentName:"li"},"Paypal Transaction")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter your client id"),(0,n.kt)("li",{parentName:"ol"},"Enter your secret"),(0,n.kt)("li",{parentName:"ol"},"Choose if your account is sandbox"),(0,n.kt)("li",{parentName:"ol"},"Enter the date you want your sync to start from"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard"),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source"),(0,n.kt)("li",{parentName:"ol"},"Enter your client id"),(0,n.kt)("li",{parentName:"ol"},"Enter your secret"),(0,n.kt)("li",{parentName:"ol"},"Choose if your account is sandbox"),(0,n.kt)("li",{parentName:"ol"},"Enter the date you want your sync to start from"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The PayPal Transaction source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.paypal.com/docs/api/transaction-search/v1/#transactions"},"Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.paypal.com/docs/api/transaction-search/v1/#balances"},"Balances"))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Paypal transaction API has some ",(0,n.kt)("a",{parentName:"p",href:"https://developer.paypal.com/docs/integration/direct/transaction-search/"},"limits")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start_date_min")," = 3 years, API call lists transaction for the previous three years."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start_date_max")," = 1.5 days, it takes a maximum of three hours for executed transactions to appear in the list transactions call. It is set to 1.5 days by default based on experience, otherwise API throw an error."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stream_slice_period")," = 1 day, the maximum supported date range is 31 days."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"records_per_request")," = 10000, the maximum number of records in a single request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"page_size")," = 500, the maximum page size is 500."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"requests_per_minute")," = 30, maximum limit is 50 requests per minute from IP address to all endpoint")),(0,n.kt)("p",null,"Transactions sync is performed with default ",(0,n.kt)("inlineCode",{parentName:"p"},"stream_slice_period")," = 1 day, it means that there will be 1 request for each day between start_date and now or end_date. if ",(0,n.kt)("inlineCode",{parentName:"p"},"start_date")," is greater then ",(0,n.kt)("inlineCode",{parentName:"p"},"start_date_max"),". Balances sync is similarly performed with default ",(0,n.kt)("inlineCode",{parentName:"p"},"stream_slice_period")," = 1 day, but it will do additional request for the end_date of the sync now."),(0,n.kt)("h2",{id:"data-type-map"},"Data type map"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15741"},"15741")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15000"},"15000")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support of ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," authentication, fixed bug when normalization couldn't handle nested cursor field and primary key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14804"},"14804")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"RESULTSET_TOO_LARGE")," error validation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13682"},"13682")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated paypal transaction schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12335"},"12335")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added fixtures to mock time.sleep for connectors that explicitly sleep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9034"},"9034")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8580"},"8580")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added more logs during ",(0,n.kt)("inlineCode",{parentName:"td"},"check connection")," stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5155"},"5155")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed start_date_min limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4240"},"4240")),(0,n.kt)("td",{parentName:"tr",align:"left"},"PayPal Transaction Search API")))))}m.isMDXComponent=!0}}]);