/**
 * Created by Erwin on 26/10/2016.
 */

angular.module('mainModule')
    .controller('MainViewController', function($scope,$location) {
    /* config object */

       /* var usuario = JSON.parse(sessionStorage.getItem("user"));

        $scope.user = usuario.name;
        $scope.email= usuario.email;*/
        $scope.user = "Database Management Studio ";
        $scope.email = "@superuser";
       
    })
         



