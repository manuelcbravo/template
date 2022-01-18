<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuParentChildrensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_parent_childrens', function (Blueprint $table) {
            $table->id();
            $table->integer('menu_parent_id');
            $table->string('nombre');
            $table->string('ruta');
            $table->string('roles');
            $table->integer('enabled');
            $table->integer('order');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menu_parent_childrens');
    }
}
