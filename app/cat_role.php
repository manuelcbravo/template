<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

///MODELS
use App\User;

class cat_role extends Model
{
    protected $fillable = [
        'id',
        'nombre',
        'descripcion'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
