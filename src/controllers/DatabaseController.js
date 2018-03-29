angular.module('mainModule')
    .controller('DatabaseController', function ($scope, $location, DataBaseResources) {
       
       
        getInfo=function (){
            DataBaseResources.getDataBaseMaxSize(function (res) {
                console.log("res ", res);
                $scope.disklist = res;
                $scope.usage=getTotalUsage(res);

                
            });
        };
        getInfo();
    
}) ;
