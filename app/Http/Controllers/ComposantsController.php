<?php

namespace App\Http\Controllers;

use App\Models\Alimentation;
use App\Models\Boitier;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComposantsController extends Controller
{
    public function index(Request $request, $categorie) {

        if ($categorie === "alims") {
            $composants = Alimentation::all();
        }
        else if ($categorie === "boitiers") {
            $composants = Boitier::all();
        }

        return Inertia::render('Configurateur', [
            'composants' => $composants,
            'categorieChoisi' => $categorie,
            'categories' => Categorie::all()
        ]);
    }
}
