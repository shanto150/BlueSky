import{u as _,a as w,e as R,F as d,i as z,c as p,o as m,b as a,j as S,p as r,q as b,d as f,s as C,l as g,t as T,G as k}from"./app-CfP8Ejyv.js";import{V as v,D as x}from"./dataTables.bootstrap5-CZlhRuJN.js";import{j as O}from"./responsive.bootstrap5-C8GU3D7C.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";import"./dataTables.buttons-CW5pSZJy.js";const N={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},L={class:"ps-3"},j={"aria-label":"breadcrumb"},D={class:"breadcrumb mb-0 p-0"},V={class:"breadcrumb-item"},q={class:"ms-auto"},B={class:"btn-group"},G={class:"row position-relative"},A={class:"col-12"},F={id:"RoleList",class:"card rounded rounded-2 shadow-none p-3"},I={key:0,class:"center-body position-absolute top-50 start-50"},K={__name:"index",setup(Y){const h=_(),l=w();v.use(x),x.Buttons.jszip(O);const u=R([]);c();const y={responsive:!0,destroy:!0,pageLength:30,lengthMenu:[3,10,20,30],ordering:!1,columnDefs:[{defaultContent:"0",targets:"_all"}],dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:[{extend:"excel",text:'<i class="fa fa-file-excel"></i> Excel',title:"Your Title",messageTop:function(){return"Fun"},className:"btn btn-danger btn-sm text-white",exportOptions:{columns:[1,2,3,5]}},{extend:"csv",text:'<i class="fa fa-file-csv"></i> CSV',title:"Your Title",messageTop:function(){return"Fun"},className:"btn btn-info btn-sm text-white",exportOptions:{columns:[1,2,3,5]}}],language:{search:"",searchPlaceholder:"Search by anything.."},columns:[{data:"DT_RowIndex",title:"SL"},{data:"name",title:"Role"},{data:"total_perms",title:"Permissions"},{title:"Created",render:function(i,s,e){var t="";return t+=e.created_by,t+="<br>",t+='<span class="text-primary">',t+=e.created_at+"</span>",t}},{title:"Updated",render:function(i,s,e){var t="";return t+=e.updated_by||"",t+="<br>",t+='<span class="text-primary">',t+=e.updated_at+"</span>",t}},{title:"Status",render:function(i,s,e){var t="";return e.status==1?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':t+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>',t}},{title:"Action",render:function(i,s,e){var t="",n=e.idd,o=e.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" placement="top" id="edit_tool" data-item-id='+n+'> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;" ></i> </button>',o==1?t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>':t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-check" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+n+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;"></i> </button>',t}}],drawCallback:function(i){$(".edit-item").on("click",function(s){var e=$(this).attr("data-item-id");console.log(e),h.push({name:"roleEdit",params:{id:e}})}),$(".delete-item").on("click",function(s){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this office location?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(d.post("deleteRole",{id:e}),c(),Notification.showToast("s","Successfully Role Deleted."))}})}),$(".status-change").on("click",function(s){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this role?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(d.post("changeRoleStatus",{id:e}),c(),Notification.showToast("s","Successfully Role status Changed."))}})})}};async function c(){try{l.GlobalLoading=!0;const i=await d.get("getroles");u.value=i.data.data,l.GlobalLoading=!1}catch(i){l.GlobalLoading=!1,console.log(i)}}return(i,s)=>{const e=z("router-link");return m(),p(k,null,[a("div",N,[s[3]||(s[3]=a("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),a("div",L,[a("nav",j,[a("ol",D,[a("li",V,[r(e,{to:{name:"Home"}},{default:b(()=>s[0]||(s[0]=[f("Dashboard")])),_:1})]),s[1]||(s[1]=a("li",{class:"breadcrumb-item active","aria-current":"page"},"Role List",-1))])])]),a("div",q,[a("div",B,[r(e,{to:{name:"roleCreate"},class:"btn btn-primary btn-sm"},{default:b(()=>s[2]||(s[2]=[a("i",{class:"fa fa-circle-plus"},null,-1),f("Role ")])),_:1})])])]),s[5]||(s[5]=S('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fas fa-key"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Permission</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa-solid fa-user-cog"></i></span><div class="active-agency-content"><span class="active-agency-text">Total Role</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-check"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Active Role</span><span class="pending-agnt-number">20</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="info-box mb-3"><span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span><div class="info-box-content"><span class="info-box-text">Inactive Role</span><span class="info-box-number">5</span></div></div></div></div><div class="row"><div class="col-12"><div class="card rounded rounded-2 shadow-none p-3"><div class="row"><div class="col-md-6"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Role</option></select></div><div class="col-md-6"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div></div></div></div></div>',2)),a("div",G,[a("div",A,[a("div",F,[g(l).GlobalLoading?(m(),p("div",I,s[4]||(s[4]=[a("div",{class:"loader-circle-57"},[a("img",{class:"position-absolute",src:T,height:"22",width:"22",alt:""})],-1)]))):C("",!0),r(g(v),{options:y,data:u.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{K as default};
