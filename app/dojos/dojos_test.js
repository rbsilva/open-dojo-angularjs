'use strict';

describe('ciandtDojos.dojos module', function() {
    var DojosCtrl, fixtures, httpBackend, scope;

    beforeEach(module('ciandtDojos.dojos'));
    beforeEach(module('ciandtDojos.development'));
    beforeEach(module('ngResource'));

    DojosCtrl = {};
    fixtures = {};
    scope = {};
    httpBackend = {};

    beforeEach(inject(function($controller, $rootScope, $httpBackend, Fixtures) {
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
      DojosCtrl = $controller('DojosCtrl', {
        $scope: scope
      });
      fixtures = Fixtures.getFixture('dojos');
    }));

  describe('dojos controller', function(){
    it('should add a dojo to scope dojos', function($controller) {
      expect(DojosCtrl).toBeDefined();

      fixtures.create({'name':'test', 'description' : 'test'});

      httpBackend.expectGET('/api/dojos').respond(fixtures.list());
      httpBackend.flush();

      expect(scope.dojos[0].name).toBe('test');
      expect(scope.dojos[0].description).toBe('test');
    });

  });
});
