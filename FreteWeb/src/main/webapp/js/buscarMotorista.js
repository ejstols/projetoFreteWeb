'use strict';

function BuscaMotoristaController($scope) {
    $scope.buscaMotorista = {};
   
    $scope.buscar = function () {
        $scope.nome;
    }
}
    
function buscaMotoristaRoute($stateProvider) {
    $stateProvider.state('buscarMotorista', {
        url: '/buscarMotorista',
        templateUrl: 'views/buscarMotorista.html',
        controller: 'BuscaMotoristaController'
    });
}
angular.module('freteWeb')
        .config(buscaMotoristaRoute)
        .controller('BuscaMotoristaController', BuscaMotoristaController);