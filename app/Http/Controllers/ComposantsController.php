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
            $composants = Alimentation::orderBy('prix', 'ASC')->get();
        }
        else if ($categorie === "boitiers") {
            $composants = Boitier::orderBy('prix', 'ASC')->get();
        }
        return [
            'composants' => $composants,
            'categorieChoisi' => $categorie,
            'categories' => Categorie::all()
        ];
    }
}
