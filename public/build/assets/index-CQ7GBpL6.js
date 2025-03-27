import{u as S,a as C,e as g,R as l,i as L,c as f,o as v,b as s,j as y,p as c,q as u,d as p,s as k,l as x,t as z,Q as N}from"./app-DgxQLPTl.js";import{V as b}from"./datatables.net-vue3-_ELWB7Zf.js";import{D as h}from"./dataTables.bootstrap5-Qp2d9fDu.js";import"./dataTables.buttons-Dy8KwnE2.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";import"./jquery-DCp-2klL.js";const O={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},T={class:"ps-3"},G={"aria-label":"breadcrumb"},M={class:"breadcrumb mb-0 p-0"},V={class:"breadcrumb-item"},A={class:"breadcrumb-item"},B={class:"ms-auto"},j={class:"btn-group"},q={class:"row position-relative"},I={class:"col-12"},R={id:"desgList",class:"card rounded rounded-2 shadow-none p-3"},F={key:0,class:"center-body position-absolute top-50 start-50"},X={__name:"index",setup(H){const _=S(),o=C();b.use(h),b.use(h);const m=g([]);g(),r();const w={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,layout:{topStart:{buttons:[{text:"Create new record",action:function(){editor.create({title:"Create new record",buttons:"Add"})}}]}},dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:["copy","csv","pdf","excel","print"],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Name",render:function(n,a,e){var t="";return t+=e.name,t}},{title:"Total User",render:function(n,a,e){var t="";return t+="0",t}},{title:"Created By",render:function(n,a,e){var t="";return t+=e.created_by,t+="<br>",t+='<span class="text-primary">',t+=e.created_at+"</span>",t}},{title:"Updated By",render:function(n,a,e){var t="";return t+=e.updated_by||"-",t+="<br>",e.updated_by&&(t+='<span class="text-primary">',t+=e.updated_at+"</span>"),t}},{title:"Status",render:function(n,a,e){var t="";return e.status==1?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':t+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>',t}},{title:"Action",render:function(n,a,e){var t="",i=e.idd,d=e.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" placement="top" data-item-id='+i+'> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;"></i> </button>',d==1?t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle status-change" data-item-id='+i+'> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>':t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle status-change" data-item-id='+i+' > <i class="fa-solid fa-check" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+i+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;"></i> </button>',t}}],drawCallback:function(n){$(".edit-item").on("click",function(a){var e=$(this).attr("data-item-id");_.push({name:"designationEdit",params:{id:e}})}),$(".delete-item").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this designation?",position:"center",buttons:[["<button><b>No</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"no")},!0],["<button><b>Yes</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"yes")},!0]],onClosed:async function(t,i,d){d=="yes"&&(l.post("deleteDesignation",{id:e}),r(),Notification.showToast("s","Successfully Designation Deleted."))}})}),$(".status-change").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this department?",position:"center",buttons:[["<button><b>No</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"no")},!0],["<button><b>Yes</b></button>",function(t,i){t.hide({transitionOut:"fadeOut"},i,"yes")},!0]],onClosed:async function(t,i,d){d=="yes"&&(l.post("changeDesgStatus",{id:e}),r(),Notification.showToast("s","Successfully Designation status Changed."))}})})}};async function r(){try{o.GlobalLoading=!0;const n=await l.get("getDesignation");m.value=n.data.data,o.GlobalLoading=!1}catch{o.GlobalLoading=!1}}async function D(){$("#log tbody").empty();try{o.GlobalLoading=!0;const n=await l.get("designationlog");o.GlobalLoading=!1,$.each(n.data.data,function(a,e){console.log("Date: "+e.description);var t="";t+="<tr>",t+="<td>"+MF.initCap(e.description)+"</td>",t+="<td>"+MF.datetime_format(e.created_at)+"</td>",t+="<td>"+JSON.stringify(e.properties)+"</td>",t+="</td>",$("#log").append(t)})}catch(n){console.log(n),o.GlobalLoading=!1}}return(n,a)=>{const e=L("router-link");return v(),f(N,null,[s("div",O,[a[5]||(a[5]=s("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),s("div",T,[s("nav",G,[s("ol",M,[s("li",V,[c(e,{to:{name:"Home"}},{default:u(()=>a[1]||(a[1]=[p("Dashboard")])),_:1})]),s("li",A,[c(e,{to:{name:"designationList"}},{default:u(()=>a[2]||(a[2]=[p("Setings")])),_:1})]),a[3]||(a[3]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Designation List",-1))])])]),s("div",B,[s("div",j,[c(e,{to:{name:"designationCreate"},class:"btn btn-primary btn-sm"},{default:u(()=>a[4]||(a[4]=[s("i",{class:"fa fa-circle-plus"},null,-1),p("Designation ")])),_:1})])])]),a[8]||(a[8]=y('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fa-solid fa-location-dot"></i></span><div class="info-agency-content"><span class="info-agency-text">Total</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa fa-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa-solid fa-circle-pause"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Inactive</span><span class="pending-agnt-number">20</span></div></div></div></div>',1)),s("div",q,[s("div",I,[s("div",R,[s("button",{type:"button",onClick:a[0]||(a[0]=t=>D()),class:"btn btn-sm rounded btn-primary w-25","data-bs-toggle":"modal","data-bs-target":"#exampleScrollableModal"},"Show Logs"),a[7]||(a[7]=y('<div class="modal fade" id="exampleScrollableModal" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content"><div class="modal-body"><table id="log" width="100%" class="table table-sm table-dark" style="color:red;--bs-table-color:lime;"><thead><tr><th>Action</th><th style="width:25%;">Created at</th><th>Details</th></tr></thead><tbody></tbody></table></div></div></div></div>',1)),x(o).GlobalLoading?(v(),f("div",F,a[6]||(a[6]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:z,height:"22",width:"22",alt:""})],-1)]))):k("",!0),c(x(b),{options:w,data:m.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{X as default};
