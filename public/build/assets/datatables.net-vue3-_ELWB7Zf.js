import{I as x,e as p,g as j,h as I,ad as A,ae as C,af as b,b as g,a3 as L,a0 as O,L as S,a6 as V,l as B}from"./app-DgxQLPTl.js";const w=["childRow","column-sizing","column-visibility","destroy","draw","error","init","length","order","page","preDraw","preInit","preXhr","processing","requestChild","search","stateLoadParams","stateLoaded","stateSaveParams","xhr","autoFill","preAutoFill","buttons-action","buttons-processing","column-reorder","key","key-blur","key-focus","key-refocus","key-return-submit","responsive-display","responsive-resize","rowgroup-datasrc","pre-row-reorder","row-reorder","row-reordered","dtsb-inserted","deselect","select","select-blur","selectItems","selectStyle","user-select","stateRestore-change"];let m;const P={name:"Datatables.netVue",inheritAttrs:!1,use(u){m=u}},T=x({...P,props:{ajax:null,columns:null,data:null,options:null},emits:w,setup(u,{expose:i}){const o=u,h=p(null),d={},l=p(),k=p([]);j(()=>o.data,r=>{let e=l.value;e&&(f(e),e.clear(),e.rows.add(r).draw(!1))},{deep:!0}),I(()=>{var r;const e=A();let a=Object.assign({},o.options)||{};if(o.data&&(a.data=o.data,D(a.data)),o.columns&&(a.columns=o.columns),a.columns&&y(a.columns,e),o.ajax&&(a.ajax=o.ajax),a.columnDefs||(a.columnDefs=[]),e){let s=Object.keys(e.slots);for(let t=0;t<s.length;t++){let n=s[t];if(n.match(/^column\-/)){let c=n.replace("column-","");a.columnDefs.push({target:c.match(/^\d+$/)?parseInt(c):c+":name",render:"#"+n})}}y(a.columnDefs,e)}if(!m)throw new Error("DataTables library not set. See https://datatables.net/tn/19 for details.");l.value=new m(B(h),a),(r=l.value)==null||r.on("preXhr",function(){f(l.value)});for(let s of w)l.value&&e&&l.value.on(s,function(){var t=Array.from(arguments),n=t.shift();t.unshift({event:n,dt:l}),t.unshift(s),e.emit.apply(e,t)})}),C(()=>{var r;f(l.value),(r=l.value)==null||r.destroy(!0)});function D(r){k.value=r.value?r.value.slice():r.slice()}function v(r){return function(e,a,s,t){let n=t.settings.sTableId+","+t.row+","+t.col;if(!d[n]){let c=S("div",r({cellData:e,colIndex:t.col,rowData:s,rowIndex:t.row,type:a}));d[n]=document.createElement("div"),V(c,d[n])}return d[n]}}function y(r,e){if(e)for(let s=0;s<r.length;s++){let t=r[s];if(typeof t.render=="string"&&t.render.charAt(0)==="#"){var a=t.render.replace("#","");e.slots[a]&&(t.render=v(e.slots[a]))}else if(typeof t.render=="object"&&typeof t.render.display=="string"&&t.render.display.charAt(0)==="#"){var a=t.render.display.replace("#","");e.slots[a]&&(t.render.display=v(e.slots[a]))}}}function f(r){let e=Object.keys(d),a=r.table().node().id;for(var s=0;s<e.length;s++)e[s].indexOf(a+",")===0&&delete d[e[s]]}return i({dt:l}),(r,e)=>e[0]||(b(-1),e[0]=g("div",{class:"datatable"},[g("table",L({ref_key:"table",ref:h},r.$attrs,{style:{width:"100%"}}),[O(r.$slots,"default")],16)]),b(1),e[0])}}),z=(()=>{const u=T;return u.install=i=>{i.component("Datatables.netVue",u)},u})();export{z as V};
