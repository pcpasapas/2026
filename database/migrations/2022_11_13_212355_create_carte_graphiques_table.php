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
        Schema::create('carte_graphiques', function (Blueprint $table) {
            $table->id();
            $table->string('marque');
            $table->string('name');
            $table->integer('prix');
            $table->string('memoire');
            $table->string('puissance');
            $table->boolean('img');
            $table->string('lien');
            $table->foreignIdFor(Categorie::class)->constrained()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carte_graphiques');
    }
};
