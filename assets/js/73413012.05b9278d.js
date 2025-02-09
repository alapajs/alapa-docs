"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[4204],{5566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"routing/class-base","title":"Class Methods Handler","description":"Alapa provides a flexible and intuitive way to define route handlers using both instance methods and static methods within controller classes. By leveraging the [Class, \'methodName\'] syntax, you can seamlessly map routes to methods without needing to instantiate the controller class explicitly. This approach ensures consistency and simplifies routing configuration.","source":"@site/docs/routing/class-base.mdx","sourceDirName":"routing","slug":"/routing/class-base","permalink":"/docs/routing/class-base","draft":false,"unlisted":false,"editUrl":"https://github.com/alapajs/alapa-docs/tree/main/docs/routing/class-base.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Class Methods Handler"},"sidebar":"tutorialSidebar","previous":{"title":"Basic Routing","permalink":"/docs/routing/basic"},"next":{"title":"Named Routes","permalink":"/docs/routing/name"}}');var a=n(4848),o=n(8453);const i={sidebar_position:2,title:"Class Methods Handler"},r="Class Methods as Request Handlers",l={},d=[{value:"Instance Methods as Request Handlers",id:"instance-methods-as-request-handlers",level:2},{value:"Example: Defining an Instance Method",id:"example-defining-an-instance-method",level:3},{value:"Example: Registering the Instance Method in the Router",id:"example-registering-the-instance-method-in-the-router",level:3},{value:"Static Methods as Request Handlers",id:"static-methods-as-request-handlers",level:2},{value:"Example: Defining a Static Method",id:"example-defining-a-static-method",level:3},{value:"Example: Registering the Static Method in the Router",id:"example-registering-the-static-method-in-the-router",level:3},{value:"Benefits of Using <code>[Class, &#39;methodName&#39;]</code> Syntax",id:"benefits-of-using-class-methodname-syntax",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{CodeScreen:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeScreen",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"class-methods-as-request-handlers",children:"Class Methods as Request Handlers"})}),"\n",(0,a.jsxs)(t.p,{children:["Alapa provides a flexible and intuitive way to define route handlers using both ",(0,a.jsx)(t.strong,{children:"instance methods"})," and ",(0,a.jsx)(t.strong,{children:"static methods"})," within controller classes. By leveraging the ",(0,a.jsx)(t.code,{children:"[Class, 'methodName']"})," syntax, you can seamlessly map routes to methods without needing to instantiate the controller class explicitly. This approach ensures consistency and simplifies routing configuration."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"instance-methods-as-request-handlers",children:"Instance Methods as Request Handlers"}),"\n",(0,a.jsx)(t.p,{children:"Instance methods are commonly used in object-oriented programming to encapsulate behavior tied to a specific instance of a class. In Alapa, you can use instance methods as route handlers without manually creating an instance of the controller class."}),"\n",(0,a.jsx)(t.h3,{id:"example-defining-an-instance-method",children:"Example: Defining an Instance Method"}),"\n",(0,a.jsx)(t.p,{children:"Below is an example of a controller with an instance method for handling a login request:"}),"\n",(0,a.jsx)(n,{title:"src/app/users/AuthController.ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { Request, Response } from "alapa";\r\n\r\nexport class UserAuthController {\r\n  // Instance method to handle login\r\n  login(req: Request, res: Response) {\r\n    res.send("Login Page");\r\n  }\r\n}\n'})})}),"\n",(0,a.jsx)(t.h3,{id:"example-registering-the-instance-method-in-the-router",children:"Example: Registering the Instance Method in the Router"}),"\n",(0,a.jsxs)(t.p,{children:["To map the instance method to a route, use the ",(0,a.jsx)(t.code,{children:"[Class, 'methodName']"})," syntax in your router configuration:"]}),"\n",(0,a.jsx)(n,{title:"src/app/users/router.ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserAuthController } from "../AuthController";\r\n\r\nconst userRoutes = new Router();\r\n\r\n// Map the instance method to the /login route\r\nuserRoutes.get("/login", [UserAuthController, "login"]);\r\n\r\nexport default userRoutes;\n'})})}),"\n",(0,a.jsxs)(t.p,{children:["When a ",(0,a.jsx)(t.code,{children:"GET"})," request is made to ",(0,a.jsx)(t.code,{children:"/login"}),", Alapa will automatically invoke the ",(0,a.jsx)(t.code,{children:"login"})," method on an instance of ",(0,a.jsx)(t.code,{children:"UserAuthController"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"static-methods-as-request-handlers",children:"Static Methods as Request Handlers"}),"\n",(0,a.jsx)(t.p,{children:"Static methods are class-level methods that do not require an instance of the class to be invoked. Alapa allows you to use static methods as route handlers in the same way as instance methods, maintaining a consistent syntax."}),"\n",(0,a.jsx)(t.h3,{id:"example-defining-a-static-method",children:"Example: Defining a Static Method"}),"\n",(0,a.jsx)(t.p,{children:"Here\u2019s an example of a controller with a static method for handling a login request:"}),"\n",(0,a.jsx)(n,{title:"src/app/users/AuthController.ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { Request, Response } from "alapa";\r\n\r\nexport class UserAuthController {\r\n  // Static method to handle login\r\n  static login(req: Request, res: Response) {\r\n    res.send("Login Page");\r\n  }\r\n}\n'})})}),"\n",(0,a.jsx)(t.h3,{id:"example-registering-the-static-method-in-the-router",children:"Example: Registering the Static Method in the Router"}),"\n",(0,a.jsxs)(t.p,{children:["To map the static method to a route, use the same ",(0,a.jsx)(t.code,{children:"[Class, 'methodName']"})," syntax:"]}),"\n",(0,a.jsx)(n,{title:"src/app/users/router.ts",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { Router } from "alapa";\r\nimport { UserAuthController } from "../AuthController";\r\n\r\nconst userRoutes = new Router();\r\n\r\n// Map the static method to the /login route\r\nuserRoutes.get("/login", [UserAuthController, "login"]);\r\n\r\nexport default userRoutes;\n'})})}),"\n",(0,a.jsx)(t.p,{children:"Alapa treats static methods identically to instance methods when mapping routes, ensuring a clean and consistent routing configuration."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h2,{id:"benefits-of-using-class-methodname-syntax",children:["Benefits of Using ",(0,a.jsx)(t.code,{children:"[Class, 'methodName']"})," Syntax"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"[Class, 'methodName']"})," syntax offers several advantages:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Consistency"}),": Whether you use instance methods or static methods, the routing syntax remains the same. This reduces cognitive overhead and makes your codebase easier to maintain."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Flexibility"}),": You can switch between instance and static methods without modifying the routing structure, providing greater flexibility in how you organize your code."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Simplicity"}),": The syntax is concise and intuitive, reducing boilerplate code and improving readability."]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["Alapa\u2019s routing system allows you to define route handlers using both instance methods and static methods within controller classes. By adopting the ",(0,a.jsx)(t.code,{children:"[Class, 'methodName']"})," syntax, you can maintain a consistent and streamlined approach to routing, regardless of whether the method is instance-based or static. This design promotes clean, maintainable, and scalable code."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);