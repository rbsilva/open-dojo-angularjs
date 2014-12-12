'use strict';

// Declare app level module which depends on views, and components
angular.module('ciandtDojos', [
  'ngRoute',
  'ngResource',
  'ciandtDojos.dojos',
  'ciandtDojos.senseis',
  'ciandtDojos.version',
  'ciandtDojos.development',
  'ciandtDojos.form',
  'ciandtDojos.cpf'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dojos'});
}]);
