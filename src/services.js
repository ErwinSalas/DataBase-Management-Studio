/**
 * Created by Erwin on 27/10/2016.
 */
angular.module('mainModule')
    /*
    Los factory en angular estan basados en el patron de diseño factoria el cual
    deviuelve instancias de un objeto o variable en este caso es un arreglo de
    objetos json
    */

    .factory('ReserveResource', function ($http) {
        var authToken = localStorage.getItem('session.token');
        var factory = {
            getReserve: function (reserveID, callback) {
                $http({
                        method: "GET",
                        url: API_ROOT+'/reservation/get?id={0}&authToken={1}'.format(reserveID, authToken)
                    }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                   
                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response.content);
                });
            },
            setReserve: function (reservation) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/reservation/reserve?authToken={0}'
                        .format(authToken),
                    data: reservation
                })
                    .success(function (data) {
                        if (data.errors) {
                            // Showing errors.
                            console.log("set message error", data.errors);
                        } else {
                            console.log("set reservation success",data);
                        }
                    });
            }
        };
        return factory;
    });
