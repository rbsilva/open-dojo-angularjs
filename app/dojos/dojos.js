'use strict';

angular.module('ciandtDojos.dojos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dojos', {
    templateUrl: 'dojos/dojos.html',
    controller: 'DojosCtrl'
  });
}])

.controller('DojosCtrl', ['$scope', 'Dojo', function($scope, Dojo) {

  $scope.dojos = [];


  $scope.load = function(){
    Dojo.query(function(response){
      $scope.dojos = response.data;
    });
  }

  $scope.addDojo = function () {
    Dojo.save($scope.dojo, function() {
      $scope.errorMessage = null;
      $scope.load();

    }, function(response){
      $scope.errorMessage = "Server is down";
    });
  }

  $scope.load();

}]).factory('Dojo', ['$resource', function($resource){
  return $resource('/api/dojos/:dojoId', {dojoId:'@id'}, {'query': {method: 'GET', isArray:false}});
}]);
