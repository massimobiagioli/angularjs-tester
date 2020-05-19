'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'dummyFactory', function($scope, dummyFactory) {
  dummyFactory.getData()
      .then(function(response) {
        $scope.soggetti = response.data;
      }, function(err) {
        console.error(err);
      })
}]);