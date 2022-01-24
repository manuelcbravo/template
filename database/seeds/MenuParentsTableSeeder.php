<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MenuParentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('menu_parents')->delete();
        
        \DB::table('menu_parents')->insert(array (
            0 => 
            array (
                'id' => 2,
                'nombre' => 'Configuración',
                'icon' => 'bi bi-sliders',
                'ruta' => NULL,
                'roles' => '0',
                'enabled' => 1,
                'order' => 100,
            ),
        ));
        
        
    }
}