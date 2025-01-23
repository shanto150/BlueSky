<?php

namespace App\Http\Controllers\Admin\Designation;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Designation\Designation;
use Spatie\Activitylog\Models\Activity;
use App\Http\Controllers\BaseController;

class DesignationController extends BaseController
{
    public function index()
    {

        $data = DB::table('designations as des')
            // ->join('users as u', 'des.id', 'u.des_id')
            ->selectRaw('des.id as idd,des.name,status,des.updated_at,f_username(des.updated_by) updated_by,f_username(des.created_by) created_by,des.created_at,des.updated_at')->get();

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
        $auth = User::where('email', $request->useEmail)->first();

        $validator = validator($request->all(),
            ['des_name' => 'required'],
        );
        if ($validator->fails()) {
            return $this->ErrorResponse($validator->errors()->all());
        }

        $dept = new Designation;
        $dept->name = $request->des_name;
        $dept->status = 1;
        $dept->created_by = $auth->id;
        $dept->save();

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Designation Saved.');

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
        $desg = Designation::find($request->id);
        return response()->json($desg);

    }

    public function getAllDesign()
    {
        $desg = DB::table('designations')->get();
        return response()->json($desg);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $auth = User::where('email', $request->useEmail)->first();
        $dept = Designation::where('id', $request->dept_id)->first();
        $dept->name = $request->des_name != null ? $request->des_name : $dept->name;
        $dept->status = $request->status_val != null ? $request->status_val : $dept->status;
        $dept->updated_by = $auth->id;
        $dept->save();

        $success = '';
        return $this->SuccessResponse($success, 'Successfully Designation Updated.');

    }

    public function changeDesignationStatus(Request $request)
    {
        if ($request->id) {

            $dept = Designation::where('id', $request->id)->first();
            if ($dept->status == 1) {

                $dept->status = 2;
            } else if ($dept->status == 2) {
                $dept->status = 1;
            }
            $dept->save();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Designation status updated.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        if ($request->id) {

            $dept = Designation::where('id', $request->id)->first();
            $dept->delete();
            $success= '';
            return $this->SuccessResponse($success, 'Successfully Designation deleted.');


        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }

    public function designationlog()
    {
        $activits = Activity::where('log_name','Designation')->get();
        return $this->SuccessResponse($activits, 'Activity Recived.');
    }
}
