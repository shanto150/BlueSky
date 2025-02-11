<?php

namespace App\Http\Controllers\Admin\AirlineLogo;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use App\Models\AirlineLogo\AirlineLogo;
use App\Http\Controllers\BaseController;

class AirlineLogoController extends BaseController
{
    public function index()
    {
        $data = DB::table('airline_logos as al')
            ->selectRaw('al.id as idd,al.created_at,al.updated_at,f_username(al.updated_by) updated_by,f_username(al.created_by) created_by,al.name as a_name,al.code as code,al.logo_path as logo,al.airline_business_type as busi_type,al.country_name as country')->get();

        return DataTables::of($data)->addIndexColumn()->make(true);
    }

    public function store(Request $request)
    {


        $auth = Auth::user();

        $validator = validator($request->all(),
            ['name' => 'required'],
            ['code' => 'required'],
            ['country' => 'required'],
            ['airlines_business_type' => 'required'],
        );
        if ($validator->fails()) {
            return $this->ErrorResponse($validator->errors()->all());
        }

        $airline = new AirlineLogo;
        $airline->name = $request->name;
        $airline->code = $request->code;
        $airline->country_name = $request->country;
        $airline->airline_business_type = $request->airlines_business_type;

        if ($request->hasFile('airline_picture')) {

            $request_image = $request->file('airline_picture');
            $image_name = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/airlines/');
            if (!File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $airline->logo_path = '/uploads/airlines/' . $image_name;

        } else {
            $profilePicturePath = null;
        }


        $airline->created_by = $auth->id;
        $airline->save();

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Airlines Saved.');
    }

    public function edit(Request $request)
    {
        $airline = AirlineLogo::find($request->id);
        return response()->json($airline);

    }

    public function update(Request $request)
    {
        $auth = Auth::user();
        $airline = AirlineLogo::where('id',$request->airlines_id)->first();
        $airline->name = $request->name??$airline->name;
        $airline->code = $request->code??$airline->code;
        $airline->country_name = $request->country??$airline->country_name;
        $airline->airline_business_type = $request->airlines_business_type??$airline->airline_business_type;

        if ($request->hasFile('airline_picture')) {

            $request_image = $request->file('airline_picture');
            $image_name = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/airlines/');
            if (!File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            if($airline->logo_path){
                File::delete(public_path($airline->logo_path));
            }

            $request_image->move($image_path, $image_name);
            $airline->logo_path = '/uploads/airlines/' . $image_name;

        } else {
            $profilePicturePath = null;
        }


        $airline->updated_by = $auth->id;
        $airline->save();

        $success = '';
        return $this->SuccessResponse($success, 'Successfully Airlines Updated.');
    }
    public function destroy(Request $request)
    {

        if ($request->id) {

            $aircraft = AirlineLogo::where('id', $request->id)->first();

            if($aircraft->logo_path){
                File::delete(public_path($aircraft->logo_path));
            }

            $aircraft->delete();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Airline deleted.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
}
