import{u as _,a as w,e as u,D as d,i as A,o as m,c as b,b as a,p as r,q as f,d as g,j as C,l as x,s as z,t as k,F as S}from"./app-BzoMQIll.js";import{P as v,D as N}from"./dataTables.bootstrap5-Bws9BpzD.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const O={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},j={class:"ps-3"},D={"aria-label":"breadcrumb"},B={class:"breadcrumb mb-0 p-0"},T={class:"breadcrumb-item"},L={class:"ms-auto"},H={class:"btn-group"},R={class:"row position-relative"},V={class:"col-12"},q={id:"RoleList",class:"card rounded rounded-2 shadow-none p-3"},I={key:0,class:"center-body position-absolute top-50 start-50"},K={__name:"index",setup(M){const y=_(),o=w();v.use(N);const p=u([]);u(),c();const h={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:["copy","csv","pdf","excel","print"],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Agent Details",render:function(n,s,e){var t="";return t+=e.name,t+="<br>",t+='<span class="text-primary">',t+=e.agent_code+"</span>",t+="<br>",t+='<span class="text-primary">',t+=e.email+"</span>",t}},{title:"Category",render:function(n,s,e){var t="";return e.iata_number?t+="IATA":t+="Non-IATA",t+="<br>",e.hajj_agency_number?(t+='<span class="text-primary">',t+="Hajj</span>"):(t+='<span class="text-primary">',t+="Non-Hajj</span>"),t}},{title:"Zone",data:"zone"},{title:"Owner Details",render:function(n,s,e){var t="";return t+=e.owner,t+="<br>",t+='<span class="text-primary">',t+=e.designation+"</span>",t}},{title:"Contact ",data:"phone"},{title:"KAM",data:"kam"},{title:"Net Balance",data:"net_balance"},{title:"Status",data:"status"},{title:"Created By",render:function(n,s,e){var t="";return t+=e.created_by,t+="<br>",t+='<span class="text-primary">',t+=e.created_at+"</span>",t}},{title:"Updated By",render:function(n,s,e){var t="";return t+=e.updated_by||"-",t+="<br>",e.updated_by&&(t+='<span class="text-primary">',t+=e.updated_at+"</span>"),t}},{title:"Status",render:function(n,s,e){var t="";return e.status=="Approved"?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':e.status=="Pending"?t+='<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Pending </div>':e.status=="Recommended"&&(t+='<div class="badge rounded-pill text-primary bg-light-primary p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Recommended </div>'),t}},{width:"150px",title:"Action",render:function(n,s,e){var t="";return e.idd,e.status,t+='<button type="button"  style="size:30px;width:30px;height:30px; margin-left: 5px;" class="btn btn-outline-info rounded-circle"><i class="fa-solid fa-file" style="margin:2px 0px 10px -4px;font-size:14px;"></i></button> <router-link style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle"> <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </router-link> <router-link  style="size: 30px; width: 30px; height: 30px;  margin-left: 5px;" class="btn btn-outline-primary rounded-circle" placement="top" > <i class="fa fa-eye" style="margin: 2px 0px 10px -6px; font-size: 14px;"></i> </router-link> <button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"  class="btn btn-outline-user-edit rounded-circle mt-2"><i class="fa-solid fa-user-pen"  style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button> <button type="button"  style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="mt-2 btn btn-outline-only-edit rounded-circle"> <i class="fa-solid fa-pencil" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button>  <button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"  class="mt-2 btn btn-outline-action-log rounded-circle">  <i class="fa-solid fa-arrow-trend-up" style="margin: 2px 0px 10px -6px; font-size: 14px;"></i> </button>',t}}],drawCallback:function(n){$(".edit-item").on("click",function(s){var e=$(this).attr("data-item-id");y.push({name:"zoneEdit",params:{id:e}})}),$(".delete-item").on("click",function(s){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this area?",position:"center",buttons:[["<button><b>No</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"no")},!0],["<button><b>Yes</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"yes")},!0]],onClosed:async function(t,i,l){console.log(l),l=="yes"&&(d.post("deletearea",{id:e}),c(),Notification.showToast("s","Successfully Zone Deleted."))}})}),$(".status-change").on("click",function(s){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this area?",position:"center",buttons:[["<button><b>No</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"no")},!0],["<button><b>Yes</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"yes")},!0]],onClosed:async function(t,i,l){l=="yes"&&(d.post("changeAreaStatus",{id:e}),c(),Notification.showToast("s","Successfully Zone status Changed."))}})})}};async function c(){try{o.GlobalLoading=!0;const n=await d.get("getAgent");p.value=n.data.data,o.GlobalLoading=!1}catch(n){console.log(n),o.GlobalLoading=!1}}return(n,s)=>{const e=A("router-link");return m(),b(S,null,[a("div",O,[s[3]||(s[3]=a("div",{class:"breadcrumb-title pe-3"}," B2B Agency",-1)),a("div",j,[a("nav",D,[a("ol",B,[a("li",T,[r(e,{to:{name:"Home"}},{default:f(()=>s[0]||(s[0]=[g("Dashboard")])),_:1})]),s[1]||(s[1]=a("li",{class:"breadcrumb-item active","aria-current":"page"},"B2B Agency List",-1))])])]),a("div",L,[a("div",H,[r(e,{to:{name:"CreateAgency"},class:"btn btn-primary btn-sm"},{default:f(()=>s[2]||(s[2]=[a("i",{class:"fa fa-circle-plus"},null,-1),g(" Agency ")])),_:1})])])]),s[5]||(s[5]=C('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fas fa-building"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Agency</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1"><i class="fa-solid fa-circle-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active Agency</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Pending</span><span class="pending-agnt-number">20</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="info-box mb-3"><span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span><div class="info-box-content"><span class="info-box-text">On Hold</span><span class="info-box-number">5</span></div></div></div></div><div class="row mb-3"><div class="col-md-12"><div class="card rounded rounded-2 shadow-none p-3"><div class="row"><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Category</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Zone</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select KAM</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-1 mt-2"><i class="fa fa-times text-danger"></i> Clear </div></div></div></div></div>',2)),a("div",R,[a("div",V,[a("div",q,[x(o).GlobalLoading?(m(),b("div",I,s[4]||(s[4]=[a("div",{class:"loader-circle-57"},[a("img",{class:"position-absolute",src:z,height:"22",width:"22",alt:""})],-1)]))):k("",!0),r(x(v),{options:h,data:p.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{K as default};
