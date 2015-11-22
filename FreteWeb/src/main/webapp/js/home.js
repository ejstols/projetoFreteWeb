'use strict';

function HomeController($scope, MotoristaModel,$rootScope,$location) {
    //$scope.mensagem = 'Teste';
    $scope.buscar = function () {
        if ($scope.nomeCidade == '' || $scope.nomeCidade == null)
        { 
            MotoristaModel.query().then(function (data) {
                 $scope.lista = data;
             }, function (error) {
                 console.log('error', error);
                 alert(error.data);
             });
        }else {
                MotoristaModel.query({cidade:"'"+$scope.nomeCidade+"'"}).then(function (data) {
                 $scope.lista = data;
             }, function (error) {
                 console.log('error', error);
                 alert(error.data);
             });    
         }    
    };
    
    $scope.editar = function (MotoristaModel) {
        
        $rootScope.motoristaEditar = angular.copy(MotoristaModel);
        $rootScope.editando = true;
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

