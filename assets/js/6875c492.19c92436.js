"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[4813],{7448:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var a=s(539),n=s(1865),i=s(4848);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(n.A,{permalink:s,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(n.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,s)=>{s.d(t,{A:()=>B});s(6540);var a=s(4164),n=s(3750),i=s(4848);function r(e){let{children:t,className:s}=e;return(0,i.jsx)("article",{className:s,children:t})}var l=s(6289);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:s,isBlogPostPage:r}=(0,n.e7)(),{permalink:c,title:d}=s,h=r?"h1":"h2";return(0,i.jsx)(h,{className:(0,a.A)(o.title,t),children:r?d:(0,i.jsx)(l.A,{to:c,children:d})})}var d=s(539),h=s(1430),m=s(8569);const u={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,h.W)();return t=>{const s=Math.ceil(t);return e(s,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,i.jsx)(i.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,i.jsx)("time",{dateTime:t,children:s})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,n.e7)(),{date:r,readingTime:l}=s,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.A)(u.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(g,{readingTime:l})]})]});var c}var b=s(5921);const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e;const{metadata:{authors:s},assets:r}=(0,n.e7)();if(0===s.length)return null;const l=s.every((e=>{let{name:t}=e;return!t})),o=1===s.length;return(0,i.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.A)(!l&&(o?"col col--12":"col col--6"),l?v.imageOnlyAuthorCol:v.authorCol),children:(0,i.jsx)(b.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(j,{}),(0,i.jsx)(f,{})]})}var N=s(99),w=s(7985);function T(e){let{children:t,className:s}=e;const{isBlogPostPage:r}=(0,n.e7)();return(0,i.jsx)("div",{id:r?N.LU:void 0,className:(0,a.A)("markdown",s),children:(0,i.jsx)(w.A,{children:t})})}var y=s(204),_=s(5783),k=s(6239);function P(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...s}=e;return(0,i.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,i.jsx)(P,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:s,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,h=!t&&o,m=s.length>0;if(!(m||h||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,a.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(k.A,{tags:s})})}),e&&(0,i.jsx)(_.A,{className:(0,a.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,a.A)("col",{"col--9":h}),children:(0,i.jsx)(k.A,{tags:s})}),h&&(0,i.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]})}function B(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,a.A)(l,s),children:[(0,i.jsx)(A,{}),(0,i.jsx)(T,{children:t}),(0,i.jsx)(U,{})]})}},4005:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var a=s(3750),n=s(8189),i=s(4848);function r(e){let{items:t,component:s=n.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6956:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});s(6540);var a=s(4164),n=s(539),i=s(1082),r=s(204),l=s(1926),o=s(6289),c=s(569),d=s(7448),h=s(7220),m=s(4005),u=s(665),g=s(9303),p=s(4848);function x(e){let{tag:t}=e;const s=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:s,description:t.description}),(0,p.jsx)(h.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:s,sidebar:a,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(u.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(g.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(n.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(m.A,{items:s}),(0,p.jsx)(d.A,{metadata:i})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},665:(e,t,s)=>{s.d(t,{A:()=>c});s(6540);var a=s(4164),n=s(7289),i=s(204),r=s(2362),l=s(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(n.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(n.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.AE,{}),(0,l.jsx)(o,{...e})]})}},1865:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var a=s(4164),n=s(6289),i=s(4848);function r(e){const{permalink:t,title:s,subLabel:r,isNext:l}=e;return(0,i.jsxs)(n.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:s})]})}},3953:(e,t,s)=>{s.d(t,{A:()=>l});s(6540);var a=s(4164),n=s(6289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=s(4848);function l(e){let{permalink:t,label:s,count:l,description:o}=e;return(0,r.jsxs)(n.A,{href:t,title:o,className:(0,a.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[s,l&&(0,r.jsx)("span",{children:l})]})}},6239:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(4164),n=s(539),i=s(3953);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=s(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},1926:(e,t,s)=>{s.d(t,{Y4:()=>h,ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>o});s(6540);var a=s(539),n=s(1430),i=s(4848);function r(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=r();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=r();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,i.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function h(){return(0,i.jsx)(a.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},7289:(e,t,s)=>{s.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});s(6540);var a=s(539),n=s(7143),i=s(4848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(n.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},5801:(e,t,s)=>{s.d(t,{A:()=>l});var a=s(9712),n=(s(6540),s(4848));const i=e=>{let{children:t,title:s}=e;return(0,n.jsxs)("div",{className:"code-screen",children:[(0,n.jsxs)("div",{className:"code-screen-header",children:[(0,n.jsxs)("div",{className:"header-left",children:[(0,n.jsx)("div",{className:"apple-btn apple-close"}),(0,n.jsx)("div",{className:"apple-btn apple-minimize"}),(0,n.jsx)("div",{className:"apple-btn apple-maximize"})]}),(0,n.jsx)("div",{className:"header-title",children:s}),(0,n.jsx)("div",{className:"header-right",children:(0,n.jsxs)("div",{className:"hamburger-menu",children:[(0,n.jsx)("div",{className:"hamburger"}),(0,n.jsx)("div",{className:"hamburger"}),(0,n.jsx)("div",{className:"hamburger"})]})})]}),(0,n.jsx)("div",{className:"code-editor-container",children:(0,n.jsx)("pre",{className:"code-editor",children:t})})]})},r=e=>{let{children:t,title:s,src:a}=e;s=s||"",s?.startsWith("/")&&(s=s.substring(1));let i=`http://localhost:3000/${s}`;return(0,n.jsxs)(n.Fragment,{children:[a?(0,n.jsxs)("div",{children:["When you view the source code of"," ",(0,n.jsx)("a",{target:"_blank",href:i,children:i})," ","on your browser, you should see the result as showed below."]}):(0,n.jsxs)("div",{children:["When you open the link the"," ",(0,n.jsx)("a",{target:"_blank",href:i,children:i})," ","on your browser, you should see the result as showed below."]}),(0,n.jsxs)("div",{className:"browser-window",children:[(0,n.jsxs)("div",{className:"browser-window-header",children:[(0,n.jsxs)("div",{className:"header-left",children:[(0,n.jsx)("div",{className:"apple-btn apple-close"}),(0,n.jsx)("div",{className:"apple-btn apple-minimize"}),(0,n.jsx)("div",{className:"apple-btn apple-maximize"})]}),(0,n.jsx)("div",{className:"header-title",children:a?"view-source:"+i:i}),(0,n.jsx)("div",{className:"header-right",children:(0,n.jsxs)("div",{className:"hamburger-menu",children:[(0,n.jsx)("div",{className:"hamburger"}),(0,n.jsx)("div",{className:"hamburger"}),(0,n.jsx)("div",{className:"hamburger"})]})})]}),(0,n.jsx)("div",{className:"browser-window-container",children:(0,n.jsx)("div",{className:"browser-screen",children:t})})]})]})},l={...a.A,CodeScreen:i,BrowserWindow:r}}}]);