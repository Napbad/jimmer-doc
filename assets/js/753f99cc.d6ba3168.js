"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1220],{60430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(74848),a=n(28453),r=n(11470),o=n(19365);const s={sidebar_position:6,title:"Querying DTOs"},l=void 0,c={id:"query/object-fetcher/dto",title:"Querying DTOs",description:"Previously we introduced using object fetchers to flexibly control the shape of queried data structures.",source:"@site/docs/query/object-fetcher/dto.mdx",sourceDirName:"query/object-fetcher",slug:"/query/object-fetcher/dto",permalink:"/jimmer-doc/docs/query/object-fetcher/dto",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/dto.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Querying DTOs"},sidebar:"tutorialSidebar",previous:{title:"View Properties",permalink:"/jimmer-doc/docs/query/object-fetcher/view"},next:{title:"Working with Spring Data",permalink:"/jimmer-doc/docs/query/object-fetcher/spring-data"}},d={},h=[{value:"Defining DTO Shapes",id:"defining-dto-shapes",level:2},{value:"Auto-generated DTO Types",id:"auto-generated-dto-types",level:2},{value:"Querying DTO Objects",id:"querying-dto-objects",level:2},{value:"Using findById",id:"using-findbyid",level:3},{value:"Using Custom Queries",id:"using-custom-queries",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Previously we introduced using object fetchers to flexibly control the shape of queried data structures."}),"\n",(0,i.jsx)(t.p,{children:"Now we introduce an equivalent capability: querying DTO objects."}),"\n",(0,i.jsxs)(t.p,{children:["Jimmer provides a ",(0,i.jsx)(t.a,{href:"../../object/view/dto-language",children:"DTO language"})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This language is essentially another way to express object fetchers."})}),"\n",(0,i.jsx)(t.p,{children:"Using this language, developers can quickly define various data structure shapes with an entity type as the aggregate root. The compiler will generate corresponding Java/Kotlin DTO classes for each defined shape. Each DTO type contains mutual conversion logic with the original dynamic type, and an object fetcher matching its own shape."}),"\n",(0,i.jsx)(t.p,{children:"In some cases, after the server queries data in a certain shape, it is not meant to be returned as an HTTP response, but rather used internally to drive subsequent complex business logic. This is an ideal scenario for this approach."}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Note that if the server queries data in a certain shape not for its own use, but directly as the HTTP response, it is more recommended to directly return the dynamic entity object and use the solutions in ",(0,i.jsx)(t.a,{href:"../../client",children:"Generate Client Code"})," to automatically generate client code with a great developer experience."]})}),"\n",(0,i.jsx)(t.h2,{id:"defining-dto-shapes",children:"Defining DTO Shapes"}),"\n",(0,i.jsxs)(t.p,{children:["This article focuses on explaining how to query static DTO types, not a systematic introduction to the DTO language itself. Please refer to ",(0,i.jsx)(t.a,{href:"../../object/view/dto-language",children:"Object section/DTO Mapping/DTO Language"})," for the complete DTO language."]}),"\n",(0,i.jsxs)(t.p,{children:["Assuming the fully qualified name of the ",(0,i.jsx)(t.code,{children:"Book"})," class is ",(0,i.jsx)(t.code,{children:"com.yourcompany.yourpoject.model.Book"}),", you can"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"In the project where the entity is defined"}),", create the directory ",(0,i.jsx)(t.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Under ",(0,i.jsx)(t.code,{children:"src/main/dto"}),", create subdirectories following the package path of the entity type ",(0,i.jsx)(t.code,{children:"com/yourcompany/yourpoject/model"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the directory created in the previous step, create a file ",(0,i.jsx)(t.code,{children:"Book.dto"}),". The file name must match the entity class name, and the extension must be ",(0,i.jsx)(t.code,{children:"dto"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Edit this file, use the DTO language to define various DTO shapes for the Book entity"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",metastring:'title="Book.dto" ',children:"# highlight-next-line\nBookDetailView {\n    \n    #allScalars\n    \n    store {\n        #allScalars\n    }\n\n    authors {\n        #allScalars\n    }\n}\n\nSimpleBookView { ...omitted... }\n\n...Omit definitions of other DTO shapes...\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"auto-generated-dto-types",children:"Auto-generated DTO Types"}),"\n",(0,i.jsx)(t.p,{children:"Jimmer is responsible for compiling dto files and automatically generating DTO types matching these shapes."}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.p,{children:"If Java/Kotlin source code files other than dto files are modified, running the application directly from the IDE can trigger recompilation of dto files."}),(0,i.jsx)(t.p,{children:"However, if no Java/Kotlin files other than dto files are modified, simply clicking the run button in the IDE does not cause dto files to be recompiled unless explicitly rebuilding!"}),(0,i.jsxs)(t.p,{children:["If you are using Gradle as your build tool, you can also use the third-party Gradle plugin provided by the community to solve this problem: ",(0,i.jsx)(t.a,{href:"https://github.com/Enaium/jimmer-gradle",children:"jimmer-gradle"})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Taking ",(0,i.jsx)(t.code,{children:"BookDetailView"})," in the above code as an example, after the dto file is successfully compiled by Jimmer, the following DTO type will be automatically generated:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="BookDetailView.java"',children:'package com.yourcompany.yourpoject.model.dto;\n\nimport com.yourcompany.yourpoject.model.Book;\nimport org.babyfish.jimmer.View;\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookDetailView implements View<Book> {\n\n    private long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    // highlight-next-line\n    private TargetOf_store store;\n\n    // highlight-next-line\n    private List<TargetOf_authors> authors;\n\n    // highlight-next-line\n    public static class TargetOf_store implements View<BookStore> {\n\n        private long id;\n    \n        private String name;\n\n        @Nullable\n        private String website;\n\n        ...other members omitted...\n    }\n\n    // highlight-next-line\n    public static class TargetOf_authors implements View<Author> {\n\n        private long id;\n        \n        private String firstName;\n\n        private String lastName;\n\n        private Gender gender;\n\n        ...other members omitted...\n    }\n\n    ...other members omitted...\n}\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",metastring:'title="BookDetailView.kt"',children:'package com.yourcompany.yourpoject.model.dto\n\nimport com.yourcompany.yourpoject.model.Book\nimport org.babyfish.jimmer.View\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookDetailView(\n    val id: Long = 0,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n\n    // highlight-next-line\n    val store: TargetOf_store? = null,\n    // highlight-next-line\n    val authors: List<TargetOf_authors> = emptyList(),\n) : View<Book> {\n\n    // highlight-next-line\n    data class TargetOf_store(\n        val id: Long = 0,\n        val name: String = "",\n        val website: String? = null,\n    ) : View<BookStore> {\n        ...other members omitted...\n    }\n\n    // highlight-next-line\n    data class TargetOf_authors(\n        val id: Long = 0,\n        public val firstName: String = "",\n        public val lastName: String = "",\n        public val gender: Gender,\n    ) : View<Author> {\n        ...other members omitted...\n    }\n\n    ...other members omitted...\n} \n'})})})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The generated DTO classes are in the ",(0,i.jsx)(t.code,{children:"dto"})," subpackage of the entity package, not the entity package itself."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"For Java, it is assumed lombok is already in use."}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"querying-dto-objects",children:"Querying DTO Objects"}),"\n",(0,i.jsx)(t.h3,{id:"using-findbyid",children:"Using findById"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"BookDetailView view = sqlClient.findNullable(\n    // highlight-next-line\n    BookDetailView.class, \n    1L\n);\nSystem.out.println(view);\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val view = sqlClient.findNullable(\n    // highlight-next-line\n    BookDetailView::class, \n    1L\n);\nprintln(view)\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["The printed result is as follows ",(0,i.jsx)(t.em,{children:"(formatted manually for readability)"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# highlight-next-line  \nBookDetailView(\n    id=1,\n    name=Learning GraphQL,\n    edition=1,\n    price=50.00,\n    # highlight-next-line\n    store=BookDetailView.TargetOf_store(\n        id=1,\n        name=O'REILLY,\n        website=null,\n        version=0\n    ),\n    authors=[\n        # highlight-next-line\n        BookDetailView.TargetOf_authors(\n            id=2,\n            firstName=Alex,\n            lastName=Banks,\n            gender=MALE  \n        ),\n        # highlight-next-line \n        BookDetailView.TargetOf_authors(\n            id=1,\n            firstName=Eve,\n            lastName=Procello,\n            gender=FEMALE\n        )\n    ]\n)\n"})}),"\n",(0,i.jsx)(t.p,{children:"It's easy to see that although dynamic entity objects are no longer returned, the functionality is exactly the same as object fetchers. Why is this?"}),"\n",(0,i.jsx)(t.p,{children:"The DTO types generated from the DTO language all contain object fetchers matching their own shapes, as follows:"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="BookDetailView.java" ',children:"@Data\npublic class BookDetailView implements View<Book> {\n\n    public static final ViewMetadata<Book, BookDetailView> METADATA =  \n        new ViewMetadata<Book, BookDetailView>(\n            // highlight-start     \n            Fetchers.BOOK_FETCHER\n                .name()\n                .edition()\n                .price()\n                .store(TargetOf_store.METADATA.getFetcher())\n                .authors(TargetOf_authors.METADATA.getFetcher()),\n            // highlight-end\n            BookDetailView::new\n    );\n\n    @Data\n    public static class TargetOf_store implements View<BookStore> {\n\n        public static final ViewMetadata<BookStore, TargetOf_store> METADATA =  \n            new ViewMetadata<BookStore, TargetOf_store>(\n                // highlight-start\n                Fetchers.BOOK_STORE_FETCHER\n                    .name()\n                    .website()\n                    .version(),\n                // highlight-end\n                TargetOf_store::new\n        );\n\n        ...other members omitted...\n    }\n\n    @Data\n    public static class TargetOf_authors implements View<Author> {\n\n        public static final ViewMetadata<Author, TargetOf_authors> METADATA =\n            new ViewMetadata<Author, TargetOf_authors>(\n                // highlight-start\n                Fetchers.AUTHOR_FETCHER\n                    .firstName()\n                    .lastName()\n                    .gender(),\n                // highlight-end\n                TargetOf_authors::new\n        );\n\n        ...other members omitted...\n    }\n\n    ...other members omitted...\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",metastring:'title="BookDetailView.kt"',children:"@Data  \ndata class BookDetailView(\n    ...omitted...\n) : View<Book> {\n\n    ...other members omitted...\n\n    companion object {\n        @JvmStatic\n        public val METADATA: ViewMetadata<Book, BookDetailView> =  \n            ViewMetadata<Book, CompositeBookInput>(\n                // highlight-start\n                newFetcher(Book::class).by {\n                    name()\n                    edition()\n                    price()\n                    store(TargetOf_store.METADATA.fetcher) \n                    authors(TargetOf_authors.METADATA.fetcher)\n                }\n                // highlight-end\n            ) {\n                CompositeBookInput(it)\n            }\n\n    }\n\n    @Data\n    public static class TargetOf_store implements View<BookStore> {\n\n        ...other members omitted...\n\n        companion object {\n\n            @JvmStatic\n            val METADATA: ViewMetadata<BookStore, TargetOf_store> =  \n                ViewMetadata<BookStore, TargetOf_store>(\n                    // highlight-start\n                    newFetcher(BookStore::class).by {\n                        name()\n                        website()\n                    }\n                    // highlight-end\n                ) {\n                    TargetOf_store(it)\n                }\n\n        }\n    }\n\n    @Data\n    public static class TargetOf_authors implements View<Author> {\n\n        ...other members omitted...\n\n        companion object {\n\n            @JvmStatic\n            val METADATA: ViewMetadata<Author, TargetOf_authors> =\n                ViewMetadata<Author, TargetOf_authors>(\n                    // highlight-start  \n                    newFetcher(Author::class).by {\n                        firstName()\n                        lastName()\n                        gender()\n                    }\n                    // highlight-end\n                ) {\n                    TargetOf_authors(it)\n                }\n        }   \n    }\n}\n"})})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This is why this article says at the beginning that the DTO language is essentially another way to express object fetchers."})}),"\n",(0,i.jsx)(t.h3,{id:"using-custom-queries",children:"Using Custom Queries"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient  \n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.name())\n    .orderBy(table.edition().desc())\n    .select(\n        // highlight-next-line\n        table.fetch(BookDetailView.class)  \n    )  \n    .execute()\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'val books = sqlClient  \n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.name)\n        orderBy(table.edition.desc())\n        select(\n            // highlight-next-line\n            table.fetch(BookDetailView::class)\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Here we see that ",(0,i.jsx)(t.code,{children:"table.fetch(fetcher)"})," in previous code is replaced with ",(0,i.jsx)(t.code,{children:"table.fetch(BookDetailView.class)"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["All low-level query APIs can replace ",(0,i.jsx)(t.code,{children:"fetcher"})," with ",(0,i.jsx)(t.code,{children:"viewType"}),", again proving that the DTO language is essentially another way to express object fetchers, as stated at the beginning."]})})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(18215);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(96540),a=n(18215),r=n(23104),o=n(56347),s=n(205),l=n(57485),c=n(31682),d=n(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,h]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=c??p;return g({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function y(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==i&&(c(t),o(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,{...t,...e}),(0,j.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);