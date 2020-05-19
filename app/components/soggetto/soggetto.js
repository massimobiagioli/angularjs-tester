'use strict';

angular.module('myApp.soggetto-component', [])
.component('soggetto', {
    templateUrl: 'components/soggetto/soggetto.html',
    controller: ['$scope', 'soggettoFactory', SoggettoController]
});

function SoggettoController($scope, soggettoFactory) {
    soggettoFactory.getData()
        .then(function(response) {
            $scope.soggetti = response.data;
        }, function(err) {
            console.error(err);
        });
}