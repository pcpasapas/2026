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
    protected $fillable = ['boitier_id', 'alimentation_id'];
}
