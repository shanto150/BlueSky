<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">User Managemnet</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'AgentList' }">User List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Create New User</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Create New User</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-2">
                    <p class="text-center">Profile Image</p>
                    <img height="180" width="180" src="assets/images/icons/dummy_img.png" alt="">
                    <p class="text-center mt-1"><a href="" style="text-decoration: underline;">Change Image</a></p>
                </div>
                <div class="col-lg-8" style="border-left: 2px solid #dfeffd;">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="input1" class="form-label">Name</label>
                                    <input type="text" class="form-control form-control-sm" id="input1"
                                        placeholder="Enter Name">
                                </div>
                                <div class="col-md-12 mt-2">
                                    <label for="input4" class="form-label">Email</label><input type="email"
                                        class="form-control form-control-sm" id="input4" placeholder="Email">
                                </div>
                                <div class="col-md-12 mt-2"><label for="input7" class="form-label">Department</label>
                                    <select id="input7" class="form-control form-control-sm">
                                        <option>Choose...</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mt-2">
                                    <label for="input11" class="form-label">Office Location</label>
                                    <select id="input7" class="form-control form-control-sm">
                                        <option>Choose...</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mt-2">
                                    <label for="input11" class="form-label">Role</label>
                                    <select id="input7" class="form-control form-control-sm">
                                        <option>Choose...</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="input1" class="form-label">Staff ID</label>
                                    <input type="text" class="form-control form-control-sm" id="input1"
                                        placeholder="Enter Name">
                                </div>
                                <div class="col-md-12 mt-2">
                                    <label for="input4" class="form-label">Phone</label><input type="email"
                                        class="form-control form-control-sm" id="input4" placeholder="Email">
                                </div>

                                <div class="col-md-12 mt-2">
                                    <label for="input4" class="form-label">Designation</label><input type="email"
                                        class="form-control form-control-sm" id="input4" placeholder="Email">
                                </div>

                                <div class="col-md-12 mt-2">
                                    <label for="input4" class="form-label">Report To</label><input type="email"
                                        class="form-control form-control-sm" id="input4" placeholder="Email">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">

                        <button class="btn btn-danger px-4 ms-2  float-start">Back</button>
                        <button class="btn btn-primary px-4 ms-2 float-end">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
