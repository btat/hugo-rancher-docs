"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2476],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,d=m["".concat(i,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91687:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],l={title:"Access and Sharing",weight:31},i=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",title:"Access and Sharing",description:"If you are an RKE template owner, you can share it with users or groups of users, who can then use the template to create clusters.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",permalink:"/rancher-docs/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",draft:!1,editUrl:"https://github.com/rancher/docs/edit/master/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Access and Sharing",weight:31},sidebar:"tutorialSidebar",previous:{title:"Template Creator Permissions",permalink:"/rancher-docs/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions"},next:{title:"Creating and Revising RKE Templates",permalink:"/rancher-docs/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"}},u={},c=[{value:"Sharing Templates with Specific Users or Groups",id:"sharing-templates-with-specific-users-or-groups",level:3},{value:"Sharing Templates with All Users",id:"sharing-templates-with-all-users",level:3},{value:"Sharing Ownership of Templates",id:"sharing-ownership-of-templates",level:3}],m={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are an RKE template owner, you can share it with users or groups of users, who can then use the template to create clusters."),(0,o.kt)("p",null,"Since RKE templates are specifically shared with users and groups, owners can share different RKE templates with different sets of users."),(0,o.kt)("p",null,"When you share a template, each user can have one of two access levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Owner:")," This user can update, delete, and share the templates that they own. The owner can also share the template with other users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User:")," These users can create clusters using the template. They can also upgrade those clusters to new revisions of the same template. When you share a template as ",(0,o.kt)("strong",{parentName:"li"},"Make Public (read-only),")," all users in your Rancher setup have the User access level for the template.")),(0,o.kt)("p",null,"If you create a template, you automatically become an owner of that template. "),(0,o.kt)("p",null,"If you want to delegate responsibility for updating the template, you can share ownership of the template. For details on how owners can modify templates, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},"documentation about revising templates.")),(0,o.kt)("p",null,"There are several ways to share templates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add users to a new RKE template during template creation"),(0,o.kt)("li",{parentName:"ul"},"Add users to an existing RKE template"),(0,o.kt)("li",{parentName:"ul"},"Make the RKE template public, sharing it with all users in the Rancher setup"),(0,o.kt)("li",{parentName:"ul"},"Share template ownership with users who are trusted to modify the template")),(0,o.kt)("h3",{id:"sharing-templates-with-specific-users-or-groups"},"Sharing Templates with Specific Users or Groups"),(0,o.kt)("p",null,"To allow users or groups to create clusters using your template, you can give them the basic ",(0,o.kt)("strong",{parentName:"p"},"User")," access level for the template."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,o.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the template that you want to share and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Share Template")," section, click on ",(0,o.kt)("strong",{parentName:"li"},"Add Member"),"."),(0,o.kt)("li",{parentName:"ol"},"Search in the ",(0,o.kt)("strong",{parentName:"li"},"Name")," field for the user or group you want to share the template with."),(0,o.kt)("li",{parentName:"ol"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},"User")," access type."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The user or group can create clusters using the template."),(0,o.kt)("h3",{id:"sharing-templates-with-all-users"},"Sharing Templates with All Users"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"li"},"RKE1 Configuration > RKE Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the template that you want to share and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Share Template,")," check the box for ",(0,o.kt)("strong",{parentName:"li"},"Make Public (read-only)"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," All users in the Rancher setup can create clusters using the template."),(0,o.kt)("h3",{id:"sharing-ownership-of-templates"},"Sharing Ownership of Templates"),(0,o.kt)("p",null,"If you are the creator of a template, you might want to delegate responsibility for maintaining and updating a template to another user or group."),(0,o.kt)("p",null,"In that case, you can give users the Owner access type, which allows another user to update your template, delete it, or share access to it with other users."),(0,o.kt)("p",null,"To give Owner access to a user or group,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"RKE1 configuration"),", click ",(0,o.kt)("strong",{parentName:"li"},"RKE Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the RKE template that you want to share and click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Share Template"),", click on ",(0,o.kt)("strong",{parentName:"li"},"Add Member")," and search in the ",(0,o.kt)("strong",{parentName:"li"},"Name")," field for the user or group you want to share the template with."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Access Type")," field, click ",(0,o.kt)("strong",{parentName:"li"},"Owner"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The user or group has the Owner access type, and can modify, share, or delete the template."))}h.isMDXComponent=!0}}]);