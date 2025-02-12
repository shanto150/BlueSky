<?php
namespace App\Models\Role;

use App\Models\Role\RolePermission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    public function role_permissions()
    {
        // dd($this->belongsToMany(RolePermission::class,'roles','role_id','id'));
        return $this->hasMany(RolePermission::class,'role_id','id');
    }
}
