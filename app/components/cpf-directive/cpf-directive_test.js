/* global describe, beforeEach, inject, it, expect */
(function() {
  'use strict';
  describe('Directive: cpf', function() {
    var scope, form;

    beforeEach(module('ciandtDojos.cpf'));
    scope = {};

    beforeEach(inject(function($compile, $rootScope) {
      scope = $rootScope;
      var element = angular.element(
        '<form name="form">' +
        '<input ng-model="model.cpf" name="cpf" cpf />' +
        '</form>'
      );
      scope.model = { cpf: null }
      $compile(element)(scope);
      form = scope.form;
    }));

    it('should validate the cpf as invalid', inject(function($compile) {
      form.cpf.$setViewValue('1234567890');
      scope.$digest();
      expect(scope.model.cpf).toBeUndefined();
      expect(form.cpf.$valid).toBe(false);
    }));

    it('should validate the cpf as valid', inject(function($compile) {
      var CPF = '37781194861';
      form.cpf.$setViewValue(CPF);
      scope.$digest();
      expect(scope.model.cpf).toEqual(CPF);
      expect(form.cpf.$valid).toBe(true);
    }));
  });

}).call(this);
