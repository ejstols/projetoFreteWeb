'use strict';

angular.module('freteWeb')
    .factory('MotoristaModel', 
        function(railsResourceFactory, API_URL) {
        var Motorista = railsResourceFactory({
            url: API_URL + 'motorista'
        });

        return Motorista;
    });