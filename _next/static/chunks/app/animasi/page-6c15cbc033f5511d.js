(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{1031:function(e,t,r){Promise.resolve().then(r.bind(r,5036))},5036:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),s=r(2265),a=r(8674);function l(){let e=(0,s.useRef)(null),t=()=>{let t=document.querySelector(".letters");t.innerHTML=t.textContent.replace(/\S/g,"<tspan class='letter'>$&</tspan>"),e.current=a.Z.timeline({delay:250,easing:"easeInOutExpo"}).add({targets:".leftWing",points:"45,95 15,20 35,40",duration:4e3}).add({targets:".rightWing",points:"390,35 10,5 40,35",duration:3e3},"-=3700").add({targets:".text",translateX:30,duration:4e3},"-=4000").add({targets:".letter",scale:[.3,1],opacity:[0,1],translateY:0,duration:500,delay:(e,t)=>70*(t+1)},"-=2300")};return(0,s.useEffect)(()=>{t()},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"lg:w-2/4 w-3/4 border h-fit pt-3 m-auto",children:(0,n.jsx)("svg",{className:"text-white w-full h-full text-5xl font-hemiHead",viewBox:"0 0 400 100",children:(0,n.jsxs)("g",{fill:"currentColor",children:[(0,n.jsx)("polygon",{points:"10,95 50,5 50,35",className:"leftWing"}),(0,n.jsxs)("text",{x:"30",y:"90",className:"text",children:["B",(0,n.jsx)("tspan",{className:"letters",children:"lackadders"})]}),(0,n.jsx)("polygon",{points:"100,95 55,5 55,35",className:"rightWing"})]})})})})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[674,971,596,744],function(){return e(e.s=1031)}),_N_E=e.O()}]);