<?php

namespace App\Http\Controllers\Admin\Department;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Department\Department;
use App\Http\Controllers\BaseController;

class DepartmentController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $data = DB::table('departments as dpt')
            // ->join('users as u', 'dpt.id', 'u.dept_id')
            ->selectRaw('dpt.id as idd,dpt.name,status,dpt.updated_at,f_username(dpt.updated_by) updated_by,f_username(dpt.created_by) created_by,dpt.created_at,dpt.updated_at')->get();

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
        $auth = Auth::user();

        $validator = validator($request->all(),
            ['dept_name' => 'required'],
        );
        if ($validator->fails()) {
            return $this->ErrorResponse($validator->errors()->all());
        }

        $dept = new Department;
        $dept->name = $request->dept_name;
        $dept->status = 1;
        $dept->created_by = $auth->id;
        $dept->save();

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Department Saved.');

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
        $dept = Department::find($request->id);
        return response()->json($dept);

    }

    public function getAllDept()
    {
        $dept = DB::table('departments')->get();
        return response()->json($dept);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $auth = Auth::user();
        $dept = Department::where('id', $request->dept_id)->first();
        $dept->name = $request->dept_name != null ? $request->dept_name : $dept->name;
        $dept->status = $request->status_val != null ? $request->status_val : $dept->status;
        $dept->updated_by = $auth->id;
        $dept->save();

        $success = '';
        return $this->SuccessResponse($success, 'Successfully Department Updated.');

    }

    public function changeDepartmentStatus(Request $request)
    {
        if ($request->id) {

            $dept = Department::where('id', $request->id)->first();
            if ($dept->status == 1) {

                $dept->status = 2;
            } else if ($dept->status == 2) {
                $dept->status = 1;
            }
            $dept->save();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Department status updated.');

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

            $dept = Department::where('id', $request->id)->first();
            $dept->delete();
            $success= '';
            return $this->SuccessResponse($success, 'Successfully Department deleted.');


        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
}
