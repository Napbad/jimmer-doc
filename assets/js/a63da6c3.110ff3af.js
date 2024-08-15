"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1496],{16152:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>I,contentTitle:()=>O,default:()=>E,frontMatter:()=>A,metadata:()=>P,toc:()=>N});var t=r(74848),n=r(28453),o=r(96540),i=r(98110),s=r(53881),l=r(88933),d=r(46780),c=r(618),u=r(73231),m=r(11470),h=r(19365),p=r(81455),f=r(56071),v=r(47461),C=r(71543);const x=e=>{let{type:a,locale:r}=e;const[n,i]=(0,o.useState)("OPS"!==a),s=(0,o.useCallback)(((e,a)=>{i(a)}),[]);return(0,t.jsxs)(m.A,{groupId:"chart-mode",children:[(0,t.jsxs)(h.A,{value:"chart",label:"zh"===r?"\u56fe\u8868":"Chart",default:!0,children:["OPS"===a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.A,{children:(0,t.jsx)(f.A,{control:(0,t.jsx)(v.A,{value:n,onChange:s}),label:"zh"===r?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})}),(0,t.jsx)(C.A,{})]}),"OPS"==a?(0,t.jsx)(w,{rows:b,scale:k,showJdbc:n}):(0,t.jsx)(w,{rows:y,scale:J,showJdbc:n})]}),(0,t.jsx)(h.A,{value:"data",label:"zh"===r?"\u6570\u636e":"Data",children:"OPS"===a?(0,t.jsx)(j,{rows:B,valueTitle:"Ops/s"}):(0,t.jsx)(j,{rows:S,valueTitle:"Time(\u03bcs)"})})]})},w=e=>{let{rows:a,scale:r,showJdbc:n,height:o=400}=e;return(0,t.jsxs)(i.Chart,{filter:n?void 0:{framework:e=>!e.startsWith("JDBC")},height:o,padding:"auto",data:a,scale:r,autoFit:!0,children:[(0,t.jsx)(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),(0,t.jsx)(i.Axis,{name:"value",title:!0}),(0,t.jsx)(i.Legend,{position:"left"}),(0,t.jsx)(i.Tooltip,{shared:!0}),(0,t.jsx)(i.Interaction,{type:"active-region"})]})},j=e=>{let{rows:a,valueTitle:r}=e;return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(c.A,{children:(0,t.jsxs)(u.A,{children:[(0,t.jsx)(d.A,{children:"Framework"}),(0,t.jsx)(d.A,{children:"Data count"}),(0,t.jsx)(d.A,{children:r})]})}),(0,t.jsx)(l.A,{children:a.map((e=>(0,t.jsxs)(u.A,{children:[(0,t.jsx)(d.A,{children:e.framework}),(0,t.jsx)(d.A,{children:e.dataCount}),(0,t.jsx)(d.A,{children:e.value})]},`${e.framework}-${e.dataCount}`)))})]})},k={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},J={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},g=[{framework:"JDBC(ColIndex)",dataCount:"10",value:662071},{framework:"JDBC(ColIndex)",dataCount:"20",value:453226},{framework:"JDBC(ColIndex)",dataCount:"50",value:259484},{framework:"JDBC(ColIndex)",dataCount:"100",value:130991},{framework:"JDBC(ColIndex)",dataCount:"200",value:77725},{framework:"JDBC(ColIndex)",dataCount:"500",value:32109},{framework:"JDBC(ColIndex)",dataCount:"1000",value:16188},{framework:"JDBC(ColName)",dataCount:"10",value:345169},{framework:"JDBC(ColName)",dataCount:"20",value:238107},{framework:"JDBC(ColName)",dataCount:"50",value:125589},{framework:"JDBC(ColName)",dataCount:"100",value:72424},{framework:"JDBC(ColName)",dataCount:"200",value:33068},{framework:"JDBC(ColName)",dataCount:"500",value:16234},{framework:"JDBC(ColName)",dataCount:"1000",value:8346},{framework:"Jimmer(Java)",dataCount:"10",value:315312},{framework:"Jimmer(Java)",dataCount:"20",value:224179},{framework:"Jimmer(Java)",dataCount:"50",value:132673},{framework:"Jimmer(Java)",dataCount:"100",value:77044},{framework:"Jimmer(Java)",dataCount:"200",value:41474},{framework:"Jimmer(Java)",dataCount:"500",value:16371},{framework:"Jimmer(Java)",dataCount:"1000",value:8831},{framework:"Jimmer(Kotlin)",dataCount:"10",value:309029},{framework:"Jimmer(Kotlin)",dataCount:"20",value:230622},{framework:"Jimmer(Kotlin)",dataCount:"50",value:128315},{framework:"Jimmer(Kotlin)",dataCount:"100",value:74499},{framework:"Jimmer(Kotlin)",dataCount:"200",value:36656},{framework:"Jimmer(Kotlin)",dataCount:"500",value:16870},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:7932},{framework:"EasyQuery",dataCount:"10",value:206634},{framework:"EasyQuery",dataCount:"20",value:135063},{framework:"EasyQuery",dataCount:"50",value:92230},{framework:"EasyQuery",dataCount:"100",value:45502},{framework:"EasyQuery",dataCount:"200",value:28085},{framework:"EasyQuery",dataCount:"500",value:11666},{framework:"EasyQuery",dataCount:"1000",value:4427},{framework:"MyBatis",dataCount:"10",value:68743},{framework:"MyBatis",dataCount:"20",value:43940},{framework:"MyBatis",dataCount:"50",value:20050},{framework:"MyBatis",dataCount:"100",value:10541},{framework:"MyBatis",dataCount:"200",value:5310},{framework:"MyBatis",dataCount:"500",value:2137},{framework:"MyBatis",dataCount:"1000",value:1048},{framework:"Exposed",dataCount:"10",value:92494},{framework:"Exposed",dataCount:"20",value:66934},{framework:"Exposed",dataCount:"50",value:26693},{framework:"Exposed",dataCount:"100",value:19483},{framework:"Exposed",dataCount:"200",value:10008},{framework:"Exposed",dataCount:"500",value:3894},{framework:"Exposed",dataCount:"1000",value:2082},{framework:"JPA(Hibernate)",dataCount:"10",value:90542},{framework:"JPA(Hibernate)",dataCount:"20",value:59926},{framework:"JPA(Hibernate)",dataCount:"50",value:25893},{framework:"JPA(Hibernate)",dataCount:"100",value:13096},{framework:"JPA(Hibernate)",dataCount:"200",value:6900},{framework:"JPA(Hibernate)",dataCount:"500",value:2491},{framework:"JPA(Hibernate)",dataCount:"1000",value:1207},{framework:"JPA(EclipseLink)",dataCount:"10",value:64230},{framework:"JPA(EclipseLink)",dataCount:"20",value:33421},{framework:"JPA(EclipseLink)",dataCount:"50",value:13634},{framework:"JPA(EclipseLink)",dataCount:"100",value:6802},{framework:"JPA(EclipseLink)",dataCount:"200",value:3238},{framework:"JPA(EclipseLink)",dataCount:"500",value:1361},{framework:"JPA(EclipseLink)",dataCount:"1000",value:650},{framework:"JOOQ",dataCount:"10",value:69408},{framework:"JOOQ",dataCount:"20",value:39737},{framework:"JOOQ",dataCount:"50",value:18373},{framework:"JOOQ",dataCount:"100",value:8145},{framework:"JOOQ",dataCount:"200",value:4186},{framework:"JOOQ",dataCount:"500",value:1707},{framework:"JOOQ",dataCount:"1000",value:832},{framework:"Nutz",dataCount:"10",value:76904},{framework:"Nutz",dataCount:"20",value:39501},{framework:"Nutz",dataCount:"50",value:16639},{framework:"Nutz",dataCount:"100",value:8903},{framework:"Nutz",dataCount:"200",value:4374},{framework:"Nutz",dataCount:"500",value:2040},{framework:"Nutz",dataCount:"1000",value:957},{framework:"ObjectiveSQL",dataCount:"10",value:56245},{framework:"ObjectiveSQL",dataCount:"20",value:29975},{framework:"ObjectiveSQL",dataCount:"50",value:12455},{framework:"ObjectiveSQL",dataCount:"100",value:6251},{framework:"ObjectiveSQL",dataCount:"200",value:3470},{framework:"ObjectiveSQL",dataCount:"500",value:1259},{framework:"ObjectiveSQL",dataCount:"1000",value:559},{framework:"Spring Data JDBC",dataCount:"10",value:20494},{framework:"Spring Data JDBC",dataCount:"20",value:10704},{framework:"Spring Data JDBC",dataCount:"50",value:4146},{framework:"Spring Data JDBC",dataCount:"100",value:2229},{framework:"Spring Data JDBC",dataCount:"200",value:1025},{framework:"Spring Data JDBC",dataCount:"500",value:447},{framework:"Spring Data JDBC",dataCount:"1000",value:197},{framework:"Ktorm",dataCount:"10",value:19152},{framework:"Ktorm",dataCount:"20",value:9520},{framework:"Ktorm",dataCount:"50",value:4385},{framework:"Ktorm",dataCount:"100",value:2091},{framework:"Ktorm",dataCount:"200",value:1063},{framework:"Ktorm",dataCount:"500",value:427},{framework:"Ktorm",dataCount:"1000",value:168}],b=g.map((e=>({...e,value:Math.round(e.value)}))),y=g.map((e=>({...e,value:Math.round(1e6/e.value)})));g.filter((e=>!e.framework.startsWith("JDBC(")));function D(e,a){return parseInt(e.dataCount)-parseInt(a.dataCount)}const B=b.sort(D),S=y.sort(D),A={sidebar_position:4,title:"Benchmark Report"},O=void 0,P={id:"overview/benchmark",title:"Benchmark Report",description:"Not only can Jimmer bring you powerful features, but it can also bring you ultimate performance.",source:"@site/docs/overview/benchmark.mdx",sourceDirName:"overview",slug:"/overview/benchmark",permalink:"/jimmer-doc/docs/overview/benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/overview/benchmark.mdx",tags:[],version:"current",lastUpdatedAt:1709851253e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Benchmark Report"},sidebar:"tutorialSidebar",previous:{title:"APT/KSP",permalink:"/jimmer-doc/docs/overview/apt-ksp"},next:{title:"Quick View \u2605",permalink:"/jimmer-doc/docs/quick-view/"}},I={},N=[{value:"Report",id:"report",level:2},{value:"Operations Per Second",id:"operations-per-second",level:3},{value:"Operation Time",id:"operation-time",level:3},{value:"Implementation Principles",id:"implementation-principles",level:2},{value:"Value",id:"value",level:2},{value:"Why so fast?",id:"why-so-fast",level:2}];function Q(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Not only can Jimmer bring you powerful features, but it can also bring you ultimate performance."})}),"\n",(0,t.jsxs)(a.p,{children:["The source code for benchmarking is ",(0,t.jsx)(a.a,{href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark",children:"here"}),", using H2 in-memory database, no environment preparation needed to run directly."]}),"\n",(0,t.jsx)(a.h2,{id:"report",children:"Report"}),"\n",(0,t.jsx)(a.h3,{id:"operations-per-second",children:"Operations Per Second"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The x-axis indicates the number of data objects queried from the database each time."}),"\n",(0,t.jsx)(a.li,{children:"The y-axis indicates the number of operations per second."}),"\n"]}),"\n",(0,t.jsx)(x,{type:"OPS",locale:"en"}),"\n",(0,t.jsx)(a.h3,{id:"operation-time",children:"Operation Time"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The x-axis indicates the number of data objects queried from the database each time."}),"\n",(0,t.jsx)(a.li,{children:"The y-axis indicates the operation time (microseconds) for each operation."}),"\n"]}),"\n",(0,t.jsx)(x,{type:"TIME",locale:"en"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Since Spring removed support for OpenJPA, this benchmark test does not include ",(0,t.jsx)(a.code,{children:"JPA(OpenJPA)"}),"."]})}),"\n",(0,t.jsx)(a.h2,{id:"implementation-principles",children:"Implementation Principles"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Disable cache for all frameworks"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Turn off logs for all frameworks"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"For all frameworks, open and close connections/sessions each time, no sharing; rely on connection pools to ensure performance."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Use Spring's connection management mechanism. The implementation is slightly different due to the different APIs of different frameworks."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Some use ",(0,t.jsx)(a.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html",children:"DataSourceUtils"}),"'s getConnection and releaseConnection"]}),"\n",(0,t.jsxs)(a.li,{children:["Some use ",(0,t.jsx)(a.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html",children:"TransactionAwareDataSourceProxy"})]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"But the end result is the same"}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Do not use transactions"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Exposed"})," is special in that its API can only work with transactions, so there is a fake transaction implementation for it."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Use embedded H2 database to compress database overhead as much as possible, highlighting the performance of the ORM itself, i.e. the performance of mapping."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"value",children:"Value"}),"\n",(0,t.jsx)(a.p,{children:"A common view: the performance of the ORM itself is not important. In actual projects, the database is not an in-memory database, so the time consumed by the ORM itself is negligible compared to the time consumed by the database."}),"\n",(0,t.jsx)(a.p,{children:"Rebuttal: After the release of Java 19, virtual threads are supported. The faster the ORM completes the mapping, the more virtual threads the JVM can schedule, which can increase system throughput."}),"\n",(0,t.jsx)(a.h2,{id:"why-so-fast",children:"Why so fast?"}),"\n",(0,t.jsxs)(a.p,{children:["There are two programming styles in JDBC for reading values from ",(0,t.jsx)(a.code,{children:"java.sql.ResultSet"})]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"JDBC(ColIndex)"}),", i.e. reading by column index, ",(0,t.jsx)(a.code,{children:"rs.getString(1)"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"JDBC(ColName)"}),", reading by column name: ",(0,t.jsx)(a.code,{children:'rs.getString("VALUE_1")'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"JDBC(ColIndex)"})," is faster than ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"}),", so Jimmer itself also uses ",(0,t.jsx)(a.code,{children:"JDBC(ColIndex)"})," as the underlying means of accessing ",(0,t.jsx)(a.code,{children:"ResultSet"}),", providing the possibility of exceeding the performance metrics of ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Now let's focus on discussing the two cases in the charts ",(0,t.jsx)(a.em,{children:"(select native JDBC metrics)"}),":"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Querying 10 rows of data each time, the OPS of ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"})," and ",(0,t.jsx)(a.code,{children:"Jimmer(Java)"})," are close."]}),"\n",(0,t.jsxs)(a.p,{children:["In this scenario, the performance of Jimmer and ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"})," is similar. The test code of ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"})," directly hardcodes the SQL, while Jimmer needs to dynamically construct the SQL using the DSL mechanism, from which perspective Jimmer should be slower. However, the process of Jimmer converting ",(0,t.jsx)(a.code,{children:"ResultSet"})," to objects is faster than ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"}),", canceling each other out. So the performance is similar."]}),"\n",(0,t.jsxs)(a.p,{children:["Of course, the SQL statement used in Benchmark is not complex. If more complex SQL is used, the hardcoded SQL ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"})," will be faster, which is also an area Jimmer can optimize in subsequent versions."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Querying 1000 rows of data each time, Jimmer's ops are significantly higher than ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"}),"'s OPS."]}),"\n",(0,t.jsxs)(a.p,{children:["In this case, the performance advantage of Jimmer converting ",(0,t.jsx)(a.code,{children:"ResultSet"})," to objects is fully demonstrated. Even if Jimmer slowed down due to dynamically generating SQL using DSL, the overall result is still faster than ",(0,t.jsx)(a.code,{children:"JDBC(ColName)"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["The main reasons why Jimmer converts ",(0,t.jsx)(a.code,{children:"ResultSet"})," to objects so fast are:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"JDBC(ColIndex)"})," at the bottom layer"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Do not use Java reflection to dynamically set properties for objects."}),"\n",(0,t.jsxs)(a.p,{children:["At compile time, Jimmer generates a modifiable ",(0,t.jsx)(a.code,{children:"DraftImpl"})," class for each immutable entity type, which provides a generic ",(0,t.jsx)(a.code,{children:"__set(PropId propId, Object value)"})," method to achieve dynamic setting of object properties similar to Java reflection."]}),"\n",(0,t.jsxs)(a.p,{children:["At the same time, the compiler assigns each property an integer as id. The ",(0,t.jsx)(a.code,{children:"__set"})," method in the ",(0,t.jsx)(a.code,{children:"DraftImpl"})," class uses a ",(0,t.jsx)(a.code,{children:"switch"})," statement internally to identify the passed property id. For example, the generated Java code is:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"@Override\npublic void __set(PropId prop, Object value) {\n    int __propIndex = prop.asIndex();\n    switch (__propIndex) {\n        case -1:\n            __set(prop.asName(), value);\n            return;\n        // highlight-next-line\n        case 0:  \n            setId((Long)value);\n            break;\n        // highlight-next-line\n        case 1:\n            setName((String)value);\n            break;\n        // highlight-next-line \n        case 2:\n            setEdition((Integer)value);\n            break;\n        ...Omitted...\n    }\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Modern compilers have sufficient optimization for such integer-based ",(0,t.jsx)(a.code,{children:"switch"})," statements, so it can be considered that Jimmer's dynamic assignment of entity objects is not much slower than the hardcoded JDBC test code."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"These two reasons are the most important reasons why Jimmer's object mapping performance is so high."})]})}function E(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(Q,{...e})}):Q(e)}}}]);