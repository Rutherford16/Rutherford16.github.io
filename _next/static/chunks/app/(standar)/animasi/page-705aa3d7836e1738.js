(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{8393:function(t,e,a){Promise.resolve().then(a.bind(a,6162))},1942:function(t,e,a){"use strict";a.d(e,{Z:function(){return Blackadders}});var s=a(7437),l=a(2265),i=a(8674);function Blackadders(t){let{loading:e}=t,a=(0,l.useRef)(null),animasi=()=>{let t=document.querySelector(".letters");t.innerHTML=t.textContent.replace(/\S/g,"<tspan class='letter'>$&</tspan>"),a.current=i.Z.timeline({delay:250,easing:"easeInOutExpo"}).add({targets:".leftWing",points:"45,95 15,20 35,40",duration:4e3}).add({targets:".rightWing",points:"390,35 10,5 40,35",duration:3e3},"-=3700").add({targets:".text",translateX:30,duration:4e3},"-=4000").add({targets:".letter",scale:[.3,1],opacity:[0,1],translateY:0,duration:500,delay:(t,e)=>70*(e+1)},"-=2300").add({duration:200,complete:function(t){e&&e(!t.completed)}})};return(0,l.useEffect)(()=>{animasi()},[]),(0,s.jsx)("svg",{className:"text-white w-full h-full text-5xl font-hemiHead",viewBox:"0 0 400 100",children:(0,s.jsxs)("g",{fill:"currentColor",children:[(0,s.jsx)("polygon",{points:"10,95 50,5 50,35",className:"leftWing"}),(0,s.jsxs)("text",{x:"32",y:"90",className:"text",children:["B",(0,s.jsx)("tspan",{className:"letters",children:"lackadders"})]}),(0,s.jsx)("polygon",{points:"100,95 55,5 55,35",className:"rightWing"})]})})}},6162:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return Animasi}});var s=a(7437),l=a(2265),i=a(5293),r=a(1942),n=a(8674);function Marlboro(){let t=(0,l.useRef)(null),animasi=()=>{t.current=n.Z.timeline({easing:"easeInOutExpo",loop:!0,direction:"alternate",duration:2e3}).add({targets:"#textStyle",d:"M1,52 L32,34 L64,52"}).add({targets:"#segitiga",points:"0,54 32,36 64,54"},"-=2000").add({targets:"#kotakBawah",translateY:-42.1,direction:"reverse"},"-=2000").add({targets:"#isiKotakBawah",translateY:[120,0],opacity:[0,1]},"-=2000").add({targets:"#daun",opacity:[0,1]},"-=1500").add({targets:"#daunKiri",d:"M30.8,5 L30.8,6 C30.8,6 32.8,8 30.8,10 C30.8,10 28.8,8 30.8,6"},"-=1800").add({targets:"#daunKanan",d:"M33.2,5 L33.2,6 C33.2,6 35.2,8 33.2,10 C33.2,10 31.2,8 33.2,6"},"-=2000").add({targets:["#kananDaun","#kiriDaun"],opacity:[0,1]},"-=1500")};return(0,l.useEffect)(()=>{animasi()},[]),(0,s.jsx)("div",{id:"box",className:"flex justify-center w-fit p-5 bg-white",children:(0,s.jsxs)("svg",{viewBox:"0 0 64 96",className:"h-96 font-podiumSharp",children:[(0,s.jsx)("rect",{width:"64",height:"96",fill:"#193f5c"}),(0,s.jsxs)("g",{id:"kiriDaun",children:[(0,s.jsx)("line",{x1:"5",y1:"5.5",x2:"27",y2:"5.5",style:{stroke:"#fff",strokeWidth:".2"}}),(0,s.jsx)("text",{x:"6",y:"9.2",fill:"#fffffe",style:{fontSize:"3pt",letterSpacing:"1.6px"},children:"CRAFTED"}),(0,s.jsx)("line",{x1:"5",y1:"10",x2:"27",y2:"10",style:{stroke:"#fff",strokeWidth:".2"}})]}),(0,s.jsxs)("g",{id:"daun",children:[(0,s.jsx)("path",{id:"daunKiri",fill:"none",style:{stroke:"#fff",strokeWidth:".2"},d:"M32,5 L32,6 C32,6 34,8 32,10 C32,10 30,8 32,6"}),(0,s.jsx)("path",{id:"daunTengah",fill:"none",style:{stroke:"#fff",strokeWidth:".2"},d:"M32,5 L32,6 C32,6 34,8 32,10 C32,10 30,8 32,6"}),(0,s.jsx)("path",{id:"daunKanan",fill:"none",style:{stroke:"#fff",strokeWidth:".2"},d:"M32,5 L32,6 C32,6 34,8 32,10 C32,10 30,8 32,6"})]}),(0,s.jsxs)("g",{id:"kananDaun",children:[(0,s.jsx)("line",{x1:"37",y1:"5.5",x2:"58",y2:"5.5",style:{stroke:"#fff",strokeWidth:".2"}}),(0,s.jsx)("text",{x:"38",y:"9.2",fill:"#fffffe",style:{fontSize:"3pt",letterSpacing:"2.2px"},children:"ORIGIN"}),(0,s.jsx)("line",{x1:"37",y1:"10",x2:"58",y2:"10",style:{stroke:"#fff",strokeWidth:".2"}})]}),(0,s.jsx)("path",{id:"textStyle",fill:"none",stroke:"none",d:"M-4,94 L32,94 L64,94"}),(0,s.jsx)("text",{x:"11",fill:"#fffffe",children:(0,s.jsx)("textPath",{href:"#textStyle",children:"MARLBORO"})}),(0,s.jsx)("polygon",{id:"segitiga",points:"0,96 32,96 64,96",fill:"#fffffe"}),(0,s.jsx)("rect",{id:"kotakBawah",x:"0",y:"96",width:"64",height:"42.1",fill:"#fffffe"}),(0,s.jsxs)("g",{id:"isiKotakBawah",children:[(0,s.jsx)("path",{id:"tagline",fill:"none",stroke:"none",d:"M20,60 C20,60 30,50 44,60"}),(0,s.jsx)("text",{fill:"#030504",style:{fontSize:"3pt"},children:(0,s.jsx)("textPath",{href:"#tagline",startOffset:"10%",children:"QUALITY TOBACCO"})}),(0,s.jsx)("text",{x:"22",y:"65",fill:"#030504",style:{fontSize:"2pt",letterSpacing:".6px"},children:"EST"}),(0,s.jsx)("rect",{x:"28",y:"60",width:"6",height:"6",fill:"red"}),(0,s.jsx)("polygon",{points:"28,66.2 31,63 34,66.2",fill:"#fffffe"}),(0,s.jsx)("text",{x:"35",y:"65",fill:"#030504",style:{fontSize:"2pt",letterSpacing:".6px"},children:"1908"}),(0,s.jsx)("line",{x1:"4",y1:"74",x2:"60",y2:"74",style:{stroke:"#030504",strokeWidth:".2"}}),(0,s.jsx)("text",{x:"4",y:"78",fill:"#030504",style:{fontSize:"1.5pt",letterSpacing:".5px"},children:"TASTING NOTES"}),(0,s.jsx)("text",{x:"4",y:"81",fill:"#030504",style:{fontSize:"1.5pt",letterSpacing:".5px"},children:"RICH AND LIVELY TOBACCO TASTE"}),(0,s.jsx)("text",{x:"4",y:"84",fill:"#030504",style:{fontSize:"1.5pt",letterSpacing:".5px"},children:"WITH AROMATIC CHARACTER"}),(0,s.jsx)("line",{x1:"4",y1:"86",x2:"60",y2:"86",style:{stroke:"#030504",strokeWidth:".2"}}),(0,s.jsx)("text",{x:"18",y:"96",fill:"#030504",style:{fontSize:"3.2pt",letterSpacing:".6px"},children:"12 CIGARETTES"})]})]})})}function Bankaltimtara(){let t=(0,l.useRef)(null),animasi=()=>{t.current=n.Z.timeline({easing:"easeInOutExpo",loop:!0,direction:"alternate",duration:2500}).add({targets:["#textLogo","#logo"],opacity:[0,1]}).add({targets:"#b",d:"M37,71 C37,71 37,75 37,55 C37,55 37,37 37,35 C37,35 37,35 37,30 Z"},0).add({targets:"#p",d:"M69,5 C69,5 69,1 69,21 C69,21 69,39 69,37 C69,37 69,38 69,45 Z"},"-=2500").add({targets:"#d",d:"M106,71 C106,71 106,75 106,55 C106,55 106,37 106,35 C106,35 106,35 106,30 Z"},"-=2500").add({targets:"#b",d:"M37,71 C37,71 69,75 69,55 C69,55 69,37 41,35 C41,35 37,35 37,30 Z",strokeWidth:0},"-=500").add({targets:"#p",d:"M69,5 C69,5 101,1 101,21 C101,21 101,39 73,37 C73,37 69,38 69,45 Z",strokeWidth:0},"-=2500").add({targets:"#d",d:"M106,71 C106,71 74,75 74,55 C74,55 74,37 102,35 C102,35 106,35 106,30 Z",strokeWidth:0},"-=2500")};return(0,l.useEffect)(()=>{animasi()},[]),(0,s.jsx)("div",{id:"box",className:"flex justify-center w-fit p-5 bg-white font-sans",children:(0,s.jsxs)("svg",{viewBox:"0 0 145 100",className:"w-full h-full",children:[(0,s.jsxs)("g",{id:"logo",children:[(0,s.jsx)("path",{id:"b",fill:"#05437c",style:{strokeWidth:".2",stroke:"#05437c"},d:"M69,71 C69,71 69,75 69,55 C69,55 69,37 69,35 C69,35 69,35 69,30 Z"}),(0,s.jsx)("path",{id:"p",fill:"#6d4006",style:{strokeWidth:".2",stroke:"#6d4006"},d:"M69,5 C69,5 69,1 69,21 C69,21 69,39 69,37 C69,37 69,38 69,45 Z"}),(0,s.jsx)("path",{id:"d",fill:"#05437c",style:{strokeWidth:".2",stroke:"#05437c"},d:"M69,71 C69,71 69,75 69,55 C69,55 69,37 69,35 C69,35 69,35 69,30 Z"})]}),(0,s.jsx)("text",{id:"textLogo",x:"5",y:"95",fill:"#05437c",style:{fontSize:"15pt",letterSpacing:"1px"},children:"bankaltimtara"})]})})}function Honda(){let t=(0,l.useRef)(null),animasi=()=>{t.current=n.Z.timeline({easing:"linear",loop:!0,duration:1e3}).add({targets:"#rangka",d:"M3,1 L80,28 C80,28 84,30 80,34 L68,48 L62,48 L77,33 C77,33 80,31 77,30 L10,12 C10,12 2,8 3,1 Z"}).add({targets:"#tulang1",opacity:[0,1]},"-=800").add({targets:"#tulang2",opacity:[0,1]},"-=800").add({targets:"#tulang3",opacity:[0,1]},"-=800").add({targets:"#tulang4",opacity:[0,1]},"-=800").add({targets:"#logo",translateX:200},"+=800").add({targets:"#logo",rotateY:"180deg"}).add({targets:"#logo",translateX:85,duration:200}).add({targets:"#textLogo",opacity:[0,1]})};return(0,l.useEffect)(()=>{animasi()},[]),(0,s.jsx)("div",{id:"box",className:"flex justify-center w-full bg-transparent",children:(0,s.jsxs)("svg",{viewBox:"0 0 86 64",className:"h-96",children:[(0,s.jsxs)("g",{id:"logo",children:[(0,s.jsx)("path",{id:"rangka",fill:"red",d:"M3,30 L80,28 C80,28 84,30 80,32 L68,32 L62,32 L77,31 C77,31 80,30 77,30 L10,35 C10,35 2,36 3,30 Z"}),(0,s.jsx)("path",{id:"tulang1",fill:"red",d:"M10,14 L74,31 C74,31 77,32 73,35 L54,30 L54,29 L17,20 C17,20 10,19 10,14 Z"}),(0,s.jsx)("path",{id:"tulang2",fill:"red",d:"M15,22 L72.5,36 L68.5,39.5 L54,36 L54,35 L22,28 C22,28 16,28 15,22 Z"}),(0,s.jsx)("path",{id:"tulang3",fill:"red",d:"M20,31 L68,41 L65,44 L54,42 L54,41 L27,36 C27,36 22,36 20,31 Z"}),(0,s.jsx)("path",{id:"tulang4",fill:"red",d:"M54,43.5 L64,45 L61,48 L44,48 L54,43.5 Z"})]}),(0,s.jsx)("text",{id:"textLogo",className:"font-serif font-extrabold",x:"0",y:"63",fill:"red",style:{fontSize:"15pt"},children:"HONDA"})]})})}function Tatagraha(){let t=(0,l.useRef)(null),animasi=()=>{let e=document.querySelector("#letters");e.innerHTML=e.textContent.replace(/\S/g,"<tspan id='letter'>$&</tspan>"),t.current=n.Z.timeline({easing:"easeInOutExpo",loop:!0,direction:"alternate",duration:2e3}).add({targets:["#kotak5","#kotak6","#kotak7","#nyempil"],y:30,duration:1e3}).add({targets:["#kotak9","#kotak10","#kotak11","#kotak12"],y:60,duration:1e3},"-=1000").add({targets:"#kotak2",x:20,duration:1e3},"-=500").add({targets:"#kotak3",x:40,duration:1e3},"-=1000").add({targets:"#kotak4",x:60,duration:1e3},"-=1000").add({targets:"#kotak10",x:20,duration:1e3},"-=1000").add({targets:"#kotak11",x:40,duration:1e3},"-=1000").add({targets:"#kotak12",x:60,duration:1e3},"-=1000").add({targets:"#kotak6",x:20,duration:1e3},"-=1000").add({targets:"#kotak7",x:40,duration:1e3},"-=1000").add({targets:"#nyempil",x:60,duration:1e3},"-=1000").add({targets:"#nyempil",transform:"rotate(45 76 54)"},"-=1000").add({targets:"#letter",scale:[.3,1],opacity:[0,1],translateY:0,duration:500,delay:(t,e)=>70*(e+1)},"-=1200").add({targets:"#arsitek",opacity:[0,1]},"-=800").add({delay:2e4})};return(0,l.useEffect)(()=>{animasi()},[]),(0,s.jsx)("span",{className:"flex w-full h-40 text-blue-900",children:(0,s.jsxs)("svg",{viewBox:"0 0 260 84",className:"w-full h-auto",children:[(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak2"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak3"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak4"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak5"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak6"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak7"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"none",stroke:"currentColor",transform:"rotate(0 76 54)",id:"nyempil"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak9"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak10"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak11"}),(0,s.jsx)("rect",{width:"15",height:"25",x:"0",y:"0",fill:"currentColor",id:"kotak12"}),(0,s.jsx)("text",{y:"50",x:"100",className:"text-4xl font-semibold font-mocha",fill:"currentColor",children:(0,s.jsx)("tspan",{id:"letters",children:"tatagraha"})}),(0,s.jsx)("text",{y:"75",x:"100",className:"text-lg tracking-[.45em]",fill:"currentColor",id:"arsitek",children:"ARCHITECT"})]})})}var o=a(1396),d=a.n(o);function Animasi(){let[t,e]=(0,l.useState)(!1),[a,o]=(0,l.useState)("Marlboro"),c=(0,l.useRef)(null),openDialog=t=>{o(t),e(!0)},closeDialog=()=>{e(!1)},animasi=()=>{c.current=(0,n.Z)({targets:".lines path",strokeDashoffset:[n.Z.setDashoffset,0],easing:"easeInOutSine",duration:1500,delay:function(t,e){return 250*e},direction:"alternate",loop:!0})};return(0,l.useEffect)(()=>{animasi()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"w-full flex flex-col justify-center mb-4",children:[(0,s.jsx)("div",{className:"flex justify-center pr-60 text-xs",children:"Powered by"}),(0,s.jsx)(d(),{href:"https://animejs.com/",className:"w-auto h-16 text-purple-500",children:(0,s.jsx)("svg",{viewBox:"0 0 280 100",className:"w-full h-full",children:(0,s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeWidth:"1",className:"lines",children:[(0,s.jsx)("path",{className:"el",d:"M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z"}),(0,s.jsx)("path",{className:"el",d:"M73 80V20H58v60h15z"}),(0,s.jsx)("path",{className:"el",d:"M58 80V49.77C58.5 33.23 71.58 20 88 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80H58zm75 0V20h-15v60h15z"}),(0,s.jsx)("path",{className:"el",d:"M118 80V49.77C118.5 33.23 131.58 20 148 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15zm-7.5-60a7.5 7.5 0 1 1-7.48 8v-1c.25-3.9 3.5-7 7.48-7z"}),(0,s.jsx)("path",{className:"el",d:"M133 65a15 15 0 0 1-15-15v-7.5h-15V50a30 30 0 0 0 30 30V65zm30 15V49.77C163.5 33.23 176.58 20 193 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z"}),(0,s.jsx)("path",{className:"el",d:"M238 65a15 15 0 0 1 0-30c8.1 0 14.63 6.53 15 15h-15v15h30V49.89C267.5 33.23 254.42 20 238 20a30 30 0 0 0 0 60V65z"}),(0,s.jsx)("path",{className:"el",d:"M260.48 65a7.5 7.5 0 1 1-7.48 8v-1c.26-3.9 3.5-7 7.48-7z"})]})})})]}),(0,s.jsxs)("div",{className:"w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-3",children:[(0,s.jsx)("button",{onClick:t=>openDialog(t.target.value),className:"bg-tertiary hover:opacity-70 p-3 rounded",value:"Blackadders",children:"Blackadders"}),(0,s.jsx)("button",{onClick:t=>openDialog(t.target.value),className:"bg-tertiary hover:opacity-70 p-3 rounded",value:"Marlboro",children:"Marlboro"}),(0,s.jsx)("button",{onClick:t=>openDialog(t.target.value),className:"bg-tertiary hover:opacity-70 p-3 rounded",value:"Bankaltimtara",children:"Bankaltimtara"}),(0,s.jsx)("button",{onClick:t=>openDialog(t.target.value),className:"bg-tertiary hover:opacity-70 p-3 rounded",value:"Honda",children:"Honda"}),(0,s.jsx)("button",{onClick:t=>openDialog(t.target.value),className:"bg-tertiary hover:opacity-70 p-3 rounded",value:"Tatagraha",children:"Tatagraha"})]}),(0,s.jsxs)(i.Z,{show:t,onClose:closeDialog,children:[(0,s.jsxs)("div",{className:"text-white text-xl m-3 p-2 bg-secondary rounded flex",children:[(0,s.jsx)("h1",{className:"grow",children:a}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("button",{className:"bg-tertiary hover:opacity-70 px-2 rounded",onClick:closeDialog,children:"X"})})]}),(0,s.jsxs)("div",{className:"flex justify-center m-5",children:["Blackadders"===a&&(0,s.jsx)(r.Z,{}),"Marlboro"===a&&(0,s.jsx)(Marlboro,{}),"Bankaltimtara"===a&&(0,s.jsx)(Bankaltimtara,{}),"Honda"===a&&(0,s.jsx)(Honda,{}),"Tatagraha"===a&&(0,s.jsx)(Tatagraha,{})]})]})]})}},5293:function(t,e,a){"use strict";a.d(e,{Z:function(){return Modal}});var s=a(7437),l=a(2265),i=a(9805),r=a(9220);function Modal(t){let{children:e,show:a=!1,maxWidth:n="2xl",closeable:o=!0,onClose:d=()=>{}}=t;return(0,s.jsx)(i.u,{show:a,as:l.Fragment,leave:"duration-200",children:(0,s.jsxs)(r.V,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto justify-center items-center z-50 transform transition-all font-firaCode",onClose:()=>{o&&d()},children:[(0,s.jsx)(i.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"absolute inset-0 bg-gray-500/75"})}),(0,s.jsx)(i.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsx)(r.V.Panel,{className:"bg-background rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ".concat({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n]),children:e})})]})})}}},function(t){t.O(0,[326,459,674,971,472,744],function(){return t(t.s=8393)}),_N_E=t.O()}]);