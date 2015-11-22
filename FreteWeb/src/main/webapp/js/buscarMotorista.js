'use strict';


function BuscaMotoristaController($scope, MotoristaModel, $rootScope, $location) {
    
    $scope.buscar = function () {
        if ($scope.cidade == '' || $scope.cidade == null)
        { 
            MotoristaModel.query().then(function (data) {
                 $scope.lista = data;
                 $scope.msg = 'Busca';
             }, function (error) {
                 console.log('error', error);
                 alert(error.data);
             });
        }else {
                MotoristaModel.query({cidade:"'"+$scope.cidade+"'"}).then(function (data) {
                 $scope.lista = data;
                 $scope.msg = 'Busca';
             }, function (error) {
                 console.log('error', error);
                 alert(error.data);
             });    
         }    
    }
    
    $scope.editar = function (MotoristaModel) {
        $rootScope.motorista = angular.copy(MotoristaModel);
        $location.path("/editarmotorista");
    };


    $scope.deletar = function (MotoristaModel) {
        MotoristaModel.remove().then(function () {
            $scope.buscar();
        }, function (error) {
            console.log('error', error);
            alert(error.data);
        });
    };    
    
}
    
function buscaMotoristaRoute($stateProvider) {
    $stateProvider.state('buscarMotorista', {
        url: '/eitarMotorista',
        templateUrl: 'views/buscarMotorista.html',
        controller: 'BuscaMotoristaController'
    });
}
angular.module('freteWeb')
        .config(buscaMotoristaRoute)
        .controller('BuscaMotoristaController', BuscaMotoristaController);