"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[8878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={slug:"announcing-ns-compose",title:"Announcing Neurosynth Compose!",authors:"alejandro",tags:["hello","neurosynth"]},s=void 0,i={permalink:"/compose-docs/blog/announcing-ns-compose",editUrl:"https://github.com/neurostuff/compose-docs/edit/master/blog/2023-08-13-announcing.md",source:"@site/blog/2023-08-13-announcing.md",title:"Announcing Neurosynth Compose!",description:"Dear Neurosynth Community,",date:"2023-08-13T00:00:00.000Z",formattedDate:"August 13, 2023",tags:[{label:"hello",permalink:"/compose-docs/blog/tags/hello"},{label:"neurosynth",permalink:"/compose-docs/blog/tags/neurosynth"}],readingTime:2.415,hasTruncateMarker:!1,authors:[{name:"Alejandro de la Vega",title:"Research Scientist",url:"https://github.com/adelavega",imageURL:"https://github.com/adelavega.png",key:"alejandro"}],frontMatter:{slug:"announcing-ns-compose",title:"Announcing Neurosynth Compose!",authors:"alejandro",tags:["hello","neurosynth"]}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dear Neurosynth Community,"),(0,o.kt)("p",null,"My name is Alejandro, and I am the current project leader of the Neurosynth project."),(0,o.kt)("p",null,"I am very excited to announce to you that the Neurosynth project lives on, and we are officially announcing the (beta) release of the latest member of the ecosystem: Neurosynth Compose."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Neurosynth Compose")," enables users to easily perform custom neuroimaging meta-analyses using a web-based platform, with no programming experience required. This project addresses one of the most commonly request features, which is the ability to customize large-scale meta-analyses using you own expert knowledge."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Neurosynth Compose")," is ",(0,o.kt)("em",{parentName:"p"},"free to use")," and helps users:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd0e ",(0,o.kt)("strong",{parentName:"li"},"Search")," across over 20,000 studies in the Neurosynth database, or import from external databses such as PubMed."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\uddc3\ufe0f ",(0,o.kt)("strong",{parentName:"li"},"Curate")," your StudySet using systematic review tools conforming to the ",(0,o.kt)("a",{parentName:"li",href:"https://www.prisma-statement.org/"},"PRISMA")," guidelines."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,o.kt)("strong",{parentName:"li"},"Extract")," coordinates and metadata for each study, leveraging thousands of pre-extracted studies to minimize effort."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcca ",(0,o.kt)("strong",{parentName:"li"},"Analyze")," by specifying a reproducible ",(0,o.kt)("a",{parentName:"li",href:"https://readthedocs.org/projects/nimare/"},"NiMARE")," workflow, and execute it locally or in the cloud."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,o.kt)("strong",{parentName:"li"},"Share")," with the community with complete provenance and reproducibility.")),(0,o.kt)("p",null,"The goal of ",(0,o.kt)("em",{parentName:"p"},"Neurosynth Compose")," is to enable researchers to go beyond the finite set of automatically generated meta-analyses from the original platform and overcome limitations from automated coordinate and semantic extraction. The end result is a gold standard meta-analysis, in much less time than a manual workflow, and with much greater reproducible. "),(0,o.kt)("p",null,"Currently, ",(0,o.kt)("em",{parentName:"p"},"Neurosynth Compose")," is in beta, and under active development. We welcome feedback to ensure our platform meets the needs of the community. Please leave us feedback using the button on the bottom right corner of the screen!"),(0,o.kt)("p",null,"We are working on several upcoming features that will make the platform even better. Many of these features are already available in our Python meta-analysis library, NiMARE, and we are actively working on the user facing online interfaces."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Image-based Meta-Analysis (IBMA)"),". We have developed algorithms in NiMARE for using whole-brain statistical maps as inputs to meta-analysis. This is more powerful and sensitive technique compared to Coordinate-base Meta-Analysis. Soon, you will be able to use NeuroVault data as inputs for your meta-analyses."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MKDA Chi-squared / Association test"),'. A hallmark feature of Neurosynth is the ability to relate meta-analytic findings to the rest of the literature, to determine the strength and specificity of an association (this was previously called "reverse inference"). This will soon be possible on your custom meta-analyses.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A wide range of improvements to the user experience"),". We are in the process of re-working parts of the online interface to decrease friction when creating a StudySet, making study utilization, and editing more intuitive. ")),(0,o.kt)("p",null,"I would like to thank everyone involved in this highly-collaborative project, but especially James Kent, a postdoctoral fellow, and Nick Lee, a software engineer, who did the lion's share of the work."),(0,o.kt)("p",null,"We are excited for you to try it and let us know what you think."),(0,o.kt)("p",null,"-Alejandro"))}p.isMDXComponent=!0}}]);