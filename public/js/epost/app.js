'use strict';

/* App Module */
var myModule = angular.module('angularjs-crypto', ['ngCookies', 'services'])

myModule.config(function ($routeProvider) {
    $routeProvider.when('/profile', { templateUrl: 'partials/epost/profile.html', controller: ConfigCtrl })
        .otherwise({ redirectTo: '/profile' });
})
myModule.config(['$httpProvider', function ($httpProvider) {
    //$locationProvider.html5Mode(true)
    $httpProvider.interceptors.push('cryptoHttpInterceptor');
}])

myModule.factory('cryptoHttpInterceptor', function ($q, $cookieStore, $rootScope, $interpolate) {
    return {
        request: function (config) {
            /*var exp = $interpolate(config.url);
            config.url  = exp({config: $rootScope.getPlattFormConfig()})*/
            return config;
        },
	response: function (response) {
            // do something on success
            if(response.headers()['content-type'] === "application/json")
	    {
                // Validate response if not ok reject
                var data = response.data//examineJSONResponse(response); // assumes this function is available
		console.log("intercept response " + data)
                if(!data)
                    return $q.reject(response);
		decodes(data)
            }
            return response;
        },
        responseError: function (response) {
            // do something on error
            return $q.reject(response);
        }
    };
});

function decode(encryptedValue) {
	var base64Key = "16rdKQfqN3L4TY7YktgxBw==";
	console.log( "base64Key = " + base64Key );

	// this is the actual key as a sequence of bytes
	var key = CryptoJS.enc.Base64.parse(base64Key);
	// this is the decrypted data as a sequence of bytes
	var decryptedData = CryptoJS.AES.decrypt( encryptedValue, key, {
	    mode: CryptoJS.mode.ECB,
	    padding: CryptoJS.pad.Pkcs7
	} );


	var decryptedValue = decryptedData.toString( CryptoJS.enc.Utf8 );
	return decryptedValue
}

function decodes(events)
  {
    var keys = Object.keys(events);
    for (var i in keys) {
	    if (keys[i].endsWith('_enc')) {
	      events[keys[i]] = decode(events[keys[i]])  
	    }
	    if (typeof events[keys[i]] === 'object')
		decodes(events[keys[i]])
	    } 	    
  }
