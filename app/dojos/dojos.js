'use strict';

angular.module('ciandtDojos.dojos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dojos', {
    templateUrl: 'dojos/dojos.html',
    controller: 'DojosCtrl'
  });
}])

.controller('DojosCtrl', ['$scope', '$http', function($scope,$http) {

  $scope.dojo =   {
    name : '',
    description : ''
  }

  $scope.add = function()
  {
    $http.post('/api/dojos', $scope.dojo);
    $scope.load();
  }

  $scope.load = function()
  {
    $http.get('/api/dojos').
  success(function(data, status, headers, config) {
    $scope.dojos = data.data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



  }

  $scope.load();

}]);
