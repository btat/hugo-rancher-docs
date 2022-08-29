"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79705],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},87148:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Tips for Scaling, Security and Reliability",weight:101,aliases:["/rancher/v2.0-v2.4/en/best-practices/management","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/management","/rancher/v2.x/en/best-practices/management/","/rancher/v2.x/en/best-practices/v2.0-v2.4/management/"]},l=void 0,c={unversionedId:"reference-guides/best-practices/management",id:"version-2.0-2.4/reference-guides/best-practices/management",title:"Tips for Scaling, Security and Reliability",description:"Rancher allows you to set up numerous combinations of configurations. Some configurations are more appropriate for development and testing, while there are other best practices for production environments for maximum availability and fault tolerance. The following best practices should be followed for production.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/best-practices/management.md",sourceDirName:"reference-guides/best-practices",slug:"/reference-guides/best-practices/management",permalink:"/rancher-docs/2.0-2.4/reference-guides/best-practices/management",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.0-2.4/reference-guides/best-practices/management.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Tips for Scaling, Security and Reliability",weight:101,aliases:["/rancher/v2.0-v2.4/en/best-practices/management","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/management","/rancher/v2.x/en/best-practices/management/","/rancher/v2.x/en/best-practices/v2.0-v2.4/management/"]},sidebar:"tutorialSidebar",previous:{title:"Tips for Running Rancher",permalink:"/rancher-docs/2.0-2.4/reference-guides/best-practices/deployment-types"},next:{title:"Architecture",permalink:"/rancher-docs/2.0-2.4/pages-for-subheaders/rancher-manager-architecture"}},u={},d=[{value:"Run Rancher on a Supported OS and Supported Docker Version",id:"run-rancher-on-a-supported-os-and-supported-docker-version",level:3},{value:"Upgrade Your Kubernetes Version",id:"upgrade-your-kubernetes-version",level:3},{value:"Kill Pods Randomly During Testing",id:"kill-pods-randomly-during-testing",level:3},{value:"Deploy Complicated Clusters with Terraform",id:"deploy-complicated-clusters-with-terraform",level:3},{value:"Upgrade Rancher in a Staging Environment",id:"upgrade-rancher-in-a-staging-environment",level:3},{value:"Renew Certificates Before they Expire",id:"renew-certificates-before-they-expire",level:3},{value:"Enable Recurring Snapshots for Backing up and Restoring the Cluster",id:"enable-recurring-snapshots-for-backing-up-and-restoring-the-cluster",level:3},{value:"Provision Clusters with Rancher",id:"provision-clusters-with-rancher",level:3},{value:"Use Stable and Supported Rancher Versions for Production",id:"use-stable-and-supported-rancher-versions-for-production",level:3},{value:"Use Low-latency Networks for Communication Within Clusters",id:"use-low-latency-networks-for-communication-within-clusters",level:3},{value:"Allow Rancher to Communicate Directly with Clusters",id:"allow-rancher-to-communicate-directly-with-clusters",level:3},{value:"Use One Kubernetes Role Per Host",id:"use-one-kubernetes-role-per-host",level:3},{value:"Run the Control Plane and etcd on Virtual Machines",id:"run-the-control-plane-and-etcd-on-virtual-machines",level:3},{value:"Use at Least Three etcd Nodes",id:"use-at-least-three-etcd-nodes",level:3},{value:"Use at Least Three Control Plane Nodes",id:"use-at-least-three-control-plane-nodes",level:3},{value:"Monitor Your Cluster",id:"monitor-your-cluster",level:3},{value:"Update Rancher with Security Patches",id:"update-rancher-with-security-patches",level:3},{value:"Report Security Issues Directly to Rancher",id:"report-security-issues-directly-to-rancher",level:3},{value:"Only Upgrade One Component at a Time",id:"only-upgrade-one-component-at-a-time",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Project Isolation",id:"project-isolation",level:3},{value:"Resource Limits",id:"resource-limits",level:3},{value:"Resource Requirements",id:"resource-requirements",level:3},{value:"Consider fault domains",id:"consider-fault-domains",level:3},{value:"Upgrade risks",id:"upgrade-risks",level:3},{value:"Resource Efficiency",id:"resource-efficiency",level:3},{value:"Use a Firewall Between your Hosts and the Internet",id:"use-a-firewall-between-your-hosts-and-the-internet",level:3},{value:"Run Periodic Security Scans",id:"run-periodic-security-scans",level:3}],p={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher allows you to set up numerous combinations of configurations. Some configurations are more appropriate for development and testing, while there are other best practices for production environments for maximum availability and fault tolerance. The following best practices should be followed for production."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips-for-preventing-and-handling-problems"},"Tips for Preventing and Handling Problems")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#network-topology"},"Network Topology")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips-for-scaling-and-reliability"},"Tips for Scaling and Reliability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips-for-security"},"Tips for Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips-for-multi-tenant-clusters"},"Tips for Multi-Tenant Clusters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#class-of-service-and-kubernetes-clusters"},"Class of Service and Kubernetes Clusters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#network-security"},"Network Security"))),(0,a.kt)("h1",{id:"tips-for-preventing-and-handling-problems"},"Tips for Preventing and Handling Problems"),(0,a.kt)("p",null,"These tips can help you solve problems before they happen."),(0,a.kt)("h3",{id:"run-rancher-on-a-supported-os-and-supported-docker-version"},"Run Rancher on a Supported OS and Supported Docker Version"),(0,a.kt)("p",null,"Rancher is container-based and can potentially run on any Linux-based operating system. However, only operating systems listed in the ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/pages-for-subheaders/installation-requirements"},"requirements documentation")," should be used for running Rancher, along with a supported version of Docker. These versions have been most thoroughly tested and can be properly supported by the Rancher Support team."),(0,a.kt)("h3",{id:"upgrade-your-kubernetes-version"},"Upgrade Your Kubernetes Version"),(0,a.kt)("p",null,"Keep your Kubernetes cluster up to date with a recent and supported version. Typically the Kubernetes community will support the current version and previous three minor releases (for example, 1.14.x, 1.13.x, 1.12.x, and 1.11.x). After a new version is released, the third-oldest supported version reaches EOL (End of Life) status. Running on an EOL release can be a risk if a security issues are found and patches are not available. The community typically makes minor releases every quarter (every three months)."),(0,a.kt)("p",null,"Rancher\u2019s SLAs are not community dependent, but as Kubernetes is a community-driven software, the quality of experience will degrade as you get farther away from the community's supported target."),(0,a.kt)("h3",{id:"kill-pods-randomly-during-testing"},"Kill Pods Randomly During Testing"),(0,a.kt)("p",null,"Run chaoskube or a similar mechanism to randomly kill pods in your test environment. This will test the resiliency of your infrastructure and the ability of Kubernetes to self-heal. It's not recommended to run this in your production environment."),(0,a.kt)("h3",{id:"deploy-complicated-clusters-with-terraform"},"Deploy Complicated Clusters with Terraform"),(0,a.kt)("p",null,'Rancher\'s "Add Cluster" UI is preferable for getting started with Kubernetes cluster orchestration or for simple use cases. However, for more complex or demanding use cases, it is recommended to use a CLI/API driven approach. ',(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," is recommended as the tooling to implement this. When you use Terraform with version control and a CI/CD environment, you can have high assurances of consistency and reliability when deploying Kubernetes clusters. This approach also gives you the most customization options."),(0,a.kt)("p",null,"Rancher ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/blog/2019/rancher-2-terraform-provider/"},"maintains a Terraform provider")," for working with Rancher 2.0 Kubernetes. It is called the ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/rancher2/index.html"},"Rancher2 Provider.")),(0,a.kt)("h3",{id:"upgrade-rancher-in-a-staging-environment"},"Upgrade Rancher in a Staging Environment"),(0,a.kt)("p",null,"All upgrades, both patch and feature upgrades, should be first tested on a staging environment before production is upgraded. The more closely the staging environment mirrors production, the higher chance your production upgrade will be successful."),(0,a.kt)("h3",{id:"renew-certificates-before-they-expire"},"Renew Certificates Before they Expire"),(0,a.kt)("p",null,"Multiple people in your organization should set up calendar reminders for certificate renewal. Consider renewing the certificate two weeks to one month in advance. If you have multiple certificates to track, consider using ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/reference-guides/rancher-cluster-tools"},"monitoring and alerting mechanisms")," to track certificate expiration."),(0,a.kt)("p",null,"Rancher-provisioned Kubernetes clusters will use certificates that expire in one year. Clusters provisioned by other means may have a longer or shorter expiration."),(0,a.kt)("p",null,"Certificates can be renewed for Rancher-provisioned clusters ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"through the Rancher user interface"),"."),(0,a.kt)("h3",{id:"enable-recurring-snapshots-for-backing-up-and-restoring-the-cluster"},"Enable Recurring Snapshots for Backing up and Restoring the Cluster"),(0,a.kt)("p",null,"Make sure etcd recurring snapshots are enabled. Extend the snapshot retention to a period of time that meets your business needs. In the event of a catastrophic failure or deletion of data, this may be your only recourse for recovery. For details about configuring snapshots, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/"},"RKE documentation")," or the ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},"Rancher documentation on backups"),"."),(0,a.kt)("h3",{id:"provision-clusters-with-rancher"},"Provision Clusters with Rancher"),(0,a.kt)("p",null,"When possible, use Rancher to provision your Kubernetes cluster rather than importing a cluster. This will ensure the best compatibility and supportability."),(0,a.kt)("h3",{id:"use-stable-and-supported-rancher-versions-for-production"},"Use Stable and Supported Rancher Versions for Production"),(0,a.kt)("p",null,'Do not upgrade production environments to alpha, beta, release candidate (rc), or "latest" versions. These early releases are often not stable and may not have a future upgrade path.'),(0,a.kt)("p",null,"When installing or upgrading a non-production environment to an early release, anticipate problems such as features not working, data loss, outages, and inability to upgrade without a reinstall."),(0,a.kt)("p",null,'Make sure the feature version you are upgrading to is considered "stable" as determined by Rancher. Use the beta, release candidate, and "latest" versions in a testing, development, or demo environment to try out new features. Feature version upgrades, for example 2.1.x to 2.2.x, should be considered as and when they are released. Some bug fixes and most features are not back ported into older versions.'),(0,a.kt)("p",null,"Keep in mind that Rancher does End of Life support for old versions, so you will eventually want to upgrade if you want to continue to receive patches."),(0,a.kt)("p",null,"For more detail on what happens during the Rancher product lifecycle, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Support Maintenance Terms"),"."),(0,a.kt)("h1",{id:"network-topology"},"Network Topology"),(0,a.kt)("p",null,"These tips can help Rancher work more smoothly with your network."),(0,a.kt)("h3",{id:"use-low-latency-networks-for-communication-within-clusters"},"Use Low-latency Networks for Communication Within Clusters"),(0,a.kt)("p",null,"Kubernetes clusters are best served by low-latency networks. This is especially true for the control plane components and etcd, where lots of coordination and leader election traffic occurs. Networking between Rancher server and the Kubernetes clusters it manages are more tolerant of latency."),(0,a.kt)("h3",{id:"allow-rancher-to-communicate-directly-with-clusters"},"Allow Rancher to Communicate Directly with Clusters"),(0,a.kt)("p",null,"Limit the use of proxies or load balancers between Rancher server and Kubernetes clusters. As Rancher is maintaining a long-lived web sockets connection, these intermediaries can interfere with the connection lifecycle as they often weren't configured with this use case in mind."),(0,a.kt)("h1",{id:"tips-for-scaling-and-reliability"},"Tips for Scaling and Reliability"),(0,a.kt)("p",null,"These tips can help you scale your cluster more easily."),(0,a.kt)("h3",{id:"use-one-kubernetes-role-per-host"},"Use One Kubernetes Role Per Host"),(0,a.kt)("p",null,"Separate the etcd, control plane, and worker roles onto different hosts. Don't assign multiple roles to the same host, such as a worker and control plane. This will give you maximum scalability."),(0,a.kt)("h3",{id:"run-the-control-plane-and-etcd-on-virtual-machines"},"Run the Control Plane and etcd on Virtual Machines"),(0,a.kt)("p",null,"Run your etcd and control plane nodes on virtual machines where you can scale vCPU and memory easily if needed in the future."),(0,a.kt)("h3",{id:"use-at-least-three-etcd-nodes"},"Use at Least Three etcd Nodes"),(0,a.kt)("p",null,"Provision 3 or 5 etcd nodes. Etcd requires a quorum to determine a leader by the majority of nodes, therefore it is not recommended to have clusters of even numbers. Three etcd nodes is generally sufficient for smaller clusters and five etcd nodes for large clusters."),(0,a.kt)("h3",{id:"use-at-least-three-control-plane-nodes"},"Use at Least Three Control Plane Nodes"),(0,a.kt)("p",null,"Provision three or more control plane nodes. Some control plane components, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),", run in ",(0,a.kt)("a",{parentName:"p",href:"https://www.jscape.com/blog/active-active-vs-active-passive-high-availability-cluster"},"active-active")," mode and will give you more scalability. Other components such as kube-scheduler and kube-controller run in active-passive mode (leader elect) and give you more fault tolerance."),(0,a.kt)("h3",{id:"monitor-your-cluster"},"Monitor Your Cluster"),(0,a.kt)("p",null,"Closely monitor and scale your nodes as needed. You should ",(0,a.kt)("a",{parentName:"p",href:"monitoring-alerting/legacy/monitoring/cluster-monitoring/"},"enable cluster monitoring")," and use the Prometheus metrics and Grafana visualization options as a starting point."),(0,a.kt)("h1",{id:"tips-for-security"},"Tips for Security"),(0,a.kt)("p",null,"Below are some basic tips for increasing security in Rancher. For more detailed information about securing your cluster, you can refer to these resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rancher's ",(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.0-2.4/pages-for-subheaders/rancher-security"},"security documentation and Kubernetes cluster hardening guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/blog/2019/2019-01-17-101-more-kubernetes-security-best-practices/"},"101 More Security Best Practices for Kubernetes"))),(0,a.kt)("h3",{id:"update-rancher-with-security-patches"},"Update Rancher with Security Patches"),(0,a.kt)("p",null,"Keep your Rancher installation up to date with the latest patches. Patch updates have important software fixes and sometimes have security fixes. When patches with security fixes are released, customers with Rancher licenses are notified by e-mail. These updates are also posted on Rancher's ",(0,a.kt)("a",{parentName:"p",href:"https://forums.rancher.com/"},"forum"),"."),(0,a.kt)("h3",{id:"report-security-issues-directly-to-rancher"},"Report Security Issues Directly to Rancher"),(0,a.kt)("p",null,"If you believe you have uncovered a security-related problem in Rancher, please communicate this immediately and discretely to the Rancher team (",(0,a.kt)("a",{parentName:"p",href:"mailto:security@rancher.com"},"security@rancher.com"),"). Posting security issues on public forums such as Twitter, Rancher Slack, GitHub, etc. can potentially compromise security for all Rancher customers. Reporting security issues discretely allows Rancher to assess and mitigate the problem. Security patches are typically given high priority and released as quickly as possible."),(0,a.kt)("h3",{id:"only-upgrade-one-component-at-a-time"},"Only Upgrade One Component at a Time"),(0,a.kt)("p",null,"In addition to Rancher software updates, closely monitor security fixes for related software, such as Docker, Linux, and any libraries used by your workloads. For production environments, try to avoid upgrading too many entities during a single maintenance window. Upgrading multiple components can make it difficult to root cause an issue in the event of a failure. As business requirements allow, upgrade one component at a time."),(0,a.kt)("h1",{id:"tips-for-multi-tenant-clusters"},"Tips for Multi-Tenant Clusters"),(0,a.kt)("h3",{id:"namespaces"},"Namespaces"),(0,a.kt)("p",null,"Each tenant should have their own unique namespaces within the cluster. This avoids naming conflicts and allows resources to be only visible to their owner through use of RBAC policy"),(0,a.kt)("h3",{id:"project-isolation"},"Project Isolation"),(0,a.kt)("p",null,"Use Rancher's Project Isolation to automatically generate Network Policy between Projects (sets of Namespaces). This further protects workloads from interference"),(0,a.kt)("h3",{id:"resource-limits"},"Resource Limits"),(0,a.kt)("p",null,"Enforce use of sane resource limit definitions for every deployment in your cluster. This not only protects the owners of the deployment, but the neighboring resources from other tenants as well. Remember, namespaces do not isolate at the node level, so over-consumption of resources on a node affects other namespace deployments. Admission controllers can be written to require resource limit definitions"),(0,a.kt)("h3",{id:"resource-requirements"},"Resource Requirements"),(0,a.kt)("p",null,"Enforce use of resource requirement definitions for each deployment in your cluster. This enables the scheduler to appropriately schedule workloads. Otherwise you will eventually end up with over-provisioned nodes."),(0,a.kt)("h1",{id:"class-of-service-and-kubernetes-clusters"},"Class of Service and Kubernetes Clusters"),(0,a.kt)("p",null,'A class of service describes the expectations around cluster uptime, durability, and duration of maintenance windows. Typically organizations group these characteristics into labels such as "dev" or "prod"'),(0,a.kt)("h3",{id:"consider-fault-domains"},"Consider fault domains"),(0,a.kt)("p",null,'Kubernetes clusters can span multiple classes of service, however it is important to consider the ability for one workload to affect another. Without proper deployment practices such as resource limits, requirements, etc, a deployment that is not behaving well has the potential to impact the health of the cluster. In a "dev" environment it is common for end-users to exercise less caution with deployments, thus increasing the chance of such behavior. Sharing this behavior with your production workload increases risk.'),(0,a.kt)("h3",{id:"upgrade-risks"},"Upgrade risks"),(0,a.kt)("p",null,"Upgrades of Kubernetes are not without risk, the best way to predict the outcome of an upgrade is try it on a cluster of similar load and use case as your production cluster. This is where having non-prod class of service clusters can be advantageous."),(0,a.kt)("h3",{id:"resource-efficiency"},"Resource Efficiency"),(0,a.kt)("p",null,"Clusters can be built with varying degrees of redundancy. In a class of service with low expectations for uptime, resources and cost can be conserved by building clusters without redundant Kubernetes control components. This approach may also free up more budget/resources to increase the redundancy at the production level"),(0,a.kt)("h1",{id:"network-security"},"Network Security"),(0,a.kt)("p",null,"In general, you can use network security best practices in your Rancher and Kubernetes clusters. Consider the following:"),(0,a.kt)("h3",{id:"use-a-firewall-between-your-hosts-and-the-internet"},"Use a Firewall Between your Hosts and the Internet"),(0,a.kt)("p",null,"Firewalls should be used between your hosts and the Internet (or corporate Intranet). This could be enterprise firewall appliances in a datacenter or SDN constructs in the cloud, such as VPCs, security groups, ingress, and egress rules. Try to limit inbound access only to ports and IP addresses that require it. Outbound access can be shut off (air gap) if environment sensitive information that requires this restriction. If available, use firewalls with intrusion detection and DDoS prevention."),(0,a.kt)("h3",{id:"run-periodic-security-scans"},"Run Periodic Security Scans"),(0,a.kt)("p",null,"Run security and penetration scans on your environment periodically. Even with well design infrastructure, a poorly designed microservice could compromise the entire environment."))}h.isMDXComponent=!0}}]);