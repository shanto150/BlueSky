<?php

namespace App\Http\Controllers\Admin\Role;

use Auth;
use App\Models\User;
use App\Models\Role\Role;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Models\Role\RolePermission;
use App\Http\Controllers\Controller;
use App\Http\Controllers\BaseController;

class RolePermissionController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data= DB::table('roles as r')
        ->join('role_permissions as rp','r.id','rp.role_id')
        ->selectRaw('r.name,r.id as idd,count(rp.id) total_perms,r.created_at,r.status,r.updated_at,f_username(r.updated_by) updated_by,f_username(r.created_by) created_by')->groupBy('r.id','r.name','r.created_at','r.status','r.updated_at','r.updated_by','r.created_by')->get();
        return DataTables::of($data)->addIndexColumn()->make(true);

    }

    public function getAllRoles()
    {
        $roles = DB::table('roles')->get();
        return response()->json($roles);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

    }

    public function roleSave(Request $request)
    {

        $auth = User::where('email',$request->useEmail)->first();

        $validator = validator($request->all(),
            ['roleName' => 'required|unique:roles,name'],
        );
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all(), 'types' => 'e']);
        }

        if(sizeof($request->checkedNames)==0){
            return response()->json(['message' => 'No permission assigned.', 'types' => 'e']);

        }

        $role =  new Role;
        $role->name =  $request->roleName;
        $role->display_name =  $request->roleName;
        $role->status =  1;
        $role->created_by =  $auth->id;
        $role->save();

        foreach($request->checkedNames as $perm){
            $perms = new RolePermission;
            $perms->role_id = $role->id;
            $perms->feature_name = $perm;
            $perms->created_by =  $auth->id;

            $perms->save();
        }

        return response()->json(['message' => 'Successfully Role Saved.', 'types' => 's']);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $data = Role::find($request->id);
        return response()->json($data);

    }

    public function getPermissionList(Request $request)
    {
        $data= DB::table('role_permissions as r')->where('role_id',$request->id)
        ->selectRaw('r.feature_name')->get();
        return response()->json($data);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        dd($request->all());

        $role = Role::find($request->role_id);
        $role->name     = $request->roleName ? $request->roleName : $role->name;
        $role->status   = $request->status_val ? $request->status_val : $role->status;

        return response()->json(['message' => 'Successfully Role Saved.', 'types' => 's']);

    }


    /**
     * Remove the specified resource from storage.
     */
    public function changeRoleStatus(Request $request)
    {
        if ($request->id) {

            $role = Role::where('id', $request->id)->first();
            if ($role->status == 1) {

                $role->status = 2;
            } else if ($role->status == 2) {
                $role->status = 1;
            }
            $role->save();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Payment Account status updated.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
    public function destroy(Request $request)
    {
        if ($request->id) {

            $role = Role::where('id', $request->id)->first();
            $perms = RolePermission::where('role_id',$request->id)->get();
            foreach($perms as $perm){
                $perm->delete();
            }
            $role->delete();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Department deleted.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
}
