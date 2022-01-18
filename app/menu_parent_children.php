<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class menu_parent_children extends Model
{
    protected $fillable = [
        'id',
        'id_parent',
        'nombre',
        'ruta',
        'roles',
        'enabled'
    ];

    public function menu()
    {
        return $this->belongsTo(menu_parent::class);
    }
}
