'use strict';

describe('ciandtDojos.version module', function() {
  beforeEach(module('ciandtDojos.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
