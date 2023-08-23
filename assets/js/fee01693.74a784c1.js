"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[150],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},l="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=d(n),h=r,g=l["".concat(c,".").concat(h)]||l[h]||p[h]||o;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7047:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Extraction",sidebar_position:0},i="Extraction",s={unversionedId:"guide/walkthrough/Project/Extraction",id:"guide/walkthrough/Project/Extraction",title:"Extraction",description:"Extraction is the second step in creating a meta-analysis. It involves taking the",source:"@site/docs/guide/walkthrough/Project/Extraction.md",sourceDirName:"guide/walkthrough/Project",slug:"/guide/walkthrough/Project/Extraction",permalink:"/compose-docs/guide/walkthrough/Project/Extraction",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/guide/walkthrough/Project/Extraction.md",tags:[],version:"current",lastUpdatedBy:"Alejandro de la Vega",lastUpdatedAt:1692810772,formattedLastUpdatedAt:"Aug 23, 2023",sidebarPosition:0,frontMatter:{title:"Extraction",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Curation",permalink:"/compose-docs/guide/walkthrough/Project/Curation"},next:{title:"Specification",permalink:"/compose-docs/guide/walkthrough/Project/Specification"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Ingestion",id:"ingestion",level:2},{value:"Annotations",id:"annotations",level:2},{value:"Study Editing",id:"study-editing",level:2},{value:"Read Only Studies",id:"read-only-studies",level:3},{value:"Study Annotations",id:"study-annotations",level:3},{value:"Study Edit Interface",id:"study-edit-interface",level:3},{value:"Syncing Between Curation and Extraction",id:"syncing-between-curation-and-extraction",level:2}],u={toc:d},l="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(l,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extraction"},"Extraction"),(0,r.kt)("p",null,"Extraction is the second step in creating a meta-analysis. It involves taking the\nnew ",(0,r.kt)("a",{parentName:"p",href:"/compose-docs/guide/glossary#studyset"},(0,r.kt)("strong",{parentName:"a"},"Studyset"))," creates in the curation step and extracting relevant information from studies, such as ",(0,r.kt)("a",{parentName:"p",href:"/compose-docs/guide/glossary#annotation"},(0,r.kt)("strong",{parentName:"a"},"annotations")),",\nand peak activation coordinates, or ",(0,r.kt)("a",{parentName:"p",href:"/compose-docs/guide/glossary#point"},(0,r.kt)("strong",{parentName:"a"},"points")),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"After the curation phase is complete, the user is redirected to the extraction phase. You can also access the Extraction phase through the main project page. "),(0,r.kt)("p",null,"Here, the extraction phase starts when\na wizard that pops up and guides the user through the process of initializing the extraction phase. On top of creating the\ninitial ",(0,r.kt)("a",{parentName:"p",href:"./Extraction#annotations"},(0,r.kt)("strong",{parentName:"a"},"annotation columns")),", this wizard also guides the user through the\nprocess of ",(0,r.kt)("a",{parentName:"p",href:"./Extraction#ingestion"},(0,r.kt)("strong",{parentName:"a"},"ingestion")," ")," of the curated studies to create a new ",(0,r.kt)("a",{parentName:"p",href:"../../glossary#studyset"},(0,r.kt)("strong",{parentName:"a"},"studyset")),"."),(0,r.kt)("h2",{id:"ingestion"},"Ingestion"),(0,r.kt)("p",null,"Ingestion describes the process of taking the studies from the curation phase and inserting them into the database one by one. "),(0,r.kt)("p",null,"For each study, neurosynth-compose searches the neurostore database and checks to see if a matching study exists. If a match\ndoes not exist, then a new study is created and the user must go to the paper to fill out the relevant details.\nIf one or more matches are found, the user has the option of either ignoring the existing options and creating a new study anyway, or selecting\none of the existing matches."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selecting an existing study is recommended as opposed to creating a new study from scratch. By selecting an existing neurostore study, you\nare leveraging neurostore's automatic extraction. As the coordinates have already been extracted for you, this will save you a lot of time and effort\nduring the extraction process.")," "),(0,r.kt)("admonition",{title:"Why ingestion?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During the curation phase, studies are actually not inserted into the database. A vast majority of the studies that\nare imported into the curation phase are excluded during the curation process. Inserting these studies into the database would clutter\nit and create a lot of empty entries which don't have coordinates and might not even be used. By waiting until we have our finalized\nincluded subset of studies, we reduce the number of empty, useless studies in the database.")),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("h2",{id:"study-editing"},"Study Editing"),(0,r.kt)("p",null,"Studies in the extraction phase are filtered and categorized to help better organize and facilitate the process. Initially, all studies\nstart as ",(0,r.kt)("strong",{parentName:"p"},"Uncategorized"),". The user can then decide to mark them as ",(0,r.kt)("strong",{parentName:"p"},"Save For Later")," if they want to revisit the study, or ",(0,r.kt)("strong",{parentName:"p"},"Completed"),"."),(0,r.kt)("h3",{id:"read-only-studies"},"Read Only Studies"),(0,r.kt)("h3",{id:"study-annotations"},"Study Annotations"),(0,r.kt)("h3",{id:"study-edit-interface"},"Study Edit Interface"),(0,r.kt)("h2",{id:"syncing-between-curation-and-extraction"},"Syncing Between Curation and Extraction"))}p.isMDXComponent=!0}}]);