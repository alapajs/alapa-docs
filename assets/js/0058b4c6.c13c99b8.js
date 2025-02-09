"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[849],{6164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/","docId":"intro","unlisted":false},{"type":"category","label":"Get Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Alapa Installation","href":"/docs/get-started/installation","docId":"get-started/installation","unlisted":false},{"type":"link","label":"Directory Structure","href":"/docs/get-started/directory-structure","docId":"get-started/directory-structure","unlisted":false}]},{"type":"category","label":"Routing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Routing","href":"/docs/routing/basic","docId":"routing/basic","unlisted":false},{"type":"link","label":"Class Methods Handler","href":"/docs/routing/class-base","docId":"routing/class-base","unlisted":false},{"type":"link","label":"Named Routes","href":"/docs/routing/name","docId":"routing/name","unlisted":false},{"type":"link","label":"Middleware","href":"/docs/routing/middleware","docId":"routing/middleware","unlisted":false},{"type":"link","label":"Controller","href":"/docs/routing/controller","docId":"routing/controller","unlisted":false},{"type":"link","label":"Resource","href":"/docs/routing/resourceful","docId":"routing/resourceful","unlisted":false}]},{"type":"category","label":"Template Engine","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/docs/template/getting-started","docId":"template/getting-started","unlisted":false},{"type":"link","label":"Template Rendering","href":"/docs/template/render","docId":"template/render","unlisted":false},{"type":"link","label":"Include and Require","href":"/docs/template/include-required","docId":"template/include-required","unlisted":false},{"type":"category","label":"Components","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/template/component/indroduction","docId":"template/component/indroduction","unlisted":false},{"type":"link","label":"Properties","href":"/docs/template/component/props","docId":"template/component/props","unlisted":false},{"type":"link","label":"Importing Components","href":"/docs/template/component/import","docId":"template/component/import","unlisted":false}]}]},{"type":"category","label":"Model","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Models","href":"/docs/model/getting-started","docId":"model/getting-started","unlisted":false},{"type":"category","label":"Relations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/docs/model/relation/getting-started","docId":"model/relation/getting-started","unlisted":false},{"type":"link","label":"Model Relationship","href":"/docs/model/relation/inde-old","docId":"model/relation/inde-old","unlisted":false},{"type":"link","label":"RelationQueryBuilder","href":"/docs/model/relation/relation-query-builder","docId":"model/relation/relation-query-builder","unlisted":false}]}]},{"type":"category","label":"Security","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Authentication","href":"/docs/security/login","docId":"security/login","unlisted":false}]},{"type":"link","label":"Undocumented","href":"/docs/undocumented/","docId":"undocumented/index","unlisted":false}]},"docs":{"get-started/directory-structure":{"id":"get-started/directory-structure","title":"Directory Structure","description":"When you generate a new Alapa project using the command npx create-alapa-app [ProjectName], you\u2019ll get a well-organized and modular directory structure designed to make development intuitive, scalable, and maintainable. Below is a detailed breakdown of the key directories and files in an Alapa starter project:","sidebar":"tutorialSidebar"},"get-started/installation":{"id":"get-started/installation","title":"Alapa Installation","description":"Getting Started","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Alapa is a next-generation web development framework designed to transform the way developers build modern web applications. Combining simplicity, flexibility, and high performance, Alapa offers a suite of powerful features, including React-like components, intuitive routing, and a modular architecture, enabling developers to create scalable and maintainable applications with ease.","sidebar":"tutorialSidebar"},"model/getting-started":{"id":"model/getting-started","title":"Models","description":"What is a Model?","sidebar":"tutorialSidebar"},"model/relation/getting-started":{"id":"model/relation/getting-started","title":"Getting Started","description":"What are relations?","sidebar":"tutorialSidebar"},"model/relation/inde-old":{"id":"model/relation/inde-old","title":"Model Relationship","description":"Defining a Model with Relation","sidebar":"tutorialSidebar"},"model/relation/relation-query-builder":{"id":"model/relation/relation-query-builder","title":"RelationQueryBuilder","description":"RelationQueryBuilder is a specialized QueryBuilder that enables efficient handling of relationships in your database. With it, you can manage relations without loading entire entities, or easily fetch related data.","sidebar":"tutorialSidebar"},"routing/basic":{"id":"routing/basic","title":"Basic Routing","description":"Alapa provides a straightforward and flexible routing system for handling HTTP requests. Its routing design is similar to Express, allowing developers to define routes for various HTTP methods easily.","sidebar":"tutorialSidebar"},"routing/class-base":{"id":"routing/class-base","title":"Class Methods Handler","description":"Alapa provides a flexible and intuitive way to define route handlers using both instance methods and static methods within controller classes. By leveraging the [Class, \'methodName\'] syntax, you can seamlessly map routes to methods without needing to instantiate the controller class explicitly. This approach ensures consistency and simplifies routing configuration.","sidebar":"tutorialSidebar"},"routing/controller":{"id":"routing/controller","title":"Controller","description":"Alapa provides a streamlined approach to implement controller-based routing, enabling","sidebar":"tutorialSidebar"},"routing/middleware":{"id":"routing/middleware","title":"Middleware","description":"Middleware in Alapa provides a powerful mechanism for inspecting and filtering HTTP requests as they enter your application. Middleware is often used to handle common tasks such as authentication, logging, and modifying request or response objects before they reach the route handler.","sidebar":"tutorialSidebar"},"routing/name":{"id":"routing/name","title":"Named Routes","description":"Named routes allow you to reference routes by their assigned names instead of hardcoding URLs. This improves maintainability and readability in your application.","sidebar":"tutorialSidebar"},"routing/resourceful":{"id":"routing/resourceful","title":"Resource","description":"Resource-based routing in Alapa provides a streamlined way to define CRUD (Create, Read, Update, Delete) operations for a resource. This approach automatically maps common actions to specific routes, reducing boilerplate code and ensuring consistency across your application.","sidebar":"tutorialSidebar"},"security/login":{"id":"security/login","title":"Authentication","description":"Alapa comes with a built-in authentication mechanism for web and API endpoints.","sidebar":"tutorialSidebar"},"template/component/import":{"id":"template/component/import","title":"Importing Components","description":"Alapa provides a flexible import system that supports multiple styles to include and use components within your templates. This allows you to structure your project efficiently and reuse components seamlessly.","sidebar":"tutorialSidebar"},"template/component/indroduction":{"id":"template/component/indroduction","title":"Introduction","description":"Alapa Components offer a robust, React-like templating experience for your applications. They are reusable, customizable, and designed to seamlessly integrate into your templates.","sidebar":"tutorialSidebar"},"template/component/props":{"id":"template/component/props","title":"Properties","description":"Component properties are key-value pairs accessible within the local scope of a component template. They enable customization and dynamic rendering of components. The default properties object is named props, but this can be changed as needed.","sidebar":"tutorialSidebar"},"template/getting-started":{"id":"template/getting-started","title":"Getting Started","description":"The Alapa Template Engine enables developers to build dynamic HTML files using its unique and intuitive syntax. It supports embedding JavaScript expressions, rendering variables, and working with raw HTML, making it an efficient choice for template-based development. The default file extension for Alapa templates is .html.","sidebar":"tutorialSidebar"},"template/include-required":{"id":"template/include-required","title":"Include and Require","description":"The include and require statements in Alapa enable you to modularize your templates by including external templates into your primary template at runtime. This approach helps maintain cleaner, more manageable code, especially in larger projects.","sidebar":"tutorialSidebar"},"template/render":{"id":"template/render","title":"Template Rendering","description":"Template rendering in Alapa enables developers to dynamically generate HTML responses using pre-defined templates. These templates allow embedding logic and variables, which are replaced at runtime to produce the final HTML output.","sidebar":"tutorialSidebar"},"undocumented/index":{"id":"undocumented/index","title":"**Undocumented Features of Alapa**","description":"While the following features are currently available in Alapa, they have not yet been fully documented. We encourage users to explore them, and we\'ll be updating the documentation with more details soon.","sidebar":"tutorialSidebar"}}}}')}}]);