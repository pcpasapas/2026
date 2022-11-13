<?php

use App\Models\CarteGraphique;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::disableForeignKeyConstraints();
            Schema::table('paniers', function (Blueprint $table) {
                $table->foreignIdFor(CarteGraphique::class)->constrained()->nullable();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('paniers', function (Blueprint $table) {
            //
        });
    }
};
