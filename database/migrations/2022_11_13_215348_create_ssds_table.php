<?php

use App\Models\Categorie;
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
        Schema::table('ssds', function (Blueprint $table) {
            $table->string('marque');
            $table->string('name');
            $table->integer('prix');
            $table->string('taille');
            $table->boolean('img');
            $table->string('lien');
            $table->foreignIdFor(Categorie::class)->constrained()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ssds');
    }
};
