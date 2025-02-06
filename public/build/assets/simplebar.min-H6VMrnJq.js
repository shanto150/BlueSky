import{K as C,L as Q,D as oe,M as ae}from"./app-Cf8-PM9S.js";function ce(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}var B=ce,ue=typeof C=="object"&&C&&C.Object===Object&&C,fe=ue,he=fe,de=typeof self=="object"&&self&&self.Object===Object&&self,pe=he||de||Function("return this")(),Z=pe,ve=Z,me=function(){return ve.Date.now()},ge=me,be=/\s/;function ye(t){for(var i=t.length;i--&&be.test(t.charAt(i)););return i}var Se=ye,xe=Se,Ee=/^\s+/;function Oe(t){return t&&t.slice(0,xe(t)+1).replace(Ee,"")}var we=Oe,ke=Z,We=ke.Symbol,K=We,I=K,J=Object.prototype,Ae=J.hasOwnProperty,ze=J.toString,M=I?I.toStringTag:void 0;function Te(t){var i=Ae.call(t,M),r=t[M];try{t[M]=void 0;var e=!0}catch{}var s=ze.call(t);return e&&(i?t[M]=r:delete t[M]),s}var Me=Te,Ne=Object.prototype,_e=Ne.toString;function Le(t){return _e.call(t)}var Ce=Le,P=K,Re=Me,$e=Ce,je="[object Null]",De="[object Undefined]",X=P?P.toStringTag:void 0;function Be(t){return t==null?t===void 0?De:je:X&&X in Object(t)?Re(t):$e(t)}var Ve=Be;function He(t){return t!=null&&typeof t=="object"}var Ie=He,Pe=Ve,Xe=Ie,Fe="[object Symbol]";function Ye(t){return typeof t=="symbol"||Xe(t)&&Pe(t)==Fe}var qe=Ye,Ue=we,F=B,Ge=qe,Y=NaN,Qe=/^[-+]0x[0-9a-f]+$/i,Ze=/^0b[01]+$/i,Ke=/^0o[0-7]+$/i,Je=parseInt;function et(t){if(typeof t=="number")return t;if(Ge(t))return Y;if(F(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=F(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=Ue(t);var r=Ze.test(t);return r||Ke.test(t)?Je(t.slice(2),r?2:8):Qe.test(t)?Y:+t}var tt=et,it=B,$=ge,q=tt,rt="Expected a function",st=Math.max,nt=Math.min;function lt(t,i,r){var e,s,n,o,l,a,c=0,p=!1,f=!1,v=!0;if(typeof t!="function")throw new TypeError(rt);i=q(i)||0,it(r)&&(p=!!r.leading,f="maxWait"in r,n=f?st(q(r.maxWait)||0,i):n,v="trailing"in r?!!r.trailing:v);function h(u){var g=e,b=s;return e=s=void 0,c=u,o=t.apply(b,g),o}function k(u){return c=u,l=setTimeout(m,i),p?h(u):o}function S(u){var g=u-a,b=u-c,H=i-g;return f?nt(H,n-b):H}function y(u){var g=u-a,b=u-c;return a===void 0||g>=i||g<0||f&&b>=n}function m(){var u=$();if(y(u))return x(u);l=setTimeout(m,S(u))}function x(u){return l=void 0,v&&e?h(u):(e=s=void 0,o)}function L(){l!==void 0&&clearTimeout(l),c=0,e=a=s=l=void 0}function R(){return l===void 0?o:x($())}function T(){var u=$(),g=y(u);if(e=arguments,s=this,a=u,g){if(l===void 0)return k(a);if(f)return clearTimeout(l),l=setTimeout(m,i),h(a)}return l===void 0&&(l=setTimeout(m,i)),o}return T.cancel=L,T.flush=R,T}var ee=lt;const j=Q(ee);var ot=ee,at=B,ct="Expected a function";function ut(t,i,r){var e=!0,s=!0;if(typeof t!="function")throw new TypeError(ct);return at(r)&&(e="leading"in r?!!r.leading:e,s="trailing"in r?!!r.trailing:s),ot(t,i,{leading:e,maxWait:i,trailing:s})}var ft=ut;const ht=Q(ft);var z=function(){return z=Object.assign||function(i){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n])}return i},z.apply(this,arguments)};function te(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function ie(t){return!t||!t.ownerDocument?document:t.ownerDocument}var re=function(t){var i={},r=Array.prototype.reduce.call(t,function(e,s){var n=s.name.match(/data-simplebar-(.+)/);if(n){var o=n[1].replace(/\W+(.)/g,function(l,a){return a.toUpperCase()});switch(s.value){case"true":e[o]=!0;break;case"false":e[o]=!1;break;case void 0:e[o]=!0;break;default:e[o]=s.value}}return e},i);return r};function se(t,i){var r;t&&(r=t.classList).add.apply(r,i.split(" "))}function ne(t,i){t&&i.split(" ").forEach(function(r){t.classList.remove(r)})}function le(t){return".".concat(t.split(" ").join("."))}var V=!!(typeof window<"u"&&window.document&&window.document.createElement),dt=Object.freeze({__proto__:null,addClasses:se,canUseDOM:V,classNamesToQuery:le,getElementDocument:ie,getElementWindow:te,getOptions:re,removeClasses:ne}),A=null,U=null;V&&window.addEventListener("resize",function(){U!==window.devicePixelRatio&&(U=window.devicePixelRatio,A=null)});function G(){if(A===null){if(typeof document>"u")return A=0,A;var t=document.body,i=document.createElement("div");i.classList.add("simplebar-hide-scrollbar"),t.appendChild(i);var r=i.getBoundingClientRect().right;t.removeChild(i),A=r}return A}var E=te,D=ie,pt=re,O=se,w=ne,d=le,_=function(){function t(i,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var s=E(e.el);e.scrollXTicking||(s.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(s.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,O(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){w(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(O(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){w(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(s){e.mouseX=s.clientX,e.mouseY=s.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(s){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var n,o;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(n=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(o=e.isWithinBounds(e.axis.y.track.rect)),(n||o)&&(s.stopPropagation(),s.type==="pointerdown"&&s.pointerType!=="touch"&&(n&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(s,"x"):e.onTrackClick(s,"x")),o&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(s,"y"):e.onTrackClick(s,"y"))))}},this.drag=function(s){var n,o,l,a,c,p,f,v,h,k,S;if(!(!e.draggedAxis||!e.contentWrapperEl)){var y,m=e.axis[e.draggedAxis].track,x=(o=(n=m.rect)===null||n===void 0?void 0:n[e.axis[e.draggedAxis].sizeAttr])!==null&&o!==void 0?o:0,L=e.axis[e.draggedAxis].scrollbar,R=(a=(l=e.contentWrapperEl)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&a!==void 0?a:0,T=parseInt((p=(c=e.elStyles)===null||c===void 0?void 0:c[e.axis[e.draggedAxis].sizeAttr])!==null&&p!==void 0?p:"0px",10);s.preventDefault(),s.stopPropagation(),e.draggedAxis==="y"?y=s.pageY:y=s.pageX;var u=y-((v=(f=m.rect)===null||f===void 0?void 0:f[e.axis[e.draggedAxis].offsetAttr])!==null&&v!==void 0?v:0)-e.axis[e.draggedAxis].dragOffset;u=e.draggedAxis==="x"&&e.isRtl?((k=(h=m.rect)===null||h===void 0?void 0:h[e.axis[e.draggedAxis].sizeAttr])!==null&&k!==void 0?k:0)-L.size-u:u;var g=u/(x-L.size),b=g*(R-T);e.draggedAxis==="x"&&e.isRtl&&(b=!((S=t.getRtlHelpers())===null||S===void 0)&&S.isScrollingToNegative?-b:b),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=b}},this.onEndDrag=function(s){e.isDragging=!1;var n=D(e.el),o=E(e.el);s.preventDefault(),s.stopPropagation(),w(e.el,e.classNames.dragging),e.onStopScrolling(),n.removeEventListener("mousemove",e.drag,!0),n.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=o.setTimeout(function(){n.removeEventListener("click",e.preventClick,!0),n.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=i,this.options=z(z({},t.defaultOptions),r),this.classNames=z(z({},t.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=ht(this._onMouseMove,64),this.onWindowResize=j(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=j(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=j(this._onMouseEntered,this.stopScrollDelay),this.init()}return t.getRtlHelpers=function(){if(t.rtlHelpers)return t.rtlHelpers;var i=document.createElement("div");i.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=i.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var s=t.getOffset(r),n=t.getOffset(e);r.scrollLeft=-999;var o=t.getOffset(e);return document.body.removeChild(r),t.rtlHelpers={isScrollOriginAtZero:s.left!==n.left,isScrollingToNegative:n.left!==o.left},t.rtlHelpers},t.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:G()}catch{return G()}},t.getOffset=function(i){var r=i.getBoundingClientRect(),e=D(i),s=E(i);return{top:r.top+(s.pageYOffset||e.documentElement.scrollTop),left:r.left+(s.pageXOffset||e.documentElement.scrollLeft)}},t.prototype.init=function(){V&&(this.initDOM(),this.rtlHelpers=t.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.prototype.initDOM=function(){var i,r;this.wrapperEl=this.el.querySelector(d(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(d(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(d(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(d(this.classNames.offset)),this.maskEl=this.el.querySelector(d(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,d(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(d(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(d(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(d(this.classNames.track)).concat(d(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(d(this.classNames.track)).concat(d(this.classNames.vertical))),this.axis.x.scrollbar.el=((i=this.axis.x.track.el)===null||i===void 0?void 0:i.querySelector(d(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(d(this.classNames.scrollbar)))||null,this.options.autoHide||(O(this.axis.x.scrollbar.el,this.classNames.visible),O(this.axis.y.scrollbar.el,this.classNames.visible))},t.prototype.initListeners=function(){var i=this,r,e=E(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var s=!1,n=e.ResizeObserver||ResizeObserver;this.resizeObserver=new n(function(){s&&e.requestAnimationFrame(function(){i.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){s=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){i.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},t.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var i=E(this.el);this.elStyles=i.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||r>0,n=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,l=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=s?"".concat(r||c,"px"):"auto",this.placeholderEl.style.height="".concat(a,"px");var p=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&c>r,this.axis.y.isOverflowing=a>p,this.axis.x.isOverflowing=o==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=l==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var f=this.axis.x.isOverflowing?this.scrollbarWidth:0,v=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>n-v,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>p-f,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},t.prototype.getScrollbarSize=function(i){var r,e;if(i===void 0&&(i="y"),!this.axis[i].isOverflowing||!this.contentEl)return 0;var s=this.contentEl[this.axis[i].scrollSizeAttr],n=(e=(r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])!==null&&e!==void 0?e:0,o=n/s,l;return l=Math.max(~~(o*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(l=Math.min(l,this.options.scrollbarMaxSize)),l},t.prototype.positionScrollbar=function(i){var r,e,s;i===void 0&&(i="y");var n=this.axis[i].scrollbar;if(!(!this.axis[i].isOverflowing||!this.contentWrapperEl||!n.el||!this.elStyles)){var o=this.contentWrapperEl[this.axis[i].scrollSizeAttr],l=((r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[i].sizeAttr],10),c=this.contentWrapperEl[this.axis[i].scrollOffsetAttr];c=i==="x"&&this.isRtl&&(!((e=t.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-c:c,i==="x"&&this.isRtl&&(c=!((s=t.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?c:-c);var p=c/(o-a),f=~~((l-n.size)*p);f=i==="x"&&this.isRtl?-f+(l-n.size):f,n.el.style.transform=i==="x"?"translate3d(".concat(f,"px, 0, 0)"):"translate3d(0, ".concat(f,"px, 0)")}},t.prototype.toggleTrackVisibility=function(i){i===void 0&&(i="y");var r=this.axis[i].track.el,e=this.axis[i].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[i].isOverflowing||this.axis[i].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[i].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(i))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[i].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(i))),this.axis[i].isOverflowing?e.style.display="block":e.style.display="none")},t.prototype.showScrollbar=function(i){i===void 0&&(i="y"),this.axis[i].isOverflowing&&!this.axis[i].scrollbar.isVisible&&(O(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!0)},t.prototype.hideScrollbar=function(i){i===void 0&&(i="y"),!this.isDragging&&this.axis[i].isOverflowing&&this.axis[i].scrollbar.isVisible&&(w(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!1)},t.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},t.prototype.onMouseMoveForAxis=function(i){i===void 0&&(i="y");var r=this.axis[i];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(i),O(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?O(r.scrollbar.el,this.classNames.hover):w(r.scrollbar.el,this.classNames.hover)):(w(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)))},t.prototype.onMouseLeaveForAxis=function(i){i===void 0&&(i="y"),w(this.axis[i].track.el,this.classNames.hover),w(this.axis[i].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)},t.prototype.onDragStart=function(i,r){var e;r===void 0&&(r="y"),this.isDragging=!0;var s=D(this.el),n=E(this.el),o=this.axis[r].scrollbar,l=r==="y"?i.pageY:i.pageX;this.axis[r].dragOffset=l-(((e=o.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,O(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.prototype.onTrackClick=function(i,r){var e=this,s,n,o,l;r===void 0&&(r="y");var a=this.axis[r];if(!(!this.options.clickOnTrack||!a.scrollbar.el||!this.contentWrapperEl)){i.preventDefault();var c=E(this.el);this.axis[r].scrollbar.rect=a.scrollbar.el.getBoundingClientRect();var p=this.axis[r].scrollbar,f=(n=(s=p.rect)===null||s===void 0?void 0:s[this.axis[r].offsetAttr])!==null&&n!==void 0?n:0,v=parseInt((l=(o=this.elStyles)===null||o===void 0?void 0:o[this.axis[r].sizeAttr])!==null&&l!==void 0?l:"0px",10),h=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],k=r==="y"?this.mouseY-f:this.mouseX-f,S=k<0?-1:1,y=S===-1?h-v:h+v,m=40,x=function(){e.contentWrapperEl&&(S===-1?h>y&&(h-=m,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=h,c.requestAnimationFrame(x)):h<y&&(h+=m,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=h,c.requestAnimationFrame(x)))};x()}},t.prototype.getContentElement=function(){return this.contentEl},t.prototype.getScrollElement=function(){return this.contentWrapperEl},t.prototype.removeListeners=function(){var i=E(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),i.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},t.prototype.unMount=function(){this.removeListeners()},t.prototype.isWithinBounds=function(i){return this.mouseX>=i.left&&this.mouseX<=i.left+i.width&&this.mouseY>=i.top&&this.mouseY<=i.top+i.height},t.prototype.findChild=function(i,r){var e=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector;return Array.prototype.filter.call(i.children,function(s){return e.call(s,r)})[0]},t.rtlHelpers=null,t.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},t.getOptions=pt,t.helpers=dt,t}(),W=function(){return W=Object.assign||function(i){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n])}return i},W.apply(this,arguments)},vt={beforeUnmount:"beforeUnmount"},N;function mt(t){var i,r=t.h,e=t.emit,s=t.slots,n=t.props,o=function(a){return e("scroll",a)},l=W(W({},_.defaultOptions.classNames),n.classNames);return r("div",W({ref:"element"},{"data-simplebar":"init"}),[r("div",{class:l.wrapper},[r("div",{class:l.heightAutoObserverWrapperEl},[r("div",{class:l.heightAutoObserverEl})]),r("div",{class:l.mask},[r("div",{class:l.offset},[r("div",W(W({},{onScroll:o,class:l.contentWrapper,tabIndex:n.tabIndex||_.defaultOptions.tabIndex,role:"region","aria-label":n.ariaLabel||_.defaultOptions.ariaLabel}),{ref:"scrollElement"}),[r("div",{class:l.contentEl,ref:"contentElement"},(i=s.default)===null||i===void 0?void 0:i.call(s))])])]),r("div",{class:l.placeholder})]),r("div",{class:"".concat(l.track," simplebar-horizontal")},[r("div",{class:l.scrollbar})]),r("div",{class:"".concat(l.track," simplebar-vertical")},[r("div",{class:l.scrollbar})])])}var bt=oe((N={name:"simplebar-vue",props:{autoHide:{type:Boolean,default:void 0},classNames:Object,forceVisible:{type:[Boolean,String],validator:function(t){return typeof t=="boolean"||t==="x"||t==="y"},default:void 0},ariaLabel:String,tabIndex:Number,direction:{type:String,validator:function(t){return t==="ltr"||t==="rtl"}},timeout:Number,clickOnTrack:{type:Boolean,default:void 0},scrollbarMinSize:Number,scrollbarMaxSize:Number},emits:["scroll"],data:function(){return{}},mounted:function(){for(var t=_.getOptions(this.$refs.element.attributes),i=0,r=Object.entries(this.$props);i<r.length;i++){var e=r[i],s=e[0],n=e[1];n!=null&&typeof n!="function"&&(t[s]=n)}this.SimpleBar=new _(this.$refs.element,t),this.scrollElement=this.$refs.scrollElement,this.contentElement=this.$refs.contentElement}},N[vt.beforeUnmount]=function(){var t;(t=this.SimpleBar)===null||t===void 0||t.unMount(),this.SimpleBar=void 0},N.methods={recalculate:function(){var t;(t=this.SimpleBar)===null||t===void 0||t.recalculate()}},N.render=function(t){var i=this;return mt({h:typeof t=="function"?t:ae,emit:function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return i.$emit.apply(i,r)},slots:this.$slots,props:this.$props})},N));export{bt as s};
