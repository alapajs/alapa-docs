"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[4361],{1110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"template/render","title":"Template Rendering","description":"Template rendering in Alapa enables developers to dynamically generate HTML responses using pre-defined templates. These templates allow embedding logic and variables, which are replaced at runtime to produce the final HTML output.","source":"@site/docs/template/render.mdx","sourceDirName":"template","slug":"/template/render","permalink":"/docs/template/render","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-doc/tree/main/docs/template/render.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Template Rendering"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/docs/template/getting-started"},"next":{"title":"Include and Require","permalink":"/docs/template/include-required"}}');var i=t(4848),l=t(8453);const s={sidebar_position:2,title:"Template Rendering"},o="Template Rendering",a={},d=[{value:"<strong>Basic Rendering</strong>",id:"basic-rendering",level:2},{value:"Example: Rendering a Basic Template",id:"example-rendering-a-basic-template",level:3},{value:"Route Definition:",id:"route-definition",level:4},{value:"Output:",id:"output",level:4},{value:"<strong>Rendering with Nested Directories</strong>",id:"rendering-with-nested-directories",level:2},{value:"Example:",id:"example",level:3},{value:"Directory Structure:",id:"directory-structure",level:4},{value:"Route Definition:",id:"route-definition-1",level:4},{value:"<strong>Passing Context to Templates</strong>",id:"passing-context-to-templates",level:2},{value:"Example: Passing Context",id:"example-passing-context",level:3},{value:"Route Definition:",id:"route-definition-2",level:4},{value:"Output:",id:"output-1",level:4},{value:"<strong>Simplified Rendering with <code>view</code> Method</strong>",id:"simplified-rendering-with-view-method",level:2},{value:"Example:",id:"example-1",level:3},{value:"<strong>Error Handling During Rendering</strong>",id:"error-handling-during-rendering",level:2},{value:"<strong>Best Practices</strong>",id:"best-practices",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{BrowserWindow:t,CodeScreen:r}=n;return t||p("BrowserWindow",!0),r||p("CodeScreen",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"template-rendering",children:(0,i.jsx)(n.strong,{children:"Template Rendering"})})}),"\n",(0,i.jsx)(n.p,{children:"Template rendering in Alapa enables developers to dynamically generate HTML responses using pre-defined templates. These templates allow embedding logic and variables, which are replaced at runtime to produce the final HTML output."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"basic-rendering",children:(0,i.jsx)(n.strong,{children:"Basic Rendering"})}),"\n",(0,i.jsxs)(n.p,{children:["To render a template, use the ",(0,i.jsx)(n.code,{children:"res.render"})," method, specifying the name of the template file. The file extension can be omitted if the default ",(0,i.jsx)(n.code,{children:".html"})," extension is used."]}),"\n",(0,i.jsx)(n.h3,{id:"example-rendering-a-basic-template",children:"Example: Rendering a Basic Template"}),"\n",(0,i.jsx)(r,{title:"views/index.html",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Welcome</title>\r\n  </head>\r\n  <body>\r\n    <h1>Welcome to Alapa!</h1>\r\n  </body>\r\n</html>\n"})})}),"\n",(0,i.jsx)(n.h4,{id:"route-definition",children:"Route Definition:"}),"\n",(0,i.jsx)(r,{title:"src/app/index.ts",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Request, Response, Router } from "alapa";\r\nconst router = new Route();\r\n\r\nrouter.get("/", function (req: Request, res: Response) {\r\n  res.render("index.html");\r\n});\n'})})}),"\n",(0,i.jsx)(n.h4,{id:"output",children:"Output:"}),"\n",(0,i.jsx)(t,{src:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Welcome</title>\r\n  </head>\r\n  <body>\r\n    <h1>Welcome to Alapa!</h1>\r\n  </body>\r\n</html>\n"})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"rendering-with-nested-directories",children:(0,i.jsx)(n.strong,{children:"Rendering with Nested Directories"})}),"\n",(0,i.jsx)(n.p,{children:"Templates can be organized into directories, and their paths can be specified using dot notation."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,i.jsx)(n.h4,{id:"directory-structure",children:"Directory Structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"views/\r\n  account/\r\n    login.html\n"})}),"\n",(0,i.jsx)(n.h4,{id:"route-definition-1",children:"Route Definition:"}),"\n",(0,i.jsx)(r,{title:"src/app/account/login.ts",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Request, Response, Router } from "alapa";\r\n\r\nconst loginRoute = new Router();\r\n\r\nloginRoute.get("/login", function (req: Request, res: Response) {\r\n  res.render("account.login"); // Same as "account/login"\r\n});\r\n\r\nexport default loginRoute;\n'})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"passing-context-to-templates",children:(0,i.jsx)(n.strong,{children:"Passing Context to Templates"})}),"\n",(0,i.jsxs)(n.p,{children:["To make templates dynamic, you can pass a context object to ",(0,i.jsx)(n.code,{children:"res.render"}),". The keys in the context object become accessible within the template."]}),"\n",(0,i.jsx)(n.h3,{id:"example-passing-context",children:"Example: Passing Context"}),"\n",(0,i.jsx)(n.h4,{id:"route-definition-2",children:"Route Definition:"}),"\n",(0,i.jsx)(r,{title:"src/app/index.ts",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Request, Response, Router } from "alapa";\r\n\r\nconst indexRoute = new Router();\r\n\r\nindexRoute.get("/", function (req: Request, res: Response) {\r\n  const context = {\r\n    title: "Alapa Application",\r\n    message: "Hello, Alapa!",\r\n  };\r\n  res.render("index", context);\r\n});\r\n\r\nexport default indexRoute;\n'})})}),"\n",(0,i.jsx)(n.p,{children:"Template code"}),"\n",(0,i.jsx)(r,{title:"views/index.html",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>{{ title }}</title>\r\n  </head>\r\n  <body>\r\n    <h1>{{ message }}</h1>\r\n  </body>\r\n</html>\n"})})}),"\n",(0,i.jsx)(n.h4,{id:"output-1",children:"Output:"}),"\n",(0,i.jsx)(t,{src:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Alapa Application</title>\r\n  </head>\r\n  <body>\r\n    <h1>Hello, Alapa!</h1>\r\n  </body>\r\n</html>\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"simplified-rendering-with-view-method",children:(0,i.jsxs)(n.strong,{children:["Simplified Rendering with ",(0,i.jsx)(n.code,{children:"view"})," Method"]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"view"})," method allows you to directly map routes to templates without defining a handler function."]}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example:"}),"\n",(0,i.jsx)(r,{title:"src/app/account/login.ts",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Request, Response, Router } from "alapa";\r\nconst route = new Route();\r\nroute.view("/login", "account.login");\n'})})}),"\n",(0,i.jsx)(n.p,{children:"You can also pass context using this method:"}),"\n",(0,i.jsx)(r,{title:"src/app/account/login.ts",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Request, Response, Router } from "alapa";\r\nconst route = new Route();\r\n\r\nconst context = {\r\n  title: "Alapa Application",\r\n  message: "Hello, Alapa!",\r\n};\r\n\r\nroute.view("/login", "account.login", context);\n'})})}),"\n",(0,i.jsx)(n.h2,{id:"error-handling-during-rendering",children:(0,i.jsx)(n.strong,{children:"Error Handling During Rendering"})}),"\n",(0,i.jsx)(n.p,{children:"If a template file is not found or there is an error during rendering, Alapa will throw an error. Ensure that all referenced templates exist and are free of syntax issues."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:(0,i.jsx)(n.strong,{children:"Best Practices"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Organize Templates:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use directories to group related templates (e.g., ",(0,i.jsx)(n.code,{children:"views/account"}),", ",(0,i.jsx)(n.code,{children:"views/dashboard"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Use Context Wisely:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Only pass necessary data to templates to keep them clean and efficient."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Error Handling:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Handle rendering errors gracefully by defining an error-handling middleware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Avoid Overloading Templates:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep template logic minimal; move complex logic to your route handlers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"With Alapa's template rendering capabilities, you can create dynamic, scalable, and maintainable web pages with ease."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);