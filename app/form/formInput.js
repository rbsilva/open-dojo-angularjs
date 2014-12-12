'use strict';

angular.module('ciandtDojos.form', [])
.directive('formInput', ['$compile', function($compile) {
  return {
    templateUrl: 'form/formInput.html',
    restrict: 'E',
    scope: {
      label: "@",
      model: "=",
      inputName: "@",
      inputRequired: "@",
      inputForm: "=",
      inputPattern: "@"
    },

    controller: function($scope, $element, $attrs) {
      var input = $element.find('input');
      input.attr('name', $scope.inputName);
      if ($scope.inputRequired == 'true') {
        input.attr('required', 'required');
      }
      if($scope.inputPattern) {
        //input.attr('ng-pattern', $scope.inputPattern);
        input.attr('cpf', 'cpf');
      }
      $scope.inputForm.$addControl($compile(input)($scope));
    }

  }
}]);
