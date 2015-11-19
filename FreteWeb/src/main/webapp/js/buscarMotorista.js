'use strict';

function BuscaMotoristaController($scope, MotoristaModel) {
    
    $scope.buscar = function () {
        MotoristaModel.query().then(function (data) {
            $scope.lista = data;
            $scope.msg = 'Busca';
        }, function (error) {
            console.log('error', error);
            alert(error.data);
        });
        
    }
    
    $scope.setMsg = function(){
        $scope.msg = 'Busca';
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