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
                    <li class="breadcrumb-item active" aria-current="page">Approve Agency</li>

                </ol>
            </nav>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzgYhF0qI90SHfDO6dN2IbZlNzwvkEsTiOA&s"
                            alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
                        <div class="mt-3">
                            <h4>ABC Travel Agency</h4>
                        </div>
                    </div>
                    <hr class="my-3">
                    <div class="text-center">
                        Status:
                        <div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                class="bx bxs-circle me-1"></i>Approved </div>
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
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 style="font-size: 14px;" class="mb-0"> Civil Aviation Certificate</h6>
                            <span class="text-secondary"> <img height="40" width="40"
                                    src="/public/theme/appimages/rqf.png" alt="">
                            </span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 style="font-size: 14px;" class="mb-0"> IATA Certificate</h6>
                            <span class="text-secondary"> <img height="40" width="40"
                                    src="/public/theme/appimages/rqf.png" alt="">
                            </span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 style="font-size: 14px;" class="mb-0">Hajj Agency License</h6>
                            <span class="text-secondary"> <img height="40" width="40"
                                    src="/public/theme/appimages/rqf.png" alt="">
                            </span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 style="font-size: 14px;" class="mb-0">TIN</h6>
                            <span class="text-secondary"> <img height="40" width="40"
                                    src="/public/theme/appimages/rqf.png" alt="">
                            </span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 style="font-size: 14px;" class="mb-0">NID</h6>
                            <span class="text-secondary"> <img height="40" width="40"
                                    src="/public/theme/appimages/rqf.png" alt="">
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="m-0 p-0" style="border-left: 5px solid #027de2;"> &nbsp; Agency Details</h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Name:</b></label>
                                            <p class="m-0">Lorem ipsum dolor sit amet</p>
                                        </td>
                                        <td class="m-0 pl-2"  width="50%">
                                            <label for=""><b>Established Date:</b></label>
                                            <p class="m-0">12-Sept-2020</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Email:</b></label>
                                            <p class="m-0">abc@gamil.com</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Phone: </b></label>
                                            <p class="m-0">0171xxxxxx</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Country:</b></label>
                                            <p class="m-0">Bangladesh</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>City: </b></label>
                                            <p class="m-0">Dhaka</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Address:</b></label>
                                            <p class="m-0">H75,R07,Block-C,Motijheel,Dhaka</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>City: </b></label>
                                            <p class="m-0">Dhaka-North, Motijheel</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Agent Code:</b></label>
                                            <p class="m-0">BLU00123</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Registration No: </b></label>
                                            <p class="m-0">349587</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Postal Code:</b></label>
                                            <p class="m-0">1212</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>FAX: </b></label>
                                            <p class="m-0">230498743</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Civil Aviation Certificate No:</b></label>
                                            <p class="m-0">34985730</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Trade License: </b></label>
                                            <p class="m-0">230498743</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>IATA:</b></label>
                                            <p class="m-0">54422</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Hajj License: </b></label>
                                            <p class="m-0">456333</p>
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
                            <h5 class="m-0 p-0" style="border-left: 5px solid #7239ea;"> &nbsp; Primary User Information</h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Owner's Name:</b></label>
                                            <p class="m-0">Lorem ipsum dolor sit amet</p>
                                        </td>
                                        <td class="m-0 pl-2"  width="50%">
                                            <label for=""><b>Designation:</b></label>
                                            <p class="m-0">Managing Director</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>NID:</b></label>
                                            <p class="m-0">abc@gamil.com</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Date of Birth: </b></label>
                                            <p class="m-0">12-Aug-1980</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Email:</b></label>
                                            <p class="m-0">abc@gmail.com</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Phone: </b></label>
                                            <p class="m-0">01xxxxxx</p>
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
                            <h5 class="m-0 p-0" style="border-left: 5px solid #39eadfcf;"> &nbsp; KAM Information & Remarks</h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>KAM:</b></label>
                                            <p class="m-0">Lorem ipsum dolor sit amet</p>
                                        </td>
                                        <td class="m-0 pl-2"  width="50%">
                                            <label for=""><b>Remarks:</b></label>
                                            <p class="m-0">This agency is  new and recommended by mr.x</p>
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
                            <h5 class="m-0 p-0" style="border-left: 5px solid #da22f2;"> &nbsp; Recommendeation</h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Approver:</b></label>
                                            <p class="m-0">Mr.Y</p>
                                        </td>
                                        <td class="m-0 pl-2"  width="50%">
                                            <label for=""><b>Remarks:</b></label>
                                            <p class="m-0">This agency is  new and recommended by mr.x</p>
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
                            <h5 class="m-0 p-0" style="border-left: 5px solid #02e22e;"> &nbsp; Approval</h5>

                        </div>
                        <div class="card-body">
                            <table class="table table-borderless table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Approved By:</b></label>
                                            <p class="m-0">Mr.Y</p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
