/**
 * Created by Erwin on 25/10/2016.
 */
angular.module('mainModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider)
    {
        $routeProvider.when("/disks",{
            templateUrl:'views/disks.html',
            controller: 'DiskController'
        }).when("/files",{
                templateUrl:'views/groups.html',
                controller: 'FileGroupController'
            })
       
        .when("/create-disk",{
            templateUrl:'views/create-disk.html',
            controller: 'CreateDiskController'
        }).when("/create-group",{
            templateUrl:'views/create-group.html',
            controller: 'CreateGroupController'
        }).when("/",{
            templateUrl:'views/home.html'
        })
        


    }
]);
