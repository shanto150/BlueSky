import{u as _,a as w,e as p,E as c,i as z,o as m,c as b,b as s,p as r,q as f,d as g,j as A,l as v,s as S,t as C,F as k}from"./app-EuUtG9_b.js";import{P as x,D}from"./dataTables.bootstrap5-mM-rqalK.js";import"./jquery-CRP_LxUK.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const N={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},O={class:"ps-3"},L={"aria-label":"breadcrumb"},T={class:"breadcrumb mb-0 p-0"},V={class:"breadcrumb-item"},j={class:"ms-auto"},q={class:"btn-group"},B={class:"row position-relative"},G={class:"col-12"},I={id:"RoleList",class:"card rounded rounded-2 shadow-none p-3"},R={key:0,class:"center-body position-absolute top-50 start-50"},Y={__name:"index",setup(E){const h=_(),l=w();x.use(D);const u=p([]);p(),d();const y={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:["copy","csv","pdf","excel","print"],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Area",render:function(i,a,e){var t="";return t+=e.name,t+="<br>",t+='<span class="text-primary">',t+=e.district+"</span>",t}},{data:"division",title:"Division"},{title:"Created By",render:function(i,a,e){var t="";return t+=e.created_by,t+="<br>",t+='<span class="text-primary">',t+=e.created_at+"</span>",t}},{title:"Updated By",render:function(i,a,e){var t="";return t+=e.updated_by||"-",t+="<br>",e.updated_by&&(t+='<span class="text-primary">',t+=e.updated_at+"</span>"),t}},{title:"Status",render:function(i,a,e){var t="";return e.status==1?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':t+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>',t}},{title:"Action",render:function(i,a,e){var t="",n=e.idd,o=e.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" placement="top" data-item-id='+n+'> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;" ></i> </button>',o==1?t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>':t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-check" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+n+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;"></i> </button>',t}}],drawCallback:function(i){$(".edit-item").on("click",function(a){var e=$(this).attr("data-item-id");h.push({name:"zoneEdit",params:{id:e}})}),$(".delete-item").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this area?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){console.log(o),o=="yes"&&(c.post("deletearea",{id:e}),d(),Notification.showToast("s","Successfully Zone Deleted."))}})}),$(".status-change").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this area?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(c.post("changeAreaStatus",{id:e}),d(),Notification.showToast("s","Successfully Zone status Changed."))}})})}};async function d(){try{l.GlobalLoading=!0;const i=await c.get("getarea");u.value=i.data.data,l.GlobalLoading=!1}catch(i){console.log(i),l.GlobalLoading=!1}}return(i,a)=>{const e=z("router-link");return m(),b(k,null,[s("div",N,[a[3]||(a[3]=s("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),s("div",O,[s("nav",L,[s("ol",T,[s("li",V,[r(e,{to:{name:"Home"}},{default:f(()=>a[0]||(a[0]=[g("Dashboard")])),_:1})]),a[1]||(a[1]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Area List",-1))])])]),s("div",j,[s("div",q,[r(e,{to:{name:"zoneCreate"},class:"btn btn-primary btn-sm"},{default:f(()=>a[2]||(a[2]=[s("i",{class:"fa fa-circle-plus"},null,-1),g("Add New Area ")])),_:1})])])]),a[5]||(a[5]=A('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fa-solid fa-location-dot"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Area</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa fa-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active Area</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa-solid fa-circle-pause"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Inactive Area</span><span class="pending-agnt-number">20</span></div></div></div></div><div class="row"><div class="col-12"><div class="card rounded rounded-2 shadow-none p-3"><div class="row"><div class="col-md-6"><select class="form-select form-select-sm" id="s_area" data-placeholder="Choose one thing"><option value="">Select Area</option><option value="at">At</option></select></div><div class="col-md-6"><select class="form-select form-select-sm" id="s_status" data-placeholder="Choose one thing"><option>Select Status</option></select></div></div></div></div></div>',2)),s("div",B,[s("div",G,[s("div",I,[v(l).GlobalLoading?(m(),b("div",R,a[4]||(a[4]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:S,height:"22",width:"22",alt:""})],-1)]))):C("",!0),r(v(x),{options:y,data:u.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{Y as default};
