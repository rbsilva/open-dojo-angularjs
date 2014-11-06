'use strict';

describe('ciandtDojos.senseis module', function() {
    var SenseisCtrl, fixtures, httpBackend, scope;

    beforeEach(module('ciandtDojos.senseis'));
    beforeEach(module('ciandtDojos.development'));
    beforeEach(module('ngResource'));

    SenseisCtrl = {};
    fixtures = {};
    scope = {};
    httpBackend = {};

    beforeEach(inject(function($controller, $rootScope, $httpBackend, Fixtures) {
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
      SenseisCtrl = $controller('SenseisCtrl', {
        $scope: scope
      });
      fixtures = Fixtures.getFixture('senseis');
    }));

  describe('senseis controller', function(){
    it('should add a sensei to scope senseis', function($controller) {
      expect(SenseisCtrl).toBeDefined();

      fixtures.create({'name':'test', 'login' : 'test', 'knowledges': 'angular'});

      httpBackend.expectGET('/api/senseis').respond(fixtures.list());
      httpBackend.flush();

      expect(scope.senseis[0].name).toBe('test');
      expect(scope.senseis[0].login).toBe('test');
      expect(scope.senseis[0].knowledges).toBe('angular');

    });

  });
});
