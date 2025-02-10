"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[5762],{8363:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"routing/controller","title":"Controller-Based","description":"Alapa provides a streamlined approach to implement controller-based routing, enabling","source":"@site/docs/routing/controller.mdx","sourceDirName":"routing","slug":"/routing/controller","permalink":"/docs/routing/controller","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-docs/tree/main/docs/routing/controller.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Controller-Based"},"sidebar":"tutorialSidebar","previous":{"title":"Middleware","permalink":"/docs/routing/middleware"},"next":{"title":"Resource-Based","permalink":"/docs/routing/resourceful"}}');var t=s(4848),o=s(8453);const l={sidebar_position:4,title:"Controller-Based"},i="Controller-Based Routing",d={},a=[{value:"Creating Controller-Based Routing",id:"creating-controller-based-routing",level:2},{value:"Example:",id:"example",level:3},{value:"Registering the Controller with Routes",id:"registering-the-controller-with-routes",level:3},{value:"Supported HTTP Verbs",id:"supported-http-verbs",level:2},{value:"Controller Configuration Options",id:"controller-configuration-options",level:2},{value:"Example: Using <code>namePrefix</code>",id:"example-using-nameprefix",level:3},{value:"Example: Using <code>docPrefix</code>",id:"example-using-docprefix",level:3},{value:"Example: Applying Middleware",id:"example-applying-middleware",level:3},{value:"Global Middleware (<code>middlewareAll</code>)",id:"global-middleware-middlewareall",level:4},{value:"Route-Specific Middleware (<code>middleware</code>)",id:"route-specific-middleware-middleware",level:4},{value:"Defining Middleware Within the Controller",id:"defining-middleware-within-the-controller",level:2},{value:"Adding Path Parameters",id:"adding-path-parameters",level:2},{value:"Manipulating Route Paths",id:"manipulating-route-paths",level:3},{value:"Handling Method Name Conflicts",id:"handling-method-name-conflicts",level:2}];function c(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{CodeScreen:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeScreen",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"controller-based-routing",children:"Controller-Based Routing"})}),"\n",(0,t.jsx)(r.p,{children:"Alapa provides a streamlined approach to implement controller-based routing, enabling\r\ndevelopers to define routes in a structured and maintainable manner. This method leverages\r\nclass methods to automatically generate routes based on naming conventions, reducing\r\nboilerplate code and enhancing readability."}),"\n",(0,t.jsx)(r.h2,{id:"creating-controller-based-routing",children:"Creating Controller-Based Routing"}),"\n",(0,t.jsx)(r.p,{children:"Controller-based routing in Alapa is designed to be intuitive. By following camel-case naming\r\nconventions for methods within a controller class, the framework automatically interprets\r\nthe method names to generate corresponding routes. The first part of the method name specifies\r\nthe HTTP verb, while the remaining parts define the route path, segmented by uppercase letters."}),"\n",(0,t.jsx)(r.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(r.p,{children:"Below is an example of a controller class with method-based routing:"}),"\n",(0,t.jsx)(s,{title:"src/app/users/Controller.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Controller, Request, Response, Params } from "alapa";\r\n\r\nexport class UserController extends Controller {\r\n  // Handles GET /users\r\n  getIndex(req: Request, res: Response) {\r\n    res.send("Welcome to the user dashboard");\r\n  }\r\n\r\n  // Handles GET /users/user/:userId\r\n  @Params("userId")\r\n  getUser(req: Request, res: Response) {\r\n    res.send(`User ID: ${req.params.userId}`);\r\n  }\r\n}\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"registering-the-controller-with-routes",children:"Registering the Controller with Routes"}),"\n",(0,t.jsxs)(r.p,{children:["To integrate the controller with the application's routing system, use the ",(0,t.jsx)(r.code,{children:"controller"}),"\r\nmethod provided by the Router class. This method maps the controller methods to their respective routes."]}),"\n",(0,t.jsx)(s,{title:"src/app/users/router.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserController } from "./Controller";\r\n\r\nconst userRoute = new Router();\r\nuserRoute.controller("users", UserController);\r\n\r\nexport default userRoute;\n'})})}),"\n",(0,t.jsx)(r.p,{children:"The above setup generates the following routes:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"HTTP Method"}),(0,t.jsx)(r.th,{children:"Route Path"}),(0,t.jsx)(r.th,{children:"Route Name"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET"}),(0,t.jsx)(r.td,{children:"/users"}),(0,t.jsx)(r.td,{children:"users.get.index"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET"}),(0,t.jsxs)(r.td,{children:["/users/user/",":userId"]}),(0,t.jsx)(r.td,{children:"users.get.user"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"supported-http-verbs",children:"Supported HTTP Verbs"}),"\n",(0,t.jsx)(r.p,{children:"Alapa supports a variety of HTTP verbs, each corresponding to a specific HTTP method.\r\nBelow is a list of available verbs and their associated HTTP methods:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"get:"})," Generates a GET route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"post:"})," Generates a POST route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"put:"})," Generates a PUT route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"patch:"})," Generates a PATCH route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"delete:"})," Generates a DELETE route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"head:"})," Generates a HEAD route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"use:"})," Generates a middleware route."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"all:"})," Generates a route that matches all HTTP methods."]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.admonition,{title:"Best Practice",type:"tip",children:(0,t.jsxs)(r.p,{children:["When using verbs with the ",(0,t.jsx)(r.code,{children:"Index"})," suffix, the ",(0,t.jsx)(r.code,{children:"Index"})," part is omitted from the route path.\r\nFor example, ",(0,t.jsx)(r.code,{children:"getIndex"})," generates a route for ",(0,t.jsx)(r.code,{children:"/users"})," instead of ",(0,t.jsx)(r.code,{children:"/users/index"}),"."]})}),"\n",(0,t.jsx)(r.h2,{id:"controller-configuration-options",children:"Controller Configuration Options"}),"\n",(0,t.jsx)(r.p,{children:"Alapa provides several options to customize controller-based routing.\r\nThese options allow you to tailor the routing behavior to suit your application's needs."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Option Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Optional"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"namePrefix"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"undefined"}),(0,t.jsx)(r.td,{children:"Prefix added to the route names."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"docPrefix"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsxs)(r.td,{children:["Global ",(0,t.jsx)(r.code,{children:"docPrefix"})," from config"]}),(0,t.jsx)(r.td,{children:"Prefix added to the API documentation path."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"middlewareAll"})}),(0,t.jsx)(r.td,{children:"array"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"[]"}),(0,t.jsx)(r.td,{children:"Middleware applied to all routes in the controller."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"middleware"})}),(0,t.jsx)(r.td,{children:"object"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"{}"}),(0,t.jsx)(r.td,{children:"Middleware applied to specific routes, keyed by method name."})]})]})]}),"\n",(0,t.jsxs)(r.h3,{id:"example-using-nameprefix",children:["Example: Using ",(0,t.jsx)(r.code,{children:"namePrefix"})]}),"\n",(0,t.jsx)(s,{title:"src/app/users/router.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserController } from "./Controller";\r\n\r\nconst userRoute = new Router();\r\nuserRoute.controller("users", UserController, { namePrefix: "app-users" });\r\n\r\nexport default userRoute;\n'})})}),"\n",(0,t.jsx)(r.p,{children:"This configuration modifies the route names as follows:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"HTTP Method"}),(0,t.jsx)(r.th,{children:"Route Path"}),(0,t.jsx)(r.th,{children:"Route Name"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET"}),(0,t.jsx)(r.td,{children:"/users"}),(0,t.jsx)(r.td,{children:"app-users.get.index"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET"}),(0,t.jsxs)(r.td,{children:["/users/user/",":userId"]}),(0,t.jsx)(r.td,{children:"app-users.get.user"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"example-using-docprefix",children:["Example: Using ",(0,t.jsx)(r.code,{children:"docPrefix"})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"docPrefix"})," option is particularly useful for versioning your API documentation.\r\nIt prepends the specified prefix to the API paths in the generated Swagger documentation."]}),"\n",(0,t.jsx)(s,{title:"src/app/users/router.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserController } from "./Controller";\r\n\r\nconst userRoute = new Router();\r\nuserRoute.controller("users", UserController, { docPrefix: "api/v1" });\r\n\r\nexport default userRoute;\n'})})}),"\n",(0,t.jsx)(r.p,{children:"This results in the following API documentation paths:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"HTTP Method"}),(0,t.jsx)(r.th,{children:"Route Path"}),(0,t.jsx)(r.th,{children:"Documentation Path"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET"}),(0,t.jsx)(r.td,{children:"/users"}),(0,t.jsx)(r.td,{children:"api/v1/users"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET"}),(0,t.jsxs)(r.td,{children:["/users/user/",":userId"]}),(0,t.jsx)(r.td,{children:"api/v1/users/{userId}"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["Alternatively, you can define the ",(0,t.jsx)(r.code,{children:"docPrefix"})," directly within the controller class:"]}),"\n",(0,t.jsx)(s,{title:"src/app/users/Controller.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Controller, Request, Response, Params } from "alapa";\r\n\r\nexport class UserController extends Controller {\r\n  docPrefix: string = "api/v1/";\r\n}\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"example-applying-middleware",children:"Example: Applying Middleware"}),"\n",(0,t.jsx)(r.p,{children:"Middleware can be applied globally to all routes within a controller or selectively to specific routes."}),"\n",(0,t.jsxs)(r.h4,{id:"global-middleware-middlewareall",children:["Global Middleware (",(0,t.jsx)(r.code,{children:"middlewareAll"}),")"]}),"\n",(0,t.jsx)(s,{title:"src/app/users/router.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserController } from "./Controller";\r\nimport { userMiddleware } from "../middleware";\r\n\r\nconst userRoute = new Router();\r\nuserRoute.controller("users", UserController, {\r\n  middlewareAll: [userMiddleware],\r\n});\r\n\r\nexport default userRoute;\n'})})}),"\n",(0,t.jsxs)(r.h4,{id:"route-specific-middleware-middleware",children:["Route-Specific Middleware (",(0,t.jsx)(r.code,{children:"middleware"}),")"]}),"\n",(0,t.jsx)(s,{title:"src/app/users/router.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserController } from "./Controller";\r\nimport { indexMiddleware } from "../middleware";\r\n\r\nconst userRoute = new Router();\r\nuserRoute.controller("users", UserController, {\r\n  middleware: {\r\n    getIndex: indexMiddleware,\r\n  },\r\n});\r\n\r\nexport default userRoute;\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"defining-middleware-within-the-controller",children:"Defining Middleware Within the Controller"}),"\n",(0,t.jsx)(r.p,{children:"Middleware can also be defined directly within the controller class.\r\nThis approach centralizes route-specific logic, making it easier to manage."}),"\n",(0,t.jsx)(s,{title:"src/app/users/Controller.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Controller, Request, Response, NextFunction } from "alapa";\r\n\r\nexport class UserController extends Controller {\r\n  // Middleware for /users\r\n  useIndex(req: Request, res: Response, next: NextFunction) {\r\n    console.log("Middleware for /users");\r\n    next();\r\n  }\r\n\r\n  // Middleware for /users/user\r\n  useUser(req: Request, res: Response, next: NextFunction) {\r\n    console.log("Middleware for /users/user");\r\n    next();\r\n  }\r\n}\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"adding-path-parameters",children:"Adding Path Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["Path parameters can be added using the ",(0,t.jsx)(r.code,{children:"@Params"})," decorator.\r\nThis decorator allows you to define dynamic segments in your routes."]}),"\n",(0,t.jsx)(s,{title:"src/app/posts/Controller.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Controller, Request, Response, Params } from "alapa";\r\n\r\nexport class PostController extends Controller {\r\n  // Handles GET /posts/post/:postId/:userId\r\n  @Params("postId", "userId")\r\n  getPost(req: Request, res: Response) {\r\n    res.send(`Post ID: ${req.params.postId}, User ID: ${req.params.userId}`);\r\n  }\r\n}\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"manipulating-route-paths",children:"Manipulating Route Paths"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"@Params"})," decorator can also be used to customize route paths.\r\nBy using forward slashes (",(0,t.jsx)(r.code,{children:"/"}),"), you can structure the URL as needed."]}),"\n",(0,t.jsx)(s,{title:"src/app/posts/Controller.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Controller, Request, Response, Params } from "alapa";\r\n\r\nexport class PostController extends Controller {\r\n  // Handles GET /posts/post/:postId/user/:userId\r\n  @Params("postId/user", "userId")\r\n  getPost(req: Request, res: Response) {\r\n    res.send(`Post ID: ${req.params.postId}, User ID: ${req.params.userId}`);\r\n  }\r\n\r\n  // Handles GET /posts/:postId/user/:userId/all-posts\r\n  @Params("postId/user", "userId/all-posts")\r\n  getIndex(req: Request, res: Response) {\r\n    res.send("All posts for the user");\r\n  }\r\n}\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"handling-method-name-conflicts",children:"Handling Method Name Conflicts"}),"\n",(0,t.jsxs)(r.p,{children:["In scenarios where method names conflict (e.g., multiple middlewares with the same name handling\r\ndifferent operations but pointing to the same path), you can use underscores (",(0,t.jsx)(r.code,{children:"_"}),") in the method names.\r\nAlapa ignores underscores when generating routes"]}),"\n",(0,t.jsx)(s,{title:"src/app/posts/Controller.ts",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { Controller, Request, Response, Params } from "alapa";\r\n\r\nexport class PostController extends Controller {\r\n  // Handles GET /posts/:postId/active\r\n  @Params("postId/active")\r\n  get_Index(req: Request, res: Response) {\r\n    res.send("Active posts");\r\n  }\r\n\r\n  // Handles GET /posts/:postId/draft\r\n  @Params("postId/draft")\r\n  get_Index_(req: Request, res: Response) {\r\n    res.send("Draft posts");\r\n  }\r\n\r\n  // Handles GET /posts/:postId/trashed\r\n  @Params("postId/trashed")\r\n  get___Index___(req: Request, res: Response) {\r\n    res.send("Trashed posts");\r\n  }\r\n}\n'})})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"@Params"})," decorator is a powerful tool for customizing route paths.\r\nIt allows you to dynamically structure URLs, making your routing more flexible and expressive."]})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>i});var n=s(6540);const t={},o=n.createContext(t);function l(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);