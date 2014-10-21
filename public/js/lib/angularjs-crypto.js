'use strict';

function missingCryptoJs(shouldCrypt, cfg, q) {
    if (!shouldCrypt) return false;
	if (cfg.key().length <= 0) return false;
    if (typeof(CryptoJS) === 'undefined') return true;
}
var cryptoModule = angular.module('angularjs-crypto', []);
cryptoModule.config(['$httpProvider', function ($httpProvider) {
    var interceptor = ['$q', 'cfCryptoHttpInterceptor', function ($q, cfg) {
        return {
            request: function (request) {
                var shouldCrypt = (request.crypt || false);
                if (missingCryptoJs(shouldCrypt, cfg, $q)) {
                    return q.reject('CryptoJS missing');
                }
                var data = request.data;
                if (shouldCrypt === true) {
                    if (checkHeaderJson(request.headers['Content-Type'])) {
                        console.log("intercept request " + angular.toJson(data));
                        if (!data) return $q.reject(request);
                        encrypt(data, cfg);
                    } else if (( typeof( request.params ) != "undefined")) {
                        encrypt(request.params, cfg);
                    }
                } else if ((request.fullcryptbody || false)) {
                    if (!data) return $q.reject(request);
                    request.data = cfg.plugin.encode(JSON.stringify(data), cfg.key())
                    console.log("encode full body " + request.data);
            	} else if (( typeof( request.params ) != "undefined")) {
                        console.log("encode full query " + request.params);
                        request.params = {query:cfg.plugin.encode(JSON.stringify(request.params),cfg.key())}
                        console.log("encode full query " + request.params);
                }
                return request;
            },
            response: function (response) {
                var shouldCrypt = (response.config || false).crypt;
                if (missingCryptoJs(shouldCrypt, cfg, $q)) {
                    return q.reject('CryptoJS missing');
                }
                if (shouldCrypt == true) {
                    if (checkHeaderJson(response.headers()['content-type'])) {
                        var data = response.data;
                        console.log("intercept response " + angular.toJson(data));
                        if (!data)
                            return $q.reject(response);
                        decrypt(data, cfg);
                    }
                }
                if (cfg.responseWithQueryParams && 
                    (typeof( response.data ) != "undefined") && 
                    response.data != null) {
                    response.data.$queryParams = response.config.params;
                }
                return response;
            }
        };
    }]
    $httpProvider.interceptors.push(interceptor);
}]);

cryptoModule.provider('cfCryptoHttpInterceptor', function () {
    this.base64Key;
    this.base64KeyFunc = function(){return ""};
    this.pattern = "_enc";
    this.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.AES)
    this.responseWithQueryParams = true;

    this.$get = function () {
        return {
            base64Key: this.base64Key,
            base64KeyFunc: this.base64KeyFunc,
            key: function() {
                return this.base64Key || this.base64KeyFunc()
            },
            pattern: this.pattern,
            plugin: this.plugin,
            responseWithQueryParams: this.responseWithQueryParams
        };
    };
});

function decrypt(data, cfg) {
	crypt(data, cfg.pattern, cfg.plugin.decode, cfg.key())   
}
function encrypt(data, cfg) {
	crypt(data, cfg.pattern, cfg.plugin.encode, cfg.key())   
}
function crypt(events, pattern, callback, base64Key) {
    var keys = Object.keys(events);
    for (var i in keys) {
        if (keys[i].endsWith(pattern))
            events[keys[i]] = callback(events[keys[i]], base64Key);
        if (typeof events[keys[i]] === 'object')
            crypt(events[keys[i]], pattern, callback, base64Key)
    }
}

function checkHeaderJson(header) {
    if(!header) { return false; }
    return(header.beginsWith("application/json"));
}

String.prototype.beginsWith = function (string) {
    return(this.indexOf(string) === 0);
};

String.prototype.endsWith = function (str) {
    var lastIndex = this.lastIndexOf(str);
    return (lastIndex != -1) && (lastIndex + str.length == this.length);
};
