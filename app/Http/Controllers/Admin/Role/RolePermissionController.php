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

class RolePermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data= DB::table('roles as r')
        ->join('role_permissions as rp','r.id','rp.role_id')
        ->selectRaw('r.name, count(rp.id) total_perms,r.created_at,r.status,r.updated_at,f_username(r.updated_by) updated_by,f_username(r.created_by) created_by')->groupBy('r.name','r.created_at','r.status','r.updated_at','r.updated_by','r.created_by')->get();
        return DataTables::of($data)->addIndexColumn()->make(true);

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
        //
    }

    public function roleSave(Request $request)
    {
        $auth = User::where('email',$request->useEmail)->first();

        $validator = validator($request->all(),
            ['roleName' => 'required'],
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
