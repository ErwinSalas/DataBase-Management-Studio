angular
  .module("mainModule")
  .controller("CreateGroupController", function($scope,DataBaseResources,FileGroupResources) {
   
    $scope.addDatabaseInGroup = function(database) {
      $scope.db=database;
    };

    getDataBases=function (){
        DataBaseResources.getDataBaseNames(function (res) {
            console.log("res ", res);
            $scope.dbs = res;
        });
    };
    $scope.setGroup=function(){
        params={
            "db":$scope.db,
            "newFilegroup":$scope.name
        }
        FileGroupResources.CreateGroup(params,function (res) {
            console.log("res ", res);
            $scope.databases = res;
        });
    }
    
   
    getDataBases();
  });
