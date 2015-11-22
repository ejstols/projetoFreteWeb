'use strict';

function MotoristaController($scope, MotoristaModel,$rootScope, $location) {
            
    $scope.limpar = function () {        
        $rootScope.motorista = {};
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
           
            $location.path("/");                  
    };
    
    $scope.limpar();
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
