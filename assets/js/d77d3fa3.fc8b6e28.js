"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[7590],{8290:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"routing/basic","title":"Basic Routing","description":"Alapa provides a straightforward and flexible routing system for handling HTTP requests. Its routing design is similar to Express, allowing developers to define routes for various HTTP methods easily.","source":"@site/docs/routing/basic.mdx","sourceDirName":"routing","slug":"/routing/basic","permalink":"/docs/routing/basic","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-docs/tree/main/docs/routing/basic.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Basic Routing"},"sidebar":"tutorialSidebar","previous":{"title":"directory-structure","permalink":"/docs/get-started/directory-structure"},"next":{"title":"Named Routes","permalink":"/docs/routing/name"}}');var t=n(4848),o=n(8453);const i={sidebar_position:1,title:"Basic Routing"},l="Basic Routing",d={},a=[{value:"<strong>Defining Routes</strong>",id:"defining-routes",level:2},{value:"<strong>Supported HTTP Methods</strong>",id:"supported-http-methods",level:2},{value:"Example:",id:"example",level:3},{value:"<strong>Route Parameters</strong>",id:"route-parameters",level:2},{value:"Example:",id:"example-1",level:3},{value:"<strong>Query Strings</strong>",id:"query-strings",level:2},{value:"Example:",id:"example-2",level:3},{value:"<strong>Default Route (404 Handling)</strong>",id:"default-route-404-handling",level:2},{value:"<strong>Grouping Routes</strong>",id:"grouping-routes",level:2},{value:"Example:",id:"example-3",level:3},{value:"<strong>Summary</strong>",id:"summary",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{BrowserWindow:n,CodeScreen:s}=r;return n||p("BrowserWindow",!0),s||p("CodeScreen",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"basic-routing",children:(0,t.jsx)(r.strong,{children:"Basic Routing"})})}),"\n",(0,t.jsx)(r.p,{children:"Alapa provides a straightforward and flexible routing system for handling HTTP requests. Its routing design is similar to Express, allowing developers to define routes for various HTTP methods easily."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"defining-routes",children:(0,t.jsx)(r.strong,{children:"Defining Routes"})}),"\n",(0,t.jsxs)(r.p,{children:["Routes are defined using the ",(0,t.jsx)(r.code,{children:"Router"})," class, which maps specific HTTP methods and URLs to handler functions. Below is an example of a basic route definition:"]}),"\n",(0,t.jsx)(s,{title:"src/app/index.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router, Request, Response } from "alapa";\r\n\r\nconst indexRoute = new Router();\r\n\r\n// GET Route\r\nindexRoute.get("/", (req: Request, res: Response) => {\r\n  res.send("Welcome to my site!");\r\n});\r\n\r\nexport default indexRoute;\n'})})}),"\n",(0,t.jsx)(r.p,{children:"After Defining index Route you can now connect to application routes as show bellow"}),"\n",(0,t.jsx)(s,{title:"src/app/routes.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { Router } from 'alapa'\r\nimport { indexRoute } from './index'\r\n\r\nconst allRoutes = new Router()\r\n\r\nallRoutes.use(indexRoute)\r\n\r\nexport allRoutes\n"})})}),"\n",(0,t.jsx)(n,{title:"/",children:"Welcome to my site!"}),"\n",(0,t.jsx)(r.h2,{id:"supported-http-methods",children:(0,t.jsx)(r.strong,{children:"Supported HTTP Methods"})}),"\n",(0,t.jsx)(r.p,{children:"Alapa supports all common HTTP methods, such as:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"GET"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"POST"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"PUT"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"PATCH"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"DELETE"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"OPTIONS"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"ALL"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Each method is mapped using a corresponding function (",(0,t.jsx)(r.code,{children:"router.get"}),", ",(0,t.jsx)(r.code,{children:"router.post"}),", etc.)."]}),"\n",(0,t.jsx)(r.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(s,{title:"",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router, Request, Response } from "alapa";\r\nconst router = new Router();\r\n\r\n// POST Route\r\nrouter.post("/submit", (req: Request, res: Response) => {\r\n  const { name, email } = req.body;\r\n  res.send(`Data received: Name: ${name}, Email: ${email}`);\r\n});\r\n\r\n// PUT Route\r\nrouter.put("/update", (req: Request, res: Response) => {\r\n  const { id, data } = req.body;\r\n  res.send(`Updating record ${id} with data: ${JSON.stringify(data)}`);\r\n});\r\n\r\n// All Route\r\nrouter.all("/login", (req: Request, res: Response) => {\r\n  const { user, password } = req.body;\r\n  res.send(`The method is ${req.method}`);\r\n});\r\n\r\n// DELETE Route\r\nrouter.delete("/remove/:id", (req: Request, res: Response) => {\r\n  const { id } = req.params;\r\n  res.send(`Record ${id} has been deleted.`);\r\n});\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"route-parameters",children:(0,t.jsx)(r.strong,{children:"Route Parameters"})}),"\n",(0,t.jsxs)(r.p,{children:["Dynamic segments can be added to routes using the ",(0,t.jsx)(r.code,{children:":"})," syntax. Parameters are accessible via ",(0,t.jsx)(r.code,{children:"req.params"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"example-1",children:"Example:"}),"\n",(0,t.jsx)(s,{title:"",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router, Request, Response } from "alapa";\r\nconst userRoutes = new Router();\r\n\r\nuserRoutes.get("/users/:id", (req: Request, res: Response) => {\r\nconst id = req.params.id;\r\nres.send(`Fetching details for user with ID: ${id}`);\r\n});\r\nexport userRoutes\r\n\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(n,{title:"users/1",children:(0,t.jsx)(r.p,{children:"Fetching details for user with ID: 1"})}),"\n",(0,t.jsx)(r.h2,{id:"query-strings",children:(0,t.jsx)(r.strong,{children:"Query Strings"})}),"\n",(0,t.jsxs)(r.p,{children:["You can handle query strings in routes using ",(0,t.jsx)(r.code,{children:"req.query"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"example-2",children:"Example:"}),"\n",(0,t.jsx)(s,{title:"src/app/search.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"router.get(\"/search\", (req: Request, res: Response) => {\r\n  const { keyword, page } = req.query;\r\n  res.send(`Search results for '${keyword}' on page ${page}`);\r\n});\n"})})}),"\n",(0,t.jsx)(n,{title:"search?keyword=foo&page=2",children:(0,t.jsxs)(r.p,{children:["Search results for ",(0,t.jsx)(r.code,{children:"foo"})," on page ",(0,t.jsx)(r.code,{children:"2"})]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"default-route-404-handling",children:(0,t.jsx)(r.strong,{children:"Default Route (404 Handling)"})}),"\n",(0,t.jsx)(r.p,{children:"To handle undefined routes, you can define a fallback route:"}),"\n",(0,t.jsx)(s,{title:"src/app/routes.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'appRouter.all("*", (req: Request, res: Response) => {\r\n  res.status(404).send("Page not found");\r\n});\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"grouping-routes",children:(0,t.jsx)(r.strong,{children:"Grouping Routes"})}),"\n",(0,t.jsx)(r.p,{children:"Organize your routes by grouping them using separate files or route prefixes."}),"\n",(0,t.jsx)(r.h3,{id:"example-3",children:"Example:"}),"\n",(0,t.jsx)(s,{title:"src/app/routes.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'const userRouter = new Router();\r\nuserRouter.get("/profile", (req: Request, res: Response) => {\r\n  res.send("User profile");\r\n});\r\n\r\nconst appRouter = new Router();\r\nappRouter.use("/users", userRouter);\r\n\n'})})}),"\n",(0,t.jsxs)(r.p,{children:["Now, all routes under ",(0,t.jsx)(r.code,{children:"userRouter"})," will be prefixed with ",(0,t.jsx)(r.code,{children:"/users"}),"."]}),"\n",(0,t.jsx)(n,{title:"users/profile",children:(0,t.jsx)(r.p,{children:"User profile"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"summary",children:(0,t.jsx)(r.strong,{children:"Summary"})}),"\n",(0,t.jsx)(r.p,{children:"Alapa routing is highly intuitive, enabling developers to handle routes, parameters, query strings, and even custom route grouping with ease."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var s=n(6540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);