<?php
namespace App\Http\Controllers\Admin\IssuedBankMFS;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\BaseController;
use App\Models\IssuedBankMFS\IssuedBankMFS;

class IssuedBankMFSController extends BaseController
{
    public function index()
    {
        $data = DB::table('issued_bank_m_f_s as bmfs')
            ->selectRaw('bmfs.id as idd,bmfs.name,bmfs.created_at,bmfs.status,bmfs.updated_at,f_username(bmfs.updated_by) updated_by,f_username(bmfs.created_by) created_by')->get();

        return DataTables::of($data)->addIndexColumn()->make(true);
    }

    public function save(Request $request)
    {
        $auth = Auth::user();

        $validator = validator($request->all(),
            ['bank_mfs_name' => 'required'],
        );
        if ($validator->fails()) {
            return $this->ErrorResponse($validator->errors()->all());
        }

        $bank_mfs             = new IssuedBankMFS;
        $bank_mfs->name       = $request->bank_mfs_name;
        $bank_mfs->status     = 1;
        $bank_mfs->created_by = $auth->id;
        $bank_mfs->save();

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Bank/MFS Saved.');
    }

    public function edit(Request $request)
    {
        $bank_mfs = IssuedBankMFS::find($request->id);
        return response()->json($bank_mfs);

    }

    public function update(Request $request)
    {
        $auth = Auth::user();

        $bank_mfs             = IssuedBankMFS::where('id', $request->bank_mfs_id)->first();
        $bank_mfs->name       = $request->bank_mfs_name != null ? $request->bank_mfs_name : $bank_mfs->name;
        $bank_mfs->status     = $request->status_val != null ? $request->status_val : $bank_mfs->status;
        $bank_mfs->updated_by = $auth->id;
        $bank_mfs->save();

        $success = '';
        return $this->SuccessResponse($success, 'Successfully Bank/MFS Updated.');

    }

    public function changeIssuedBankStatus(Request $request)
    {
        if ($request->id) {

            $bank_mfs = IssuedBankMFS::where('id', $request->id)->first();
            if ($bank_mfs->status == 1) {

                $bank_mfs->status = 2;
            } else if ($bank_mfs->status == 2) {
                $bank_mfs->status = 1;
            }
            $bank_mfs->save();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Bank/MFS status updated.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }

    public function deleteBankMFS(Request $request)
    {
        if ($request->id) {

            $bank_mfs = IssuedBankMFS::where('id', $request->id)->first();
            $bank_mfs->delete();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Bank MFS deleted.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
}
