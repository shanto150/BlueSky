<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3"> Traveller Management</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">
                        <router-link :to="{ name: 'TravelerList' }">Traveller Management</router-link>

                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        New Traveller
                    </li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row position-relative">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="m-0 p-0" style="border-left: 5px solid rgb(114, 57, 234);"> &nbsp;
                                        Traveller Availability Check</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="d-flex flex-row bd-highlight">
                                                <div class="p-2 bd-highlight w-100">
                                                    <input type="text" class="form-control" id="name" name="name"
                                                        placeholder="Enter Traveller Passport Number" />
                                                </div>
                                                <div class="p-2 bd-highlight">
                                                    <button class="w3-button w3-blue w3-round w3-medium">Check
                                                        Availability</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="m-0 p-0" style="border-left: 5px solid rgb(114, 57, 234);"> &nbsp; Personal Information</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <span class="text-bold">
                                                <b>PAX Type</b>
                                            </span>
                                            <div class="d-flex align-items-center gap-3 mt-2">

                                                <div class="form-check pt-1">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                    <label class="form-check-label" for="flexRadioDefault1"> <b>Adult</b> </label>
                                                </div>
                                                <div class="form-check pt-1">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioSuccess">
                                                    <label class="form-check-label" for="flexRadioSuccess"> <b>Children</b>
                                                    </label>
                                                </div>
                                                <div class="form-check pt-1">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDanger">
                                                    <label class="form-check-label" for="flexRadioDanger"> <b>Infant</b>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-2 bd-highlight pe-3">
                                            <label for="name" class="form-label"><b>Title</b></label>
                                            <select class="form-select form-control form-select-sm">
                                                <option value="1">Mr.</option>
                                                <option value="1">Miss.</option>
                                                <option value="2">Mrs.</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4 pe-3">
                                            <label for="name" class="form-label"><b>First Name (Given Name)</b></label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter First Name">
                                        </div>
                                        <div class="col-md-6 pe-3">
                                            <label for="name" class="form-label"><b>Last Name (Sur Name)</b></label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Last Name">
                                        </div>

                                        <div class="col-6 col-sm-6 col-md-6 mt-2">
                                            <label for="name" class="form-label">Date of Birth</label>
                                            <input type="date" class="form-control" id="name" name="name" placeholder="Enter Date of Birth">
                                        </div>

                                        <div class="col-6 col-sm-6 col-md-6 mt-2">
                                            <label for="name" class="form-label">Gender</label>
                                            <select class="form-select form-control form-select-sm">
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>

                                        <div class="col-6 col-sm-6 col-md-6 mt-1">
                                            <label for="name" class="form-label">Email</label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Email">
                                        </div>

                                        <div class="col-6 col-sm-6 col-md-6 mt-1">
                                            <label for="name" class="form-label">Phone</label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Phone">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="m-0 p-0" style="border-left: 5px solid #ffbc0f;"> &nbsp; Passport Information</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12">
                                            <label for="name" class="form-label">Passport Number</label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Passport Number">
                                        </div>

                                        <div class="col-12 col-sm-12 col-md-12 mt-2">
                                            <label for="name" class="form-label">Expiry Date</label>
                                            <input type="date" class="form-control" id="name" name="name" placeholder="Enter Date of Birth">
                                        </div>

                                        <div class="col-12 col-sm-12 col-md-12 mt-2">
                                            <label for="name" class="form-label">Nationality</label>
                                            <select class="form-select form-select-sm">
                                                <option value="1">Bangladeshi</option>
                                                <option value="2">American</option>
                                                <option value="3">Pakistani</option>
                                                <option value="4">Indian</option>
                                            </select>
                                        </div>

                                        <div class="col-12 col-sm-12 col-md-12 mt-2">
                                            <label for="name" class="form-label">Passport Image (Max 2MB)</label>
                                            <div class="input-group mb-3 input-group-sm">
                                                <input type="file" class="form-control" id="inputGroupFile02">
                                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
