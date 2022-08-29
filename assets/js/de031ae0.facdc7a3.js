"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45169],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Helm Version Requirements",weight:3,aliases:["/rancher/v2.5/en/installation/options/helm-version","/rancher/v2.5/en/installation/options/helm2","/rancher/v2.5/en/installation/options/helm2/helm-init","/rancher/v2.5/en/installation/options/helm2/helm-rancher","/rancher/v2.x/en/installation/resources/helm-version/"]},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/helm-version-requirements",id:"version-2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements",title:"Helm Version Requirements",description:"This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/helm-version-requirements",permalink:"/rancher-docs/2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Helm Version Requirements",weight:3,aliases:["/rancher/v2.5/en/installation/options/helm-version","/rancher/v2.5/en/installation/options/helm2","/rancher/v2.5/en/installation/options/helm2/helm-init","/rancher/v2.5/en/installation/options/helm2/helm-rancher","/rancher/v2.x/en/installation/resources/helm-version/"]},sidebar:"tutorialSidebar",previous:{title:"Choosing a Rancher Version",permalink:"/rancher-docs/2.5/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},next:{title:"Adding TLS Secrets",permalink:"/rancher-docs/2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets"}},u={},h=[],m={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The installation instructions have been updated for Helm 3. For migration of installs started with Helm 2, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 Migration Docs.")," ",(0,a.kt)("a",{parentName:"p",href:"installation/options/helm2"},"This section")," provides a copy of the older high-availability Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm v3.2.x or higher is required to install or upgrade Rancher v2.5."),(0,a.kt)("li",{parentName:"ul"},"Helm v2.16.0 or higher is required for Kubernetes v1.16. For the default Kubernetes version, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke/releases"},"release notes")," for the version of RKE that you are using."),(0,a.kt)("li",{parentName:"ul"},"Helm v2.15.0 should not be used, because of an issue with converting/comparing numbers."),(0,a.kt)("li",{parentName:"ul"},"Helm v2.12.0 should not be used, because of an issue with ",(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager"),".")))}p.isMDXComponent=!0}}]);