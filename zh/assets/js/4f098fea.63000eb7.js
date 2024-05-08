"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3120],{14427:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=l(74848),t=l(28453),a=l(11470),o=l(19365);const i={sidebar_position:5,title:"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868"},r=void 0,c={id:"mutation/associations",title:"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868",description:"\u7b80\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/associations.mdx",sourceDirName:"mutation",slug:"/mutation/associations",permalink:"/jimmer-doc/zh/docs/mutation/associations",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/associations.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868"},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664\u6307\u4ee4",permalink:"/jimmer-doc/zh/docs/mutation/delete-command"},next:{title:"\u4fdd\u5b58\u524d\u62e6\u622a\u5668",permalink:"/jimmer-doc/zh/docs/mutation/draft-interceptor"}},d={},u=[{value:"\u7b80\u8ff0",id:"\u7b80\u8ff0",level:2},{value:"\u63d2\u5165\u5173\u8054",id:"\u63d2\u5165\u5173\u8054",level:2},{value:"\u9006\u53d8\u6362",id:"\u9006\u53d8\u6362",level:2},{value:"\u6279\u91cf\u63d2\u5165",id:"\u6279\u91cf\u63d2\u5165",level:2},{value:"\u68c0\u67e5\u5b58\u5728\u6027",id:"\u68c0\u67e5\u5b58\u5728\u6027",level:2},{value:"\u5220\u9664\u5173\u8054",id:"\u5220\u9664\u5173\u8054",level:2},{value:"\u6279\u91cf\u5220\u9664",id:"\u6279\u91cf\u5220\u9664",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u7b80\u8ff0",children:"\u7b80\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u4e2d\u95f4\u8868\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\uff0c\u6ca1\u6709\u4e0e\u4e4b\u76f4\u63a5\u5bf9\u5e94\u7684\u5b9e\u4f53\u7c7b\u578b\u3002\u6b64\u95ee\u9898\u5df2\u5728",(0,s.jsx)(n.a,{href:"../query/associations",children:"\u67e5\u8be2\u4e2d\u95f4\u8868"}),"\u4e00\u6587\u4e2d\u88ab\u9610\u8ff0\uff0c\u6b64\u5904\u4e0d\u4f5c\u91cd\u590d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u5728",(0,s.jsx)(n.a,{href:"./save-command",children:"Save\u6307\u4ee4"}),"\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86save\u6307\u4ee4\u3002\u5b83\u80fd\u5bf9\u6bd4\u6570\u636e\u5e93\u73b0\u6709\u6570\u636e\u548c\u7528\u6237\u8981\u4fdd\u5b58\u7684\u65b0\u6570\u636e\uff0c\u5982\u679c\u67d0\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4e2d\u95f4\u8868\u5c31\u4f1a\u88ab\u4fee\u6539\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8bda\u7136\uff0cSave\u6307\u4ee4\u529f\u80fd\u975e\u5e38\u5f3a\u5927\uff0c\u5bf9\u4e2d\u95f4\u8868\u7684\u4fee\u6539\u53ea\u662f\u5176\u4e2d\u5f88\u5c0f\u7684\u4e00\u4e2a\u529f\u80fd\u70b9\u3002\u7136\u800c\uff0c\u6709\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u9700\u8981\u7b80\u5355\u5730\u5bf9\u4e2d\u95f4\u8868\u8fdb\u884c\u63d2\u5165\u6216\u5220\u9664\u64cd\u4f5c\uff0c\u6211\u4eec\u4e0d\u9700\u8981Save\u6307\u4ee4\u90a3\u4e48\u5f3a\u5927\u7684\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Jimmer\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u7528\u66f4\u7b80\u5355\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u5bf9\u4e2d\u95f4\u8868\u7684\u6570\u636e\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u5165\u5173\u8054",children:"\u63d2\u5165\u5173\u8054"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .save(12L, 3L);\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(Book::authors)\n    // highlight-next-line\n    .save(12L, 3L)\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into \n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        BOOK_ID, AUTHOR_ID\n    ) \n    values (?, ?)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u5173\u8054\u5c5e\u6027",(0,s.jsx)(n.code,{children:"Book.authors"}),"\u64cd\u4f5c\u4e2d\u95f4\u8868\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u7406\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,s.jsx)(n.code,{children:"Authors.books"}),"\u8fbe\u5230\u76f8\u540c\u76ee\u7684\uff1a"]}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(AuthorProps.BOOKS)\n    // highlight-next-line\n    .save(3L, 12L);\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(Author::books)\n    // highlight-next-line\n    .save(3L, 12L)\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u548c\u4e0a\u4e00\u4e2a\u4f8b\u5b50\u76f8\u6bd4\uff0c\u56e0\u4e3a\u5173\u8054\u7684\u65b9\u5411\u4e0d\u540c\uff0c\u6240\u4ee5",(0,s.jsx)(n.code,{children:"save"}),"\u65b9\u6cd5\u7684\u53c2\u6570\u987a\u5e8f\u4e0d\u540c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into \n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        AUTHOR_ID, BOOK_ID\n    )\n    values (?, ?)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u96be\u53d1\u73b0\uff0cinsert\u8bed\u53e5\u5217\u7684\u987a\u5e8f\u4e5f\u4e0d\u540c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u9006\u53d8\u6362",children:"\u9006\u53d8\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u53cc\u5411\u5173\u8054\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"reverse"}),"\u5728\u6b63\u53cd\u5173\u8054\u4e4b\u95f4\u5207\u6362"]}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Associations bookToAuthor = sqlClient\n    .getAssociations(BookProps.AUTHORS);\nAssociations authorToBook = sqlClient\n    .getAssociations(AuthorProps.BOOKS);\nAssociations authorToBook2 = \n    // highlight-next-line\n    bookToAuthor.reverse();\nAssociations bookToAuthor2 =\n    // highlight-next-line\n    authorToBook.reverse();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val bookToAuthor = \n    sqlClient.getAssociations(\n        Book::authors\n    )\nval authorToBook = \n    sqlClient.getAssociations(\n        Author::books\n    )\nval authorToBook2 = \n    // highlight-next-line\n    bookToAuthor.reverse()\nval bookToAuthor2 = \n    // highlight-next-line\n    authorToBook.reverse()\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bookToAuthor"}),"\u548c",(0,s.jsx)(n.code,{children:"bookToAuthor2"}),"\u5b8c\u5168\u7b49\u4ef7"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"authorToBook"}),"\u548c",(0,s.jsx)(n.code,{children:"authorToBook2"}),"\u5b8c\u5168\u7b49\u4ef7"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cf\u63d2\u5165",children:"\u6279\u91cf\u63d2\u5165"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .saveAll(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L)\n        )\n    );\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .saveAll(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u67093\u672c\u4e66\uff0c\u4e24\u4e2a\u4f5c\u8005\uff0c\u51716\u79cd\u7ec4\u5408\u65b9\u5f0f\u3002",(0,s.jsx)(n.code,{children:"saveAll"}),"\u65b9\u6cd5\u628a\u8fd96\u79cd\u7ec4\u5408\u5168\u90e8\u63d2\u5165\u5230\u4e2d\u95f4\u8868\u4e2d\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values \n    /* highlight-start */\n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?), \n    (?, ?)\n    /* highlight-end */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u9762\u8fd9\u79cd\u5199\u6cd5\u5f88\u7e41\u7410\uff0c",(0,s.jsx)(n.code,{children:"3 * 2 = 6"}),"\u8fd8\u53ef\u4ee5\u63a5\u53d7\uff0c\u4f46",(0,s.jsx)(n.code,{children:"7 * 9 = 63"}),"\u5462\uff1f\u96be\u9053\u6784\u5efa63\u4e2a\u5143\u7ec4\u5417\uff1f"]}),"\n",(0,s.jsx)(n.p,{children:"jimmer-sql\u63d0\u4f9b\u4e00\u79cd\u5feb\u6377\u5199\u6cd5"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // \u4fdd\u5b58\u4e24\u4e2aid\u96c6\u5408\u7684\u7b1b\u5361\u5c14\u4e58\u79ef\n    // highlight-next-line\n    .saveAll(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    );\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // \u4fdd\u5b58\u4e24\u4e2aid\u96c6\u5408\u7684\u7b1b\u5361\u5c14\u4e58\u79ef\n    // highlight-next-line\n    .saveAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u9762\u7684",(0,s.jsx)(n.code,{children:"saveAll"}),"\u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u96c6\u5408\u53c2\u6570\uff0c\u628a\u8fd9\u4e24\u4e2a\u96c6\u5408\u5f62\u6210\u7684\u7b1b\u5361\u5c14\u4e58\u79ef\u63d2\u5165\u4e2d\u95f4\u8868\uff0c\u6240\u4ee5\uff0c\u529f\u80fd\u548c\u4e0a\u4e00\u4e2a\u4f8b\u5b50\u7684\u76f8\u540c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u68c0\u67e5\u5b58\u5728\u6027",children:"\u68c0\u67e5\u5b58\u5728\u6027"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5411\u4e2d\u95f4\u8868\u63d2\u5165\u5df2\u7ecf\u5b58\u5728\u7684id\u5143\u7ec4\uff0c\u6570\u636e\u5e93\u4f1a\u88ab\u62a5\u9519\uff0c\u56e0\u4e3a\u8fdd\u80cc\u4e86\u552f\u4e00\u6027\u7ea6\u675f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u8fdb\u884c\u5b58\u5728\u6027\u68c0\u67e5\u3002"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    .saveAllCommand(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    )\n    // highlight-next-line\n    .checkExistence()\n    .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .saveAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L),\n        // highlight-next-line\n        checkExistence = true\n    )\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc",(0,s.jsx)(n.code,{children:"checkExistence()"}),"\u8868\u793a\u5148\u68c0\u67e5\u8981\u63d2\u5165\u7684\u6570\u636e\u6709\u54ea\u4e9b\u5df2\u7ecf\u5b58\u5728\uff0c\u7136\u540e\u53ea\u63d2\u5165\u4e0d\u5b58\u5728\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u8bed\u53e5\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u68c0\u67e5\u54ea\u4e9b\u5f85\u63d2\u5165\u6570\u636e\u5df2\u7ecf\u5b58\u5728\u6570\u636e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select \n    BOOK_ID, AUTHOR_ID \nfrom BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in(\n        (?, ?), \n        (?, ?),\n        (?, ?)\n    )\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u4e0a\u4e00\u6b65\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u53ef\u4ee5\u8ba1\u7b97\u5f97\u5230\u771f\u6b63\u9700\u8981\u63d2\u5165\u7684\u6570\u636e\u3002\u5982\u679c\u6ca1\u6709\u9700\u8981\u63d2\u5165\u7684\u6570\u636e\uff0c\u8df3\u8fc7\u672c\u6b65\u9aa4\uff1b\u5426\u5219\uff0c\u6267\u884c\u672c\u6b65\u9aa4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u5047\u8bbe\u5224\u65ad\u540e\u771f\u6b63\u9700\u8981\u63d2\u5165\u7684\u6570\u636e\u8fd8\u5269\u4e24\u6761\uff0c\u751f\u6210\u7684SQL\u4e3a:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values \n    (?, ?), \n    (?, ?)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5220\u9664\u5173\u8054",children:"\u5220\u9664\u5173\u8054"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .delete(12L, 3L);\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .delete(12L, 3L)\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"delete from BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?)\n    )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cf\u5220\u9664",children:"\u6279\u91cf\u5220\u9664"}),"\n",(0,s.jsx)(n.p,{children:"\u548c\u6279\u91cf\u63d2\u5165\u7c7b\u4f3c\uff0c\u6709\u4e24\u79cd\u6279\u91cf\u5220\u9664\u7684\u5199\u6cd5"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(\n        BookTableEx.claBookProps.AUTHORS)\n    // highlight-next-line\n    .deleteAll(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L),\n        )\n    );\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .deleteAll(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u6216"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .deleteAll(\n        Arrays.asList(10L, 11L, 12L),\n        Arrays.asList(1L, 3L)\n    );\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    ) \n    // highlight-next-line\n    .deleteAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"delete from BOOK_AUTHOR_MAPPING \nwhere \n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?), \n        (?, ?)\n    )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"\u8bf7\u4e0d\u8981\u6ee5\u7528\u6b64\u529f\u80fd\uff0c\u6b64\u529f\u80fd\u4ec5\u9002\u7528\u4e8e\u5bf9\u4e2d\u95f4\u8868\u8fdb\u884c\u7b80\u5355\u63d2\u5165\u548c\u5220\u9664\u7684\u573a\u5408\uff0c\u5373\u63a8\u8350\u4ec5\u5728\u9762\u4e34\u6700\u7b80\u5355\u7684\u589e\u91cf\u64cd\u4f5c\u65f6\u624d\u4f7f\u7528\u3002"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u9700\u8981\u548c\u6570\u636e\u5e93\u73b0\u6709\u6570\u636e\u505a\u6bd4\u5bf9\uff0c\u8be5\u529f\u80fd\u660e\u663e\u4e0d\u662f\u6700\u4f18\u9009\u62e9\uff0c\u4ee3\u7801\u4f1a\u5f88\u7e41\u7410\uff0c\u5982\u4e0b"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="\u4e0d\u6070\u5f53\u7528\u6cd5\u793a\u8303"',children:"public void setAuthors(long bookId, Collection<Long> authorIds) {\n\n    // Get old author ids\n    AssociationTable<Book, BookTableEx, Author, AuthorTableEx> table =\n                AssociationTable.of(BookTableEx.class, BookTableEx::authors);    \n    List<Long> oldAuthorIds = sqlClient\n            .createAssociationQuery(table)\n            .where(table.source().id().eq(1L))\n            .select(table.target().id())\n            .execute();\n\n    // Delete `oldAuthorIds - authorIds`\n    List<Long> detachedAuthorIds = new ArrayList<>(oldAuthorIds);\n    detachedAuthorIds.removeAll(authorIds);\n    sqlClient.getAssociations(BookProps.AUTHORS).deleteAll(\n            Collections.singleton(bookId),\n            detachedAuthorIds\n    );\n\n    // Insert `authorIds - oldAuthorIds`\n    List<Long> attachedAuthorIds = new ArrayList<>(authorIds);\n    attachedAuthorIds.removeAll(oldAuthorIds);\n    sqlClient.getAssociations(BookProps.AUTHORS).saveAll(\n            Collections.singleton(bookId),\n            attachedAuthorIds\n    );\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="\u4e0d\u6070\u5f53\u7528\u6cd5\u793a\u8303"',children:"fun setAuthors(bookId: Long, authorIds: Collection<Long>) {\n    // Get old author ids\n    val oldAuthorIds = sqlClient.queries.forList(Book::authors) {\n        where(table.source.id eq bookId)\n        select(table.target.id)\n    }.execute().toSet()\n\n    // Delete `oldAuthorIds - authorIds`\n    sqlClient\n        .getAssociations(Book::authors)\n        .deleteAll(listOf(bookId), oldAuthorIds - authorIds)\n\n    // Insert `authorIds - oldAuthorIds`\n    sqlClient\n        .getAssociations(Book::authors)\n        .saveAll(listOf(bookId), authorIds - oldAuthorIds)\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u5f88\u660e\u663e\uff0c\u8fd9\u6837\u5904\u7406\u5f88\u7e41\u7410\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5f53\u4e1a\u52a1\u573a\u666f\u4e0d\u518d\u662f\u7b80\u5355\u7684\u6dfb\u52a0\u6216\u5220\u9664\u65f6\uff0c",(0,s.jsx)(n.a,{href:"./save-command",children:"Save\u6307\u4ee4"}),"\u624d\u662f\u66f4\u597d\u7684\u9009\u62e9\uff0c\u5982\u4e0b"]})}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="\u66f4\u597d\u7684\u7528\u6cd5\u793a\u8303"',children:"public void setAuthors(long bookId, Collection<Long> authorIds) {\n    sqlClient.save(\n        Objects.createBook(book -> {\n            book.setId(bookId);\n            book.setAuthorIds(authorIds);\n        })\n    );\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="\u66f4\u597d\u7684\u7528\u6cd5\u793a\u8303"',children:"fun setAuthors(bookId: Long, authorIds: Collection<Long>) {\n    sqlClient.save(\n        new(Book::class).by {\n            id = bookId\n            authorIds = authorIds\n        }\n    )\n}\n"})})})]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>o});l(96540);var s=l(18215);const t={tabItem:"tabItem_Ymn6"};var a=l(74848);function o(e){let{children:n,hidden:l,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>k});var s=l(96540),t=l(18215),a=l(23104),o=l(56347),i=l(205),r=l(57485),c=l(31682),d=l(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:t}}=e;return{value:n,label:l,attributes:s,default:t}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function g(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const t=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,r.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function j(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,a=h(e),[o,r]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=x({queryString:l,groupId:t}),[j,p]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(l);return[t,(0,s.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:t}),A=(()=>{const e=c??j;return g({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{A&&r(A)}),[A]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var p=l(92303);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=l(74848);function b(e){let{className:n,block:l,selectedValue:s,selectValue:o,tabValues:i}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,l=r.indexOf(n),t=i[l].value;t!==s&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=r.indexOf(e.currentTarget)+1;n=r[l]??r[0];break}case"ArrowLeft":{const l=r.indexOf(e.currentTarget)-1;n=r[l]??r[r.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},n),children:i.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>r.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",A.tabItem,a?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function m(e){let{lazy:n,children:l,selectedValue:t}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function L(e){const n=j(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",A.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(m,{...n,...e})]})}function k(e){const n=(0,p.A)();return(0,v.jsx)(L,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>i});var s=l(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);