"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2081],{682:(e,n,l)=>{l.d(n,{Ay:()=>a,RM:()=>s});var t=l(74848),r=l(28453);const s=[{value:"\u573a\u666f-1",id:"\u573a\u666f-1",level:2},{value:"\u573a\u666f-2",id:"\u573a\u666f-2",level:2}];function i(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u76ee\u524d\u5176\u4ed6\u64cd\u4f5cSQL\u7684\u6280\u672f\u65b9\u6848\uff0c\u65e0\u8bbaORM\u8fd8\u662f\u975eORM\uff0c\u90fd\u6709\u5b58\u5728\u4e00\u4e2a\u7a7a\u767d\u9886\u57df\uff1a\u53ea\u8003\u8651\u5230\u4e86\u52a8\u6001",(0,t.jsx)(n.code,{children:"where"}),"\uff0c\u6ca1\u6709\u8003\u8651",(0,t.jsx)(n.code,{children:"\u52a8\u6001join"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"\u52a8\u6001JOIN"}),"\u5b9a\u4e49\uff1a\u5982\u679c\u67d0\u4e9b\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u9488\u5bf9\u5176\u4ed6\u8868\u800c\u975e\u5f53\u524d\u8868\u3002\u8fd9\u610f\u5473\u7740"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6761\u4ef6\u6ee1\u8db3\u65f6\uff1a\u5148\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5230\u5176\u4ed6\u8868\uff0c\u518d\u5bf9join\u5f97\u5230\u7684\u8868\u6dfb\u52a0\u52a8\u6001where\u6761\u4ef6"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\uff1a\u4e0d\u80fd\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5176\u4ed6\u8868"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u573a\u666f-1",children:"\u573a\u666f-1"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u7b2c\u4e00\u4e2a\u573a\u666f\uff0c\u8fd9\u91cc\u7528\u9762\u5411\u539f\u751fSQL\u7684MyBatis\u4e3a\u4f8b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b9a\u4e49MyBatis Mapper\u63a5\u53e3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n    );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u53ef\u80fd\u4e3anull\uff0c\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u540e\u9762\u4e24\u4e2a\u67e5\u8be2\u53c2\u6570\uff1a",(0,t.jsx)(n.code,{children:"storeName"}),"\u548c",(0,t.jsx)(n.code,{children:"storeWebsite"}),"\uff0c\u5176\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4e0d\u65bd\u52a0\u5728\u5f53\u524d\u8868",(0,t.jsx)(n.code,{children:"BOOK"}),"\u4e0a\uff0c\u800c\u662f\u65bd\u52a0\u5728\u7236\u8868",(0,t.jsx)(n.code,{children:"BOOK_STORE\u4e0a"}),"\u3002\n\u5373\uff0c\u5f53\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u975enull\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5bf9",(0,t.jsx)(n.code,{children:"BOOK_STORE"}),"\u8868\u7684JOIN\uff0c\u8fd9\u79cd\u7531\u53c2\u6570\u503c\u52a8\u6001\u51b3\u5b9a\u662f\u5426\u6dfb\u52a0\u7684\u8868\u8fde\u63a5\uff0c\u5728\u672c\u6587\u4e2d\u88ab\u79f0\u4e3a",(0,t.jsx)(n.code,{children:"\u52a8\u6001JOIN"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b9a\u4e49MyBatis\u7684SQL\u6620\u5c04XML"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u2776\u5c31\u662f\u52a8\u6001JOIN\u3002\u7136\u800c\u5bf9\u5f00\u53d1\u4eba\u5458\u800c\u8a00\uff0c\u2777\u548c\u2778\u624d\u662f\u76ee\u7684\uff0c\u2776\u662f\u4e3a\u652f\u6301\u2777\u548c\u2778\u800c\u4e0d\u5f97\u4e0d\u505a\u7684\u5de5\u4f5c\uff0c\u5176\u5224\u65ad\u6761\u4ef6\u662f\u4e00\u79cd\u8d1f\u62c5\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u2776\u7684\u5224\u65ad\u6761\u4ef6\u4f7f\u7528\u4e86",(0,t.jsx)(n.code,{children:"or"}),"\uff0c\u8fd9\u4e5f\u4e0d\u96be\u7406\u89e3\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7136\u800c\uff0c\u8fd9\u4ec5\u4ec5\u662f\u6700\u7b80\u5355\u7684\u4e24\u8868\u4e4b\u95f4\u52a8\u6001\u8fde\u63a5\uff0c\u5bf9\u4e8e\u66f4\u6df1\u7684\u591a\u8868\u8fde\u63a5\u64cd\u4f5c\u800c\u8a00\uff0c\u52a8\u6001\u8fde\u63a5\u7684\u590d\u6742\u5ea6\u4f1a\u6025\u5267\u4e0a\u5347\uff01"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u573a\u666f-2",children:"\u573a\u666f-2"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u7b2c\u4e8c\u4e2a\u573a\u666f\uff0c\u6709\u4e86\u524d\u9762\u7684\u4f8b\u5b50\u4f5c\u4e3a\u57fa\u7840\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u4e0d\u540c\u4efb\u4f55\u4e1a\u52a1\u8026\u5408\u4e86\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n    <select id="findAObjects" resultType="somepackage.A">\n        select distinct A.id\n        from A\n        \x3c!-- highlight-start --\x3e\n        <if test="bId != null or cId != null or dId != null or eId != null">\n            inner join B on A.ID = B.A_ID\n        </if>\n        <if test="cId != null or dId != null or eId != null">\n            inner join C on B.ID = C.B_ID\n        </if>\n        <if test="dId != null or eId != null">\n            inner join D on C.ID = D.C_ID\n        </if>\n        <if test="eId != null">\n            inner join E on D.ID = E.D_ID\n        </if>\n        \x3c!-- highlight-end --\x3e\n        <where>\n            <if test="aId != null">\n                and A.ID = #{aId}\n            </if>\n            <if test="bId != null">\n                and B.ID = #{bId}\n            </if>\n            <if test="cId != null">\n                and C.ID = #{cId}\n            </if>\n            <if test="dId != null">\n                and D.ID = #{dId}\n            </if>\n            <if test="eId != null">\n                and E.ID = #{eId}\n            </if>\n        </where>\n    </select>\n</mapper>\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u903b\u8f91\u5f88\u7b80\u5355\uff0cA\u3001B\u3001C\u3001D\u548cE\u8fd9\u4e94\u5f20\u8868\u5f62\u6210\u4e86\u4e00\u4e2aJOIN\u94fe\uff0c\u6bcf\u5f20\u8868\u90fd\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u3002\u7136\u800c\uff0c\u6b63\u5982\u4f60\u6240\u89c1\uff0c\u52a8\u6001JOIN\u7684\u590d\u6742\u5ea6\u5df2\u7ecf\u53d8\u5f97\u4e0d\u53ef\u63a5\u53d7\u4e86\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},19105:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var t=l(74848),r=l(28453),s=l(682),i=l(11470),a=l(19365),o=l(74400);const c={sidebar_position:3,title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5"},d=void 0,u={id:"query/dynamic-join/merge",title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/merge.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/merge",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/merge",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/merge.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5408\u5e76\u51b2\u7a81\u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/chain-style"},next:{title:"\u4f18\u5316\u4e0d\u5fc5\u8981\u8fde\u63a5",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/optimization"}},h={},b=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5408\u5e76\u89c4\u5219",id:"\u5408\u5e76\u89c4\u5219",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(o.l,{buttonText:"\u76ee\u524d\u6280\u672f\u65b9\u6848\u5b58\u5728\u95ee\u9898",children:(0,t.jsx)(s.Ay,{})}),"\u4e2d\uff0c\u6211\u4eec\u5217\u4e3e\u4e86\u4e24\u4e2a\u573a\u666f\uff0c\u672c\u6587\u8ba8\u8bba\u662f\u5426\u5982\u4f55\u89e3\u51b3\u8fd9\u4e24\u4e2a\u573a\u666f\u7684\u95ee\u9898\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u95ee\u9898\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u554a\uff0c\u672c\u6587\u6f14\u793a\u7b2c\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u89e3\u51b3\u573a\u666f1\u7684\u95ee\u9898"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            name != null,\n            () -> book.name().like(name)\n        )\n        .whereIf(\n            storeName != null,\n            () -> table\n                .store() \u2776\n                .name()\n                .like(storeName)\n        )\n        .whereIf(\n            storeWebsite != null,\n            () -> table\n                .store() \u2777\n                .website()\n                .like(storeWebsite)\n        )\n        .select(book)\n        .execute();\n}\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(\n    name: String? = null,\n    storeName: String? = null,\n    storeWebsite: String? = null\n): List<Book> =\n    sqlClient\n        .createQuery(Book::class) {\n            name?.let {\n                where(table.name like it)\n            }\n            storeName?.let {\n                where(\n                    table\n                        .store \u2776\n                        .name like it\n                )\n            }\n            storeWebsite?.let {\n                where(\n                    table\n                        .store \u2777\n                        .website like it\n                )\n            }\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u5178\u578b\u7684\u52a8\u6001\u67e5\u8be2\uff0c\u4e09\u4e2a\u67e5\u8be2\u53c2\u6570\u90fd\u5141\u8bb8\u4e3anull\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5b9a",(0,t.jsx)(n.code,{children:"name"}),"\uff0c\u4f46",(0,t.jsx)(n.code,{children:"storeName"}),"\u548c",(0,t.jsx)(n.code,{children:"storeWebsite"}),"\u4ecd\u7136\u4e3anull\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65f6\uff0c\u2776\u548c\u2777\u4e24\u5904\u7684\u4ee3\u7801\u90fd\u4e0d\u4f1a\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55join\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5b9a",(0,t.jsx)(n.code,{children:"name"}),"\u548c",(0,t.jsx)(n.code,{children:"storeName"}),", \u4f46",(0,t.jsx)(n.code,{children:"storeWebsite"}),"\u4ecd\u7136\u4e3anull\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65f6\uff0c\u2776\u5904\u7684\u8fde\u63a5\u751f\u6548\u4f46\u2777\u5904\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */ \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6307\u5b9a\u6240\u6709\u53c2\u6570\uff0c",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"storeName"}),"\u548c",(0,t.jsx)(n.code,{children:"storeWebsite"}),"\u90fd\u975enull\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u65f6\uff0c\u2776\u3001\u2777\u4e24\u5904\u7684\u8fde\u63a5\u90fd\u751f\u6548\uff0c\u8fd9\u79cd\u60c5\u51b5\u53eb\u8fde\u63a5\u51b2\u7a81\u3002"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u8fd9\u79cd\u51b2\u7a81\u5e76\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u95ee\u9898\uff0c\u51b2\u7a81\u7684join\u5bf9\u8c61\u4f1a\u88ab\u5408\u5e76\u6210\u4e00\u4e2ajoin\u5bf9\u8c61\u3002"}),(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5728\u6700\u7ec8\u751f\u6210\u7684SQL\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u91cd\u590d\u7684join\u64cd\u4f5c\u3002"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ on \n        tb_1_.STORE_ID = tb_2_.ID \n    /* highlight-end */\nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ? \nand \n    tb_2_.WEBSITE = ?\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u89e3\u51b3\u573a\u666f2\u7684\u95ee\u9898"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"List<Long> findDistinctIds(\n    @Nullable Long aId,\n    @Nullable Long bId,\n    @Nullable Long cId,\n    @Nullable Long dId,\n    @Nullable Long eId\n) {\n    ATable table = Tables.A_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            aId != null,\n            () -> table.id().like(aId)\n        )\n        .whereIf(\n            bId != null,\n            () -> table.asTableEx().bs().id().like(bId)\n        )\n        .whereIf(\n            cId != null,\n            () -> table.asTableEx().bs().cs().id().like(cId)\n        )\n        .whereIf(\n            dId != null,\n            () -> table.asTableEx().bs().cs().ds().id().like(dId)\n        )\n        .whereIf(\n            eId != null,\n            () -> table.asTableEx().bs().cs().ds().es().id().like(eId)\n        )\n        .select(book.id())\n        .distinct()\n        .execute();\n}\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"fun findDistinctIds(\n    aId: Long? = null,\n    bId: Long? = null,\n    cId: Long? = null,\n    dId: Long? = null,\n    eId: Long? = null\n): List<Long> =\n    sqlClient\n        .createQuery(A::class) {\n            aId?.let {\n                where(table.id eq it)\n            }\n            bId?.let {\n                where(table.asTableEx().bs.id eq it)\n            }\n            cId?.let {\n                where(table.asTableEx().bs.cs.id eq it)\n            }\n            dId?.let {\n                where(table.asTableEx().bs.cs.ds.id eq it)\n            }\n            eId?.let {\n                where(table.asTableEx().bs.cs.ds.es.id eq it)\n            }\n            select(table.id)\n        }\n        .distinct()\n        .execute()\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6709\u4e86\u524d\u9762\u7684\u57fa\u7840\uff0c\u8fd9\u91cc\u4e0d\u518d\u9700\u8981\u7f57\u5217\u4e0d\u540c\u7684\u53c2\u6570\u7ec4\u5408\u4e0b\u4f1a\u751f\u6210\u548c\u4f55\u79cdSQL\u3002\u660e\u767d\u65e0\u8bba\u5982\u4f55\u6700\u7ec8SQL\u90fd\u4e0d\u4f1a\u5305\u542b\u91cd\u590d\u7684\u8fde\u63a5\u64cd\u4f5c\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684",(0,t.jsx)(n.code,{children:"asTableEx"}),"\u662f\u540e\u7eed\u6587\u6863",(0,t.jsx)(n.a,{href:"./table-ex",children:"\u5206\u9875\u5b89\u5168\u6027"}),"\u8981\u4ecb\u7ecd\u7684\u6982\u5ff5\u3002\u8fd9\u91cc\uff0c\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u5b83\u3002"]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5408\u5e76\u89c4\u5219",children:"\u5408\u5e76\u89c4\u5219"}),"\n",(0,t.jsx)(n.p,{children:"\u5047\u8bbe\u6709\u4e09\u4e2a\u8868\u8fde\u63a5\u8def\u5f84\uff0c\u5206\u522b\u662f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a -> b -> c -> d -> e -> f -> g"}),"\n",(0,t.jsx)(n.li,{children:"a -> b -> c -> h -> i -> j"}),"\n",(0,t.jsx)(n.li,{children:"a -> x -> y -> z -> a-> b -> c -> d"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u6d88\u9664\u51b2\u7a81\uff0cJimmer\u4f1a\u5148\u628a\u8fd9\u4e9b\u8def\u5f84\u4e2d\u7684\u8282\u70b9\u5408\u5e76\u6210\u4e00\u68f5\u6811"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-+-a\n |\n +----+-b\n |    |\n |    \\----+-c \n |         |\n |         +----+-d\n |         |    |\n |         |    \\----+-e\n |         |         |\n |         |         \\----+-f\n |         |              |\n |         |              \\------g\n |         |\n |         \\----+-h\n |              |\n |              \\----+-i\n |                   |\n |                   \\------j\n |\n \\----+-x\n      |\n      \\----+-y\n           |\n           \\----+-z\n                |\n                \\----+-a\n                     |\n                     \\----+-b\n                          |\n                          \\----+-c\n                               |\n                               \\------d\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u6839\u636e\u8fd9\u68f5\u6811\u6765\u751f\u6210\u6700\u7ec8SQL\u4e2d\u7684join\u5b50\u53e5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u4e2a\u9700\u8981\u8bf4\u660e\u7684\u89c4\u5219\uff0c\u5c31\u662f\u8fde\u63a5\u65b9\u5f0f\u3002\u521b\u5efajoin\u5bf9\u8c61\u7684\u65b9\u6cd5\u5177\u5907\u53c2\u6570\uff0c\u4ee5\u6307\u5b9a\u8fde\u63a5\u65b9\u5f0f\uff0c\u6bd4\u5982\uff0c\u5de6\u8fde\u63a5\uff1a"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"book.store(JoinType.LEFT)\n"})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"book.`store?`\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u8fde\u63a5\u65b9\u5f0f\u5408\u5e76\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u53d1\u751f\u51b2\u7a81\u7684join\u8282\u70b9\u7684\u8fde\u63a5\u65b9\u5f0f\u5168\u90e8\u4e00\u6837\uff0c\u5408\u5e76\u540e\u8fde\u63a5\u65b9\u5f0f\u4e0d\u53d8\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5426\u5219\uff0c\u5408\u5e76\u540e\u4e00\u5b9a\u662f\u5185\u8fde\u63a5\u3002"}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var t=l(18215);const r={tabItem:"tabItem_Ymn6"};var s=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>v});var t=l(96540),r=l(18215),s=l(23104),i=l(56347),a=l(205),o=l(57485),c=l(31682),d=l(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:r}}=e;return{value:n,label:l,attributes:t,default:r}}))}(l);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function b(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function j(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:l,groupId:r}),[j,p]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(l);return[r,(0,t.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:r}),m=(()=>{const e=c??j;return b({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=l(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=l(74848);function g(e){let{className:n,block:l,selectedValue:t,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,l=o.indexOf(n),r=a[l].value;r!==t&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:a.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function I(e){let{lazy:n,children:l,selectedValue:r}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(I,{...n,...e})]})}function v(e){const n=(0,p.A)();return(0,f.jsx)(_,{...e,children:u(e.children)},String(n))}},66971:(e,n,l)=>{l.d(n,{a:()=>j});var t=l(96540),r=l(72774),s=l(63051),i=l(28968),a=l(48875),o=l(44676),c=l(47859),d=l(4671),u=l(99343),h=l(7324),b=l(39781),x=l(74848);const j=(0,t.memo)((e=>{let{open:n,fullScreen:l=!1,title:a,maxWidth:j="md",onClose:m,children:f}=e;const[g,I]=(0,t.useState)(l),_=(0,t.useCallback)((()=>{I((e=>!e))}),[]);return(0,x.jsxs)(s.A,{open:n,onClose:m,fullScreen:g,TransitionComponent:p,maxWidth:j,children:[(0,x.jsx)(r.A,{sx:{position:"relative"},children:(0,x.jsxs)(o.A,{children:[(0,x.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a}),(0,x.jsx)(d.A,{onClick:_,style:{color:"white"},children:g?(0,x.jsx)(h.A,{}):(0,x.jsx)(u.A,{})}),(0,x.jsx)(d.A,{"aria-label":"close",onClick:m,style:{color:"white"},children:(0,x.jsx)(b.A,{})})]})}),(0,x.jsx)(i.A,{children:f})]})})),p=t.forwardRef((function(e,n){return(0,x.jsx)(a.A,{direction:"up",ref:n,...e})}))},74400:(e,n,l)=>{l.d(n,{l:()=>a});var t=l(96540),r=l(67512),s=l(66971),i=l(74848);const a=(0,t.memo)((e=>{let{buttonText:n,fullScreen:l=!1,title:a=n,variant:o="outlined",maxWidth:c,useOriginalText:d=!0,children:u}=e;const[h,b]=(0,t.useState)(!1),x=(0,t.useCallback)((e=>{b(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),j=(0,t.useCallback)((()=>{b(!1)}),[]),p=d?{textTransform:"none"}:{};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{"data-is-view-more-button":"true",onClick:x,variant:o,size:"small",style:p,children:n}),(0,i.jsx)(s.a,{open:h,onClose:j,title:a,maxWidth:c,fullScreen:l,children:u})]})}))},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>a});var t=l(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);