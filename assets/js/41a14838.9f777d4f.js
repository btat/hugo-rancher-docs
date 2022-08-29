"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69872],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Kubernetes Concepts",weight:4},c=void 0,l={unversionedId:"reference-guides/kubernetes-concepts",id:"reference-guides/kubernetes-concepts",title:"Kubernetes Concepts",description:"This page explains concepts related to Kubernetes that are important for understanding how Rancher works. The descriptions below provide a simplified overview of Kubernetes components. For more details, refer to the official documentation on Kubernetes components.",source:"@site/docs/reference-guides/kubernetes-concepts.md",sourceDirName:"reference-guides",slug:"/reference-guides/kubernetes-concepts",permalink:"/rancher-docs/docs/reference-guides/kubernetes-concepts",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/reference-guides/kubernetes-concepts.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Kubernetes Concepts",weight:4},sidebar:"tutorialSidebar",previous:{title:"OpenLDAP Configuration Reference",permalink:"/rancher-docs/docs/reference-guides/configure-openldap/openldap-config-reference"},next:{title:"monitoring-v2-configuration",permalink:"/rancher-docs/docs/pages-for-subheaders/monitoring-v2-configuration"}},u={},d=[{value:"etcd Nodes",id:"etcd-nodes",level:3},{value:"Controlplane Nodes",id:"controlplane-nodes",level:3},{value:"Worker Nodes",id:"worker-nodes",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page explains concepts related to Kubernetes that are important for understanding how Rancher works. The descriptions below provide a simplified overview of Kubernetes components. For more details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"official documentation on Kubernetes components.")),(0,a.kt)("p",null,"This section covers the following topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#about-docker"},"About Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#about-kubernetes"},"About Kubernetes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-a-kubernetes-cluster"},"What is a Kubernetes Cluster?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#roles-for-nodes-in-kubernetes-clusters"},"Roles for Nodes in Kubernetes Clusters"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#etcd-nodes"},"etcd Nodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#controlplane-nodes"},"Controlplane Nodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#worker-nodes"},"Worker Nodes")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#about-helm"},"About Helm"))),(0,a.kt)("h1",{id:"about-docker"},"About Docker"),(0,a.kt)("p",null,"Docker is the container packaging and runtime standard. Developers build container images from Dockerfiles and distribute container images from Docker registries. ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com"},"Docker Hub")," is the most popular public registry. Many organizations also set up private Docker registries. Docker is primarily used to manage containers on individual nodes."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Although Rancher 1.6 supported Docker Swarm clustering technology, it is no longer supported in Rancher 2.x due to the success of Kubernetes."))),(0,a.kt)("h1",{id:"about-kubernetes"},"About Kubernetes"),(0,a.kt)("p",null,"Kubernetes is the container cluster management standard. YAML files specify containers and other resources that form an application. Kubernetes performs functions such as scheduling, scaling, service discovery, health check, secret management, and configuration management."),(0,a.kt)("h1",{id:"what-is-a-kubernetes-cluster"},"What is a Kubernetes Cluster?"),(0,a.kt)("p",null,"A cluster is a group of computers that work together as a single system."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"Kubernetes Cluster")," is a cluster that uses the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes container-orchestration system")," to deploy, maintain, and scale Docker containers, allowing your organization to automate application operations."),(0,a.kt)("h1",{id:"roles-for-nodes-in-kubernetes-clusters"},"Roles for Nodes in Kubernetes Clusters"),(0,a.kt)("p",null,"Each computing resource in a Kubernetes cluster is called a ",(0,a.kt)("em",{parentName:"p"},"node"),". Nodes can be either bare-metal servers or virtual machines. Kubernetes classifies nodes into three types: ",(0,a.kt)("em",{parentName:"p"},"etcd")," nodes, ",(0,a.kt)("em",{parentName:"p"},"control plane")," nodes, and ",(0,a.kt)("em",{parentName:"p"},"worker")," nodes."),(0,a.kt)("p",null,"A Kubernetes cluster consists of at least one etcd, controlplane, and worker node."),(0,a.kt)("h3",{id:"etcd-nodes"},"etcd Nodes"),(0,a.kt)("p",null,"Rancher uses etcd as a data store in both single node and high-availability installations. In Kubernetes, etcd is also a role for nodes that store the cluster state."),(0,a.kt)("p",null,"The state of a Kubernetes cluster is maintained in ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#etcd"},"etcd."),"  The etcd nodes run the etcd database."),(0,a.kt)("p",null,"The etcd database component is a distributed key-value store used as Kubernetes storage for all cluster data, such as cluster coordination and state management. It is recommended to run etcd on multiple nodes so that there's always a backup available for failover. "),(0,a.kt)("p",null,"Although you can run etcd on just one node, etcd requires a majority of nodes, a quorum, to agree on updates to the cluster state. The cluster should always contain enough healthy etcd nodes to form a quorum. For a cluster with n members, a quorum is (n/2)+1. For any odd-sized cluster, adding one node will always increase the number of nodes necessary for a quorum."),(0,a.kt)("p",null,"Three etcd nodes is generally sufficient for smaller clusters and five etcd nodes for large clusters."),(0,a.kt)("h3",{id:"controlplane-nodes"},"Controlplane Nodes"),(0,a.kt)("p",null,"Controlplane nodes run the Kubernetes API server, scheduler, and controller manager. These nodes take care of routine tasks to ensure that your cluster maintains your configuration. Because all cluster data is stored on your etcd nodes, control plane nodes are stateless. You can run control plane on a single node, although three or more nodes are recommended for redundancy. Additionally, a single node can share the control plane and etcd roles."),(0,a.kt)("h3",{id:"worker-nodes"},"Worker Nodes"),(0,a.kt)("p",null,"Each ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"worker node")," runs the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kubelets:")," An agent that monitors the state of the node, ensuring your containers are healthy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Workloads:")," The containers and pods that hold your apps, as well as other types of deployments.")),(0,a.kt)("p",null,"Worker nodes also run storage and networking drivers, and ingress controllers when required. You create as many worker nodes as necessary to run your  ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/docs/pages-for-subheaders/workloads-and-pods"},"workloads"),"."),(0,a.kt)("h1",{id:"about-helm"},"About Helm"),(0,a.kt)("p",null,"For high-availability installations of Rancher, Helm is the tool used to install Rancher on a Kubernetes cluster."),(0,a.kt)("p",null,"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh"},"https://helm.sh/"),"."),(0,a.kt)("p",null,"For more information on service accounts and cluster role binding, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes documentation.")))}m.isMDXComponent=!0}}]);