import{u as _,a as w,e as b,R as u,i as C,c as f,o as x,b as s,j as k,p as d,q as m,d as c,s as A,l as v,t as N,Q as T}from"./app-dALX9cpX.js";import{V as h}from"./datatables.net-vue3-DVKBn9AY.js";import{D as S}from"./dataTables.bootstrap5-CdL_h_-w.js";import"./jquery-B-jWKEo8.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const z={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},D={class:"ps-3"},L={"aria-label":"breadcrumb"},O={class:"breadcrumb mb-0 p-0"},j={class:"breadcrumb-item"},R={class:"ms-auto"},V={class:"btn-group"},B={class:"row position-relative"},I={class:"col-12"},H={id:"RoleList",class:"card rounded rounded-2 shadow-none p-3"},M={key:0,class:"center-body position-absolute top-50 start-50"},Q={__name:"index",setup(P){const r=_(),o=w();h.use(S);const g=b([]);b(),p();const y={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:[{extend:"excel",text:'<i class="fa fa-file-excel"></i> Excel',title:"Agents List",messageTop:function(){return"Agents List"},className:"btn btn-danger btn-sm text-white",exportOptions:{columns:[1,2,3,4,5,6,7,10]}},{extend:"csv",text:'<i class="fa fa-file-csv"></i> CSV',title:"Agents List",messageTop:function(){return"Agents List"},className:"btn btn-info btn-sm text-white",exportOptions:{columns:[1,2,3,4,5,6,7,10]}}],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL",width:"10%"},{title:"Agency Name & Code",render:function(n,a,t){var e="";return e+=t.name,e+="<br>",e+='<span class="text-primary">',e+=t.agent_code+"</span>",e}},{title:"Reference & Booking Code",render:function(n,a,t){var e="";return t.iata_number?e+="IATA":e+="Non-IATA",e+="<br>",t.hajj_agency_number?(e+='<span class="text-primary">',e+="Hajj</span>"):(e+='<span class="text-primary">',e+="Non-Hajj</span>"),e}},{title:"Sector",data:"zone"},{title:"Date",render:function(n,a,t){var e="";return e+=t.owner,e+="<br>",e+='<span class="text-primary">',e+=t.designation+"</span>",e}},{title:"No. of Pax ",data:"phone"},{title:"GDS & Airlines PNR",data:"kam"},{title:"Total Fare",data:"net_balance"},{title:"Last Ticketing Time & Way Type",data:"status"},{title:"Ticket No. & Date",data:"status"},{title:"Created By",render:function(n,a,t){var e="";return e+=t.created_by,e+="<br>",e+='<span class="text-primary">',e+=t.created_at+"</span>",e}},{title:"Updated By",render:function(n,a,t){var e="";return e+=t.updated_by||"-",e+="<br>",t.updated_by&&(e+='<span class="text-primary">',e+=t.updated_at+"</span>"),e}},{title:"Status",render:function(n,a,t){var e="";return t.status=="Approved"?e+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Approved </div>':t.status=="Pending"?e+='<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Pending </div>':t.status=="Recommended"?e+='<div class="badge rounded-pill text-primary bg-light-primary p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Recommended </div>':t.status=="Hold"?e+='<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Hold </div>':t.status=="Decline"&&(e+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Declined </div>'),e}},{title:"Action",render:function(n,a,t){var e="",i=t.idd;return t.status,e+='<button  style="size: 30px; width: 30px; height: 30px;" class="btn btn-outline-warning rounded-circle agent-view" placement="top" data-item-id='+i+'> <i class="fa fa-eye" style="margin:1px 0px 11px -6px;font-size:14px;"></i> </button>',e+='<button type="button"  style="size:30px;width:30px;height:30px; margin-left: 5px;" class="btn btn-outline-info rounded-circle"><i class="fa-solid fa-file" style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>',e+='<button type="button"  style="size:30px;width:30px;height:30px; margin-left: 5px;" class="btn btn-outline-timer rounded-circle"><i class="fa-solid fa-ticket" style="margin:2px 0px 10px -6px;font-size:14px;"></i></button>',e+='<button style="size: 30px; width: 30px; height: 30px;  margin-top: 5px;" class="btn btn-outline-purple rounded-circle delete-item" data-item-id="1"> <i class="fa-solid fa-envelope" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',e+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px; margin-top: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id="1"> <i class="fa-solid fa-times" style="margin: 2px 0px 10px  -3px; font-size: 14px;"></i> </button>',e},width:"150%"}],drawCallback:function(n){$(".agent-approve").on("click",function(a){var t=$(this).attr("data-item-id");r.push({name:"agentApproved",params:{ids:t}})}),$(".agent-view").on("click",function(a){var t=$(this).attr("data-item-id");r.push({name:"agentView",params:{ids:t}})}),$(".agent-recommended").on("click",function(a){var t=$(this).attr("data-item-id");r.push({name:"agentRecomanded",params:{ids:t}})}),$(".delete-item").on("click",function(a){var t=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this area?",position:"center",buttons:[["<button><b>No</b></button>",function(e,i){e.hide({transitionOut:"fadeOut"},i,"no")},!0],["<button><b>Yes</b></button>",function(e,i){e.hide({transitionOut:"fadeOut"},i,"yes")},!0]],onClosed:async function(e,i,l){console.log(l),l=="yes"&&(u.post("deletearea",{id:t}),p(),Notification.showToast("s","Successfully Zone Deleted."))}})}),$(".status-change").on("click",function(a){var t=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this area?",position:"center",buttons:[["<button><b>No</b></button>",function(e,i){e.hide({transitionOut:"fadeOut"},i,"no")},!0],["<button><b>Yes</b></button>",function(e,i){e.hide({transitionOut:"fadeOut"},i,"yes")},!0]],onClosed:async function(e,i,l){l=="yes"&&(u.post("changeAreaStatus",{id:t}),p(),Notification.showToast("s","Successfully Zone status Changed."))}})})}};async function p(){try{o.GlobalLoading=!0;const n=await u.get("getAgent");g.value=n.data.data,o.GlobalLoading=!1}catch(n){console.log(n),o.GlobalLoading=!1}}return(n,a)=>{const t=C("router-link");return x(),f(T,null,[s("div",z,[a[6]||(a[6]=s("div",{class:"breadcrumb-title pe-3"}," Flight Management",-1)),s("div",D,[s("nav",L,[s("ol",O,[s("li",j,[d(t,{to:{name:"Home"}},{default:m(()=>a[0]||(a[0]=[c("Dashboard")])),_:1})]),a[1]||(a[1]=s("li",{class:"breadcrumb-item","aria-current":"page"},"Flight Management",-1)),a[2]||(a[2]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Booking Management",-1))])])]),s("div",R,[s("div",V,[d(t,{to:{name:"CreateAgency"},class:"btn btn-outline-primary btn-sm pt-2"},{default:m(()=>a[3]||(a[3]=[s("i",{class:"fa fa-file-import"},null,-1),c(" Import PNR ")])),_:1}),a[5]||(a[5]=c("   ")),d(t,{to:{name:"CreateAgency"},class:"btn btn-primary btn-sm"},{default:m(()=>a[4]||(a[4]=[s("i",{class:"fa fa-circle-plus"},null,-1),c(" Manual Booking & Ticketing ")])),_:1})])])]),a[8]||(a[8]=k('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fas fa-building"></i></span><div class="info-agency-content"><span class="info-agency-text">Total</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1"><i class="fa-solid fa-circle-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Confirm</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Failed</span><span class="pending-agnt-number">20</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="info-box mb-3"><span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span><div class="info-box-content"><span class="info-box-text">Cancelled</span><span class="info-box-number">5</span></div></div></div></div><div class="row mb-3"><div class="col-md-12"><div class="card rounded rounded-2 shadow-none p-3"><div class="row"><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Agency</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Carrier</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Class</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-1 mt-2"><i class="fa fa-times text-danger"></i> Clear </div></div></div></div></div>',2)),s("div",B,[s("div",I,[s("div",H,[v(o).GlobalLoading?(x(),f("div",M,a[7]||(a[7]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:N,height:"22",width:"22",alt:""})],-1)]))):A("",!0),d(v(h),{options:y,data:g.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{Q as default};
