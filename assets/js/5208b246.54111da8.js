"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[9396],{3391:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"routing/middleware","title":"Middleware","description":"Middleware in Alapa provides a powerful mechanism for inspecting and filtering HTTP requests as they enter your application. Middleware is often used to handle common tasks such as authentication, logging, and modifying request or response objects before they reach the route handler.","source":"@site/docs/routing/middleware.mdx","sourceDirName":"routing","slug":"/routing/middleware","permalink":"/docs/routing/middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-doc/tree/main/docs/routing/middleware.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Middleware"},"sidebar":"tutorialSidebar","previous":{"title":"Named Routes","permalink":"/docs/routing/name"},"next":{"title":"Resourceful Routing","permalink":"/docs/routing/resourceful"}}');var d=n(4848),s=n(8453);const a={sidebar_position:3,title:"Middleware"},l="Middleware",t={},o=[{value:"<strong>Understanding Middleware</strong>",id:"understanding-middleware",level:2},{value:"Example: Basic Middleware",id:"example-basic-middleware",level:3},{value:"<strong>Middleware Structure</strong>",id:"middleware-structure",level:3},{value:"<strong>Applying middleware</strong>",id:"applying-middleware",level:3},{value:"<strong>Alias Middleware</strong>",id:"alias-middleware",level:2},{value:"Adding Middleware Alias",id:"adding-middleware-alias",level:3},{value:"Using Middleware Alias",id:"using-middleware-alias",level:3},{value:"<strong>Chaining Middleware</strong>",id:"chaining-middleware",level:2},{value:"Example: Multiple Middleware Functions",id:"example-multiple-middleware-functions",level:3},{value:"<strong>Route-Specific Middleware</strong>",id:"route-specific-middleware",level:2},{value:"Example:",id:"example",level:3},{value:"<strong>Global Middleware</strong>",id:"global-middleware",level:2},{value:"Example:",id:"example-1",level:3},{value:"<strong>Error-Handling Middleware</strong>",id:"error-handling-middleware",level:2},{value:"Example:",id:"example-2",level:3},{value:"<strong>Summary</strong>",id:"summary",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CodeScreen:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeScreen",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"middleware",children:(0,d.jsx)(r.strong,{children:"Middleware"})})}),"\n",(0,d.jsx)(r.p,{children:"Middleware in Alapa provides a powerful mechanism for inspecting and filtering HTTP requests as they enter your application. Middleware is often used to handle common tasks such as authentication, logging, and modifying request or response objects before they reach the route handler."}),"\n",(0,d.jsx)(r.p,{children:"Alapa's middleware system is inspired by Express, offering simplicity and flexibility for developers to implement custom and reusable logic."}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"understanding-middleware",children:(0,d.jsx)(r.strong,{children:"Understanding Middleware"})}),"\n",(0,d.jsxs)(r.p,{children:["Middleware acts as a pipeline through which requests pass before they reach the defined route handlers. If a middleware detects an issue (e.g., the user is not authenticated), it can interrupt the request cycle and respond directly. Otherwise, it invokes the ",(0,d.jsx)(r.code,{children:"next()"})," function to pass control to the next middleware or route handler."]}),"\n",(0,d.jsx)(r.h3,{id:"example-basic-middleware",children:"Example: Basic Middleware"}),"\n",(0,d.jsxs)(r.p,{children:["The following middleware handles requests to the ",(0,d.jsx)(r.code,{children:"/dashboard"})," route:"]}),"\n",(0,d.jsx)(n,{title:"src/app/dashboard/middleware.ts",children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Request, Response, NextFunction } from "alapa";\r\n\r\nconst dashboardMiddle = (req: Request, res: Response, next: NextFunction) => {\r\n  console.log("Middleware executed for /dashboard");\r\n  next(); // Proceed to the next middleware or route handler\r\n};\r\n\r\nexport default dashboardMiddle;\n'})})}),"\n",(0,d.jsx)(r.h3,{id:"middleware-structure",children:(0,d.jsx)(r.strong,{children:"Middleware Structure"})}),"\n",(0,d.jsx)(r.p,{children:"Basic middleware functions take three arguments:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"req"}),": The request object."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"res"}),": The response object."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"next"}),": A function that passes control to the next middleware or route handler."]}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"applying-middleware",children:(0,d.jsx)(r.strong,{children:"Applying middleware"})}),"\n",(0,d.jsxs)(r.p,{children:["To apply middleware to a route handler you can use either ",(0,d.jsx)(r.code,{children:"use"})," or ",(0,d.jsx)(r.code,{children:"middleware"})," methods on the ",(0,d.jsx)(r.code,{children:"Router's"})," instance as given bellow."]}),"\n",(0,d.jsx)(n,{title:"src/app/dashboard/router.ts",children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport dashboardMiddle from "./middleware";\r\n\r\nconst dashboardRoutes = new Router();\r\n\r\ndashboardRoutes.use(dashboardMiddle);\r\n// OR\r\ndashboardRoutes.middleware(dashboardMiddle);\n'})})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"alias-middleware",children:(0,d.jsx)(r.strong,{children:"Alias Middleware"})}),"\n",(0,d.jsx)(r.p,{children:"You can assign aliases to middleware for easier management and reuse."}),"\n",(0,d.jsx)(r.h3,{id:"adding-middleware-alias",children:"Adding Middleware Alias"}),"\n",(0,d.jsx)(n,{title:"src/app/users/middleware.ts",children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Request, Response, NextFunction } from "alapa";\r\nexport const myAuthMiddleware = (\r\n  req: Request,\r\n  res: Response,\r\n  next: NextFunction\r\n) => {\r\n  console.log("Middleware Alias Example");\r\n  next();\r\n};\r\n\r\naddAlias("myAuth", myAuthMiddleware);\n'})})}),"\n",(0,d.jsx)(n,{title:"src/config/alias.ts",children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { myAuthMiddleware } from "../app/users/middleware";\r\nexport const aliases = {\r\n  myAuth: myAuthMiddleware,\r\n};\n'})})}),"\n",(0,d.jsx)(r.h3,{id:"using-middleware-alias",children:"Using Middleware Alias"}),"\n",(0,d.jsx)(r.p,{children:"You can use the alias any where in your application"}),"\n",(0,d.jsx)(n,{title:"src/app/users/router.ts",children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nconst router = new Router();\r\nrouter.use("myAuth");\n'})})}),"\n",(0,d.jsxs)(r.p,{children:["This allows you to reuse ",(0,d.jsx)(r.code,{children:"myAuthMiddleware"})," without explicitly referencing its implementation."]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"chaining-middleware",children:(0,d.jsx)(r.strong,{children:"Chaining Middleware"})}),"\n",(0,d.jsx)(r.p,{children:"You can chain multiple middleware functions for a single route or group of routes."}),"\n",(0,d.jsx)(r.h3,{id:"example-multiple-middleware-functions",children:"Example: Multiple Middleware Functions"}),"\n",(0,d.jsx)(n,{children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Router, Request, Response, NextFunction } from "alapa";\r\n\r\nconst loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {\r\n  console.log(`${req.method} ${req.url}`);\r\n  next();\r\n};\r\n\r\nconst checkAuthMiddleware = (\r\n  req: Request,\r\n  res: Response,\r\n  next: NextFunction\r\n) => {\r\n  if (req.headers.authorization) {\r\n    next();\r\n  } else {\r\n    res.status(401).send("Unauthorized");\r\n  }\r\n};\r\n\r\nconst router = new Router();\r\nrouter.use("/secure", loggerMiddleware, checkAuthMiddleware);\n'})})}),"\n",(0,d.jsx)(r.p,{children:"Here, the logger middleware logs the request details before the authentication middleware validates the user."}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"route-specific-middleware",children:(0,d.jsx)(r.strong,{children:"Route-Specific Middleware"})}),"\n",(0,d.jsx)(r.p,{children:"Middleware can also be applied to specific routes instead of an entire router instance."}),"\n",(0,d.jsx)(r.h3,{id:"example",children:"Example:"}),"\n",(0,d.jsx)(n,{children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'router.get(\r\n  "/profile",\r\n  (req: Request, res: Response, next: NextFunction) => {\r\n    console.log("Middleware for /profile");\r\n    next();\r\n  },\r\n  (req: Request, res: Response) => {\r\n    res.send("User profile");\r\n  }\r\n);\n'})})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"global-middleware",children:(0,d.jsx)(r.strong,{children:"Global Middleware"})}),"\n",(0,d.jsx)(r.p,{children:"Global middleware applies to every request handled by the application."}),"\n",(0,d.jsx)(r.h3,{id:"example-1",children:"Example:"}),"\n",(0,d.jsx)(n,{children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Request, Response, NextFunction } from "alapa";\r\n\r\nconst globalLogger = (req: Request, res: Response, next: NextFunction) => {\r\n  console.log(`Request received at ${new Date()}`);\r\n  next();\r\n};\r\n\r\nuseGlobalMiddleware(globalLogger);\n'})})}),"\n",(0,d.jsx)(r.h2,{id:"error-handling-middleware",children:(0,d.jsx)(r.strong,{children:"Error-Handling Middleware"})}),"\n",(0,d.jsxs)(r.p,{children:["Middleware can also handle errors that occur during request processing. Error-handling middleware functions have an additional ",(0,d.jsx)(r.code,{children:"err"})," parameter as the first argument."]}),"\n",(0,d.jsx)(r.h3,{id:"example-2",children:"Example:"}),"\n",(0,d.jsx)(n,{children:(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:'import { Request, Response, NextFunction } from "alapa";\r\nconst errorHandler = (\r\n  err: any,\r\n  req: Request,\r\n  res: Response,\r\n  next: NextFunction\r\n) => {\r\n  console.error(err.stack);\r\n  res.status(500).send("Something went wrong!");\r\n};\r\n\r\nrouter.use(errorHandler);\n'})})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"summary",children:(0,d.jsx)(r.strong,{children:"Summary"})}),"\n",(0,d.jsx)(r.p,{children:"Middleware is a critical part of the Alapa framework, allowing you to implement reusable logic for tasks like authentication, logging, and error handling. Whether applied globally, to specific routes, or as part of a middleware chain, it provides a structured way to manage request processing in your application."})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var i=n(6540);const d={},s=i.createContext(d);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);