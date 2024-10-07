<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">B2B Agency</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'AgentList' }">B2B Agency List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Create New Agency</li>

                </ol>
            </nav>
        </div>
    </div>

    <div class="card" style="box-shadow: none !important;">
        <div class="card-body">
            <div class="row background-color-left-side-row">
                <div class="col-md-3 background-color-left-side">
                    <div id="stepper3" class="bs-stepper gap-4 vertical linear">
                        <div class="left-side-pro-bar" role="tablist">
                            <div class="step" :class="{ active: classAgencyActive }" data-target="#test-vl-1">
                                <div class="step-trigger" role="tab" id="stepper3trigger1" aria-controls="test-vl-1"
                                    aria-selected="true">
                                    <div class="bs-stepper-circle"><i class="lni lni-pointer "></i></div>
                                    <div class="">
                                        <h5 class="mb-0 steper-title">Agency Details</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div class="step" :class="{ active: classDocActive }" data-target="#test-vl-2">
                                <div class="step-trigger" role="tab" id="stepper3trigger2" aria-controls="test-vl-2"
                                    aria-selected="false" disabled="disabled">
                                    <div class="bs-stepper-circle"><i class="bx bx-file fs-4"></i></div>
                                    <div class="">
                                        <h5 class="mb-0 steper-title">Upload Documentations</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="vl"></div>

                            <div class="step" :class="{ active: classDocupActive }" data-target="#test-vl-3">
                                <div class="step-trigger" role="tab" id="stepper3trigger3" aria-controls="test-vl-3"
                                    aria-selected="false" disabled="disabled">
                                    <div class="bs-stepper-circle">
                                        <i class="bx bx-user fs-4"></i>
                                    </div>
                                    <div class="">
                                        <h5 class="mb-0 steper-title">Primary User Info</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="vl"></div>

                            <div class="step" :class="{ active: classKAMActive }" data-target="#test-vl-4">
                                <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="test-vl-4"
                                    aria-selected="false" disabled="disabled">
                                    <div class="bs-stepper-circle"><i class="bx bx-briefcase fs-4"></i></div>
                                    <div class="">
                                        <h5 class="mb-0 steper-title">Assign KAM & Remarks</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-md-8" style="margin-left: 20px;">

                    <div class="row mt-2" v-if="isAgencyDetails">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-12 col-lg-12">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control form-control-sm" id="name"
                                            placeholder="Enter Name">
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="text" class="form-control form-control-sm" id="email"
                                            placeholder="Enter Email">
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2">
                                        <label for="country" class="form-label">Country</label>
                                        <select class="form-select form-select-sm" id="country"
                                            aria-label="Default select example">
                                            <option>Select Country</option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2 mt-2">
                                        <label for="email" class="form-label">Address</label>

                                        <textarea class="form-control form-control-sm" cols="1" rows="1" id="address"
                                            placeholder="Enter Address"></textarea>
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <label for="date" class="form-label">Established Date</label>
                                        <input type="date" class="form-control form-control-sm" id="edate"
                                            placeholder="Date of Birth">
                                        <div class="invalid-feedback">
                                            Please select date.
                                        </div>
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2">
                                        <label for="postal_code" class="form-label">Postal Code</label>
                                        <input type="text" class="form-control form-control-sm" id="pcode"
                                            placeholder="Enter Postal Code">
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2">
                                        <label for="postal_code" class="form-label">Civil Aviation Certificate
                                            Number</label>
                                        <input type="text" class="form-control form-control-sm" id="can"
                                            placeholder="Enter Postal Code">
                                    </div>


                                    <div class="col-12 col-lg-12 d-flex align-items-center gap-3 mt-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                IATA
                                            </label>
                                        </div>
                                        <div class="form-check form-check-success">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioSuccess">
                                            <label class="form-check-label" for="flexRadioSuccess">
                                                Non-IATA
                                            </label>
                                        </div>

                                        <div class="form-check form-check-info">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioInfo">
                                            <label class="form-check-label" for="flexRadioInfo">
                                                Corporate
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <input type="text" class="form-control form-control-sm" id="ln"
                                            placeholder="Enter Number">
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <label for="agent_code" class="form-label">Company Logo (Max 2Mb)</label>

                                        <div class="input-group mb-3">
                                            <input type="file" class="form-control" id="inputGroupFile02">
                                            <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-12 col-lg-12">
                                        <label for="agent_code" class="form-label">Agency Code</label>
                                        <input type="text" class="form-control form-control-sm" id="acode"
                                            placeholder="Enter Agency Code">
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <label for="date" class="form-label">Phone</label>
                                        <input type="text" class="form-control form-control-sm" id="pcode"
                                            placeholder="Enter Phone Number">
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2">
                                        <label for="city" class="form-label">City</label>
                                        <select class="form-select form-select-sm" id="city"
                                            aria-label="Default select example">
                                            <option>Select City</option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-lg-12 mt-2">
                                        <label for="zone" class="form-label">Zone</label>
                                        <select class="form-select form-select-sm" id="zone"
                                            aria-label="Default select example">
                                            <option>Select Zone</option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <label for="registration" class="form-label">Registration Number</label>
                                        <input type="text" class="form-control form-control-sm" id="rnumber"
                                            placeholder="Enter Registration Number">
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <label for="fax" class="form-label">Fax</label>
                                        <input type="text" class="form-control form-control-sm" id="rnumber"
                                            placeholder="Enter Fax">
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <label for="tl" class="form-label">Trade Licence</label>
                                        <input type="text" class="form-control form-control-sm" id="tl"
                                            placeholder="Enter Trade Licence">
                                    </div>

                                    <div class="col-12 col-lg-12 d-flex align-items-center gap-3 mt-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Hajj
                                            </label>
                                        </div>
                                        <div class="form-check form-check-success">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioSuccess">
                                            <label class="form-check-label" for="flexRadioSuccess">
                                                Non-Hajj
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 mt-2">
                                        <input type="text" class="form-control form-control-sm" id="hajn"
                                            placeholder="Enter Number">
                                    </div>

                                    <div class="d-flex align-items-center mt-4">
                                        <img src="/public/theme/appimages/rqf.png" class="rounded-circle p-1 border"
                                            width="60" height="60" alt="...">
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0"><i
                                                    class="btn-outline-success rounded-circle fa fa-circle-check"></i>
                                                Travel logo uploaded successfully.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <!-- mobile version -->
                            <div class="col-12 mt-3	d-lg-none">
                                <button class="btn btn-primary px-4 ms-2" v-on:click="nextPhase(1)">Next</button>
                            </div>
                            <!-- end mobile version -->
                            <div class="col-12 col-lg-6 offset-11 d-none d-lg-block">
                                <button class="btn btn-primary px-4 ms-2" v-on:click="nextPhase(1)">Next</button>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="isAgencyDocument">
                        <p>Upload Your Documents <br> <span style="font-size: 12px;">Supported Formats : Jpeg, Png or
                                Pdf | Max File Size : 2MB</span></p>
                        <div class="col-md-3 d-flex justify-content-center m-1 flex-column"
                            style="width: 250px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: black; height: 100px; background-color: transparent; border-radius: 3px; border: 2px dotted #7785f4">
                            <div class="d-inline text-center">
                                <img id="doc_output" class="rounded" src="/public/theme/appimages/rqf.png" height="40"
                                    width="40" alt="">

                            </div>

                            <div class="d-inline text-center">Trade License</div>
                            <label for="tl" role="button" class="d-inline text-center">
                                Choose File <b style="color: #7C1843">Here</b></label>
                            <input type="file" id="tl" form="myform" name="trade_licence_img" style="display: none">
                        </div>
                        <div class="col-md-3 d-flex justify-content-center m-1 flex-column"
                            style="width: 250px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: black; height: 100px; background-color: transparent; border-radius: 3px; border: 2px dotted #7785f4">
                            <div class="d-inline text-center">
                                <img id="doc_output" class="rounded" src="/public/theme/appimages/rqf.png" height="40"
                                    width="40" alt="">

                            </div>

                            <div class="d-inline text-center">Civil Aviation Certificate</div>
                            <label for="tl" role="button" class="d-inline text-center">
                                Choose File <b style="color: #7C1843">Here</b></label>
                            <input type="file" id="tl" form="myform" name="trade_licence_img" style="display: none">
                        </div>

                        <div class="col-md-3 d-flex justify-content-center m-1 flex-column"
                            style="width: 250px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: black; height: 100px; background-color: transparent; border-radius: 3px; border: 2px dotted #7785f4">
                            <div class="d-inline text-center">
                                <img id="doc_output" class="rounded" src="/public/theme/appimages/rqf.png" height="40"
                                    width="40" alt="">
                            </div>

                            <div class="d-inline text-center">IATA Certificate</div>
                            <label for="tl" role="button" class="d-inline text-center">
                                Choose File <b style="color: #7C1843">Here</b></label>
                            <input type="file" id="tl" form="myform" name="trade_licence_img" style="display: none">
                        </div>

                        <div class="col-md-3 d-flex justify-content-center m-1 flex-column"
                            style="width: 250px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: black; height: 100px; background-color: transparent; border-radius: 3px; border: 2px dotted #7785f4">
                            <div class="d-inline text-center">
                                <img id="doc_output" class="rounded" src="/public/theme/appimages/rqf.png" height="40"
                                    width="40" alt="">

                            </div>

                            <div class="d-inline text-center">Hajj License</div>
                            <label for="tl" role="button" class="d-inline text-center">
                                Choose File <b style="color: #7C1843">Here</b></label>
                            <input type="file" id="tl" form="myform" name="trade_licence_img" style="display: none">
                        </div>
                        <div class="col-md-3 d-flex justify-content-center m-1 flex-column"
                            style="width: 250px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: black; height: 100px; background-color: transparent; border-radius: 3px; border: 2px dotted #7785f4">
                            <div class="d-inline text-center">
                                <img id="doc_output" class="rounded" src="/public/theme/appimages/rqf.png" height="40"
                                    width="40" alt="">

                            </div>

                            <div class="d-inline text-center">TIN</div>
                            <label for="tl" role="button" class="d-inline text-center">
                                Choose File <b style="color: #7C1843">Here</b></label>
                            <input type="file" id="tl" form="myform" name="trade_licence_img" style="display: none">
                        </div>

                        <div class="col-md-3 d-flex justify-content-center m-1 flex-column"
                            style="width: 250px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: black; height: 100px; background-color: transparent; border-radius: 3px; border: 2px dotted #7785f4">
                            <div class="d-inline text-center">
                                <img id="doc_output" class="rounded" src="/public/theme/appimages/rqf.png" height="40"
                                    width="40" alt="">

                            </div>

                            <div class="d-inline text-center">NID</div>
                            <label for="tl" role="button" class="d-inline text-center">
                                Choose File <b style="color: #7C1843">Here</b></label>
                            <input type="file" id="tl" form="myform" name="trade_licence_img" style="display: none">
                        </div>


                    </div>
                    <div class="row mt-5" v-if="isAgencyDocument">
                        <!-- mobile version -->
                        <div class="col-12 	d-lg-none">
                            <div class="d-flex align-items-center gap-3">
                                <button class="btn btn-secondary px-4 ms-2 float-left"
                                    v-on:click="nextPhase(44)">Back</button>

                                <button class="btn btn-primary px-4 ms-2 float-right"
                                    v-on:click="nextPhase(2)">Next</button>
                            </div>
                        </div>
                        <!-- end mobile version -->

                        <!-- big screen -->
                        <div class="col-sm-2 col-md-2 col-lg-1 d-none d-lg-block">
                            <button class="btn btn-secondary px-4 ms-2" v-on:click="nextPhase(44)">Back</button>
                        </div>
                        <div class="col-sm-8 col-md-9 d-none d-lg-block" v-if="isAgencyDocument"></div>
                        <div class="col-sm-2 col-md-2  col-lg-1 d-none d-lg-block" v-if="isAgencyDocument">
                            <button class="btn btn-primary px-4 ms-2" v-on:click="nextPhase(2)">Next</button>
                        </div>
                        <!-- end big screen -->

                    </div>
                    <div class="row" v-if="isAgencyUserInfo">

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <label for="ownername" class="form-label">Owner Name</label>
                                    <input type="text" class="form-control form-control-sm" id="ownername"
                                        placeholder="Enter Owner Name">
                                </div>
                                <div class="col-12 col-lg-12 mt-2">
                                    <label for="nidNum" class="form-label">NID Number</label>
                                    <input type="number" class="form-control form-control-sm" id="nidNum"
                                        placeholder="Enter NID Number">
                                </div>
                                <div class="col-12 col-lg-12 mt-2">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control form-control-sm" id="email"
                                        placeholder="Enter NID Number">
                                </div>
                                <div class="col-12 col-md-12 mt-2"><label for="pro_img" class="form-label">Profile Image
                                        (Max 2Mb)</label>
                                    <div class="input-group mb-3"><input type="file" class="form-control"
                                            id="inputGroupFile02"><label class="input-group-text"
                                            for="inputGroupFile02">Upload</label></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <label for="desg" class="form-label">Designation</label>
                                    <input type="text" class="form-control form-control-sm" id="desg"
                                        placeholder="Enter Designation">
                                </div>
                                <div class="col-12 col-lg-12 mt-2">
                                    <label for="nidNum" class="form-label">Date of Birth</label>
                                    <input type="date" class="form-control form-control-sm" id="nidNum"
                                        placeholder="Enter NID Number">
                                </div>
                                <div class="col-12 col-lg-12 mt-2">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="phone" class="form-control form-control-sm" id="phone"
                                        placeholder="Enter Phone Number">
                                </div>

                                <div class="d-flex align-items-center mt-4"><img src="/public/theme/appimages/rqf.png"
                                        class="rounded-circle p-1 border" width="60" height="60" alt="...">
                                    <div class="flex-grow-1 ms-3">
                                        <p class="mb-0"><i
                                                class="btn-outline-success rounded-circle fa fa-circle-check"></i>
                                            Profile image uploaded successfully.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div class="row mt-5" v-if="isAgencyUserInfo">
                        <!-- mobile version -->
                        <div class="col-12 	d-lg-none">
                            <div class="d-flex align-items-center gap-3">
                                <button class="btn btn-secondary px-4 ms-2" v-on:click="nextPhase(42)">Back</button>

                                <button class="btn btn-primary px-4 ms-2 float-right"
                                    v-on:click="nextPhase(3)">Next</button>
                            </div>
                        </div>
                        <!-- end mobile version -->



                        <div class="col-12 col-lg-1 d-none d-lg-block">
                            <button class="btn btn-secondary px-4 ms-2" v-on:click="nextPhase(42)">Back</button>
                        </div>
                        <div class="col-md-9 d-none d-lg-block" v-if="isAgencyUserInfo"></div>
                        <div class="col-12 col-lg-1 d-none d-lg-block" v-if="isAgencyUserInfo">
                            <button class="btn btn-primary px-4 ms-2" v-on:click="nextPhase(3)">Next</button>
                        </div>
                    </div>

                    <div class="row" v-if="isAssignKam">

                        <div class="col-12 col-lg-6">
                            <label for="kam" class="form-label">KAM</label>
                            <select class="form-select form-select-sm" id="kam" aria-label="Default select example">
                                <option>Select KAM</option>
                                <option value="">Abir Mahmud</option>
                                <option value="">Atiqur Rahman</option>
                            </select>
                        </div>

                        <div class="col-12 col-lg-6">
                            <label for="remarks" class="form-label">Remarks</label>
                            <textarea name="remarks" id="remarks" placeholder="Enter Short Note"
                                class="form-control from-control-sm"></textarea>
                        </div>

                    </div>

                    <div class="row mt-5" v-if="isAssignKam">
                        <!-- mobile version -->
                        <div class="col-12 	d-lg-none">
                            <div class="d-flex align-items-center gap-3">
                                <button class="btn btn-secondary px-4 ms-2" v-on:click="nextPhase(40)">Back</button>

                                <button class="btn btn-primary px-4 ms-2 float-right"
                                    v-on:click="nextPhase(4)">Submit</button>
                            </div>
                        </div>
                        <!-- end mobile version -->

                        <div class="col-12 col-lg-1 d-none d-lg-block">
                            <button class="btn btn-secondary px-4 ms-2" v-if="isAssignKam"
                                v-on:click="nextPhase(40)">Back</button>
                        </div>
                        <div class="col-md-9 d-none d-lg-block"></div>
                        <div class="col-12 col-lg-1 d-none d-lg-block">
                            <button class="btn btn-primary px-4 ms-2" v-if="isAssignKam"
                                v-on:click="nextPhase(4)">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            isAgencyDetails: true,
            isAgencyDocument: false,
            isAgencyUserInfo: false,
            isAssignKam: false,
            classAgencyActive: true,
            classDocActive: false,
            classDocupActive: false,
            classKAMActive: false,
        }
    },
    methods: {
        nextPhase(id) {
            if (id == 1) {
                this.isAgencyDetails = false;
                this.isAgencyDocument = true;
                this.classAgencyActive = false;
                this.classDocActive = true;
                window.scrollTo(0, 0);

            }
            else if (id == 2) {
                this.isAgencyDocument = false;
                this.isAgencyUserInfo = true;
                this.classDocActive = false;
                this.classDocupActive = true;
                window.scrollTo(0, 0);
            }
            else if (id == 3) {
                this.isAgencyUserInfo = false;
                this.isAssignKam = true;
                this.classKAMActive = true;
                this.classDocupActive = false;

            }

            else if (id == 44) {

                this.isAgencyDetails = true;
                this.isAgencyDocument = false;
                this.classAgencyActive = true;
                this.classDocActive = false;

            } else if (id == 42) {

                this.isAgencyDocument = true;
                this.isAgencyUserInfo = false;

                this.classDocupActive = false;
                this.classDocActive = true;

            }

            else if (id == 40) {

                this.isAgencyUserInfo = true;
                this.isAssignKam = false;
                this.classDocupActive = true;
                this.classKAMActive = false;


            }


        }
    }
}
</script>
<style>
.vl {
    border-left: 6px solid #fff;
    height: 80px;
    margin: -16px 0px -16px 18px;
}

.background-color-left-side-row {
    padding: 0px;
}

.background-color-left-side {
    background-color: #e4e5fe;
    margin: 0 0 0 15px;
    border-radius: 10px;
    min-height: 776px;
}

.left-side-pro-bar {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0;
    padding: 1rem;
    border-bottom: none;
    height: auto;
}

@media only screen and (max-width: 600px) {
    .background-color-left-side-row {
        padding: 0 10px 0 10px;
    }

    .background-color-left-side {
        background-color: #e4e5fe;
        margin: 0 0px 0 0px;
        border-radius: 10px;
        min-height: 500px;

    }
}
</style>
