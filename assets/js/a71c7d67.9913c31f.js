"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[6027],{9659:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"model/relation/relation-query-builder","title":"RelationQueryBuilder","description":"RelationQueryBuilder is a specialized QueryBuilder that enables efficient handling of relationships in your database. With it, you can manage relations without loading entire entities, or easily fetch related data.","source":"@site/docs/model/relation/relation-query-builder.mdx","sourceDirName":"model/relation","slug":"/model/relation/relation-query-builder","permalink":"/docs/model/relation/relation-query-builder","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-docs/tree/main/docs/model/relation/relation-query-builder.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"RelationQueryBuilder"},"sidebar":"tutorialSidebar","previous":{"title":"Model Relationship","permalink":"/docs/model/relation/inde-old"},"next":{"title":"Authentication","permalink":"/docs/security/login"}}');var r=i(4848),o=i(8453);const a={sidebar_position:7,title:"RelationQueryBuilder"},s="Working with Relations",l={},d=[{value:"Example: Adding a Category to a Post",id:"example-adding-a-category-to-a-post",level:3},{value:"Using IDs to Bind Entities",id:"using-ids-to-bind-entities",level:3},{value:"Removing Related Entities",id:"removing-related-entities",level:3},{value:"Setting Relations",id:"setting-relations",level:3},{value:"Loading Relational Entities",id:"loading-relational-entities",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"working-with-relations",children:"Working with Relations"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RelationQueryBuilder"})," is a specialized ",(0,r.jsx)(t.code,{children:"QueryBuilder"})," that enables efficient handling of relationships in your database. With it, you can manage relations without loading entire entities, or easily fetch related data."]}),"\n",(0,r.jsx)(t.h3,{id:"example-adding-a-category-to-a-post",children:"Example: Adding a Category to a Post"}),"\n",(0,r.jsxs)(t.p,{children:["Suppose a ",(0,r.jsx)(t.code,{children:"Post"})," entity has a many-to-many relationship with a ",(0,r.jsx)(t.code,{children:"Category"})," entity, named ",(0,r.jsx)(t.code,{children:"categories"}),". Here\u2019s how you can add a new category to this relationship:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'await Post.createQueryBuilder()\r\n  .relation(Post, "categories")\r\n  .of(post)\r\n  .add(category);\n'})}),"\n",(0,r.jsx)(t.p,{children:"This is equivalent to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const post = await Post.findOne({\r\n  where: { id: 1 },\r\n  relations: { categories: true },\r\n});\r\n\r\npost.categories.push(category);\r\nawait postRepository.save(post);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.code,{children:"RelationQueryBuilder"})," is more efficient, as it minimizes operations and directly updates the database. It also avoids performance issues when managing large relations, such as adding new categories to a post with thousands of existing categories."]}),"\n",(0,r.jsx)(t.h3,{id:"using-ids-to-bind-entities",children:"Using IDs to Bind Entities"}),"\n",(0,r.jsxs)(t.p,{children:["You can reference entities by their IDs instead of loading them. For instance, to add a category with ",(0,r.jsx)(t.code,{children:"id = 3"})," to a post with ",(0,r.jsx)(t.code,{children:"id = 1"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'await Post.createQueryBuilder().relation(Post, "categories").of(1).add(3);\n'})}),"\n",(0,r.jsx)(t.p,{children:"For composite primary keys, pass an ID map:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'await Post.createQueryBuilder()\r\n  .relation(Post, "categories")\r\n  .of({ firstPostId: 1, secondPostId: 3 })\r\n  .add({ firstCategoryId: 2, secondCategoryId: 4 });\n'})}),"\n",(0,r.jsx)(t.h3,{id:"removing-related-entities",children:"Removing Related Entities"}),"\n",(0,r.jsx)(t.p,{children:"Removing a category from a post:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'await Post.createQueryBuilder()\r\n  .relation(Post, "categories")\r\n  .of(post) // or post ID\r\n  .remove(category); // or category ID\n'})}),"\n",(0,r.jsx)(t.h3,{id:"setting-relations",children:"Setting Relations"}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.code,{children:"one-to-one"})," or ",(0,r.jsx)(t.code,{children:"many-to-one"})," relations, use ",(0,r.jsx)(t.code,{children:"set"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'await Post.createQueryBuilder()\r\n  .relation(Post, "categories")\r\n  .of(post) // or post ID\r\n  .set(category); // or category ID\n'})}),"\n",(0,r.jsxs)(t.p,{children:["To unset a relation, pass ",(0,r.jsx)(t.code,{children:"null"})," to the ",(0,r.jsx)(t.code,{children:"set"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'await Post.createQueryBuilder()\r\n  .relation(Post, "categories")\r\n  .of(post) // or post ID\r\n  .set(null);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"loading-relational-entities",children:"Loading Relational Entities"}),"\n",(0,r.jsxs)(t.p,{children:["To fetch related entities, use the relational query builder. For instance, if a ",(0,r.jsx)(t.code,{children:"Post"})," entity has a many-to-many ",(0,r.jsx)(t.code,{children:"categories"})," relation and a many-to-one ",(0,r.jsx)(t.code,{children:"user"})," relation:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'const post = await Post.findOneBy(Post, { id: 1 });\r\n\r\npost.categories = await Post.createQueryBuilder()\r\n  .relation(Post, "categories")\r\n  .of(post) // or post ID\r\n  .loadMany();\r\n\r\npost.author = await Post.createQueryBuilder()\r\n  .relation(Post, "user")\r\n  .of(post) // or post ID\r\n  .loadOne();\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);