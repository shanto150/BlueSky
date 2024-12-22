<?php

use App\Http\Controllers\Admin\Area\AreaController;
use App\Http\Controllers\Admin\Department\DepartmentController;
use App\Http\Controllers\Admin\Designation\DesignationController;
use App\Http\Controllers\Admin\IssuedBankMFS\IssuedBankMFSController;
use App\Http\Controllers\Admin\OfficeLocation\LocationController;
use App\Http\Controllers\Admin\PaymentAccount\PaymentAccountSController;
use App\Http\Controllers\Admin\Role\RolePermissionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\Agent\AgentController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login'])->name('login');
Route::post('register', [AuthController::class, 'register'])->name('register');
Route::post('sendResetLinkEmail', [AuthController::class, 'sendResetLinkEmail'])->name('sendResetLinkEmail');
Route::post('PassReset', [AuthController::class, 'resetPassword'])->name('password.reset');

Route::get('/migrate', function () {Artisan::call('migrate:refresh');return Artisan::output();})->name('migrate');

Route::middleware(['auth:api'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('refresh', [AuthController::class, 'refresh'])->name('refresh');
    Route::get('me', [AuthController::class, 'me'])->name('me');
    Route::post('registerOTP', [AuthController::class, 'registerOTP'])->name('registerOTP');
    Route::post('ForcePassReset', [AuthController::class, 'ForcePassReset'])->name('ForcePassReset');

    //agent section
    Route::get('getAgent', [AgentController::class, 'index'])->name('agent.index');
    Route::get('airports', [AreaController::class, 'airports']);

    // area
    Route::get('getarea', [AreaController::class, 'index'])->name('area.index');
    Route::get('divisions', [AreaController::class, 'divisionsList']);
    Route::post('districts', [AreaController::class, 'districtList']);

    Route::post('/zone/save', [AreaController::class, 'store']);
    Route::post('/zone/update', [AreaController::class, 'update']);
    Route::post('editArea', [AreaController::class, 'edit']);
    Route::post('changeAreaStatus', [AreaController::class, 'changeAreaStatus']);
    Route::post('deletearea', [AreaController::class, 'destroy']);

    //role-permission
    Route::get('getroles', [RolePermissionController::class, 'index'])->name('roles.index');
    Route::post('editRole', [RolePermissionController::class, 'edit'])->name('roles.edit');
    Route::post('getPermissionList', [RolePermissionController::class, 'getPermissionList'])->name('roles.getPermissionList');
    Route::post('/changeRoleStatus', [RolePermissionController::class, 'changeRoleStatus'])->name('roles.changeRoleStatus');
    Route::post('/deleteRole', [RolePermissionController::class, 'destroy'])->name('roles.deleteRole');
    //dropdown
    Route::get('getAllRoles', [RolePermissionController::class, 'getAllRoles']);

    // department
    Route::get('getdept', [DepartmentController::class, 'index'])->name('dept.getdept');
    Route::post('/dept/save', [DepartmentController::class, 'store']);
    Route::post('editDept', [DepartmentController::class, 'edit']);
    Route::post('/dept/update', [DepartmentController::class, 'update']);
    Route::post('changeDepartmentStatus', [DepartmentController::class, 'changeDepartmentStatus']);
    Route::post('deleteDept', [DepartmentController::class, 'destroy']);
    //dropdown
    Route::get('getAllDept', [DepartmentController::class, 'getAllDept']);

    //designtaion
    Route::get('getDesignation', [DesignationController::class, 'index'])->name('deg.getDesignation');
    Route::post('/Designation/save', [DesignationController::class, 'store']);
    Route::post('editDesignation', [DesignationController::class, 'edit']);
    Route::post('/Designation/update', [DesignationController::class, 'update']);
    Route::post('changeDesgStatus', [DesignationController::class, 'changeDesignationStatus']);
    Route::post('deleteDesignation', [DesignationController::class, 'destroy']);
    //dropdown
    Route::get('getAllDesign', [DesignationController::class, 'getAllDesign']);

    // office location
    Route::get('getOfficeLocation', [LocationController::class, 'index'])->name('officeLocation.officelocations');
    Route::post('/loc/save', [LocationController::class, 'store']);
    Route::post('editOffLoc', [LocationController::class, 'edit']);
    Route::post('/office/location/update', [LocationController::class, 'update']);
    Route::post('changeOffLocStatus', [LocationController::class, 'changeOffLocStatus']);
    Route::post('deleteOfficeLocation', [LocationController::class, 'destroy']);
    //dropdown
    Route::get('getAllOffLoc', [LocationController::class, 'getAllOffLoc']);

    //IssuedBankMFSController
    Route::get('getBankMFS', [IssuedBankMFSController::class, 'index'])->name('settings.deposit.BankMFS');
    Route::post('/bankMfs/save', [IssuedBankMFSController::class, 'save'])->name('settings.deposit.bankMfsSave');
    Route::post('/editBankMfs', [IssuedBankMFSController::class, 'edit'])->name('settings.deposit.bankMfsEdit');
    Route::post('/bankormfs/update', [IssuedBankMFSController::class, 'update'])->name('settings.deposit.bankMfsUpdate');
    Route::post('changeIssuedBankStatus', [IssuedBankMFSController::class, 'changeIssuedBankStatus']);
    Route::post('deleteBankMFS', [IssuedBankMFSController::class, 'deleteBankMFS']);

    //payment account
    Route::get('getPaymentAcct', [PaymentAccountSController::class, 'index'])->name('settings.deposit.getPaymentAcct');
    Route::post('/paymentAcct/save', [PaymentAccountSController::class, 'store'])->name('settings.deposit.paymentAcctStore');
    Route::post('/changePaymentAcctStatus', [PaymentAccountSController::class, 'changePaymentAcctStatus'])->name('settings.deposit.changePaymentAcctStatus');
    Route::post('/deletePaymentAcct', [PaymentAccountSController::class, 'destroy'])->name('settings.deposit.destroy');
    Route::post('/editPaymentAcct', [PaymentAccountSController::class, 'edit'])->name('settings.deposit.editPaymentAcct');
    Route::post('/payment-acct/update', [PaymentAccountSController::class, 'update'])->name('settings.deposit.updatePaymentAcct');

    //users managemnt
    Route::get('getInternalUsers', [UserController::class, 'index'])->name('user.getInternalUsers');
    Route::get('getAllUsers', [UserController::class, 'getAllUsers'])->name('user.getAllUsers');
    Route::post('/external-user/save', [UserController::class, 'store'])->name('user.store');
    Route::post('/editUser', [UserController::class, 'edit'])->name('user.editUser');
    Route::post('/user-details/update', [UserController::class, 'update'])->name('user.update');
    Route::post('/deleteUser', [UserController::class, 'destroy'])->name('user.deleteUser');
    Route::post('/user-status/update', [UserController::class, 'statusUpdate'])->name('user.statusUpdate');
});
Route::post('/role/save', [RolePermissionController::class, 'roleSave']);
Route::post('/role/update', [RolePermissionController::class, 'update']);
