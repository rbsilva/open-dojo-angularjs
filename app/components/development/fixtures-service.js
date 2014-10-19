(function() {
  'use strict';
  angular.module('ciandtDojos.development').service('Fixtures', function() {
    return {
      getFixture: function(collectionName) {

        if (!sessionStorage[collectionName]) {
          sessionStorage[collectionName] = angular.toJson({
            'data': [],
            'pagination': {
              'page': '1',
              'pages': '1',
              'total': '0'
            }
          });
        }

        var find = function(id) {
          var collection = angular.fromJson(sessionStorage[collectionName]);
          var entityFound;
          angular.forEach(collection.data, function(entity, index){
            if (entity.id === id) {
              entityFound = {'index': index, 'entity': entity};
            }
          });

          return entityFound;
        };

        return {
          get: function(id) {
            return angular.toJson(find(id).entity);
          },
          list: function() {
            return sessionStorage[collectionName];
          },
          create: function(data) {
            var lastId = sessionStorage[collectionName + 'LastId'];

            if (!lastId) {
              lastId = 0;
            }

            var newId = ++lastId;
            data.id = newId;
            sessionStorage[collectionName + 'LastId'] = newId;

            var collection = angular.fromJson(sessionStorage[collectionName]);
            collection.data.push(data);
            collection.pagination.total = parseInt(collection.pagination.total) + 1;
            sessionStorage[collectionName] = angular.toJson(collection);
            return angular.toJson(data);
          },
          update: function(id, data) {
            var collection = angular.fromJson(sessionStorage[collectionName]);
            var entityWrapper = find(id);
            collection.data[entityWrapper.index] = data;
            sessionStorage[collectionName] = angular.toJson(collection);
            return sessionStorage[collectionName];
          },
          delete: function() {
            return sessionStorage[collectionName];
          }
        };
      }
    };
  });

}).call(this);
