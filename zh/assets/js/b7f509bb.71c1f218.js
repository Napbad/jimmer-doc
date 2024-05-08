"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1544],{89848:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=c(74848),s=c(28453);const r={sidebar_position:3,title:"\u4fdd\u8bc1\u7f13\u5b58\u4e00\u81f4\u6027"},t=void 0,o={id:"cache/consistency",title:"\u4fdd\u8bc1\u7f13\u5b58\u4e00\u81f4\u6027",description:"\u4e4b\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u901a\u8fc7\u5bf9\u8c61\u7f13\u5b58\u3001\u5173\u8054\u7f13\u5b58\u548c\u8ba1\u7b97\u7f13\u5b58\u4e09\u7bc7\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86Jimmer\u5982\u4f55\u5728\u6570\u636e\u88ab\u4fee\u6539\u65f6\u81ea\u52a8\u5220\u9664\u53d7\u5f71\u54cd\u7684\u7f13\u5b58\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cache/consistency.mdx",sourceDirName:"cache",slug:"/cache/consistency",permalink:"/jimmer-doc/zh/docs/cache/consistency",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/cache/consistency.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4fdd\u8bc1\u7f13\u5b58\u4e00\u81f4\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u7f13\u5b58",permalink:"/jimmer-doc/zh/docs/cache/cache-type/calculation"},next:{title:"\u591a\u89c6\u89d2\u7f13\u5b58",permalink:"/jimmer-doc/zh/docs/cache/multiview-cache/"}},d={},l=[{value:"BinLog\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027(\u63a8\u8350)",id:"binlog\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027\u63a8\u8350",level:2},{value:"Transaction\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027",id:"transaction\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["\u4e4b\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u901a\u8fc7",(0,i.jsx)(n.a,{href:"./cache-type/object",children:"\u5bf9\u8c61\u7f13\u5b58"}),"\u3001",(0,i.jsx)(n.a,{href:"./cache-type/association",children:"\u5173\u8054\u7f13\u5b58"}),"\u548c",(0,i.jsx)(n.a,{href:"./cache-type/calculation",children:"\u8ba1\u7b97\u7f13\u5b58"}),"\u4e09\u7bc7\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86Jimmer\u5982\u4f55\u5728\u6570\u636e\u88ab\u4fee\u6539\u65f6\u81ea\u52a8\u5220\u9664\u53d7\u5f71\u54cd\u7684\u7f13\u5b58\u3002"]}),(0,i.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u8fd9\u91cc\u4e0d\u518d\u91cd\u590d\u8ba8\u8bbaJimmer\u662f\u5982\u4f55\u667a\u80fd\u5730\u5220\u9664\u53d7\u5f71\u54cd\u7684\u7f13\u5b58\u3002"}),(0,i.jsx)(n.p,{children:"\u672c\u6587\u8ba8\u8bba\u7684\u7126\u70b9\u662f\uff0cJimmer\u5982\u4f55\u4fdd\u8bc1\u5df2\u53d1\u51fa\u7684\u7f13\u5b58\u6570\u636e\u5220\u9664\u884c\u4e3a\u6700\u7ec8\u4e00\u5b9a\u80fd\u6210\u529f\u3002"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u65e0\u8bba\u662f",(0,i.jsx)(n.a,{href:"./cache-type/object",children:"\u5bf9\u8c61\u7f13\u5b58"}),"\u548c",(0,i.jsx)(n.a,{href:"./cache-type/association",children:"\u5173\u8054\u7f13\u5b58"}),"\u90a3\u79cd\u5168\u81ea\u52a8\u7684\u4e00\u81f4\u6027\uff0c\u8fd8\u662f",(0,i.jsx)(n.a,{href:"./cache-type/calculation",children:"\u8ba1\u7b97\u7f13\u5b58"}),"\u90a3\u79cd\u9700\u8981\u7528\u6237\u8f85\u52a9\u7684\u4e00\u81f4\u6027\uff0cJimmer\u7684\u7f13\u5b58\u4e00\u81f4\u6027\u90fd\u662f\u7531",(0,i.jsx)(n.a,{href:"../mutation/trigger",children:"\u89e6\u53d1\u5668"}),"\u9a71\u52a8\u7684\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Jimmer\u7684\u89e6\u53d1\u5668\u5206\u4e3aBinLog\u89e6\u53d1\u5668\u548cTransaction\u89e6\u53d1\u5668\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9488\u5bf9\u4e0d\u540c\u7684\u60c5\u51b5\uff0cJimmer\u91c7\u7528\u4e0d\u540c\u7684\u7b56\u7565\u6765\u4fdd\u8bc1\u7f13\u5b58\u4e00\u81f4\u6027\uff0c\u5373\uff0c\u4fdd\u8bc1\u7f13\u5b58\u6e05\u7406\u64cd\u4f5c\u5fc5\u7136\u6210\u529f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"binlog\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027\u63a8\u8350",children:"BinLog\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027(\u63a8\u8350)"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53",(0,i.jsx)(n.code,{children:"trigger-type"}),"\u4e3a",(0,i.jsx)(n.code,{children:"BINLOG_ONLY"}),"\u6216",(0,i.jsx)(n.code,{children:"BOTH"}),"\u65f6\uff0cJimmer\u4f7f\u7528BinLog\u89e6\u53d1\u5668\u5220\u9664\u5931\u6548\u7f13\u5b58\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u54cd\u5e94\u6d88\u606f\u961f\u5217\u7684\u901a\u77e5\uff0c\u7b80\u5355\u5904\u7406\u540e\u8c03\u7528Jimmer\u7684",(0,i.jsx)(n.code,{children:"BinLog"})," API ",(0,i.jsx)(n.em,{children:"\uff08\u8fd9\u6bb5\u7528\u6237\u4ee3\u7801\u5f88\u7b80\u5355\uff0c\u5176\u590d\u6742\u5ea6\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\uff09"}),"\u3002\u7528\u6237\u8c03\u7528",(0,i.jsx)(n.code,{children:"BinLog"})," API\u4f1a\u53d1\u8d77\u6240\u6709\u89e6\u53d1\u5668\u56de\u8c03\uff0c\u5305\u62ec\u7f13\u5b58\u5220\u9664\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5Kafka\u4e3a\u4f8b\uff0c\u53ea\u8981\u4fdd\u8bc1\u8c03\u7528",(0,i.jsx)(n.code,{children:"BinLog"}),"API\u6210\u529f\u540e\u624d\u63d0\u4ea4\u6d88\u8d39\u8fdb\u5ea6\uff0c\u5219\u53ef\u4ee5\u4fdd\u8bc1\u7f13\u5b58\u6e05\u7406\u6700\u7ec8\u6210\u529f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"transaction\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027",children:"Transaction\u89e6\u53d1\u5668\u7684\u4e00\u81f4\u6027"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53",(0,i.jsx)(n.code,{children:"trigger-type"}),"\u4e3a",(0,i.jsx)(n.code,{children:"TRANSACTION_ONLY"}),"\u65f6\uff0cJimmer\u4f1a",(0,i.jsx)(n.strong,{children:"\u88ab\u8feb"}),"\u4f7f\u7528Transaction\u89e6\u53d1\u5668\u5220\u9664\u5931\u6548\u7f13\u5b58\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8eTransaction\u89e6\u53d1\u5668\u800c\u8a00\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53ea\u6709\u7528\u6237\u5728\u5f53\u524dApp\u5185\u8c03\u7528Jimmer API\u5bfc\u81f4\u7684\u4fee\u6539\u624d\u505a\u624d\u4f1a\u53d1\u8d77\u89e6\u53d1\u5668\u56de\u8c03\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6240\u6709\u89e6\u53d1\u5668\u56de\u8c03\u90fd\u5728\u4e8b\u52a1\u63d0\u4ea4\u524d\u5b8c\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5047\u5982\u91c7\u7528\u76f4\u63a5\u5220\u9664\u7f13\u5b58\u7684\u7b80\u5355\u5b9e\u73b0\uff0c\u53ea\u8981\u7f13\u5b58\u5220\u9664\u53d1\u751f\u5f02\u5e38\uff0c\u5c31\u4f1a\u5bfc\u81f4\u4e8b\u52a1\u88ab\u56de\u6eda\u3002\u5f88\u660e\u663e\uff0c\u8fd9\u79cd\u5b9e\u73b0\u5e76\u4e0d\u5408\u7406\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5f53",(0,i.jsx)(n.code,{children:"trigger-type"}),"\u4e3a",(0,i.jsx)(n.code,{children:"TRANSACTION_ONLY"}),"\u65f6\uff0c\u7528\u6237\u8ba4\u77e5\u4e2d\u7684\u7f13\u5b58\u5220\u9664\u64cd\u4f5c\u90fd\u4f1a\u88ab\u5ef6\u8fdf\u6267\u884c\u3002\u7f13\u5b58\u5220\u9664\u64cd\u4f5c\u5148\u4e0d\u6267\u884c\uff0c\u800c\u662f\u88ab\u5b58\u5165",(0,i.jsx)(n.code,{children:"JIMMER_TRANS_CACHE_OPERATOR"}),"\u8868\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Jimmer\u4f1a\u81ea\u52a8\u521b\u5efa``JIMMER_TRANS_CACHE_OPERATOR`\u8868\u3002"}),(0,i.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u9ed8\u8ba4\u7684",(0,i.jsx)(n.code,{children:"org.babyfish.jimmer.sql.dialect.DefaultDialect"}),"\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"]}),(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u7528Transaction\u89e6\u53d1\u5668\u9a71\u52a8\u7f13\u5b58\u4e00\u81f4\u6027\uff0c\u5c31\u4e0d\u8981\u4f7f\u7528\u9ed8\u8ba4\u7684",(0,i.jsx)(n.code,{children:"DefaultDialect"}),"\uff0c\u8981\u660e\u786e\u6307\u5b9a\u6570\u636e\u5e93\u65b9\u8a00\u3002"]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JIMMER_TRANS_CACHE_OPERATOR"}),"\u8868\u7684\u4fee\u6539\u548c\u4e1a\u52a1\u8868\u7684\u4fee\u6539\u5c5e\u4e8e\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u672c\u5730\u4e8b\u52a1\uff0c\u4e8c\u8005\u8981\u4e48\u90fd\u6210\u529f\uff0c\u8981\u4e48\u90fd\u5931\u8d25\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e8b\u52a1\u63d0\u4ea4\u6210\u529f\u540e\uff0cJimmer\u4f1a\u9a6c\u4e0a\u6267\u884c\u4e00\u6b21",(0,i.jsx)(n.code,{children:"Flush"}),"\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6240\u8c13",(0,i.jsx)(n.code,{children:"Flush"}),"\u64cd\u4f5c\uff0c\u5c31\u662f\u4ece",(0,i.jsx)(n.code,{children:"JIMMER_TRANS_CACHE_OPERATOR"}),"\u8868\u4e2d\u83b7\u53d6\u5c1a\u672a\u6267\u884c\u7684\u7528\u6237\u8ba4\u77e5\u4e2d\u7684\u7f13\u5b58\u5220\u9664\u64cd\u4f5c\uff0c\u6267\u884c\u771f\u6b63\u7684\u7f13\u5b58\u5220\u9664\u64cd\u4f5c\uff0c\u5982\u679c\u6210\u529f\uff0c\u5220\u9664\u76f8\u5173\u8bb0\u5f55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e8b\u52a1\u63d0\u4ea4\u540e\u7acb\u5373\u6267\u884c\u7684",(0,i.jsx)(n.code,{children:"Flush"}),"\u64cd\u4f5c\u800c\u8a00\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6210\u529f\u81ea\u7136\u6700\u597d\uff0c\u8fd9\u65f6\u62e5\u6709\u826f\u597d\u7684\u5b9e\u65f6\u6027\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4e5f\u5e94\u8be5\u5982\u6b64\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5373\u4f7f\u6ca1\u6709\u6210\u529f\u4e5f\u4e0d\u8981\u7d27\u3002\u56e0\u4e3aJimmer\u4f1a\u5468\u671f\u6027\u6267\u884c",(0,i.jsx)(n.code,{children:"Flush"}),"\u64cd\u4f5c\u4fdd\u8bc1\u76f8\u5173\u7f13\u5b58\u64cd\u4f5c\u6700\u7ec8\u4f1a\u6210\u529f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Flush"}),"\u64cd\u4f5c\u7684\u95f4\u9694\u53d7\u5168\u5c40SpringBoot\u914d\u7f6e\u9879",(0,i.jsx)(n.code,{children:"jimmer.transaction-cache-operator-fixed-delay"}),"\u63a7\u5236\uff0c\u8be5\u914d\u7f6e\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff0c\u9ed8\u8ba45000"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>o});var i=c(96540);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);