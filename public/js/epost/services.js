'use strict';

/* Services */

angular.module('services', ['ngResource'], function ($provide) {

  $provide.factory('Config', function ($resource) {
        return $resource('/assets/config', {}, {
            query: {method: 'GET', isArray: true}
        });
    });
});
