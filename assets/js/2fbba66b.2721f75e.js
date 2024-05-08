"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[454],{82143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),i=n(11470),s=n(19365);const o={sidebar_position:2,title:"3.2 Limit Depth"},l=void 0,u={id:"showcase/recursive-query/depth",title:"3.2 Limit Depth",description:"Query Dynamic Entities",source:"@site/docs/showcase/recursive-query/depth.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/depth",permalink:"/jimmer-doc/docs/showcase/recursive-query/depth",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/recursive-query/depth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"3.2 Limit Depth"},sidebar:"tutorialSidebar",previous:{title:"3.1 Basic usage",permalink:"/jimmer-doc/docs/showcase/recursive-query/usage"},next:{title:"3.2 Control Recursion Of Node",permalink:"/jimmer-doc/docs/showcase/recursive-query/node-control"}},c={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveChildNodes(\n                    // highlight-next-line\n                    cfg -> cfg.depth(2)\n                )\n        )\n    )\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    // highlight-next-line\n                    depth(2)\n                }\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"The currently queried aggregate roots are defined as the 0th layer.\nOn this basis, query two layers of child objects downwards to obtain the following data:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":3,"name":"Drinks"},\n                    // highlight-next-line\n                    {"id":6,"name":"Bread"}\n                ]\n            },\n            {\n                "id":9,\n                "name":"Clothing",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":10,"name":"Woman"},\n                    // highlight-next-line\n                    {"id":18,"name":"Man"}\n                ]\n            }\n        ]\n    }\n]\n'})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:["The deepest 4 objects do not have the ",(0,r.jsx)(t.code,{children:"childNodes"})," property as ",(0,r.jsx)(t.code,{children:"[]"}),", but do not have the ",(0,r.jsx)(t.code,{children:"childNodes"})," property at all."]}),(0,r.jsx)(t.p,{children:"This means whether these 4 objects have subordinate objects is unknown, because the recursion process was prematurely terminated due to manual intervention."})]}),"\n",(0,r.jsx)(t.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,r.jsx)(t.p,{children:"Restricting recursion depth for static DTOs will be provided in later versions, please wait for later versions."})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),i=n(23104),s=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=u??b;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);