'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto', 'ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/get', { templateUrl: 'partials/get.html', controller: DecodeGetController})
    .when('/query', { templateUrl: 'partials/query.html', controller: EncodeQueryGetController})
    .when('/fullquery', { templateUrl: 'partials/fullquery.html', controller: EncodeFullQueryGetController})
    .when('/fullbody', { templateUrl: 'partials/fullbody.html', controller: EncodeBodyPostController})
    .when('/empty', { templateUrl: 'partials/empty.html', controller: EmptyController})
    .when('/post', { templateUrl: 'partials/post.html', controller: EncodePostController})
    .when('/key', { templateUrl: 'partials/key.html'})
    .otherwise({ redirectTo: '/get' });
});

demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    $rootScope.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
    cfCryptoHttpInterceptor.base64Key = $rootScope.base64Key;
    cfCryptoHttpInterceptor.pattern = "_enc"; //default value but for a better understanding it is also defined here
    cfCryptoHttpInterceptor.plugin = new CryptoJSDES(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7); //activate des plugin
})
