"use strict";(self.webpackChunkalapa_doc=self.webpackChunkalapa_doc||[]).push([[6061],{665:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var s=t(4164),a=t(7289),i=t(204),l=t(2362),r=t(4848);function c(e){let{className:n}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,s.A)(n,i.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function d(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(c,{...e})]})}},2075:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(4164),a=t(7289),i=t(204),l=t(2362),r=t(4848);function c(e){let{className:n}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Yh,{}),className:(0,s.A)(n,i.G.common.draftBanner),children:(0,r.jsx)(a.TT,{})})}var d=t(665);function o(e){let{metadata:n}=e;const{unlisted:t,frontMatter:s}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||s.unlisted)&&(0,r.jsx)(d.A,{}),s.draft&&(0,r.jsx)(c,{})]})}},9181:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(6540);var s=t(4164),a=t(1082),i=t(204),l=t(1410),r=t(7985),c=t(7959),d=t(2075),o=t(5783);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function h(e){const{content:n}=e,{metadata:t,assets:h}=n,{title:v,editUrl:x,description:p,frontMatter:f,lastUpdatedBy:g,lastUpdatedAt:j}=t,{keywords:N,wrapperClassName:b,hide_table_of_contents:A}=f,L=h.image??f.image,w=!!(x||j||g);return(0,u.jsx)(a.e3,{className:(0,s.A)(b??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(a.be,{title:v,description:p,keywords:N,image:L}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,s.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,s.A)("col",!A&&"col--8"),children:[(0,u.jsx)(d.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),w&&(0,u.jsx)(o.A,{className:(0,s.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:j,lastUpdatedBy:g})]}),!A&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},1021:(e,n,t)=>{t.d(n,{A:()=>x});var s=t(6540),a=t(3115);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>r(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function d(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function o(e){const n=(0,s.useRef)(void 0),t=d();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),d=c(r,{anchorTopOffset:t.current}),o=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===o)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(6289),u=t(4848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:m,...h}=e;const x=(0,a.p)(),p=d??x.tableOfContents.minHeadingLevel,f=m??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:p,maxHeadingLevel:f});return o((0,s.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:f}}),[r,c,p,f])),(0,u.jsx)(v,{toc:g,className:t,linkClassName:r,...h})}},7959:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var s=t(4164),a=t(1021);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.A,{...t,linkClassName:r,linkActiveClassName:c})})}},7289:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>l,TT:()=>o,Uh:()=>r,Yh:()=>d});t(6540);var s=t(539),a=t(7143),i=t(4848);function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},5801:(e,n,t)=>{t.d(n,{A:()=>d});var s=t(9712),a=t(6540),i=t(2503),l=t(4848);const r=e=>{let{children:n,title:t}=e;const[s,r]=(0,a.useState)("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.m_,{id:"my-tooltip-2",place:"bottom",content:"Click to copy"}),(0,l.jsxs)("div",{className:"preview-screen",children:[(0,l.jsxs)("div",{className:"preview-screen-header",children:[(0,l.jsxs)("div",{className:"header-left",children:[(0,l.jsx)("div",{className:"apple-btn apple-close"}),(0,l.jsx)("div",{className:"apple-btn apple-minimize"}),(0,l.jsx)("div",{className:"apple-btn apple-maximize"})]}),(0,l.jsxs)("div",{"data-tooltip-id":"my-tooltip-2",className:"header-title",onClick:()=>{t&&navigator.clipboard.writeText(t).then((()=>{r("Copied!"),setTimeout((()=>r("")),1500)}))},children:[t||"untitled",s&&(0,l.jsx)("span",{className:"copy-feedback",children:s})]}),(0,l.jsx)("div",{className:"header-right",children:(0,l.jsxs)("div",{className:"hamburger-menu",children:[(0,l.jsx)("div",{className:"hamburger"}),(0,l.jsx)("div",{className:"hamburger"}),(0,l.jsx)("div",{className:"hamburger"})]})})]}),(0,l.jsx)("div",{className:"preview-container",children:(0,l.jsx)("div",{className:"preview-content",children:n})})]})]})},c=e=>{let{children:n,title:t,src:s}=e;t=t||"",t?.startsWith("/")&&(t=t.substring(1));let a=`http://localhost:3000/${t}`;return(0,l.jsxs)(l.Fragment,{children:[s?(0,l.jsxs)("div",{children:["When you view the source code of"," ",(0,l.jsx)("a",{target:"_blank",href:a,children:a})," ","on your browser, you should see the result as shown below."]}):(0,l.jsxs)("div",{children:["When you open the link the"," ",(0,l.jsx)("a",{target:"_blank",href:a,children:a})," ","on your browser, you should see the result as shown below."]}),(0,l.jsxs)("div",{className:"preview-screen",children:[(0,l.jsxs)("div",{className:"preview-screen-header",children:[(0,l.jsxs)("div",{className:"header-left",children:[(0,l.jsx)("div",{className:"apple-btn apple-close"}),(0,l.jsx)("div",{className:"apple-btn apple-minimize"}),(0,l.jsx)("div",{className:"apple-btn apple-maximize"})]}),(0,l.jsx)("div",{className:"header-title",children:s?"view-source:"+a:a}),(0,l.jsx)("div",{className:"header-right",children:(0,l.jsxs)("div",{className:"hamburger-menu",children:[(0,l.jsx)("div",{className:"hamburger"}),(0,l.jsx)("div",{className:"hamburger"}),(0,l.jsx)("div",{className:"hamburger"})]})})]}),(0,l.jsx)("div",{className:"preview-container",children:(0,l.jsx)("div",{className:"preview-content",children:n})})]})]})},d={...s.A,CodeScreen:r,BrowserWindow:c}}}]);