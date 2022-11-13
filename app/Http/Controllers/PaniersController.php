<?php

namespace App\Http\Controllers;

use App\Models\Panier;
use Illuminate\Http\Request;

class PaniersController extends Controller
{
    public function index () {
        $panier = Panier::find(1);
        if ($panier->boitier) {
            $boitier = $panier->boitier;
            $categorie = $boitier->categorie;
            }
            else {
                $boitier = null;
            }
            if ($panier->alimentation) {
            $alimentation = $panier->alimentation;
            $categorie = $alimentation->categorie;
            } 
            else {
                $alimentation = null;
            }
            if ($panier->processeur) {
                $processeur = $panier->processeur;
                $categorie = $processeur->categorie;
                } 
                else {
                    $processeur = null;
                }
            return [$boitier, $alimentation, $processeur];
    }

    public function add (Request $request) {
        $panier = Panier::find(1);
        $cat = $request->categorie;
        $panier->update([$cat => $request->composant]);

        if ($panier->boitier) {
        $boitier = $panier->boitier;
        $categorie = $boitier->categorie;
        }
        else {
            $boitier = "";
        }
        if ($panier->alimentation) {
        $alimentation = $panier->alimentation;
        $categorie = $alimentation->categorie;
        } 
        else {
            $alimentation = "";
        }
        if ($panier->processeur) {
            $processeur = $panier->processeur;
            $categorie = $processeur->categorie;
            } 
            else {
                $processeur = "";
            }
        if ($panier->carteMere) {
            $carteMere = $panier->carteMere;
            $categorie = $carteMere->categorie;
            } 
            else {
                $carteMere = "";
            }
        return [$boitier, $alimentation, $processeur, $carteMere];
    }
}
