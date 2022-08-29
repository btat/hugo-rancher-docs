"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55610],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(r),h=i,d=f["".concat(u,".").concat(h)]||f[h]||p[h]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],a={title:"Creating a Nutanix AOS Cluster",shortTitle:"Nutanix",description:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225},u=void 0,c={unversionedId:"pages-for-subheaders/nutanix",id:"pages-for-subheaders/nutanix",title:"Creating a Nutanix AOS Cluster",description:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",source:"@site/docs/pages-for-subheaders/nutanix.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/nutanix",permalink:"/rancher-docs/docs/pages-for-subheaders/nutanix",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/pages-for-subheaders/nutanix.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Creating a Nutanix AOS Cluster",shortTitle:"Nutanix",description:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a Nutanix AOS (AHV) cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225},sidebar:"tutorialSidebar",previous:{title:"Creating a vSphere Virtual Machine Template",permalink:"/rancher-docs/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template"},next:{title:"Provisioning Kubernetes Clusters in Nutanix AOS",permalink:"/rancher-docs/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"}},l={},p=[],f={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nutanix.com/products/acropolis"},"Nutanix Acropolis Operating System")," (Nutanix AOS) is an operating system for the Nutanix hyper-converged infrastructure platform. AOS comes with a built-in hypervisor called ",(0,o.kt)("a",{parentName:"p",href:"https://www.nutanix.com/products/ahv"},"Acropolis Hypervisor"),", or AHV. By using Rancher with Nutanix AOS (AHV), you can bring cloud operations on-premises."),(0,o.kt)("p",null,"Rancher can provision nodes in AOS (AHV) and install Kubernetes on them. When creating a Kubernetes cluster in AOS, Rancher first provisions the specified number of virtual machines by communicating with the Prism Central API. Then it installs Kubernetes on top of the VMs."),(0,o.kt)("p",null,"A Nutanix cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"cluster-provisioning/rke-clusters/node-pools/nutanicluster-provisioning/rke-clusters/node-pools/nutanix/provisioning-nutanix-clusters/#creating-a-nutanix-aos-cluster"},"Creating a Nutanix Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"cluster-provisioning/rke-clusters/node-pools/nutanicluster-provisioning/rke-clusters/node-pools/nutanix/provisioning-nutanix-clusters"},"Provisioning Storage"))),(0,o.kt)("h1",{id:"creating-a-nutanix-cluster"},"Creating a Nutanix Cluster"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos"},"this section,")," you'll learn how to use Rancher to install an ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Nutanix AOS."))}h.isMDXComponent=!0}}]);