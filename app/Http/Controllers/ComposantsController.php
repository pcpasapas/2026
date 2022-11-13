<?php

namespace App\Http\Controllers;

use App\Models\Alimentation;
use App\Models\Boitier;
use App\Models\CarteMere;
use App\Models\Categorie;
use App\Models\Panier;
use App\Models\Processeur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComposantsController extends Controller
{
    public function index(Request $request, $categorie) {
        if ($categorie === "alims") {
            $composants = Alimentation::orderBy('prix', 'ASC')->get();
        }
        else if ($categorie === "boitiers") {
            $panier = Panier::find(1);
            if ($panier->carte_mere_id != null) {
                $carteMereFormat = $panier->carteMere->format_cm;
                $composants = Boitier::where('format_cm', 'LIKE', '%'.$carteMereFormat.'%')->get();
            } else {
                $composants = Boitier::orderBy('prix', 'ASC')->get();
            }

        }
        else if ($categorie === "processeurs") {
            $panier = Panier::find(1);
            if ($panier->carte_mere_id != null) {
                $carteMereSocket = $panier->carteMere->socket;
                $composants = Processeur::where('socket', $carteMereSocket)->orderBy('prix', 'ASC')->get();
            } else {
                $composants = Processeur::orderBy('prix', 'ASC')->get();
            }
        }
        else if ($categorie === "cartesMeres") {
            $panier = Panier::find(1);
            if ($panier->processeur_id != null) {
                $processeurSocket = $panier->processeur->socket;
                $composants = CarteMere::where('socket', $processeurSocket)->orderBy('prix', 'ASC')->get();
            } else {
                $composants = CarteMere::orderBy('prix', 'ASC')->get(); 
            }
        }
        return [
            'composants' => $composants,
            'categorieChoisi' => $categorie,
            'categories' => Categorie::all()
        ];
    }
}

