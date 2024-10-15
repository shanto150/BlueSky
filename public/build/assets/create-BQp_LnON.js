import{_ as v,i as g,o,c as i,b as e,p as b,q as u,d as r,z as m,j as f,s as a,F as x}from"./app-DyEkfUbt.js";import{_ as n}from"./rqf-M3LWHMbA.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const y={data(){return{isAgencyDetails:!0,isAgencyDocument:!1,isAgencyUserInfo:!1,isAssignKam:!1,classAgencyActive:!0,classDocActive:!1,classDocupActive:!1,classKAMActive:!1}},methods:{nextPhase(d){d==1?(this.isAgencyDetails=!1,this.isAgencyDocument=!0,this.classAgencyActive=!1,this.classDocActive=!0,window.scrollTo(0,0)):d==2?(this.isAgencyDocument=!1,this.isAgencyUserInfo=!0,this.classDocActive=!1,this.classDocupActive=!0,window.scrollTo(0,0)):d==3?(this.isAgencyUserInfo=!1,this.isAssignKam=!0,this.classKAMActive=!0,this.classDocupActive=!1):d==44?(this.isAgencyDetails=!0,this.isAgencyDocument=!1,this.classAgencyActive=!0,this.classDocActive=!1):d==42?(this.isAgencyDocument=!0,this.isAgencyUserInfo=!1,this.classDocupActive=!1,this.classDocActive=!0):d==40&&(this.isAgencyUserInfo=!0,this.isAssignKam=!1,this.classDocupActive=!0,this.classKAMActive=!1)}}},h={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},k={class:"ps-3"},A={"aria-label":"breadcrumb"},_={class:"breadcrumb mb-0 p-0"},D={class:"breadcrumb-item"},C={class:"breadcrumb-item"},w={class:"card",style:{"box-shadow":"none !important"}},N={class:"card-body"},P={class:"row"},E={class:"col-md-3 bg-light"},I={id:"stepper3",class:"bs-stepper gap-4 vertical linear"},R={class:"left-side-pro-bar",role:"tablist"},B={class:"col-md-8",style:{"margin-left":"20px"}},F={key:0,class:"row mt-2"},H={class:"row"},j={class:"col-12 mt-3 d-lg-none"},K={class:"col-12 col-lg-6 offset-11 d-none d-lg-block"},M={key:1,class:"row"},S={key:2,class:"row mt-5"},U={class:"col-12 d-lg-none"},z={class:"d-flex align-items-center gap-3"},T={class:"col-sm-2 col-md-2 col-lg-1 d-none d-lg-block"},L={key:0,class:"col-sm-8 col-md-9 d-none d-lg-block"},V={key:1,class:"col-sm-2 col-md-2 col-lg-1 d-none d-lg-block"},G={key:3,class:"row"},q={key:4,class:"row mt-5"},O={class:"col-12 d-lg-none"},Z={class:"d-flex align-items-center gap-3"},J={class:"col-12 col-lg-1 d-none d-lg-block"},Y={key:0,class:"col-md-9 d-none d-lg-block"},Q={key:1,class:"col-12 col-lg-1 d-none d-lg-block"},W={key:5,class:"row"},X={key:6,class:"row mt-5"},$={class:"col-12 d-lg-none"},ee={class:"d-flex align-items-center gap-3"},le={class:"col-12 col-lg-1 d-none d-lg-block"},se={class:"col-12 col-lg-1 d-none d-lg-block"};function te(d,l,oe,ie,s,t){const p=g("router-link");return o(),i(x,null,[e("div",h,[l[17]||(l[17]=e("div",{class:"breadcrumb-title pe-3"},"B2B Agency",-1)),e("div",k,[e("nav",A,[e("ol",_,[e("li",D,[b(p,{to:{name:"Home"}},{default:u(()=>l[14]||(l[14]=[r("Dashboard")])),_:1})]),e("li",C,[b(p,{to:{name:"AgentList"}},{default:u(()=>l[15]||(l[15]=[r("B2B Agency List")])),_:1})]),l[16]||(l[16]=e("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Agency",-1))])])])]),e("div",w,[e("div",N,[e("div",P,[e("div",E,[e("div",I,[e("div",R,[e("div",{class:m(["step",{active:s.classAgencyActive}]),"data-target":"#test-vl-1"},l[18]||(l[18]=[e("div",{class:"step-trigger",role:"tab",id:"stepper3trigger1","aria-controls":"test-vl-1","aria-selected":"true"},[e("div",{class:"bs-stepper-circle"},[e("i",{class:"lni lni-pointer"})]),e("div",{class:""},[e("h5",{class:"mb-0 steper-title"},"Agency Details")])],-1)]),2),l[22]||(l[22]=e("div",{class:"vl"},null,-1)),e("div",{class:m(["step",{active:s.classDocActive}]),"data-target":"#test-vl-2"},l[19]||(l[19]=[e("div",{class:"step-trigger",role:"tab",id:"stepper3trigger2","aria-controls":"test-vl-2","aria-selected":"false",disabled:"disabled"},[e("div",{class:"bs-stepper-circle"},[e("i",{class:"bx bx-file fs-4"})]),e("div",{class:""},[e("h5",{class:"mb-0 steper-title"},"Upload Docs")])],-1)]),2),l[23]||(l[23]=e("div",{class:"vl"},null,-1)),e("div",{class:m(["step",{active:s.classDocupActive}]),"data-target":"#test-vl-3"},l[20]||(l[20]=[e("div",{class:"step-trigger",role:"tab",id:"stepper3trigger3","aria-controls":"test-vl-3","aria-selected":"false",disabled:"disabled"},[e("div",{class:"bs-stepper-circle"},[e("i",{class:"bx bx-user fs-4"})]),e("div",{class:""},[e("h5",{class:"mb-0 steper-title"},"Primary User")])],-1)]),2),l[24]||(l[24]=e("div",{class:"vl"},null,-1)),e("div",{class:m(["step",{active:s.classKAMActive}]),"data-target":"#test-vl-4"},l[21]||(l[21]=[e("div",{class:"step-trigger",role:"tab",id:"stepper3trigger4","aria-controls":"test-vl-4","aria-selected":"false",disabled:"disabled"},[e("div",{class:"bs-stepper-circle"},[e("i",{class:"bx bx-briefcase fs-4"})]),e("div",{class:""},[e("h5",{class:"mb-0 steper-title"},"KAM & Remarks")])],-1)]),2)])])]),e("div",B,[s.isAgencyDetails?(o(),i("div",F,[l[25]||(l[25]=f('<div class="row"><div class="col-md-6"><div class="row"><div class="col-12 col-lg-12"><label for="name" class="form-label">Name</label><input type="text" class="form-control form-control-sm" id="name" placeholder="Enter Name"></div><div class="col-12 col-lg-12 mt-2"><label for="email" class="form-label">Email</label><input type="text" class="form-control form-control-sm" id="email" placeholder="Enter Email"></div><div class="col-12 col-lg-12 mt-2"><label for="country" class="form-label">Country</label><select class="form-select form-select-sm" id="country" aria-label="Default select example"><option>Select Country</option></select></div><div class="col-12 col-lg-12 mt-2 mt-2"><label for="email" class="form-label">Address</label><textarea class="form-control form-control-sm" cols="1" rows="1" id="address" placeholder="Enter Address"></textarea></div><div class="col-12 col-md-12 mt-2"><label for="date" class="form-label">Established Date</label><input type="date" class="form-control form-control-sm" id="edate" placeholder="Date of Birth"><div class="invalid-feedback"> Please select date. </div></div><div class="col-12 col-lg-12 mt-2"><label for="postal_code" class="form-label">Postal Code</label><input type="text" class="form-control form-control-sm" id="pcode" placeholder="Enter Postal Code"></div><div class="col-12 col-lg-12 mt-2"><label for="postal_code" class="form-label">Civil Aviation Certificate Number</label><input type="text" class="form-control form-control-sm" id="can" placeholder="Enter Postal Code"></div><div class="col-12 col-lg-12 d-flex align-items-center gap-3 mt-2"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> IATA </label></div><div class="form-check form-check-success"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioSuccess"><label class="form-check-label" for="flexRadioSuccess"> Non-IATA </label></div><div class="form-check form-check-info"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioInfo"><label class="form-check-label" for="flexRadioInfo"> Corporate </label></div></div><div class="col-12 col-md-12 mt-2"><input type="text" class="form-control form-control-sm" id="ln" placeholder="Enter Number"></div><div class="col-12 col-md-12 mt-2"><label for="agent_code" class="form-label">Company Logo (Max 2Mb)</label><div class="input-group mb-3"><input type="file" class="form-control" id="inputGroupFile02"><label class="input-group-text" for="inputGroupFile02">Upload</label></div></div></div></div><div class="col-md-6"><div class="row"><div class="col-12 col-lg-12"><label for="agent_code" class="form-label">Agency Code</label><input type="text" class="form-control form-control-sm" id="acode" placeholder="Enter Agency Code"></div><div class="col-12 col-md-12 mt-2"><label for="date" class="form-label">Phone</label><input type="text" class="form-control form-control-sm" id="pcode" placeholder="Enter Phone Number"></div><div class="col-12 col-lg-12 mt-2"><label for="city" class="form-label">City</label><select class="form-select form-select-sm" id="city" aria-label="Default select example"><option>Select City</option></select></div><div class="col-12 col-lg-12 mt-2"><label for="zone" class="form-label">Zone</label><select class="form-select form-select-sm" id="zone" aria-label="Default select example"><option>Select Zone</option></select></div><div class="col-12 col-md-12 mt-2"><label for="registration" class="form-label">Registration Number</label><input type="text" class="form-control form-control-sm" id="rnumber" placeholder="Enter Registration Number"></div><div class="col-12 col-md-12 mt-2"><label for="fax" class="form-label">Fax</label><input type="text" class="form-control form-control-sm" id="rnumber" placeholder="Enter Fax"></div><div class="col-12 col-md-12 mt-2"><label for="tl" class="form-label">Trade Licence</label><input type="text" class="form-control form-control-sm" id="tl" placeholder="Enter Trade Licence"></div><div class="col-12 col-lg-12 d-flex align-items-center gap-3 mt-2"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Hajj </label></div><div class="form-check form-check-success"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioSuccess"><label class="form-check-label" for="flexRadioSuccess"> Non-Hajj </label></div></div><div class="col-12 col-md-12 mt-2"><input type="text" class="form-control form-control-sm" id="hajn" placeholder="Enter Number"></div><div class="d-flex align-items-center mt-4"><img src="'+n+'" class="rounded-circle p-1 border" width="60" height="60" alt="..."><div class="flex-grow-1 ms-3"><p class="mb-0"><i class="btn-outline-success rounded-circle fa fa-circle-check"></i> Travel logo uploaded successfully.</p></div></div></div></div></div>',1)),e("div",H,[e("div",j,[e("button",{class:"btn btn-primary px-4 ms-2",onClick:l[0]||(l[0]=c=>t.nextPhase(1))},"Next")]),e("div",K,[e("button",{class:"btn btn-primary px-4 ms-2",onClick:l[1]||(l[1]=c=>t.nextPhase(1))},"Next")])])])):a("",!0),s.isAgencyDocument?(o(),i("div",M,l[26]||(l[26]=[e("p",null,[r("Upload Your Documents "),e("br"),r(),e("span",{style:{"font-size":"12px"}},"Supported Formats : Jpeg, Png or Pdf | Max File Size : 2MB")],-1),e("div",{class:"col-md-3 d-flex justify-content-center m-1 flex-column",style:{width:"250px","font-family":"Arial, Helvetica, sans-serif","font-size":"12px",color:"black",height:"100px","background-color":"transparent","border-radius":"3px",border:"2px dotted #7785f4"}},[e("div",{class:"d-inline text-center"},[e("img",{id:"doc_output",class:"rounded",src:n,height:"40",width:"40",alt:""})]),e("div",{class:"d-inline text-center"},"Trade License"),e("label",{for:"tl",role:"button",class:"d-inline text-center"},[r(" Choose File "),e("b",{style:{color:"#7C1843"}},"Here")]),e("input",{type:"file",id:"tl",form:"myform",name:"trade_licence_img",style:{display:"none"}})],-1),e("div",{class:"col-md-3 d-flex justify-content-center m-1 flex-column",style:{width:"250px","font-family":"Arial, Helvetica, sans-serif","font-size":"12px",color:"black",height:"100px","background-color":"transparent","border-radius":"3px",border:"2px dotted #7785f4"}},[e("div",{class:"d-inline text-center"},[e("img",{id:"doc_output",class:"rounded",src:n,height:"40",width:"40",alt:""})]),e("div",{class:"d-inline text-center"},"Civil Aviation Certificate"),e("label",{for:"tl",role:"button",class:"d-inline text-center"},[r(" Choose File "),e("b",{style:{color:"#7C1843"}},"Here")]),e("input",{type:"file",id:"tl",form:"myform",name:"trade_licence_img",style:{display:"none"}})],-1),e("div",{class:"col-md-3 d-flex justify-content-center m-1 flex-column",style:{width:"250px","font-family":"Arial, Helvetica, sans-serif","font-size":"12px",color:"black",height:"100px","background-color":"transparent","border-radius":"3px",border:"2px dotted #7785f4"}},[e("div",{class:"d-inline text-center"},[e("img",{id:"doc_output",class:"rounded",src:n,height:"40",width:"40",alt:""})]),e("div",{class:"d-inline text-center"},"IATA Certificate"),e("label",{for:"tl",role:"button",class:"d-inline text-center"},[r(" Choose File "),e("b",{style:{color:"#7C1843"}},"Here")]),e("input",{type:"file",id:"tl",form:"myform",name:"trade_licence_img",style:{display:"none"}})],-1),e("div",{class:"col-md-3 d-flex justify-content-center m-1 flex-column",style:{width:"250px","font-family":"Arial, Helvetica, sans-serif","font-size":"12px",color:"black",height:"100px","background-color":"transparent","border-radius":"3px",border:"2px dotted #7785f4"}},[e("div",{class:"d-inline text-center"},[e("img",{id:"doc_output",class:"rounded",src:n,height:"40",width:"40",alt:""})]),e("div",{class:"d-inline text-center"},"Hajj License"),e("label",{for:"tl",role:"button",class:"d-inline text-center"},[r(" Choose File "),e("b",{style:{color:"#7C1843"}},"Here")]),e("input",{type:"file",id:"tl",form:"myform",name:"trade_licence_img",style:{display:"none"}})],-1),e("div",{class:"col-md-3 d-flex justify-content-center m-1 flex-column",style:{width:"250px","font-family":"Arial, Helvetica, sans-serif","font-size":"12px",color:"black",height:"100px","background-color":"transparent","border-radius":"3px",border:"2px dotted #7785f4"}},[e("div",{class:"d-inline text-center"},[e("img",{id:"doc_output",class:"rounded",src:n,height:"40",width:"40",alt:""})]),e("div",{class:"d-inline text-center"},"TIN"),e("label",{for:"tl",role:"button",class:"d-inline text-center"},[r(" Choose File "),e("b",{style:{color:"#7C1843"}},"Here")]),e("input",{type:"file",id:"tl",form:"myform",name:"trade_licence_img",style:{display:"none"}})],-1),e("div",{class:"col-md-3 d-flex justify-content-center m-1 flex-column",style:{width:"250px","font-family":"Arial, Helvetica, sans-serif","font-size":"12px",color:"black",height:"100px","background-color":"transparent","border-radius":"3px",border:"2px dotted #7785f4"}},[e("div",{class:"d-inline text-center"},[e("img",{id:"doc_output",class:"rounded",src:n,height:"40",width:"40",alt:""})]),e("div",{class:"d-inline text-center"},"NID"),e("label",{for:"tl",role:"button",class:"d-inline text-center"},[r(" Choose File "),e("b",{style:{color:"#7C1843"}},"Here")]),e("input",{type:"file",id:"tl",form:"myform",name:"trade_licence_img",style:{display:"none"}})],-1)]))):a("",!0),s.isAgencyDocument?(o(),i("div",S,[e("div",U,[e("div",z,[e("button",{class:"btn btn-secondary px-4 ms-2 float-left",onClick:l[2]||(l[2]=c=>t.nextPhase(44))},"Back"),e("button",{class:"btn btn-primary px-4 ms-2 float-right",onClick:l[3]||(l[3]=c=>t.nextPhase(2))},"Next")])]),e("div",T,[e("button",{class:"btn btn-secondary px-4 ms-2",onClick:l[4]||(l[4]=c=>t.nextPhase(44))},"Back")]),s.isAgencyDocument?(o(),i("div",L)):a("",!0),s.isAgencyDocument?(o(),i("div",V,[e("button",{class:"btn btn-primary px-4 ms-2",onClick:l[5]||(l[5]=c=>t.nextPhase(2))},"Next")])):a("",!0)])):a("",!0),s.isAgencyUserInfo?(o(),i("div",G,l[27]||(l[27]=[f('<div class="col-md-6"><div class="row"><div class="col-12 col-lg-12"><label for="ownername" class="form-label">Owner Name</label><input type="text" class="form-control form-control-sm" id="ownername" placeholder="Enter Owner Name"></div><div class="col-12 col-lg-12 mt-2"><label for="nidNum" class="form-label">NID Number</label><input type="number" class="form-control form-control-sm" id="nidNum" placeholder="Enter NID Number"></div><div class="col-12 col-lg-12 mt-2"><label for="email" class="form-label">Email</label><input type="email" class="form-control form-control-sm" id="email" placeholder="Enter NID Number"></div><div class="col-12 col-md-12 mt-2"><label for="pro_img" class="form-label">Profile Image (Max 2Mb)</label><div class="input-group mb-3"><input type="file" class="form-control" id="inputGroupFile02"><label class="input-group-text" for="inputGroupFile02">Upload</label></div></div></div></div><div class="col-md-6"><div class="row"><div class="col-12 col-lg-12"><label for="desg" class="form-label">Designation</label><input type="text" class="form-control form-control-sm" id="desg" placeholder="Enter Designation"></div><div class="col-12 col-lg-12 mt-2"><label for="nidNum" class="form-label">Date of Birth</label><input type="date" class="form-control form-control-sm" id="nidNum" placeholder="Enter NID Number"></div><div class="col-12 col-lg-12 mt-2"><label for="phone" class="form-label">Phone</label><input type="phone" class="form-control form-control-sm" id="phone" placeholder="Enter Phone Number"></div><div class="d-flex align-items-center mt-4"><img src="'+n+'" class="rounded-circle p-1 border" width="60" height="60" alt="..."><div class="flex-grow-1 ms-3"><p class="mb-0"><i class="btn-outline-success rounded-circle fa fa-circle-check"></i> Profile image uploaded successfully.</p></div></div></div></div>',2)]))):a("",!0),s.isAgencyUserInfo?(o(),i("div",q,[e("div",O,[e("div",Z,[e("button",{class:"btn btn-secondary px-4 ms-2",onClick:l[6]||(l[6]=c=>t.nextPhase(42))},"Back"),e("button",{class:"btn btn-primary px-4 ms-2 float-right",onClick:l[7]||(l[7]=c=>t.nextPhase(3))},"Next")])]),e("div",J,[e("button",{class:"btn btn-secondary px-4 ms-2",onClick:l[8]||(l[8]=c=>t.nextPhase(42))},"Back")]),s.isAgencyUserInfo?(o(),i("div",Y)):a("",!0),s.isAgencyUserInfo?(o(),i("div",Q,[e("button",{class:"btn btn-primary px-4 ms-2",onClick:l[9]||(l[9]=c=>t.nextPhase(3))},"Next")])):a("",!0)])):a("",!0),s.isAssignKam?(o(),i("div",W,l[28]||(l[28]=[f('<div class="col-12 col-lg-6"><label for="kam" class="form-label">KAM</label><select class="form-select form-select-sm" id="kam" aria-label="Default select example"><option>Select KAM</option><option value="">Abir Mahmud</option><option value="">Atiqur Rahman</option></select></div><div class="col-12 col-lg-6"><label for="remarks" class="form-label">Remarks</label><textarea name="remarks" id="remarks" placeholder="Enter Short Note" class="form-control from-control-sm"></textarea></div>',2)]))):a("",!0),s.isAssignKam?(o(),i("div",X,[e("div",$,[e("div",ee,[e("button",{class:"btn btn-secondary px-4 ms-2",onClick:l[10]||(l[10]=c=>t.nextPhase(40))},"Back"),e("button",{class:"btn btn-primary px-4 ms-2 float-right",onClick:l[11]||(l[11]=c=>t.nextPhase(4))},"Submit")])]),e("div",le,[s.isAssignKam?(o(),i("button",{key:0,class:"btn btn-secondary px-4 ms-2",onClick:l[12]||(l[12]=c=>t.nextPhase(40))},"Back")):a("",!0)]),l[29]||(l[29]=e("div",{class:"col-md-9 d-none d-lg-block"},null,-1)),e("div",se,[s.isAssignKam?(o(),i("button",{key:0,class:"btn btn-primary px-4 ms-2",onClick:l[13]||(l[13]=c=>t.nextPhase(4))},"Submit")):a("",!0)])])):a("",!0)])])])])],64)}const de=v(y,[["render",te]]);export{de as default};
