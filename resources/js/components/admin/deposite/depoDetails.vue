<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Deposit Management</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'depositList' }">Deposit List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Deposit Details</li>

                </ol>
            </nav>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzgYhF0qI90SHfDO6dN2IbZlNzwvkEsTiOA&s"
                            alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
                        <div class="mt-3">
                            <h4>ABC Travel Agency</h4>
                        </div>
                        <p><small class="text-blue">BLU0122323</small> | IATA</p>
                    </div>
                    <hr class="my-3">
                    <div class="text-center">
                        Status:
                        <div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i
                                class="bx bxs-circle me-1"></i>Requested </div>
                    </div>
                    <hr class="my-2">
                    <div class="pb-0 pt-0">
                        <div class="row">
                            <div class="col-md-6 pl-5 pr-2">
                                Credit:
                                <span class="text-red"><i class="fa fa-bangladeshi-taka-sign" style="font-size: 10px;">
                                        4150</i></span>
                            </div>
                            <div class="col-md-6">
                                Current:
                                <span class="text-nblue"><i class="fa fa-bangladeshi-taka-sign"
                                        style="font-size: 10px;"> 40000</i></span>
                            </div>
                        </div>
                    </div>
                    <hr class="my-2">
                    <div class="">
                        <table class="table table-responsive table-borderless table-purple bdr">
                            <tbody>
                                <tr>
                                    <td>Requested Amount:</td>
                                    <td><i class="fa fa-bangladeshi-taka-sign"
                                        style="font-size: 10px;"> 166670</i></td>
                                </tr>

                                <tr>
                                    <td>(-) Charge:</td>
                                    <td><i class="fa fa-bangladeshi-taka-sign"
                                        style="font-size: 10px;"></i> 2500 [1.5%]</td>
                                </tr>
                                <tr>
                                    <td>(-) Credit Amount:</td>
                                    <td><i class="fa fa-bangladeshi-taka-sign"
                                        style="font-size: 10px;"> 4170</i></td>
                                </tr>
                                <tr class="sub-total-bdr">
                                    <td>Total Amount:</td>
                                    <td><b><i class="fa fa-bangladeshi-taka-sign"
                                        style="font-size: 14px; color: #7239ea;"> 160000</i></b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr class="my-2">
                    <ul class="list-group list-group-flush">

                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 style="font-size: 14px;" class="mb-0">
                                Trade License
                            </h6>
                            <span class="text-secondary">
                                <img height="40" width="40" src="/public/theme/appimages/rqf.png" alt="">
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="row">

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="m-0 p-0" style="border-left: 5px solid #7239ea;"> &nbsp; Payment Information
                            </h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Payment Term:</b></label>
                                            <p class="m-0">Bank</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Payment Account:</b></label>
                                            <p class="m-0">1230294</p>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Branch:</b></label>
                                            <p class="m-0">Gulshan 1</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Issued Bank: </b></label>
                                            <p class="m-0">Bank Asia</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Reference No:</b></label>
                                            <p class="m-0">23492322</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Reference Date: </b></label>
                                            <p class="m-0">23-Sept-2024</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="m-0 p-0" style="border-left: 5px solid #39eadfcf;"> &nbsp;
                                Remarks:</h5>

                        </div>
                        <div class="card-body">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptate perferendis quod
                                tempore totam nobis voluptatibus debitis facere! Itaque quaerat delectus aspernatur
                                molestias! Nostrum ipsam corrupti voluptate labore nesciunt expedita.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="m-0 p-0" style="border-left: 5px solid #dfcd24cf;"> &nbsp;
                                Requester Information:</h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Request By:</b></label>
                                            <p class="m-0">Atiqur Rahman</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Request Date & Time:</b></label>
                                            <p class="m-0">23-Sept-2024 |13:05</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="col-lg-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="m-0 p-0" style="border-left: 5px solid #00d54a;"> &nbsp; Approval</h5>

                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="Kam" class="form-label">Status</label><select class="form-select form-select-sm"
                                id="city" aria-label="Default select example">
                                <option value="">Select One</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Decline">Decline</option>
                            </select>
                        </div>

                        <div class="col-md-12 mt-2">
                            <label for="Kam" class="form-label">Adjust Credit Amount ?</label><select
                                class="form-select form-select-sm" id="city" aria-label="Default select example">
                                <option value="Yes" selected>Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div class="col-md-12 mt-2">
                            <label for="date" class="form-label">Note</label>

                            <textarea class="form-control form-control-sm" name="note" id="note"></textarea>
                        </div>



                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-block">
                        <button class="btn btn-sm btn-outline-danger float-left">Cancel</button>

                        <button class="btn btn-sm btn-outline-primary float-end">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.text-red {
    color: red;
}

.text-nblue {
    color: #00bfff;
}

.table-purple {
    --bs-table-color: #000;
    --bs-table-bg: #f1ecfd;
    --bs-table-border-color: #fff;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff;
    color: var(--bs-table-color);
    border-color: var(--bs-table-border-color);
}
.bdr {
  border-radius: 6px;
  overflow: hidden;
}
.sub-total-bdr{
    border-top: 1px solid #1d1d1d4d !important;
}
</style>
