<?php
namespace App\Models\Role;

use App\Models\Role\RolePermission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    public function permissions()
    {
        return $this->belongsToMany(RolePermission::class);
    }
}
