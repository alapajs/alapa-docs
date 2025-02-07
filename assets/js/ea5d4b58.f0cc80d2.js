"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[2287],{1187:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"model/relation/inde-old","title":"Model Relationship","description":"Defining a Model with Relation","source":"@site/docs/model/relation/inde-old.mdx","sourceDirName":"model/relation","slug":"/model/relation/inde-old","permalink":"/alapa-docs/docs/model/relation/inde-old","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-doc/tree/main/docs/model/relation/inde-old.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Model Relationship"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/alapa-docs/docs/model/relation/getting-started"},"next":{"title":"RelationQueryBuilder","permalink":"/alapa-docs/docs/model/relation/relation-query-builder"}}');var t=o(4848),i=o(8453);const a={sidebar_position:1,title:"Model Relationship"},s=void 0,l={},d=[{value:"Defining a Model with Relation",id:"defining-a-model-with-relation",level:2},{value:"Using the Model",id:"using-the-model",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"defining-a-model-with-relation",children:"Defining a Model with Relation"}),"\n",(0,t.jsxs)(n.p,{children:["In this section, we will explore how to create a model that incorporates relationships with other models. By using decorators such as ",(0,t.jsx)(n.code,{children:"ManyToOne"})," and ",(0,t.jsx)(n.code,{children:"JoinColumn"})," decorators, we can establish connections between different entities, enabling efficient data management and retrieval in our application. This approach helps to maintain data integrity and allows for more complex queries and operations."]}),"\n",(0,t.jsx)(n.p,{children:"Here is the code sample:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"models/books.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Users } from "./user";\r\nimport {\r\n  Model,\r\n  ManyToOne,\r\n  JoinColumn,\r\n  Column,\r\n  NullColumn,\r\n  NumericColumn,\r\n  PrimaryKeyColumn,\r\n  TableModel,\r\n  TextColumn,\r\n} from "alapa";\r\n\r\n@TableModel()\r\nexport class Books extends Model {\r\n  @PrimaryKeyColumn()\r\n  id: number;\r\n\r\n  @Column()\r\n  title: string;\r\n\r\n  @JoinColumn({ name: "user" })\r\n  @ManyToOne((type) => Users, { onDelete: "CASCADE" })\r\n  user: Users;\r\n\r\n  @NullColumn()\r\n  author: string;\r\n\r\n  @NumericColumn()\r\n  year: number;\r\n\r\n  @TextColumn()\r\n  description: string;\r\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"using-the-model",children:"Using the Model"}),"\n",(0,t.jsx)(n.p,{children:"Create a new record"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Books } from "models/books";\r\nimport { Users } from "models/users";\r\n\r\nconst user = Users.findOneBy({ id: 1 });\r\n\r\nif (!user) return;\r\n\r\nbook.title = req.body.title;\r\nbook.author = req.body.author;\r\nbook.year = req.body.year;\r\nbook.description = req.body.description;\r\nbook.user = user;\r\n\r\nawait book.save(); // save to database\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#resourceful-routing",children:"Resourceful Routing"})," for more examples of how to perform CRUD operations."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var r=o(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);