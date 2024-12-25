"use strict";(self.webpackChunkbayes_cluster_github_io_source=self.webpackChunkbayes_cluster_github_io_source||[]).push([[1440],{5783:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"system/system","title":"Cluster Information","description":"Overview","source":"@site/docs/system/system.md","sourceDirName":"system","slug":"/system/","permalink":"/docs/system/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/system/system.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Systems","permalink":"/docs/category/systems"},"next":{"title":"Research","permalink":"/docs/category/research"}}');var r=t(4848),o=t(8453);const i={sidebar_position:1},d="Cluster Information",c={},l=[{value:"Overview",id:"overview",level:2},{value:"How to Access the Bayes Cluster",id:"how-to-access-the-bayes-cluster",level:2},{value:"How to work on the Bayes Cluster",id:"how-to-work-on-the-bayes-cluster",level:2},{value:"Notice",id:"notice",level:2}];function a(e){const s={code:"code",del:"del",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"cluster-information",children:"Cluster Information"})}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"The Bayes cluster is intended for running smaller jobs, as well as developing, debugging, and testing codes. It is a self-built and hosted  beowulf cluster. Each compute node has 20 cores 2.20 GHz Intel Skylake CPU-cores and 256 GB RAM. There are also two nodes with GPUs (NVIDIA-P100). For more details see the Hardware Configuration section below."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"NodeName"}),(0,r.jsx)(s.th,{children:"CPU"}),(0,r.jsx)(s.th,{children:"Memory"}),(0,r.jsx)(s.th,{children:"GPU"}),(0,r.jsx)(s.th,{children:"Storage"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Control"}),(0,r.jsx)(s.td,{children:"20 cores"}),(0,r.jsx)(s.td,{children:"128GB"}),(0,r.jsx)(s.td,{children:"NA"}),(0,r.jsx)(s.td,{children:"240GB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Compute2030005000"}),(0,r.jsx)(s.td,{children:"20 cores"}),(0,r.jsx)(s.td,{children:"128GB"}),(0,r.jsx)(s.td,{children:"NA"}),(0,r.jsx)(s.td,{children:"600GB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Compute2030005001"}),(0,r.jsx)(s.td,{children:"20 cores"}),(0,r.jsx)(s.td,{children:"128GB"}),(0,r.jsx)(s.td,{children:"NA"}),(0,r.jsx)(s.td,{children:"3.0 TB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Compute2030005002"}),(0,r.jsx)(s.td,{children:"20 cores"}),(0,r.jsx)(s.td,{children:"128GB"}),(0,r.jsx)(s.td,{children:"Tesla P100 12GB"}),(0,r.jsx)(s.td,{children:"4.8TB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Compute2030005003"}),(0,r.jsx)(s.td,{children:"20 cores"}),(0,r.jsx)(s.td,{children:"128GB"}),(0,r.jsx)(s.td,{children:"Tesla P100 12GB"}),(0,r.jsx)(s.td,{children:"4.8TB"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-access-the-bayes-cluster",children:"How to Access the Bayes Cluster"}),"\n",(0,r.jsx)(s.p,{children:"You have to request an account before using the Bayes cluster, and then log in through SSH."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Requesting Access to Bayes: if you would like an account on Bayes, please ",(0,r.jsx)(s.del,{children:"fill out the Application for to request an account"})," email the administrator: ",(0,r.jsx)("a",{href:"mailto:bayes@uicstat.com",children:"bayes [AT] uicstat.com"})," with these information:","\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Name and Student/Staff ID number"}),"\n",(0,r.jsx)(s.li,{children:"Which Department"}),"\n",(0,r.jsx)(s.li,{children:"Propose of Usage"}),"\n",(0,r.jsx)(s.li,{children:"Consent letter from the supervisor (required for student, research position and visiting staff)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Logging into Bayes: ",(0,r.jsx)(s.code,{children:"ssh <user_name>@hpc.uicstat.com"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-work-on-the-bayes-cluster",children:"How to work on the Bayes Cluster"}),"\n",(0,r.jsx)(s.p,{children:"Since Bayes Cluster is runing a Linux system, knowing some basic Linux commands is hightly recommended. For an introduction to navigating a Linux system, here are some reference:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("a",{href:"https://training.linuxfoundation.org/training/introduction-to-linux/",children:"Introduction to Linux"})," | by Linux Foundatation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("a",{href:"https://github.com/uschpc/workshop-intro-linux",children:"Introduction to Linux and Command Line"})," | by USC-HPC"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Then, please read our ",(0,r.jsx)("a",{href:"/docs/intro",children:"guideline of the Bayes cluster"})," to know more about the file systems, module system, and scheduling system running on Bayes cluster."]}),"\n",(0,r.jsx)(s.h2,{id:"notice",children:"Notice"}),"\n",(0,r.jsxs)(s.p,{children:["The control node on Bayes should be used for the basic usage (log in, submit your job, file transfer, and etc.) only. ",(0,r.jsx)(s.strong,{children:"No jobs should be run on the control node"}),", other than brief tests that last no more than a few minutes."]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var n=t(6540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);