<?php

namespace App\Http\Controllers;

use App\Models\Panier;
use Illuminate\Http\Request;

class PaniersController extends Controller
{
    public function index () {
        $panier = Panier::where('id', 1)->get();
        return $panier;
    }

    public function add (Request $request) {
        $panier = Panier::find(1);
        $cat = $request->categorie;
        $panier->update([$cat => $request->composant]);
        return $panier;
    }
}
