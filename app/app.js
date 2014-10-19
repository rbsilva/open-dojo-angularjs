'use strict';

// Declare app level module which depends on views, and components
angular.module('ciandtDojos', [
  'ngRoute',
  'ciandtDojos.dojos',
  'ciandtDojos.version',
  'ciandtDojos.development',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dojos'});
}]);
