/**
 * Created by Erwin on 25/10/2016.
 */
angular.module('mainModule',["ngRoute"])
.config(['$routeProvider',function($routeProvider)
    {
        $routeProvider.when("/user",{
            templateUrl:'dashboard.html',
            controller: 'dashboardCtrl'
        }).when("/inicio",{
                templateUrl:'dashboard.html',
                controller: 'dashboardCtrl'
            })
       
        .when("/areas",{
            templateUrl:'Maps/areas.html',
            controller: 'areasCtrl'
        })



    }
]);
