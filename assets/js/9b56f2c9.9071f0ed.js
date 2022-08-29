"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36431],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},21798:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"VSphere Node Template Configuration",weight:2},s=void 0,d={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",title:"VSphere Node Template Configuration",description:"- Account Access",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",permalink:"/rancher-docs/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"VSphere Node Template Configuration",weight:2},sidebar:"tutorialSidebar",previous:{title:"Azure Node Template Configuration",permalink:"/rancher-docs/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"},next:{title:"Nutanix Node Template Configuration",permalink:"/rancher-docs/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix"}},c={},u=[{value:"About VM Creation Methods",id:"about-vm-creation-methods",level:3}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#account-access"},"Account Access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scheduling"},"Scheduling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#instance-options"},"Instance Options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#networks"},"Networks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#node-tags-and-custom-attributes"},"Node tags and custom attributes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cloud-init"},"cloud-init"))),(0,o.kt)("h1",{id:"account-access"},"Account Access"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Cloud Credentials"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Your vSphere account access information, stored in a ",(0,o.kt)("a",{parentName:"td",href:"/rancher-docs/docs/reference-guides/user-settings/manage-cloud-credentials"},"cloud credential."))))),(0,o.kt)("p",null,"Your cloud credential has these fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Credential Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"vCenter or ESXi Server"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter the vCenter or ESXi hostname/IP. ESXi is the virtualization platform where you create and run virtual machines and virtual appliances. vCenter Server is the service through which you manage multiple hosts connected in a network and pool host resources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional: configure configure the port of the vCenter or ESXi server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Username and password"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter your vSphere login username and password.")))),(0,o.kt)("h1",{id:"scheduling"},"Scheduling"),(0,o.kt)("p",null,"Choose what hypervisor the virtual machine will be scheduled to. "),(0,o.kt)("p",null,"The fields in the ",(0,o.kt)("strong",{parentName:"p"},"Scheduling")," section should auto-populate with the data center and other scheduling options that are available to you in vSphere."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose the name/path of the data center where the VM will be scheduled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Pool"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the resource pool to schedule the VMs in. Resource pools can be used to partition available CPU and memory resources of a standalone host or cluster, and they can also be nested. Leave blank for standalone ESXi. If not specified, the default resource pool is used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Store"),(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"If you have a data store cluster, you can toggle the ",(0,o.kt)("strong",{parentName:"td"},"Data Store")," field. This lets you select a data store cluster where your VM will be scheduled to. If the field is not toggled, you can select an individual disk.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Folder"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Name of a folder in the datacenter to create the VMs in. Must already exist. The VM folders in this dropdown menu directly correspond to your VM folders in vSphere. The folder name should be prefaced with ",(0,o.kt)("inlineCode",{parentName:"td"},"vm/")," in your vSphere config file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Host"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The IP of the host system to schedule VMs in. Leave this field blank for a standalone ESXi or for a cluster with DRS (Distributed Resource Scheduler). If specified, the host system's pool will be used and the ",(0,o.kt)("strong",{parentName:"td"},"Resource Pool")," parameter will be ignored.")))),(0,o.kt)("h1",{id:"instance-options"},"Instance Options"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Instance Options")," section, configure the number of vCPUs, memory, and disk size for the VMs created by this template."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"CPUs"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of vCPUS to assign to VMs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of memory to assign to VMs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Disk"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Size of the disk (in MB) to attach to the VMs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Creation method"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The method for setting up an operating system on the node. The operating system can be installed from an ISO or from a VM template. Depending on the creation method, you will also have to specify a VM template, content library, existing VM, or ISO. For more information on creation methods, refer to ",(0,o.kt)("a",{parentName:"td",href:"#about-vm-creation-methods"},"About VM Creation Methods."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Cloud Init"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL of a ",(0,o.kt)("inlineCode",{parentName:"td"},"cloud-config.yml")," file or URL to provision VMs with. This file allows further customization of the operating system, such as network configuration, DNS servers, or system daemons. The operating system must support ",(0,o.kt)("inlineCode",{parentName:"td"},"cloud-init"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Networks"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name(s) of the network to attach the VM to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Configuration Parameters used for guestinfo"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Additional configuration parameters for the VMs. These correspond to the ",(0,o.kt)("a",{parentName:"td",href:"https://kb.vmware.com/s/article/1016098"},"Advanced Settings")," in the vSphere console. Example use cases include providing RancherOS ",(0,o.kt)("a",{parentName:"td",href:"%7B%7B%3Cbaseurl%3E%7D%7D/os/v1.x/en/installation/cloud/vmware-esxi/#vmware-guestinfo"},"guestinfo")," parameters or enabling disk UUIDs for the VMs (",(0,o.kt)("inlineCode",{parentName:"td"},"disk.EnableUUID=TRUE"),").")))),(0,o.kt)("h3",{id:"about-vm-creation-methods"},"About VM Creation Methods"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Creation method")," field, configure the method used to provision VMs in vSphere. Available options include creating VMs that boot from a RancherOS ISO or creating VMs by cloning from an existing virtual machine or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F7BF0E6B-7C4F-4E46-8BBF-76229AEA7220.html"},"VM template"),"."),(0,o.kt)("p",null,"The existing VM or template may use any modern Linux operating system that is configured with support for ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"cloud-init")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html"},"NoCloud datasource"),"."),(0,o.kt)("p",null,"Choose the way that the VM will be created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deploy from template: Data Center:")," Choose a VM template that exists in the data center that you selected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deploy from template: Content Library:")," First, select the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-254B2CE8-20A8-43F0-90E8-3F6776C2C896.html"},"Content Library")," that contains your template, then select the template from the populated list ",(0,o.kt)("strong",{parentName:"li"},"Library templates"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Clone an existing virtual machine:")," In the ",(0,o.kt)("strong",{parentName:"li"},"Virtual machine")," field, choose an existing VM that the new VM will be cloned from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Install from boot2docker ISO:")," Ensure that the ",(0,o.kt)("strong",{parentName:"li"},"OS ISO URL")," field contains the URL of a VMware ISO release for RancherOS (",(0,o.kt)("inlineCode",{parentName:"li"},"rancheros-vmware.iso"),"). Note that this URL must be accessible from the nodes running your Rancher server installation.")),(0,o.kt)("h1",{id:"networks"},"Networks"),(0,o.kt)("p",null,"The node template now allows a VM to be provisioned with multiple networks. In the ",(0,o.kt)("strong",{parentName:"p"},"Networks")," field, you can now click ",(0,o.kt)("strong",{parentName:"p"},"Add Network")," to add any networks available to you in vSphere."),(0,o.kt)("h1",{id:"node-tags-and-custom-attributes"},"Node Tags and Custom Attributes"),(0,o.kt)("p",null,"Tags allow you to attach metadata to objects in the vSphere inventory to make it easier to sort and search for these objects."),(0,o.kt)("p",null,"For tags, all your vSphere tags will show up as options to select from in your node template."),(0,o.kt)("p",null,"In the custom attributes, Rancher will let you select all the custom attributes you have already set up in vSphere. The custom attributes are keys and you can enter values for each one."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Custom attributes are a legacy feature that will eventually be removed from vSphere."))),(0,o.kt)("h1",{id:"cloud-init"},"cloud-init"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," allows you to initialize your nodes by applying configuration on the first boot. This may involve things such as creating users, authorizing SSH keys or setting up the network."),(0,o.kt)("p",null,"To make use of cloud-init initialization, create a cloud config file using valid YAML syntax and paste the file content in the the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Init")," field. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud-init documentation.")," for a commented set of examples of supported cloud config directives."),(0,o.kt)("p",null,"Note that cloud-init is not supported when using the ISO creation method."))}m.isMDXComponent=!0}}]);