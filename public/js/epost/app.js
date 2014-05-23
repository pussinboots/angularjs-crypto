'use strict';

/* App Module */
var myModule = angular.module('angularjs-crypto', ['ngCookies', 'services'])

myModule.config(function ($routeProvider) {
    $routeProvider
	.when('/get', { templateUrl: 'partials/epost/get.html', controller: DecodeGetController })
	.when('/post', { templateUrl: 'partials/epost/post.html', controller: EncodePostController })
        .otherwise({ redirectTo: '/get' });
})
myModule.config(['$httpProvider', function ($httpProvider) {
    //$locationProvider.html5Mode(true)
    $httpProvider.interceptors.push('cryptoHttpInterceptor');
}])

myModule.factory('cryptoHttpInterceptor', function ($q, $cookieStore, $rootScope, $interpolate) {
    return {
        request: function (request) {
	    var shouldCrypt = (request.crypt||{})
	    if(request.headers['Content-Type'] === "application/json;charset=utf-8" && shouldCrypt == true)
	    {
                var data = request.data
		console.log("intercept request " +  angular.toJson(data))
                if(!data)
                    return $q.reject(request)
		crypt(data, '_enc', encode)
            }
            return request;
        },
	response: function (response) {
	    var shouldCrypt = (response.config||{}).crypt
            if(response.headers()['content-type'] === "application/json;charset=utf-8" && shouldCrypt == true)
	    {
                var data = response.data
		console.log("intercept response " + angular.toJson(data))
                if(!data)
                    return $q.reject(response)
		crypt(data, '_enc', decode)
            }
            return response;
        },
        responseError: function (response) {
            // do something on error
            return $q.reject(response);
        }
    };
});

function encode(plainValue) {
	//TODO make key configurable
	var base64Key = "16rdKQfqN3L4TY7YktgxBw==";
	console.log( "base64Key = " + base64Key );

	var key = CryptoJS.enc.Base64.parse(base64Key);
	// this is the decrypted data as a sequence of bytes
	var encryprtedData = CryptoJS.AES.encrypt( plainValue, key, {
	    mode: CryptoJS.mode.ECB,
	    padding: CryptoJS.pad.Pkcs7
	} );

	//var encryprtedValue = encryprtedData.toString( CryptoJS.enc.Base64);
	return encryprtedData.toString();
}

function decode(encryptedValue) {
	//TODO make key configurable
	var base64Key = "16rdKQfqN3L4TY7YktgxBw==";
	//console.log( "base64Key = " + base64Key );

	var key = CryptoJS.enc.Base64.parse(base64Key);
	// this is the decrypted data as a sequence of bytes
	var decryptedData = CryptoJS.AES.decrypt( encryptedValue, key, {
	    mode: CryptoJS.mode.ECB,
	    padding: CryptoJS.pad.Pkcs7
	} );

	var decryptedValue = decryptedData.toString( CryptoJS.enc.Utf8 );
	return decryptedValue
}

function crypt(events, pattern, callback) {
	var keys = Object.keys(events);
	for (var i in keys) {
		if (keys[i].endsWith(pattern))
			events[keys[i]] = callback(events[keys[i]])  
		if (typeof events[keys[i]] === 'object')
			crypt(events[keys[i]], pattern, callback)
	} 	    
}
