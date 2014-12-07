'use strict';

/* Services */

angular.module('services', ['ngResource'], function ($provide) {

    $provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
            query: {url:'/data/get/aes', method: 'GET', isArray: false, crypt: true},
            queryFullCrypt: {method: 'GET', isArray: false, fullcryptquery:true},
            queryNoCrypt: {method: 'GET'},
            save: {url:'/data', method: 'POST', crypt: true},
            saveNoCrypt: {url:'/data', method: 'POST'},
            saveFullCrypt: {url:'/data', method: 'POST',  isArray: true, fullcryptbody:true,
                transformResponse: function (data, headers) {
                    return { body: data };
                }
            }
        });
    });

    $provide.factory('Empty', function ($resource) {
        return $resource('/assets/empty', {}, {
            post: {method: 'POST', crypt: true}
        });
    });
});
