"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8579],{74023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(74848),l=t(28453),r=t(11470),i=t(19365);const s={sidebar_position:1,title:"4.1 Base Usage"},o=void 0,u={id:"showcase/where/usage",title:"4.1 Base Usage",description:"The following three ways of writing are equivalent",source:"@site/docs/showcase/where/usage.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/usage",permalink:"/jimmer-doc/docs/showcase/where/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/where/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"4.1 Base Usage"},sidebar:"tutorialSidebar",previous:{title:"4. Where",permalink:"/jimmer-doc/docs/showcase/where/"},next:{title:"4.2 Dynamic Conditions",permalink:"/jimmer-doc/docs/showcase/where/dynamic-where"}},c={},d=[{value:"Use multiple filters",id:"use-multiple-filters",level:2},{value:"Filter with mulitple arguments",id:"filter-with-mulitple-arguments",level:2},{value:"Logic And",id:"logic-and",level:2},{value:"Suggestion",id:"suggestion",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The following three ways of writing are equivalent"}),"\n",(0,a.jsx)(n.h2,{id:"use-multiple-filters",children:"Use multiple filters"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String name = ...Omitted...;\nint edition = ...Omitted...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.name().ilike(name))\n    // highlight-next-line\n    .where(table.edition().eq(edition))\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String = ...Omitted...\nval edition: Int = ...Omitted...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(table.name ilike name)\n        // highlight-next-line\n        where(table.edition eq edition)\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"filter-with-mulitple-arguments",children:"Filter with mulitple arguments"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String name = ...Omitted...;\nint edition = ...Omitted...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(\n        table.name().ilike(name),\n        table.edition().eq(edition)\n    )\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String = ...Omitted...\nval edition: Int = ...Omitted...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(\n            table.name ilike name,\n            table.edition eq edition\n        )\n        select(table)\n    }\n    .execute();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"logic-and",children:"Logic And"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String name = ...Omitted...;\nint edition = ...Omitted...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        // highlight-next-line\n        Predicate.and(\n            table.name().ilike(name),\n            table.edition().eq(edition)\n        )\n    )\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String = ...Omitted...\nval edition: Int = ...Omitted...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            and(\n                table.name ilike name,\n                table.edition eq edition\n            )\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"suggestion",children:"Suggestion"}),"\n",(0,a.jsx)(n.p,{children:"The above three ways are completely equivalent. However, there is no doubt that the first one is the easiest, so it is recommended."})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const l={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),l=t(18215),r=t(23104),i=t(56347),s=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const l=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=b({queryString:t,groupId:l}),[g,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Dv)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),v=(()=>{const e=u??g;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var p=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),l=s[t].value;l!==a&&(u(n),i(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function j(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function k(e){const n=(0,p.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const l={},r=a.createContext(l);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);