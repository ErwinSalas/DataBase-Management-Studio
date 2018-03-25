<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DataBaseBIOSController extends Controller
{
    public function crearLogin(Request $request)
    {
        try {
            $user = $request->get('user');
            $password = $request->get('password');
            $ipServer = $request->get('ipServer');
            $port = $request->get('port');
            $TypeOfEnginne = $request->get('TypeOfEnginne');
            $env_update = config([
                'DB_CONNECTION'   => $TypeOfEnginne,
                'DB_HOST'         => $ipServer,
                'DB_PORT'         => $port,
                'DB_USERNAME'     => $user,
                'DB_PASSWORD'     => $password
            ]);
            return response()->json(['result' => true]);
        }
        catch(Exception $e) {
            return response()->json(['result' => false]);
        }
    }

    public function crearDisco(Request $request, $db)
    {
        try {
            $mb = $request->get('MB');
            $disk = $request->get('DISKNAME');
            DB::select('exec crearDisco(?,?,?)',array($mb,$db,$disk));
            return response()->json(['result' => true]);
        }
        catch(Exception $e) {
            return response()->json(['result' => false]);
        }
    }

    public function modificarDisco(Request $request, $db)
    {
        try {
            $maxSize = $request->input('MAXSIZE');
            $disk = $request->get('DISKNAME');
            DB::select('exec modificarDisco (?,?,?)',array($db,$disk,$maxSize));
            return response()->json(['result' => true]);
        }
        catch(Exception $e) {
            return response()->json(['result' => false]);
        }
    }

    public function creargrupoArchivo($db)
    {
        try {
            $newFileGroup = $request->input('NEWFILEGROUP');
            DB::select('exec crearFileGroup(?,?)',array($db,$newFileGroup));
            return response()->json(['result' => true]);
        }
        catch(Exception $e) {
            return response()->json(['result' => false]);
        }
    }

    public function consultarInformacion()
    {
        try {
            DB::select('EXEC consultarBD');
            return response()->json(['result' => true]);
        }
        catch(Exception $e) {
            return response()->json(['result' => false]);
        }
    }
}
