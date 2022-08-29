"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72523],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=s,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16910:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],i={title:"User Settings",weight:23},c=void 0,u={unversionedId:"pages-for-subheaders/user-settings",id:"pages-for-subheaders/user-settings",title:"User Settings",description:"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the User Settings menu. You can open this menu by clicking your avatar, located within the main menu.",source:"@site/docs/pages-for-subheaders/user-settings.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/user-settings",permalink:"/rancher-docs/docs/pages-for-subheaders/user-settings",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/pages-for-subheaders/user-settings.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"User Settings",weight:23},sidebar:"tutorialSidebar",previous:{title:"Role-Based Access Control",permalink:"/rancher-docs/docs/reference-guides/prometheus-federator/rbac"},next:{title:"API Keys",permalink:"/rancher-docs/docs/reference-guides/user-settings/api-keys"}},l={},p=[],d={toc:p};function f(e){var t=e.components,i=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the ",(0,a.kt)("strong",{parentName:"p"},"User Settings")," menu. You can open this menu by clicking your avatar, located within the main menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"User Settings Menu",src:r(703).Z,width:"288",height:"294"})),(0,a.kt)("p",null,"The available user settings are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/reference-guides/user-settings/api-keys"},"API & Keys"),": If you want to interact with Rancher programmatically, you need an API key. Follow the directions in this section to obtain a key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/reference-guides/user-settings/manage-cloud-credentials"},"Cloud Credentials"),": Manage cloud credentials ",(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"used by node templates")," to ",(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/launch-kubernetes-with-rancher"},"provision nodes for clusters"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/reference-guides/user-settings/manage-node-templates"},"Node Templates"),": Manage templates ",(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/launch-kubernetes-with-rancher"},"used by Rancher to provision nodes for clusters"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/docs/reference-guides/user-settings/user-preferences"},"Preferences"),": Sets superficial preferences for the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},"Log Out: Ends your user session.")))}f.isMDXComponent=!0},703:function(e,t,r){t.Z=r.p+"assets/images/user-settings-cda0eec8ae28c8bdf1742e2c5367e3d8.png"}}]);