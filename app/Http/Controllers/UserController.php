<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Auth;

///MODELS
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('configuracion.mi_cuenta.index');
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
        if ($request->avatarUploader) {
            $file = $request->avatarUploader;
            $fileName = Str::uuid() . '.' . $file->extension();

            $request->merge(["avatar" => $fileName]);

            User::updateOrCreate(
                [
                    'id' => Auth::id()
                ],
                $request->except(['id'])
            );

            $file->move(public_path('uploads') . '/avatars', $fileName);

            return response()->json([
                'success' => 1,
            ]);
        } else if ($request->password) {
            $password = Hash::make($request->password);

            User::where('id', $request->id)->update(['password' => $password]);

        } else {

            User::updateOrCreate(
                [
                    'id' => $request->id
                ],
                $request->except(['id']));
        }

        return response()->json(
            [
                'respuesta' => true,
                'mensaje' => "Acción realizada correctamente"
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
            'usuario' => User::find($id),
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
        //
    }

    // My funtions

    public function updateProfile(Request $request)
    {
        if($request->file('avatar')) {
            $image = $request->file('avatar');
            $name = Hash::make(time() . '-' . $request->id);
            $imageName = $name . '.' . $image->extension();
            $imageName = str_replace('/','',$imageName);

            user::where('id', auth()->user()->id)->update(['avatar' => $imageName ]);

            $image->move(public_path('avatars'),$imageName);

            return back()->with(['success' => $imageName]);
        }
    }
}
