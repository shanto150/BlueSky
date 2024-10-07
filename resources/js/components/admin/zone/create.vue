<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Setting</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'zoneList' }">Area List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Create New Area</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Create New Area</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <label for="input1" class="form-label">Name</label>
                    <input type="text" class="form-control form-control-sm" id="input1" placeholder="Enter Name">
                </div>

                <div class="col-md-4">
                    <label for="input1" class="form-label">Division</label>
                    <select id="input7" class="form-control form-control-sm">
                        <option>Choose...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label for="input1" class="form-label">Status</label>
                    <select id="input7" class="form-control form-control-sm">
                        <option value="">Choose...</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary px-4 ms-2 float-end">Save</button>
            <button class="btn btn-danger px-4 ms-2  float-end">Back</button>
        </div>
    </div>
</template>
