"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92657],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Installing Rancher on Azure Kubernetes Service",shortTitle:"AKS",weight:3},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",title:"Installing Rancher on Azure Kubernetes Service",description:"This page covers how to install Rancher on Microsoft's Azure Kubernetes Service (AKS).",source:"@site/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",permalink:"/rancher-docs/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Installing Rancher on Azure Kubernetes Service",shortTitle:"AKS",weight:3},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher on Amazon EKS",permalink:"/rancher-docs/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},next:{title:"Installing Rancher on a Google Kubernetes Engine Cluster",permalink:"/rancher-docs/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"}},u={},p=[],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page covers how to install Rancher on Microsoft's Azure Kubernetes Service (AKS)."),(0,o.kt)("p",null,"The guide uses command line tools to provision an AKS cluster with an ingress. If you prefer to provision your cluster using the Azure portal, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal"},"official documentation"),"."),(0,o.kt)("p",null,"If you already have an AKS Kubernetes cluster, skip to the step about ",(0,o.kt)("a",{parentName:"p",href:"#5-install-an-ingress"},"installing an ingress.")," Then install the Rancher Helm chart following the instructions on ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/docs/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Deploying to Microsoft Azure will incur charges."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Microsoft Azure Account"),": A Microsoft Azure Account is required to create resources for deploying Rancher and Kubernetes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription#create-a-subscription-in-the-azure-portal"},"Microsoft Azure Subscription"),": Use this link to follow a tutorial to create a Microsoft Azure subscription if you don't have one yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant"},"Micsoroft Azure Tenant"),": Use this link and follow instructions to create a Microsoft Azure tenant."),(0,o.kt)("li",{parentName:"ul"},"Your subscription has sufficient quota for at least 2 vCPUs. For details on Rancher server resource requirements, refer to ",(0,o.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/installation-requirements#rke-and-hosted-kubernetes"},"this section")),(0,o.kt)("li",{parentName:"ul"},"When installing Rancher with Helm in Azure, use the L7 load balancer to avoid networking issues. For more information, refer to the documentation on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations"},"Azure load balancer limitations"),".")),(0,o.kt)("h1",{id:"1-prepare-your-workstation"},"1. Prepare your Workstation"),(0,o.kt)("p",null,"Install the following command line tools on your workstation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Azure CLI, ",(0,o.kt)("strong",{parentName:"li"},"az:")," For help, refer to these ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/"},"installation steps.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kubectl:")," For help, refer to these ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"installation steps.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helm:")," For help, refer to these ",(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"installation steps."))),(0,o.kt)("h1",{id:"2-create-a-resource-group"},"2. Create a Resource Group"),(0,o.kt)("p",null,"After installing the CLI, you will need to log in with your Azure account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az login\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"resource group")," to hold all relevant resources for your cluster. Use a location that applies to your use case."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az group create --name rancher-rg --location eastus\n")),(0,o.kt)("h1",{id:"3-create-the-aks-cluster"},"3. Create the AKS Cluster"),(0,o.kt)("p",null,"To create an AKS cluster, run the following command. Use a VM size that applies to your use case. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"this article")," for available sizes and options. When choosing a Kubernetes version, be sure to first consult the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"support matrix")," to find the highest version of Kubernetes that has been validated for your Rancher version."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the version of Kubernetes is updated to v1.22 or later, the version of ingress-nginx would also need to be ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/#faq-migration-to-apiversion-networkingk8siov1"},"updated"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az aks create \\\n  --resource-group rancher-rg \\\n  --name rancher-server \\\n  --kubernetes-version <VERSION> \\\n  --node-count 3 \\\n  --node-vm-size Standard_D2_v3\n")),(0,o.kt)("p",null,"The cluster will take some time to be deployed."),(0,o.kt)("h1",{id:"4-get-access-credentials"},"4. Get Access Credentials"),(0,o.kt)("p",null,"After the cluster is deployed, get the access credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"az aks get-credentials --resource-group rancher-rg --name rancher-server\n")),(0,o.kt)("p",null,"This command merges your cluster's credentials into the existing kubeconfig and allows ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to interact with the cluster."),(0,o.kt)("h1",{id:"5-install-an-ingress"},"5. Install an Ingress"),(0,o.kt)("p",null,"The cluster needs an Ingress so that Rancher can be accessed from outside the cluster. Installing an Ingress requires allocating a public IP address. Ensure you have sufficient quota, otherwise it will fail to assign the IP address. Limits for public IP addresses are applicable at a regional level per subscription."),(0,o.kt)("p",null,"The following command installs an ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller")," with a Kubernetes load balancer service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 3.12.0 \\\n  --create-namespace\n")),(0,o.kt)("h1",{id:"6-get-load-balancer-ip"},"6. Get Load Balancer IP"),(0,o.kt)("p",null,"To get the address of the load balancer, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,o.kt)("p",null,"The result should look similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                     \n AGE\ningress-nginx-controller   LoadBalancer   10.0.116.18    40.31.180.83   80:31229/TCP,443:31050/TCP  \n 67s\n")),(0,o.kt)("p",null,"Save the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"."),(0,o.kt)("h1",{id:"7-set-up-dns"},"7. Set up DNS"),(0,o.kt)("p",null,"External traffic to the Rancher server will need to be directed at the load balancer you created."),(0,o.kt)("p",null,"Set up a DNS to point at the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," that you saved. This DNS will be used as the Rancher server URL."),(0,o.kt)("p",null,"There are many valid ways to set up the DNS. For help, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/dns/"},"Azure DNS documentation")),(0,o.kt)("h1",{id:"8-install-the-rancher-helm-chart"},"8. Install the Rancher Helm Chart"),(0,o.kt)("p",null,"Next, install the Rancher Helm chart by following the instructions on ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/docs/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")," The Helm instructions are the same for installing Rancher on any Kubernetes distribution."),(0,o.kt)("p",null,"Use that DNS name from the previous step as the Rancher server URL when you install Rancher. It can be passed in as a Helm option. For example, if the DNS name is ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),", you could run the Helm installation command with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org"),"."))}d.isMDXComponent=!0}}]);