<?php

use App\Http\Controllers\Track;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('Home', function () {
    return Inertia::render('Home');
})->name('Home');


Route::get('Search', function () {
    return Inertia::render('Search');
})->name('Search');


Route::get('Library', function () {
    return Inertia::render('Library');
})->name('Library');



Route::get('/track/{trackId}', [Track::class, 'getTrack'])->name('getTrack');