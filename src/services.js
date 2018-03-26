/**
 * Created by Erwin on 27/10/2016.
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
            CreateNewDisk: function (DiskInformation) {
                $http({
                    method: 'POST',
                    url: API_ROOT + '/',
                    data: DiskInformation
                }).success(function successCallback (data) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("entro", response);
                    callback(response);
                }).error(function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.log("fallo", response);
                        callback(response.content);
                });
            }
        };
        return res;
    })
    .factory('DataResources', function ($http) {
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
            }
        };
        return res;
    });
