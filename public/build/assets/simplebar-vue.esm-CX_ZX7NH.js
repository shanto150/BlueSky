import{_ as ce,e as T,I as ue,J as he,c as fe,o as de,b as $,K as R,L as J,D as ve,M as pe}from"./app-CRm4K_SG.js";const Mt="/build/assets/Mobile_Button%20With_Icon-CcsW7oy2.jpg",zt="/build/assets/s_With_Icon-D15Ckp9I.jpg",Tt="/build/assets/Plane_des-D0LsEsOO.svg",Nt="/build/assets/Plane-D6GMHh23.svg",_t="/build/assets/location-CypM3awZ.svg",me=["min","max","value","step"],ge=["min","max","value","step"],be={__name:"CustomMinMaxSlider",props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},minValue:{type:Number,default:50},maxValue:{type:Number,default:80}},emits:["update:minValue","update:maxValue"],setup(t,{emit:i}){const r=i,e=T(null),s=T(null),l=T(null),o=T(t.minValue),n=T(t.maxValue),c=(a,f,d)=>(a-f)/(d-f)*100;ue(()=>Math.abs(n.value-o.value));const u=(a,f)=>{e.value.style.setProperty("--progressLeft",`${a}%`),e.value.style.setProperty("--progressRight",`${f}%`)};he(()=>{if(e.value){r("update:minValue",o.value),r("update:maxValue",n.value);const a=c(o.value,t.min,t.max),f=100-c(n.value,t.min,t.max);u(a,f)}});const v=({target:a})=>{a.name==="min"&&(a.value>n.value?a.value=n.value:o.value=parseFloat(a.value)),a.name==="max"&&(a.value<o.value?a.value=o.value:n.value=parseFloat(a.value))};return(a,f)=>(de(),fe("div",{ref_key:"slider",ref:e,class:"custom-slider minmax"},[f[0]||(f[0]=$("div",{class:"minmax-indicator"},null,-1)),$("input",{ref_key:"inputMin",ref:s,type:"range",name:"min",id:"min",min:t.min,max:t.max,value:t.minValue,step:t.step,onInput:v},null,40,me),$("input",{ref_key:"inputMax",ref:l,type:"range",name:"max",id:"max",min:t.min,max:t.max,value:t.maxValue,step:t.step,onInput:v},null,40,ge)],512))}},Ct=ce(be,[["__scopeId","data-v-105e7a3f"]]);function ye(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}var I=ye,xe=typeof R=="object"&&R&&R.Object===Object&&R,Se=xe,Ee=Se,Oe=typeof self=="object"&&self&&self.Object===Object&&self,we=Ee||Oe||Function("return this")(),K=we,ke=K,We=function(){return ke.Date.now()},Ae=We,Me=/\s/;function ze(t){for(var i=t.length;i--&&Me.test(t.charAt(i)););return i}var Te=ze,Ne=Te,_e=/^\s+/;function Ce(t){return t&&t.slice(0,Ne(t)+1).replace(_e,"")}var Le=Ce,Re=K,Ve=Re.Symbol,ee=Ve,F=ee,te=Object.prototype,$e=te.hasOwnProperty,je=te.toString,N=F?F.toStringTag:void 0;function De(t){var i=$e.call(t,N),r=t[N];try{t[N]=void 0;var e=!0}catch{}var s=je.call(t);return e&&(i?t[N]=r:delete t[N]),s}var Be=De,Ie=Object.prototype,Pe=Ie.toString;function He(t){return Pe.call(t)}var Fe=He,X=ee,Xe=Be,Ye=Fe,qe="[object Null]",Ue="[object Undefined]",Y=X?X.toStringTag:void 0;function Ge(t){return t==null?t===void 0?Ue:qe:Y&&Y in Object(t)?Xe(t):Ye(t)}var Qe=Ge;function Ze(t){return t!=null&&typeof t=="object"}var Je=Ze,Ke=Qe,et=Je,tt="[object Symbol]";function it(t){return typeof t=="symbol"||et(t)&&Ke(t)==tt}var rt=it,st=Le,q=I,lt=rt,U=NaN,nt=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,at=/^0o[0-7]+$/i,ct=parseInt;function ut(t){if(typeof t=="number")return t;if(lt(t))return U;if(q(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=q(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=st(t);var r=ot.test(t);return r||at.test(t)?ct(t.slice(2),r?2:8):nt.test(t)?U:+t}var ht=ut,ft=I,j=Ae,G=ht,dt="Expected a function",vt=Math.max,pt=Math.min;function mt(t,i,r){var e,s,l,o,n,c,u=0,v=!1,a=!1,f=!0;if(typeof t!="function")throw new TypeError(dt);i=G(i)||0,ft(r)&&(v=!!r.leading,a="maxWait"in r,l=a?vt(G(r.maxWait)||0,i):l,f="trailing"in r?!!r.trailing:f);function d(h){var g=e,b=s;return e=s=void 0,u=h,o=t.apply(b,g),o}function k(h){return u=h,n=setTimeout(m,i),v?d(h):o}function x(h){var g=h-c,b=h-u,H=i-g;return a?pt(H,l-b):H}function y(h){var g=h-c,b=h-u;return c===void 0||g>=i||g<0||a&&b>=l}function m(){var h=j();if(y(h))return S(h);n=setTimeout(m,x(h))}function S(h){return n=void 0,f&&e?d(h):(e=s=void 0,o)}function L(){n!==void 0&&clearTimeout(n),u=0,e=c=s=n=void 0}function V(){return n===void 0?o:S(j())}function z(){var h=j(),g=y(h);if(e=arguments,s=this,c=h,g){if(n===void 0)return k(c);if(a)return clearTimeout(n),n=setTimeout(m,i),d(c)}return n===void 0&&(n=setTimeout(m,i)),o}return z.cancel=L,z.flush=V,z}var ie=mt;const D=J(ie);var gt=ie,bt=I,yt="Expected a function";function xt(t,i,r){var e=!0,s=!0;if(typeof t!="function")throw new TypeError(yt);return bt(r)&&(e="leading"in r?!!r.leading:e,s="trailing"in r?!!r.trailing:s),gt(t,i,{leading:e,maxWait:i,trailing:s})}var St=xt;const Et=J(St);var M=function(){return M=Object.assign||function(i){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},M.apply(this,arguments)};function re(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function se(t){return!t||!t.ownerDocument?document:t.ownerDocument}var le=function(t){var i={},r=Array.prototype.reduce.call(t,function(e,s){var l=s.name.match(/data-simplebar-(.+)/);if(l){var o=l[1].replace(/\W+(.)/g,function(n,c){return c.toUpperCase()});switch(s.value){case"true":e[o]=!0;break;case"false":e[o]=!1;break;case void 0:e[o]=!0;break;default:e[o]=s.value}}return e},i);return r};function ne(t,i){var r;t&&(r=t.classList).add.apply(r,i.split(" "))}function oe(t,i){t&&i.split(" ").forEach(function(r){t.classList.remove(r)})}function ae(t){return".".concat(t.split(" ").join("."))}var P=!!(typeof window<"u"&&window.document&&window.document.createElement),Ot=Object.freeze({__proto__:null,addClasses:ne,canUseDOM:P,classNamesToQuery:ae,getElementDocument:se,getElementWindow:re,getOptions:le,removeClasses:oe}),A=null,Q=null;P&&window.addEventListener("resize",function(){Q!==window.devicePixelRatio&&(Q=window.devicePixelRatio,A=null)});function Z(){if(A===null){if(typeof document>"u")return A=0,A;var t=document.body,i=document.createElement("div");i.classList.add("simplebar-hide-scrollbar"),t.appendChild(i);var r=i.getBoundingClientRect().right;t.removeChild(i),A=r}return A}var E=re,B=se,wt=le,O=ne,w=oe,p=ae,C=function(){function t(i,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var s=E(e.el);e.scrollXTicking||(s.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(s.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,O(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){w(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(O(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){w(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(s){e.mouseX=s.clientX,e.mouseY=s.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(s){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var l,o;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(l=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(o=e.isWithinBounds(e.axis.y.track.rect)),(l||o)&&(s.stopPropagation(),s.type==="pointerdown"&&s.pointerType!=="touch"&&(l&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(s,"x"):e.onTrackClick(s,"x")),o&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(s,"y"):e.onTrackClick(s,"y"))))}},this.drag=function(s){var l,o,n,c,u,v,a,f,d,k,x;if(!(!e.draggedAxis||!e.contentWrapperEl)){var y,m=e.axis[e.draggedAxis].track,S=(o=(l=m.rect)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].sizeAttr])!==null&&o!==void 0?o:0,L=e.axis[e.draggedAxis].scrollbar,V=(c=(n=e.contentWrapperEl)===null||n===void 0?void 0:n[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&c!==void 0?c:0,z=parseInt((v=(u=e.elStyles)===null||u===void 0?void 0:u[e.axis[e.draggedAxis].sizeAttr])!==null&&v!==void 0?v:"0px",10);s.preventDefault(),s.stopPropagation(),e.draggedAxis==="y"?y=s.pageY:y=s.pageX;var h=y-((f=(a=m.rect)===null||a===void 0?void 0:a[e.axis[e.draggedAxis].offsetAttr])!==null&&f!==void 0?f:0)-e.axis[e.draggedAxis].dragOffset;h=e.draggedAxis==="x"&&e.isRtl?((k=(d=m.rect)===null||d===void 0?void 0:d[e.axis[e.draggedAxis].sizeAttr])!==null&&k!==void 0?k:0)-L.size-h:h;var g=h/(S-L.size),b=g*(V-z);e.draggedAxis==="x"&&e.isRtl&&(b=!((x=t.getRtlHelpers())===null||x===void 0)&&x.isScrollingToNegative?-b:b),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=b}},this.onEndDrag=function(s){e.isDragging=!1;var l=B(e.el),o=E(e.el);s.preventDefault(),s.stopPropagation(),w(e.el,e.classNames.dragging),e.onStopScrolling(),l.removeEventListener("mousemove",e.drag,!0),l.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=o.setTimeout(function(){l.removeEventListener("click",e.preventClick,!0),l.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=i,this.options=M(M({},t.defaultOptions),r),this.classNames=M(M({},t.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=Et(this._onMouseMove,64),this.onWindowResize=D(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=D(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=D(this._onMouseEntered,this.stopScrollDelay),this.init()}return t.getRtlHelpers=function(){if(t.rtlHelpers)return t.rtlHelpers;var i=document.createElement("div");i.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=i.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var s=t.getOffset(r),l=t.getOffset(e);r.scrollLeft=-999;var o=t.getOffset(e);return document.body.removeChild(r),t.rtlHelpers={isScrollOriginAtZero:s.left!==l.left,isScrollingToNegative:l.left!==o.left},t.rtlHelpers},t.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Z()}catch{return Z()}},t.getOffset=function(i){var r=i.getBoundingClientRect(),e=B(i),s=E(i);return{top:r.top+(s.pageYOffset||e.documentElement.scrollTop),left:r.left+(s.pageXOffset||e.documentElement.scrollLeft)}},t.prototype.init=function(){P&&(this.initDOM(),this.rtlHelpers=t.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.prototype.initDOM=function(){var i,r;this.wrapperEl=this.el.querySelector(p(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(p(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(p(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(p(this.classNames.offset)),this.maskEl=this.el.querySelector(p(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,p(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(p(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(p(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(p(this.classNames.track)).concat(p(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(p(this.classNames.track)).concat(p(this.classNames.vertical))),this.axis.x.scrollbar.el=((i=this.axis.x.track.el)===null||i===void 0?void 0:i.querySelector(p(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(p(this.classNames.scrollbar)))||null,this.options.autoHide||(O(this.axis.x.scrollbar.el,this.classNames.visible),O(this.axis.y.scrollbar.el,this.classNames.visible))},t.prototype.initListeners=function(){var i=this,r,e=E(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var s=!1,l=e.ResizeObserver||ResizeObserver;this.resizeObserver=new l(function(){s&&e.requestAnimationFrame(function(){i.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){s=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){i.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},t.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var i=E(this.el);this.elStyles=i.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||r>0,l=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,n=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var c=this.contentEl.scrollHeight,u=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=s?"".concat(r||u,"px"):"auto",this.placeholderEl.style.height="".concat(c,"px");var v=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&u>r,this.axis.y.isOverflowing=c>v,this.axis.x.isOverflowing=o==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=n==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var a=this.axis.x.isOverflowing?this.scrollbarWidth:0,f=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&u>l-f,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&c>v-a,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},t.prototype.getScrollbarSize=function(i){var r,e;if(i===void 0&&(i="y"),!this.axis[i].isOverflowing||!this.contentEl)return 0;var s=this.contentEl[this.axis[i].scrollSizeAttr],l=(e=(r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])!==null&&e!==void 0?e:0,o=l/s,n;return n=Math.max(~~(o*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(n=Math.min(n,this.options.scrollbarMaxSize)),n},t.prototype.positionScrollbar=function(i){var r,e,s;i===void 0&&(i="y");var l=this.axis[i].scrollbar;if(!(!this.axis[i].isOverflowing||!this.contentWrapperEl||!l.el||!this.elStyles)){var o=this.contentWrapperEl[this.axis[i].scrollSizeAttr],n=((r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])||0,c=parseInt(this.elStyles[this.axis[i].sizeAttr],10),u=this.contentWrapperEl[this.axis[i].scrollOffsetAttr];u=i==="x"&&this.isRtl&&(!((e=t.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-u:u,i==="x"&&this.isRtl&&(u=!((s=t.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?u:-u);var v=u/(o-c),a=~~((n-l.size)*v);a=i==="x"&&this.isRtl?-a+(n-l.size):a,l.el.style.transform=i==="x"?"translate3d(".concat(a,"px, 0, 0)"):"translate3d(0, ".concat(a,"px, 0)")}},t.prototype.toggleTrackVisibility=function(i){i===void 0&&(i="y");var r=this.axis[i].track.el,e=this.axis[i].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[i].isOverflowing||this.axis[i].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[i].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(i))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[i].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(i))),this.axis[i].isOverflowing?e.style.display="block":e.style.display="none")},t.prototype.showScrollbar=function(i){i===void 0&&(i="y"),this.axis[i].isOverflowing&&!this.axis[i].scrollbar.isVisible&&(O(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!0)},t.prototype.hideScrollbar=function(i){i===void 0&&(i="y"),!this.isDragging&&this.axis[i].isOverflowing&&this.axis[i].scrollbar.isVisible&&(w(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!1)},t.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},t.prototype.onMouseMoveForAxis=function(i){i===void 0&&(i="y");var r=this.axis[i];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(i),O(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?O(r.scrollbar.el,this.classNames.hover):w(r.scrollbar.el,this.classNames.hover)):(w(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)))},t.prototype.onMouseLeaveForAxis=function(i){i===void 0&&(i="y"),w(this.axis[i].track.el,this.classNames.hover),w(this.axis[i].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)},t.prototype.onDragStart=function(i,r){var e;r===void 0&&(r="y"),this.isDragging=!0;var s=B(this.el),l=E(this.el),o=this.axis[r].scrollbar,n=r==="y"?i.pageY:i.pageX;this.axis[r].dragOffset=n-(((e=o.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,O(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.prototype.onTrackClick=function(i,r){var e=this,s,l,o,n;r===void 0&&(r="y");var c=this.axis[r];if(!(!this.options.clickOnTrack||!c.scrollbar.el||!this.contentWrapperEl)){i.preventDefault();var u=E(this.el);this.axis[r].scrollbar.rect=c.scrollbar.el.getBoundingClientRect();var v=this.axis[r].scrollbar,a=(l=(s=v.rect)===null||s===void 0?void 0:s[this.axis[r].offsetAttr])!==null&&l!==void 0?l:0,f=parseInt((n=(o=this.elStyles)===null||o===void 0?void 0:o[this.axis[r].sizeAttr])!==null&&n!==void 0?n:"0px",10),d=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],k=r==="y"?this.mouseY-a:this.mouseX-a,x=k<0?-1:1,y=x===-1?d-f:d+f,m=40,S=function(){e.contentWrapperEl&&(x===-1?d>y&&(d-=m,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=d,u.requestAnimationFrame(S)):d<y&&(d+=m,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=d,u.requestAnimationFrame(S)))};S()}},t.prototype.getContentElement=function(){return this.contentEl},t.prototype.getScrollElement=function(){return this.contentWrapperEl},t.prototype.removeListeners=function(){var i=E(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),i.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},t.prototype.unMount=function(){this.removeListeners()},t.prototype.isWithinBounds=function(i){return this.mouseX>=i.left&&this.mouseX<=i.left+i.width&&this.mouseY>=i.top&&this.mouseY<=i.top+i.height},t.prototype.findChild=function(i,r){var e=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector;return Array.prototype.filter.call(i.children,function(s){return e.call(s,r)})[0]},t.rtlHelpers=null,t.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},t.getOptions=wt,t.helpers=Ot,t}(),W=function(){return W=Object.assign||function(i){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},W.apply(this,arguments)},kt={beforeUnmount:"beforeUnmount"},_;function Wt(t){var i,r=t.h,e=t.emit,s=t.slots,l=t.props,o=function(c){return e("scroll",c)},n=W(W({},C.defaultOptions.classNames),l.classNames);return r("div",W({ref:"element"},{"data-simplebar":"init"}),[r("div",{class:n.wrapper},[r("div",{class:n.heightAutoObserverWrapperEl},[r("div",{class:n.heightAutoObserverEl})]),r("div",{class:n.mask},[r("div",{class:n.offset},[r("div",W(W({},{onScroll:o,class:n.contentWrapper,tabIndex:l.tabIndex||C.defaultOptions.tabIndex,role:"region","aria-label":l.ariaLabel||C.defaultOptions.ariaLabel}),{ref:"scrollElement"}),[r("div",{class:n.contentEl,ref:"contentElement"},(i=s.default)===null||i===void 0?void 0:i.call(s))])])]),r("div",{class:n.placeholder})]),r("div",{class:"".concat(n.track," simplebar-horizontal")},[r("div",{class:n.scrollbar})]),r("div",{class:"".concat(n.track," simplebar-vertical")},[r("div",{class:n.scrollbar})])])}var Lt=ve((_={name:"simplebar-vue",props:{autoHide:{type:Boolean,default:void 0},classNames:Object,forceVisible:{type:[Boolean,String],validator:function(t){return typeof t=="boolean"||t==="x"||t==="y"},default:void 0},ariaLabel:String,tabIndex:Number,direction:{type:String,validator:function(t){return t==="ltr"||t==="rtl"}},timeout:Number,clickOnTrack:{type:Boolean,default:void 0},scrollbarMinSize:Number,scrollbarMaxSize:Number},emits:["scroll"],data:function(){return{}},mounted:function(){for(var t=C.getOptions(this.$refs.element.attributes),i=0,r=Object.entries(this.$props);i<r.length;i++){var e=r[i],s=e[0],l=e[1];l!=null&&typeof l!="function"&&(t[s]=l)}this.SimpleBar=new C(this.$refs.element,t),this.scrollElement=this.$refs.scrollElement,this.contentElement=this.$refs.contentElement}},_[kt.beforeUnmount]=function(){var t;(t=this.SimpleBar)===null||t===void 0||t.unMount(),this.SimpleBar=void 0},_.methods={recalculate:function(){var t;(t=this.SimpleBar)===null||t===void 0||t.recalculate()}},_.render=function(t){var i=this;return Wt({h:typeof t=="function"?t:pe,emit:function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return i.$emit.apply(i,r)},slots:this.$slots,props:this.$props})},_));export{Ct as C,Mt as _,zt as a,Tt as b,Nt as c,_t as d,Lt as s};
