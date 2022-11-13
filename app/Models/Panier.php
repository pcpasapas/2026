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
    protected $fillable = ['boitier_id', 'alimentation_id','processeur_id','carte_mere_id'];
}
