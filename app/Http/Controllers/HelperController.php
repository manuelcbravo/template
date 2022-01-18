<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;

///MODELS
use App\cat_role;

class HelperController extends Controller
{
    public function catalogos(){
        if(Auth::user()->hasAnyRoleId([0,13,14])){
            $rol = cat_role::whereNotIn('id', [0])->get();
        }else{
            $rol = cat_role::whereNotIn('id', [0])->get();
        }

        return response()->json([
            'rol' => $rol,
        ]);
    }
}
