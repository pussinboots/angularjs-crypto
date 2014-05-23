angularjs-crypto
==================

AngularJS Module that integrate cryptography functionality offers from the [crypto-js](https://code.google.com/p/crypto-js/) project for all http requests and response.

Continous Integration
------------
* [travis](https://travis-ci.org/pussinboots/angularjs-crypto)

Dependencies
------------
- [AngularJS 1.1.4 + ](http://angularjs.org/) (tested with 1.1.4)
- [Crypto-js 3.1.2 AES modul](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js)
- [Crypto-js 3.1.2 ecb mode](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb.js)

##Usage

* download [js file](https://github.com/pussinboots/angularjs-crypto/blob/master/public/js/lib/angularjs-crypto.js)
* added javascript file to your app html file
```html
<script type='text/javascript' src="angularjs-crypto.js"></script>
```
* configure the http request for automatic decryption/encryption detection by setting proprty crypt:true

Example Service Definition

```js
'use strict';

angular.module('services', ['ngResource'], function ($provide) {
    $provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
            query: {method: 'GET', isArray: false, crypt: true},
            queryNoCrypt: {method: 'GET'},
            save: {method: 'POST', params: {}, crypt: true},
            saveNoCrypt: {method: 'POST', params: {}}
        });
    });
});
```

* configure base64Key aes key for decryption/encryption

```js
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
    cfCryptoHttpInterceptor.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
}])
```

That's done now all json fields that end with the pattern (default: '_enc') will be encoded by request and decoded in responsescfv

Issues
-------------
- Report at the github [issue tracker](https://github.com/pussinboots/angularjs-crypto/issues)

Todos
-------------
* support for http ajax calls missing only ng resource calls are supported
* aggressive console logging is active for development maybe make it configurable
* configuration the cipher algorithm to use (aes hard coded at the momment)
* configuration of the keys to used for the configured cipher (at the moment hard coded key)
* implements missing ciphers offered by the [crypto-js](https://code.google.com/p/crypto-js/) project
 * DES
 * riple DES
 * Rabbit
 * RC4, RC4Drop

Features
-------------
* configuration of the aes secret key to use for encryption/decryption
* configuration of the field name pattern which determinate which fields will be encrypted/decrypted
* aes encryption/decryption of http json requests and responses
  * only with mode [ECB](http://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_codebook_.28ECB.29)
  * only with padding [Pkcs7](http://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS7)
* automatic detection of encryption/decryption for json fields based on the naming rule all fields end with _enc as it comes 
  * reponse then decrypt 
  * request then dencrypt
* only requests / responses of Content-Type: 'application/json;charset=utf-8' will be processed other types will skip crypt processing include auto detection

Configuration
-------------

#### Set the base64Key for aes encryption/decryption

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
}])
```

#### Set the field name pattern

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.pattern = "_enc"; //that is the default value
}])
```

Demo
-------------

live
------

The http calls are mocked with angular-mock.

[Http Get Example](http://angularjs-crypto.herokuapp.com/assets/products-e2e.html#/get)

[Http Post Example](http://angularjs-crypto.herokuapp.com/assets/products-e2e.html#/post)

local
------

Dependencies
* play 2.2.3
* nodejs 0.10.28
* (karma-test runner)[http://karma-runner.github.io/0.12/intro/installation.html]

Start the project local

  play run

Then go to http://localhost:9000/assets/products-e2e.html

Or run the karma test with 

  npm test

Description
-------------

This angularjs module is part of the [bankapp](https://github.com/pussinboots/bankapp).
The idea is to store encrypted data in a backend and decode it on the client side so that the backend 
doesn't know what kind of data it stores only the angularjs client and the storage process know the 
plain data.

If you have question or want to take of the development than write me a mail at pussinboots666@googlemail.com.

It is a very young project but with the support of wide open source tools like karma and travis it
will flow soon i hope.

License
--------------

angularjs-crypto is released under the [MIT License](http://opensource.org/licenses/MIT).
