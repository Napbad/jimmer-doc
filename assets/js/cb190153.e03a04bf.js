"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3079],{96001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),i=t(11470),o=t(19365);const l={sidebar_position:7,title:"7. Comprehensive Query"},s=void 0,c={id:"showcase/comprehensive-query",title:"7. Comprehensive Query",description:"So far, we've quickly demonstrated the following features",source:"@site/docs/showcase/comprehensive-query.mdx",sourceDirName:"showcase",slug:"/showcase/comprehensive-query",permalink:"/jimmer-doc/docs/showcase/comprehensive-query",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/comprehensive-query.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"7. Comprehensive Query"},sidebar:"tutorialSidebar",previous:{title:"6. Paging Query",permalink:"/jimmer-doc/docs/showcase/page"},next:{title:"8. Other Queries",permalink:"/jimmer-doc/docs/showcase/other-query"}},u={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"So far, we've quickly demonstrated the following features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Object Fetcher, i.e. querying arbitrarily shaped data structures, are what are shown in ",(0,a.jsx)(n.a,{href:"./fetch-association",children:"Fetch Association"})," and ",(0,a.jsx)(n.a,{href:"./recursive-query",children:"Recursive Query"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Conditions, especially ",(0,a.jsx)(n.a,{href:"./where/dynamic-join",children:"Dynamic table join"})," and ",(0,a.jsx)(n.a,{href:"./where/implicit-subquery",children:"Implicit subquery"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Sorting, including dynamic sorting"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Paging queries"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Now, let's combine all of the above features into a relatively powerful query"}),"\n",(0,a.jsx)(n.p,{children:"Again, there are two ways to develop"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Query dynamic entities"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Query static DTOs"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    public Page<Book> findBooks(\n        int pageIndex,\n        int pageSize,\n        @Nullable String sortCode,\n        @Nullable Fetcher<Book> fetcher,\n        @Nullable String name,\n        @Nullable BigDecimal minPrice,\n        @Nullable BigDecimal maxPrice,\n        @Nullable String storeName,\n        @Nullable String storeWebsite,\n        @Nullable String authorName    \n    ) {\n        return sqlClient\n            .createQuery(T)\n            .where(T.name().ilikeIf(name))\n            .where(T.price().betweenIf(minPrice, maxPrice))\n            .where(T.store().name().ilikeIf(storeName))\n            .where(T.store().website().ilikeIf(storeWebsite))\n            .where(\n                T.authors(author ->\n                    Predicate.or(\n                        author.firstName().ilikeIf(authorName),\n                        author.lastName().ilikeIf(authorName)\n                    )\n                )\n            )\n            .orderBy(\n                Order.makeOrders(\n                    T,\n                    sortCode != null ? \n                        sortCode :\n                        "name asc, edition desc"\n                )\n            )\n            .select(T.fetch(fetcher))\n            .fetchPage(pageIndex, pageSize);\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class BookRepository(\n    private val sqlClient: KSqlClient\n) {\n    fun findBooks(\n        pageIndex: Int,\n        pageSize: Int = 10,\n        sortCode: String = "name asc, edition desc",\n        fetcher: Fetcher<Book>? = null,\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null,\n        storeWebsite: String? = null,\n        name: String? = null\n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {\n                    or(\n                        firstName `ilike?` authorName,\n                        lastName `ilike?` authorName\n                    )\n                }\n                orderBy(table.makeOrders(sortCode))\n                select(table.fetch(fetcher))\n            }\n            .fetchPage(pageIndex, pageSize)\n}\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"Here, the 'findBooks' method has too many parameters. This doesn't matter to Kotlin, but it may not be a good design for Java."}),(0,a.jsx)(n.p,{children:"If your project is based on the Java language, you can choose to reduce the number of parameters in the Java language by distilling all or some of the parameters into an object."}),(0,a.jsx)(n.p,{children:"However, this does not provide substantial benefit to the example presentation here, therefore, we do not do so in order to maintain a high degree of consistency between the Java and Kotlin examples."})]}),"\n",(0,a.jsxs)(n.p,{children:["The user can use it like this ",(0,a.jsx)(n.em,{children:"(considering that Java doesn't have a good way to simplify the invocation to a method with many parameters, just a demonstration the kotlin invocation)"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val bookRepository = ...Omitted...\n\nval page = bookRepository.findBooks(\n    pageIndex = 1,\n    pageSize = 2,\n    name = "GraphQL",\n    maxPrice = BigDecimal(60),\n    authorName = "alex",\n    fetcher = newFetcher(Book::class).by {\n        allScalarFields()\n        store {\n            name()\n        }\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'Page{\n    rows=[\n        {\n            "id":1,\n            "name":"Learning GraphQL",\n            "edition":1,\n            "price":50.00,\n            "store":{"id":1,"name":"O\'REILLY"},\n            "authors":[\n                {"id":2,"firstName":"Alex","lastName":"Banks"},\n                {"id":1,"firstName":"Eve","lastName":"Procello"}\n            ]\n        }\n    ], \n    totalRowCount=3, \n    totalPageCount=2\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    public <V extends View<Book>> Page<V> findBooks(\n        int pageIndex,\n        int pageSize,\n        @Nullable String sortCode,\n        @Nullable Class<V> viewType,\n        @Nullable String name,\n        @Nullable BigDecimal minPrice,\n        @Nullable BigDecimal maxPrice,\n        @Nullable String storeName,\n        @Nullable String storeWebsite,\n        @Nullable String authorName    \n    ) {\n        return sqlClient\n            .createQuery(T)\n            .where(T.name().ilikeIf(name))\n            .where(T.price().betweenIf(minPrice, maxPrice))\n            .where(T.store().name().ilikeIf(storeName))\n            .where(T.store().website().ilikeIf(storeWebsite))\n            .where(\n                T.authors(author ->\n                    Predicate.or(\n                        author.firstName().ilikeIf(authorName),\n                        author.lastName().ilikeIf(authorName)\n                    )\n                )\n            )\n            .orderBy(\n                Order.makeOrders(\n                    T,\n                    sortCode != null ? \n                        sortCode :\n                        "name asc, edition desc"\n                )\n            )\n            .select(T.fetch(viewType))\n            .fetchPage(pageIndex, pageSize);\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class BookRepository(\n    private val sqlClient: KSqlClient\n) {\n    fun <V: View<Book>> findBooks(\n        pageIndex: Int,\n        pageSize: Int = 10,\n        sortCode: String = "name asc, edition desc",\n        viewType: KClass<T>,\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null,\n        storeWebsite: String? = null,\n        name: String? = null\n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {\n                    or(\n                        firstName `ilike?` authorName,\n                        lastName `ilike?` authorName\n                    )\n                }\n                orderBy(table.makeOrders(sortCode))\n                select(table.fetch(viewType))\n            }\n            .fetchPage(pageIndex, pageSize)\n}\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"Here, the 'findBooks' method has too many parameters. This doesn't matter to Kotlin, but it may not be a good design for Java."}),(0,a.jsx)(n.p,{children:"If your project is based on the Java language, you can choose to reduce the number of parameters in the Java language by distilling all or some of the parameters into an object."}),(0,a.jsx)(n.p,{children:"However, this does not provide substantial benefit to the example presentation here, therefore, we do not do so in order to maintain a high degree of consistency between the Java and Kotlin examples."})]}),"\n",(0,a.jsxs)(n.p,{children:["To demonstrate the invocation, let's first use the DTO language to automatically generate a DTO type that implements the ",(0,a.jsx)(n.code,{children:"View<Book>"})," interface."]}),"\n",(0,a.jsxs)(n.p,{children:["Create any file with the ",(0,a.jsx)(n.code,{children:"dto"})," extension under the ",(0,a.jsx)(n.code,{children:"src/main/dto"})," folder, and edit the code as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars\n    store {\n        id\n        name\n    }\n    authors {\n        id\n        firstName\n        lastName\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Compile the project, a java/kotlin class named ",(0,a.jsx)(n.code,{children:"BookView"})," will be automatically generated."]}),"\n",(0,a.jsxs)(n.p,{children:["The user can use it like this ",(0,a.jsx)(n.em,{children:"(considering that Java doesn't have a good way to simplify the invocation to a method with many parameters, just a demonstration the kotlin invocation)"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val bookRepository = ...Omitted...\n\nval page = bookRepository.findBooks(\n    name = "GraphQL",\n    maxPrice = BigDecimal(60),\n    authorName = "alex",\n    viewType = BookView::class\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"Page{\n    rows=[\n        BookView(\n            id=1, \n            name=Learning GraphQL, \n            edition=1, \n            price=50.00, \n            store=BookView.TargetOf_store(id=1, name=O'REILLY), \n            authors=[\n                BookView.TargetOf_authors(id=2, firstName=Alex, lastName=Banks), \n                BookView.TargetOf_authors(id=1, firstName=Eve, lastName=Procello)\n            ]\n        )\n    ], \n    totalRowCount=3, \n    totalPageCount=2\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),i=t(23104),o=t(56347),l=t(205),s=t(57485),c=t(31682),u=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);