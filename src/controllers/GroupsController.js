angular.module('mainModule')
    .controller('FileGroupController', function ($scope, DataBaseResources) {
       
        getInfo=function (){
            DataBaseResources.getDataBaseMaxSize(function (res) {
                console.log("res ", res);
                $scope.files = res;
                
            });
        };
        getInfo();
        
    })
