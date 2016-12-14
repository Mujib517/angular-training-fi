var app=angular.module('app',['ngRoute','serviceModule']);  //one dependency

app.config(function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/',{
        template:'<h1>Home Page</h1>'
    })
    .when('/about',{
        template:'<h1>About Page</h1>'
    })
      .when('/users',{
        templateUrl:'app/templates/users.html',
        controller:'userCtrl'
    })
    .when('/users/:id',{
       templateUrl:'app/templates/user-detail.html',
        controller:'userDetailCtrl' 
    })
      .when('/addUser',{
        templateUrl:'app/templates/add-user.html',
        controller:'addUserCtrl'
    })
    .otherwise('/');
});


var myCtrl=function($scope,$rootScope){

    $scope.message="hello angular11";

    $scope.message2="My message";

    $rootScope.rootProp="From RootScope";

    $scope.showDiv=true;

    $scope.vals=[1,2,3,4,5,6,7];

    $scope.today=new Date();
    
};

app.controller('myCtrl',myCtrl);