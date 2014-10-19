'use strict';

angular.module('ciandtDojos.version', [
  'ciandtDojos.version.interpolate-filter',
  'ciandtDojos.version.version-directive'
])

.value('version', '0.1');
