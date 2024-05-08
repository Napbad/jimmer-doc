"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5099],{51773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(74848),r=t(28453),i=t(11470),s=t(19365);const o={sidebar_position:6,title:"6. Paging Query"},l=void 0,c={id:"showcase/page",title:"6. Paging Query",description:"Two types of Page objects",source:"@site/docs/showcase/page.mdx",sourceDirName:"showcase",slug:"/showcase/page",permalink:"/jimmer-doc/docs/showcase/page",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/page.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"6. Paging Query"},sidebar:"tutorialSidebar",previous:{title:"5.2 Dynamic Sorting",permalink:"/jimmer-doc/docs/showcase/order-by/dynamic"},next:{title:"7. Comprehensive Query",permalink:"/jimmer-doc/docs/showcase/comprehensive-query"}},d={},u=[{value:"Two types of Page objects",id:"two-types-of-page-objects",level:2},{value:"Using the page of Jimmer",id:"using-the-page-of-jimmer",level:2},{value:"Using the page of Spring Data",id:"using-the-page-of-spring-data",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"two-types-of-page-objects",children:"Two types of Page objects"}),"\n",(0,a.jsx)(n.p,{children:"Jimmer supports built-in Page objects"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.Page<T>"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"org.springframework.data.domain.Page<T>"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["In fact, Jimmer allows users to customize any ",(0,a.jsx)(n.code,{children:"Page"})," object.\nHowever, this article does not discuss this issue, partly because this article is only a showcase page and does not want to go into depth, and on the other hand, these two built-in ",(0,a.jsx)(n.code,{children:"Page"})," objects are usually sufficient."]})}),"\n",(0,a.jsx)(n.p,{children:"As far as these two built-in Page objects are concerned, the differences are as follows:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.springframework.data.domain.Page<T>"}),":\nDesigned for server-side pages, in order for the page to remain in its previous state after refresh, a lot of information (such as cumbersome sorting information) needs to be returned to the client as is, so it is very complex."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.Page<T>"}),":\nFor the design of rich client pages, this kind of client page itself is a stateful application, and the server side provide pure data services, and only return the most necessary information, so it is very simple."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"using-the-page-of-jimmer",children:"Using the page of Jimmer"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"int pageIndex = ...Omitted...; // \u4ece0\u5f00\u59cb\nint pageSize = ...Omitted...;\n\nBookTable table = BookTable.$;\norg.babyfish.jimmer.Page<Book> page = sqlClient\n    .createQuery(table)\n    .orderBy(table.name().asc())\n    .orderBy(table.edition().desc())\n    .select(table)\n    // highlight-next-line\n    .fetchPage(pageIndex, pageSize);\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val pageIndex: Int = ...Omitted...; // Starts from 0\nval pageSize: Int = ...Omitted...;\n\nval page: org.babyfish.jimmer.Page<Book> = sqlClient\n    .createQuery(Book::class) {\n        orderBy(table.name.asc())\n        orderBy(table.edition().desc())\n        select(table)\n    }\n    // highlight-next-line\n    .fetchPage(pageIndex, pageSize)\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"If pageIndex is 1 * (page 2) * and pageSize is 5, the result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'Page{\n    // highlight-next-line\n    rows=[\n        {\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82.00,\n            "store":{"id":2}\n        }, \n        {\n            "id":3,\n            "name":"Learning GraphQL",\n            "edition":3,\n            "price":51.00,\n            "store":{"id":1}\n        }, \n        {\n            "id":2,\n            "name":"Learning GraphQL",\n            "edition":2,\n            "price":55.00,\n            "store":{"id":1}\n        }, \n        {\n            "id":1,\n            "name":"Learning GraphQL",\n            "edition":1,\n            "price":50.00,\n            "store":{"id":1}\n        }, \n        {\n            "id":9,\n            "name":"Programming TypeScript",\n            "edition":3,\n            "price":48.00,\n            "store":{"id":1}\n        }\n    ], \n    // highlight-next-line\n    totalRowCount=12, \n    // highlight-next-line\n    totalPageCount=3\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"using-the-page-of-spring-data",children:"Using the page of Spring Data"}),"\n",(0,a.jsx)(n.p,{children:"After importing the dependency 'org.babyfish.jimmer:jimmer-spring-boot-starter:$version'"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Usage supported by both Java and Kotlin: Use ",(0,a.jsx)(n.code,{children:"SpringPageFactory.getInstance()"})," as the third argument to ",(0,a.jsx)(n.code,{children:"fetchPage"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Kotlin-specific usage: Directly call the extension function ",(0,a.jsx)(n.code,{children:"fetchSpringPage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"int pageIndex = ...Omitted...; // \u4ece0\u5f00\u59cb\nint pageSize = ...Omitted...;\n\nBookTable table = BookTable.$;\norg.springframework.data.domain.Page<Book> page = sqlClient\n    .createQuery(table)\n    .orderBy(table.name().asc())\n    .orderBy(table.edition().desc())\n    .select(table)\n    .fetchPage(\n        pageIndex, \n        pageSize,\n        // highlight-next-line \n        SpringPageFactory.getInstance()\n    );\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val pageIndex: Int = ...Omitted...; // Starts from 0\nval pageSize: Int = ...Omitted...;\n\nval page: org.springframework.data.domain.Page<Book> = sqlClient\n    .createQuery(Book::class) {\n        orderBy(table.name.asc())\n        orderBy(table.edition().desc())\n        select(table)\n    }\n    // highlight-next-line\n    .fetchSpringPage(\n        pageIndex, \n        pageSize\n    )\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"If pageIndex is 1 * (page 2) * and pageSize is 5, the result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    // highlight-next-line\n    "content":[\n        {\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82,\n            "store":{"id":2}\n        },\n        {\n            "id":3,\n            "name":"Learning GraphQL",\n            "edition":3,\n            "price":51,\n            "store":{"id":1}\n        },\n        {\n            "id":2,\n            "name":"Learning GraphQL",\n            "edition":2,\n            "price":55,\n            "store":{"id":1}\n        },\n        {\n            "id":1,\n            "name":"Learning GraphQL",\n            "edition":1,\n            "price":50,\n            "store":{"id":1}\n        },\n        {\n            "id":9,\n            "name":"Programming TypeScript",\n            "edition":3,\n            "price":48,\n            "store":{"id":1}\n        }\n    ],\n    "pageable":{\n        "sort":{\n            "unsorted":false,\n            "sorted":true,\n            "empty":false\n        },\n        "pageNumber":1,\n        "pageSize":5,\n        "offset":5,\n        "paged":true,\n        "unpaged":false\n    },\n    // highlight-next-line\n    "totalPages":3,\n    // highlight-next-line\n    "totalElements":12,\n    "last":false,\n    "numberOfElements":5,\n    "first":false,\n    "size":5,\n    "number":1,\n    "sort":{\n        "unsorted":false,\n        "sorted":true,\n        "empty":false\n    },\n    "empty":false\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=g({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);