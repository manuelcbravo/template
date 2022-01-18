<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class menu_parent extends Model
{
    protected $fillable = [
        'id',
        'nombre',
        'icon',
        'ruta',
        'children',
        'roles',
        'enabled'
    ];

    public function submenu()
    {
        return $this->hasMany(menu_parent_children::class)->where('enabled', '=', 1)->orderBy('order', 'ASC');
    }
}
