'use strict';

angular.module('ciandtDojos.senseis', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/senseis', {
    templateUrl: 'senseis/senseis.html',
    controller: 'SenseisCtrl'
  });
}])

.controller('SenseisCtrl', ['$scope', 'Sensei', function($scope, Sensei) {
  $scope.senseis = [];


  $scope.load = function(){
    Sensei.query(function(response){
      $scope.senseis = response.data;
    });
  }

  $scope.addSensei = function () {
    Sensei.save($scope.sensei, function() {
      $scope.errorMessage = null;
      $scope.load();

    }, function(response){
      $scope.errorMessage = "Server is down";
    });
  }

  $scope.load();

}]).factory('Sensei', ['$resource', function($resource){
  return $resource('/api/senseis/:senseiId', {senseiId:'@id'}, {'query': {method: 'GET', isArray:false}});
}]).directive('notAllowed', ['$http', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function() {
        if (c.$viewValue != attrs.notAllowed) {
          c.$setValidity('allowed', true);
        } else {
          c.$setValidity('allowed', false);
        };
      });
    }
  }
}]);
