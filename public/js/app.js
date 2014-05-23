'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/get', { templateUrl: 'partials/get.html', controller: DecodeGetController })
        .when('/post', { templateUrl: 'partials/post.html', controller: EncodePostController })
        .otherwise({ redirectTo: '/get' });
});
/*demoApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('cryptoHttpInterceptor');
}]);*/
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
    cfCryptoHttpInterceptor.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
}])
