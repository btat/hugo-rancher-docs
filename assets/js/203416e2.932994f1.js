"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32266],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={shortTitle:"Role-based Access Control",title:"Role-based Access Control for Logging",weight:3},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/logging/rbac-for-logging",id:"version-2.5/explanations/integrations-in-rancher/logging/rbac-for-logging",title:"Role-based Access Control for Logging",description:"Rancher logging has two roles, logging-admin and logging-view.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/rbac-for-logging.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/rbac-for-logging",permalink:"/rancher-docs/2.5/explanations/integrations-in-rancher/logging/rbac-for-logging",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/rbac-for-logging.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{shortTitle:"Role-based Access Control",title:"Role-based Access Control for Logging",weight:3},sidebar:"tutorialSidebar",previous:{title:"Migrating to Rancher v2.5 Logging",permalink:"/rancher-docs/2.5/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},next:{title:"rancher-logging Helm Chart Options",permalink:"/rancher-docs/2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options"}},g={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher logging has two roles, ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-view"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logging-admin")," gives users full access to namespaced ",(0,a.kt)("inlineCode",{parentName:"li"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logging-view")," allows users to ",(0,a.kt)("em",{parentName:"li"},"view")," namespaced ",(0,a.kt)("inlineCode",{parentName:"li"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterFlows")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterOutputs"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Why choose one role over the other?")," Edit access to ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," resources is powerful. Any user with it has edit access for all logs in the cluster.")),(0,a.kt)("p",null,"In Rancher, the cluster administrator role is the only role with full access to all ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-logging")," resources. Cluster members are not able to edit or read any logging resources. Project owners and members have the following privileges:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Project Owners"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Members"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"able to create namespaced ",(0,a.kt)("inlineCode",{parentName:"td"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"Outputs")," in their projects' namespaces"),(0,a.kt)("td",{parentName:"tr",align:null},"only able to view the ",(0,a.kt)("inlineCode",{parentName:"td"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"Outputs")," in projects' namespaces")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"can collect logs from anything in their projects' namespaces"),(0,a.kt)("td",{parentName:"tr",align:null},"cannot collect any logs in their projects' namespaces")))),(0,a.kt)("p",null,"Both project owners and project members require at least ",(0,a.kt)("em",{parentName:"p"},"one")," namespace in their project to use logging. If they do not, then they may not see the logging button in the top nav dropdown."))}d.isMDXComponent=!0}}]);