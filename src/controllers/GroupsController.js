angular.module('mainModule')
    .controller('FileGroupController', function ($scope, $location, FileGroupResources) {
       
        $scope.files = [
            {
                name: 'group_master',
                usage: 56

            },
            {
                name: 'group_db1',
                usage: 79
            },
            {
                name: 'group_media',
                usage: 86
            },
            {
                name: 'group_test1',
                usage: 67
            },
            {
                name: 'group_tables',
                usage: 46
            }];
        /* $scope.displayGroupList = FileGroupResources.getFileGroupInformation(function (res) {
             console.log("res ", res);
             $scope.dfiles = res;
             
         });
         */
        
    })
