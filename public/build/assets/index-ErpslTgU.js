import{u as _,a as w,e as b,R as r,i as D,c as f,o as g,b as s,j as z,p as l,q as u,d as p,s as k,l as v,t as S,Q as C}from"./app-Cbvf3scX.js";import{V as x}from"./datatables.net-vue3-B16gZ45M.js";import{D as L}from"./dataTables.bootstrap5--UFEBoNe.js";import"./jquery-nBIl-GXQ.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const N={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},O={class:"ps-3"},T={"aria-label":"breadcrumb"},V={class:"breadcrumb mb-0 p-0"},B={class:"breadcrumb-item"},j={class:"breadcrumb-item"},q={class:"ms-auto"},A={class:"btn-group"},G={class:"row position-relative"},I={class:"col-12"},R={id:"deptList",class:"card rounded rounded-2 shadow-none p-3"},H={key:0,class:"center-body position-absolute top-50 start-50"},J={__name:"index",setup(M){const y=_(),d=w();x.use(L);const m=b([]);b(),c();const h={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:["copy","csv","pdf","excel","print"],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Name",render:function(i,a,e){var t="";return t+=e.name,t}},{title:"Total User",render:function(i,a,e){var t="";return t+="0",t}},{title:"Created By",render:function(i,a,e){var t="";return t+=e.created_by,t+="<br>",t+='<span class="text-primary">',t+=e.created_at+"</span>",t}},{title:"Updated By",render:function(i,a,e){var t="";return t+=e.updated_by||"-",t+="<br>",e.updated_by&&(t+='<span class="text-primary">',t+=e.updated_at+"</span>"),t}},{title:"Status",render:function(i,a,e){var t="";return e.status==1?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':t+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>',t}},{title:"Action",render:function(i,a,e){var t="",n=e.idd,o=e.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" placement="top" data-item-id='+n+'> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;"></i> </button>',o==1?t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>':t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle status-change" data-item-id='+n+' > <i class="fa-solid fa-check" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+n+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;"></i> </button>',t}}],drawCallback:function(i){$(".edit-item").on("click",function(a){var e=$(this).attr("data-item-id");y.push({name:"deptEdit",params:{id:e}})}),$(".delete-item").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this department?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(r.post("deleteDept",{id:e}),c(),Notification.showToast("s","Successfully Department Deleted."))}})}),$(".status-change").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this department?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(r.post("changeDepartmentStatus",{id:e}),c(),Notification.showToast("s","Successfully Department status Changed."))}})})}};async function c(){try{d.GlobalLoading=!0;const i=await r.get("getdept");m.value=i.data.data,d.GlobalLoading=!1}catch{d.GlobalLoading=!1}}return(i,a)=>{const e=D("router-link");return g(),f(C,null,[s("div",N,[a[4]||(a[4]=s("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),s("div",O,[s("nav",T,[s("ol",V,[s("li",B,[l(e,{to:{name:"Home"}},{default:u(()=>a[0]||(a[0]=[p("Dashboard")])),_:1})]),s("li",j,[l(e,{to:{name:"departmentList"}},{default:u(()=>a[1]||(a[1]=[p("Setings")])),_:1})]),a[2]||(a[2]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Department List",-1))])])]),s("div",q,[s("div",A,[l(e,{to:{name:"deptCreate"},class:"btn btn-primary btn-sm"},{default:u(()=>a[3]||(a[3]=[s("i",{class:"fa fa-circle-plus"},null,-1),p("Department ")])),_:1})])])]),a[6]||(a[6]=z('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fa-solid fa-location-dot"></i></span><div class="info-agency-content"><span class="info-agency-text">Total</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa fa-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa-solid fa-circle-pause"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Inactive</span><span class="pending-agnt-number">20</span></div></div></div></div>',1)),s("div",G,[s("div",I,[s("div",R,[v(d).GlobalLoading?(g(),f("div",H,a[5]||(a[5]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:S,height:"22",width:"22",alt:""})],-1)]))):k("",!0),l(v(x),{options:h,data:m.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{J as default};
