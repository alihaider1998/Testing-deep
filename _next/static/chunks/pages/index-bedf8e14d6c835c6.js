(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8080)}])},1245:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(5893),n=a(1664),r=a.n(n);a(7294);var c=a(1163);function i(e){var t,a=(0,c.useRouter)();return"/"==a.pathname?t="".concat(e.category):"/[subcategory]"==a.pathname?t="subsubcategory/".concat(e.subcategory):"/subsubcategory/[subsubcategory]"==a.pathname?t="3rdSubcategory/".concat(e.subsubcategory):"/subsubcategory/3rdSubcategory/[subsubsubcategory]"==a.pathname&&(t="details/".concat(e.slug)),(0,s.jsx)("div",{className:"m-6 flex text-center flex-col",children:(0,s.jsx)(r(),{href:t,children:(0,s.jsxs)("div",{className:"flex cursor-pointer flex-col ",children:["/"==a.pathname&&(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("div",{className:"relative overflow-hidden",children:(0,s.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.category})})]}),"/[subcategory]"==a.pathname&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"relative overflow-hidden",children:(0,s.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,s.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.subcategory})]}),"/subsubcategory/[subsubcategory]"==a.pathname&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"relative overflow-hidden",children:(0,s.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,s.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.subsubcategory})]}),"/subsubcategory/3rdSubcategory/[subsubsubcategory]"==a.pathname&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"relative overflow-hidden",children:(0,s.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.title})}),(0,s.jsxs)("div",{className:"pt-1 mb-2 text-center line-clamp-2",children:["Category: ",e.category]}),(0,s.jsx)("div",{className:"pt-1 mb-2 -mt-3 text-center text-slate-600 ",children:e.desc})]})]})})},e.title)}},3783:function(e,t,a){"use strict";a.d(t,{c:function(){return s}});var s=(0,a(7294).createContext)(null)},2906:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var s=a(5893),n=a(3783),r=a(7294);function c(){var e=(0,r.useRef)(null);(0,r.useEffect)(function(){window.matchMedia("(min-width: 1024px)").matches&&e.current&&e.current.focus()},[]);var t=(0,r.useContext)(n.c),a=t.value,c=t.setValue;return(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsxs)("div",{className:"relative mx-auto flex sm:w-30 px-2 md:w-96 lg:50 items-center",children:[(0,s.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,s.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5 ml-2",fill:"none",stroke:"gray",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,s.jsx)("input",{className:"p-4 -ml-1 pl-10 w-full h-12 text-gray-900 rounded-3xl border-2 border-gray-600 dark:placeholder-gray-400 border focus-visible:outline-none focus-visible:border-[#07849f] grow",placeholder:"Search ...",onChange:function(e){return c(e.target.value)},value:a,ref:e})]})})}},8080:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return v},default:function(){return j}});var s=a(5893),n=a(7294),r=a(1245),c=a(3783);function i(e){var t=e.filesData,a=e.images,i=new Set,l=t.filter(function(e){return!0==e.frontmatter.show}).filter(function(e){var t=i.has(e.frontmatter.category);return i.add(e.frontmatter.category),!t}),o=(0,n.useContext)(c.c),u=o.value;o.setValue;for(var d=[],m=0;m<l.length;m++)d.push({category:l[m].frontmatter.category,thumbnail:a[l[m].frontmatter.category]});return(0,s.jsx)("div",{className:"grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4",children:d.filter(function(e){var t,a,s,n;return s=e.category,n=u,s.toLowerCase().includes(n)}).map(function(e){return(0,s.jsx)(r.Z,{category:e.category,thumbnail:e.thumbnail},e.category)})})}var l=a(2906),o=a(9473),u=a(8937),d={src:"/deepsynthbody/_next/static/media/heroimage.07a19445.png",height:2366,width:2693,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA4UlEQVR42mMAgaT9V9lAtO6cnTLas3cogdhxey6xgiXzTt1jW/DnP2voljPsDH3rtRn61umGbz3LsfDvf9bs43dYGSa/+8vquvKwFMPEjUYeyw6aeC47aMk2aZOZ55qjkvN//2dmaLn/gcNswR7phEM3uFwW7jVzWbTPInzXRR6HZQdlOp98YWcoPveQY8LrX2A3KM3Y5mI6b7cniN3z/Dt7EVCOofzSU5aCMw94QIKCkzeZMU3caPj//3/GgtP3eSouP2NmAAGgSrbeFz/YZKdtNZefvtV07s//LDnH74AlAT/cXoKMLFqiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},m=a(1664),h=a.n(m),x=a(5675),g=a.n(x),f=function(){return(0,s.jsx)("div",{className:"container mx-auto px-20 mt-10",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{className:"ml-9 shadow-lg bg-[#f5f5f5] max-w-md max-h-52",children:[(0,s.jsx)("div",{className:"mt-9 flex justify-center ",children:(0,s.jsx)("header",{className:"text-[#07849F] text-xl font-bold inline-block px-7 py-3",children:"DeepSynthBody: the beginning of the end for data deficiency in medicine"})}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("button",{type:"button",className:"inline-block px-7 py-3 bg-[#15CEF9] text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",children:(0,s.jsx)(h(),{href:"/docs",children:"Documentation"})})})]}),(0,s.jsx)("div",{className:"ml-20",children:(0,s.jsx)(g(),{src:d,alt:"body image",width:400,height:350})})]})})},b=a(1163),v=!0;function j(e){var t=e.filesData,a=e.images,r=(0,o.I0)();(0,n.useEffect)(function(){r((0,u.im)())});var d=(0,n.useState)(""),m=d[0],h=d[1];return(0,s.jsx)(c.c.Provider,{value:{value:m,setValue:h},children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-14 text-center",children:[(0,s.jsx)("div",{className:"mt- -mb-2",children:(0,s.jsx)("h2",{className:"text-2xl font-medium text-greyish",children:"Choose Your Desired Model Category"})}),(0,s.jsx)(l.Z,{})]}),"/"==(0,b.useRouter)().pathname&&(0,s.jsx)("header",{className:"mb-8 py-2 justify-center",children:(0,s.jsx)(f,{})}),(0,s.jsx)(i,{filesData:t,images:a})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);