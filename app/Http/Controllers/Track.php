<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Track extends Controller
{
    //
    public function getTrack($trackId)
    {
        $clientId = '9a3da71c'; // Store in .env file
        $url = 'https://api.jamendo.com/v3.0/tracks';
        $params = [
            'client_id' => $clientId,
            'format' => 'json',
            'id' => $trackId,
        ];
        $response = Http::withOptions([
            'verify' => 'C:/php/cacert.pem',
        ])->get($url, $params);

        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Failed to retrieve track data'], 500);
        }
    }
}
