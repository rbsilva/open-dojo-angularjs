/* global $ */
(function() {
  'use strict';
  angular.module('ciandtDojos.cpf', []).directive('cpf', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {

        ctrl.$parsers.unshift(function(viewValue) {
          if (scope.testaCPF(viewValue)) {
            ctrl.$setValidity('cpf', true);
            return viewValue;
          } else {
            ctrl.$setValidity('cpf', false);
            return undefined;
          };
        });

        //Verifica se CPF é válido
        scope.testaCPF = function (strCPF) {
          var soma;
          var resto;
          soma = 0;
          //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
          if (strCPF == "00000000000") {
            return false;
          }
          var i;
          for (i=1; i<=9; i++) {
            soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
          }

          resto = (soma * 10) % 11;

          if ((resto == 10) || (resto == 11)) {
            resto = 0;
          }

          if (resto != parseInt(strCPF.substring(9, 10)) ) {
            return false;
          }

          soma = 0;
          for (i = 1; i <= 10; i++) {
            soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
          }

          resto = (soma * 10) % 11;

          if ((resto == 10) || (resto == 11)) {
            resto = 0;
          }

          if (resto != parseInt(strCPF.substring(10, 11) ) ) {
            return false;
          }

          return true;
        };
      }
    };
  });

}).call(this);
