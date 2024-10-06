<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login_history extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'ip',
        'contry_code',
        'city',
        'login_attamp',
        'device_type',
        'os'
    ];

}
