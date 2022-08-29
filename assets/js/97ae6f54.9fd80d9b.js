"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90475],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47572:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Monitoring and Alerting",shortTitle:"Monitoring/Alerting",description:"Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Learn about the scope of monitoring and how to enable cluster monitoring",weight:13,aliases:["/rancher/v2.x/en/monitoring-alerting/","/rancher/v2.x/en/monitoring-alerting/v2.5/"]},l=void 0,u={unversionedId:"pages-for-subheaders/monitoring-and-alerting",id:"version-2.5/pages-for-subheaders/monitoring-and-alerting",title:"Monitoring and Alerting",description:"Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Learn about the scope of monitoring and how to enable cluster monitoring",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/monitoring-and-alerting.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-and-alerting",permalink:"/rancher-docs/2.5/pages-for-subheaders/monitoring-and-alerting",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.5/pages-for-subheaders/monitoring-and-alerting.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Monitoring and Alerting",shortTitle:"Monitoring/Alerting",description:"Prometheus lets you view metrics from your different Rancher and Kubernetes objects. Learn about the scope of monitoring and how to enable cluster monitoring",weight:13,aliases:["/rancher/v2.x/en/monitoring-alerting/","/rancher/v2.x/en/monitoring-alerting/v2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Outputs and ClusterOutputs",permalink:"/rancher-docs/2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},next:{title:"How Monitoring Works",permalink:"/rancher-docs/2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"}},p={},c=[{value:"Features",id:"features",level:3},{value:"Built-in Dashboards",id:"built-in-dashboards",level:3},{value:"Default Metrics Exporters",id:"default-metrics-exporters",level:3},{value:"Default Alerts",id:"default-alerts",level:3},{value:"Components Exposed in the Rancher UI",id:"components-exposed-in-the-rancher-ui",level:3},{value:"Configuring Monitoring Resources in Rancher",id:"configuring-monitoring-resources-in-rancher",level:3},{value:"Configuring Helm Chart Options",id:"configuring-helm-chart-options",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application, you can quickly deploy leading open-source monitoring and alerting solutions onto your cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#features"},"Features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-monitoring-works"},"How Monitoring Works")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-components-and-deployments"},"Default Components and Deployments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#role-based-access-control"},"Role-based Access Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#guides"},"Guides")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#windows-cluster-support"},"Windows Cluster Support")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#known-issues"},"Known Issues"))),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("p",null,"Prometheus lets you view metrics from your Rancher and Kubernetes objects. Using timestamps, Prometheus lets you query and view these metrics in easy-to-read graphs and visuals, either through the Rancher UI or Grafana, which is an analytics viewing platform deployed along with Prometheus."),(0,a.kt)("p",null,"By viewing data that Prometheus scrapes from your cluster control plane, nodes, and deployments, you can stay on top of everything happening in your cluster. You can then use these analytics to better run your organization: stop system emergencies before they start, develop maintenance strategies, or restore crashed servers."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," operator, introduced in Rancher v2.5, is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/"},"Grafana"),",  ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager"),", the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator"),", and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter"},"Prometheus adapter.")),(0,a.kt)("p",null,"The monitoring application allows you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments"),(0,a.kt)("li",{parentName:"ul"},"Define alerts based on metrics collected via Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Create custom Grafana dashboards"),(0,a.kt)("li",{parentName:"ul"},"Configure alert-based notifications via Email, Slack, PagerDuty, etc. using Prometheus Alertmanager"),(0,a.kt)("li",{parentName:"ul"},"Defines precomputed, frequently needed or computationally expensive expressions as new time series based on metrics collected via Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Expose collected metrics from Prometheus to the Kubernetes Custom Metrics API via Prometheus Adapter for use in HPA")),(0,a.kt)("h1",{id:"how-monitoring-works"},"How Monitoring Works"),(0,a.kt)("p",null,"For an explanation of how the monitoring components work together, see ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this page.")),(0,a.kt)("h1",{id:"default-components-and-deployments"},"Default Components and Deployments"),(0,a.kt)("h3",{id:"built-in-dashboards"},"Built-in Dashboards"),(0,a.kt)("p",null,"By default, the monitoring application deploys Grafana dashboards (curated by the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," project) onto a cluster."),(0,a.kt)("p",null,"It also deploys an Alertmanager UI and a Prometheus UI. For more information about these tools, see ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"},"Built-in Dashboards.")),(0,a.kt)("h3",{id:"default-metrics-exporters"},"Default Metrics Exporters"),(0,a.kt)("p",null,"By default, Rancher Monitoring deploys exporters (such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"node-exporter")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-state-metrics"},"kube-state-metrics"),")."),(0,a.kt)("p",null,"These default exporters automatically scrape metrics for CPU and memory from all components of your Kubernetes cluster, including your workloads."),(0,a.kt)("h3",{id:"default-alerts"},"Default Alerts"),(0,a.kt)("p",null,"The monitoring application deploys some alerts by default. To see the default alerts, go to the ",(0,a.kt)("a",{parentName:"p",href:"monitoring-alertinmonitoring-alerting/dashboards/#alertmanager-ui"},"Alertmanager UI")," and click ",(0,a.kt)("strong",{parentName:"p"},"Expand all groups.")),(0,a.kt)("h3",{id:"components-exposed-in-the-rancher-ui"},"Components Exposed in the Rancher UI"),(0,a.kt)("p",null,"For a list of monitoring components exposed in the Rancher UI, along with common use cases for editing them, see ",(0,a.kt)("a",{parentName:"p",href:"monitoring-alertinmonitoring-alerting/how-monitoring-works/#components-exposed-in-the-rancher-ui"},"this section.")),(0,a.kt)("h1",{id:"role-based-access-control"},"Role-based Access Control"),(0,a.kt)("p",null,"For information on configuring access to monitoring, see ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},"this page.")),(0,a.kt)("h1",{id:"guides"},"Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},"Enable monitoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},"Uninstall monitoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},"Monitoring workloads")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"Customizing Grafana dashboards")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"Persistent Grafana dashboards")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},"Debugging high memory usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"},"Migrating from Monitoring V1 to V2"))),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"configuring-monitoring-resources-in-rancher"},"Configuring Monitoring Resources in Rancher"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The configuration reference assumes familiarity with how monitoring components work together. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"How Monitoring Works."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},"ServiceMonitor and PodMonitor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/reference-guides/monitoring-v2-configuration/receivers"},"Receiver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/reference-guides/monitoring-v2-configuration/routes"},"Route")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"monitoring-alertinmonitoring-alerting/configuration/advanced/prometheusrules"},"PrometheusRule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},"Prometheus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"Alertmanager"))),(0,a.kt)("h3",{id:"configuring-helm-chart-options"},"Configuring Helm Chart Options"),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," chart options, including options to set resource limits and requests, see ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/reference-guides/monitoring-v2-configuration/helm-chart-options"},"this page.")),(0,a.kt)("h1",{id:"windows-cluster-support"},"Windows Cluster Support"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,a.kt)("p",null,"When deployed onto an RKE1 Windows cluster, Monitoring V2 will now automatically deploy a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/windows_exporter"},"windows-exporter")," DaemonSet and set up a ServiceMonitor to collect metrics from each of the deployed Pods. This will populate Prometheus with ",(0,a.kt)("inlineCode",{parentName:"p"},"windows_")," metrics that are akin to the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_")," metrics exported by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"node_exporter")," for Linux hosts."),(0,a.kt)("p",null,"To be able to fully deploy Monitoring V2 for Windows, all of your Windows hosts must have a minimum ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/wins"},"wins")," version of v0.1.0."),(0,a.kt)("p",null,"For more details on how to upgrade wins on existing Windows hosts, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support"},"Windows cluster support for Monitoring V2.")),(0,a.kt)("h1",{id:"known-issues"},"Known Issues"),(0,a.kt)("p",null,"There is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28787#issuecomment-693611821"},"known issue")," that K3s clusters require more default memory. If you are enabling monitoring on a K3s cluster, we recommend setting ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.resources.memory.limit")," to 2500 Mi and ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.resources.memory.request")," to 1750 Mi."),(0,a.kt)("p",null,"For tips on debugging high memory usage, see ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},"this page.")))}d.isMDXComponent=!0}}]);