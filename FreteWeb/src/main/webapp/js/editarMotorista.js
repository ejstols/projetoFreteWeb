'use strict';

function EditarMotoristaController($scope, MotoristaModel,$rootScope,$location) {
    
    $scope.limpar = function () {
        $scope.motorista = {};
        $rootScope.motorista = {};
    };    
        
    $scope.gravar = function () {
            $scope.motorista = $rootScope.motoristaEditar;
            
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
            $location.path("/");
            //$rootScope.motorista = {}
    };
}
    
function EditarMotoristaRoute($stateProvider) {
    $stateProvider.state('EditarMotorista', {
        url: '/editarmotorista',
        templateUrl: 'views/editarMotorista.html',
        controller: 'EditarMotoristaController'
    });
}
angular.module('freteWeb')
        .config(EditarMotoristaRoute)
        .controller('EditarMotoristaController', EditarMotoristaController);
