'use strict';

angular.module('ciandtDojos.dojos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dojos', {
    templateUrl: 'dojos/dojos.html',
    controller: 'DojosCtrl'
  });
}])

.controller('DojosCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.items = [];

  $scope.addDojo = function () {
    $http.post('/api/dojos', $scope.dojo);

    $http.get('/api/dojos').success(function(response){
      $scope.items.push(response);
    });
  }

}]);
