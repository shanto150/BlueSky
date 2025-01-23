<?php
namespace App\Models\AirlineLogo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AirlineLogo extends Model
{
    use HasFactory,LogsActivity;
    protected $fillable = [
        'name',
        'code',
        'logo_path',
        'country_name',
        'created_by',
        'updated_by'
    ];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['name', 'status', 'user.name'])
        ->useLogName('AirlineLogo')
        ->logOnlyDirty();
    }

    public function user()
    {
        return $this->belongsTo(User::class,'created_by');
    }

}
