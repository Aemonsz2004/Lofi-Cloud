<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class Home extends Controller
{
    //

    public function index()
    {
        $clientId = '9a3da71c';
        $response = Http::get("https://api.jamendo.com/v3.0/tracks/", [
            'client_id' => $clientId,
            'order' => 'popularity_total',
            'format' => 'json'
        ]);

        $tracks = $response->json()['results'];

        return Inertia::render('Home', [
            'tracks' => $tracks,
        ]);
    }


  
}
