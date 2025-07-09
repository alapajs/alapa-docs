---
sidebar_position: 3
title: Middleware
---

# **Middleware**

Middleware in Alapa provides a powerful mechanism for inspecting and filtering HTTP requests
as they enter your application. Middleware is often used to handle common tasks such as authentication,
logging, and modifying request or response objects before they reach the route handler.

Alapa's middleware system is inspired by Express, offering simplicity and flexibility for
developers to implement custom and reusable logic.

---

## **Understanding Middleware**

Middleware acts as a pipeline through which requests pass before they reach the defined route handlers.
If a middleware detects an issue (e.g., the user is not authenticated), it can interrupt the request
cycle and respond directly. Otherwise, it invokes the `next()` function to pass control to the next middleware or route handler.

### Example: Basic Middleware

The following middleware handles requests to the `/dashboard` route:

<CodeScreen title="src/app/dashboard/middleware.ts">

```ts
import { Request, Response, NextFunction } from "alapa";

const dashboardMiddle = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware executed for /dashboard");
  next(); // Proceed to the next middleware or route handler
};

export default dashboardMiddle;
```

</CodeScreen>

### **Middleware Structure**

Basic middleware functions take three arguments:

- `req`: The request object.
- `res`: The response object.
- `next`: A function that passes control to the next middleware or route handler.

### **Applying middleware**

To apply middleware to a route handler you can use either `use` or `middleware` methods on the `Router's` instance as given bellow.

<CodeScreen title="src/app/dashboard/router.ts">

```ts
import { Router } from "alapa";
import dashboardMiddle from "./middleware";

const dashboardRoutes = new Router();

dashboardRoutes.use(dashboardMiddle);
// OR
dashboardRoutes.middleware(dashboardMiddle);
```

</CodeScreen>

---

## **Alias Middleware**

You can assign aliases to middleware for easier management and reuse.

### Adding Middleware Alias

<CodeScreen title="src/app/users/middleware.ts">

```ts
import { Request, Response, NextFunction } from "alapa";
export const myAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware Alias Example");
  next();
};

addAlias("myAuth", myAuthMiddleware);
```

</CodeScreen>

<CodeScreen title="src/config/alias.ts">

```ts
import { myAuthMiddleware } from "../app/users/middleware";
export const aliases = {
  myAuth: myAuthMiddleware,
};
```

</CodeScreen>

### Using Middleware Alias

You can use the alias any where in your application

<CodeScreen title="src/app/users/router.ts">

```ts
import { Router } from "alapa";
const router = new Router();
router.use("myAuth");
```

</CodeScreen>

This allows you to reuse `myAuthMiddleware` without explicitly referencing its implementation.
-->

---

## **Chaining Middleware**

You can chain multiple middleware functions for a single route or group of routes.

### Example: Multiple Middleware Functions

<CodeScreen >

```ts
import { Router, Request, Response, NextFunction } from "alapa";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const checkAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

const router = new Router();
router.use("/secure", loggerMiddleware, checkAuthMiddleware);
```

</CodeScreen>
Here, the logger middleware logs the request details before the authentication middleware validates the user.

---

## **Route-Specific Middleware**

Middleware can also be applied to specific routes instead of an entire router instance.

### Example:

<CodeScreen>

```ts
router.get(
  "/profile",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware for /profile");
    next();
  },
  (req: Request, res: Response) => {
    res.send("User profile");
  }
);
```

</CodeScreen>

---

## **Global Middleware**

Global middleware applies to every request handled by the application.

### Example:

<CodeScreen>

```ts
import { Request, Response, NextFunction } from "alapa";

const globalLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request received at ${new Date()}`);
  next();
};

useGlobalMiddleware(globalLogger);
```

</CodeScreen>

## **Error-Handling Middleware**

Middleware can also handle errors that occur during request processing.
Error-handling middleware functions have an additional `err` parameter as the first argument.

### Example:

<CodeScreen>

```ts
import { Request, Response, NextFunction } from "alapa";
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

router.use(errorHandler);
```

</CodeScreen>

---

## **Summary**

Middleware is a critical part of the Alapa framework, allowing you to implement
reusable logic for tasks like authentication, logging, and error handling. Whether
applied globally, to specific routes, or as part of a middleware chain, it provides a
structured way to manage request processing in your application.
