'use strict';

function MotoristaController($scope, MotoristaModel) {
    
    $scope.limpar = function () {
        $scope.motorista = {};
    };    
        
    $scope.gravar = function () {
           
            if ($scope.motorista.id) {
                $scope.motorista.update().then(function () {
                    $scope.limpar();
                }, function (error) {
                    console.log('error', error);
                    alert(error.data);
                });
            } else {
                new MotoristaModel($scope.motorista).create()
                        .then(function () {
                            $scope.limpar();                   
                        }, function (error) {
                            console.log('error', error);
                            alert(error.data);
                        });
            }
            
            $scope.limpar();
    };
}
    
function MotoristaRoute($stateProvider) {
    $stateProvider.state('Motorista', {
        url: '/Motorista',
        templateUrl: 'views/adicionarMotorista.html',
        controller: 'MotoristaController'
    });
}
angular.module('freteWeb')
        .config(MotoristaRoute)
        .controller('MotoristaController', MotoristaController);
