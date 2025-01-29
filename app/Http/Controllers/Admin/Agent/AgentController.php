<?php
namespace App\Http\Controllers\Admin\Agent;

use App\Http\Controllers\BaseController;
use App\Models\Agent\Agent;
use App\Models\Agent\AgentImage;
use App\Models\Agent\AgentUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Yajra\DataTables\DataTables;

class AgentController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('agents as ag')
            ->join('users as u', 'ag.user_id', 'u.id')
            ->selectRaw('ag.id as idd,u.name as owner,ag.name,ag.phone,ag.agent_code as agent_code,ag.email as email,ag.created_at,ag.status,ag.updated_at,f_username(ag.updated_by) updated_by,f_username(ag.created_by) created_by,ag.designation,ag.country,ag.city,ag.address,f_zonename(ag.zone) as zone,ag.trade_licence,ag.ca_number,ag.established_date,ag.reg_number,ag.postal_code,ag.fax,ag.iata_number,ag.hajj_agency_number,f_username(ag.kam) as kam,ag.remarks,ag.net_balance')->get();

        return DataTables::of($data)->addIndexColumn()->make(true);
    }

    public function getKam()
    {
        $kams = DB::table('users')->where('type',1)->get();
        return response()->json($kams);
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

        $agent                     = new Agent;
        $agent->name               = $request->name;
        $agent->agent_code         = $request->agent_code;
        $agent->email              = $request->email;
        $agent->phone              = $request->phone;
        $agent->country            = $request->country;
        $agent->city               = $request->city;
        $agent->zone               = $request->zone;
        $agent->address            = $request->address;
        $agent->established_date   = $request->established_date;
        $agent->postal_code        = $request->postal_code;
        $agent->ca_number          = $request->ca_number;
        $agent->iata_number        = $request->iata_number;
        $agent->reg_number         = $request->reg_number;
        $agent->fax                = $request->fax;
        $agent->trade_licence      = $request->trade_licence;
        $agent->hajj_agency_number = $request->hajj_no;
        $agent->kam                = $request->kam_id;
        $agent->remarks            = $request->remarks;
        $agent->status             = 'Pending';
        $agent->designation        = $request->designation;
        $agent->created_by         = auth()->user()->id;

        if (($request->hasFile('agency_img'))) {

            $request_image = $request->file('agency_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/agency_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);

            $agent->logo_path = '/uploads/agents/agency_img/' . $image_name;

        }

        $agent->save();

        $agent_user              = new AgentUser;
        $agent_user->name        = $request->ownername;
        $agent_user->nid         = $request->nid_number;
        $agent_user->email       = $request->email_address;
        $agent_user->designation = $request->designation;
        $agent_user->dob         = $request->dob;
        $agent_user->phone       = $request->owner_phone;
        $agent_user->agent_id    = $agent->id;
        $agent_user->created_by  = auth()->user()->id;

        if ($request->hasFile('owner_pro_img')) {
            $request_image = $request->file('owner_pro_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/agent_owner/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_user->img_path = '/uploads/agents/agent_owner/' . $image_name;
        }

        $agent_user->save();
        $agent->user_id = $agent_user->id;
        $agent->save();

        if (($request->hasFile('nid_img'))) {
            $agent_img                  = new AgentImage;
            $agent_img->agent_id        = $agent->id;
            $agent_img->attachment_type = 'nid_img';

            $request_image = $request->file('nid_img');
            // dd($request_image);
            $image_name = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/nid_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_img->attachment_path = '/uploads/agents/nid_img/' . $image_name;
            $agent_img->save();
        }

        if (($request->hasFile('trade_licence_img'))) {
            $agent_img                  = new AgentImage;
            $agent_img->agent_id        = $agent->id;
            $agent_img->attachment_type = 'trade_licence_img';

            $request_image = $request->file('trade_licence_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();
            $image_path    = public_path('/uploads/agents/trade_licence_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_img->attachment_path = '/uploads/agents/trade_licence_img/' . $image_name;
            $agent_img->save();
        }

        if (($request->hasFile('ca_img'))) {
            $agent_img                  = new AgentImage;
            $agent_img->agent_id        = $agent->id;
            $agent_img->attachment_type = 'ca_img';

            $request_image = $request->file('ca_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/ca_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_img->attachment_path = '/uploads/agents/ca_img/' . $image_name;
            $agent_img->save();
        }

        if (($request->hasFile('iata_img'))) {
            $agent_img                  = new AgentImage;
            $agent_img->agent_id        = $agent->id;
            $agent_img->attachment_type = 'iata_img';

            $request_image = $request->file('iata_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/iata_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_img->attachment_path = '/uploads/agents/iata_img/' . $image_name;
            $agent_img->save();
        }

        if (($request->hasFile('hajj_licence_img'))) {
            $agent_img                  = new AgentImage;
            $agent_img->agent_id        = $agent->id;
            $agent_img->attachment_type = 'hajj_licence_img';

            $request_image = $request->file('hajj_licence_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/hajj_licence_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_img->attachment_path = '/uploads/agents/hajj_licence_img/' . $image_name;
            $agent_img->save();
        }

        if (($request->hasFile('tin_img'))) {
            $agent_img                  = new AgentImage;
            $agent_img->agent_id        = $agent->id;
            $agent_img->attachment_type = 'tin_img';

            $request_image = $request->file('tin_img');
            $image_name    = str_replace(' ', '', (now()->format('dmY-') . time())) . '.' . $request_image->extension();

            $image_path = public_path('/uploads/agents/tin_img/');
            if (! File::exists($image_path)) {
                File::makeDirectory($image_path, 0777, true);
            }

            $request_image->move($image_path, $image_name);
            $agent_img->attachment_path = '/uploads/agents/tin_img/' . $image_name;
            $agent_img->save();
        }

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Agent Saved.');

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
