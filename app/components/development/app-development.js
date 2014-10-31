(function() {
  'use strict';
  angular.module('ciandtDojos.development', ['ngMockE2E']).run([
    '$httpBackend', 'Fixtures', function($httpBackend, Fixtures) {

      var paramId = function(url) {
        var id;
        id = url.split('/');
        return id[id.length-1];
      };

      var mock = function(collectionName) {
        var fixture = Fixtures.getFixture(collectionName);

        var hostPrefix = '^\\/api\\/';
        var endLine = '$';
        var idEndLine = '\\/\\d*$';

        var resourcesRegexUrl = new RegExp(hostPrefix + collectionName + endLine);
        var resourcesRegexUrlWithPage = new RegExp(hostPrefix + collectionName + '\\?page=\\d*' + endLine);
        var resourceRegexUrl = new RegExp(hostPrefix + collectionName + idEndLine);

        $httpBackend.whenGET(resourcesRegexUrl).respond(function(){
          return [200, fixture.list(), {}];
        });

        $httpBackend.whenGET(resourcesRegexUrlWithPage).respond(function(){
          return [200, fixture.list(), {}];
        });

        $httpBackend.whenGET(resourceRegexUrl).respond(function(method, url){
          return [200, fixture.get(paramId(url)), {}];
        });

        $httpBackend.whenDELETE(resourceRegexUrl).respond(function(method, url){
          return [200, fixture.delete(paramId(url)), {}];
        });

        $httpBackend.whenPOST(resourcesRegexUrl).respond(function(method, url, data) {
          return [200, fixture.create(angular.fromJson(data)), {}];
        });

        $httpBackend.whenPUT(resourceRegexUrl).respond(function(method, url, data) {
          return [200, fixture.update(paramId(url), angular.fromJson(data)), {}];
        });

      };

      mock('dojos');

      mock('senseis');

      $httpBackend.whenGET('/api/sessions').respond({});

      $httpBackend.whenGET(/^components\//).passThrough();
      $httpBackend.whenGET(/^.*\.json/).passThrough();
      $httpBackend.whenGET(/^.*\.html/).passThrough();
    }
  ]);
}).call(this);
