(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6977)}])},1245:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),s=r(1664),a=r.n(s);r(7294);var l=r(1163);function i(e){var t=(0,l.useRouter)(),r="/"==t.pathname?"".concat(e.category):"details/".concat(e.slug);return(0,n.jsx)("div",{className:"m-6 flex text-center flex-col",children:(0,n.jsx)(a(),{href:r,children:(0,n.jsxs)("div",{className:"flex cursor-pointer flex-col ",children:[(0,n.jsx)("div",{className:"relative overflow-hidden",children:(0,n.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),"/"==t.pathname?(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.category})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.title})}),(0,n.jsxs)("div",{className:"pt-1 mb-2 text-center line-clamp-2",children:["Category: ",e.category]}),(0,n.jsx)("div",{className:"pt-1 mb-2 -mt-3 text-center text-slate-600 ",children:e.desc})]})]})})},e.title)}},3783:function(e,t,r){"use strict";r.d(t,{c:function(){return n}});var n=(0,r(7294).createContext)(null)},2906:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),s=r(3783),a=r(7294);function l(){var e=(0,a.useRef)(null);(0,a.useEffect)(function(){e.current&&e.current.focus()},[]);var t=(0,a.useContext)(s.c),r=t.value,l=t.setValue;return(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"relative mx-auto flex sm:w-30 px-2 md:w-96 lg:50 items-center",children:[(0,n.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,n.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5 ml-2",fill:"none",stroke:"gray",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,n.jsx)("input",{className:"p-4 -ml-1 pl-10 w-full h-12 text-gray-900 rounded-3xl border-2 border-gray-600 dark:placeholder-gray-400 border focus-visible:outline-none focus-visible:border-[#f15d22] grow",placeholder:"Search ...",onChange:function(e){return l(e.target.value)},value:r,ref:e})]})})}},6977:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o},default:function(){return u}});var n=r(5893),s=r(7294),a=r(1245),l=r(3783);function i(e){var t=e.filesData,r=new Set,i=t.filter(function(e){return!0==e.frontmatter.show}).filter(function(e){var t=r.has(e.frontmatter.category);return r.add(e.frontmatter.category),!t}),c=(0,s.useContext)(l.c),o=c.value;return c.setValue,(0,n.jsx)("div",{className:"grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4",children:i.filter(function(e){var t,r,n,s;return n=e.frontmatter.category,s=o,n.toLowerCase().includes(s)}).map(function(e){return(0,n.jsx)(a.Z,{title:e.frontmatter.title,category:e.frontmatter.category,thumbnail:e.frontmatter.thumbnail,desc:e.frontmatter.desc},e.frontmatter.title)})})}var c=r(2906),o=!0;function u(e){var t=e.filesData,r=(0,s.useState)(""),a=r[0],o=r[1];return(0,n.jsx)(l.c.Provider,{value:{value:a,setValue:o},children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"mb-14 text-center",children:[(0,n.jsx)("div",{className:"mt- -mb-2",children:(0,n.jsx)("h2",{className:"text-2xl font-medium text-greyish",children:"Choose Your Desired Model Category"})}),(0,n.jsx)(c.Z,{})]}),(0,n.jsx)(i,{filesData:t})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);