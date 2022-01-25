<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidos');
            $table->integer('genero')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('telefono')->nullable();
            $table->string('celular')->nullable();
            $table->string('calle')->nullable();
            $table->string('calle_num')->nullable();
            $table->integer('id_asenta')->nullable();
            $table->string('cp')->nullable();
            $table->integer('id_estado')->nullable();
            $table->integer('id_municipio')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('password_plain')->nullable();
            $table->string('avatar')->default('avatar.svg');
            $table->integer('rol');
            $table->integer('estatus')->nullable();
            $table->integer('visto')->default(0);
            $table->integer('actividades')->default(0);
            $table->integer('id_agencia')->default(0);
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
        });

        $statement = "SELECT setval('users_id_seq', 19, true);";

        DB::unprepared($statement);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
