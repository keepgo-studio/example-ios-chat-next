"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{9424:function(t,e,i){i.r(e),i.d(e,{addRoomListener:function(){return ey},answerChat:function(){return ew},endAnswerLoading:function(){return ex},getMessages:function(){return eC},initChat:function(){return ef},isBlocked:function(){return e$},removeRoomListener:function(){return ev},sendChat:function(){return eb},startAnswerLoading:function(){return e_}});var s=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=(t,e,i,a)=>{for(var o,n=a>1?void 0:a?r(e,i):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(a?o(e,i,n):o(n))||n);return a&&n&&s(e,i,n),n},o=globalThis,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),h=new WeakMap,d=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&h.set(e,t))}return t}toString(){return this.cssText}},c=t=>new d("string"==typeof t?t:t+"",void 0,l),p=(t,...e)=>new d(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,l),u=(t,e)=>{if(n)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),s=o.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},g=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return c(e)})(t):t,{is:m,defineProperty:f,getOwnPropertyDescriptor:C,getOwnPropertyNames:y,getOwnPropertySymbols:v,getPrototypeOf:b}=Object,w=globalThis,_=w.trustedTypes,x=_?_.emptyScript:"",$=w.reactiveElementPolyfillSupport,A=(t,e)=>t,E={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},k=(t,e)=>!m(t,e),S={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;var L=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=S){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&f(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=C(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){let a=s?.call(this);r.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;let t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){let t=this.properties;for(let e of[...y(t),...v(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(g(i));else void 0!==t&&e.push(g(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let r=(i.converter?.toAttribute!==void 0?i.converter:E).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:t.converter?.fromAttribute!==void 0?t.converter:E;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??k)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[A("elementProperties")]=new Map,L[A("finalized")]=new Map,$?.({ReactiveElement:L}),(w.reactiveElementVersions??=[]).push("2.0.4");var M=globalThis,H=M.trustedTypes,T=H?H.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+R,U=`<${B}>`,D=document,I=()=>D.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,O=t=>V(t)||"function"==typeof t?.[Symbol.iterator],Z=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,q=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,Q=/"/g,X=/^(?:script|style|textarea|title)$/i,Y=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),K=Y(1),J=(Y(2),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),tt=new WeakMap,te=D.createTreeWalker(D,129);function ti(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}var ts=(t,e)=>{let i=t.length-1,s=[],r,a=2===e?"<svg>":"",o=F;for(let e=0;e<i;e++){let i=t[e],n,l,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(l=o.exec(i)));)d=o.lastIndex,o===F?"!--"===l[1]?o=N:void 0!==l[1]?o=j:void 0!==l[2]?(X.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=q):void 0!==l[3]&&(o=q):o===q?">"===l[0]?(o=r??F,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?q:'"'===l[3]?Q:W):o===Q||o===W?o=q:o===N||o===j?o=F:(o=q,r=void 0);let c=o===q&&t[e+1].startsWith("/>")?" ":"";a+=o===F?i+U:h>=0?(s.push(n),i.slice(0,h)+P+i.slice(h)+R+c):i+R+(-2===h?e:c)}return[ti(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),s]},tr=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let a=0,o=0,n=e.length-1,l=this.parts,[h,d]=ts(e,i);if(this.el=t.createElement(h,s),te.currentNode=this.el.content,2===i){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=te.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(P)){let e=d[o++],i=r.getAttribute(t).split(R),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?th:"?"===s[1]?td:"@"===s[1]?tc:tl}),r.removeAttribute(t)}else t.startsWith(R)&&(l.push({type:6,index:a}),r.removeAttribute(t));if(X.test(r.tagName)){let t=r.textContent.split(R),e=t.length-1;if(e>0){r.textContent=H?H.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],I()),te.nextNode(),l.push({type:2,index:++a});r.append(t[e],I())}}}else if(8===r.nodeType){if(r.data===B)l.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(R,t+1));)l.push({type:7,index:a}),t+=R.length-1}}a++}}static createElement(t,e){let i=D.createElement("template");return i.innerHTML=t,i}};function ta(t,e,i=t,s){if(e===J)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,a=z(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=ta(t,r._$AS(t,e.values),r,s)),e}var to=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??D).importNode(e,!0);te.currentNode=s;let r=te.nextNode(),a=0,o=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new tn(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new tp(r,this,t)),this._$AV.push(e),n=i[++o]}a!==n?.index&&(r=te.nextNode(),a++)}return te.currentNode=D,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){z(t=ta(this,t,e))?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):O(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==G&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tr.createElement(ti(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new to(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new tr(t)),e}k(e){V(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,s,r=0;for(let a of e)r===i.length?i.push(s=new t(this.S(I()),this.S(I()),this,this.options)):s=i[r],s._$AI(a),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},tl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){let r=this.strings,a=!1;if(void 0===r)(a=!z(t=ta(this,t,e,0))||t!==this._$AH&&t!==J)&&(this._$AH=t);else{let s=t,o,n;for(t=r[0],o=0;o<r.length-1;o++)(n=ta(this,s[i+o],e,o))===J&&(n=this._$AH[o]),a||=!z(n)||n!==this._$AH[o],n===G?t=G:t!==G&&(t+=(n??"")+r[o+1]),this._$AH[o]=n}a&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},th=class extends tl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}},td=class extends tl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}},tc=class extends tl{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=ta(this,t,e,0)??G)===J)return;let i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tp=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ta(this,t)}},tu=M.litHtmlPolyfillSupport;tu?.(tr,tn),(M.litHtmlVersions??=[]).push("3.1.4");var tg=(t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new tn(e.insertBefore(I(),t),t,void 0,i??{})}return r._$AI(t),r},tm=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};tm._$litElement$=!0,tm.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:tm});var tf=globalThis.litElementPolyfillSupport;tf?.({LitElement:tm}),(globalThis.litElementVersions??=[]).push("4.0.6");var tC=p`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: inherit;
  }
`;function ty(t){return new Promise(e=>setTimeout(()=>e(!0),t))}function tv(t,e,i){return t<e?e:i&&t>i?i:t}function tb(t,e){let i;return function(...s){clearTimeout(i),i=setTimeout(()=>t.apply(this,s),e)}}function tw(t){return Math.round(1e3*t)/1e3}var t_={easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2},tx=new WeakMap;function t$(t){tx.delete(t)}async function tA(t,{from:e,dest:i,duration:s,styleAttr:r="scroll",ease:a="easeInOutQuad"}){tx.set(t,!0);let o=Date.now();return new Promise(n=>{requestAnimationFrame(function l(){if(!tx.has(t))return;let h=Math.min(1,tw((Date.now()-o)/s)),d=t_[a](h)*(i-e)+e;switch(r){case"scroll":t.scrollTop=d;break;case"paddingBottom":case"paddingTop":case"bottom":case"top":t.style[r]=`${d}px`}h<1?requestAnimationFrame(l):(tx.delete(t),n(!0))})})}var tE=class{constructor(){this._time=0,this.x=0,this.y=0}set(t,e){this.x=t,this.y=e,this._time=Date.now()}get(t,e,i){let s=Date.now()-this._time,r=t-this.x,a=e-this.y;switch(i){case"both":return Math.sqrt(r*r+a*a)/s;case"hor":return r/s;case"ver":return a/s}}};function tk(t){return Number(t.split("px")[0])}async function tS(t){return await (await fetch(t)).blob()}var tL=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},tM={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k},tH=(t=tM,e,i)=>{let{kind:s,metadata:r}=i,a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function tT(t){return(e,i)=>{let s;return"object"==typeof i?tH(t,e,i):(s=e.hasOwnProperty(i),e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0)}}function tP(t){return tT({...t,state:!0,attribute:!1})}var tR=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function tB(t,e){return(i,s,r)=>{let a=e=>e.renderRoot?.querySelector(t)??null;if(e){let t;let{get:e,set:o}="object"==typeof s?i:r??(t=Symbol(),{get(){return this[t]},set(e){this[t]=e}});return tR(i,s,{get(){let t=e.call(this);return void 0===t&&(null!==(t=a(this))||this.hasUpdated)&&o.call(this,t),t}})}return tR(i,s,{get(){return a(this)}})}}var tU=t=>(...e)=>({_$litDirective$:t,values:e}),tD=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},{I:tI}={P:P,A:R,C:B,M:1,L:ts,R:to,D:O,V:ta,I:tn,H:tl,N:td,U:tc,B:th,F:tp},tz=()=>document.createComment(""),tV=(t,e,i)=>{let s=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i)i=new tI(s.insertBefore(tz(),r),s.insertBefore(tz(),r),t,t.options);else{let e=i._$AB.nextSibling,a=i._$AM,o=a!==t;if(o){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==a._$AU&&i._$AP(e)}if(e!==r||o){let t=i._$AA;for(;t!==e;){let e=t.nextSibling;s.insertBefore(t,r),t=e}}}return i},tO=(t,e,i=t)=>(t._$AI(e,i),t),tZ={},tF=(t,e=tZ)=>t._$AH=e,tN=t=>t._$AH,tj=t=>{t._$AP?.(!1,!0);let e=t._$AA,i=t._$AB.nextSibling;for(;e!==i;){let t=e.nextSibling;e.remove(),e=t}},tq=(t,e,i)=>{let s=new Map;for(let r=e;r<=i;r++)s.set(t[r],r);return s},tW=tU(class extends tD{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);let r=[],a=[],o=0;for(let e of t)r[o]=s?s(e,o):o,a[o]=i(e,o),o++;return{values:a,keys:r}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){let r=tN(t),{values:a,keys:o}=this.dt(e,i,s);if(!Array.isArray(r))return this.ut=o,a;let n=this.ut??=[],l=[],h,d,c=0,p=r.length-1,u=0,g=a.length-1;for(;c<=p&&u<=g;)if(null===r[c])c++;else if(null===r[p])p--;else if(n[c]===o[u])l[u]=tO(r[c],a[u]),c++,u++;else if(n[p]===o[g])l[g]=tO(r[p],a[g]),p--,g--;else if(n[c]===o[g])l[g]=tO(r[c],a[g]),tV(t,l[g+1],r[c]),c++,g--;else if(n[p]===o[u])l[u]=tO(r[p],a[u]),tV(t,r[c],r[p]),p--,u++;else if(void 0===h&&(h=tq(o,u,g),d=tq(n,c,p)),h.has(n[c])){if(h.has(n[p])){let e=d.get(o[u]),i=void 0!==e?r[e]:null;if(null===i){let e=tV(t,r[c]);tO(e,a[u]),l[u]=e}else l[u]=tO(i,a[u]),tV(t,r[c],i),r[e]=null;u++}else tj(r[p]),p--}else tj(r[c]),c++;for(;u<=g;){let e=tV(t,l[g+1]);tO(e,a[u]),l[u++]=e}for(;c<=p;){let t=r[c++];null!==t&&tj(t)}return this.ut=o,tF(t,l),J}}),tQ=class extends tm{constructor(){super(...arguments),this._inputWidth=0,this.data=[]}connectedCallback(){super.connectedCallback(),this.addEventListener("input-fired",t=>{this._inputWidth=t.detail.width}),this.addEventListener("input-active",t=>{this.ul.style.paddingBottom=`${t.detail.height}px`,this.scrollToBottom()}),this.addEventListener("pop",()=>{this.renderPop()})}renderContent(t,e){switch(t){case"text":return K`<p>${e}</p>`;case"audio":return K`<ios-chat-audio-message .src=${e}></ios-chat-audio-message>`;case"img":return K`<ios-chat-img .imgSrc=${e}></ios-chat-img>`;case"loading":return K`<ios-chat-spinner></ios-chat-spinner>`}}scrollToBottom(t="smooth"){t$(this.scrollContainer),this.scrollContainer.scrollTo({top:this.scrollContainer.scrollHeight,behavior:t})}async renderPop(){let t=this.data.pop();if(!t)return;let e=this.shadowRoot.getElementById(t.id);e.style.transition="ease 300ms",e.style.transform="translate(-50%, -50%) scale(0)",e.style.opacity="0";let i=this.scrollContainer.scrollTop;await tA(this.scrollContainer,{from:i,dest:i-e.offsetHeight,duration:300}),await ty(1),e.remove(),this.renderList()}async renderRecent(){let t=this.data[this.data.length-1],e=this.shadowRoot.getElementById(t.id),i=window.getComputedStyle(this.ul),s=tk(i.paddingBottom),r=e.getBoundingClientRect(),a=this.getBoundingClientRect(),o=10+tv(a.height-(r.y-a.y),0)-s;e.style.background="var(--textarea)",e.style.zIndex="sender"===t.role?"10":"",e.style.top=o+"px","text"===t.type?(e.style.maxWidth="none","sender"===t.role&&(e.style.width=`${this._inputWidth}px`)):"audio"===t.type&&(e.style.maxWidth="none","sender"===t.role&&(e.style.width=`${this._inputWidth}px`)),await ty(1),e.style.transition="ease 300ms, background ease 500ms",e.style.background="sender"===t.role?"var(--blue)":"var(--message-color)";let n=this.scrollContainer.offsetHeight,l=this.scrollContainer.scrollHeight,h=this.scrollContainer.scrollTop,d=tk(i.width)-tk(i.paddingLeft)-tk(i.paddingRight),c=l-n,p=e.querySelector("p, ios-chat-img, ios-chat-spinner, ios-chat-audio-message").offsetWidth;p+1>.7*d||"audio"===t.type?(e.style.width=`${.7*d}px`,c+=.3*e.offsetHeight):"text"===t.type&&(e.style.width=`${p+1}px`),e.style.top="0px",tA(this.scrollContainer,{from:h,dest:c,duration:300}),await ty(300),e.style.maxWidth="",e.style.width="",e.style.zIndex="0"}renderList(){let t=this.data.length;for(let e=0;e<t;e++){let i=this.shadowRoot?.getElementById(this.data[e].id);i.style.zIndex="0",i.classList.remove("with-tail"),(e===t-1||this.data[e].role!==this.data[e+1].role)&&i?.classList.add("with-tail")}}updated(t){this.renderList(),t.has("data")&&this._inputWidth&&this.renderRecent()}scrollingHandler(t){let{y:e,maxHeight:i}=t.detail;this.scrollbar.setAttribute("viewportLength",this.scrollContainer.offsetHeight.toString()),this.scrollbar.setAttribute("totalLength",i.toString()),this.scrollbar.setAttribute("current",e.toString())}clickHandler(t){let e=t.currentTarget,i=e.querySelector("ios-chat-img");i&&null!==i.getAttribute("success")&&this.ul.offsetHeight>this.scrollContainer.offsetHeight&&(t$(this.scrollContainer),this.scrollContainer.scrollTo({left:0,top:e.offsetTop,behavior:"smooth"}),t.stopPropagation())}render(){return K`
      <ios-chat-scroll .startAt=${"bottom"} @scrolling=${this.scrollingHandler}>
        <ul>
          ${tW(this.data,t=>t.id,t=>K`
              <li
                id=${t.id}
                class="message ${"receiver"===t.role?"answer":""}"
                @click=${this.clickHandler}
                @loaded=${async e=>{await ty(200),this.scrollToBottom();let i=this.shadowRoot?.getElementById(t.id);e.detail?i?.classList.remove("error"):i?.classList.add("error")}}
              >
                ${this.renderContent(t.type,t.content)}
                <div class="tail"></div>
              </li>
            `)}
        </ul>
      </ios-chat-scroll>

      <ios-chat-scrollbar></ios-chat-scrollbar>
    `}};tQ.styles=[tC,p`
      ul {
        font-size: var(--font-size);
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 10px 16px calc(2.4em + 20px) 12px;
      }
      ios-chat-scrollbar {
        position: absolute;
        top: 10px;
        right: 6px;
        height: calc(100% - 2.4em - 40px);
      }

      li {
        display: block;
      }
      .message {
        border-radius: var(--border-radius);
        position: relative;
        color: #fff;
        width: fit-content;
        word-break: break-all;
        align-self: flex-end;
        background: var(--blue);
        max-width: 70%;
      }
      .message.error {
        background-color: var(--red) !important;
        cursor: not-allowed;
      }
      p {
        padding: 0.6em 1em;
        line-height: 1.2em;
        width: fit-content;
        white-space: pre-line;
        user-select: text;
      }
      .message:has(ios-chat-audio-message) {
        width: 100%;
      }
      .message:has(ios-chat-img) {
        max-width: 65%;
        transition: ease ${300}ms;
      }
      .message:has(ios-chat-img):active {
        transform: scale(0.95);
      }
      .message:has(ios-chat-spinner) {
        background-color: var(--disable) !important;
      }
      ios-chat-spinner {
        display: block;
        width: 50px;
        height: 40px;
        padding: 0.2em 1em;
      }

      .message > *:not(.tail) {
        z-index: 1;
        position: relative;
      }
      .message.with-tail {
        margin-bottom: 6px;
      }
      .message.with-tail .tail {
        display: block;
        background: inherit;
      }
      .message .tail {
        display: none;
      }
      .message.with-tail .tail:before {
        content: "";
        position: absolute;
        z-index: 0;
        bottom: 0;
        right: -9px;
        height: 20px;
        width: 20px;
        background: inherit;
        background-attachment: fixed;
        border-bottom-left-radius: 15px;
      }
      .message.with-tail .tail:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: -10px;
        width: 10px;
        height: 20px;
        background: var(--theme-bg);
        border-bottom-left-radius: 10px;
      }

      .message.answer {
        background: var(--message-color);
        align-self: flex-start;
        color: var(--theme-color);
      }
      .message.answer .tail::before {
        background: inherit;
        left: -9px;
        border-radius: 0;
        border-bottom-right-radius: 15px;
      }
      .message.answer .tail::after {
        background: var(--theme-bg);
        left: -10px;
        border-radius: 0;
        border-bottom-right-radius: 10px;
      }
    `],a([tT({type:Array})],tQ.prototype,"data",2),a([tB("ul")],tQ.prototype,"ul",2),a([tB("ios-chat-scroll")],tQ.prototype,"scrollContainer",2),a([tB("ios-chat-scrollbar")],tQ.prototype,"scrollbar",2),tQ=a([tL("ios-chat-screen")],tQ);var tX=class extends tm{constructor(){super(...arguments),this._stId=0,this.viewportLength=0,this.totalLength=0,this.current=0}render(){return K`
      <section class="bar">
        <div class="thumb"></div>
      </section>
    `}updated(t){let e=this.offsetHeight,i=this.viewportLength/this.totalLength,s=(i>=1?0:i)*e;if((t.has("totalLength")||t.has("viewportLength"))&&(this.thumb.style.height=`${s}px`),t.has("current")){let t=0;clearTimeout(this._stId),this.thumb.style.opacity="1",this.thumb.style.transition="",t=this.current>=0?this.current/(this.totalLength-this.viewportLength)*(e-s):this.current/2,this.thumb.style.top=`${tv(t,-s+10,e-10)}px`,this._stId=setTimeout(()=>{this.thumb.style.opacity="0",this.thumb.style.transition="opacity ease 500ms"},1e3)}}};tX.styles=p`
    :host {
      position: absolute;
      display: block;
      width: clamp(3px, 1%, 9px);
      height: 100%;
      overflow: hidden;
      top: 0;
      right: 0;
      z-index: 10;
      border-radius: 999px;
    }

    .bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .thumb {
      position: relative;
      width: 100%;
      background-color: var(--scrollbar);
      border-radius: 999px;
      transition: ease 100ms;
    }
  `,a([tT({type:Number,reflect:!0})],tX.prototype,"viewportLength",2),a([tT({type:Number,reflect:!0})],tX.prototype,"totalLength",2),a([tT({type:Number,reflect:!0})],tX.prototype,"current",2),a([tB(".thumb")],tX.prototype,"thumb",2),tX=a([tL("ios-chat-scrollbar")],tX);var tY=class extends tm{render(){return K`
      <div class="spinner">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
      </div>
    `}};tY.styles=p`
  div.spinner {
    width: 100%;
    height: 100%;

    position: relative;
    display: inline-block;
  }

div.spinner div {
  width: 6%;
  height: 16%;
  background: var(--theme-color);
  position: absolute;
  left: 49%;
  top: 43%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  animation: fade 1s linear infinite;
}

@keyframes fade {
  from {opacity: 1;}
  to {opacity: 0.25;}
}

div.spinner div.bar1 {
  transform:rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
}    

div.spinner div.bar2 {
  transform:rotate(45deg) translate(0, -130%); 
  animation-delay: -0.875s;
}

div.spinner div.bar3 {
  transform:rotate(90deg) translate(0, -130%); 
  animation-delay: -0.750s;
}
div.spinner div.bar4 {
  transform:rotate(135deg) translate(0, -130%); 
  animation-delay: -0.625s;
}
div.spinner div.bar5 {
  transform:rotate(180deg) translate(0, -130%); 
  animation-delay: -0.500s;
}
div.spinner div.bar6 {
  transform:rotate(225deg) translate(0, -130%); 
  animation-delay: -0.375s;
}
div.spinner div.bar7 {
  transform:rotate(270deg) translate(0, -130%); 
  animation-delay: -0.250s;
}
div.spinner div.bar8 {
  transform:rotate(315deg) translate(0, -130%); 
  animation-delay: -0.125s;
}
  `,tY=a([tL("ios-chat-spinner")],tY);var tK=class extends tm{constructor(){super(...arguments),this._dest=0,this._position=0,this._draging=!1,this.startAt="top"}render(){return K`<section><slot></slot></section>`}firstUpdated(){let t,e=!0;this.addEventListener("scroll",()=>{this._position=this.scrollTop},{passive:!0});let i=0,s=this.slotElem.assignedElements({flatten:!0})[0],r=async()=>{if(!e)return;let t=s.scrollHeight-this.offsetHeight;i!==t&&(i=t),await ty(500),requestAnimationFrame(r)};requestAnimationFrame(r);let a=new tE,o=0,n=0,l=()=>{o=-this._dest,n=this._dest-i,this.container.style.paddingTop=`${tv(o,0)}px`,this.container.style.paddingBottom=`${tv(n,0)}px`};this.addEventListener("mousedown",t=>{t$(this),t$(this.container),this._draging=!0,this._dest=this._position;let e=tk(window.getComputedStyle(this.container).paddingTop);this._dest+=-e,l(),a.set(t.clientX,t.clientY)}),this.addEventListener("mousemove",t=>{this._draging&&(this._dest+=-t.movementY,this.scrollTop=this._dest,l())});let h=async t=>{this._dest<i&&t>i&&(n=(t-i)/2,await tA(this.container,{from:0,dest:n,duration:150,styleAttr:"paddingBottom",ease:"easeOutExpo"})),tA(this.container,{from:n,dest:0,duration:1e3,styleAttr:"paddingBottom",ease:"easeOutExpo"})},d=async t=>{this._position>0&&t<0&&(o=-t/2,await tA(this.container,{from:0,dest:o,duration:150,styleAttr:"paddingTop",ease:"easeOutExpo"})),tA(this.container,{from:o,dest:0,duration:1e3,styleAttr:"paddingTop",ease:"easeOutExpo"})},c=async t=>{if(!this._draging)return;this._draging=!1;let e=a.get(t.clientX,t.clientY,"ver"),s=tw(-(.3*e)),r=.65>Math.abs(e)?this._dest:this._dest+i*s;tA(this,{from:this._dest,dest:r,duration:2e3,ease:"easeOutExpo"}),d(r),h(r)};this.addEventListener("mouseup",c),this.addEventListener("mouseleave",c),this.addEventListener("wheel",e=>{t$(this),clearTimeout(t),t=setTimeout(()=>{let t=this._position;tA(this,{from:t,dest:t+e.deltaY,duration:2e3,ease:"easeOutExpo"})},50)},{passive:!0});let p=0,u=async()=>{if(!e)return;let t=tk(window.getComputedStyle(this.container).paddingTop),s=this._position;t>0&&this._position<.5&&(s=-t),p!==s&&this.dispatchEvent(new CustomEvent("scrolling",{detail:{maxHeight:i+this.offsetHeight,y:s}})),p=s,await ty(30),requestAnimationFrame(u)};requestAnimationFrame(u),this.startAt&&this.scrollTo(0,this.scrollHeight),new IntersectionObserver(t=>{(e=t[0].isIntersecting)&&(requestAnimationFrame(r),requestAnimationFrame(u))}).observe(this)}};tK.styles=p`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
    }
    :host::-webkit-scrollbar {
      display: none;
    }
    section {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
    }
  `,a([tT()],tK.prototype,"startAt",2),a([tB("section")],tK.prototype,"container",2),a([tB("slot")],tK.prototype,"slotElem",2),tK=a([tL("ios-chat-scroll")],tK);var tJ=class extends tD{constructor(t){if(super(t),this.it=G,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===G||null==t)return this._t=void 0,this.it=t;if(t===J)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};tJ.directiveName="unsafeHTML",tJ.resultType=1;var tG=tU(tJ),t1=class extends tm{constructor(){super(...arguments),this.data=""}render(){return tG(this.data)}};t1.styles=p`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      fill: inherit !important;
      width: 100% !important;
      height: 100% !important;
    }
  `,a([tT()],t1.prototype,"data",2),t1=a([tL("ios-chat-svg")],t1);var t0=[];for(t5=0;t5<256;++t5)t0.push((t5+256).toString(16).slice(1));var t5,t2,t3=new Uint8Array(16),t9={randomUUID:"u">typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},t6=function(t,e,i){if(t9.randomUUID&&!e&&!t)return t9.randomUUID();var s=(t=t||{}).random||(t.rng||function(){if(!t2&&!(t2="u">typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t2(t3)})();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){i=i||0;for(var r=0;r<16;++r)e[i+r]=s[r];return e}return function(t,e=0){return(t0[t[e+0]]+t0[t[e+1]]+t0[t[e+2]]+t0[t[e+3]]+"-"+t0[t[e+4]]+t0[t[e+5]]+"-"+t0[t[e+6]]+t0[t[e+7]]+"-"+t0[t[e+8]]+t0[t[e+9]]+"-"+t0[t[e+10]]+t0[t[e+11]]+t0[t[e+12]]+t0[t[e+13]]+t0[t[e+14]]+t0[t[e+15]]).toLowerCase()}(s)},t4=class{static{this.rooms={}}static{this.listeners={}}static{this.currentRoomId=null}static roomCreated(t,e,i){if(t in this.rooms)throw Error(`${t} is already exist`);this.listeners[t]=[],this.rooms[t]={id:t,ref:e,createdDatetime:Date.now(),messages:[],blocked:!1};let s=(t,e)=>{this.listeners[t].forEach(t=>t.callback(e))};e.addEventListener("send-message",e=>{let{content:r,type:a,role:o}=e.detail,n={id:t6(),type:a,role:o,content:r,createdDatetime:Date.now()};this.rooms[t].messages.push(n),i(),"loading"!==n.type&&s(t,n)})}static removeRoom(t){delete this.rooms[t]}static sendMessage(t,e,i){this.rooms[e].ref.dispatchEvent(new CustomEvent("send-message",{detail:{...i,role:t}}))}static popMessage(t){this.rooms[t].messages.pop()}static sendNonTextInput(t,e){this.rooms[t].ref.dispatchEvent(new CustomEvent("input-non-text",{detail:e}))}static listen(t,e){let i=t6();return this.listeners[t].push({id:i,callback:e}),i}static unsubscribe(t,e){this.listeners[t]=this.listeners[t].filter(({id:t})=>t!==e)}static getMessages(t){return this.rooms[t].messages}},t7=class{static{this.players=new Map}static append(t){this.players.set(t,0)}static play(t){this.players.forEach((t,e)=>{e.pause()}),t.play()}},t8=`<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_11998)">
<path d="M10.3882 20.371C11.749 20.371 13.0299 20.1106 14.231 19.5897C15.4322 19.0689 16.4918 18.3495 17.4097 17.4315C18.3277 16.5136 19.0471 15.454 19.5679 14.2528C20.0888 13.0517 20.3492 11.7708 20.3492 10.4101C20.3492 9.04939 20.0888 7.76846 19.5679 6.56729C19.0471 5.36612 18.3277 4.30655 17.4097 3.38858C16.4918 2.47061 15.4306 1.75121 14.2261 1.23038C13.0217 0.709544 11.7392 0.449127 10.3785 0.449127C9.0178 0.449127 7.73688 0.709544 6.53571 1.23038C5.33453 1.75121 4.27659 2.47061 3.36188 3.38858C2.44716 4.30655 1.72939 5.36612 1.20856 6.56729C0.687724 7.76846 0.427307 9.04939 0.427307 10.4101C0.427307 11.7708 0.687724 13.0517 1.20856 14.2528C1.72939 15.454 2.44879 16.5136 3.36676 17.4315C4.28473 18.3495 5.3443 19.0689 6.54547 19.5897C7.74664 20.1106 9.02757 20.371 10.3882 20.371Z" fill="inherit" fill-opacity="0.85"/>
<path d="M10.4078 15.4393C10.1864 15.4393 10.0041 15.3694 9.8609 15.2294C9.71767 15.0894 9.64606 14.9055 9.64606 14.6776V9.66788L9.72418 7.52921L8.71833 8.74015L7.52692 9.94132C7.37718 10.0911 7.19814 10.1659 6.98981 10.1659C6.78147 10.1659 6.60732 10.0959 6.46735 9.95597C6.32737 9.81599 6.25739 9.64184 6.25739 9.43351C6.25739 9.21866 6.32575 9.04288 6.46247 8.90616L9.82184 5.56632C10.0106 5.371 10.2059 5.27335 10.4078 5.27335C10.6096 5.27335 10.8049 5.371 10.9937 5.56632L14.3531 8.90616C14.4898 9.04939 14.5582 9.22517 14.5582 9.43351C14.5582 9.64184 14.4866 9.81599 14.3433 9.95597C14.2001 10.0959 14.0243 10.1659 13.816 10.1659C13.5946 10.1659 13.4156 10.0911 13.2789 9.94132L12.0972 8.74015L11.0816 7.51944L11.1597 9.66788V14.6776C11.1597 14.9055 11.0897 15.0894 10.9498 15.2294C10.8098 15.3694 10.6291 15.4393 10.4078 15.4393Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_11998">
<rect width="19.9219" height="19.9316" fill="white" transform="translate(0.427307 0.449127)"/>
</clipPath>
</defs>
</svg>
`,et=`<svg viewBox="0 0 185 185" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_42_13)">
<path
d="M0 92.4442C0 95.2082 0.990403 97.5614 2.97121 99.5037C4.95201 101.446 7.28787 102.417 9.97878 102.417H82.5211V174.915C82.5211 177.605 83.4928 179.939 85.4363 181.919C87.3797 183.899 89.7342 184.889 92.4999 184.889C95.2655 184.889 97.6388 183.899 99.6196 181.919C101.6 179.939 102.591 177.605 102.591 174.915V102.417H175.021C177.712 102.417 180.048 101.446 182.029 99.5037C184.01 97.5614 185 95.2082 185 92.4442C185 89.6802 184.01 87.3084 182.029 85.3288C180.048 83.3492 177.712 82.3594 175.021 82.3594H102.591V9.97278C102.591 7.28349 101.6 4.94903 99.6196 2.96942C97.6388 0.989807 95.2655 0 92.4999 0C89.7342 0 87.3797 0.989807 85.4363 2.96942C83.4928 4.94903 82.5211 7.28349 82.5211 9.97278V82.3594H9.97878C7.28787 82.3594 4.95201 83.3492 2.97121 85.3288C0.990403 87.3084 0 89.6802 0 92.4442Z"
/>
</g>
<defs>
<clipPath id="clip0_42_13">
<rect width="185" height="185" />
</clipPath>
</defs>
</svg>`,ee=class extends tm{constructor(){super(...arguments),this._msgQueue=[],this._id="",this._messageList=[],this._textDisabled=!1,this._animatePlusBtn=!1}disconnectedCallback(){super.disconnectedCallback(),t4.removeRoom(this._id)}connectedCallback(){if(super.connectedCallback(),this._id=this.getAttribute("room-id")??"",!this._id)throw Error("<ios-chat> tag need 'room-id' attribute");t4.roomCreated(this._id,this,()=>{this._messageList=[...t4.getMessages(this._id)],this.screen&&this.screen.dispatchEvent(new CustomEvent("input-fired",{detail:{width:this.textArea.offsetWidth}}))}),this.addEventListener("init-message",()=>{this._messageList=[...t4.getMessages(this._id)]}),this.addEventListener("answer-loading-start",()=>{t4.sendMessage("receiver",this._id,{type:"loading",content:""}),this._textDisabled=!0}),this.addEventListener("answer-loading-end",()=>{t4.popMessage(this._id),this.screen.dispatchEvent(new CustomEvent("pop")),this._textDisabled=!1}),window.addEventListener("resize",()=>this.inputFocusHandler()),this.addEventListener("input-non-text",t=>{let{type:e,content:i}=t.detail;if("img"===e){this.sendBtn.style.display="flex",this.textArea.style.borderRadius="0 0 var(--border-radius) var(--border-radius)";let e=document.createElement("div");e.className="img-wrapper",e.innerHTML=`
          <img src=${i} />
          <div class="close"></div>
        `,e.querySelector("div")?.addEventListener("click",()=>{this.textArea.style.borderRadius="",e.remove(),this._msgQueue=this._msgQueue.filter(t=>t.content!==i)}),this.textAreaWrapper.prepend(e),this._msgQueue.push(t.detail)}else"audio"===e&&(this.audioElem.style.display="block",this.audioElem.setAttribute("src",i),this.chatInput.style.display="none")})}render(){var t;let e;return K`
      <div class="root">
        <ios-chat-screen .data=${this._messageList}></ios-chat-screen>

        <ios-chat-detail 
          .roomId=${this._id}
          .open=${this._animatePlusBtn}
          @click=${()=>this._animatePlusBtn=!1}
        ></ios-chat-detail>

        <ios-chat-audio @audio-end=${t=>{this.audioElem.setAttribute("src",""),this.audioElem.style.display="none",this.chatInput.style.display="",t.detail&&t4.sendMessage("sender",this._id,{type:"audio",content:t.detail})}}></ios-chat-audio>
        
        <section class="chat-input">
          <div class="btn-container" @click=${t=>this._animatePlusBtn=!0}>
            <button>
              <ios-chat-svg .data=${et}></ios-chat-svg>
            </button>

            <button class="copy">
              <ios-chat-svg .data=${et}></ios-chat-svg>
            </button>
          </div>

          <div class="textarea-container">
            <div class="textarea-wrapper">
              <textarea
                placeholder="Chat"
                ?disabled=${this._textDisabled}
                @keypress=${this.keyHandler}
                @click=${this.inputFocusHandler}
                @input=${t=this.inputFocusHandler,function(...i){e||(e=setTimeout(()=>{t.apply(this,i),e=void 0},500))}}
              ></textarea>
            </div>

            <ios-chat-svg 
              .data=${t8}
              @click=${this.sendBtnHandler}
            >
            </ios-chat-svg>
          </div>
        </section>
      </div>
    `}updated(t){t.has("_animatePlusBtn")&&(this._animatePlusBtn?(this.copyBtn.style.transform=`translate(150%, -${this.offsetHeight/4}px) scale(5)`,this.copyBtn.style.filter="blur(10px)",this.copyBtn.style.boxShadow="rgba(255, 255, 255, 0.5) 0px 0px 32px 1px"):(this.copyBtn.style.transform="",this.copyBtn.style.filter="",this.copyBtn.style.boxShadow=""))}send(){let t=this.textArea.value;this._msgQueue.forEach(({type:t,content:e})=>{t4.sendMessage("sender",this._id,{type:t,content:e})}),this._msgQueue=[],this.textArea.style.borderRadius="",[...this.textAreaWrapper.querySelectorAll(".img-wrapper")].forEach(t=>t.remove()),0===t.trim().length||t4.sendMessage("sender",this._id,{type:"text",content:t}),this.textArea.value="",this.textArea.style.height="",this.sendBtn.style.display="none",this.syncScroll()}syncScroll(){this.screen.dispatchEvent(new CustomEvent("input-active",{detail:{height:this.chatInput.offsetHeight}}))}keyHandler(t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),this.send())}inputFocusHandler(){this.textArea.style.height="";let t=this.textArea.scrollHeight;t>0&&(this.textArea.style.height=`${t}px`),this.sendBtn.style.display=this._msgQueue.length>0||this.textArea.value?"flex":"none",this.syncScroll()}sendBtnHandler(){this.send()}};ee.styles=[tC,p`
      :host {
        --theme-bg: #fff;
        --theme-color: #000;
        --message-color: #e9e9eb;
        --chat-input-bg: rgba(255, 255, 255, 0.7);
        --font-size: 16px;
        --border-radius: 20px;
        --input-bg: rgba(10, 10, 10, 0.75);
        --red: rgba(255, 69, 58);
        --blue: #39a7fc;
        --disable: #d5d5d5;
        --ease-out-back: cubic-bezier(0.34, 1.36, 0.44, 1);
        --textarea: rgba(255, 255, 255, 0.9);
        --scrollbar: #a5a5a5;
        --wave-fill: #000;
        --wave-blank: rgba(0, 0, 0, 0.3);
        --audio: rgba(200, 200, 200, 0.1);
        --audio-button: #edeaee;
        --audio-icon: rgba(0, 0, 0, 0.5);
        --audio-loading: rgba(222, 222, 222, 0.7);
      }

      :host([dark=true]) {
        --theme-bg: #000;
        --theme-color: #fff;
        --message-color: #26262a;
        --chat-input-bg: rgba(0, 0, 0, 0.6);
        --disable: #5c5c5c;
        --textarea: rgba(0, 0, 0, 0.5);
        --scrollbar: rgb(116 116 116);
        --wave-fill: #fff;
        --wave-blank: rgba(255, 255, 255, 0.5);
        --audio: rgba(255, 255, 255, 0.1);
        --audio-button: #313133;
        --audio-icon: rgba(255, 255, 255, 0.5);
        --audio-loading: rgba(0, 0, 0, 0.7);
      }

      :host {
        display: block;
        width: 100%;
        height: 100%;
        background-color: var(--theme-bg);
      }

      .root {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        position: relative;        

        overflow: hidden;
      }

      ios-chat-screen {
        padding: 0 6px;
        flex: 1;
        display: block;
      }

      .chat-input {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        display: flex;
        align-items: flex-end;
        padding: 10px 16px;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        background-color: var(--chat-input-bg);
        font-size: var(--font-size);
      }
      
      ios-chat-audio {
        display: none;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        height: 4.2em;
        background-color: var(--chat-input-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .btn-container {
        height: 2.4em;
        width: 2.4em;
        padding: .3em;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease 300ms;
        cursor: pointer;
        position: relative;
      }
      .btn-container:active {
        transform: scale(0.8);
        width: 1.9em;
      }
      .btn-container > button:not(.copy) {
        opacity: 0;
      }
      button {
        width: 100%;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--message-color);
        border-radius: 999px;
        border: none;
        cursor: pointer;
      }
      button ios-chat-svg {
        fill: #a2a2a4;
        width: 42%;
        height: 42%;
      }
      button.copy {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.8em;
        transition: var(--ease-out-back) 600ms;
      }

      .textarea-container {
        width: 100%;
        padding-left: 0.5em;
        position: relative;
        display: flex;
        align-items: center;
      }
      textarea {
        display: block;
        width: 100%;
        height: 2.4em;
        font-size: inherit;
        border-radius: var(--border-radius);
        padding: 0.6em 2.5em 0.6em 1em;
        line-height: 1.2em;
        color: var(--theme-color);
        outline: none;
        border: none;
        background-color: var(--textarea);
        caret-color: #1588fe;
        resize: none;
      }
      textarea:disabled {
        cursor: not-allowed;
        background-color: var(--disable);
      }
      textarea::-webkit-scrollbar {
        display: none;
      }
      textarea::placeholder {
        color: #444447;
      }

      .textarea-wrapper {
        width: 100%;
        box-shadow: 0 0 0 2px var(--message-color);
        border-radius: var(--border-radius);
      }
      .textarea-wrapper .img-wrapper {
        padding: .5em;
        width: fit-content;
        position: relative;
      }
      .textarea-wrapper .img-wrapper img {
        border-radius: 1em;
        width: 8em;
        user-select: none;
      }
      .textarea-wrapper .img-wrapper .close {
        width: 1.4em;
        aspect-ratio: 1/1;
        position: absolute;
        right: .8em;
        top: .8em;
        background-color: #7c7d7f;
        border: #fff 2px solid;
        border-radius: 999px;
        cursor: pointer;
        transition: ease 500ms;
      }
      .textarea-wrapper .img-wrapper .close:active {
        transform: scale(0.9);
      }
      .textarea-wrapper .img-wrapper .close::before {
        content: "";
        width: 2px;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        border-radius: 999px;
        background-color: #fff;
      }
      .textarea-wrapper .img-wrapper .close::after {
        content: "";
        width: 2px;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        border-radius: 999px;
        background-color: #fff;
      }

      .textarea-container ios-chat-svg {
        position: absolute;
        bottom: .4em;
        right: .4em;
        width: 1.6em;
        aspect-ratio: 1 / 1;
        fill: var(--blue);
        cursor: pointer;
        display: none;
      }
      .textarea-container ios-chat-svg:active {
        filter: brightness(0.8);
      }
    `],a([tP()],ee.prototype,"_id",2),a([tP()],ee.prototype,"_messageList",2),a([tP()],ee.prototype,"_textDisabled",2),a([tP()],ee.prototype,"_animatePlusBtn",2),a([tB("ios-chat-screen")],ee.prototype,"screen",2),a([tB(".chat-input")],ee.prototype,"chatInput",2),a([tB(".textarea-wrapper")],ee.prototype,"textAreaWrapper",2),a([tB("textarea")],ee.prototype,"textArea",2),a([tB(".textarea-container ios-chat-svg")],ee.prototype,"sendBtn",2),a([tB(".copy")],ee.prototype,"copyBtn",2),a([tB("ios-chat-audio")],ee.prototype,"audioElem",2),ee=a([tL("ios-chat")],ee);var ei=`<svg viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_3035)">
<path d="M3.84375 18.1797H20.1816C21.054 18.1797 21.7344 17.9274 22.2226 17.4229C22.7109 16.9183 22.955 16.1615 22.955 15.1524V5.12304C22.955 4.12044 22.6979 3.36524 22.1835 2.85742C21.6693 2.34961 20.9043 2.0957 19.8886 2.0957H10.5137C10.1816 2.0957 9.90169 2.05176 9.67382 1.96386C9.44596 1.87598 9.20833 1.72787 8.96093 1.51953L8.36523 1.03125C8.15039 0.848958 7.94368 0.705729 7.74511 0.601563C7.54655 0.497396 7.32845 0.422526 7.09082 0.376953C6.85319 0.33138 6.57487 0.308594 6.25586 0.308594H3.47265C2.61328 0.308594 1.94922 0.552734 1.48047 1.04102C1.01172 1.52929 0.777344 2.26497 0.777344 3.24804V15.1524C0.777344 16.1615 1.03288 16.9183 1.54395 17.4229C2.05501 17.9274 2.82161 18.1797 3.84375 18.1797ZM11.6892 12.0191C11.1873 12.0191 10.9363 11.7712 10.9363 11.2753C10.9363 11.2572 10.9363 11.2375 10.9363 11.2163C10.9363 11.1952 10.9363 11.1755 10.9363 11.1574C10.9363 10.6917 11.0482 10.3198 11.2719 10.0417C11.4957 9.76351 11.7738 9.5065 12.1064 9.27066C12.5176 8.98645 12.823 8.74306 13.0226 8.54048C13.2222 8.3379 13.3219 8.07637 13.3219 7.75587C13.3219 7.39909 13.1934 7.11186 12.9364 6.89416C12.6794 6.67647 12.3393 6.56762 11.9159 6.56762C11.7103 6.56762 11.5199 6.60088 11.3445 6.66739C11.1691 6.73391 11.0089 6.83067 10.8637 6.95765C10.7186 7.08465 10.5886 7.23885 10.4738 7.42026L10.3105 7.64702C10.2258 7.75587 10.1291 7.84506 10.0202 7.9146C9.91138 7.98415 9.77834 8.01892 9.62111 8.01892C9.46389 8.01892 9.31574 7.96299 9.17665 7.85111C9.03757 7.73924 8.96803 7.5805 8.96803 7.3749C8.96803 7.29629 8.97559 7.21768 8.9907 7.13907C9.00582 7.06046 9.02548 6.98487 9.04966 6.9123C9.1827 6.47691 9.50169 6.09897 10.0066 5.77847C10.5115 5.45798 11.1692 5.29773 11.9794 5.29773C12.5116 5.29773 13.003 5.38844 13.4534 5.56985C13.904 5.75126 14.2683 6.01884 14.5464 6.3726C14.8246 6.72636 14.9637 7.16326 14.9637 7.6833C14.9637 8.24568 14.8171 8.69015 14.5238 9.01669C14.2305 9.34323 13.8571 9.65466 13.4035 9.95096C13.077 10.1626 12.8351 10.3637 12.6779 10.5542C12.5207 10.7447 12.442 10.9729 12.442 11.239C12.442 11.2511 12.442 11.2677 12.442 11.2889C12.442 11.31 12.442 11.3297 12.442 11.3478C12.442 11.5353 12.3755 11.694 12.2425 11.8241C12.1095 11.9541 11.925 12.0191 11.6892 12.0191ZM11.662 14.8038C11.396 14.8038 11.1616 14.7101 10.959 14.5226C10.7565 14.3351 10.6552 14.1053 10.6552 13.8332C10.6552 13.5671 10.755 13.3373 10.9545 13.1438C11.1541 12.9503 11.3899 12.8536 11.662 12.8536C11.9402 12.8536 12.179 12.9488 12.3785 13.1393C12.5781 13.3298 12.6779 13.5611 12.6779 13.8332C12.6779 14.1053 12.5766 14.3351 12.374 14.5226C12.1714 14.7101 11.9341 14.8038 11.662 14.8038Z" fill="white" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2_3035">
<rect width="22.1777" height="17.998" fill="black" transform="translate(0.777344 0.308594)"/>
</clipPath>
</defs>
</svg>
`,es=class extends tm{constructor(){super(...arguments),this._width=0,this._height=0,this._loading=!0,this.success=!1,this.imgSrc=""}render(){return K`
      <div class="container">
        ${this._loading?K`<ios-chat-spinner></ios-chat-spinner>`:(()=>{switch(this.success){case!0:return K`<img
            draggable="false"
            src=${this.imgSrc}
            @click=${this.imgClickHandler}
          />`;case!1:return K`
            <div class="null">
              <ios-chat-svg .data=${ei}></ios-chat-svg>
            </div>
          `}})()}
      </div>

    `}async imgClickHandler(t){if(!this.success)return;let e=document.createElement("section");e.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      opacity: 0;
    `;let i=t.target,s=i.getBoundingClientRect();e.innerHTML=`
      <div class="frame">
        <img src=${this.imgSrc} />
      </div>
    `;let r=e.querySelector(".frame"),a=e.querySelector("img");r.style.cssText=`
      position: absolute;
      top: ${s.top}px;
      left: ${s.left}px;
      width: ${s.width}px;
      height: ${s.height}px;
      transition: ease 600ms;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `,a.style.cssText=`
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: clamp(20px, 2vw, 32px);
      transition: ease 300ms;
      user-select: none;
    `,document.body.append(e),e.style.opacity="1",await ty(1),e.style.transition="background ease 300ms, backdrop-filter ease 600ms",e.style.backdropFilter="blur(8px)",e.style.background="rgba(0, 0, 0, 0.7)";let o=window.innerWidth,n=window.innerHeight;r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.width=`${tv(this._width,0,.7*o)}px`,r.style.height=`${tv(this._height,0,.7*n)}px`,await ty(600);let l=!1;a.addEventListener("mousedown",()=>{l=!0,a.style.transform="scale(0.96)"}),a.addEventListener("mouseup",async()=>{let t=i.getBoundingClientRect();a.style.transform="scale(1)",l&&(a.style.userSelect="none",r.style.transform="",r.style.top=`${t.top}px`,r.style.left=`${t.left}px`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`,e.style.background="rgba(0, 0, 0, 0)",e.style.backdropFilter="blur(0px)",await ty(600),e.remove())}),a.addEventListener("mousemove",()=>{l=!1,a.style.transform="scale(1)"}),a.addEventListener("mouseleave",()=>{l=!1,a.style.transform="scale(1)"})}fireLoaded(){this.dispatchEvent(new CustomEvent("loaded",{bubbles:!0,composed:!0,detail:this.success}))}updated(t){if(t.has("imgSrc")){this._loading=!0;let t=new Image;t.onload=()=>{this._width=t.naturalWidth,this._height=t.naturalHeight,this._loading=!1,this.success=!0,this.fireLoaded()},t.onerror=t=>{this._loading=!1,this.success=!1,this.fireLoaded()},t.src=this.imgSrc}}};es.styles=[tC,p`
    :host {
      display: block;
      width: 100%;
    }
    img {
      display: block;
      border-radius: var(--border-radius);
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
      cursor: pointer;
    }

    ios-chat-spinner {
      display: block;
      width: 50px;
      height: 40px;
      padding: 0.2em 1em;
    }

    .container {
      width: 100%;
      position: relative;
    }

    .null {
      width: min(10vw, 160px);
      min-width: 60px;
      aspect-ratio: 1 / 1; 
      display: flex;
      align-items: center;
      justify-content: center
    }
    .null ios-chat-svg {
      width: var(--font-size);
    }
  `],a([tP()],es.prototype,"_loading",2),a([tT({type:Boolean,reflect:!0})],es.prototype,"success",2),a([tT()],es.prototype,"imgSrc",2),es=a([tL("ios-chat-img")],es);var er=`<svg width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M176.777 0C203.927 0 217.803 0 232.283 4.525C248.272 10.2567 260.942 22.9267 266.673 38.915C271.5 53.6967 271.5 67.2717 271.5 94.7233V176.777C271.5 203.927 271.5 217.803 266.975 232.283C261.243 248.272 248.573 260.942 232.585 266.673C217.803 271.5 204.228 271.5 176.777 271.5H94.7233C67.5733 271.5 53.6967 271.5 39.2167 266.975C23.2283 260.942 10.5583 248.272 4.525 232.283C0 217.803 0 204.228 0 176.777V94.7233C0 67.5733 0 53.6967 4.525 39.2167C10.5583 23.2283 23.2283 10.5583 39.2167 4.525C53.6967 0 67.2717 0 94.7233 0H176.777Z" fill="white"/>
<path d="M98.6198 103.45C101.005 103.45 103.125 103.715 105.245 104.245C104.715 102.125 104.45 99.7401 104.45 97.6201V63.7001C104.45 62.1101 104.715 60.7851 104.715 59.4601C92.2598 50.1851 74.5048 51.2451 63.3748 62.3751C52.2448 73.5051 51.1848 91.2601 60.4598 103.715C61.7848 103.45 63.3748 103.45 64.6998 103.45H98.6198Z" fill="#FF7E7B"/>
<path d="M134.13 129.155C132.54 129.155 131.215 128.89 129.625 128.625C129.89 129.95 130.155 131.54 130.155 133.13C130.95 132.6 131.48 132.07 132.275 131.275C132.805 130.48 133.335 129.95 134.13 129.155Z" fill="#FF6F3F"/>
<path d="M132.275 86.2249C133.865 87.8149 135.455 89.6699 136.515 91.5249C137.84 89.6699 139.165 87.8149 140.755 86.2249L164.605 62.3749C165.665 61.3149 166.46 60.5199 167.52 59.7249C165.93 44.0899 152.415 31.8999 136.25 31.8999C120.085 31.8999 106.835 43.8249 104.715 59.4599C106.04 60.2549 107.1 61.3149 108.16 62.3749L132.275 86.2249Z" fill="#FFAC00"/>
<path d="M138.9 129.155C138.105 128.095 137.045 127.035 136.515 125.71C135.72 126.77 134.925 128.095 134.13 129.155C134.925 129.155 135.72 129.155 136.25 129.155C137.045 129.42 138.105 129.155 138.9 129.155Z" fill="#FFC300"/>
<path d="M104.45 97.62C104.45 100.005 104.715 102.125 105.245 104.245C117.435 106.895 126.975 116.435 129.625 128.625C130.95 128.89 132.54 129.155 134.13 129.155C134.925 128.095 135.985 127.035 136.515 125.71C129.89 115.375 129.89 101.86 136.515 91.525C135.19 89.67 133.865 87.815 132.275 86.225L108.425 62.375C107.365 61.315 106.04 60.255 104.98 59.46C104.715 60.785 104.45 62.11 104.45 63.7V97.62Z" fill="#FF3400"/>
<path d="M168.05 97.62C168.05 100.005 167.785 102.125 167.255 104.245C169.375 103.715 171.76 103.45 173.88 103.45H207.8C209.39 103.45 210.98 103.715 212.57 103.98C221.845 91.525 221.05 73.77 209.655 62.375C198.26 50.98 180.24 50.185 167.785 59.725C168.05 61.05 168.05 62.375 168.05 63.7V97.62Z" fill="#F0EA0D"/>
<path d="M142.345 132.6C142.345 131.275 142.61 129.95 142.875 128.625C141.55 128.89 140.225 129.155 138.9 129.155C139.43 129.95 140.225 130.48 140.755 131.275C141.285 131.805 141.815 132.07 142.345 132.6Z" fill="#DAE411"/>
<path d="M140.755 86.2251C139.165 87.8151 137.575 89.6701 136.515 91.5251C143.14 101.86 143.14 115.375 136.515 125.71C137.31 126.77 138.105 128.095 138.9 129.155C140.225 129.155 141.55 128.89 142.875 128.625C145.525 116.435 155.065 106.895 167.255 104.245C167.785 102.125 168.05 99.7401 168.05 97.6201V63.7001C168.05 62.3751 168.05 61.0501 167.785 59.7251C166.725 60.5201 165.665 61.3151 164.87 62.3751L140.755 86.2251Z" fill="#EAA200"/>
<path d="M136.515 91.5249C129.89 101.86 129.89 115.375 136.515 125.71C143.14 115.375 143.14 102.125 136.515 91.5249Z" fill="#E63300"/>
<path d="M142.08 135.25C142.08 136.31 142.08 137.37 142.345 138.43C143.67 137.37 144.995 136.31 146.32 135.515C144.995 134.72 143.67 133.66 142.345 132.6C142.345 133.395 142.08 134.455 142.08 135.25Z" fill="#83D567"/>
<path d="M239.6 135.25C239.6 119.35 227.94 106.1 212.57 103.98C211.775 105.305 210.715 106.365 209.655 107.425L185.805 131.275C184.215 132.865 182.36 134.455 180.505 135.515C182.36 136.84 184.215 138.165 185.805 139.755L209.655 163.605C210.715 164.665 211.51 165.46 212.305 166.52C227.675 164.4 239.6 151.415 239.6 135.25Z" fill="#A2DD50"/>
<path d="M173.88 103.45C171.495 103.45 169.375 103.715 167.255 104.245C164.605 116.435 155.065 125.975 142.875 128.625C142.61 129.95 142.345 131.275 142.345 132.6C143.67 133.66 144.995 134.72 146.32 135.515C156.655 128.89 170.17 128.89 180.505 135.515C182.36 134.19 184.215 132.865 185.805 131.275L209.655 107.425C210.715 106.365 211.775 105.04 212.57 103.98C210.98 103.715 209.39 103.45 207.8 103.45H173.88Z" fill="#8BC100"/>
<path d="M167.255 104.245C155.065 106.895 145.525 116.435 142.875 128.625C155.065 125.975 164.605 116.435 167.255 104.245Z" fill="#8D8800"/>
<path d="M173.88 167.05C171.495 167.05 169.375 166.785 167.255 166.255C167.785 168.375 168.05 170.76 168.05 172.88V206.8C168.05 208.39 167.785 209.715 167.785 211.305C180.24 221.11 198.26 220.315 209.92 208.655C221.315 197.26 222.375 179.24 212.57 166.52C210.715 166.785 209.39 167.05 207.8 167.05H173.88Z" fill="#44C899"/>
<path d="M139.43 141.345C140.49 141.345 141.815 141.61 142.875 141.875C142.61 140.815 142.345 139.49 142.345 138.43C141.815 138.96 141.285 139.225 140.755 139.755C140.225 140.285 139.96 140.815 139.43 141.345Z" fill="#4EBFBD"/>
<path d="M185.805 139.755C184.215 138.165 182.36 136.575 180.505 135.515C170.17 142.14 156.655 142.14 146.32 135.515C144.995 136.31 143.67 137.37 142.345 138.43C142.345 139.49 142.61 140.815 142.875 141.875C155.065 144.525 164.605 154.065 167.255 166.255C169.375 166.785 171.76 167.05 173.88 167.05H207.8C209.39 167.05 210.715 166.785 212.305 166.785C211.51 165.725 210.715 164.665 209.655 163.87L185.805 139.755Z" fill="#00A33F"/>
<path d="M146.32 135.515C156.655 142.14 170.17 142.14 180.505 135.515C169.905 128.89 156.655 128.89 146.32 135.515Z" fill="#008D08"/>
<path d="M133.6 141.345C134.66 142.67 135.72 143.995 136.515 145.32C137.31 143.995 138.37 142.67 139.43 141.345C138.37 141.345 137.31 141.08 136.25 141.08C135.455 141.08 134.395 141.345 133.6 141.345Z" fill="#859ED5"/>
<path d="M140.755 184.805C139.165 183.215 137.575 181.36 136.515 179.505C135.19 181.36 133.865 183.215 132.275 184.805L108.425 208.655C107.365 209.715 106.04 210.775 104.98 211.57C107.1 226.94 120.35 238.6 136.25 238.6C152.415 238.6 165.4 226.675 167.785 211.305C166.725 210.51 165.665 209.715 164.87 208.655L140.755 184.805Z" fill="#6EACDF"/>
<path d="M168.05 172.88C168.05 170.495 167.785 168.375 167.255 166.255C155.065 163.605 145.525 154.065 142.875 141.875C141.815 141.61 140.49 141.345 139.43 141.345C138.37 142.67 137.31 143.995 136.515 145.32C143.14 155.655 143.14 169.17 136.515 179.505C137.84 181.36 139.165 183.215 140.755 184.805L164.605 208.655C165.665 209.715 166.46 210.51 167.52 211.305C167.785 209.715 167.785 208.39 167.785 206.8V172.88H168.05Z" fill="#1D7B97"/>
<path d="M167.255 166.255C164.605 154.065 155.065 144.525 142.875 141.875C145.525 154.065 155.065 163.605 167.255 166.255Z" fill="#00683A"/>
<path d="M130.155 137.9C130.155 139.225 129.89 140.55 129.625 141.875C130.95 141.61 132.275 141.345 133.6 141.345C133.07 140.815 132.805 140.285 132.275 139.755C131.48 139.225 130.95 138.695 130.155 137.9Z" fill="#BE85C1"/>
<path d="M104.45 172.88C104.45 170.495 104.715 168.375 105.245 166.255C103.125 166.785 100.74 167.05 98.6199 167.05H64.6999C63.3749 167.05 62.0499 167.05 60.7249 166.785C50.9199 179.24 51.9799 197.26 63.3749 208.655C74.7699 220.05 92.5249 220.845 104.98 211.57C104.715 209.98 104.45 208.39 104.45 206.8V172.88Z" fill="#AB86C4"/>
<path d="M132.275 184.805C133.865 183.215 135.455 181.36 136.515 179.505C129.89 169.17 129.89 155.655 136.515 145.32C135.72 143.995 134.66 142.67 133.6 141.345C132.275 141.345 130.95 141.61 129.625 141.875C126.975 154.065 117.435 163.605 105.245 166.255C104.715 168.375 104.45 170.76 104.45 172.88V206.8C104.45 208.39 104.715 209.98 104.98 211.57C106.305 210.775 107.365 209.715 108.425 208.655L132.275 184.805Z" fill="#5D53A6"/>
<path d="M136.515 179.505C143.14 169.17 143.14 155.655 136.515 145.32C129.89 155.655 129.89 168.905 136.515 179.505Z" fill="#243F76"/>
<path d="M130.155 133.13C129.095 133.925 128.035 134.985 126.71 135.515C127.77 136.31 129.095 137.105 130.155 137.9C130.155 137.105 130.42 136.045 130.42 135.25C130.42 134.455 130.155 133.66 130.155 133.13Z" fill="#F1648A"/>
<path d="M87.2249 139.755C88.8149 138.165 90.6699 136.575 92.5249 135.515C90.6699 134.19 88.8149 132.865 87.2249 131.275L63.3749 107.425C62.3149 106.365 61.2549 105.04 60.4599 103.98C44.8249 105.835 32.8999 119.085 32.8999 135.25C32.8999 151.415 45.0899 164.93 60.7249 166.785C61.5199 165.725 62.3149 164.665 63.3749 163.87L87.2249 139.755Z" fill="#E275A8"/>
<path d="M87.225 131.275C88.815 132.865 90.67 134.455 92.525 135.515C102.86 128.89 116.375 128.89 126.71 135.515C127.77 134.72 129.095 133.925 130.155 133.13C130.155 131.54 129.89 130.215 129.625 128.625C117.435 125.975 107.895 116.435 105.245 104.245C103.125 103.715 100.74 103.45 98.62 103.45H64.7C63.11 103.45 61.785 103.715 60.46 103.715C61.255 105.04 62.315 106.1 63.375 107.16L87.225 131.275Z" fill="#E40017"/>
<path d="M105.245 104.245C107.895 116.435 117.435 125.975 129.625 128.625C126.975 116.435 117.435 106.895 105.245 104.245Z" fill="#E60000"/>
<path d="M98.6201 167.05C101.005 167.05 103.125 166.785 105.245 166.255C107.895 154.065 117.435 144.525 129.625 141.875C129.89 140.55 130.155 139.225 130.155 137.9C129.095 137.105 128.035 136.045 126.71 135.515C116.375 142.14 102.86 142.14 92.5251 135.515C90.6701 136.84 88.8151 138.165 87.2251 139.755L63.3751 163.605C62.3151 164.665 61.5201 165.46 60.7251 166.52C62.0501 167.05 63.3751 167.05 64.7001 167.05H98.6201Z" fill="#9F3174"/>
<path d="M92.5249 135.515C102.86 142.14 116.375 142.14 126.71 135.515C116.375 128.89 103.125 128.89 92.5249 135.515Z" fill="#9F0017"/>
<path d="M105.245 166.255C117.435 163.605 126.975 154.065 129.625 141.875C117.435 144.525 107.895 154.065 105.245 166.255Z" fill="#561E5D"/>
</svg>
`,ea=`<svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_108_9)">
<path d="M9.95728 20.08C11.318 20.08 12.5989 19.8196 13.8 19.2988C15.0012 18.7779 16.0608 18.0585 16.9787 17.1406C17.8967 16.2226 18.6161 15.163 19.1369 13.9619C19.6578 12.7607 19.9182 11.4798 19.9182 10.1191C19.9182 8.75843 19.6578 7.47751 19.1369 6.27634C18.6161 5.07516 17.8967 4.01559 16.9787 3.09763C16.0608 2.17966 14.9996 1.46026 13.7951 0.939423C12.5907 0.418589 11.3082 0.158173 9.94751 0.158173C8.58683 0.158173 7.30591 0.418589 6.10474 0.939423C4.90356 1.46026 3.84562 2.17966 2.93091 3.09763C2.01619 4.01559 1.29842 5.07516 0.777588 6.27634C0.256755 7.47751 -0.00366211 8.75843 -0.00366211 10.1191C-0.00366211 11.4798 0.256755 12.7607 0.777588 13.9619C1.29842 15.163 2.01782 16.2226 2.93579 17.1406C3.85376 18.0585 4.91333 18.7779 6.1145 19.2988C7.31567 19.8196 8.5966 20.08 9.95728 20.08Z" fill="#FD6A46" fill-opacity="0.85"/>
<path d="M4.84985 11.6035C4.68058 11.6035 4.53735 11.5449 4.42016 11.4277C4.30298 11.3105 4.24438 11.1673 4.24438 10.998V9.22068C4.24438 9.05791 4.30298 8.91793 4.42016 8.80075C4.53735 8.68356 4.68058 8.62497 4.84985 8.62497C5.01912 8.62497 5.16235 8.68356 5.27953 8.80075C5.39672 8.91793 5.45531 9.05791 5.45531 9.22068V10.998C5.45531 11.1673 5.39672 11.3105 5.27953 11.4277C5.16235 11.5449 5.01912 11.6035 4.84985 11.6035ZM6.89086 14.0254C6.72159 14.0254 6.57836 13.9668 6.46117 13.8496C6.34399 13.7324 6.28539 13.5892 6.28539 13.4199V6.7988C6.28539 6.63604 6.34399 6.49606 6.46117 6.37888C6.57836 6.26169 6.72159 6.2031 6.89086 6.2031C7.06664 6.2031 7.21313 6.26169 7.33031 6.37888C7.44751 6.49606 7.5061 6.63604 7.5061 6.7988V13.4199C7.5061 13.5892 7.44751 13.7324 7.33031 13.8496C7.21313 13.9668 7.06664 14.0254 6.89086 14.0254ZM8.94164 16.7207C8.76586 16.7207 8.62101 16.6621 8.50707 16.5449C8.39314 16.4277 8.33617 16.278 8.33617 16.0957V4.14255C8.33617 3.96025 8.39477 3.81051 8.51195 3.69333C8.62915 3.57614 8.77238 3.51755 8.94164 3.51755C9.11092 3.51755 9.25415 3.57614 9.37133 3.69333C9.48852 3.81051 9.54711 3.96025 9.54711 4.14255V16.0957C9.54711 16.2714 9.48852 16.4195 9.37133 16.54C9.25415 16.6605 9.11092 16.7207 8.94164 16.7207ZM10.9729 13.2246C10.8037 13.2246 10.6621 13.166 10.5481 13.0488C10.4342 12.9316 10.3772 12.7884 10.3772 12.6191V7.60935C10.3772 7.44007 10.4342 7.29684 10.5481 7.17966C10.6621 7.06247 10.8037 7.00388 10.9729 7.00388C11.1487 7.00388 11.2951 7.06247 11.4123 7.17966C11.5295 7.29684 11.5881 7.44007 11.5881 7.60935V12.6191C11.5881 12.7884 11.5295 12.9316 11.4123 13.0488C11.2951 13.166 11.1487 13.2246 10.9729 13.2246ZM13.0236 15.3046C12.8479 15.3046 12.7014 15.246 12.5842 15.1289C12.467 15.0117 12.4084 14.8685 12.4084 14.6992V5.52927C12.4084 5.35999 12.467 5.21676 12.5842 5.09958C12.7014 4.98239 12.8479 4.9238 13.0236 4.9238C13.1929 4.9238 13.3361 4.98239 13.4533 5.09958C13.5705 5.21676 13.6291 5.35999 13.6291 5.52927V14.6992C13.6291 14.8685 13.5705 15.0117 13.4533 15.1289C13.3361 15.246 13.1929 15.3046 13.0236 15.3046ZM15.0744 12.1015C14.8987 12.1015 14.7522 12.0445 14.635 11.9306C14.5178 11.8167 14.4592 11.6751 14.4592 11.5058V8.72263C14.4592 8.55335 14.5178 8.41175 14.635 8.29782C14.7522 8.18389 14.8987 8.12693 15.0744 8.12693C15.2437 8.12693 15.3853 8.18389 15.4992 8.29782C15.6132 8.41175 15.6701 8.55335 15.6701 8.72263V11.5058C15.6701 11.6751 15.6132 11.8167 15.4992 11.9306C15.3853 12.0445 15.2437 12.1015 15.0744 12.1015Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_108_9">
<rect width="19.9219" height="19.9316" fill="white" transform="translate(-0.00366211 0.148407)"/>
</clipPath>
</defs>
</svg>
`,eo=`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_160_8)">
<path d="M25 49.9757C28.4151 49.9757 31.6299 49.3223 34.6445 48.0157C37.6593 46.7092 40.3186 44.9046 42.6224 42.6017C44.9264 40.299 46.732 37.641 48.0391 34.6277C49.3464 31.6145 50 28.4012 50 24.9878C50 21.5744 49.3464 18.3611 48.0391 15.3479C46.732 12.3347 44.9264 9.67665 42.6224 7.37384C40.3186 5.07105 37.6552 3.26638 34.6322 1.95983C31.6094 0.653276 28.3905 0 24.9755 0C21.5604 0 18.3456 0.653276 15.3309 1.95983C12.3162 3.26638 9.66093 5.07105 7.36519 7.37384C5.06944 9.67665 3.26797 12.3347 1.96078 15.3479C0.653594 18.3611 0 21.5744 0 24.9878C0 28.4012 0.653594 31.6145 1.96078 34.6277C3.26797 37.641 5.07352 40.299 7.37743 42.6017C9.68136 44.9046 12.3407 46.7092 15.3554 48.0157C18.3701 49.3223 21.5849 49.9757 25 49.9757Z" fill="#FF9500"/>
<path d="M18.5784 40.1521C18.219 40.1521 17.9003 40.0214 17.6226 39.76C17.3448 39.4987 17.2059 39.1803 17.2059 38.8047C17.2059 38.4453 17.3448 38.1268 17.6226 37.8492C17.9003 37.5716 18.219 37.4328 18.5784 37.4328H23.652V34.8848C21.969 34.7052 20.4984 34.1826 19.2402 33.3169C17.982 32.4515 17.0016 31.3368 16.299 29.973C15.5964 28.6093 15.2451 27.0701 15.2451 25.3552V22.097C15.2451 21.7541 15.3799 21.4479 15.6495 21.1784C15.9191 20.9089 16.2337 20.7742 16.5932 20.7742C16.9526 20.7742 17.2631 20.9089 17.5245 21.1784C17.786 21.4479 17.9167 21.7541 17.9167 22.097V25.3552C17.9167 26.7271 18.219 27.9438 18.8235 29.0054C19.4281 30.0671 20.2614 30.9 21.3235 31.5042C22.3856 32.1085 23.6111 32.4106 25 32.4106C26.3889 32.4106 27.6185 32.1085 28.6888 31.5042C29.759 30.9 30.5963 30.0671 31.2009 29.0054C31.8056 27.9438 32.1079 26.7271 32.1079 25.3552V22.097C32.1079 21.7541 32.2386 21.4479 32.4999 21.1784C32.7615 20.9089 33.0719 20.7742 33.4313 20.7742C33.7909 20.7742 34.1055 20.9089 34.375 21.1784C34.6446 21.4479 34.7793 21.7541 34.7793 22.097V25.3552C34.7793 27.0701 34.4281 28.6093 33.7255 29.973C33.0229 31.3368 32.0425 32.4475 30.7842 33.3049C29.5262 34.1623 28.0638 34.689 26.3971 34.8848V37.4328H31.4461C31.8219 37.4328 32.1446 37.5716 32.4141 37.8492C32.6838 38.1268 32.8187 38.4453 32.8187 38.8047C32.8187 39.1639 32.6798 39.4783 32.4021 39.7477C32.1241 40.0173 31.8055 40.1521 31.4461 40.1521H18.5784ZM25 29.8629C23.7582 29.8629 22.7492 29.4342 21.973 28.5767C21.1969 27.7193 20.8088 26.6455 20.8088 25.3552V14.5272C20.8088 13.2533 21.1969 12.1958 21.973 11.3547C22.7492 10.5137 23.7582 10.0931 25 10.0931C26.2418 10.0931 27.2508 10.5137 28.027 11.3547C28.8032 12.1958 29.1913 13.2533 29.1913 14.5272V25.3552C29.1913 26.6455 28.8032 27.7193 28.027 28.5767C27.2508 29.4342 26.2418 29.8629 25 29.8629Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_160_8">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>
`,en=class extends tm{constructor(){super(...arguments),this.roomId=null,this.open=!1}render(){return K`
      <section class=${this.open?"open":""}>
        <ul @click=${this.clickHandler}>
          <li>
            <label for="image">
              <ios-chat-svg .data=${er}></ios-chat-svg>
              <p>Photos</p>
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              style="display: none;"
              @change=${t=>{let e=t.target;if(!this.roomId||!e.files)return;let i=e.files[0];t4.sendNonTextInput(this.roomId,{content:URL.createObjectURL(i),type:"img"}),this.dispatchEvent(new Event("click")),e.value=""}}
            />
          </li>

          <li>
            <label for="record" @click=${()=>{this.roomId&&t4.sendNonTextInput(this.roomId,{content:"record",type:"audio"})}}>
              <ios-chat-svg .data=${eo}></ios-chat-svg>
              <p>Record</p>
            </label>
            <input id="record" style="display: none;"/>
          </li>

          <li>
            <label for="audio">
              <ios-chat-svg .data=${ea}></ios-chat-svg>
              <p>Audio</p>
            </label>
            <input
              type="file"
              id="audio"
              accept="audio/*"
              style="display: none;"
              @change=${t=>{let e=t.target;if(!this.roomId||!e.files)return;let i=e.files[0];t4.sendNonTextInput(this.roomId,{content:URL.createObjectURL(i),type:"audio"}),this.dispatchEvent(new Event("click")),e.value=""}}
            />
          </li>
        </ul>
      </section>
    `}clickHandler(t){"INPUT"!==t.target.tagName&&t.stopPropagation()}};en.styles=[tC,p`
      section {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: var(--theme-color);
        transition: ease 500ms;

        z-index: -1;
      }
      section.open {
        z-index: 999;
        background-color: var(--chat-input-bg);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
      }

      ul {
        width: 100%;
        position: absolute;
        bottom: 32px;
        left: 0;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        font-size: 20px;
        transition: var(--ease-out-back) 600ms;
        filter: blur(40px);
        transform: translate(calc(-46% + 16px), 50%) scale(0);
      }
      .open ul {
        filter: blur(0px);
        transform: translate(16px, 10px) scale(1);
      }
      li {
        display: block;
        width: fit-content;
        transition: ease 300ms;
      }
      label {
        display: flex;
        align-items: center;
        font-weight: 300;
        cursor: pointer;
        padding: 0.5em;
      }
      li:hover {
        transform: scale(1.05);
      }
      li:active {
        transform: scale(0.95);
      }
      ul ios-chat-svg {
        width: 36px;
        overflow: hidden;
        border-radius: 999px;
        aspect-ratio: 1/1;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
      }
      p {
        margin-left: 1em;
      }
    `],a([tT()],en.prototype,"roomId",2),a([tT({type:Boolean})],en.prototype,"open",2),a([tB("ul")],en.prototype,"ulElem",2),en=a([tL("ios-chat-detail")],en);var el=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_161_2)">
<path d="M0.628522 31.3759C0.901127 31.6479 1.22184 31.8319 1.59065 31.928C1.95947 32.024 2.3323 32.024 2.70914 31.928C3.08597 31.8319 3.41068 31.6479 3.68328 31.3759L15.9985 19.0607L28.3379 31.3759C28.6105 31.6479 28.9312 31.8319 29.3 31.928C29.6688 32.024 30.0376 32.024 30.4064 31.928C30.7752 31.8319 31.0959 31.6479 31.3685 31.3759C31.6571 31.1038 31.8456 30.7797 31.9337 30.4036C32.0221 30.0275 32.0221 29.6554 31.9337 29.2874C31.8456 28.9193 31.6571 28.5991 31.3685 28.3269L19.0533 16.012L31.3685 3.72091C31.6571 3.44885 31.8456 3.12878 31.9337 2.76069C32.0221 2.39259 32.0221 2.02049 31.9337 1.6444C31.8456 1.26831 31.6571 0.944227 31.3685 0.67216C31.0959 0.400092 30.7752 0.216046 30.4064 0.120022C30.0376 0.0239982 29.6688 0.0239982 29.3 0.120022C28.9312 0.216046 28.6105 0.400092 28.3379 0.67216L15.9985 12.9872L3.68328 0.67216C3.41068 0.400092 3.08597 0.216046 2.70914 0.120022C2.3323 0.0239982 1.95947 0.0239982 1.59065 0.120022C1.22184 0.216046 0.901127 0.400092 0.628522 0.67216C0.339883 0.944227 0.151466 1.26831 0.0632705 1.6444C-0.0249248 2.02049 -0.0209158 2.39259 0.0752973 2.76069C0.17151 3.12878 0.355919 3.44885 0.628522 3.72091L12.9679 16.012L0.628522 28.3269C0.355919 28.5991 0.17151 28.9193 0.0752973 29.2874C-0.0209158 29.6554 -0.0249248 30.0275 0.0632705 30.4036C0.151466 30.7797 0.339883 31.1038 0.628522 31.3759Z" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_161_2">
<rect width="32" height="32" fill="transparent"/>
</clipPath>
</defs>
</svg>
`,eh=`<svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.85716 40C3.33334 40 3.78572 39.9174 4.2143 39.7523C4.64287 39.5872 5.09525 39.363 5.57145 39.0798L33.3335 23.1741C34.3334 22.592 35.0278 22.0768 35.4168 21.6284C35.8056 21.18 36 20.6412 36 20.0119C36 19.3825 35.8056 18.8437 35.4168 18.3953C35.0278 17.9469 34.3334 17.4396 33.3335 16.8732L5.57145 0.943968C5.09525 0.676513 4.64287 0.46019 4.2143 0.294998C3.78572 0.129807 3.33334 0.0472107 2.85716 0.0472107C1.98414 0.0472107 1.28969 0.353996 0.773811 0.967568C0.257937 1.58114 0 2.39923 0 3.42186V36.6019C0 37.6244 0.257937 38.4464 0.773811 39.068C1.28969 39.6893 1.98414 40 2.85716 40Z" fill-opacity="0.85"/>
</svg>
`,ed=`<svg width="82" height="110" viewBox="0 0 82 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_164_18)">
<path d="M8.93933 110H24.2639C27.1764 110 29.3945 109.235 30.918 107.704C32.4414 106.173 33.2032 103.922 33.2032 100.951V8.98098C33.2032 5.91979 32.4414 3.65767 30.918 2.1946C29.3945 0.731533 27.1764 0 24.2639 0H8.93933C5.98195 0 3.75272 0.765295 2.25163 2.29589C0.750543 3.82648 0 6.05484 0 8.98098V100.951C0 103.922 0.750543 106.173 2.25163 107.704C3.75272 109.235 5.98195 110 8.93933 110ZM57.8031 110H73.0602C76.0179 110 78.2471 109.235 79.748 107.704C81.2493 106.173 82 103.922 82 100.951V8.98098C82 5.91979 81.2493 3.65767 79.748 2.1946C78.2471 0.731533 76.0179 0 73.0602 0H57.8031C54.8458 0 52.6053 0.765295 51.0818 2.29589C49.5583 3.82648 48.7965 6.05484 48.7965 8.98098V100.951C48.7965 103.922 49.5583 106.173 51.0818 107.704C52.6053 109.235 54.8458 110 57.8031 110Z" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_164_18">
<rect width="82" height="110" />
</clipPath>
</defs>
</svg>
`,ec=`<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_162_10)">
<path d="M0.659912 13.7598C0.659912 14.4369 0.853597 14.9658 1.24097 15.3467C1.62834 15.7276 2.16382 15.918 2.84741 15.918H14.3806C15.0707 15.918 15.6078 15.7276 15.9919 15.3467C16.376 14.9658 16.5681 14.4369 16.5681 13.7598V2.1582C16.5681 1.47461 16.376 0.944009 15.9919 0.566406C15.6078 0.188802 15.0707 0 14.3806 0H2.84741C2.16382 0 1.62834 0.188802 1.24097 0.566406C0.853597 0.944009 0.659912 1.47461 0.659912 2.1582V13.7598Z" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_162_10">
<rect width="15.9082" height="15.9277" transform="translate(0.659912)"/>
</clipPath>
</defs>
</svg>
`,ep=class{constructor({start:t,resume:e,pause:i,end:s}){this.initialized=!1,this.recordedChunks=[],this.duration=0,this.prevTime=0,this.trackLifeCycle=!1,this.url="",this.ctx=new AudioContext,this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=128,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0}).then(r=>{this.ctx.createMediaStreamSource(r).connect(this.analyser),this.mediaRecorder=new MediaRecorder(r),this.mediaRecorder.ondataavailable=t=>{t.data.size>0&&this.recordedChunks.push(t.data)},this.mediaRecorder.onstart=()=>{this.initialized=!0,this.trackLifeCycle=!0,requestAnimationFrame(this.trackTime.bind(this)),t&&t()},this.mediaRecorder.onpause=()=>{if(!i)return;let t=new Blob(this.recordedChunks,{type:"audio/webm; codecs=opus"});this.url=URL.createObjectURL(t),this.trackLifeCycle=!1,i(this.url)},this.mediaRecorder.onresume=()=>{URL.revokeObjectURL(this.url),this.trackLifeCycle=!0,this.prevTime=Date.now(),requestAnimationFrame(this.trackTime.bind(this)),e&&e()},this.mediaRecorder.onstop=()=>{if(!s)return;let t=new Blob(this.recordedChunks,{type:"audio/webm; codecs=opus"});this.url=URL.createObjectURL(t),this.trackLifeCycle=!1,s(this.url)},this.prevTime=Date.now(),this.mediaRecorder.start(100)}).catch(t=>{console.error(t)})}trackTime(){let t=Date.now();t-this.prevTime>=1e3&&(this.duration+=(t-this.prevTime)/1e3,this.prevTime=t),this.trackLifeCycle&&requestAnimationFrame(this.trackTime.bind(this))}getVolume(){this.analyser.getByteTimeDomainData(this.dataArray);let t=[...this.dataArray].map(t=>t/128-1),e=0;for(let i=0;i<t.length;i++)e+=t[i]*t[i];return Math.sqrt(e/t.length)}},eu=class extends tm{constructor(){super(...arguments),this._lifeCycle=!1,this._mode="record",this._playing=!1,this._loading=!1,this.src="",this.resizeHandler=tb(()=>this.syncCanvasSize(),500)}render(){return K`
      <audio src=${this.src.startsWith("blob:")?this.src:""}></audio>

      <section>
        <div class="cancel-container">
          <button class="cancel" @click=${()=>this.endAudioTag()}>
            <ios-chat-svg .data=${el}></ios-chat-svg>
          </button>
        </div>

        <div class="audio-container">
          <div class="audio-wrapper">
            <button class="play ${this._playing?"playing":""}" @click=${()=>{this.audio.paused?t7.play(this.audio):this.audio.pause()}}>
              <ios-chat-svg class="play-icon" .data=${eh}></ios-chat-svg>
              <ios-chat-svg class="pause-icon" .data=${ed}></ios-chat-svg>
            </button>

            <ios-chat-wave
              .mode=${"record"===this._mode?"dynamic":"static"}
            ></ios-chat-wave>

            <div class="time" @click=${()=>{this.audio.paused||this.audio.pause(),this._record?.mediaRecorder?.state==="paused"&&this._record?.mediaRecorder?.resume()}}></div>

            <button class="send" @click=${()=>{switch(this.audio.paused||this.audio.pause(),this._mode){case"record":if(!this._record?.initialized)return;this._record?.mediaRecorder?.state==="recording"&&this._record?.mediaRecorder?.pause();break;case"file":this._record?.mediaRecorder?.stop(),this.endAudioTag(this.src)}}}>
              <ios-chat-svg class="send-icon" .data=${t8}></ios-chat-svg>
              <ios-chat-svg class="stop-icon" .data=${ec}></ios-chat-svg>
            </button>

            ${this._loading?K`
              <div class="loading">
                <ios-chat-spinner></ios-chat-spinner>
              </div>
            `:""}
          </div>
        </div>
      </section>
    `}endAudioTag(t){delete this._record,this._playing=!1,this.dispatchEvent(new CustomEvent("audio-end",{detail:t})),this.wave.dispatchEvent(new CustomEvent("clear-wave"))}syncCanvasSize(){let t=window.getComputedStyle(this.wave);this.wave.setAttribute("width",tk(t.width).toString()),this.wave.setAttribute("height",tk(t.height).toString())}async syncAudioFileWithWave(){this._loading=!0;let t=new AudioContext,e=await tS(this.src).then(t=>t.arrayBuffer()),i=(await t.decodeAudioData(e))?.getChannelData(0),s=this.audio.duration;s===1/0&&this._record&&(s=this._record.duration),this.wave.dispatchEvent(new CustomEvent("wave-rawdata",{detail:{rawData:i,audioRef:this.audio,duration:s}})),this._loading=!1}async drawTime(){if(!this._lifeCycle)return;let t=0,e=!this.audio.paused,i=(t=Math.round(t=this._record?e?this.audio.currentTime:this._record.duration:this.audio.duration?e?this.audio.currentTime:this.audio.duration:0))%60,s=Math.round(t/60)%60,r=Math.round(t/3600),a=(t,e)=>([...Array(t)].map(()=>"0").join("")+e).slice(-t),o=`${a(2,s)}:${a(2,i)}`,n="record"===this._mode;r&&(o=`${a(2,r)}:`+o),n&&(o="+"+o),this.timeElem.textContent=o,await ty(100),requestAnimationFrame(this.drawTime.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler)}firstUpdated(){window.addEventListener("resize",this.resizeHandler),new IntersectionObserver(t=>{this._lifeCycle=t[0].isIntersecting,this._lifeCycle&&requestAnimationFrame(this.drawTime.bind(this))}).observe(this),requestAnimationFrame(this.drawTime.bind(this)),this.wave.addEventListener("click",t=>{if("record"===this._mode)return;let e=this.wave.getBoundingClientRect(),i=Math.max(0,(t.clientX-e.x)/e.width),s=this._record?this._record.duration:this.audio.duration;this.audio.currentTime=s*i}),this.audio.addEventListener("play",()=>{this._playing=!0}),this.audio.addEventListener("pause",()=>{this._playing=!1}),this.audio.volume=.2,t7.append(this.audio)}updated(t){if(!(t.has("_loading")||t.has("_playing"))){if(!("record"===this.src||this.src.startsWith("blob:"))){this.root.style.height="",this.root.style.width="",this.root.style.opacity="";return}t.has("src")&&(ty(100).then(()=>{this.root.style.height="100%",this.root.style.width="100%",this.root.style.opacity="1"}),this._mode="record"===this.src?"record":"file"),this.root.className="record"===this._mode?"record":"","record"!==this._mode||this._record?"file"===this._mode&&this.syncAudioFileWithWave():this._record=new ep({start:()=>{this._mode="record",this.wave.dispatchEvent(new CustomEvent("record-instance",{detail:this._record}))},resume:()=>{this._mode="record"},pause:t=>{this.src=t,this._mode="file"},end:()=>{this._mode="file"}}),ty(500).then(()=>this.syncCanvasSize())}}};eu.styles=[tC,p`
      :host {
        display: block;
        width: 100%;
        height: 3.6em;
        position: relative;
      }

      section {
        width: 90%;
        height: 70%;
        display: flex;
        color: var(--theme-color);
        position: absolute;
        right: 0;
        bottom: 0;
        opacity: 0.5;
        transition: ease 500ms;
      }

      button {
        background-color: var(--audio-button);
        border: none;
        width: 2em;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        fill: var(--audio-icon);
        cursor: pointer;
        transition: ease 500ms, filter 0ms;
        position: relative;
      }
      button:active {
        filter: brightness(0.8);
      }
      button ios-chat-svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      button:not(.send) ios-chat-svg {
        width: 0.6em;
      }

      button.play .pause-icon {
        display: none;
      }
      button.playing .pause-icon {
        display: block;
      }
      button.playing .play-icon {
        display: none;
      }
      button.cancel {
        width: 1.8em;
      }
      button.send {
        fill: var(--blue);
      }

      .cancel-container {
        width: calc(1.8em + 16px);
        opacity: 1;
        justify-content: right;
        display: flex;
        align-items: center;
        transition: ease 500ms;
      }

      .audio-container {
        flex: 1;
        padding: 6px 12px;
      }

      .audio-wrapper {
        background-color: var(--audio);
        border-radius: 999px;
        display: flex;
        align-items: center;
        gap: 6px;
        height: 100%;
        padding: 0 0.8em;
        font-weight: 300;
        transition: ease 500ms;
        position: relative;
      }

      .time {
        border-radius: 999px;
        background-color: var(--chat-input-bg);
        font-size: 12px;
        padding: 4px 6px;
        cursor: pointer;
        text-align: center;
        width: 5em;
      }
      .time:active {
        filter: brightness(0.8);
      }

      ios-chat-wave {
        flex: 1;
        cursor: pointer;
      }

      .send .send-icon {
        opacity: 1;
        width: 100%;
      }
      .send .stop-icon {
        opacity: 0;
        user-select: none;
        fill: rgb(255, 69, 58);
        width: 0.8em;
      }

      .loading {
        position: absolute;
        top: 0;
        left :0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        background-color: var(--audio-loading);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      .loading ios-chat-spinner {
        width: 2em;
        aspect-ratio: 1 / 1;
      }

      /* ----------- for record styles ----------- */
      section.record .audio-wrapper {
        background-color: rgba(255, 69, 58, 0.15);
      }
      section.record .play {
        opacity: 0;
        user-select: none;
        width: 0px;
      }
      section.record .cancel-container {
        width: 0px;
        opacity: 0;
      }
      section.record .time {
        color: rgb(255, 69, 58);
      }
      section.record .send {
        background-color: rgba(255, 69, 58, 0.5);
      }
      section.record .send .send-icon {
        opacity: 0;
        user-select: none;
      }
      section.record .send .stop-icon {
        opacity: 1;
      }
    `],a([tP()],eu.prototype,"_mode",2),a([tP()],eu.prototype,"_playing",2),a([tP()],eu.prototype,"_loading",2),a([tT({reflect:!0})],eu.prototype,"src",2),a([tB("audio")],eu.prototype,"audio",2),a([tB("section")],eu.prototype,"root",2),a([tB("ios-chat-wave")],eu.prototype,"wave",2),a([tB(".time")],eu.prototype,"timeElem",2),eu=a([tL("ios-chat-audio")],eu);var eg=class extends tm{constructor(){super(...arguments),this._ctx=null,this._offset=0,this._lastIdx=-1,this._volumeArr=[...Array(128)].map(()=>({to:0,h:0})),this._lifeCycle=!1,this._blockDecibelArr=[],this._blockCnt=128,this._duration=0,this.mode="static",this.width=0,this.height=0}calculateBlocks(){if(this._blockDecibelArr=[...Array(this._blockCnt)].map(()=>0),void 0===this._rawData)return;let t=Math.floor(this._rawData.length/this._blockCnt);for(let e=0;e<this._blockCnt;e++){let i=0;for(let s=0;s<t;s++)i+=this._rawData[e*t+s]*this._rawData[e*t+s];this._blockDecibelArr[e]=Math.sqrt(i/t)}}connectedCallback(){super.connectedCallback(),this.addEventListener("clear-wave",t=>{delete this._recorder,delete this._rawData,delete this._audioRef;for(let t=0;t<128;t++)this._volumeArr[t].h=0,this._volumeArr[t].to=0;this._offset=0}),this.addEventListener("record-instance",t=>{let e=t.detail;e.ctx.resume().then(()=>this._recorder=e)}),this.addEventListener("wave-rawdata",t=>{let{rawData:e,audioRef:i,duration:s}=t.detail;this._rawData=e,this._audioRef=i,this._duration=s,this.resizeWidthHandler(),this.calculateBlocks()})}render(){return K`
      <canvas width=${this.width} height=${this.height}></canvas>
    `}draw(){if(!this._lifeCycle)return;let t=this._ctx,e=this.canvas.width,i=this.canvas.height,s=i/2;if("dynamic"===this.mode){t.clearRect(0,0,e,i);let r=e/64,a=r/2,o=r+a,n=127*o;if(t.fillStyle="rgba(255, 69, 58, 0.8)",this._recorder&&-1!==this._lastIdx){let t=this._recorder.getVolume();t>1?t=1:t<.05&&(t=0),this._volumeArr[this._lastIdx].to=Math.max(t*i*.7,this._volumeArr[this._lastIdx].to),this._lastIdx=-1}for(let i=0;i<128;i++){let a=o*i-this._offset,n=this._volumeArr[i].h;this._volumeArr[i].h=n+(this._volumeArr[i].to-n)*.1;let l=r+n;t.beginPath(),t.roundRect(a,s-l/2,r,l,999),t.fill(),t.closePath(),-1===this._lastIdx&&a>=e-o&&(this._lastIdx=i)}if(this._offset+=.5,e>0&&this._offset>=n-e){this._offset=e-n%e;let t=Math.ceil(e/o),i=127-t;for(let e=0;e<=t;e++)this._volumeArr[e].to=this._volumeArr[i+e].to,this._volumeArr[e].h=this._volumeArr[i+e].h;for(let e=t+1;e<128;e++)this._volumeArr[e].h=0,this._volumeArr[e].to=0}}else{t.clearRect(0,0,e,i);let r=0;if(this._audioRef){let t=this._audioRef.duration!==1/0?this._audioRef.duration:this._duration;r=this._audioRef.currentTime/t}let a=e*r,o=e/this._blockCnt,n=2/3*o,l=window.getComputedStyle(this).getPropertyValue("--wave-fill"),h=window.getComputedStyle(this).getPropertyValue("--wave-blank");for(let e=0;e<this._blockCnt;e++){let r=o*e,d=this._blockDecibelArr[e]*i*.7+n;if(t.fillStyle=r+n<=a?l:h,t.beginPath(),t.roundRect(r,s-d/2,n,d,999),t.fill(),r<=a&&a<=r+n){let e=a-r;t.save(),t.beginPath(),t.rect(r,s-d/2,e,d),t.clip(),t.fillStyle=l,t.beginPath(),t.roundRect(r,s-d/2,n,d,999),t.fill(),t.restore()}t.closePath()}}requestAnimationFrame(this.draw.bind(this))}firstUpdated(){this._ctx=this.canvas.getContext("2d"),new IntersectionObserver(t=>{this._lifeCycle=t[0].isIntersecting,this._lifeCycle&&requestAnimationFrame(this.draw.bind(this))}).observe(this),requestAnimationFrame(this.draw.bind(this))}resizeWidthHandler(){this.width<=200?this._blockCnt=32:200<this.width&&this.width<=500?this._blockCnt=64:this._blockCnt=128}updated(t){t.has("width")&&(this.resizeWidthHandler(),this.calculateBlocks())}};eg.styles=[tC,p`
      :host {
        height: 100%;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    `],a([tT()],eg.prototype,"mode",2),a([tT({type:Number,reflect:!0})],eg.prototype,"width",2),a([tT({type:Number,reflect:!0})],eg.prototype,"height",2),a([tB("canvas")],eg.prototype,"canvas",2),eg=a([tL("ios-chat-wave")],eg);var em=class extends tm{constructor(){super(...arguments),this._lifeCycle=!1,this._fulfilled=!1,this._loading=!1,this._playing=!1,this.src="",this.resizeHandler=tb(()=>this.syncCanvasSize(),500)}render(){let t=this._loading?"loading":this._fulfilled?"fulfilled":"failed";return K`
      <audio src="${this.src?this.src:""}"></audio>

      <section class="${t}">
        <ios-chat-spinner></ios-chat-spinner>

        <div class="controls">
          <button
            class="${this._playing?"playing":""}"
            @click=${()=>{this.audio.paused?t7.play(this.audio):this.audio.pause()}}
          >
            <ios-chat-svg class="play-icon" .data=${eh}></ios-chat-svg>
            <ios-chat-svg class="pause-icon" .data=${ed}></ios-chat-svg>
          </button>

          <ios-chat-wave></ios-chat-wave>

          <div class="time">00:00</div>
        </div>

        <div class="error">
          <span>error audio</span>
          <ios-chat-svg .data=${ei}></ios-chat-svg>
        </div>
      </section>
    `}async loadData(){try{this._loading=!0;let t=new AudioContext,e=await tS(this.src).then(t=>t.arrayBuffer()),i=(await t.decodeAudioData(e))?.getChannelData(0);this.wave.dispatchEvent(new CustomEvent("wave-rawdata",{detail:{rawData:i,audioRef:this.audio,duration:this.audio.duration}})),this._fulfilled=!0}catch{this._fulfilled=!1}finally{this.dispatchEvent(new CustomEvent("loaded",{bubbles:!0,composed:!0,detail:this._fulfilled})),this._loading=!1}}async drawTime(){if(!this._lifeCycle)return;let t=0,e=!this.audio.paused,i=(t=Math.round(t=this.audio.duration!==1/0?e?this.audio.currentTime:this.audio.duration:0))%60,s=Math.round(t/60)%60,r=Math.round(t/3600),a=(t,e)=>([...Array(t)].map(()=>"0").join("")+e).slice(-t),o=`${a(2,s)}:${a(2,i)}`;this.timeElem.style.width="3em",r&&(o=`${a(2,r)}:`+o,this.timeElem.style.width="5em"),this.timeElem.textContent=o,await ty(100),requestAnimationFrame(this.drawTime.bind(this))}syncCanvasSize(){let t=window.getComputedStyle(this.wave);this.wave.setAttribute("width",tk(t.width).toString()),this.wave.setAttribute("height",tk(t.height).toString())}firstUpdated(){window.addEventListener("resize",this.resizeHandler),new IntersectionObserver(t=>{this._lifeCycle=t[0].isIntersecting,this._lifeCycle&&requestAnimationFrame(this.drawTime.bind(this))}).observe(this),requestAnimationFrame(this.drawTime.bind(this)),this.wave.addEventListener("click",t=>{let e=this.wave.getBoundingClientRect(),i=Math.max(0,(t.clientX-e.x)/e.width),s=this.audio.duration!==1/0?this.audio.duration:0;this.audio.currentTime=s*i}),this.audio.addEventListener("play",()=>{this._playing=!0}),this.audio.addEventListener("pause",()=>{this._playing=!1}),this.audio.volume=.2,t7.append(this.audio)}updated(t){t.has("src")&&this.loadData(),this.syncCanvasSize()}};function ef(t,e){t4.rooms[t].messages=[...e],t4.rooms[t].ref.dispatchEvent(new CustomEvent("init-message"))}function eC(t){return t4.getMessages(t)}function ey(t,e){return t4.listen(t,e)}function ev(t,e){t4.unsubscribe(t,e)}async function eb(t,e){if(t4.rooms[t].blocked)throw Error(`chat room [id: ${t}] is currently blocked!`);return t4.sendMessage("sender",t,e),await ty(301),!0}async function ew(t,e){if(t4.rooms[t].blocked)throw Error(`chat room [id: ${t}] is currently blocked!`);return t4.sendMessage("receiver",t,e),await ty(301),!0}function e_(t){if(t4.rooms[t].blocked)throw Error(`chat room [id: ${t}] is currently blocked!`);t4.rooms[t].blocked=!0,t4.rooms[t].ref.dispatchEvent(new CustomEvent("answer-loading-start"))}async function ex(t){t4.rooms[t].blocked=!1,t4.rooms[t].ref.dispatchEvent(new CustomEvent("answer-loading-end")),await ty(601)}function e$(t){return t4.rooms[t].blocked}em.styles=p`
    section {
      width: 100%;
      height: 3.6em;
      display: flex;
      align-items: center;
      border-radius: var(--border-radius);
      justify-content: center;
    }

    ios-chat-spinner {
      display: block;
      width: 50px;
      height: 40px;
      padding: 0.2em 1em;
    }

    ios-chat-svg {
      width: var(--font-size);
    }

    .error {
      display: flex;
      font-size: 12px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
    }

    .controls,
    ios-chat-spinner,
    .error {
      display: none;
    }

    section.loading ios-chat-spinner {
      display: block;
    }
    section.failed .error {
      display: flex;
    }
    section.fulfilled .controls {
      display: flex;
    }

    .controls {
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 0.8em;
      gap: .5em;
    }
    button {
      background-color: #fff;
      border: none;
      width: 1.8em;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      fill: inherit;
      cursor: pointer;
      transition: ease 500ms, filter 0ms;
      position: relative;
    }
    button ios-chat-svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.7em;
      display: flex;
      transform: translate(-50%, -50%);
    }
    button .pause-icon {
      display: none;
    }
    button.playing .pause-icon {
      display: flex;
    }
    button.playing .play-icon {
      display: none;
    }
    ios-chat-wave {
      flex: 1;
      cursor: pointer;
    }

    .time {
      border-radius: 999px;
      background-color: var(--chat-input-bg);
      font-size: 12px;
      padding: 4px 6px;
      text-align: center;
    }
  `,a([tP()],em.prototype,"_fulfilled",2),a([tP()],em.prototype,"_loading",2),a([tP()],em.prototype,"_playing",2),a([tT()],em.prototype,"src",2),a([tB("ios-chat-wave")],em.prototype,"wave",2),a([tB("audio")],em.prototype,"audio",2),a([tB("button")],em.prototype,"playBtn",2),a([tB(".time")],em.prototype,"timeElem",2),em=a([tL("ios-chat-audio-message")],em);/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/}}]);