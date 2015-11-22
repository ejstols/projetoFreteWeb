'use strict';

function HomeController($scope, MotoristaModel,$rootScope,$location) {
    //$scope.mensagem = 'Teste';
    $scope.buscar = function () {
        if ($scope.nomeCidade == '' || $scope.nomeCidade == null)
        { 
            MotoristaModel.query().then(function (data) {
                 $scope.lista = data;
                 $scope.msg = 'Busca';
             }, function (error) {
                 console.log('error', error);
                 alert(error.data);
             });
        }else {
                MotoristaModel.query({cidade:"'"+$scope.nomeCidade+"'"}).then(function (data) {
                 $scope.lista = data;
                 $scope.msg = 'Busca';
             }, function (error) {
                 console.log('error', error);
                 alert(error.data);
             });    
         }    
    };
    
    $scope.editar = function (MotoristaModel) {
        
        $rootScope.motorista = angular.copy(MotoristaModel);
        $location.path("/editarmotorista");
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

