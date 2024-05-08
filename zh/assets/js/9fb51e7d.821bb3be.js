"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7286],{43358:(e,n,l)=>{l.d(n,{Ay:()=>c,RM:()=>t});var i=l(74848),r=l(28453),a=l(11470),s=l(19365);const t=[];function o(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u7528\u6cd51: \u67e5\u8be2\u5b9e\u4f53"}),(0,i.jsx)("th",{children:"\u7528\u6cd52: \u67e5\u8be2DTO"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{rowspan:"2",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u67e5\u8be2\u4ee3\u7801"})}),(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        table.fetch(\n            Fetchers.BOOK_FETCHER\n                .allScalarFields()\n                // highlight-next-line\n                .store(\n                    Fetchers.BOOK_STORE_FETCHER\n                        .allScalarFields()\n                )\n                // highlight-next-line\n                .authors(\n                    Fetchers.AUTHOR_FETCHER\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "Learning GraphQL"\n        select(\n            // highlight-next-line\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                store {\n                    allScalarFields()\n                }\n                // highlight-next-line\n                authors {\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DTO\u4ee3\u7801"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export yourpackage.Book \n    -> package yourpackage.dto;\n\nBookView {\n    #allScalars\n    store {\n        #allScalars\n    }\n    authors {\n        #allScalars\n    }\n}\n"})}),(0,i.jsxs)(n.p,{children:["\u7f16\u8bd1\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,i.jsx)(n.code,{children:"BookView"})]})]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u67e5\u8be2\u4ee3\u7801"})}),(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        // highlight-next-line\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "GraphQL"\n        select(\n            // highlight-next-line\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id": 1,\n        "name": "Learning GraphQL",\n        "edition": 1,\n        "price": 50,\n        // highlight-next-line\n        "store": {\n            "id": 1,\n            "name": "O\'REILLY",\n            "website": null\n        },\n        // highlight-next-line\n        "authors": [\n            {\n                "id": 2,\n                "firstName": "Alex",\n                "lastName": "Banks",\n                "gender": "MALE"\n            },\n            {\n                "id": 1,\n                "firstName": "Eve",\n                "lastName": "Procello",\n                "gender": "FEMALE"\n            }\n        ]\n    },\n    {\n        "id": 2,\n        "name": "Learning GraphQL",\n        "edition": 2,\n        "price": 55,\n        // highlight-next-line\n        "store": {\n            "id": 1,\n            "name": "O\'REILLY",\n            "website": null\n        },\n        // highlight-next-line\n        "authors": [\n            {\n                "id": 2,\n                "firstName": "Alex",\n                "lastName": "Banks",\n                "gender": "MALE"\n            },\n            {\n                "id": 1,\n                "firstName": "Eve",\n                "lastName": "Procello",\n                "gender": "FEMALE"\n            }\n        ]\n    },\n    {\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51,\n        // highlight-next-line\n        "store": {\n            "id": 1,\n            "name": "O\'REILLY",\n            "website": null\n        },\n        // highlight-next-line\n        "authors": [\n            {\n                "id": 2,\n                "firstName": "Alex",\n                "lastName": "Banks",\n                "gender": "MALE"\n            },\n            {\n                "id": 1,\n                "firstName": "Eve",\n                "lastName": "Procello",\n                "gender": "FEMALE"\n            }\n        ]\n    }\n]\n'})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"[\n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        // highlight-next-line\n        store=BookView.TargetOf_store(\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        // highlight-next-line\n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        // highlight-next-line\n        store=BookView.TargetOf_store(\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        // highlight-next-line\n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        // highlight-next-line\n        store=BookView.TargetOf_store(\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        // highlight-next-line\n        authors=[\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    )\n]\n"})})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},87512:(e,n,l)=>{l.d(n,{Ay:()=>c,RM:()=>t});var i=l(74848),r=l(28453),a=l(11470),s=l(19365);const t=[];function o(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u7528\u6cd51: \u67e5\u8be2\u5b9e\u4f53"}),(0,i.jsx)("th",{children:"\u7528\u6cd52: \u67e5\u8be2DTO"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{rowspan:"2",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u67e5\u8be2\u4ee3\u7801"})}),(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        // highlight-next-line\n        table.fetch(\n            Fetchers.BOOK_FETCHER\n                .name()\n        )\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "Learning GraphQL"\n        select(\n            // highlight-next-line\n            table.fetchBy {\n                name()\n            }\n        )\n    }\n    .execute()\n'})})})]})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DTO\u4ee3\u7801"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export yourpackage.Book \n    -> package yourpackage.dto;\n\nBookView {\n    id\n    name\n}\n"})}),(0,i.jsxs)(n.p,{children:["\u7f16\u8bd1\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,i.jsx)(n.code,{children:"BookView"})]})]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u67e5\u8be2\u4ee3\u7801"})}),(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .select(\n        // highlight-next-line\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        table.name eq "Learning GraphQL"\n        select(\n            // highlight-next-line\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n'})})})]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {"id":10,"name":"Learning GraphQL"}, \n    {"id":11,"name":"Learning GraphQL"}, \n    {"id":12,"name":"Learning GraphQL"}\n]\n'})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"[\n    BookView(id=10, name=Learning GraphQL), \n    BookView(id=11, name=Learning GraphQL), \n    BookView(id=12, name=Learning GraphQL)\n]\n"})})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},33999:(e,n,l)=>{l.d(n,{Ay:()=>c,RM:()=>t});var i=l(74848),r=l(28453),a=l(11470),s=l(19365);const t=[];function o(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u7528\u6cd51: \u67e5\u8be2\u5b9e\u4f53"}),(0,i.jsx)("th",{children:"\u7528\u6cd52: \u67e5\u8be2DTO"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{rowspan:"2",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u67e5\u8be2\u4ee3\u7801"})}),(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"TreeNode rootNode = sqlClient\n    .findById(\n        Fetchers.TREE_NODE_FETCHER\n                .allScalarFields()\n                // \u5411\u4e0a\u9012\u5f52\n                // highlight-next-line\n                .recursiveParent() \u2776\n                // \u5411\u4e0b\u9012\u5f52\n                // highlight-next-line\n                .recursiveChildNodes() \u2777\n        10L\n    );\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val rootNode = sqlClient\n    .findById(\n        newFetcher(TreeNode::class).by {\n            allScalarFields()\n            // \u5411\u4e0a\u9012\u5f52\n            // highlight-next-line\n            `parent*`() \u2776\n            // \u5411\u4e0b\u9012\u5f52\n            // highlight-next-line\n            `childNodes*`() \u2777\n        }\n    )\n"})})})]})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"DTO\u4ee3\u7801"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export yourpackage.TreeNode \n    -> package yourpackage.dto;\n\nRecurisveTreeNodeView {\n    id\n    // \u5411\u4e0a\u9012\u5f52\n    // highlight-next-line\n    parent* \u2776\n    // \u5411\u4e0b\u9012\u5f52\n    // highlight-next-line\n    childNodes* \u2777\n}\n"})}),(0,i.jsxs)(n.p,{children:["\u7f16\u8bd1\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,i.jsx)(n.code,{children:"RecurisveTreeNodeView"})]})]})]}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u67e5\u8be2\u4ee3\u7801"})}),(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"RecurisveTreeNodeView rootNode = sqlClient\n    .findById(\n        RecurisveTreeNodeView.class,\n        10L\n    );\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val rootNode = sqlClient\n    .findById(\n        RecurisveTreeNodeView::class,\n        10L\n    );\n"})})})]})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id": 10,\n    "name": "Woman",\n    "parent": { \u2776\n        "id": 9,\n        "name": "Clothing", \u2776\n        "parent": {\n            "id": 1,\n            "name": "Home",\n            "parent": null \u2776\n        }\n    },\n    "childNodes": [ \u2777\n        {\n            "id": 11,\n            "name": "Casual wear",\n            "childNodes": [ \u2777\n                {\n                    "id": 12,\n                    "name": "Dress",\n                    "childNodes": [] \u2777\n                },\n                {\n                    "id": 13,\n                    "name": "Miniskirt",\n                    "childNodes": [] \u2777\n                },\n                {\n                    "id": 14,\n                    "name": "Jeans",\n                    "childNodes": [] \u2777\n                }\n            ]\n        },\n        {\n            "id": 15,\n            "name": "Formal wear",\n            "childNodes": [ \u2777\n                {\n                    "id": 16,\n                    "name": "Suit",\n                    "childNodes": [] \u2777\n                },\n                {\n                    "id": 17,\n                    "name": "Shirt",\n                    "childNodes": [] \u2777\n                }\n            ]\n        }\n    ]\n}\n'})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u7ed3\u679c"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"RecursiveTreeNodeView(\n    id=10, \n    name=Woman, \n    parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n        id=9, \n        name=Clothing, \n        parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n            id=1, \n            name=Home, \n            parent=null \u2776\n        )\n    ), \n    childNodes=[ \u2777\n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=11, \n            name=Casual wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=12, \n                    name=Dress, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=13, \n                    name=Miniskirt, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=14, \n                    name=Jeans, \n                    childNodes=[] \u2777\n                )\n            ]\n        ), \n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=15, \n            name=Formal wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=16, \n                    name=Suit, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=17, \n                    name=Shirt, \n                    childNodes=[] \u2777\n                )\n            ]\n        )\n    ]\n)\n"})})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},66183:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var i=l(74848),r=l(28453),a=l(11470),s=l(19365),t=l(87512),o=l(43358),c=l(33999);const d={sidebar_position:1,title:"\u529f\u80fd\u4ecb\u7ecd"},h=void 0,u={id:"quick-view/fetch/feature",title:"\u529f\u80fd\u4ecb\u7ecd",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/fetch/feature.mdx",sourceDirName:"quick-view/fetch",slug:"/quick-view/fetch/feature",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/feature",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/fetch/feature.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u529f\u80fd\u4ecb\u7ecd"},sidebar:"tutorialSidebar",previous:{title:"1. \u67e5\u8be2\u4efb\u610f\u5f62\u72b6",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/"},next:{title:"\u66b4\u9732\u529f\u80fd",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/export/"}},x={},p=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"1. \u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61",id:"1-\u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61",level:3},...t.RM,{value:"2. \u9644\u5e26\u5173\u8054\u5bf9\u8c61&quot;",id:"2-\u9644\u5e26\u5173\u8054\u5bf9\u8c61",level:3},...o.RM,{value:"3. \u9012\u5f52\u67e5\u8be2",id:"3-\u9012\u5f52\u67e5\u8be2",level:3},...c.RM,{value:"Repository\u4ee3\u7801\u98ce\u683c",id:"repository\u4ee3\u7801\u98ce\u683c",level:2},{value:"\u6700\u7b80\u5355\u7684Repository",id:"\u6700\u7b80\u5355\u7684repository",level:3},{value:"\u6539\u8fdb\u540e\u7684Repository",id:"\u6539\u8fdb\u540e\u7684repository",level:3}];function g(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"Jimmer\u53ef\u4ee5\u67e5\u8be2\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5bf9\u88ab\u67e5\u8be2\u6570\u636e\u7ed3\u6784\u7684\u63a7\u5236\u80fd\u529b\u5982\u540cGraphQL\u4e00\u822c\u7ec6\u817b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7528\u4e09\u4e2a\u573a\u666f\u6765\u5c55\u793a\u5668\u7528\u6cd5"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61",children:"1. \u67e5\u8be2\u6b8b\u7f3a\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u6240\u8c13\u6b8b\u7f3a\u5bf9\u8c61\uff0c\u5c31\u662f\u6307\u67e5\u8be2\u5bf9\u8c61\u7684\u90e8\u5206\u5c5e\u6027\uff0c\u5176\u4fe1\u606f\u91cf\u8fd8\u4e0d\u5982\u4e00\u4e2a\u5b64\u5355\u5bf9\u8c61\u4e30\u5bcc\u3002"})}),"\n",(0,i.jsx)(t.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"2-\u9644\u5e26\u5173\u8054\u5bf9\u8c61",children:'2. \u9644\u5e26\u5173\u8054\u5bf9\u8c61"'}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u9009\u5b9a\u4e00\u4e2a\u5b9e\u4f53\u4f5c\u4e3a\u805a\u5408\u6839\uff0c\u4e0d\u4f46\u8981\u67e5\u8be2\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u8fd8\u8981\u67e5\u8be2\u5176\u5173\u8054\u5bf9\u8c61\uff0c\u4e14\u6df1\u5ea6\u548c\u5e7f\u5ea6\u90fd\u4e0d\u53d7\u9650\u5236\u3002"}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8fd9\u79cd\u683c\u5f0f\u63a7\u5236\u80fd\u529b\u7684\u7ec6\u817b\u7a0b\u5ea6\u548cGraphQL\u4e00\u6837\u3002"}),"\n"]})]}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"3-\u9012\u5f52\u67e5\u8be2",children:"3. \u9012\u5f52\u67e5\u8be2"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u5982\u679c\u5b9e\u4f53\u5305\u542b\u81ea\u5173\u8054\u5c5e\u6027\uff0c\u53ef\u4ee5\u8fdb\u884c\u9012\u5f52\u67e5\u8be2\u3002"}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u5e76\u4e0d\u652f\u6301\u9012\u5f52\u67e5\u8be2\u3002"}),"\n"]})]}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"repository\u4ee3\u7801\u98ce\u683c",children:"Repository\u4ee3\u7801\u98ce\u683c"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4ee3\u7801\u53ea\u662f\u4e3a\u4e86\u901a\u8fc7\u4e09\u4e2a\u573a\u666f\u5c55\u793aJimmer\u5bf9\u88ab\u67e5\u8be2\u6570\u636e\u683c\u5f0f\u63a7\u5236\u7684\u5f3a\u5927\uff0c\u5e76\u6ca1\u6709\u5bf9\u4ee3\u7801\u7ed3\u6784\u8fdb\u884c\u7ec4\u7ec7\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5fc5\u7136\u8981\u4ee5\u67d0\u79cd\u65b9\u5f0f\u7ec4\u7ec7\u4ee3\u7801\u7684\uff0c\u6570\u636e\u64cd\u4f5c\u5c42\u9762\u7684\u4ee3\u7801\u5e94\u8be5\u653e\u5230",(0,i.jsx)(n.code,{children:"Repository"}),"\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"\u524d\u6587\u5c55\u793a\u4e86\u4e24\u79cd\u7528\u6cd5\uff1a\u67e5\u8be2\u5b9e\u4f53\u5bf9\u8c61\u548c\u67e5\u8be2DTO\u5bf9\u8c61\uff0c\u4f46\u4e3a\u4e86\u63a7\u5236\u672c\u6587\u7684\u590d\u6742\u5ea6\uff0c\u540e\u6587\u53ea\u8ba8\u8bba\u5982\u4f55\u5bf9\u67e5\u8be2\u5b9e\u4f53\u5bf9\u8c61\u8fd9\u79cd\u60c5\u51b5\u8fdb\u884c\u4ee3\u7801\u7ec4\u7ec7\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6700\u7b80\u5355\u7684repository",children:"\u6700\u7b80\u5355\u7684Repository"}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u8ba9\u6211\u4eec\u7f16\u5199\u4e00\u4e2aBookRepository\uff0c\u7528\u4e8e\u67e5\u8be2Book"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"@Repository\npubic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @Nullable\n    public Book findBookById(long id) {\n        return sqlClient.findById(Book.class, id);\n    }\n\n    public List<Book> findBooksByName(@Nullable String name) {\n        BookTable table = Tables.BOOK_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .whereIf(\n                name != null && !name.isEmpty(),\n                table.name().ilike(name)\n            )\n            .select(table);\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient\n) {\n\n    fun findBookById(id: Long): Book? =\n        sqlClient.findById(Book::class, id)\n\n    fun findBooksByName(name: String?): List<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike name);\n                }\n                select(table)\n            }\n            .execute()\n}\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Java\u4ee3\u7801\u4e2d\u7684",(0,i.jsx)(n.code,{children:"JSqlClient"}),"\u548cKotlin\u4ee3\u7801\u4e2d\u7684",(0,i.jsx)(n.code,{children:"KSqlClient"}),"\uff0c\u662fJimmer\u4e3aJava\u548cKotlin\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684API\u5165\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5b9e\u9645\u9879\u76ee\u4e2d\u8be5\u5bf9\u8c61\u4e3a\u5168\u5c40\u5bf9\u8c61\uff0c\u672c\u7ae0\u8282\u6587\u6863\u7528\u4e8e\u5feb\u901f\u9884\u89c8\uff0c\u5e76\u4e0d\u4f1a\u6df1\u5165\u4ecb\u7ecd\u3002\u8fd9\u91cc\u8bfb\u8005\u53ef\u4ee5\u5148\u5ffd\u7565\u5177\u4f53\u7ec6\u8282\uff0c\u77e5\u9053",(0,i.jsx)(n.code,{children:"sqlClient"}),"\u662fAPI\u5165\u53e3\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u6587\u7684\u76ee\u7684\u5728\u4e8e\u63a7\u5236\u8fd4\u56de\u5bf9\u8c61\u7684\u683c\u5f0f\uff0c\u800c\u5e76\u975e\u4ecb\u7ecd\u590d\u6742\u67e5\u8be2\u6761\u4ef6 ",(0,i.jsxs)(n.em,{children:["(\u8fd9\u90e8\u5206\u5185\u5bb9\u5728",(0,i.jsx)(n.a,{href:"../dsl",children:"\u5feb\u901f\u9884\u89c8/\u4efb\u610f\u52a8\u6001\u67e5\u8be2"}),"\u4e2d\u4ecb\u7ecd)"]}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6240\u4ee5\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u8c61\u5f81\u6027\u5730\u91c7\u7528",(0,i.jsx)(n.code,{children:"Book.id"}),"\u548c",(0,i.jsx)(n.code,{children:"Book.name"}),"\u4f5c\u4e3a\u8fc7\u6ee4\u6761\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Jimmer\u662f\u6280\u672f\u4e2d\u7acb\u7684\uff0c\u4f46\u662f\u91c7\u7528Spring\u98ce\u683c\u7684\u4ee3\u7801\u5f80\u5f80\u80fd\u591f\u8d77\u5230\u7b80\u5316\u8bb2\u89e3\u7684\u76ee\u7684\uff0c\u6240\u4ee5\uff0c\u672c\u4f8b\u91c7\u7528Spring\u98ce\u683c\u4e66\u5199\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f46\u662f\uff0c\u4e3a\u4e86\u65b9\u4fbf\u975eSpring\u7528\u6237\u9605\u8bfb\uff0c\u8fd9\u91cc\u6545\u610f\u6ca1\u6709\u91c7\u7528",(0,i.jsx)(n.a,{href:"../../spring/repository",children:"Jimmer\u5bf9Spring Data\u7684\u652f\u6301"}),"\uff0c\u800c\u662f\u91c7\u7528\u4e86\u624b\u52a8\u6ce8\u5165",(0,i.jsx)(n.code,{children:"sqlClient"}),"\u8fd9\u79cd\u76f8\u5bf9\u539f\u59cb\u7684\u5199\u6cd5\uff0c\u628aSpring\u7684\u5e72\u6270\u964d\u5230\u6700\u4f4e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Java\u4ee3\u7801\u4e2d\u7684",(0,i.jsx)(n.code,{children:"Tables.BOOK_TABLE"}),"\u662fJimmer\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\u7684\u4ee3\u7801\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u5982\u4e0a\u8ff0\u7c7b\u6709\u4e00\u4e2a\u5b9e\u4f8b",(0,i.jsx)(n.code,{children:"bookRepository"}),"\uff0c\u4ee5",(0,i.jsx)(n.code,{children:"findBookById"}),"\u4e3a\u4f8b\uff1a"]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"System.out.println(bookRepository.findBookById(1L));\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"println(bookRepository.findBookById(1L));\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"\u5f97\u5230\u5982\u4e0b\u7684\u8f93\u51fa\u7ed3\u679c:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id" : 1,\n  "name" : "Learning GraphQL",\n  "edition" : 1,\n  "price" : 50.00,\n  "store" : {\n    "id" : 1\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8f93\u51fa\u683c\u5f0f\u662f\u56fa\u5b9a\u7684\uff0c\u548c\u5f53\u524d\u7684\u8981\u8ba8\u8bba\u7684\u8bdd\u9898\u201c\u67e5\u8be2\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u201d\u4e0d\u7b26\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u6539\u8fdb",(0,i.jsx)(n.code,{children:"BookRepository"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6539\u8fdb\u540e\u7684repository",children:"\u6539\u8fdb\u540e\u7684Repository"}),"\n",(0,i.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u5bf9\u4e4b\u524d\u7684",(0,i.jsx)(n.code,{children:"BookRepository"}),"\u7c7b\u7a0d\u52a0\u6539\u8fdb"]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"@Repository\npubic class BookRepository {\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @Nullable\n    public Book findBookById(\n        long id,\n        // highlight-next-line\n        Fetcher<Book> fetcher\n    ) {\n        return sqlClient.findById(\n            // highlight-next-line\n            fetcher,\n            id\n        );\n    }\n\n    public List<Book> findBooksByName(\n        @Nullable String name,\n        // highlight-next-line\n        @Nullable Fetcher<Book> fetcher\n    ) {\n        BookTable table = Tables.BOOK_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .whereIf(\n                name != null && !name.isEmpty(),\n                table.name().ilike(name)\n            )\n            .select(\n                // highlight-next-line\n                table.fetch(fetcher)\n            );\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"@Repository\nclass BookRepository(\n    private val sqlClient: KSqlClient\n) {\n\n    fun findBookById(\n        id: Long,\n        // highlight-next-line\n        fetcher: Fetcher<Book>\n    ): Book? =\n        sqlClient.findById(\n            // highlight-next-line\n            fetcher,\n            id\n        )\n\n    fun findBooksByName(\n        name: String? = null,\n        // highlight-next-line\n        fetcher: Fetcher<Book>? = null\n    ): List<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike name);\n                }\n                select(\n                    // highlight-next-line\n                    table.fetch(fetcher)\n                )\n            }\n            .execute()\n}\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u65b9\u6cd5\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,i.jsx)(n.code,{children:"Fetcher<Book>"}),"\u7684\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b83\u7075\u6d3b\u63a7\u5236\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u683c\u5f0f ",(0,i.jsx)(n.em,{children:"(\u5373\uff0c\u88ab\u67e5\u8be2\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6)"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u8fd9\u662f\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\uff0cRepository\u4ec5\u8d1f\u8d23\u7b5b\u9009\u3001\u6392\u5e8f\u3001\u5206\u9875\u7b49\u64cd\u4f5c\uff0c\u4f46\u4e0d\u63a7\u5236\u8fd4\u56de\u6570\u636e\u7684\u683c\u5f0f\uff0c\u800c\u662f\u901a\u8fc7",(0,i.jsx)(n.code,{children:"Fetcher<E>"}),"\u53c2\u6570\u5c06\u6570\u636e\u683c\u5f0f\u7684\u63a7\u5236\u6743\u66b4\u9732\u51fa\u53bb\uff0c\u8ba9\u66f4\u4e0a\u5c42\u7684\u4e1a\u52a1\u903b\u8f91\u6765\u51b3\u5b9a\u3002"]})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>s});l(96540);var i=l(18215);const r={tabItem:"tabItem_Ymn6"};var a=l(74848);function s(e){let{children:n,hidden:l,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>B});var i=l(96540),r=l(18215),a=l(23104),s=l(56347),t=l(205),o=l(57485),c=l(31682),d=l(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:i,default:r}}=e;return{value:n,label:l,attributes:i,default:r}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:l}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,a=u(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=l.find((e=>e.default))??l[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,h]=p({queryString:l,groupId:r}),[g,j]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(l);return[r,(0,i.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:r}),m=(()=>{const e=c??g;return x({value:e,tabValues:a})?e:null})();(0,t.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=l(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(74848);function f(e){let{className:n,block:l,selectedValue:i,selectValue:s,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,l=o.indexOf(n),r=t[l].value;r!==i&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":i===n}),children:l??n},n)}))})}function k(e){let{lazy:n,children:l,selectedValue:r}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(k,{...n,...e})]})}function B(e){const n=(0,j.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>t});var i=l(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);