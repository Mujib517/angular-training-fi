app.controller('userCtrl',function($scope,$http,userSvc){ //dep injection

var getSuccess=function(response){
        $scope.users=response.data;
    };

    userSvc.get()
    .then(getSuccess,function(err){
        cosnole.log(err);
    });
});