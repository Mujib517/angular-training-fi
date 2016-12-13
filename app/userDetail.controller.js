app.controller('userDetailCtrl',function($scope,$http,$routeParams,userFactory){ //dep injection

 var id=$routeParams.id;
    
    userFactory.getById(id)
    .then(function(response){
        $scope.user=response.data;
    },function(err){
        cosnole.log(err);
    });

});