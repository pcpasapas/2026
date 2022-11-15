<?php

namespace App\Http\Controllers;

use App\Models\Alimentation;
use App\Models\Boitier;
use App\Models\CarteGraphique;
use App\Models\CarteMere;
use App\Models\Categorie;
use App\Models\Hdd;
use App\Models\Panier;
use App\Models\Processeur;
use App\Models\Ram;
use App\Models\Ssd;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ComposantsController extends Controller
{
    public function index(Request $request, $categorie) {
        if(json_decode(Auth::user() != null)) {
            $panier = Panier::where('user_id', Auth::user()->id)->get();
            if (json_decode($panier) == []){
                Panier::create(['user_id' => Auth::user()->id]);
                $panier = Panier::where('user_id', Auth::user()->id)->first();
            } else {
                $panier = Panier::where('user_id', Auth::user()->id)->first();
            }
        } else {
            $panier = Panier::find(1);
        }
        if ($categorie === "alims") {
            $composants = Alimentation::orderBy('prix', 'ASC')->get();
        }
        else if ($categorie === "boitiers") {
            if ($panier->carte_mere_id != null) {
                $carteMereFormat = $panier->carteMere->format_cm;
                $composants = Boitier::where('format_cm', 'LIKE', '%'.$carteMereFormat.'%')->orderBy('prix', 'ASC')->get();
            } else {
                $composants = Boitier::orderBy('prix', 'ASC')->get();
            }

        }
        else if ($categorie === "processeurs") {
            if ($panier->carte_mere_id != null) {
                $carteMereSocket = $panier->carteMere->socket;
                $composants = Processeur::where('socket', $carteMereSocket)->orderBy('prix', 'ASC')->get();
            } else {
                $composants = Processeur::orderBy('prix', 'ASC')->get();
            }
        }
        else if ($categorie === "cartesMeres") {
            if ($panier->processeur_id != null) {
                $processeurSocket = $panier->processeur->socket;
                $composants = CarteMere::where('socket', $processeurSocket)->orderBy('prix', 'ASC')->get();
            } else {
                $composants = CarteMere::orderBy('prix', 'ASC')->get(); 
            }
        }
        else if ($categorie === "ram") {
            $composants = Ram::orderBy('prix', 'ASC')->get();
        }
        else if ($categorie === "cartesGraphiques") {
            $composants = CarteGraphique::orderBy('prix', 'ASC')->get();
        }
        else if ($categorie === "ssd") {
            $composants = Ssd::orderBy('prix', 'ASC')->get();
        }
        else if ($categorie === "hdd") {
            $composants = Hdd::orderBy('prix', 'ASC')->get();
        }
        return [
            'composants' => $composants,
            'categorieChoisi' => $categorie,
            'categories' => Categorie::all()
        ];
    }
}

