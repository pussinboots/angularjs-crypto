'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['ngCookies', 'services', 'angularjs-crypto']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/get', { templateUrl: 'partials/get.html', controller: DecodeGetController })
        .when('/post', { templateUrl: 'partials/post.html', controller: EncodePostController })
        .otherwise({ redirectTo: '/get' });
});
demoApp.config(['$httpProvider', function ($httpProvider) {
    //$locationProvider.html5Mode(true)
    $httpProvider.interceptors.push('cryptoHttpInterceptor');
}]);
