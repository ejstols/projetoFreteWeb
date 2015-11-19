'use strict';

function HomeController($scope, MotoristaModel) {
    //$scope.mensagem = 'Teste';
     $scope.buscarMotorista = function () {
        MotoristaModel.query().then(function (data) {
            $scope.lista = data;
            $scope.msg = 'busca';
        }, function (error) {
            console.log('error', error);
            alert(error.data);
        });
        
    }
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

