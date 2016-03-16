'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto', 'ngRoute', 'hljs']);

demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/get', { templateUrl: 'partials/get.html', controller: DecodeGetController})
    .when('/query', { templateUrl: 'partials/query.html', controller: EncodeQueryGetController})
    .when('/fullquery', { templateUrl: 'partials/fullquery.html', controller: EncodeFullQueryGetController})
    .when('/fullbody', { templateUrl: 'partials/fullbody.html', controller: EncodeBodyPostController})
    .when('/decryptbody', { templateUrl: 'partials/decryptbody.html', controller: DecodeBodyPostController})
    .when('/customjson', { templateUrl: 'partials/customjson.html', controller: CustomJsonEncodeController})
    .when('/fulljson', { templateUrl: 'partials/fulljson.html', controller: FullJsonEncodeController})
    .when('/empty', { templateUrl: 'partials/empty.html', controller: EmptyController})
    .when('/post', { templateUrl: 'partials/post.html', controller: EncodePostController})
    .when('/key', { templateUrl: 'partials/key.html'})
    .otherwise({ redirectTo: '/get' });
});
/*demoApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('cryptoHttpInterceptor');
}]);*/
demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    $rootScope.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
    cfCryptoHttpInterceptor.base64Key = $rootScope.base64Key;
    cfCryptoHttpInterceptor.pattern = "_enc"; //default value but for a better understanding it is also defined here
})
