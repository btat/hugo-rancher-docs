"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36917],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,k=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],l={title:"CIS Scans",weight:18,aliases:["/rancher/v2.0-v2.4/en/cis-scans/legacy","/rancher/v2.0-v2.4/en/cis-scans","/rancher/v2.x/en/cis-scans/v2.4/"]},o=void 0,c={unversionedId:"pages-for-subheaders/cis-scans",id:"version-2.0-2.4/pages-for-subheaders/cis-scans",title:"CIS Scans",description:"Available as of v2.4.0",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/cis-scans.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cis-scans",permalink:"/rancher-docs/2.0-2.4/pages-for-subheaders/cis-scans",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/versioned_docs/version-2.0-2.4/pages-for-subheaders/cis-scans.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"CIS Scans",weight:18,aliases:["/rancher/v2.0-v2.4/en/cis-scans/legacy","/rancher/v2.0-v2.4/en/cis-scans","/rancher/v2.x/en/cis-scans/v2.4/"]},sidebar:"tutorialSidebar",previous:{title:"integrations-in-rancher",permalink:"/rancher-docs/2.0-2.4/pages-for-subheaders/integrations-in-rancher"},next:{title:"Skipped and Not Applicable Tests",permalink:"/rancher-docs/2.0-2.4/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"}},p={},u=[],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#running-a-scan"},"Running a scan")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#scheduling-recurring-scans"},"Scheduling recurring scans")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#skipping-tests"},"Skipping tests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#setting-alerts"},"Setting alerts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#deleting-a-report"},"Deleting a report")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#downloading-a-report"},"Downloading a report")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#list-of-skipped-and-not-applicable-tests"},"List of skipped and not applicable tests"))),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"To run security scans on a cluster and access the generated reports, you must be an ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator")," or ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster Owner.")),(0,s.kt)("p",null,"Rancher can only run security scans on clusters that were created with RKE, which includes custom clusters and clusters that Rancher created in an infrastructure provider such as Amazon EC2 or GCE. Imported clusters and clusters in hosted Kubernetes providers can't be scanned by Rancher."),(0,s.kt)("p",null,"The security scan cannot run in a cluster that has Windows nodes."),(0,s.kt)("p",null,"You will only be able to see the CIS scan reports for clusters that you have access to."),(0,s.kt)("h1",{id:"running-a-scan"},"Running a Scan"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the cluster view in Rancher, click ",(0,s.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Run Scan.")),(0,s.kt)("li",{parentName:"ol"},"Choose a CIS scan profile.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," A report is generated and displayed in the ",(0,s.kt)("strong",{parentName:"p"},"CIS Scans")," page. To see details of the report, click the report's name."),(0,s.kt)("h1",{id:"scheduling-recurring-scans"},"Scheduling Recurring Scans"),(0,s.kt)("p",null,"Recurring scans can be scheduled to run on any RKE Kubernetes cluster."),(0,s.kt)("p",null,"To enable recurring scans, edit the advanced options in the cluster configuration during cluster creation or after the cluster has been created."),(0,s.kt)("p",null,"To schedule scans for an existing cluster:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Go to the cluster view in Rancher."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Add Schedule.")," This takes you to the section of the cluster editing page that is applicable to configuring a schedule for CIS scans. (This section can also be reached by going to the cluster view, clicking ",(0,s.kt)("strong",{parentName:"li"},"\u22ee"," > Edit,")," and going to the ",(0,s.kt)("strong",{parentName:"li"},"Advanced Options."),")"),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"CIS Scan Enabled")," field, click ",(0,s.kt)("strong",{parentName:"li"},"Yes.")),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"CIS Scan Profile")," field, choose a ",(0,s.kt)("strong",{parentName:"li"},"Permissive")," or ",(0,s.kt)("strong",{parentName:"li"},"Hardened")," profile. The corresponding CIS Benchmark version is included in the profile name. Note: Any skipped tests ",(0,s.kt)("a",{parentName:"li",href:"#skipping-tests"},"defined in a separate ConfigMap")," will be skipped regardless of whether a ",(0,s.kt)("strong",{parentName:"li"},"Permissive")," or ",(0,s.kt)("strong",{parentName:"li"},"Hardened")," profile is selected. When selecting the the permissive profile, you should see which tests were skipped by Rancher (tests that are skipped by default for RKE clusters) and which tests were skipped by a Rancher user. In the hardened test profile, the only skipped tests will be skipped by users."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"CIS Scan Interval (cron)")," job, enter a ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#CRON_expression"},"cron expression")," to define how often the cluster will be scanned."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"CIS Scan Report Retention")," field, enter the number of past reports that should be kept.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The security scan will run and generate reports at the scheduled intervals."),(0,s.kt)("p",null,"The test schedule can be configured in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"scheduled_cluster_scan:\n\xa0\xa0\xa0\xa0enabled: true\n\xa0\xa0\xa0\xa0scan_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cis_scan_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0override_benchmark_version: rke-cis-1.4\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0profile: permissive\n\xa0\xa0\xa0\xa0schedule_config:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cron_schedule: 0 0 * * *\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0retention: 24\n")),(0,s.kt)("h1",{id:"skipping-tests"},"Skipping Tests"),(0,s.kt)("p",null,"You can define a set of tests that will be skipped by the CIS scan when the next report is generated."),(0,s.kt)("p",null,"These tests will be skipped for subsequent CIS scans, including both manually triggered and scheduled scans, and the tests will be skipped with any profile."),(0,s.kt)("p",null,"The skipped tests will be listed alongside the test profile name in the cluster configuration options when a test profile is selected for a recurring cluster scan. The skipped tests will also be shown every time a scan is triggered manually from the Rancher UI by clicking ",(0,s.kt)("strong",{parentName:"p"},"Run Scan.")," The display of skipped tests allows you to know ahead of time which tests will be run in each scan."),(0,s.kt)("p",null,"To skip tests, you will need to define them in a Kubernetes ConfigMap resource. Each skipped CIS scan test is listed in the ConfigMap alongside the version of the CIS benchmark that the test belongs to."),(0,s.kt)("p",null,"To skip tests by editing a ConfigMap resource,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"security-scan")," namespace.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a ConfigMap named ",(0,s.kt)("inlineCode",{parentName:"p"},"security-scan-cfg"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter the skip information under the key ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," in the following format:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "skip": {\n    "rke-cis-1.4": [ \n      "1.1.1", \n      "1.2.2"\n    ]\n  }\n}\n')),(0,s.kt)("p",{parentName:"li"},"In the example above, the CIS benchmark version is specified alongside the tests to be skipped for that version."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," These tests will be skipped on subsequent scans that use the defined CIS Benchmark version."),(0,s.kt)("h1",{id:"setting-alerts"},"Setting Alerts"),(0,s.kt)("p",null,"Rancher provides a set of alerts for cluster scans. which are not configured to have notifiers by default:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A manual cluster scan was completed"),(0,s.kt)("li",{parentName:"ul"},"A manual cluster scan has failures"),(0,s.kt)("li",{parentName:"ul"},"A scheduled cluster scan was completed"),(0,s.kt)("li",{parentName:"ul"},"A scheduled cluster scan has failures")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Prerequisite:")," You need to configure a ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/2.0-2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," before configuring, sending, or receiving alerts.")),(0,s.kt)("p",null,"To activate an existing alert for a CIS scan result,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the cluster view in Rancher, click ",(0,s.kt)("strong",{parentName:"li"},"Tools > Alerts.")),(0,s.kt)("li",{parentName:"ol"},"Go to the section called ",(0,s.kt)("strong",{parentName:"li"},"A set of alerts for cluster scans.")),(0,s.kt)("li",{parentName:"ol"},"Go to the alert you want to activate and click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee"," > Activate.")),(0,s.kt)("li",{parentName:"ol"},"Go to the alert rule group ",(0,s.kt)("strong",{parentName:"li"},"A set of alerts for cluster scans")," and click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,s.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,s.kt)("strong",{parentName:"li"},"Alert")," section. In the ",(0,s.kt)("strong",{parentName:"li"},"To")," field, select the notifier that you would like to use for sending alert notifications."),(0,s.kt)("li",{parentName:"ol"},"Optional: To limit the frequency of the notifications, click on ",(0,s.kt)("strong",{parentName:"li"},"Show advanced options")," and configure the time interval of the alerts."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The notifications will be triggered when the a scan is run on a cluster and the active alerts have satisfied conditions."),(0,s.kt)("p",null,"To create a new alert,"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Go to the cluster view and click ",(0,s.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Add Alert.")),(0,s.kt)("li",{parentName:"ol"},"Fill out the form. "),(0,s.kt)("li",{parentName:"ol"},"Enter a name for the alert."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Is")," field, set the alert to be triggered when a scan is completed or when a scan has a failure."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Send a")," field, set the alert as a ",(0,s.kt)("strong",{parentName:"li"},"Critical,")," ",(0,s.kt)("strong",{parentName:"li"},"Warning,")," or ",(0,s.kt)("strong",{parentName:"li"},"Info")," alert level."),(0,s.kt)("li",{parentName:"ol"},"Choose a ",(0,s.kt)("a",{parentName:"li",href:"/rancher-docs/2.0-2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," for the alert.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The alert is created and activated. The notifications will be triggered when the a scan is run on a cluster and the active alerts have satisfied conditions."),(0,s.kt)("p",null,"For more information about alerts, refer to ",(0,s.kt)("a",{parentName:"p",href:"cluster-admin/tools/alerts/"},"this page.")),(0,s.kt)("h1",{id:"deleting-a-report"},"Deleting a Report"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the cluster view in Rancher, click ",(0,s.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,s.kt)("li",{parentName:"ol"},"Go to the report that should be deleted."),(0,s.kt)("li",{parentName:"ol"},"Click the ",(0,s.kt)("strong",{parentName:"li"},"\u22ee"," > Delete.")),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Delete."))),(0,s.kt)("h1",{id:"downloading-a-report"},"Downloading a Report"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"From the cluster view in Rancher, click ",(0,s.kt)("strong",{parentName:"li"},"Tools > CIS Scans.")),(0,s.kt)("li",{parentName:"ol"},"Go to the report that you want to download. Click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee"," > Download."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The report is downloaded in CSV format."),(0,s.kt)("h1",{id:"list-of-skipped-and-not-applicable-tests"},"List of Skipped and Not Applicable Tests"),(0,s.kt)("p",null,"For a list of skipped and not applicable tests, refer to ",(0,s.kt)("a",{href:"cis-scans/legacy/skipped-tests",target:"_blank"},"this page.")))}h.isMDXComponent=!0}}]);