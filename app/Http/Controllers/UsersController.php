<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Auth;
use DB;

///MODELS
use App\User;
use app\cat_role;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->hasAnyRoleId([0,9,6,1])){
            return view('configuracion.usuarios.index');
        }else{
            return redirect()->back();
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->password_plain) {
            $request->merge([
                'password' => Hash::make($request->password_plain),
                'estatus' => 1,
            ]);
        }
        
        $user = User::updateOrCreate(
            [
                'id' => $request->id
            ],
            $request->except(['id'])
        );

        $user->roles()->attach(cat_role::where('id', $request->rol)->first());

        return response()->json(
            [
                'respuesta' => true,
                'mensaje' => "Accion realizada correctamente"
            ]
        );

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json([
            'status' => true,
            'usuario' => User::find($id)
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $iduser = User::withTrashed()->find($id);
        $iduser ->delete();
//
//        \Notificaciones::agregarLog('Usuario eliminada correctamente', null, $id, "user");

        return response()->json([
            'status' => true,
        ], 200);

    }
    public function usuariosList()
    {

        if(Auth::user()->hasAnyRoleId([0,13,14])){
            $user = User::select('users.*', 'cat_roles.nombre as nombre_rol')
                ->join('cat_roles','users.rol','=','cat_roles.id')->where('users.rol','<>', 0)->get();

            return response()->json([
                'data' => $user
            ]);
        }
    }

}
