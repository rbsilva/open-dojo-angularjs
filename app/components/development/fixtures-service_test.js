/* global describe, beforeEach, inject, it, expect */
(function() {
  'use strict';
  describe('Service: Fixtures', function() {
    var Fixtures;

    beforeEach(module('ciandtDojos.development'));

    Fixtures = {};

    beforeEach(inject(function(_Fixtures_) {
      Fixtures = _Fixtures_;
    }));

    it('should do something', function() {
      expect(!!Fixtures).toBe(true);
    });
  });

}).call(this);
