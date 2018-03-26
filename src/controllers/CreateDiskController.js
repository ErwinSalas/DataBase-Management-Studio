angular.module('mainModule')
    .controller('CreateDiskController', function ($scope, $location) {
       
      
        $scope.databases=["master","test1","test2","db1","db2"]
        
        /* $scope.displayDiskList = DataResources.getDiskInformation(function (res) {
             console.log("res ", res);
             $scope.disklist = res;
             
         });
         */
        
    })
