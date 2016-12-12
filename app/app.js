var app=angular.module('app',[]);  //no dependency


var myCtrl=function($scope,$rootScope){

    $scope.message="hello angular11";

    $scope.message2="My message";

    $rootScope.rootProp="From RootScope";

    $scope.showDiv=true;

    $scope.vals=[1,2,3,4,5,6,7];

    $scope.today=new Date();
    
};

app.controller('myCtrl',myCtrl);