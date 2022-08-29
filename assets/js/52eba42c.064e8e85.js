"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9575],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Project Logging",shortTitle:"Project Logging",weight:2527,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/logging","/rancher/v2.0-v2.4/en/logging/legacy/project-logging","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/project-logging","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/project-logging/","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/project-monitoring/"]},s=void 0,c={unversionedId:"reference-guides/rancher-project-tools/project-logging",id:"version-2.0-2.4/reference-guides/rancher-project-tools/project-logging",title:"Project Logging",description:"Rancher can integrate with a variety of popular logging services and tools that exist outside of your Kubernetes clusters.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/rancher-project-tools/project-logging.md",sourceDirName:"reference-guides/rancher-project-tools",slug:"/reference-guides/rancher-project-tools/project-logging",permalink:"/rancher-docs/2.0-2.4/reference-guides/rancher-project-tools/project-logging",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.0-2.4/reference-guides/rancher-project-tools/project-logging.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Project Logging",shortTitle:"Project Logging",weight:2527,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/logging","/rancher/v2.0-v2.4/en/logging/legacy/project-logging","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/project-logging","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/project-logging/","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/project-monitoring/"]},sidebar:"tutorialSidebar",previous:{title:"Project Alerts",permalink:"/rancher-docs/2.0-2.4/reference-guides/rancher-project-tools/project-alerts"},next:{title:"System Tools",permalink:"/rancher-docs/2.0-2.4/reference-guides/system-tools"}},g={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher can integrate with a variety of popular logging services and tools that exist outside of your Kubernetes clusters."),(0,a.kt)("p",null,"For background information about how logging integrations work, refer to the ",(0,a.kt)("a",{parentName:"p",href:"logging/v2.0.x-v2.4.x/cluster-logging/#how-logging-integrations-work"},"cluster administration section.")),(0,a.kt)("p",null,"Rancher supports the following services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,a.kt)("li",{parentName:"ul"},"Splunk"),(0,a.kt)("li",{parentName:"ul"},"Kafka"),(0,a.kt)("li",{parentName:"ul"},"Syslog"),(0,a.kt)("li",{parentName:"ul"},"Fluentd")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You can only configure one logging service per cluster or per project.")),(0,a.kt)("p",null,"Only ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrators"),", ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners or members"),", or ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owners")," can configure Rancher to send Kubernetes logs to a logging service."),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The Docker daemon on each node in the cluster should be ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"configured")," with the (default) log-driver: ",(0,a.kt)("inlineCode",{parentName:"p"},"json-file"),". You can check the log-driver by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker info | grep 'Logging Driver'\nLogging Driver: json-file\n")),(0,a.kt)("h1",{id:"advantages"},"Advantages"),(0,a.kt)("p",null,"Setting up a logging service to collect logs from your cluster/project has several advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logs errors and warnings in your Kubernetes infrastructure to a stream. The stream informs you of events like a container crashing, a pod eviction, or a node dying."),(0,a.kt)("li",{parentName:"ul"},"Allows you to capture and analyze the state of your cluster and look for trends in your environment using the log stream."),(0,a.kt)("li",{parentName:"ul"},"Helps you when troubleshooting or debugging."),(0,a.kt)("li",{parentName:"ul"},"Saves your logs to a safe location outside of your cluster, so that you can still access them even if your cluster encounters issues.")),(0,a.kt)("h1",{id:"logging-scope"},"Logging Scope"),(0,a.kt)("p",null,"You can configure logging at either cluster level or project level."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"cluster-admin/tools/logging/"},"Cluster logging")," writes logs for every pod in the cluster, i.e. in all the projects. For ",(0,a.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters"),", it also writes logs for all the Kubernetes system components.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Project logging writes logs for every pod in that particular project."))),(0,a.kt)("p",null,"Logs that are sent to your logging service are from the following locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pod logs stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/containers"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kubernetes system components logs stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke/logs/"),"."))),(0,a.kt)("h1",{id:"enabling-project-logging"},"Enabling Project Logging"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, navigate to the project that you want to configure project logging.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Tools > Logging")," in the navigation bar. In versions before v2.2.0, you can choose ",(0,a.kt)("strong",{parentName:"p"},"Resources > Logging"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a logging service and enter the configuration. Refer to the specific service for detailed configuration. Rancher supports the following services:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cluster-admin/tools/logging/elasticsearch/"},"Elasticsearch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cluster-admin/tools/logging/splunk/"},"Splunk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cluster-admin/tools/logging/kafka/"},"Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cluster-admin/tools/logging/syslog/"},"Syslog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cluster-admin/tools/logging/fluentd/"},"Fluentd")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Instead of using the UI to configure the logging services, you can enter custom advanced configurations by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Edit as File"),", which is located above the logging targets. This link is only visible after you select a logging service."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"With the file editor, enter raw fluentd configuration for any logging service. Refer to the documentation for each logging service on how to setup the output configuration."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/uken/fluent-plugin-elasticsearch"},"Elasticsearch Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-plugin-splunk"},"Splunk Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-plugin-kafka"},"Kafka Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dlackty/fluent-plugin-remote_syslog"},"Syslog Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.fluentd.org/v1.0/articles/out_forward"},"Fluentd Documentation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the logging service is using TLS, you also need to complete the ",(0,a.kt)("strong",{parentName:"p"},"SSL Configuration")," form."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide the ",(0,a.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,a.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use either a self-signed certificate or one provided by a certificate authority.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can generate a self-signed certificate using an openssl command. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you are using a self-signed certificate, provide the ",(0,a.kt)("strong",{parentName:"p"},"CA Certificate PEM"),".  ")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Complete the ",(0,a.kt)("strong",{parentName:"p"},"Additional Logging Configuration")," form."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Use the ",(0,a.kt)("strong",{parentName:"p"},"Add Field")," button to add custom log fields to your logging configuration. These fields are key value pairs (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"foo=bar"),") that you can use to filter the logs from another system.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Flush Interval"),". This value determines how often ",(0,a.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"Fluentd")," flushes data to the logging server. Intervals are measured in seconds.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Include System Log"),". The logs from pods in system project and RKE components will be sent to the target. Uncheck it to exclude the system logs.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Test"),". Rancher sends a test log to the service."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This button is replaced with ",(0,a.kt)("em",{parentName:"p"},"Dry Run")," if you are using the custom configuration editor. In this case, Rancher calls the fluentd dry run command to validate the configuration."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher is now configured to send logs to the selected service. Log into the logging service so that you can start viewing the logs."),(0,a.kt)("h1",{id:"related-links"},"Related Links"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/"},"Logging Architecture")))}m.isMDXComponent=!0}}]);