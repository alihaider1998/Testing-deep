(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8746)}])},1245:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(5893),s=a(1664),n=a.n(s);a(7294);var i=a(1163);function c(e){var t,a=(0,i.useRouter)();return"/"==a.pathname?t="".concat(e.category):"/[subcategory]"==a.pathname?t="subsubcategory/".concat(e.subcategory):"/subsubcategory/[subsubcategory]"==a.pathname?t="3rdSubcategory/".concat(e.subsubcategory):"/subsubcategory/3rdSubcategory/[subsubsubcategory]"==a.pathname&&(t="details/".concat(e.slug)),(0,r.jsx)("div",{className:"m-6 flex text-center flex-col",children:(0,r.jsx)(n(),{href:t,children:(0,r.jsxs)("div",{className:"flex cursor-pointer flex-col ",children:["/"==a.pathname&&(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)("div",{className:"relative overflow-hidden",children:(0,r.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.category})})]}),"/[subcategory]"==a.pathname&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"relative overflow-hidden",children:(0,r.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,r.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.subcategory})]}),"/subsubcategory/[subsubcategory]"==a.pathname&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"relative overflow-hidden",children:(0,r.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,r.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.subsubcategory})]}),"/subsubcategory/3rdSubcategory/[subsubsubcategory]"==a.pathname&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"relative overflow-hidden",children:(0,r.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-5/6 ml-6 object-fill aspect-square rounded-full w-5/6"})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("h1",{className:"mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight",children:e.title})}),(0,r.jsxs)("div",{className:"pt-1 mb-2 text-center line-clamp-2",children:["Category: ",e.category]}),(0,r.jsx)("div",{className:"pt-1 mb-2 -mt-3 text-center text-slate-600 ",children:e.desc})]})]})})},e.title)}},3783:function(e,t,a){"use strict";a.d(t,{c:function(){return r}});var r=(0,a(7294).createContext)(null)},2906:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var r=a(5893),s=a(3783),n=a(7294);function i(){var e=(0,n.useRef)(null);(0,n.useEffect)(function(){window.matchMedia("(min-width: 1024px)").matches&&e.current&&e.current.focus()},[]);var t=(0,n.useContext)(s.c),a=t.value,i=t.setValue;return(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"relative mx-auto flex sm:w-30 px-2 md:w-96 lg:50 items-center",children:[(0,r.jsx)("div",{className:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none",children:(0,r.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5 ml-2",fill:"none",stroke:"gray",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,r.jsx)("input",{className:"p-4 -ml-1 pl-10 w-full h-12 text-gray-900 rounded-3xl border-2 border-gray-600 dark:placeholder-gray-400 border focus-visible:outline-none focus-visible:border-[#07849f] grow",placeholder:"Search ...",onChange:function(e){return i(e.target.value)},value:a,ref:e})]})})}},8746:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return b},default:function(){return p}});var r=a(5893),s=a(7294),n=a(1245),i=a(3783);function c(e){var t=e.filesData,a=e.images,c=new Set,l=t.filter(function(e){return!0==e.frontmatter.show}).filter(function(e){var t=c.has(e.frontmatter.category);return c.add(e.frontmatter.category),!t}),o=(0,s.useContext)(i.c),u=o.value;o.setValue;for(var d=[],m=0;m<l.length;m++)d.push({category:l[m].frontmatter.category,thumbnail:a[l[m].frontmatter.category]});return(0,r.jsx)("div",{className:"grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4",children:d.filter(function(e){var t,a,r,s;return r=e.category,s=u,r.toLowerCase().includes(s)}).map(function(e){return(0,r.jsx)(n.Z,{category:e.category,thumbnail:e.thumbnail},e.category)})})}var l=a(2906),o=a(9473),u=a(8937),d=a(7907),m=a(719),h=a(1911);a(933),a(92),a(8770),a(3390),a(5519),a(1664);var g=a(1163);function f(e){var t=(0,g.useRouter)();return(0,r.jsx)("div",{style:{},className:"mb-10 px-4 -mt-10 shadow-xl",children:(0,r.jsxs)("div",{className:"m-6 text-center flex ",children:[(0,r.jsxs)("div",{className:"m-auto",children:[(0,r.jsx)("h2",{children:"Here it will be some description about the models and everything else."}),(0,r.jsx)("button",{onClick:function(){return t.push("".concat(e.category))},className:"mt-14 text-2xl p-3 -mb-14 text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:e.category})]}),(0,r.jsx)("div",{className:"flex cursor-pointer flex-col ",children:(0,r.jsx)("div",{className:"relative p-4 overflow-hidden",children:(0,r.jsx)("img",{alt:e.title,src:"".concat(e.thumbnail),className:"min-h-2/3 ml-6 object-fill cursor-default aspect-square rounded-full w-2/3"})})})]},e.title)})}var x=[{category:"Cardiovascular",thumbnail:"/deepsynthbody/imagesOfCategories/Cardiovascular.jpeg"},{category:"Endocrine",thumbnail:"/deepsynthbody/imagesOfCategories/Endocrine.jpeg"},{category:"Integumentary",thumbnail:"/deepsynthbody/imagesOfCategories/Integumentary.jpeg"},{category:"Lymphatic",thumbnail:"/deepsynthbody/imagesOfCategories/Lymphatic.jpeg"},{category:"Muscular",thumbnail:"/deepsynthbody/imagesOfCategories/Muscular.jpeg"},{category:"Nervous",thumbnail:"/deepsynthbody/imagesOfCategories/Nervous.jpeg"},{category:"Urinary",thumbnail:"/deepsynthbody/imagesOfCategories/Urinary.jpeg"}],y=function(){return(0,r.jsx)(m.tq,{modules:[h.W_,h.tl,h.pt],slidesPerView:1,navigation:!0,autoplay:{delay:2e3},pagination:{clickable:!0},style:{width:"97%"},children:x.map(function(e){return(0,r.jsx)(m.o5,{children:(0,r.jsx)(f,{category:e.category,thumbnail:e.thumbnail,class:"swiper-slide"},e.category)},e.category)})})};a(4852);var b=!0;function p(e){var t=e.filesData,a=e.images,n=e.homeMD,m=(0,o.I0)();(0,s.useEffect)(function(){m((0,u.im)()),m((0,d.dC)(n.Footer))});var h=(0,s.useState)(""),f=h[0],x=h[1];return(0,r.jsxs)(i.c.Provider,{value:{value:f,setValue:x},children:["/"==(0,g.useRouter)().pathname&&(0,r.jsx)(y,{}),(0,r.jsxs)("div",{className:"mb-12 mt-7 text-center",children:[(0,r.jsx)("div",{className:"-mb-2",children:(0,r.jsx)("h2",{className:"text-2xl font-medium text-greyish",children:n.SearchHeading})}),(0,r.jsx)(l.Z,{})]}),(0,r.jsx)(c,{filesData:t,images:a})]})}}},function(e){e.O(0,[641,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);