(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{4543:function(e,s,t){Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.bind(t,677))},677:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var a=t(7437),r=t(2265),l=t(2439),n=t(1396),o=t.n(n);function i(){let[e,s]=(0,r.useState)(!1),[t,n]=(0,r.useState)({}),[i,c]=(0,r.useState)([]),d=()=>{s(!0)},u=()=>{s(!1),c([])},m=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"judul";c(s.filter(s=>{var a;let r=t?s[t]:s,l="string"==typeof r&&(null==r?void 0:null===(a=r.split(" "))||void 0===a?void 0:a.map(e=>e&&e.toLowerCase().trim()).filter(e=>e));return("string"==typeof e&&(null==e?void 0:e.split(" ").map(e=>e&&e.toLowerCase().trim()).filter(e=>e))).filter(e=>l.includes(e)).length}))},x=()=>{fetch("/json/posts.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){n(e),console.log(t)})};return(0,r.useEffect)(()=>{x()},[]),(0,a.jsxs)("div",{className:"w-3/6 flex flex-row",children:[(0,a.jsxs)("button",{className:"flex flex-row w-full justify-center items-center rounded border hover:opacity-80 text-2xl",onClick:()=>d(),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Cari"]}),(0,a.jsxs)(l.Z,{show:e,onClose:u,children:[(0,a.jsxs)("div",{className:"text-white text-xl m-3 p-2 bg-secondary rounded flex",children:[(0,a.jsx)("h1",{className:"grow",children:"Cari"}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("button",{className:"bg-tertiary hover:opacity-70 px-2 rounded",onClick:u,children:"X"})})]}),(0,a.jsxs)("div",{className:"m-5",children:[(0,a.jsx)("input",{type:"text",name:"cari",id:"cari",placeholder:"Kamu cari apa?",className:"w-full p-2 rounded",autoFocus:!0,onChange:e=>m(e.target.value,t)}),(0,a.jsxs)("span",{className:"text-primary text-xs",children:["Source Code for this Search from: ",(0,a.jsx)("a",{href:"https://stackoverflow.com/a/65136399/22542174",className:"text-blue-500 hover:opacity-70",target:"_blank",children:"Kashan Haider"})]}),(0,a.jsxs)("div",{className:"w-full pt-4 text-primary",children:[(0,a.jsx)("hr",{className:"border-secondary"}),(0,a.jsx)("div",{className:"mt-4 flex flex-col",children:Array.isArray(i)&&i.map((e,s)=>(0,a.jsx)(o(),{href:"/posts/post/"+e.id,className:"p-1 my-1 border border-secondary underline hover:border-primary",children:e.judul},s))})]})]})]})]})}},2439:function(e,s,t){"use strict";t.d(s,{Z:function(){return o}});var a=t(7437),r=t(2265),l=t(9220),n=t(9805);function o(e){let{children:s,show:t=!1,maxWidth:o="2xl",closeable:i=!0,onClose:c=()=>{}}=e;return(0,a.jsx)(n.u,{show:t,as:r.Fragment,leave:"duration-200",children:(0,a.jsxs)(l.V,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto justify-center items-center z-50 transform transition-all font-firaCode",onClose:()=>{i&&c()},children:[(0,a.jsx)(n.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"absolute inset-0 bg-gray-500/75"})}),(0,a.jsx)(n.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsx)(l.V.Panel,{className:"bg-background rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ".concat({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[o]),children:s})})]})})}}},function(e){e.O(0,[685,459,971,596,744],function(){return e(e.s=4543)}),_N_E=e.O()}]);