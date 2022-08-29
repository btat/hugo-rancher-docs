"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18846],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Installing and Configuring kubectl",weight:100},c=void 0,u={unversionedId:"faq/install-and-configure-kubectl",id:"faq/install-and-configure-kubectl",title:"Installing and Configuring kubectl",description:"kubectl is a CLI utility for running commands against Kubernetes clusters. It's required for many maintenance and administrative tasks in Rancher 2.x.",source:"@site/docs/faq/install-and-configure-kubectl.md",sourceDirName:"faq",slug:"/faq/install-and-configure-kubectl",permalink:"/rancher-docs/docs/faq/install-and-configure-kubectl",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/faq/install-and-configure-kubectl.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Installing and Configuring kubectl",weight:100},sidebar:"tutorialSidebar",previous:{title:"Deprecated Features in Rancher",permalink:"/rancher-docs/docs/faq/deprecated-features-in-v2.5"},next:{title:"Dockershim",permalink:"/rancher-docs/docs/faq/dockershim"}},s={},p=[{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is a CLI utility for running commands against Kubernetes clusters. It's required for many maintenance and administrative tasks in Rancher 2.x."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl Installation")," for installation on your operating system."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"When you create a Kubernetes cluster with RKE, RKE creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml")," in the local directory that contains credentials to connect to your new cluster with tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"helm"),"."),(0,o.kt)("p",null,"You can copy this file as ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," or if you are working with multiple Kubernetes clusters, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environmental variable to the path of ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_cluster.yml\n")),(0,o.kt)("p",null,"Test your connectivity with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," and see if you can get the list of nodes back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get nodes\n NAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.10.1\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.10.1\n")))}f.isMDXComponent=!0}}]);