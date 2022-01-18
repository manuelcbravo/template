<?php

use Illuminate\Database\Seeder;

class CatRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cat_roles')->delete();
        
        \DB::table('cat_roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nombre' => 'Administrador',
                'descripcion' => 'admon',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            1 => 
            array (
                'id' => 2,
                'nombre' => 'Gerente de Ventas',
                'descripcion' => 'Gerente',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            2 => 
            array (
                'id' => 3,
                'nombre' => 'Master Lead',
                'descripcion' => 'Gerente',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            3 => 
            array (
                'id' => 4,
            'nombre' => 'APS (Vendedor)',
                'descripcion' => 'Agente de ventas',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            4 => 
            array (
                'id' => 5,
                'nombre' => 'Recepcionista',
                'descripcion' => 'Agente de ventas',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            5 => 
            array (
                'id' => 6,
                'nombre' => 'Demo',
                'descripcion' => 'Demo',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            6 => 
            array (
                'id' => 7,
                'nombre' => 'Consulta',
                'descripcion' => 'Consulta',
                'created_at' => '2021-01-27 13:01:32',
                'updated_at' => '2021-01-27 13:01:32',
            ),
            7 => 
            array (
                'id' => 0,
                'nombre' => 'desarrollo',
                'descripcion' => 'desarrollo',
                'created_at' => '2020-09-21 14:26:44',
                'updated_at' => '2020-09-21 14:26:44',
            ),
            8 => 
            array (
                'id' => 8,
                'nombre' => 'F & I',
                'descripcion' => 'Financiamiento',
                'created_at' => '2021-02-22 12:08:00',
                'updated_at' => '2021-02-22 12:08:00',
            ),
            9 => 
            array (
                'id' => 9,
                'nombre' => 'Gerente General',
                'descripcion' => 'Gerente general',
                'created_at' => '2020-09-21 14:26:44',
                'updated_at' => '2020-09-21 14:26:44',
            ),
            10 => 
            array (
                'id' => 10,
                'nombre' => 'EPCI',
                'descripcion' => 'epci',
                'created_at' => '2020-09-21 14:26:44',
                'updated_at' => '2020-09-21 14:26:44',
            ),
            11 => 
            array (
                'id' => 11,
                'nombre' => 'Credito',
                'descripcion' => 'Área de credito y cobranza',
                'created_at' => '2020-09-21 14:26:44',
                'updated_at' => '2020-09-21 14:26:44',
            ),
            12 => 
            array (
                'id' => 12,
                'nombre' => 'Seminuevos',
                'descripcion' => 'Seminuevos',
                'created_at' => '2020-09-21 14:26:44',
                'updated_at' => '2020-09-21 14:26:44',
            ),
            13 => 
            array (
                'id' => 13,
                'nombre' => 'Gerente ELAM',
                'descripcion' => 'Gerente ELAM',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 14,
            'nombre' => 'Gerente comercial (ELAM)',
            'descripcion' => 'Gerente comercial (ELAM)',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}