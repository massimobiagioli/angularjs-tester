'use strict';

angular.module('myApp.service', [])
.factory('dummyFactory', ['$http', '$q', function($http, $q) {
  return {
    getData: function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08'
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
