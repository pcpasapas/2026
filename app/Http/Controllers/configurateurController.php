<?php

namespace App\Http\Controllers;

use App\Models\Alimentation;
use App\Models\Categorie;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class configurateurController extends Controller
{
    public function index (Request $request) {
        $alimentations = Alimentation::all();
        return Inertia::render('Configurateur', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'alimentations' => $alimentations
        ]);
    }
    public function composants (Request $request) {
        $categories = Categorie::all();
        return Inertia::render('Configurateur', [
            'categories' => $categories
        ]);
    }

    public function games (Request $request) {
        $games = Game::all();
        return Inertia::render('Configurateur', [
            'games' => $games
        ]);
    }
}
