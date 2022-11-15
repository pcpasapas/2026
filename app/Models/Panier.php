<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    use HasFactory;
    public function boitier() {
        return $this->belongsTo(Boitier::class);
    }
    public function alimentation() {
        return $this->belongsTo(Alimentation::class);
    }
    public function processeur() {
        return $this->belongsTo(Processeur::class);
    }
    public function carteMere() {
        return $this->belongsTo(CarteMere::class);
    }
    public function ram() {
        return $this->belongsTo(Ram::class);
    }
    public function carteGraphique() {
        return $this->belongsTo(CarteGraphique::class);
    }
    public function ssd() {
        return $this->belongsTo(Ssd::class);
    }
    public function hdd() {
        return $this->belongsTo(Hdd::class);
    }
    protected $fillable = ['boitier_id', 'alimentation_id','processeur_id','carte_mere_id', 'ram_id', 'carte_graphique_id', 'ssd_id', 'hdd_id', 'user_id'];
}
