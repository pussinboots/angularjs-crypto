'use strict';

/* Services */

angular.module('services', ['ngResource'], function ($provide) {

  $provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
            query: {method: 'GET', isArray: false},
	    queryNoCrypt: {method: 'GET', crypt: false},
	    save: {method: 'POST', params:{}}
        });
    });
});
