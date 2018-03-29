/**
 * Created by Erwin on 26/10/2016.
 */

angular.module('mainModule')
    .controller('MainViewController',function($scope,DataBaseResources) {
    /* config object */

       /* var usuario = JSON.parse(sessionStorage.getItem("user"));

        $scope.user = usuario.name;
        $scope.email= usuario.email;*/
        $scope.user = "Database Management Studio ";
        $scope.email = "@superuser";
        getDataBases=function (){
            DataBaseResources.getDataBaseNames(function (res) {
                console.log("res ", res);
                $scope.databases = res;
            });
        };
        
        $scope.saveUseDatabase= function(database){

            localStorage.setItem('database', database);
        };
        getDataBases();
    });
         



