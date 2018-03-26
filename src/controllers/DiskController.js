angular.module('mainModule')
    .controller('DiskController', function ($scope, $location, DiskResources) {
       
        $scope.disklist = [
            {
                name: 'disk_master',
                usage: 56

            },
            {
                name: 'disk_db1',
                usage: 79
            },
            {
                name: 'disk_media',
                usage: 86
            },
            {
                name: 'disk_test1',
                usage: 67
            },
            {
                name: 'file_tables',
                usage: 46
            }];
        /* $scope.displayDiskList = DataResources.getDiskInformation(function (res) {
             console.log("res ", res);
             $scope.disklist = res;
             
         });
         */
        
    })

