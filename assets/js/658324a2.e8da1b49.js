"use strict";(self.webpackChunkbayes_cluster_github_io_source=self.webpackChunkbayes_cluster_github_io_source||[]).push([[9828],{9251:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorial-basics/interactive-task","title":"Interactive Task","description":"Submit interactive tasks","source":"@site/docs/tutorial-basics/interactive-task.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/interactive-task","permalink":"/docs/tutorial-basics/interactive-task","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/interactive-task.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Environment","permalink":"/docs/tutorial-basics/environment"},"next":{"title":"Batch Task","permalink":"/docs/tutorial-basics/batch-task"}}');var o=s(4848),a=s(8453);const i={sidebar_position:5},r="Interactive Task",c={},l=[{value:"Submit interactive tasks",id:"submit-interactive-tasks",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"interactive-task",children:"Interactive Task"})}),"\n",(0,o.jsx)(t.h2,{id:"submit-interactive-tasks",children:"Submit interactive tasks"}),"\n",(0,o.jsx)(t.p,{children:"An interactive task is a special queue task. In this mode, users can log in to a computing node directly, and all operations are performed on this node. This function is mainly convenient for users to debug the program on the server so that they can see the output of the program in real time."}),"\n",(0,o.jsxs)(t.p,{children:["You need to use the ",(0,o.jsx)(t.code,{children:"salloc"})," command to allocate the resources needed for interactive tasks. Its syntax is:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ salloc [Apply for resources]\n"})}),"\n",(0,o.jsx)(t.p,{children:"You may specify the requested resource in the form of options, which are basically the same as those in the SLURM script. For example, you can apply for resources in the following ways:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"user_name@Control:~$ salloc -N 1 --cpus-per-task=4 -t 5:00 -p CPU-Compute\nsalloc: Granted job allocation 411\nuser_name@Control:~$\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After successful execution, SLURM will give you a new shell. Note that the node where the user is located is still the master node at this time. You need to manually switch to the compute node using the ",(0,o.jsx)(t.code,{children:"slink"})," command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"user_name@Control:~$ salloc -N 1 --cpus-per-task=4 -t 5:00 -p CPU-Compute\nsalloc: Granted job allocation 2294\nsalloc: Waiting for resource configuration\nsalloc: Nodes Compute2030005001 are ready for job\nuse_name@Control:~slink\nuser_name@Compute2030005001:~$\n"})}),"\n",(0,o.jsxs)(t.p,{children:["As shown above, after executing ",(0,o.jsx)(t.code,{children:"salloc"}),", SLURM automatically allocates the job number and informs which node is available. After successfully obtaining resources and login via the ssh, you get a new shell (Line 5). At this time, the user can directly switch to the target node comput1 to perform the computing task."]}),"\n",(0,o.jsx)(t.p,{children:"After the interactive calculation is completed, use exit to exit the node, and then execute exit to exit the shell allocated by SLURM to end this interactive task. SLURM will inform you that the resources of the interactive task have been released."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"user_name@Compute2030005001:~$ exit                 # This step is to exit CPU-compute-1\nexit\nConnection to compute2030005003 closed.\nuser_name@Control:~$ exit\nexit\nsalloc: Relinquishing job allocation 2294 # Resources are also released when exiting\nuser_name@Control:~$\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then, you will return to the Control node."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Remember: Users are not allowed to login to compute nodes unless they have a job running there. If you SSH to a compute node without any active job allocation, you will be greeted by the following message:"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"slink"})," or ",(0,o.jsx)(t.code,{children:"ssh"})," without a task is prohibited:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"user_name@Control:~$ ssh Compute2030005001\nAccess denied: user user_name(uid=xxx) has no active jobs on this node.\nConnection closed by Compute2030005001 port 22\n"})})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(6540);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);