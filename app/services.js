var serviceModule=angular.module('serviceModule',[]);

serviceModule.value('apiUrl','https://api.github.com/users');

serviceModule.constant('apiUrlGetById','https://api.github.com/users/')

serviceModule.service('userSvc',function($http,apiUrl){
    
    this.get=function(){
        return $http.get(apiUrl);
    }

});

serviceModule.factory('userFactory',function($http,apiUrlGetById){
    
    var getById=function(id){
        return $http.get(apiUrlGetById+''+id)
    };
    
    return{
        getById:getById
    }
})

