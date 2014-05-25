var cryptoModule = angular.module('angularjs-crypto', []);
cryptoModule//.factory('cryptoHttpInterceptor', ['cfCryptoHttpInterceptor', function ($q, $rootScope, cfCryptoHttpInterceptor) {
    .config(['$httpProvider', function ($httpProvider) {
        var interceptor = ['$q', 'cfCryptoHttpInterceptor', function ($q, cfCryptoHttpInterceptor) {
            return {
                $get: function() {return 'adsdas'},
                request: function (request) {
                    var shouldCrypt = (request.crypt || {});
                    if (request.headers['Content-Type'] === "application/json;charset=utf-8" && shouldCrypt == true) {
                        var data = request.data;
                        console.log("intercept request " + angular.toJson(data));
                        if (!data)
                            return $q.reject(request);
                        crypt(data, cfCryptoHttpInterceptor.pattern, cfCryptoHttpInterceptor.encodeFunc, cfCryptoHttpInterceptor.base64Key)
                    } else if (( typeof( request.params ) != "undefined") ){
			crypt(request.params, cfCryptoHttpInterceptor.pattern, cfCryptoHttpInterceptor.encodeFunc, cfCryptoHttpInterceptor.base64Key)
		    }
                    return request;
                },
                response: function (response) {
                    var shouldCrypt = (response.config || {}).crypt;
                    if (response.headers()['content-type'] === "application/json;charset=utf-8" && shouldCrypt == true) {
                        var data = response.data;
                        console.log("intercept response " + angular.toJson(data));
                        if (!data)
                            return $q.reject(response);
                        crypt(data, cfCryptoHttpInterceptor.pattern, cfCryptoHttpInterceptor.decodeFunc, cfCryptoHttpInterceptor.base64Key)
                    }
                    return response;
                }
            };
        }]
        $httpProvider.interceptors.push(interceptor);
}]);

cryptoModule.provider('cfCryptoHttpInterceptor', function () {
    this.base64Key = "";
    this.pattern = "_enc";
    this.encodeFunc = encode;
    this.decodeFunc = decode;

    this.$get = function () {
        return {
            base64Key: this.base64Key,
            pattern: this.pattern,
            encodeFunc: this.encodeFunc,
            decodeFunc: this.decodeFunc
        };
    };
});
//TODO problem with global namespace maybe
function encode(plainValue, base64Key) {
    //TODO make key configurable
    //var base64Key = rootScope.baseKey;//"16rdKQfqN3L4TY7YktgxBw==";
    //console.log( "base64Key = " + base64Key );

    var key = CryptoJS.enc.Base64.parse(base64Key);
    // this is the decrypted data as a sequence of bytes
    var encryprtedData = CryptoJS.AES.encrypt(plainValue, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    //var encryprtedValue = encryprtedData.toString( CryptoJS.enc.Base64);
    return encryprtedData.toString();
}

function decode(encryptedValue, base64Key) {
    //TODO make key configurable
    //var base64Key = rootScope.baseKey;//"16rdKQfqN3L4TY7YktgxBw==";
    //console.log( "base64Key = " + base64Key );

    var key = CryptoJS.enc.Base64.parse(base64Key);
    // this is the decrypted data as a sequence of bytes
    var decryptedData = CryptoJS.AES.decrypt(encryptedValue, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return  decryptedData.toString(CryptoJS.enc.Utf8);
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


String.prototype.endsWith = function (str) {
    var lastIndex = this.lastIndexOf(str);
    return (lastIndex != -1) && (lastIndex + str.length == this.length);
};
