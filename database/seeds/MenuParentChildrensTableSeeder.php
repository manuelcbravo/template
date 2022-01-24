<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MenuParentChildrensTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('menu_parent_childrens')->delete();
        
        \DB::table('menu_parent_childrens')->insert(array (
            0 => 
            array (
                'id' => 1,
                'menu_parent_id' => 1,
                'nombre' => 'Mi cuenta',
                'ruta' => 'mi_cuenta',
                'roles' => '0',
                'enabled' => 1,
                'order' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'menu_parent_id' => 1,
                'nombre' => 'Usuarios',
                'ruta' => 'usuarios',
                'roles' => '0',
                'enabled' => 1,
                'order' => 2,
            ),
        ));
        
        
    }
}