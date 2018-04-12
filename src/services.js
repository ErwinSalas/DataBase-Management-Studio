/**
 * Created by Erwin on 27/10/2016.
 * 
 * 
 * [15:52, 11/4/2018] Negrini: Mae ya le conecté la vara
[15:52, 11/4/2018] Negrini: 172.24.98.53:8090
[15:53, 11/4/2018] Negrini: database/tamaño
[15:53, 11/4/2018] Negrini: database/crecimiento
[15:54, 11/4/2018] Negrini: database/tamaño Maximo
[15:54, 11/4/2018] Negrini: database/ConsultaUso
[15:55, 11/4/2018] Negrini: database/ConsultaBD
[15:56, 11/4/2018] Negrini: database/crearDisco
[15:56, 11/4/2018] Negrini: database/crearFileGroup
[15:56, 11/4/2018] Negrini: database/modificar Disco
 */


angular.module('mainModule')

    .factory('DiskResources', function ($http) {
        var res = {
            getDiskInformation: function (callback) {
                $http({
                    method: "GET",
                    url: API_ROOT + '/'
                }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response);

                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response);
                });
            },
            CreateNewDisk: function (DiskInformation,callback) {
                $http({
                    method: 'POST',
                    url:  'http://172.24.98.53:8090/database/crearDisco',
                    headers: { 'Content-Type': 'application/json'},
                    data: DiskInformation
                }).success(function successCallback (response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response);
                }).error(function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.log("fallo", response);
                        callback(response);
                });
            }
        };
        return res;
    })
    .factory('FileGroupResources', function ($http) {
        var res = {
            getFileGroupInformation: function (callback) {
                $http({
                    method: "GET",
                    url: API_ROOT + '/'
                }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response);

                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response);
                });
            },
            CreateGroup: function (params,callback) {
                $http({
                    method: "POST",
                    url: 'http://172.24.98.53:8090/database/crearFileGroup',
                    headers: { 'Content-Type': 'application/json'},
                    data:params

                }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("creo grupo", response);
                    callback(response);

                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response);
                });
            }
        };
        return res;
    }) 
    .factory('DataBaseResources', function ($http) {
        var res = {
            getDataBaseMaxSize: function (callback) {
                $http({
                    method: "GET",
                    url: 'http://172.24.98.53:8090/database/tamanoMaximo'
                }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response);

                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response);
                });
            },
            getDataBaseNames: function (callback) {
                $http({
                    method: "GET",
                    url: 'http://172.24.98.53:8090/database/consultarBaseDeDatos'
                }
                ).success(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response);

                }).error(function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fallo", response);
                    callback(response);
                });
            }
            
        };
        return res;
    });