"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9052],{69257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),l=t(11470),s=t(19365);const o={sidebar_position:3,title:"4.3 \u5173\u8054id"},i=void 0,c={id:"showcase/where/associated-id",title:"4.3 \u5173\u8054id",description:"IsNull\u5224\u65ad",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/associated-id.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/associated-id",permalink:"/jimmer-doc/zh/docs/showcase/where/associated-id",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/associated-id.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"4.3 \u5173\u8054id"},sidebar:"tutorialSidebar",previous:{title:"4.2 \u52a8\u6001\u6761\u4ef6",permalink:"/jimmer-doc/zh/docs/showcase/where/dynamic-where"},next:{title:"4.4 \u52a8\u6001\u8868\u8fde\u63a5",permalink:"/jimmer-doc/zh/docs/showcase/where/dynamic-join"}},u={},d=[{value:"IsNull\u5224\u65ad",id:"isnull\u5224\u65ad",level:2},{value:"\u4efb\u610f\u503c\u7684\u5224\u65ad",id:"\u4efb\u610f\u503c\u7684\u5224\u65ad",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"isnull\u5224\u65ad",children:"IsNull\u5224\u65ad"}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u8be2\u6240\u6709",(0,r.jsx)(n.code,{children:"parentId"}),"\u4e3anull\u7684",(0,r.jsx)(n.code,{children:"TreeNode"}),"\uff0c\u5373\u6839\u8282\u70b9\u3002"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parentId().isNull())\n    .select(table)\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.parentId.isNull())\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684",(0,r.jsx)(n.code,{children:"parentId"}),"\uff0c\u662fJimmer\u5728\u7f16\u8bd1\u65f6\u6839\u636e\u591a\u5bf9\u4e00\u5c5e\u6027",(0,r.jsx)(n.code,{children:"TreeNode.parent"}),"\u81ea\u52a8\u751f\u6210\u7684\uff0c\n\u5373\u4f7f\u5f00\u53d1\u4eba\u5458\u6ca1\u6709\u914d\u5957\u5b9a\u4e49\u540d\u79f0\u4e3a",(0,r.jsx)(n.code,{children:"parentId"}),"\u7684",(0,r.jsx)(n.a,{href:"../../mapping/advanced/view/id-view",children:"@IdView\u5c5e\u6027"}),"\u4e5f\u4ecd\u7136\u5982\u6b64\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u4efb\u610f\u503c\u7684\u5224\u65ad",children:"\u4efb\u610f\u503c\u7684\u5224\u65ad"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u5b9e\u4e0a\uff0c",(0,r.jsx)(n.code,{children:"eq"}),"\u652f\u6301null\u53c2\u6570\uff0c\u5f53",(0,r.jsx)(n.code,{children:"eq"}),"\u7684\u53c2\u6570\u4e3anull\u662f\uff0c\u5c31\u6e32\u67d3",(0,r.jsx)(n.code,{children:"is null"})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1aJava\u7684",(0,r.jsx)(n.code,{children:"eqIf"}),"\u548cKotlin\u7684",(0,r.jsx)(n.code,{children:"eq?"}),"\u5219\u4e0d\u540c\uff0cnull\u88ab\u8ba4\u4e3a\u662f\u52a8\u6001\u67e5\u8be2\uff0c\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55SQL\u6761\u4ef6\u3002"]})}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Nullable Long parentId = ...\u7565...;\n\nTreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parentId().eq(parentId))\n    .select(table)\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val parentId: Long? = ...\u7565...;\n\nval rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.parentId eq parentId)\n        select(table)\n    }\n    .execute()\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(96540),a=t(18215),l=t(23104),s=t(56347),o=t(205),i=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=b({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);