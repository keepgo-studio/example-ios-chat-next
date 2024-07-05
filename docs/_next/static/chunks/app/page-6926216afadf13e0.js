(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7405:function(e,t,s){Promise.resolve().then(s.bind(s,7963)),Promise.resolve().then(s.bind(s,6414)),Promise.resolve().then(s.bind(s,794))},7963:function(e,t,s){"use strict";s.d(t,{default:function(){return c}});var a=s(7437),r=s(2265),n=s(6648),l=s(794),i=s(8470),o=s(9354);function c(){let e="chat",[t,c]=(0,r.useState)(0),[d,h]=(0,r.useState)(!1),u=(0,r.useRef)(!1),{theme:m}=(0,l.F)();(0,r.useEffect)(()=>{(0,i.X3)("chat-db",1,{upgrade(e){e.createObjectStore("chat-messages")}}).then(t=>{s.e(424).then(s.bind(s,9424)).then(s=>{let{initChat:a,addRoomListener:r}=s,n=[];r(e,async s=>{let a,r=s.content,l=!1;if("audio"===s.type||"img"===s.type)try{r=await fetch(s.content).then(e=>(a=e.headers.get("Content-Type"),e.blob())).then(e=>(0,o.w8)(e)),l=!0}catch(e){r=s.content}n.push({...s,content:r,decodeNeeded:l,mimeType:a});let i=t.transaction("chat-messages","readwrite"),d=i.objectStore("chat-messages");await d.put(n,e),i.done,u.current||c(e=>e+1)}),(async()=>{let s=t.transaction("chat-messages","readonly"),r=s.objectStore("chat-messages"),l=await r.get(e)||[];s.done,n=l,a(e,l.map(e=>{let t;if(("audio"===e.type||"img"===e.type)&&e.decodeNeeded){let s=(0,o.Jr)(e.content,e.mimeType);t=URL.createObjectURL(s)}else t=e.content;return{...e,content:t}}))})()})})},[]);let x=(0,r.useRef)(),p=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(clearTimeout(x.current),u.current=d,p.current){let e=p.current;d?(e.style.display="",x.current=setTimeout(()=>{e.style.top="-16px",e.style.opacity="1"}),c(0)):(e.style.top="0px",e.style.opacity="0",x.current=setTimeout(()=>{e.style.display="none"},500))}},[d]),(0,a.jsxs)("div",{className:"fixed right-4 bottom-4 z-50",children:[(0,a.jsx)("button",{className:"bg-black p-4 rounded-2xl duration-300 hover:brightness-75 active:scale-90",onClick:()=>{h(e=>!e)},children:(0,a.jsx)(n.default,{className:"aspect-square",src:"/apple-logo.svg",alt:"icon",width:32,height:32})}),(0,a.jsx)("section",{ref:p,className:"\n        absolute right-0 border -translate-y-full rounded-3xl duration-500 overflow-hidden\n        ".concat(d?"":"opacity-0 top-0 select-none","\n      "),children:(0,a.jsx)("div",{className:"w-80 h-[600px] bg-primary-bg-in py-2",children:(0,a.jsx)("ios-chat",{"room-id":e,dark:"dark"===m})})}),t>0&&(0,a.jsx)("section",{className:"absolute bg-red-500 text-white top-0 right-0 rounded-full translate-x-1/3 -translate-y-1/3 px-2 py-[1px]",children:t})]})}},6414:function(e,t,s){"use strict";s.d(t,{default:function(){return m}});var a=s(7437),r=s(2265);function n(){return(0,a.jsx)("div",{className:"w-[10%] bg-gray-500 h-[1px] rounded-full m-auto"})}var l=s(6648),i=s(794),o=s(9354),c=s(7818);let d=(0,c.default)(()=>Promise.all([s.e(424),s.e(180)]).then(s.bind(s,8180)),{loadableGenerated:{webpack:()=>[8180]},ssr:!1}),h=(0,c.default)(()=>Promise.all([s.e(424),s.e(580)]).then(s.bind(s,9580)),{loadableGenerated:{webpack:()=>[9580]},ssr:!1});function u(){let[e,t]=(0,r.useState)([]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("section",{className:"flex justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"px-4 py-2",children:["Create new chat room",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"send message to all chat rooms or sends to only one chat room."]}),(0,a.jsx)("div",{className:"h-6"}),(0,a.jsx)("button",{className:"ml-2 w-fit h-fit text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95",onClick:()=>{t(t=>[...t,"room-".concat(e.length)])},children:"Create chat room"})]}),(0,a.jsx)(d,{clientIds:e})]}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)("ul",{className:"flex flex-wrap gap-2 p-6 border rounded-2xl",children:e.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(h,{roomId:e})},t))})]})}function m(){let{theme:e,toggleTheme:t}=(0,i.F)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("nav",{className:"sticky top-0 left-0 px-3 h-12 bg-primary-bg-in flex items-center justify-between border-b-black border-b",children:[(0,a.jsx)(l.default,{src:"light"===e?"/apple-logo.black.svg":"/apple-logo.svg",width:16,height:16,alt:"nav-icon"}),(0,a.jsx)("p",{className:"text-sm font-light",children:"iOS Chat Example"})]}),(0,a.jsxs)("section",{className:"max-w-screen-lg m-auto p-16",children:[(0,a.jsx)("h1",{className:"font-bold text-2xl",children:"Example 1. Requesting image and 'Focus mode'"}),(0,a.jsx)("div",{className:"h-6"}),(0,a.jsxs)("article",{className:"border rounded-3xl p-6 bg-primary-bg-in",children:[(0,a.jsxs)("p",{children:["This example is the explanation for how to...",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"1. Communicate with chat from everywhere of the project",(0,a.jsx)("br",{}),"2. show unread message counts",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Furthermore, If the message contain image, ","<ios-chat />"," support the Focus mode which will size up the image for focus"]}),(0,a.jsx)("div",{className:"h-8"}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{className:"text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95",onClick:async()=>{let e=await s.e(424).then(s.bind(s,9424));try{e.startAnswerLoading("chat"),await (0,o.gw)(2e3),await e.endAnswerLoading("chat"),e.answerChat("chat",{type:"img",content:"https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large.jpg"}),e.answerChat("chat",{type:"text",content:"iPhone 15 Pro image - Apple"})}catch(e){alert("current chat room is blocked")}},children:"Request data from server"})})]}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)(n,{}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)("h1",{className:"font-bold text-2xl",children:"Example 2. Darkmode"}),(0,a.jsx)("div",{className:"h-6"}),(0,a.jsxs)("article",{className:"border rounded-3xl p-6 bg-primary-bg-in",children:[(0,a.jsx)("p",{children:"Toggle button to set theme (dark or light)"}),(0,a.jsx)("div",{className:"h-8"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("p",{className:"text-sm mr-4",children:[(0,a.jsx)("span",{className:"text-gray-400 mr-2",children:"Current theme"}),(0,a.jsx)("span",{className:"py-[.5em] px-[1.2em] rounded-full border",children:e.charAt(0).toUpperCase()+e.slice(1)})]}),(0,a.jsx)("button",{className:"text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95",onClick:()=>t(),children:"Change theme"})]})]}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)(n,{}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)("h1",{className:"font-bold text-2xl",children:"Example 3. Saving messages"}),(0,a.jsx)("div",{className:"h-6"}),(0,a.jsxs)("article",{className:"border rounded-3xl p-6 bg-primary-bg-in",children:[(0,a.jsxs)("p",{children:["This example is the explanation for...",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"1. how to track recent message using addRoomListener( );",(0,a.jsx)("br",{}),"2. how to save messages",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"w-[1em] inline-block"}),"Click Chat icon bottom right of the screen and check the saved messages \uD83D\uDE0E"]}),(0,a.jsx)("div",{className:"h-8"}),(0,a.jsx)("div",{className:"flex justify-end items-center",children:(0,a.jsx)("button",{className:"text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95",onClick:()=>location.reload(),children:"Reload"})})]}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)(n,{}),(0,a.jsx)("div",{className:"h-12"}),(0,a.jsx)("h1",{className:"font-bold text-2xl",children:"Playground - Echo Chat"}),(0,a.jsx)("div",{className:"h-6"}),(0,a.jsx)("article",{className:"border rounded-3xl p-6 bg-primary-bg-in",children:(0,a.jsx)(u,{})})]})]})}},794:function(e,t,s){"use strict";s.d(t,{F:function(){return l},ThemeProvider:function(){return i}});var a=s(7437),r=s(2265);let n=(0,r.createContext)(void 0);function l(){let e=(0,r.useContext)(n);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}function i(e){let{children:t}=e,[s,l]=(0,r.useState)("light"),i=e=>{"dark"===e?document.body.classList.add("dark"):document.body.classList.remove("dark"),localStorage.setItem("theme",e)};(0,r.useEffect)(()=>{var e;let t=null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:"light";l(t),i(t)},[]);let o=(0,r.useCallback)(()=>{l(e=>{let t="light"===e?"dark":"light";return i(t),t})},[]);return(0,a.jsx)(n.Provider,{value:{theme:s,toggleTheme:o},children:t})}},9354:function(e,t,s){"use strict";s.d(t,{Jr:function(){return n},gw:function(){return a},w8:function(){return r}});let a=e=>new Promise(t=>setTimeout(()=>t(!0),e));function r(e){return new Promise((t,s)=>{let a=new FileReader;a.onload=()=>{t(a.result.split(",")[1])},a.onerror=e=>{s(e)},a.readAsDataURL(e)})}function n(e,t){let s=atob(e),a=s.length,r=new Uint8Array(a);for(let e=0;e<a;e++)r[e]=s.charCodeAt(e);return new Blob([r.buffer],{type:t})}}},function(e){e.O(0,[554,971,23,744],function(){return e(e.s=7405)}),_N_E=e.O()}]);