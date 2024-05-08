"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7204],{51945:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var a=r(74848),t=r(28453),d=r(11470),o=r(19365);const l={sidebar_position:3,title:"Draft"},s=void 0,i={id:"object/draft",title:"Draft",description:"In previous documents we have seen that",source:"@site/docs/object/draft.mdx",sourceDirName:"object",slug:"/object/draft",permalink:"/jimmer-doc/docs/object/draft",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/draft.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Draft"},sidebar:"tutorialSidebar",previous:{title:"Solution",permalink:"/jimmer-doc/docs/object/immutable/solution"},next:{title:"Working with Jackson",permalink:"/jimmer-doc/docs/object/jackson"}},c={},h=[{value:"Use preprocessor",id:"use-preprocessor",level:2},{value:"Define TreeNode",id:"define-treenode",level:3},{value:"Generate TreeNodeDraft",id:"generate-treenodedraft",level:3},{value:"Scalar properties",id:"scalar-properties",level:2},{value:"Reference associations",id:"reference-associations",level:2},{value:"Override getter <code>parent()</code>",id:"override-getter-parent",level:3},{value:"Add getter <code>parent(boolean)</code>",id:"add-getter-parentboolean",level:3},{value:"Add <code>setParent</code>",id:"add-setparent",level:3},{value:"Add lambda-based <code>applyParent</code>",id:"add-lambda-based-applyparent",level:3},{value:"Collection associations",id:"collection-associations",level:2},{value:"Inherit getter <code>childNodes()</code>",id:"inherit-getter-childnodes",level:3},{value:"Add getter <code>childNodes(boolean)</code>",id:"add-getter-childnodesboolean",level:3},{value:"Add <code>setChildNodes</code>",id:"add-setchildnodes",level:3},{value:"Add <code>addIntoChildNodes</code>",id:"add-addintochildnodes",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In previous documents we have seen that"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When the user defines the ",(0,a.jsx)(n.code,{children:"Book"})," type, the example code can use the ",(0,a.jsx)(n.code,{children:"BookDraft"})," type"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When the user defines the ",(0,a.jsx)(n.code,{children:"TreeNode"})," type, the example code can use the ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," type"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["These types ending in ",(0,a.jsx)(n.code,{children:"Draft"})," that correspond one-to-one with user-defined types are called Draft types."]}),"\n",(0,a.jsx)(n.h2,{id:"use-preprocessor",children:"Use preprocessor"}),"\n",(0,a.jsx)(n.h3,{id:"define-treenode",children:"Define TreeNode"}),"\n",(0,a.jsxs)(n.p,{children:["The user first defines an immutable data interface. Here, the ORM entity annotation ",(0,a.jsx)(n.code,{children:"@Entity"})," is not needed, the non-ORM annotation ",(0,a.jsx)(n.code,{children:"@Immutable"})," can achieve the demo purpose."]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:"package yourpackage;\n\nimport javax.validation.constraints.Null;\nimport java.util.List;\n\nimport org.babyfish.jimmer.Immutable;\n\n@Immutable\npublic interface TreeNode {\n    \n    String name();\n\n    @Null\n    TreeNode parent();\n\n    List<TreeNode> childNodes();\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt"',children:"package yourpackage\n\nimport org.babyfish.jimmer.Immutable\n\n@Immutable\ninterface TreeNode {\n\n    val name: String\n\n    val parent: TreeNode?\n\n    val childNodes: List<TreeNode>\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"generate-treenodedraft",children:"Generate TreeNodeDraft"}),"\n",(0,a.jsxs)(n.p,{children:["To automatically generate ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"}),", the preprocessor needs to be enabled:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Java: Use AnnotationProcessor ",(0,a.jsx)(n.code,{children:"jimmer-apt"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Kotlin: Use KSP ",(0,a.jsx)(n.code,{children:"jimmer-ksp"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["How to use ",(0,a.jsx)(n.code,{children:"jimmer-apt"}),"/",(0,a.jsx)(n.code,{children:"jimmer-ksp"})," and how to handle possible issues are introduced in great detail in ",(0,a.jsx)(n.a,{href:"../quick-view/get-started/generate-code",children:"Generate Code"}),". This article will not repeat it."]})}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"package org.babyfish.jimmer.example.core.model;\n\nimport java.util.List;\nimport org.babyfish.jimmer.DraftConsumer;\nimport org.babyfish.jimmer.lang.OldChain;\n\npublic interface TreeNodeDraft extends TreeNode, Draft {\n\n    // highlight-next-line\n    TreeNodeDraft.Producer $ = Producer.INSTANCE;\n\n\n    @OldChain\n    TreeNodeDraft setName(String name);\n\n\n    TreeNodeDraft parent();\n\n    TreeNodeDraft parent(boolean autoCreate);\n\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode parent);\n\n    @OldChain\n    TreeNodeDraft applyParent(DraftConsumer<TreeNodeDraft> block);\n\n    @OldChain\n    TreeNodeDraft applyParent(TreeNode base, DraftConsumer<TreeNodeDraft> block);\n\n\n\n    List<TreeNodeDraft> childNodes(boolean autoCreate);\n\n    @OldChain\n    TreeNodeDraft setChildNodes(List<TreeNode> childNodes);\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(DraftConsumer<TreeNodeDraft> block);\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(TreeNode base, DraftConsumer<TreeNodeDraft> block);\n\n\n\n    class Producer {\n\n        private Producer() {}\n\n        // highlight-next-line\n        public TreeNode produce(\n            DraftConsumer<TreeNodeDraft> block\n        ) {\n            return produce(null, block);\n        }\n\n        // highlight-next-line\n        public TreeNode produce(\n            TreeNode base, \n            DraftConsumer<TreeNodeDraft> block\n        ) {\n            ...omit...\n        }\n\n        ...other code omitted...\n    }\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    public override var name: String\n\n    public override var parent: TreeNode?\n\n    public override var childNodes: List<TreeNode>\n\n    public fun parent(): TreeNodeDraft\n\n    public fun childNodes(): MutableList<TreeNodeDraft>\n\n    public object `$` {\n        \n        ...other code omitted...\n\n        public fun produce(\n            base: TreeNode? = null, \n            block: TreeNodeDraft.() -> Unit\n        ): TreeNode {\n            ...omit code...\n        }\n    }\n\n    ...other code omitted...\n}\n\n// highlight-next-line\npublic fun ImmutableCreator<TreeNode>.`by`(\n    base: TreeNode? = null, \n    block: TreeNodeDraft.() -> Unit\n): TreeNode = \n    TreeNodeDraft.`$`.produce(base, block)\n\npublic fun MutableList<TreeNodeDraft>.addBy(\n    base: TreeNode? = null,\n    block: TreeNodeDraft.() -> Unit\n): MutableList<TreeNodeDraft> {\n    add(TreeNodeDraft.`$`.produce(base, block) as TreeNodeDraft)\n    return this\n}\n\n// highlight-next-line\npublic fun TreeNode.copy(block: TreeNodeDraft.() -> Unit): TreeNode =\n    TreeNodeDraft.`$`.produce(this, block)\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"You can use it like this:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a brand new object from scratch"}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNode oldTreeNode = Objects.createTreeNode(treeNodeDraft -> {\n        ...omitted...\n    });\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val oldTreeNode = new(TreeNode::class).by {\n    ...omitted...\n}\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Based on an existing object, make some "changes" and create a new object'}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNode newTreeNode = Objects.createTreeNode(oldTreeNode, treeNodeDraft -> {\n        ...omitted...\n    });\n"})})}),(0,a.jsxs)(o.A,{value:"kotlin",label:"Kotlin",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val newTreeNode = new(TreeNode::class).by(oldTreeNode) {\n    ...omitted...\n}\n"})}),(0,a.jsx)(n.p,{children:"or"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val newTreeNode = oldTreeNode.copy {\n    ...\u7701\u7565...\n}\n"})})]})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"scalar-properties",children:"Scalar properties"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TreeNode.name"})," is a scalar property. ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," will define a ",(0,a.jsx)(n.code,{children:"setter method/writable property"})," like below:"]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setName(String name);\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    \n    // var, not val\n    public override var name: String\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Developers can use this method to set the ",(0,a.jsx)(n.code,{children:"name"})," property of the draft proxy:"]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft.setName("Root Node");\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n} \n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"reference-associations",children:"Reference associations"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TreeNode.parent"})," is an association property. Its type is an object, not a collection. In ORM terms, it is a one-to-one or many-to-one association."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," defines multiple methods for it:"]}),"\n",(0,a.jsxs)(n.h3,{id:"override-getter-parent",children:["Override getter ",(0,a.jsx)(n.code,{children:"parent()"})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    TreeNodeDraft parent();\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    \n    public fun parent(): TreeNodeDraft\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Note that the return type of this method is ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," rather than ",(0,a.jsx)(n.code,{children:"TreeNode"}),"."]}),(0,a.jsx)(n.p,{children:"That is, if the reference association of the draft object has been set and set to non-null, this method will definitely return the draft object. This allows the user to directly modify deeper associated objects."})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = Objects.createTreeNode(treeNode, draft -> {\n        draft.parent().setName("Daddy"); \n        draft.parent().parent().setName("Grandpa");\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@DslScope  \nvar newTreeNode = new(TreeNode::class).by(treeNode) {\n    parent().name = "Daddy"\n    parent().parent().name = "Grandpa"\n}\n'})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"add-getter-parentboolean",children:["Add getter ",(0,a.jsx)(n.code,{children:"parent(boolean)"})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    TreeNode parent(boolean autoCreate);\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n\n    // This getter is equivalent to Java's `parent(false)`  \n    override fun parent: TreeNode\n    \n    // This function is equivalent to Java's `parent(true)`\n    public fun parent(): TreeNodeDraft\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Java's ",(0,a.jsx)(n.code,{children:"parent(false)"})," and Kotlin's ",(0,a.jsx)(n.code,{children:"parent"})," have two issues:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Accessing it will cause an exception if the ",(0,a.jsx)(n.code,{children:"parent"})," property of the draft object is not set"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.code,{children:"parent"})," property of the draft object is set to null, accessing it will return null, and null does not support further modification"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"parent(true)"})," can resolve the above issues. If either of the above situations is met, it will automatically create and set an associated object, then allow the user to modify it. This is a very useful feature, especially when creating objects from scratch."]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(/* No `base` here */ draft -> {\n        draft.parent(true).setName("Daddy");\n        draft.parent(true).parent(true).setName("Grandpa");\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by /* No `base` here */ {\n    parent().setName("Daddy");\n    parent().parent().setName("Grandpa");\n}\n'})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"add-setparent",children:["Add ",(0,a.jsx)(n.code,{children:"setParent"})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode parent);\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    // var, not val\n    public var parent: TreeNode\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"This setter allows the user to replace the entire associated object."}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft.setParent(\n            Objects.createTreeNode(daddyDraft -> {\n                daddyDraft.setName("Daddy")\n            })\n        )\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by {\n    parent = new(TreeNode::class).by {\n        name = "Daddy"\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"add-lambda-based-applyparent",children:["Add lambda-based ",(0,a.jsx)(n.code,{children:"applyParent"})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"This feature only applies to Java."}),(0,a.jsx)(n.p,{children:"Kotlin code is already concise enough and does not need this method to simplify the code."})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft applyParent(\n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    @OldChain\n    TreeNodeDraft applyParent(\n        TreeNode base, \n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    ...other code omitted...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"These two setters are used to simplify the code. Since the two methods are highly similar in usage, only the first one is used as an example:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"More verbose writing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode oldTreeNode = Objects.createTreeNode(draft -> {\n        draft.setParent(\n            Objects.createTreeNode(daddyDraft -> {\n                daddyDraft.setName("Daddy")\n            })\n        )\n    });\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"More concise writing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode oldTreeNode = Objects.createTreeNode(draft -> {\n        draft.applyParent(daddyDraft -> {\n            daddyDraft.setName("Daddy")\n        })\n    });\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The two are completely equivalent."}),"\n",(0,a.jsx)(n.h2,{id:"collection-associations",children:"Collection associations"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TreeNode.childNodes"})," is an association property whose type is a collection rather than an object. In ORM terms, it is a one-to-many or many-to-many association."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," defines multiple methods for it:"]}),"\n",(0,a.jsxs)(n.h3,{id:"inherit-getter-childnodes",children:["Inherit getter ",(0,a.jsx)(n.code,{children:"childNodes()"})]}),"\n",(0,a.jsxs)(n.p,{children:["For both Java and Kotlin, ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," cannot override the return type of ",(0,a.jsx)(n.code,{children:"childNodes()"})," method. From a syntactic point of view, it can only inherit the ",(0,a.jsx)(n.code,{children:"childNodes()"})," method of ",(0,a.jsx)(n.code,{children:"TreeNode"}),"."]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"List<TreeNode> childNodes(); \n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"var childNodes: List<TreeNode>\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Although the return type defined in the ",(0,a.jsx)(n.code,{children:"TreeNode"})," interface is ",(0,a.jsx)(n.code,{children:"List<TreeNode>"}),", after being inherited by the ",(0,a.jsx)(n.code,{children:"TreeNodeDraft"})," interface, its return type should be understood as ",(0,a.jsx)(n.code,{children:"List<TreeNodeDraft>"}),"."]})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsx)(n.p,{children:"If the collection association of the draft object has been set, all elements in the returned collection are drafts. This allows the user to directly modify deeper associated objects in the collection."})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = Objects.createTreeNode(treeNode, draft -> {\n        ((TreeNodeDraft)\n            draft\n                .childNodes().get(0)\n        ).setName("Son");\n        ((TreeNodeDraft)\n            draft\n                .childNodes().get(0)\n                .childNodes().get(0)\n        ).setName("Grandson");\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = new(TreeNode::class).by(treeNode) {\n    (childNodes[0] as TreeNodeDraft)\n        .name = "Son"\n    (childNodes[0].childNodes[0] as TreeNodeDraft)\n        .name = "Son"\n}\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"danger",children:[(0,a.jsx)(n.p,{children:"The two forced type conversions in the above code significantly impair the developer experience. Therefore, this usage is not recommended in actual projects."}),(0,a.jsxs)(n.p,{children:["To achieve the same purpose, the ",(0,a.jsx)(n.code,{children:"childNodes(boolean)"})," method introduced below is more recommended."]})]}),"\n",(0,a.jsxs)(n.h3,{id:"add-getter-childnodesboolean",children:["Add getter ",(0,a.jsx)(n.code,{children:"childNodes(boolean)"})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsxs)(o.A,{value:"java",label:"Java",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java" ',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    List<TreeNodeDraft> childNodes(boolean autoCreate);\n\n    ...other code omitted...\n}\n"})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"childNodes(false)"})," is equivalent to ",(0,a.jsx)(n.code,{children:"childNodes()"}),", and accessing it will cause an exception if the ",(0,a.jsx)(n.code,{children:"childNodes"})," property of the draft object is not set.\n",(0,a.jsx)(n.code,{children:"childNodes(true)"})," will resolve this problem by automatically creating and setting a collection if the collection association property has not yet been set, then allowing the user to modify that collection."]})]}),(0,a.jsxs)(o.A,{value:"kotlin",label:"Kotlin",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    override var childNodes: List<TreeNode>\n    \n    fun childNodes(): MutableList<TreeNode>\n\n    ...other code omitted...\n}\n"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The getter of the ",(0,a.jsx)(n.code,{children:"childNodes"})," property is equivalent to Java's ",(0,a.jsx)(n.code,{children:"childNodes(false)"}),". Accessing it will cause an exception if this mutable proxy property is not set."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"childNodes()"})," function is equivalent to Java's ",(0,a.jsx)(n.code,{children:"childNodes(true)"}),". It automatically creates the property if not set, allowing the user to modify the collection."]}),"\n"]})]})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsxs)(o.A,{value:"java",label:"Java",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = Objects.createTreeNode(treeNode, draft -> {\n        draft\n            .childNodes(false)\n            .get(0)\n            .setName("Son");\n        draft\n            .childNodes(false)\n            .get(0)\n            .childNodes(false)\n            .get(0)\n            .setName("Grandson");\n    });\n'})}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Indeed, when the parameter is true, childNodes(boolean) can automatically create the collection when the childNodes property is not specified."}),(0,a.jsxs)(n.p,{children:["However, when the parameter is false, it is also very useful. Because the return type of this method is ",(0,a.jsx)(n.code,{children:"List<TreeNodeDraft>"})," instead of ",(0,a.jsx)(n.code,{children:"List<TreeNode>"}),", the developer-unfriendly code in the previous example will no longer exist."]})]})]}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = new(TreeNode::class).by(treeNode) {\n    childNodes()[0].name = "Son"\n    childNodes()[0].childNodes()[0].name = "Grandson"\n}\n'})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"add-setchildnodes",children:["Add ",(0,a.jsx)(n.code,{children:"setChildNodes"})]}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setChildNodes(List<TreeNode> childNodes);\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    // var, not val\n    overrie var childNodes: List<TreeNode>\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"This setter allows the user to replace the entire associated collection."}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft.setChildNodes(\n            Arrays.asList(\n                Objects.createTreeNode(childDraft -> {\n                    childDraft.setName("Eldest son")\n                }),\n                Objects.createTreeNode(childDraft -> {\n                    childDraft.setName("Second son")\n                })\n            )\n        )\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by {\n    childNodes = listOf(\n        new(TreeNode::class).by {\n            name = "Eldest son"\n        },\n        new(TreeNode::class).by {\n            name = "Second son"\n        }\n    )\n}\n'})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Somewhat cumbersome, the ",(0,a.jsx)(n.code,{children:"addIntoChildNodes"})," to be introduced below is more recommended."]})}),"\n",(0,a.jsxs)(n.h3,{id:"add-addintochildnodes",children:["Add ",(0,a.jsx)(n.code,{children:"addIntoChildNodes"})]}),"\n",(0,a.jsxs)(n.p,{children:["In the example above, we used ",(0,a.jsx)(n.code,{children:"setChildNodes"})," to replace the entire collection, but we can also choose to add collection elements one by one, rather than replacing the entire collection at one time."]}),"\n",(0,a.jsx)(n.p,{children:"The generated code is:"}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TreeNodeDraft.java"',children:"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(\n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(\n        TreeNode base,\n        DraftConsumer<TreeNodeDraft> block  \n    );\n\n    ...other code omitted...\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNodeDraft.java"',children:"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    public fun childNodes(): MutableList<TreeNodeDraft>\n\n    ...other code omitted...\n}\n\n// highlight-next-line\npublic fun MutableList<TreeNodeDraft>.addBy(\n    base: TreeNode? = null,\n    block: TreeNodeDraft.() -> Unit\n): MutableList<TreeNodeDraft> {\n    ...omit...\n    return this;\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"You should use it like this:"}),"\n",(0,a.jsxs)(d.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNode treeNode = Objects.createTreeNode(draft -> {\n        draft\n            .addIntoChildNodes(childDraft ->\n                childDraft.setName("Eldest son")\n            )\n            .addIntoChildNodes(childDraft ->\n                childDraft.setName("Second son")\n            )\n    });\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val treeNode = new(TreeNode::class).by {\n    childNodes().addBy {\n        name = "Eldest son"\n    }\n    childNodes().addBy {\n        name = "Second son"\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["This approach implicitly contains a feature that the ",(0,a.jsx)(n.code,{children:"childNodes"})," property of the draft object is not set and the collection is automatically created, i.e. it contains a built-in ",(0,a.jsx)(n.code,{children:"childNodes(true)"}),"."]}),(0,a.jsx)(n.p,{children:"Obviously, this approach is simpler than using the setter to replace the entire collection, so it is more recommended."})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var a=r(18215);const t={tabItem:"tabItem_Ymn6"};var d=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>T});var a=r(96540),t=r(18215),d=r(23104),o=r(56347),l=r(205),s=r(57485),i=r(31682),c=r(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.W6)(),d=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s.aZ)(d),(0,a.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(t.location.search);n.set(d,e),t.replace({...t.location,search:n.toString()})}),[d,t])]}function N(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,d=u(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:d}))),[i,h]=j({queryString:r,groupId:t}),[N,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,d]=(0,c.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:t}),x=(()=>{const e=i??N;return p({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),f(e)}),[h,f,d]),tabValues:d}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function b(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,d.a_)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),t=l[r].value;t!==a&&(i(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:d}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:h,onClick:c,...d,className:(0,t.A)("tabs__item",x.tabItem,d?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=N(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(g,{...n,...e})]})}function T(e){const n=(0,f.A)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var a=r(96540);const t={},d=a.createContext(t);function o(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);