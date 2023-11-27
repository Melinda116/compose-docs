"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[3078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||n;return a?o.createElement(y,s(s({ref:t},p),{},{components:a})):o.createElement(y,s({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<n;u++)s[u]=a[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_label:"Ecosystem",sidebar_position:4},s="Ecosystem for fMRI Meta-Analysis",i={unversionedId:"introduction/ecosystem",id:"introduction/ecosystem",title:"Ecosystem for fMRI Meta-Analysis",description:"ecosystem",source:"@site/docs/introduction/ecosystem.md",sourceDirName:"introduction",slug:"/introduction/ecosystem",permalink:"/compose-docs/introduction/ecosystem",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/introduction/ecosystem.md",tags:[],version:"current",lastUpdatedBy:"Alejandro de la Vega",lastUpdatedAt:1701124318,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Ecosystem",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Our Team",permalink:"/compose-docs/introduction/team"},next:{title:"Tutorials",permalink:"/compose-docs/tutorial/"}},l={},u=[{value:"Neurosynth Compose",id:"neurosynth-compose",level:2},{value:"NeuroStore",id:"neurostore",level:2},{value:"NiMARE",id:"nimare",level:2},{value:"PyMARE",id:"pymare",level:3},{value:"NIMADS",id:"nimads",level:3},{value:"NeuroQuery",id:"neuroquery",level:2},{value:"NeuroVault",id:"neurovault",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ecosystem-for-fmri-meta-analysis"},"Ecosystem for fMRI Meta-Analysis"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ecosystem",src:a(6089).Z,title:"Neurosynth Compose Ecosystem",width:"452",height:"500"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Neurosynth Compose")," is part of a broader set of tools for neuroimaging meta-analysis, with complementary roles."),(0,r.kt)("h2",{id:"neurosynth-compose"},"Neurosynth Compose"),(0,r.kt)("p",null,"Neurosynth-Compose is the evolution of the original ",(0,r.kt)("a",{parentName:"p",href:"https://neurosynth.org"},"Neurosynth")," project."),(0,r.kt)("p",null,"In ",(0,r.kt)("em",{parentName:"p"},"Neurosynth 1.0"),", we developed a web platform for users to browse a large set of pre-computed meta-analyses\nsynthesizing findings across 14,000+ fMRI studies. The philosophy was to leverage\nlarge scale meta-analysis to provide new insights into the literature, overcoming limitations of database\nwith sheer scale. With regular updates, Neurosynth was able to keep up with the growth of the literature.\nThe database was released with a permissive license, and accompanied by a Python package to manipulate and analyze it. "),(0,r.kt)("p",null,"Although this approach was surprsingly successful, there were several major limitations to Neurosynth 1.0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Meta-analyses were limited by ",(0,r.kt)("strong",{parentName:"p"},"concepts that can be inferred from large scale text mining")," (i.e. frequency of terms in the text).\nAlthough these features proved to be surprsingly useful for well-powered and broad cognitive constructs (e.g. 'emotion'), Neurosynth was not able\nto capture the fine-grained details of the neuroimaging literature, or allow users to define their own grouping of studies. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The database is not curated, and therefore contains many ",(0,r.kt)("strong",{parentName:"p"},"inaccuracies and incomplete")," data at both the study and coordinate level.\nAside from obvious extraction erors, automated coordinate extraction lacks the ability to determine critical information, such as whether the activation is positive or negative.\nIn addition, it's not possible to segregate the coordinates into distinct contrast, conditions, or studies without manual curation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Coordinate-based analyses are inherently ",(0,r.kt)("strong",{parentName:"p"},"inferior to image-based")," meta-analysis, which is becoming increasingly possible with sharing of unthresholded statisical maps in repositories like ",(0,r.kt)("a",{parentName:"p",href:"https://neurovault.org/"},"NeuroVault"),"."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Neurosynth Compose")," aims to address these limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provides a web-based platform for meta-analytic neuroimaging research, allowing users to ",(0,r.kt)("strong",{parentName:"p"},"curate studies"),", and ",(0,r.kt)("strong",{parentName:"p"},"specify meta-analytic models"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Flexible and easy to use"),", allowing users to perform both large-scale ",(0,r.kt)("strong",{parentName:"p"},"exploratory")," meta-analyses, as well as ",(0,r.kt)("strong",{parentName:"p"},"targeted, hypothesis-driven")," meta-analyses that conform to stringent standards such as the ","[PRISMA][https://prisma-statement.org]"," statement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allows users to perfom ",(0,r.kt)("strong",{parentName:"p"},"image-based meta-analysis")," using unthresholded images from NeuroVault (in progress).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quick, reproducible and transparent ",(0,r.kt)("strong",{parentName:"p"},"sharing of results"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Incentivizes ",(0,r.kt)("strong",{parentName:"p"},"collaborative curation")," of neuroimaging studies in a accesible ",(0,r.kt)("strong",{parentName:"p"},"centralized repository")," (NeuroStore, see below)."))),(0,r.kt)("h2",{id:"neurostore"},"NeuroStore"),(0,r.kt)("p",null,"NeuroStore is the centralized repository for neuroimaging data amenable to meta-analysis, including coordinates, images, and metadata.\nNeuroStore serves as the data backend for Neurosynth Compose, but is also designed to be a standalone interoperable resource for the neuroimaging community."),(0,r.kt)("p",null,"NeuroStore ingests data from a number of sources, including NeuroVault, NeuroQuery, and Neurosynth (ACE), and provides a unified API for querying the database."),(0,r.kt)("p",null,"Importantly, data on NeuroStore can be ",(0,r.kt)("strong",{parentName:"p"},"curated")," the community, allowing users to correct errors in coordinate extraction, and add new studies and coordinates. By providing a centralized repository for curated neuroimaging data, NeuroStore aims to facilitate the development of new meta-analytic tools, and to provide a common data format for the neuroimaging community."),(0,r.kt)("h2",{id:"nimare"},"NiMARE"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nimare.readthedocs.io/en/latest/"},"NiMARE")," (Neuroimaging Meta-Analysis Research Environment) is a Python package for performing neuroimaging meta-analysis. "),(0,r.kt)("p",null,"NiMARE is an open source, collaboratively-developed package that implements a range of meta-analytic algorithms, including coordinate- and image-based meta-analyses, automated annotation, functional decoding, and meta-analytic coactivation modeling. "),(0,r.kt)("p",null,"By consolidating meta-analytic methods under a common library and syntax, NiMARE makes it straightforward for users to employ the appropriate approach for a given analysis. "),(0,r.kt)("p",null,"NeuroSynth Compose uses NiMARE to execute meta-analyses, by exporting datasets in the common NIMADS format (see below), and specifying reproducible NiMARE workflows for common meta-analytic models."),(0,r.kt)("h3",{id:"pymare"},"PyMARE"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pymare.readthedocs.io/en/latest/"},"PyMARE")," is a Python library for effect-size meta-analysis. NiMARE uses PyMARE for its image-based meta-analysis algorithms\n(with some light wrapping to convert image objects to arrays compatible with PyMARE functions)."),(0,r.kt)("h3",{id:"nimads"},"NIMADS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/neurostuff/NIMADS"},"NIMADS")," is a new standard for organizing and representing meta-analytic neuroimaging data.\nNIMADS is used as a common, interoperable format by NeuroStore, pyNIMADS, and NiMARE."),(0,r.kt)("h2",{id:"neuroquery"},"NeuroQuery"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://neuroquery.org"},"NeuroQuery")," is a web service, Python library, and coordinate database built for large-scale, predictive meta-analysis.\nPredictive meta-analysis generates non-statistical brain maps from text, using a database of coordinates and associated texts."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neuroquery/neuroquery_data"},"NeuroQuery dataset")," is accurate and maintainble than the existing Neurosynth 1.0 database,\nthis new database will effectively replace the old one within the meta-analytic ecosystem.\nNiMARE can ingest the NeuroQuery database and convert it automatically to a NiMARE Dataset object for analysis.\nAdditionally, the NeuroQuery database will feed directly into NeuroStore as a source of coordinates."),(0,r.kt)("h2",{id:"neurovault"},"NeuroVault"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://neurovault.org/"},"NeuroVault")," is a repository for unthresholded statistical maps from neuroimaging studies."),(0,r.kt)("p",null,"As of early 2023, NeuroVault contains over 8,000 collections of statistical images, with over 100,000 images in total.\nIt is the largest repository of unthresholded statistical maps in the world, and is the primary source of data for image-based meta-analyses using\nNeurosynth Compose."),(0,r.kt)("p",null,"Currently, NeuroVault supports some basic meta-analytic functionality. However, as other tools in this ecosystem are developed,\nit is planned that NeuroVault will focus exclusively on image storage and sharing, and will rely on other tools for meta-analysis."))}m.isMDXComponent=!0},6089:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/compose_ecosystem_paths-f815833d6a398e3ecc658357ab4663b5.svg"}}]);