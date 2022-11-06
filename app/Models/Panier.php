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
    protected $fillable = ['boitier_id'];
}
