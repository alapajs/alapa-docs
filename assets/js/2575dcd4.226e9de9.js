"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[999],{6628:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"routing/middleware","title":"Middleware","description":"Middleware in Alapa provides a powerful mechanism for inspecting and filtering HTTP requests as they enter your application. Middleware is often used to handle common tasks such as authentication, logging, and modifying request or response objects before they reach the route handler.","source":"@site/docs/routing/middleware.md","sourceDirName":"routing","slug":"/routing/middleware","permalink":"/docs/routing/middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-docs/tree/main/docs/routing/middleware.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Middleware"},"sidebar":"tutorialSidebar","previous":{"title":"Named Routes","permalink":"/docs/routing/name"},"next":{"title":"Controller","permalink":"/docs/routing/controller"}}');var t=n(4848),i=n(8453);const s={sidebar_position:3,title:"Middleware"},a="Middleware",o={},l=[{value:"<strong>Understanding Middleware</strong>",id:"understanding-middleware",level:2},{value:"Example: Basic Middleware",id:"example-basic-middleware",level:3},{value:"<strong>Middleware Structure</strong>",id:"middleware-structure",level:3},{value:"<strong>Applying middleware</strong>",id:"applying-middleware",level:3},{value:"<strong>Chaining Middleware</strong>",id:"chaining-middleware",level:2},{value:"Example: Multiple Middleware Functions",id:"example-multiple-middleware-functions",level:3},{value:"<strong>Error-Handling Middleware</strong>",id:"error-handling-middleware",level:2},{value:"Example:",id:"example",level:3},{value:"<strong>Summary</strong>",id:"summary",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{CodeScreen:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeScreen",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"middleware",children:(0,t.jsx)(r.strong,{children:"Middleware"})})}),"\n",(0,t.jsx)(r.p,{children:"Middleware in Alapa provides a powerful mechanism for inspecting and filtering HTTP requests as they enter your application. Middleware is often used to handle common tasks such as authentication, logging, and modifying request or response objects before they reach the route handler."}),"\n",(0,t.jsx)(r.p,{children:"Alapa's middleware system is inspired by Express, offering simplicity and flexibility for developers to implement custom and reusable logic."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"understanding-middleware",children:(0,t.jsx)(r.strong,{children:"Understanding Middleware"})}),"\n",(0,t.jsxs)(r.p,{children:["Middleware acts as a pipeline through which requests pass before they reach the defined route handlers. If a middleware detects an issue (e.g., the user is not authenticated), it can interrupt the request cycle and respond directly. Otherwise, it invokes the ",(0,t.jsx)(r.code,{children:"next()"})," function to pass control to the next middleware or route handler."]}),"\n",(0,t.jsx)(r.h3,{id:"example-basic-middleware",children:"Example: Basic Middleware"}),"\n",(0,t.jsxs)(r.p,{children:["The following middleware handles requests to the ",(0,t.jsx)(r.code,{children:"/dashboard"})," route:"]}),"\n",(0,t.jsx)(n,{title:"src/app/dashboard/middleware.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Request, Response, NextFunction } from "alapa";\r\n\r\nconst dashboardMiddle = (req: Request, res: Response, next: NextFunction) => {\r\n  console.log("Middleware executed for /dashboard");\r\n  next(); // Proceed to the next middleware or route handler\r\n};\r\n\r\nexport default dashboardMiddle;\n'})})}),"\n",(0,t.jsx)(r.h3,{id:"middleware-structure",children:(0,t.jsx)(r.strong,{children:"Middleware Structure"})}),"\n",(0,t.jsx)(r.p,{children:"Basic middleware functions take three arguments:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"req"}),": The request object."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"res"}),": The response object."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"next"}),": A function that passes control to the next middleware or route handler."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"applying-middleware",children:(0,t.jsx)(r.strong,{children:"Applying middleware"})}),"\n",(0,t.jsxs)(r.p,{children:["To apply middleware to a route handler you can use either ",(0,t.jsx)(r.code,{children:"use"})," or ",(0,t.jsx)(r.code,{children:"middleware"})," methods on the ",(0,t.jsx)(r.code,{children:"Router's"})," instance as given bellow."]}),"\n",(0,t.jsx)(n,{title:"src/app/dashboard/router.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport dashboardMiddle from "./middleware";\r\n\r\nconst dashboardRoutes = new Router();\r\n\r\ndashboardRoutes.use(dashboardMiddle);\r\n// OR\r\ndashboardRoutes.middleware(dashboardMiddle);\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"chaining-middleware",children:(0,t.jsx)(r.strong,{children:"Chaining Middleware"})}),"\n",(0,t.jsx)(r.p,{children:"You can chain multiple middleware functions for a single route or group of routes."}),"\n",(0,t.jsx)(r.h3,{id:"example-multiple-middleware-functions",children:"Example: Multiple Middleware Functions"}),"\n",(0,t.jsx)(n,{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router, Request, Response, NextFunction } from "alapa";\r\n\r\nconst loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {\r\n  console.log(`${req.method} ${req.url}`);\r\n  next();\r\n};\r\n\r\nconst checkAuthMiddleware = (\r\n  req: Request,\r\n  res: Response,\r\n  next: NextFunction\r\n) => {\r\n  if (req.headers.authorization) {\r\n    next();\r\n  } else {\r\n    res.status(401).send("Unauthorized");\r\n  }\r\n};\r\n\r\nconst router = new Router();\r\nrouter.use("/secure", loggerMiddleware, checkAuthMiddleware);\n'})})}),"\n",(0,t.jsx)(r.p,{children:"Here, the logger middleware logs the request details before the authentication middleware validates the user."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"error-handling-middleware",children:(0,t.jsx)(r.strong,{children:"Error-Handling Middleware"})}),"\n",(0,t.jsxs)(r.p,{children:["Middleware can also handle errors that occur during request processing. Error-handling middleware functions have an additional ",(0,t.jsx)(r.code,{children:"err"})," parameter as the first argument."]}),"\n",(0,t.jsx)(r.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(n,{children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Request, Response, NextFunction } from "alapa";\r\nconst errorHandler = (\r\n  err: any,\r\n  req: Request,\r\n  res: Response,\r\n  next: NextFunction\r\n) => {\r\n  console.error(err.stack);\r\n  res.status(500).send("Something went wrong!");\r\n};\r\n\r\nrouter.use(errorHandler);\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"summary",children:(0,t.jsx)(r.strong,{children:"Summary"})}),"\n",(0,t.jsx)(r.p,{children:"Middleware is a critical part of the Alapa framework, allowing you to implement reusable logic for tasks like authentication, logging, and error handling. Whether applied globally, to specific routes, or as part of a middleware chain, it provides a structured way to manage request processing in your application."})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var d=n(6540);const t={},i=d.createContext(t);function s(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);