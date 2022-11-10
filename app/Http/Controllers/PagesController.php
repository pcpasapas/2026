<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function tutoriels() {
        return Inertia::render('Tutoriels');
    }

    public function comparateur() {
        return Inertia::render('Comparateur');
    }
}
