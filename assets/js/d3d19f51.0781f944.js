"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[56217],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return g}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),p=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return o.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=n,k=c["".concat(u,".").concat(g)]||c[g]||l[g]||a;return t?o.createElement(k,s(s({ref:r},d),{},{components:t})):o.createElement(k,s({ref:r},d))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96658:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),s=["components"],i={title:"Upgrading Workloads",weight:3028,aliases:["/rancher/v2.0-v2.4/en/tasks/workloads/upgrade-workloads/","/rancher/v2.0-v2.4/en/k8s-in-rancher/workloads/upgrade-workloads"]},u=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",title:"Upgrading Workloads",description:"When a new version of an application image is released on Docker Hub, you can upgrade any workloads running a previous version of the application to the new one.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",permalink:"/rancher-docs/2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Upgrading Workloads",weight:3028,aliases:["/rancher/v2.0-v2.4/en/tasks/workloads/upgrade-workloads/","/rancher/v2.0-v2.4/en/k8s-in-rancher/workloads/upgrade-workloads"]},sidebar:"tutorialSidebar",previous:{title:"Rolling Back Workloads",permalink:"/rancher-docs/2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},next:{title:"Adding a Sidecar",permalink:"/rancher-docs/2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"}},d={},l=[],c={toc:l};function g(e){var r=e.components,t=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a new version of an application image is released on Docker Hub, you can upgrade any workloads running a previous version of the application to the new one."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, open the project running the workload you want to upgrade.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the workload that you want to upgrade and select ",(0,a.kt)("strong",{parentName:"p"},"Vertical ","\u22ee"," (... ) > Edit"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the ",(0,a.kt)("strong",{parentName:"p"},"Docker Image")," to the updated version of the application image on Docker Hub.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update any other options that you want to change.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review and edit the workload's ",(0,a.kt)("strong",{parentName:"p"},"Scaling/Upgrade")," policy."),(0,a.kt)("p",{parentName:"li"},"These options control how the upgrade rolls out to containers that are currently running. For example, for scalable deployments, you can choose whether you want to stop old pods before deploying new ones, or vice versa, as well as the upgrade batch size.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Upgrade"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The workload begins upgrading its containers, per your specifications. Note that scaling up the deployment or updating the upgrade/scaling policy won't result in the pods recreation."))}g.isMDXComponent=!0}}]);