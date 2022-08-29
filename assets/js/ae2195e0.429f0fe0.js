"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35153],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Other Installation Methods",weight:3,aliases:["/rancher/v2.x/en/installation/other-installation-methods/"]},l=void 0,c={unversionedId:"pages-for-subheaders/other-installation-methods",id:"version-2.5/pages-for-subheaders/other-installation-methods",title:"Other Installation Methods",description:"Air Gapped Installations",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/other-installation-methods.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/other-installation-methods",permalink:"/rancher-docs/2.5/pages-for-subheaders/other-installation-methods",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.5/pages-for-subheaders/other-installation-methods.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Other Installation Methods",weight:3,aliases:["/rancher/v2.x/en/installation/other-installation-methods/"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting the Rancher Server Kubernetes Cluster",permalink:"/rancher-docs/2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},next:{title:"Air Gapped Helm CLI Install",permalink:"/rancher-docs/2.5/pages-for-subheaders/air-gapped-helm-cli-install"}},u={},d=[{value:"Air Gapped Installations",id:"air-gapped-installations",level:3},{value:"Docker Installations",id:"docker-installations",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"air-gapped-installations"},"Air Gapped Installations"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/pages-for-subheaders/air-gapped-helm-cli-install"},"these steps")," to install the Rancher server in an air gapped environment."),(0,o.kt)("p",null,"An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,o.kt)("h3",{id:"docker-installations"},"Docker Installations"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"single-node Docker installation")," is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster using Helm, you install the Rancher server component on a single node using a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,o.kt)("p",null,"The Docker installation is for development and testing environments only. "),(0,o.kt)("p",null,"Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server."),(0,o.kt)("p",null,"For Rancher v2.5+, the Rancher backup operator can be used to migrate Rancher from the single Docker container install to an installation on a high-availability Kubernetes cluster. For details, refer to the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrating Rancher to a new cluster.")))}h.isMDXComponent=!0}}]);