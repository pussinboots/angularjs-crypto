'use strict';

/* App Module */
var myModule = angular.module('angularjs-crypto', ['ngCookies', 'services'])

myModule.config(function ($routeProvider) {
    $routeProvider.when('/profile', { templateUrl: 'partials/epost/profile.html', controller: ConfigCtrl })
        .otherwise({ redirectTo: '/profile' });
})
myModule.config(['$httpProvider', function ($httpProvider) {
    //$locationProvider.html5Mode(true)
    $httpProvider.interceptors.push('httpInterceptor');
}])

myModule.factory('httpInterceptor', function ($q, $cookieStore, $rootScope, $interpolate) {
    return {
        request: function (config) {
            /*var exp = $interpolate(config.url);
            config.url  = exp({config: $rootScope.getPlattFormConfig()})*/
            return config;
        }
    };
});
