<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Settings</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'AgentList' }">Role-permission List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Update Role</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label">Role Name</label>
                <input type="text" class="form-control form-control-sm" placeholder="System admin" name="" id="" value="System Admin">
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Status</label>
                    <select name="" class="form-control form-control-sm" id="">
                        <option value="active" selected>Active</option>
                        <option value="inactive" >Inactive</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Assign Permission</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div style="background-color: #746a892b;" class="card-header m-0 pl-2 pb-0">
                            <h6 class="text-blue">Role Permission</h6>
                        </div>
                        <div class="card-body">
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Create</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Edit</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Delete</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Assign Permission</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div style="background-color: #746a892b;" class="card-header m-0 pl-2 pb-0">
                            <h6 class="text-blue">B2B Agent</h6>
                        </div>
                        <div class="card-body">
                            <div class="form-check">
                                <input class="form-check-input"  checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Create</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Edit</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Delete</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Print</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div style="background-color: #746a892b;" class="card-header m-0 pl-2 pb-0">
                            <h6 class="text-blue">User Management</h6>
                        </div>
                        <div class="card-body">
                            <div class="form-check">
                                <input class="form-check-input" checked type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Create</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Edit</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Delete</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="">
                                <label class="form-check-label" for="flexCheckChecked">Print</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Assign Permission</h5>
        </div>
        <div class="card-body">
            <table class="table table-sm table-responsive">
                <thead>
                    <td></td>
                    <td>All</td>
                    <td>View</td>
                    <td>Add</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </thead>
                <tbody>
                    <tr>
                        <td>User Management</td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                    </tr>

                    <tr>
                        <td>B2B Agent</td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                    </tr>

                    <tr>
                        <td>Role & Permission</td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                        <td><input class="form-check-input" type="checkbox" value=""></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> -->
</template>
