<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ssd extends Model
{
    use HasFactory;
    public function panier() {
        return $this->hasOne(Panier::class);
    }
    public function categorie() {
        return $this->belongsTo(Categorie::class);
    }
}
