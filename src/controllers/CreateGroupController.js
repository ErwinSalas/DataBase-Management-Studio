angular.module('mainModule')
    .controller('CreateGroupController', function ($scope) {
       
        $scope.groupDisklist=[ ];
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

            $scope.addDiskInGroup = function(diskName){
                $scope.groupDisklist.push(diskName);

            }
        
        /* $scope.displayDiskList = DataResources.getDiskInformation(function (res) {
             console.log("res ", res);
             $scope.disklist = res;
             
         });
         */
        
    })
