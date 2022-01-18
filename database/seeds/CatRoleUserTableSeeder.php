<?php

use Illuminate\Database\Seeder;

class CatRoleUserTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cat_role_user')->delete();
        
        \DB::table('cat_role_user')->insert(array (
            0 => 
            array (
                'id' => 1,
                'cat_role_id' => 0,
                'user_id' => 1,
                'created_at' => '2020-09-21 14:26:44',
                'updated_at' => '2020-09-21 14:26:44',
            ),
        ));
        
        
    }
}