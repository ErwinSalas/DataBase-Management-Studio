angular.module('mainModule')
    .controller('CreateDiskController', function ($scope, DiskResources) {
        
        $scope.createDisk = function(){
            DiskResources.CreateNewDisk($scope.disk,function (res) {
                console.log("res ", res);
                
                
            });
        }
        
        
        
    })
