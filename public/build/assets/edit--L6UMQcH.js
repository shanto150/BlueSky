import{a as y,e as C,f as w,R as m,h,i as k,c as u,o as p,b as o,p as b,q as f,d as _,s as L,w as l,l as V,t as E,n as T,v as n,Q as I}from"./app-159dDsga.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const N={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},B={class:"ps-3"},G={"aria-label":"breadcrumb"},M={class:"breadcrumb mb-0 p-0"},S={class:"breadcrumb-item"},U={class:"breadcrumb-item"},D={class:"card"},O={key:0,class:"mt-2 center-body position-absolute top-50 start-50"},q={id:"addZoneform"},F={class:"card-body"},H={class:"row"},Q={class:"col-md-4"},R={class:"col-md-4"},Z={class:"col-md-4"},$={class:"card-footer"},P={__name:"edit",props:["id"],setup(v){const s=y(),c=v,d=C(!0),e=w({model:"",aircraft_id:"",iata_code:"",icao_code:"",useEmail:s.email});async function g(i){e.aircraft_id=i.id;try{const t=await m.post("/AircraftType/update",e);Notification.showToast("s",t.data.message)}catch(t){ErrorCatch.CatchError(t)}}A(c);async function A(i){try{s.GlobalLoading=!0,d.value=!1;const t=await m.post("editAircraft",{id:i}),r=t.data[0].model,a=t.data[0].iata_code,x=t.data[0].icao_code;e.model=r,e.iata_code=a,e.icao_code=x,s.GlobalLoading=!1,d.value=!0}catch(t){s.GlobalLoading=!1,d.value=!0,console.log(t)}}return h(()=>{}),(i,t)=>{const r=k("router-link");return p(),u(I,null,[o("div",N,[t[7]||(t[7]=o("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),o("div",B,[o("nav",G,[o("ol",M,[o("li",S,[b(r,{to:{name:"Home"}},{default:f(()=>t[4]||(t[4]=[_("Dashboard")])),_:1})]),o("li",U,[b(r,{to:{name:"aircraftList"}},{default:f(()=>t[5]||(t[5]=[_("Aircraft List")])),_:1})]),t[6]||(t[6]=o("li",{class:"breadcrumb-item active","aria-current":"page"},"Aircraft Edit",-1))])])])]),o("div",D,[t[13]||(t[13]=o("div",{class:"card-header"},[o("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Aircraft Edit")],-1)),V(s).GlobalLoading?(p(),u("div",O,t[8]||(t[8]=[o("div",{class:"loader-circle-57"},[o("img",{class:"position-absolute",src:E,height:"22",width:"22",alt:""})],-1)]))):L("",!0),l(o("form",q,[o("div",F,[o("div",H,[o("div",Q,[t[9]||(t[9]=o("label",{for:"input1",class:"form-label"},"Aircraft Model",-1)),l(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>e.model=a),class:"form-control",id:"model",name:"model",placeholder:"Aircraft Model"},null,512),[[n,e.model]])]),o("div",R,[t[10]||(t[10]=o("label",{for:"input1",class:"form-label"},"IATA Code",-1)),l(o("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>e.iata_code=a),class:"form-control",id:"iata_code",name:"iata_code",placeholder:"IATA Code"},null,512),[[n,e.iata_code]])]),o("div",Z,[t[11]||(t[11]=o("label",{for:"input1",class:"form-label"},"ICAO Code",-1)),l(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>e.icao_code=a),class:"form-control",id:"icao_code",name:"icao_code",placeholder:"ICAO Code"},null,512),[[n,e.icao_code]])])])]),o("div",$,[o("button",{type:"button",onClick:t[3]||(t[3]=a=>g(c)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Update"),t[12]||(t[12]=o("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])],512),[[T,d.value]])])],64)}}};export{P as default};
