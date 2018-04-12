var app = angular;
app
  .module("loginModule", [])
  .factory("loginService", function($http) {
    var res = {
      doLogin: function(params, callback) {
        $http({
          method: "POST",
          url: "http://172.24.98.53:8090/database/login",
          data: params
        })
          .success(function successCallback(response) {
            // this callback will be called asynchronously
            callback(response);
          })
          .error(function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("fallo", response);
            callback(response);
          });
      }
    };
    return res;
  })
  .controller("loginController", function($scope, $http, loginService) {
    /**
     * Ejecuta el inicio de sesión.
     */

    $scope.dologin = function() {
      data = $scope.loginData;
      console.log("login data", data);
      $http({
        method: "POST",
        url: "http://172.24.98.53:8090/database/login",
        data: {
            "username": data.username,
            "database": data.database,
            "db_host": data.db_host, 
            "password": data.password
        }
      }).then(
        function successCallback(response) {
          if (response == true) {
            window.location.href = "src";
          }
        },
        function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log("fallo", response);
        }
      );
    };

    /**
     * Guarda la sesión en el almacenamiento local del navegador.
     * @param json JSON de origen.
     *  loginService.doLogin(data,function(response) {
        // when the response is available
        console.log("entro", response);
        if (response == true) {
          window.location.href = "src";
        }
      });
     */
    function saveSession(json) {
      localStorage.setItem("session.token", json.session.token);
      localStorage.setItem("session.owner", JSON.stringify(json.user));
      console.log("Sesión guardada.");
    }
  });
