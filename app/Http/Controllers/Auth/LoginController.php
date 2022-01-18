<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    */
    public function showLoginForm (){

        return view('auth.login');
    }
    public function authenticate(Request $request){
        $remember = $request->get('remember');

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'estatus' => 1], $remember)) {
            $request->session()->regenerate();
            Auth::logoutOtherDevices($request->password);//only session
            return response()->json([
                'status' => true,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
            ], 200);
        }
    }
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}