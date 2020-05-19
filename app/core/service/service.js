'use strict';

angular.module('myApp.service', [])
.factory('dummyFactory', ['$http', '$q', function($http, $q) {
  return {
    getData: function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/soggetti'
        })
        .then(function success(data) {
            deferred.resolve(data);
        }, function error(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }
  }
}]);
