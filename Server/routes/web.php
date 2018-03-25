<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/*$router->post('/crearLogin', [
    'as' => '/crearLogin', 'uses' => 'DataBaseBIOSController@crearLogin'
]);
*/

$router->post('/crearLogin','DataBaseBIOSController@crearLogin');
$router->post('/crearDisco/{db}','DataBaseBIOSController@crearDisco');


$router->put('/modificarDisco/{db}','DataBaseBIOSController@modificarDisco');

$router->get('/api', function ()
{
    return "asf";
});
