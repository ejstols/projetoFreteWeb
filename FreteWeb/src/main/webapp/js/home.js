'use strict';

function HomeController($scope) {
    $scope.mensagem = 'Teste';
}
function HomeRoute($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    });
}
angular.module('freteWeb')
        .config(HomeRoute)
        .controller('HomeController', HomeController);

