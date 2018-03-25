var app = angular.module('loginModule', [])
    .controller('loginController', function ($scope, $http) {
        $scope.loginData = {
            username: "",
            db_host: "",
            engine: "",
            password: ""

        };
        var API_ROOT="https://monitoring-studio-api.herokuapp.com"
        // modelo de datos.

        /**
         * Ejecuta el inicio de sesión.
         */

        $scope.dologin = function(){
            console.log("dologin");
            $http({
                method: "POST",
                url: API_ROOT+'/crearLogin',
                data: $scope.loginData
            }
            ).success(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log("entro", response);
                if (response.data.result == true){
                    window.location.href = ('src');
                }

            }).error(function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("fallo", response);
                
            });
        };

        /**
         * Guarda la sesión en el almacenamiento local del navegador.
         * @param json JSON de origen.
         */
        function saveSession(json) {
            localStorage.setItem("session.token", json.session.token);
            localStorage.setItem("session.owner", JSON.stringify(json.user));
            console.log("Sesión guardada.");
        };
    });