<<<<<<<< HEAD:public/build/assets/dataTables.buttons-Cjg3mx8e.js
import{D as g,j as G}from"./dataTables.bootstrap5-CFgN-C-r.js";/*! Buttons for DataTables 3.2.2
========
import{j as G}from"./jquery-D5VFT4zF.js";import{D as g}from"./dataTables.bootstrap5-BlyJ_zfn.js";/*! Buttons for DataTables 3.2.2
>>>>>>>> d41cb144cfbd09063886f40a7f1b4c83ac61921b:public/build/assets/dataTables.buttons-DkgD-3S4.js
 * © SpryMedia Ltd - datatables.net/license
 */let r=G;var Q=0,J=0,D=g.ext.buttons,q=null;function I(t,e,n){r.fn.animate?t.stop().fadeIn(e,n):t.css("display","block")}function M(t,e,n){r.fn.animate?t.stop().fadeOut(e,n):(t.css("display","none"),n&&n.call(t))}var x=function(t,e){if(!g.versionCheck("2"))throw"Warning: Buttons requires DataTables 2 or newer";if(!(this instanceof x))return function(n){return new x(n,t).container()};typeof e>"u"&&(e={}),e===!0&&(e={}),Array.isArray(e)&&(e={buttons:e}),this.c=r.extend(!0,{},x.defaults,e),e.buttons&&(this.c.buttons=e.buttons),this.s={dt:new g.Api(t),buttons:[],listenKeys:"",namespace:"dtb"+Q++},this.dom={container:r("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};r.extend(x.prototype,{action:function(t,e){var n=this._nodeToButton(t);return e===void 0?n.conf.action:(n.conf.action=e,this)},active:function(t,e){var n=this._nodeToButton(t),i=this.c.dom.button.active,a=r(n.node);return n.inCollection&&this.c.dom.collection.button&&this.c.dom.collection.button.active!==void 0&&(i=this.c.dom.collection.button.active),e===void 0?a.hasClass(i):(a.toggleClass(i,e===void 0?!0:e),this)},add:function(t,e,n){var i=this.s.buttons;if(typeof e=="string"){for(var a=e.split("-"),o=this.s,s=0,h=a.length-1;s<h;s++)o=o.buttons[a[s]*1];i=o.buttons,e=a[a.length-1]*1}return this._expandButton(i,t,t!==void 0?t.split:void 0,(t===void 0||t.split===void 0||t.split.length===0)&&o!==void 0,!1,e),(n===void 0||n===!0)&&this._draw(),this},collectionRebuild:function(t,e){var n=this._nodeToButton(t);if(e!==void 0){var i;for(i=n.buttons.length-1;i>=0;i--)this.remove(n.buttons[i].node);for(n.conf.prefixButtons&&e.unshift.apply(e,n.conf.prefixButtons),n.conf.postfixButtons&&e.push.apply(e,n.conf.postfixButtons),i=0;i<e.length;i++){var a=e[i];this._expandButton(n.buttons,a,a!==void 0&&a.config!==void 0&&a.config.split!==void 0,!0,a.parentConf!==void 0&&a.parentConf.split!==void 0,null,a.parentConf)}}this._draw(n.collection,n.buttons)},container:function(){return this.dom.container},disable:function(t){var e=this._nodeToButton(t);return e.isSplit?r(e.node.childNodes[0]).addClass(this.c.dom.button.disabled).prop("disabled",!0):r(e.node).addClass(this.c.dom.button.disabled).prop("disabled",!0),e.disabled=!0,this._checkSplitEnable(),this},destroy:function(){r("body").off("keyup."+this.s.namespace);var t=this.s.buttons.slice(),e,n;for(e=0,n=t.length;e<n;e++)this.remove(t[e].node);this.dom.container.remove();var i=this.s.dt.settings()[0];for(e=0,n=i.length;e<n;e++)if(i.inst===this){i.splice(e,1);break}return this},enable:function(t,e){if(e===!1)return this.disable(t);var n=this._nodeToButton(t);return n.isSplit?r(n.node.childNodes[0]).removeClass(this.c.dom.button.disabled).prop("disabled",!1):r(n.node).removeClass(this.c.dom.button.disabled).prop("disabled",!1),n.disabled=!1,this._checkSplitEnable(),this},index:function(t,e,n){e||(e="",n=this.s.buttons);for(var i=0,a=n.length;i<a;i++){var o=n[i].buttons;if(n[i].node===t)return e+i;if(o&&o.length){var s=this.index(t,i+"-",o);if(s!==null)return s}}return null},name:function(){return this.c.name},node:function(t){if(!t)return this.dom.container;var e=this._nodeToButton(t);return r(e.node)},processing:function(t,e){var n=this.s.dt,i=this._nodeToButton(t);return e===void 0?r(i.node).hasClass("processing"):(r(i.node).toggleClass("processing",e),r(n.table().node()).triggerHandler("buttons-processing.dt",[e,n.button(t),n,r(t),i.conf]),this)},remove:function(t){var e=this._nodeToButton(t),n=this._nodeToHost(t),i=this.s.dt;if(e.buttons.length)for(var a=e.buttons.length-1;a>=0;a--)this.remove(e.buttons[a].node);e.conf.destroying=!0,e.conf.destroy&&e.conf.destroy.call(i.button(t),i,r(t),e.conf),this._removeKey(e.conf),r(e.node).remove();var o=r.inArray(e,n);return n.splice(o,1),this},text:function(t,e){var n=this._nodeToButton(t),i=n.textNode,a=this.s.dt,o=r(n.node),s=function(h){return typeof h=="function"?h(a,o,n.conf):h};return e===void 0?s(n.conf.text):(n.conf.text=e,i.html(s(e)),this)},_constructor:function(){var t=this,e=this.s.dt,n=e.settings()[0],i=this.c.buttons;n._buttons||(n._buttons=[]),n._buttons.push({inst:this,name:this.c.name});for(var a=0,o=i.length;a<o;a++)this.add(i[a]);e.on("destroy",function(s,h){h===n&&t.destroy()}),r("body").on("keyup."+this.s.namespace,function(s){if(!document.activeElement||document.activeElement===document.body){var h=String.fromCharCode(s.keyCode).toLowerCase();t.s.listenKeys.toLowerCase().indexOf(h)!==-1&&t._keypress(h,s)}})},_addKey:function(t){t.key&&(this.s.listenKeys+=r.isPlainObject(t.key)?t.key.key:t.key)},_draw:function(t,e){t||(t=this.dom.container,e=this.s.buttons),t.children().detach();for(var n=0,i=e.length;n<i;n++)t.append(e[n].inserter),t.append(" "),e[n].buttons&&e[n].buttons.length&&this._draw(e[n].collection,e[n].buttons)},_expandButton:function(t,e,n,i,a,o,s){var h=this.s.dt,c=!1,l=this.c.dom.collection,u=Array.isArray(e)?e:[e];e===void 0&&(u=Array.isArray(n)?n:[n]);for(var d=0,_=u.length;d<_;d++){var p=this._resolveExtends(u[d]);if(p){if(c=!!(p.config&&p.config.split),Array.isArray(p)){this._expandButton(t,p,f!==void 0&&f.conf!==void 0?f.conf.split:void 0,i,s!==void 0&&s.split!==void 0,o,s);continue}var f=this._buildButton(p,i,p.split!==void 0||p.config!==void 0&&p.config.split!==void 0,a);if(f){if(o!=null?(t.splice(o,0,f),o++):t.push(f),f.conf.dropIcon&&!f.conf.split&&r(f.node).addClass(this.c.dom.button.dropClass).append(this.c.dom.button.dropHtml),f.conf.buttons&&(f.collection=r("<"+l.container.content.tag+"/>"),f.conf._collection=f.collection,this._expandButton(f.buttons,f.conf.buttons,f.conf.split,!c,c,o,f.conf)),f.conf.split){f.collection=r("<"+l.container.tag+"/>"),f.conf._collection=f.collection;for(var y=0;y<f.conf.split.length;y++){var N=f.conf.split[y];typeof N=="object"&&(N.parent=s,N.collectionLayout===void 0&&(N.collectionLayout=f.conf.collectionLayout),N.dropup===void 0&&(N.dropup=f.conf.dropup),N.fade===void 0&&(N.fade=f.conf.fade))}this._expandButton(f.buttons,f.conf.buttons,f.conf.split,!c,c,o,f.conf)}f.conf.parent=s,p.init&&p.init.call(h.button(f.node),h,r(f.node),p)}}}},_buildButton:function(t,e,n,i){var a=this,o=this.c.dom,s,h=this.s.dt,c=function(v){return typeof v=="function"?v(h,d,t):v},l=r.extend(!0,{},o.button);if(e&&n&&o.collection.split?r.extend(!0,l,o.collection.split.action):i||e?r.extend(!0,l,o.collection.button):n&&r.extend(!0,l,o.split.button),t.spacer){var u=r("<"+l.spacer.tag+"/>").addClass("dt-button-spacer "+t.style+" "+l.spacer.className).html(c(t.text));return{conf:t,node:u,inserter:u,buttons:[],inCollection:e,isSplit:n,collection:null,textNode:u}}if(t.available&&!t.available(h,t)&&!t.html)return!1;var d;if(t.html)d=r(t.html);else{var _=function(v,m,H,b,w){b.action.call(m.button(H),v,m,H,b,w),r(m.table().node()).triggerHandler("buttons-action.dt",[m.button(H),m,H,b])},p=function(v,m,H,b){b.async?(a.processing(H[0],!0),setTimeout(function(){_(v,m,H,b,function(){a.processing(H[0],!1)})},b.async)):_(v,m,H,b,function(){})},f=t.tag||l.tag,y=t.clickBlurs===void 0?!0:t.clickBlurs;if(d=r("<"+f+"/>").addClass(l.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(v){v.preventDefault(),!d.hasClass(l.disabled)&&t.action&&p(v,h,d,t),y&&d.trigger("blur")}).on("keypress.dtb",function(v){v.keyCode===13&&(v.preventDefault(),!d.hasClass(l.disabled)&&t.action&&p(v,h,d,t))}),f.toLowerCase()==="a"&&d.attr("href","#"),f.toLowerCase()==="button"&&d.attr("type","button"),l.liner.tag){var N=r("<"+l.liner.tag+"/>").html(c(t.text)).addClass(l.liner.className);l.liner.tag.toLowerCase()==="a"&&N.attr("href","#"),d.append(N),s=N}else d.html(c(t.text)),s=d;t.enabled===!1&&d.addClass(l.disabled),t.className&&d.addClass(t.className),t.titleAttr&&d.attr("title",c(t.titleAttr)),t.attr&&d.attr(t.attr),t.namespace||(t.namespace=".dt-button-"+J++),t.config!==void 0&&t.config.split&&(t.split=t.config.split)}var K=this.c.dom.buttonContainer,k;K&&K.tag?k=r("<"+K.tag+"/>").addClass(K.className).append(d):k=d,this._addKey(t),this.c.buttonCreated&&(k=this.c.buttonCreated(t,k));var T;if(n){var C=e?r.extend(!0,this.c.dom.split,this.c.dom.collection.split):this.c.dom.split,A=C.wrapper;T=r("<"+A.tag+"/>").addClass(A.className).append(d);var E=r.extend(t,{autoClose:!0,align:C.dropdown.align,attr:{"aria-haspopup":"dialog","aria-expanded":!1},className:C.dropdown.className,closeButton:!1,splitAlignClass:C.dropdown.splitAlignClass,text:C.dropdown.text});this._addKey(E);var L=function(v,m,H,b){D.split.action.call(m.button(T),v,m,H,b),r(m.table().node()).triggerHandler("buttons-action.dt",[m.button(H),m,H,b]),H.attr("aria-expanded",!0)},B=r('<button class="'+C.dropdown.className+' dt-button"></button>').html(this.c.dom.button.dropHtml).addClass(this.c.dom.button.dropClass).on("click.dtb",function(v){v.preventDefault(),v.stopPropagation(),B.hasClass(l.disabled)||L(v,h,B,E),y&&B.trigger("blur")}).on("keypress.dtb",function(v){v.keyCode===13&&(v.preventDefault(),B.hasClass(l.disabled)||L(v,h,B,E))});t.split.length===0&&B.addClass("dtb-hide-drop"),T.append(B).attr(E.attr)}return{conf:t,node:n?T.get(0):d.get(0),inserter:n?T:k,buttons:[],inCollection:e,isSplit:n,inSplit:i,collection:null,textNode:s}},_checkSplitEnable:function(t){t||(t=this.s.buttons);for(var e=0;e<t.length;e++){var n=t[e];if(n.isSplit){var i=n.node.childNodes[1];this._checkAnyEnabled(n.buttons)?r(i).removeClass(this.c.dom.button.disabled).prop("disabled",!1):r(i).addClass(this.c.dom.button.disabled).prop("disabled",!1)}else n.isCollection&&this._checkSplitEnable(n.buttons)}},_checkAnyEnabled:function(t){for(var e=0;e<t.length;e++)if(!t[e].disabled)return!0;return!1},_nodeToButton:function(t,e){e||(e=this.s.buttons);for(var n=0,i=e.length;n<i;n++){if(e[n].node===t||r(e[n].node).children().eq(0).get(0)===t)return e[n];if(e[n].buttons.length){var a=this._nodeToButton(t,e[n].buttons);if(a)return a}}},_nodeToHost:function(t,e){e||(e=this.s.buttons);for(var n=0,i=e.length;n<i;n++){if(e[n].node===t)return e;if(e[n].buttons.length){var a=this._nodeToHost(t,e[n].buttons);if(a)return a}}},_keypress:function(t,e){if(!e._buttonsHandled){var n=function(a,o){if(a.key){if(a.key===t)e._buttonsHandled=!0,r(o).click();else if(r.isPlainObject(a.key)){if(a.key.key!==t||a.key.shiftKey&&!e.shiftKey||a.key.altKey&&!e.altKey||a.key.ctrlKey&&!e.ctrlKey||a.key.metaKey&&!e.metaKey)return;e._buttonsHandled=!0,r(o).click()}}},i=function(a){for(var o=0,s=a.length;o<s;o++)n(a[o].conf,a[o].node),a[o].buttons.length&&i(a[o].buttons)};i(this.s.buttons)}},_removeKey:function(t){if(t.key){var e=r.isPlainObject(t.key)?t.key.key:t.key,n=this.s.listenKeys.split(""),i=r.inArray(e,n);n.splice(i,1),this.s.listenKeys=n.join("")}},_resolveExtends:function(t){var e=this,n=this.s.dt,i,a,o=function(u){for(var d=0;!r.isPlainObject(u)&&!Array.isArray(u);){if(u===void 0)return;if(typeof u=="function"){if(u=u.call(e,n,t),!u)return!1}else if(typeof u=="string"){if(!D[u])return{html:u};u=D[u]}if(d++,d>30)throw"Buttons: Too many iterations"}return Array.isArray(u)?u:r.extend({},u)};for(t=o(t);t&&t.extend;){if(!D[t.extend])throw"Cannot extend unknown button type: "+t.extend;var s=o(D[t.extend]);if(Array.isArray(s))return s;if(!s)return!1;var h=s.className;t.config!==void 0&&s.config!==void 0&&(t.config=r.extend({},s.config,t.config)),t=r.extend({},s,t),h&&t.className!==h&&(t.className=h+" "+t.className),t.extend=s.extend}var c=t.postfixButtons;if(c)for(t.buttons||(t.buttons=[]),i=0,a=c.length;i<a;i++)t.buttons.push(c[i]);var l=t.prefixButtons;if(l)for(t.buttons||(t.buttons=[]),i=0,a=l.length;i<a;i++)t.buttons.splice(i,0,l[i]);return t},_popover:function(t,e,n){var i=e,a=this.c,o=!1,s=r.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",closeButton:!0,containerClassName:a.dom.collection.container.className,contentClassName:a.dom.collection.container.content.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",rightAlignClassName:"dt-button-right",tag:a.dom.collection.container.tag},n),h=s.tag+"."+s.containerClassName.replace(/ /g,"."),c=e.node(),l=s.collectionLayout.includes("fixed")?r("body"):e.node(),u=function(){o=!0,M(r(h),s.fade,function(){r(this).detach()}),r(i.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),r("div.dt-button-background").off("click.dtb-collection"),x.background(!1,s.backgroundClassName,s.fade,l),r(window).off("resize.resize.dtb-collection"),r("body").off(".dtb-collection"),i.off("buttons-action.b-internal"),i.off("destroy"),r("body").trigger("buttons-popover-hide.dt")};if(t===!1){u();return}var d=r(i.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes());if(d.length&&(l.closest(h).length&&(l=d.eq(0)),u()),s.sort){var _=r("button",t).map(function(b,w){return{text:r(w).text(),el:w}}).toArray();_.sort(function(b,w){return b.text.localeCompare(w.text)}),r(t).append(_.map(function(b){return b.el}))}var p=r(".dt-button",t).length,f="";p===3?f="dtb-b3":p===2?f="dtb-b2":p===1&&(f="dtb-b1");var y=r("<"+s.tag+"/>").addClass(s.containerClassName).addClass(s.collectionLayout).addClass(s.splitAlignClass).addClass(f).css("display","none").attr({"aria-modal":!0,role:"dialog"});t=r(t).addClass(s.contentClassName).attr("role","menu").appendTo(y),c.attr("aria-expanded","true"),l.parents("body")[0]!==document.body&&(l=r(document.body).children("div, section, p").last()),s.popoverTitle?y.prepend('<div class="dt-button-collection-title">'+s.popoverTitle+"</div>"):s.collectionTitle&&y.prepend('<div class="dt-button-collection-title">'+s.collectionTitle+"</div>"),s.closeButton&&y.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable"),I(y.insertAfter(l),s.fade);var N=r(e.table().container()),K=y.css("position");if((s.span==="container"||s.align==="dt-container")&&(l=l.parent(),y.css("width",N.width())),K==="absolute"){var k=r(l[0].offsetParent),T=l.position(),C=l.offset(),A=k.offset(),E=k.position(),L=window.getComputedStyle(k[0]);A.height=k.outerHeight(),A.width=k.width()+parseFloat(L.paddingLeft),A.right=A.left+A.width,A.bottom=A.top+A.height;var B=T.top+l.outerHeight(),v=T.left;y.css({top:B,left:v}),L=window.getComputedStyle(y[0]);var m=y.offset();m.height=y.outerHeight(),m.width=y.outerWidth(),m.right=m.left+m.width,m.bottom=m.top+m.height,m.marginTop=parseFloat(L.marginTop),m.marginBottom=parseFloat(L.marginBottom),s.dropup&&(B=T.top-m.height-m.marginTop-m.marginBottom),(s.align==="button-right"||y.hasClass(s.rightAlignClassName))&&(v=T.left-m.width+l.outerWidth()),(s.align==="dt-container"||s.align==="container")&&v<T.left&&(v=-T.left),E.left+v+m.width>r(window).width()&&(v=r(window).width()-m.width-E.left),C.left+v<0&&(v=-C.left),E.top+B+m.height>r(window).height()+r(window).scrollTop()&&(B=T.top-m.height-m.marginTop-m.marginBottom),k.offset().top+B<r(window).scrollTop()&&(B=T.top+l.outerHeight()),y.css({top:B,left:v})}else{var H=function(){var b=r(window).height()/2,w=y.height()/2;w>b&&(w=b),y.css("marginTop",w*-1)};H(),r(window).on("resize.dtb-collection",function(){H()})}s.background&&x.background(!0,s.backgroundClassName,s.fade,s.backgroundHost||l),r("div.dt-button-background").on("click.dtb-collection",function(){}),s.autoClose&&setTimeout(function(){i.on("buttons-action.b-internal",function(b,w,O,Z){Z[0]!==l[0]&&u()})},0),r(y).trigger("buttons-popover.dt"),i.on("destroy",u),setTimeout(function(){o=!1,r("body").on("click.dtb-collection",function(b){if(!o){var w=r.fn.addBack?"addBack":"andSelf",O=r(b.target).parent()[0];(!r(b.target).parents()[w]().filter(t).length&&!r(O).hasClass("dt-buttons")||r(b.target).hasClass("dt-button-background"))&&u()}}).on("keyup.dtb-collection",function(b){b.keyCode===27&&u()}).on("keydown.dtb-collection",function(b){var w=r("a, button",t),O=document.activeElement;b.keyCode===9&&(w.index(O)===-1?(w.first().focus(),b.preventDefault()):b.shiftKey?O===w[0]&&(w.last().focus(),b.preventDefault()):O===w.last()[0]&&(w.first().focus(),b.preventDefault()))})},0)}});x.background=function(t,e,n,i){n===void 0&&(n=400),i||(i=document.body),t?I(r("<div/>").addClass(e).css("display","none").insertAfter(i),n):M(r("div."+e),n,function(){r(this).removeClass(e).remove()})};x.instanceSelector=function(t,e){if(t==null)return r.map(e,function(o){return o.inst});var n=[],i=r.map(e,function(o){return o.name}),a=function(o){if(Array.isArray(o)){for(var s=0,h=o.length;s<h;s++)a(o[s]);return}if(typeof o=="string")if(o.indexOf(",")!==-1)a(o.split(","));else{var c=r.inArray(o.trim(),i);c!==-1&&n.push(e[c].inst)}else if(typeof o=="number")n.push(e[o].inst);else if(typeof o=="object"&&o.nodeName)for(var l=0;l<e.length;l++)e[l].inst.dom.container[0]===o&&n.push(e[l].inst);else typeof o=="object"&&n.push(o)};return a(t),n};x.buttonSelector=function(t,e){for(var n=[],i=function(c,l,u){for(var d,_,p=0,f=l.length;p<f;p++)d=l[p],d&&(_=u!==void 0?u+p:p+"",c.push({node:d.node,name:d.conf.name,idx:_}),d.buttons&&i(c,d.buttons,_+"-"))},a=function(c,l){var u,d,_=[];i(_,l.s.buttons);var p=r.map(_,function(k){return k.node});if(Array.isArray(c)||c instanceof r){for(u=0,d=c.length;u<d;u++)a(c[u],l);return}if(c==null||c==="*")for(u=0,d=_.length;u<d;u++)n.push({inst:l,node:_[u].node});else if(typeof c=="number")l.s.buttons[c]&&n.push({inst:l,node:l.s.buttons[c].node});else if(typeof c=="string")if(c.indexOf(",")!==-1){var f=c.split(",");for(u=0,d=f.length;u<d;u++)a(f[u].trim(),l)}else if(c.match(/^\d+(\-\d+)*$/)){var y=r.map(_,function(k){return k.idx});n.push({inst:l,node:_[r.inArray(c,y)].node})}else if(c.indexOf(":name")!==-1){var N=c.replace(":name","");for(u=0,d=_.length;u<d;u++)_[u].name===N&&n.push({inst:l,node:_[u].node})}else r(p).filter(c).each(function(){n.push({inst:l,node:this})});else if(typeof c=="object"&&c.nodeName){var K=r.inArray(c,p);K!==-1&&n.push({inst:l,node:p[K]})}},o=0,s=t.length;o<s;o++){var h=t[o];a(e,h)}return n};x.stripData=function(t,e){return t!==null&&typeof t=="object"&&t.nodeName&&t.nodeType&&(t=t.innerHTML),typeof t!="string"||(t=x.stripHtmlScript(t),t=x.stripHtmlComments(t),(!e||e.stripHtml)&&(t=g.util.stripHtml(t)),(!e||e.trim)&&(t=t.trim()),(!e||e.stripNewlines)&&(t=t.replace(/\n/g," ")),(!e||e.decodeEntities)&&(q?t=q(t):(W.innerHTML=t,t=W.value)),(!e||e.escapeExcelFormula)&&t.match(/^[=+\-@\t\r]/)&&(console.log("matching and updateing"),t="'"+t)),t};x.entityDecoder=function(t){q=t};x.stripHtmlComments=function(t){var e;do e=t,t=t.replace(/(<!--.*?--!?>)|(<!--[\S\s]+?--!?>)|(<!--[\S\s]*?$)/g,"");while(t!==e);return t};x.stripHtmlScript=function(t){var e;do e=t,t=t.replace(/<script\b[^<]*(?:(?!<\/script[^>]*>)<[^<]*)*<\/script[^>]*>/gi,"");while(t!==e);return t};x.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{container:{className:"dt-button-collection",content:{className:"",tag:"div"},tag:"div"}},button:{tag:"button",className:"dt-button",active:"dt-button-active",disabled:"disabled",spacer:{className:"dt-button-spacer",tag:"span"},liner:{tag:"span",className:""},dropClass:"",dropHtml:'<span class="dt-button-down-arrow">&#x25BC;</span>'},split:{action:{className:"dt-button-split-drop-button dt-button",tag:"button"},dropdown:{align:"split-right",className:"dt-button-split-drop",splitAlignClass:"dt-button-split-left",tag:"button"},wrapper:{className:"dt-button-split",tag:"div"}}}};x.version="3.2.2";r.extend(D,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",closeButton:!1,dropIcon:!0,init:function(t,e){e.attr("aria-expanded",!1)},action:function(t,e,n,i){i._collection.parents("body").length?this.popover(!1,i):this.popover(i._collection,i),t.type==="keypress"&&r("a, button",i._collection).eq(0).focus()},attr:{"aria-haspopup":"dialog"}},split:{text:function(t){return t.i18n("buttons.split","Split")},className:"buttons-split",closeButton:!1,init:function(t,e){return e.attr("aria-expanded",!1)},action:function(t,e,n,i){this.popover(i._collection,i)},attr:{"aria-haspopup":"dialog"}},copy:function(){if(D.copyHtml5)return"copyHtml5"},csv:function(t,e){if(D.csvHtml5&&D.csvHtml5.available(t,e))return"csvHtml5"},excel:function(t,e){if(D.excelHtml5&&D.excelHtml5.available(t,e))return"excelHtml5"},pdf:function(t,e){if(D.pdfHtml5&&D.pdfHtml5.available(t,e))return"pdfHtml5"},pageLength:function(t){var e=t.settings()[0].aLengthMenu,n=[],i=[],a=function(h){return h.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},h.page.len())};if(Array.isArray(e[0]))n=e[0],i=e[1];else for(var o=0;o<e.length;o++){var s=e[o];r.isPlainObject(s)?(n.push(s.value),i.push(s.label)):(n.push(s),i.push(s))}return{extend:"collection",text:a,className:"buttons-page-length",autoClose:!0,buttons:r.map(n,function(h,c){return{text:i[c],className:"button-page-length",action:function(l,u){u.page.len(h).draw()},init:function(l,u,d){var _=this,p=function(){_.active(l.page.len()===h)};l.on("length.dt"+d.namespace,p),p()},destroy:function(l,u,d){l.off("length.dt"+d.namespace)}}}),init:function(h,c,l){var u=this;h.on("length.dt"+l.namespace,function(){u.text(l.text)})},destroy:function(h,c,l){h.off("length.dt"+l.namespace)}}},spacer:{style:"empty",spacer:!0,text:function(t){return t.i18n("buttons.spacer","")}}});g.Api.register("buttons()",function(t,e){e===void 0&&(e=t,t=void 0),this.selector.buttonGroup=t;var n=this.iterator(!0,"table",function(i){if(i._buttons)return x.buttonSelector(x.instanceSelector(t,i._buttons),e)},!0);return n._groupSelector=t,n});g.Api.register("button()",function(t,e){var n=this.buttons(t,e);return n.length>1&&n.splice(1,n.length),n});g.Api.registerPlural("buttons().active()","button().active()",function(t){return t===void 0?this.map(function(e){return e.inst.active(e.node)}):this.each(function(e){e.inst.active(e.node,t)})});g.Api.registerPlural("buttons().action()","button().action()",function(t){return t===void 0?this.map(function(e){return e.inst.action(e.node)}):this.each(function(e){e.inst.action(e.node,t)})});g.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",function(t){return this.each(function(e){for(var n=0;n<t.length;n++)typeof t[n]=="object"&&(t[n].parentConf=e);e.inst.collectionRebuild(e.node,t)})});g.Api.register(["buttons().enable()","button().enable()"],function(t){return this.each(function(e){e.inst.enable(e.node,t)})});g.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})});g.Api.register("button().index()",function(){var t=null;return this.each(function(e){var n=e.inst.index(e.node);n!==null&&(t=n)}),t});g.Api.registerPlural("buttons().nodes()","button().node()",function(){var t=r();return r(this.each(function(e){t=t.add(e.inst.node(e.node))})),t});g.Api.registerPlural("buttons().processing()","button().processing()",function(t){return t===void 0?this.map(function(e){return e.inst.processing(e.node)}):this.each(function(e){e.inst.processing(e.node,t)})});g.Api.registerPlural("buttons().text()","button().text()",function(t){return t===void 0?this.map(function(e){return e.inst.text(e.node)}):this.each(function(e){e.inst.text(e.node,t)})});g.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})});g.Api.register("button().popover()",function(t,e){return this.map(function(n){return n.inst._popover(t,this.button(this[0].node),e)})});g.Api.register("buttons().containers()",function(){var t=r(),e=this._groupSelector;return this.iterator(!0,"table",function(n){if(n._buttons)for(var i=x.instanceSelector(e,n._buttons),a=0,o=i.length;a<o;a++)t=t.add(i[a].container())}),t});g.Api.register("buttons().container()",function(){return this.containers().eq(0)});g.Api.register("button().add()",function(t,e,n){var i=this.context;if(i.length){var a=x.instanceSelector(this._groupSelector,i[0]._buttons);a.length&&a[0].add(e,t,n)}return this.button(this._groupSelector,t)});g.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this});g.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this});var F;g.Api.register("buttons.info()",function(t,e,n){var i=this;return t===!1?(this.off("destroy.btn-info"),M(r("#datatables_buttons_info"),400,function(){r(this).remove()}),clearTimeout(F),F=null,this):(F&&clearTimeout(F),r("#datatables_buttons_info").length&&r("#datatables_buttons_info").remove(),t=t?"<h2>"+t+"</h2>":"",I(r('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t).append(r("<div/>")[typeof e=="string"?"html":"append"](e)).css("display","none").appendTo("body")),n!==void 0&&n!==0&&(F=setTimeout(function(){i.buttons.info(!1)},n)),this.on("destroy.btn-info",function(){i.buttons.info(!1)}),this)});g.Api.register("buttons.exportData()",function(t){if(this.context.length)return X(new g.Api(this.context[0]),t)});g.Api.register("buttons.exportInfo()",function(t){return t||(t={}),{filename:U(t,this),title:V(t,this),messageTop:S(this,t,t.message||t.messageTop,"top"),messageBottom:S(this,t,t.messageBottom,"bottom")}});var U=function(t,e){var n=t.filename==="*"&&t.title!=="*"&&t.title!==void 0&&t.title!==null&&t.title!==""?t.title:t.filename;if(typeof n=="function"&&(n=n(t,e)),n==null)return null;n.indexOf("*")!==-1&&(n=n.replace(/\*/g,r("head > title").text()).trim()),n=n.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");var i=R(t.extension,t,e);return i||(i=""),n+i},R=function(t,e,n){return t==null?null:typeof t=="function"?t(e,n):t},V=function(t,e){var n=R(t.title,t,e);return n===null?null:n.indexOf("*")!==-1?n.replace(/\*/g,r("head > title").text()||"Exported data"):n},S=function(t,e,n,i){var a=R(n,e,t);if(a===null)return null;var o=r("caption",t.table().container()).eq(0);if(a==="*"){var s=o.css("caption-side");return s!==i?null:o.length?o.text():""}return a},W=r("<textarea/>")[0],X=function(t,e){var n=r.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,escapeExcelFormula:!1,trim:!0,format:{header:function(C){return x.stripData(C,n)},footer:function(C){return x.stripData(C,n)},body:function(C){return x.stripData(C,n)}},customizeData:null,customizeZip:null},e),i=t.columns(n.columns).indexes().map(function(C){var A=t.column(C);return n.format.header(A.title(),C,A.header())}).toArray(),a=t.table().footer()?t.columns(n.columns).indexes().map(function(C){var A=t.column(C).footer(),E="";if(A){var L=r(".dt-column-title",A);E=L.length?L.html():r(A).html()}return n.format.footer(E,C,A)}).toArray():null,o=r.extend({},n.modifier);t.select&&typeof t.select.info=="function"&&o.selected===void 0&&t.rows(n.rows,r.extend({selected:!0},o)).any()&&r.extend(o,{selected:!0});for(var s=t.rows(n.rows,o).indexes().toArray(),h=t.cells(s,n.columns,{order:o.order}),c=h.render(n.orthogonal).toArray(),l=h.nodes().toArray(),u=h.indexes().toArray(),d=t.columns(n.columns).count(),_=d>0?c.length/d:0,p=[],f=0,y=0,N=_;y<N;y++){for(var K=[d],k=0;k<d;k++)K[k]=n.format.body(c[f],u[f].row,u[f].column,l[f]),f++;p[y]=K}var T={header:i,headerStructure:$(n.format.header,t.table().header.structure(n.columns)),footer:a,footerStructure:$(n.format.footer,t.table().footer.structure(n.columns)),body:p};return n.customizeData&&n.customizeData(T),T};function $(t,e){for(var n=0;n<e.length;n++)for(var i=0;i<e[n].length;i++){var a=e[n][i];a&&(a.title=t(a.title,i,a.cell))}return e}r.fn.dataTable.Buttons=x;r.fn.DataTable.Buttons=x;r(document).on("init.dt plugin-init.dt",function(t,e){if(t.namespace==="dt"){var n=e.oInit.buttons||g.defaults.buttons;n&&!e._buttons&&new x(e,n).container()}});function j(t,e){var n=new g.Api(t),i=e||n.init().buttons||g.defaults.buttons;return new x(n,i).container()}g.ext.feature.push({fnInit:j,cFeature:"B"});g.feature&&g.feature.register("buttons",j);
