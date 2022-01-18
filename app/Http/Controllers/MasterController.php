<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

///MODELS
use App\menu_parent;

class MasterController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $menu = menu_parent::all()->load('submenu')->sortBy('order');

        if (Auth::check()){
            $activePage = false;
        }else{
            $activePage = 'login';
        }
        return view('welcome',compact('menu'), ['activePage' => $activePage]);
    }
}
