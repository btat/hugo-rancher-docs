"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77714],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7466:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=r(12209),i=["components"],l={title:"Overview",weight:1},c=void 0,u={unversionedId:"getting-started/introduction/overview",id:"getting-started/introduction/overview",title:"Overview",description:"Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams.",source:"@site/docs/getting-started/introduction/overview.md",sourceDirName:"getting-started/introduction",slug:"/getting-started/introduction/overview",permalink:"/rancher-docs/docs/getting-started/introduction/overview",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/getting-started/introduction/overview.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Overview",weight:1},sidebar:"tutorialSidebar",previous:{title:"introduction",permalink:"/rancher-docs/docs/pages-for-subheaders/introduction"},next:{title:"what-are-divio-docs",permalink:"/rancher-docs/docs/getting-started/introduction/what-are-divio-docs"}},d={},p=[{value:"Authorization and Role-Based Access Control",id:"authorization-and-role-based-access-control",level:3},{value:"Working with Kubernetes",id:"working-with-kubernetes",level:3},{value:"Working with Cloud Infrastructure",id:"working-with-cloud-infrastructure",level:3},{value:"Cluster Visibility",id:"cluster-visibility",level:3}],g={toc:p};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams."),(0,s.kt)("h1",{id:"run-kubernetes-everywhere"},"Run Kubernetes Everywhere"),(0,s.kt)("p",null,"Kubernetes has become the container orchestration standard. Most cloud and virtualization vendors now offer it as standard infrastructure. Rancher users have the choice of creating Kubernetes clusters with Rancher Kubernetes Engine (RKE) or cloud Kubernetes services, such as GKE, AKS, and EKS. Rancher users can also import and manage their existing Kubernetes clusters created using any Kubernetes distribution or installer."),(0,s.kt)("h1",{id:"meet-it-requirements"},"Meet IT Requirements"),(0,s.kt)("p",null,"Rancher supports centralized authentication, access control, and monitoring for all Kubernetes clusters under its control. For example, you can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use your Active Directory credentials to access Kubernetes clusters hosted by cloud vendors, such as GKE."),(0,s.kt)("li",{parentName:"ul"},"Setup and enforce access control and security policies across all users, groups, projects, clusters, and clouds."),(0,s.kt)("li",{parentName:"ul"},"View the health and capacity of your Kubernetes clusters from a single-pane-of-glass.")),(0,s.kt)("h1",{id:"empower-devops-teams"},"Empower DevOps Teams"),(0,s.kt)("p",null,"Rancher provides an intuitive user interface for DevOps engineers to manage their application workload. The user does not need to have in-depth knowledge of Kubernetes concepts to start using Rancher. Rancher catalog contains a set of useful DevOps tools. Rancher is certified with a wide selection of cloud native ecosystem products, including, for example, security tools, monitoring systems, container registries, and storage and networking drivers."),(0,s.kt)("p",null,"The following figure illustrates the role Rancher plays in IT and DevOps organizations. Each team deploys their applications on the public or private clouds they choose. IT administrators gain visibility and enforce policies across all users, clusters, and clouds."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Platform",src:r(76698).Z,width:"791",height:"245"})),(0,s.kt)("h1",{id:"features-of-the-rancher-api-server"},"Features of the Rancher API Server"),(0,s.kt)("p",null,"The Rancher API server is built on top of an embedded Kubernetes API server and an etcd database. It implements the following functionalities:"),(0,s.kt)("h3",{id:"authorization-and-role-based-access-control"},"Authorization and Role-Based Access Control"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"User management:")," The Rancher API server ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/about-authentication"},"manages user identities")," that correspond to external authentication providers like Active Directory or GitHub, in addition to local users."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Authorization:")," The Rancher API server manages ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/manage-role-based-access-control-rbac"},"access control")," and ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"security")," policies.")),(0,s.kt)("h3",{id:"working-with-kubernetes"},"Working with Kubernetes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Provisioning Kubernetes clusters:")," The Rancher API server can ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provision Kubernetes")," on existing nodes, or perform ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Kubernetes upgrades.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Catalog management:")," Rancher provides the ability to use a ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/helm-charts-in-rancher"},"catalog of Helm charts")," that make it easy to repeatedly deploy applications."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Managing projects:")," A project is a group of multiple namespaces and access control policies within a cluster. A project is a Rancher concept, not a Kubernetes concept, which allows you to manage multiple namespaces as a group and perform Kubernetes operations in them. The Rancher UI provides features for ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/manage-projects"},"project administration")," and for ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/kubernetes-resources-setup"},"managing applications within projects.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Pipelines:")," Setting up a ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipeline")," can help developers deliver new software as quickly and efficiently as possible. Within Rancher, you can configure pipelines for each of your Rancher projects."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Istio:")," Our ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/istio"},"integration with Istio")," is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing.")),(0,s.kt)("h3",{id:"working-with-cloud-infrastructure"},"Working with Cloud Infrastructure"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Tracking nodes:")," The Rancher API server tracks identities of all the ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"nodes")," in all clusters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Setting up infrastructure:"),"  When configured to use a cloud provider, Rancher can dynamically provision ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"new nodes")," and ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/docs/pages-for-subheaders/create-kubernetes-persistent-storage"},"persistent storage")," in the cloud.")),(0,s.kt)("h3",{id:"cluster-visibility"},"Cluster Visibility"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Logging:")," Rancher can integrate with a variety of popular logging services and tools that exist outside of your Kubernetes clusters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Monitoring:")," Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Alerting:")," To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned.")),(0,s.kt)("h1",{id:"editing-downstream-clusters-with-rancher"},"Editing Downstream Clusters with Rancher"),(0,s.kt)("p",null,"The options and settings available for an existing cluster change based on the method that you used to provision it. For example, only clusters ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/docs/pages-for-subheaders/launch-kubernetes-with-rancher"},"provisioned by RKE")," have ",(0,s.kt)("strong",{parentName:"p"},"Cluster Options")," available for editing."),(0,s.kt)("p",null,"After a cluster is created with Rancher, a cluster administrator can manage cluster membership, enable pod security policies, and manage node pools, among ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/docs/pages-for-subheaders/cluster-configuration"},"other options.")),(0,s.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,s.kt)(o.ZP,{mdxType:"ClusterCapabilitiesTable"}))}m.isMDXComponent=!0},12209:function(e,t,r){r.d(t,{ZP:function(){return l}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],i={toc:[]};function l(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Action"),(0,s.kt)("th",{parentName:"tr",align:null},"Rancher Launched Kubernetes Clusters"),(0,s.kt)("th",{parentName:"tr",align:null},"EKS, GKE and AKS Clusters",(0,s.kt)("sup",null,"1")),(0,s.kt)("th",{parentName:"tr",align:null},"Other Hosted Kubernetes Clusters"),(0,s.kt)("th",{parentName:"tr",align:null},"Non-EKS or GKE Registered Clusters"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713",(0,s.kt)("sup",null,"2"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713",(0,s.kt)("sup",null,"3"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/pages-for-subheaders/helm-charts-in-rancher"},"Using App Catalogs")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Configuring Tools (",(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/pages-for-subheaders/monitoring-and-alerting"},"Alerts, Notifiers, Monitoring"),", ",(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/pages-for-subheaders/logging"},"Logging"),", ",(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/pages-for-subheaders/istio"},"Istio"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"security/security-scan/"},"Running Security Scans")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Use existing configuration to create additional clusters")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Ability to ",(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"backup")," and ",(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"restore")," Rancher-launched clusters"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713",(0,s.kt)("sup",null,"4"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Registered GKE and EKS clusters have the same options available as GKE and EKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Cluster configuration options can't be edited for registered clusters, except for ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"K3s and RKE2 clusters."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery."))))}l.isMDXComponent=!0},76698:function(e,t,r){t.Z=r.p+"assets/images/platform-9c0c4130a7a0828898dbc7af56f76df7.png"}}]);