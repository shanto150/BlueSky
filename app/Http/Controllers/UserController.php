<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\File;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('users as u')->where('type', 1)
            ->join('roles as r', 'r.id', 'u.user_role')
            ->selectRaw('u.name,u.email,u.img_path as img,u.phone,u.status,r.name as r_name,u.img_path,u.id as idd,u.created_at,u.updated_at,f_department(u.dept_id) as dept,f_designation(u.designation_id) as desg,u.emp_id,f_off_loc(u.office_loc_id) as off_loc,f_username(u.updated_by) as updated_by,f_username(u.created_by) as created_by')->get();
        // rep_user(u.report_to) as rep_to,

        return DataTables::of($data)->addIndexColumn()->make(true);
    }

    public function getAllUsers()
    {
        $user = DB::table('users')->get();
        return response()->json($user);
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
        // dd($request->all());

        $auth = User::where('email', $request->useEmail)->first();
        $validator = validator($request->all(),
            ['name' => 'required'],
            ['phone' => 'required'],
            ['email' => 'required'],
            ['staff_id' => 'required'],
            ['dept_name' => 'required'],
            ['desg' => 'required'],
            ['off_loct' => 'required'],
            ['report_to' => 'required'],
            ['role_id' => 'required'],
        );
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all(), 'types' => 'e']);
        }
        $user = new User;
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->emp_id = $request->staff_id;
        $user->dept_id = $request->dept_name;
        $user->designation_id = $request->desg;
        $user->office_loc_id = $request->off_loct;
        $user->report_to = $request->report_to;
        $user->user_role = $request->role_id;

        if ($request->hasFile('profile_picture')) {

            $request_image = $request->file('profile_picture');
            $image_name = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/profile_image/');
            if (!File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $user->img_path = '/uploads/profile_image/'.$image_name;

        } else {
            $profilePicturePath = null;
        }

        $user->type = 1;
        $user->is_active = 1;
        $user->status = 1;
        $user->created_by = $auth->id;
        $user->password = Hash::make('Gblue@sky7');

        $user->save();
        return response()->json(['message' => 'Successfully User Saved.', 'types' => 's']);

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
