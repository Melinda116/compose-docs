"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=o,y=c["".concat(l,".").concat(p)]||c[p]||v[p]||a;return n?i.createElement(y,r(r({ref:t},d),{},{components:n})):i.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),o=(n(7294),n(3905));const a={title:"Glossary",sidebar_position:1},r="Glossary",s={unversionedId:"guide/glossary",id:"guide/glossary",title:"Glossary",description:"This page contains a glossary of terms used in Neurosynth-Compose.",source:"@site/docs/guide/glossary.md",sourceDirName:"guide",slug:"/guide/glossary",permalink:"/compose-docs/guide/glossary",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/guide/glossary.md",tags:[],version:"current",lastUpdatedBy:"Nicholas Lee",lastUpdatedAt:1688165400,formattedLastUpdatedAt:"Jun 30, 2023",sidebarPosition:1,frontMatter:{title:"Glossary",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Meta-Analyses Page",permalink:"/compose-docs/guide/pages/meta-analyses"}},l={},u=[{value:"Studyset",id:"studyset",level:2},{value:"Overview",id:"overview",level:3},{value:"Functions",id:"functions",level:3},{value:"Annotation",id:"annotation",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Functions",id:"functions-1",level:3},{value:"Study",id:"study",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Functions",id:"functions-2",level:3},{value:"Analysis",id:"analysis",level:2},{value:"Overview",id:"overview-3",level:3},{value:"Condition",id:"condition",level:2},{value:"Overview",id:"overview-4",level:3},{value:"Weights",id:"weights",level:2},{value:"Point",id:"point",level:2},{value:"Overview",id:"overview-5",level:3},{value:"Image",id:"image",level:2}],d={toc:u},c="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("p",null,"This page contains a glossary of terms used in Neurosynth-Compose."),(0,o.kt)("h2",{id:"studyset"},"Studyset"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A studyset is a collection of studies and serves as the primary input\nto a meta-analysis."),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("p",null,"If an existing studyset is close to what you want or provides a good starting\npoint, you may clone the studyset.\nFrom there you can add additional studies or remove studies from the studyset.\nIf you would like to change which analyses are included for analysis in the studyset,\nwe recommend you use annotations instead."),(0,o.kt)("h2",{id:"annotation"},"Annotation"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"Annotations serve three functions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"human-readable documentation (for example, following PRISMA)"),(0,o.kt)("li",{parentName:"ol"},"Specifying co-variates to be used in the meta-analysis"),(0,o.kt)("li",{parentName:"ol"},"Filtering Analyses for inclusion in the meta-analysis")),(0,o.kt)("p",null,'Annotations can be thought of like an excel sheet, where\nthe columns are variables serving one of the three functions mentioned above, and the rows are\neach analysis and its value for that variable.\nFor example, let\'s say we were to create an annotation for purpose (3). To filter analyses for inclusion, we can create\nan "include" column may have a corresponding values of "True" or "False"\nfor each analysis indicating whether to include the analysis in the meta-analysis.'),(0,o.kt)("h3",{id:"functions-1"},"Functions"),(0,o.kt)("p",null,"Annotations can also be cloned if you disagree with an existing annotation\nyou do not own and want to edit it."),(0,o.kt)("h2",{id:"study"},"Study"),(0,o.kt)("h3",{id:"overview-2"},"Overview"),(0,o.kt)("p",null,"A study is a publishable unit of research containing neuroimaging\ndata.\nThe data can be represented as peak coordinates or actual images.\nThe study is connected to the original journal it was published in."),(0,o.kt)("h3",{id:"functions-2"},"Functions"),(0,o.kt)("p",null,"Studies can be created, cloned, and edited to accomodate your needs for your meta-analysis"),(0,o.kt)("h2",{id:"analysis"},"Analysis"),(0,o.kt)("h3",{id:"overview-3"},"Overview"),(0,o.kt)("p",null,"An analysis represents a single statistical contrast between any number of groups/conditions.\nThe contents of an analysis include the terms applied to the groups/conditions and their respective\nweights in the contrast.\nAn analysis also contains the results of the statistical contrast either with an image and/or a table\nindicating significant results "),(0,o.kt)("h2",{id:"condition"},"Condition"),(0,o.kt)("h3",{id:"overview-4"},"Overview"),(0,o.kt)("p",null,"A condition is term/word that represents a psychological (e.g., 2-back), physical (e.g., biking)"),(0,o.kt)("h2",{id:"weights"},"Weights"),(0,o.kt)("h2",{id:"point"},"Point"),(0,o.kt)("h3",{id:"overview-5"},"Overview"),(0,o.kt)("h2",{id:"image"},"Image"))}v.isMDXComponent=!0}}]);