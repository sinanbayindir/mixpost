<?php

namespace Lao9s\Mixpost\Http\Controllers;

use Illuminate\Routing\Controller;
use Inertia\Inertia;

class PostsController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Posts');
    }
}