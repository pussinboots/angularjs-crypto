'use strict';

/* Services */

angular.module('services', ['ngResource'], function ($provide) {

    $provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
            query: {url:'/data/get/aes', method: 'GET', isArray: false, crypt: true},
            queryFullCrypt: {method: 'GET', isArray: false, fullcryptquery:true},
            queryNoCrypt: {method: 'GET'},
            save: {method: 'POST', crypt: true},
            saveNoCrypt: {method: 'POST'},
            saveFullCrypt: {method: 'POST',  fullcryptbody:true}
        });
    });

    $provide.factory('Empty', function ($resource) {
        return $resource('/assets/empty', {}, {
            post: {method: 'POST', crypt: true}
        });
    });
});
