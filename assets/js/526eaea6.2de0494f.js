"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3326],{55754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const i={},l="Strava",o={unversionedId:"integrations/sources/strava",id:"integrations/sources/strava",title:"Strava",description:"Overview",source:"@site/../docs/integrations/sources/strava.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/strava",permalink:"/integrations/sources/strava",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/strava.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Statuspage.io API",permalink:"/integrations/sources/statuspage"},next:{title:"Stripe",permalink:"/integrations/sources/stripe"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"strava"},"Strava"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Strava source can sync data from the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.strava.com/"},"Strava API")),(0,n.kt)("p",null,"Useful links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/getting-started/"},"Getting Started with the Strava API"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/reference/"},"Strava API v3 API and SDK Reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/authentication/"},"Authentication"))),(0,n.kt)("h4",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/reference/#api-Athletes-getStats"},"Athlete Stats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/reference/#api-Activities-getLoggedInAthleteActivities"},"Activities")," ","(","Incremental",")")),(0,n.kt)("h4",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"client","_","id - Strava account client ID"),(0,n.kt)("li",{parentName:"ul"},"client","_","secret - Strava account client secret"),(0,n.kt)("li",{parentName:"ul"},"refresh","_","token - Strava account refresh token "),(0,n.kt)("li",{parentName:"ul"},"athlete","_","id - Strava athlete ID (only used for ",(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/reference/#api-Athletes-getStats"},"Athlete Stats"),")"),(0,n.kt)("li",{parentName:"ul"},"query","_","start","_","timestamp - Starting timestamp for listing activities (only used for ",(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/reference/#api-Activities-getLoggedInAthleteActivities"},"Activities"),")")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"Follow these steps to get the required credentials and inputs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/getting-started/#account"},"Create a Strava account")),(0,n.kt)("li",{parentName:"ul"},"Continue to follow the instructions from the doc above to obtain ",(0,n.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"refresh_token"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enter this URL into your browser (make sure to add your ",(0,n.kt)("inlineCode",{parentName:"li"},"client_id")," from previous step:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"http://www.strava.com/oauth/authorize?client_id=[REPLACE_WITH_YOUR_CLIENT_ID]&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all")))),(0,n.kt)("li",{parentName:"ul"},"Authorize through the UI"),(0,n.kt)("li",{parentName:"ul"},"Browser will redirect you to an empty page with a URL similar to ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost/exchange_token?state=&code=b55003496d87a9f0b694ca1680cd5690d27d9d28&scope=activity:read_all")),(0,n.kt)("li",{parentName:"ul"},"Copy the authorization code above (in this example it would be ",(0,n.kt)("inlineCode",{parentName:"li"},"b55003496d87a9f0b694ca1680cd5690d27d9d28"),")"),(0,n.kt)("li",{parentName:"ul"},"Make a cURL request to exchange the authorization code and scope for a refresh token:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl -X POST https://www.strava.com/oauth/token \\\n-F client_id=YOUR_CLIENT_ID \\\n-F client_secret=YOUR_CLIENT_SECRET \\\n-F code=AUTHORIZATION_CODE \\\n-F grant_type=authorization_code\n"))),(0,n.kt)("li",{parentName:"ul"},"The resulting json will contain the ",(0,n.kt)("inlineCode",{parentName:"li"},"refresh_token")),(0,n.kt)("li",{parentName:"ul"},"Example Result:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'  {\n      "token_type": "Bearer",\n      "expires_at": 1562908002,\n      "expires_in": 21600,\n      "refresh_token": "REFRESHTOKEN",\n      "access_token": "ACCESSTOKEN",\n      "athlete": {\n          "id": 123456,\n          "username": "MeowTheCat",\n          "resource_state": 2,\n          "firstname": "Meow",\n          "lastname": "TheCat",\n          "city": "",\n          "state": "",\n          "country": null,\n          ...\n      }\n  }\n'))),(0,n.kt)("li",{parentName:"ul"},"Refer to Strava's ",(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/getting-started/#oauth"},"Getting Started - Oauth")," or ",(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/authentication/"},"Authentication")," documents for more information"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"athlete_id"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to your athlete page by clicking your name on the ",(0,n.kt)("a",{parentName:"li",href:"https://www.strava.com/dashboard"},"Strava dashboard"),' or click on "My Profile" on the drop down after hovering on your top bar icon'),(0,n.kt)("li",{parentName:"ul"},"The number at the end of the url will be your ",(0,n.kt)("inlineCode",{parentName:"li"},"athlete_id"),". For example ",(0,n.kt)("inlineCode",{parentName:"li"},"17831421")," would be the ",(0,n.kt)("inlineCode",{parentName:"li"},"athlete_id")," for ",(0,n.kt)("a",{parentName:"li",href:"https://www.strava.com/athletes/17831421"},"https://www.strava.com/athletes/17831421"))))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Strava API has limitations to 100 requests every 15 minutes, 1000 daily.\nMore information about Strava rate limits and adjustments to those limits can be found ",(0,n.kt)("a",{parentName:"p",href:"https://developers.strava.com/docs/rate-limits"},"here"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8799"},"8799")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement OAuth 2.0 support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"8425")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7151"},"7151")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release supporting Strava API")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);