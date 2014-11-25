[angularjs-crypto](http://ngmodules.org/modules/angularjs-crypto)  
==================
[![Build Status](https://travis-ci.org/pussinboots/angularjs-crypto.svg?branch=master)](https://travis-ci.org/pussinboots/angularjs-crypto)
[![Coverage Status](https://img.shields.io/coveralls/pussinboots/angularjs-crypto.svg)](https://coveralls.io/r/pussinboots/angularjs-crypto?branch=master)
[![Dependencies](https://david-dm.org/pussinboots/angularjs-crypto.png)](https://david-dm.org/pussinboots/angularjs-crypto)
[![Heroku](http://heroku-badge.heroku.com/?app=angularjs-crypto)](https://angularjs-crypto.herokuapp.com/)
[![Unit Tests](https://unitcover.herokuapp.com/api/pussinboots/angularjs-crypto/badge)](https://unitcover.herokuapp.com/#/builds/pussinboots/angularjs-crypto/builds)
[![Codio](https://d2g7ua7d94r3fl.cloudfront.net/assets/images/8aa866ae.codio_logo.png)](https://codio.com/pussinboots/angularjs-crypto)

[![Gitter chat](https://badges.gitter.im/pussinboots/angularjs-crypto.png)](https://gitter.im/pussinboots/angularjs-crypto)

[![Test Results](http://unitcover.herokuapp.com/api/pussinboots/angularjs-crypto/testsuites/badge)](http://unitcover.herokuapp.com/#/builds/pussinboots/angularjs-crypto/builds)

AngularJS Module that integrate cryptography functionality offers from the [crypto-js](https://code.google.com/p/crypto-js/) project for all http requests and response.

##Code
[anuglarjs-crypto.js](https://github.com/pussinboots/angularjs-crypto/blob/master/public/js/lib/angularjs-crypto.js)

Dependencies
------------
- [AngularJS 1.1.4 + ](http://angularjs.org/) (tested with 1.1.4 and 1.2.16)
- [Crypto-js 3.1.2 AES modul](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js)
- [Crypto-js 3.1.2 ecb mode](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb.js)

##Bower Versions 

- 0.0.3 : support all ciphers that are supported by CryptoJS

##Development

To simplify the checkout and the setup of a full development environment with all needed dependencies the  [vagrant-git](https://github.com/pussinboots/vagrant-git) project is used. 

But before we can use the [vagrant-git](https://github.com/pussinboots/vagrant-git) project first install all [reequieremnts](https://github.com/pussinboots/vagrant-git#requirements). It is implemented as nodejs application. Than you can install the [vagrant-git](https://github.com/pussinboots/vagrant-git) project follow this [instruction](https://github.com/pussinboots/vagrant-git#install). Usage turorial can be found [here](https://github.com/pussinboots/vagrant-git#usage).

To setup a development vagrant box for this project execute the command below.
```bash
vgit --repo pussinboots/angularjs-crypto 
```
It will checkpout the vagrant runtime repo and this project itslef.

On Windows without ssh client
```bash
vgit --g https --repo pussinboots/angularjs-crypto 
```
That use https instead of ssh protocol. The ssh protocol is the default used protocol. So the first execution will take a while to download the vagrant [base box](https://vagrantcloud.com/pussinboots/boxes/ubuntu-truly) defined in the Vagrantfile. Than it install the defined dependencies see below. When the login screen appear login with vagrant/vagrant than you have a ready to use development environment for that project up and running. The project will be checkout to the vagrant shared folder so that the Host and Guest operating systems can access the git clone.

The vagrant-git configuration is defined in the [.vagrant.yml](.vagrant.yml) file. The configuration will be explained on the next line the [general explanetion](https://github.com/pussinboots/vagrant-git#project-configuration).
```yml
repo: 
    - pussinboots/vagrant-devel
folder: /vagrant/project/angularjs-crypto
deps: 
    - sublime3
    - nodejs
```

repo: defined the following github repo like https://github.com/pussinboots/vagrant-devel as the vagrant runtime repo where the [Vagrant configuration](https://github.com/pussinboots/vagrant-devel/blob/master/Vagrantfile) is placed that will be used for that project. 

folder: is only information for the Developer that will pe display before vagrant startup so that he or sher knows where the angularjs-crypto project root folder can be found.

deps: defined the dependencies to be installed during vagrant provision.



##Install (bower)

* bower install angularjs-crypto
* js file is under the [bower_components/]angularjs-crypto/public/js/lib/angularjs-crypto.js
```html
<script type='text/javascript' src="[bower_components/]angularjs-crypto/public/js/lib/CryptoJSCipher.js"></script>
<script type='text/javascript' src="[bower_components/]angularjs-crypto/public/js/lib/angularjs-crypto.js"></script>
<script type='text/javascript' src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js"></script>
<script type='text/javascript' src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb.js"></script>
```

##Install (manual)

* download [js file](https://github.com/pussinboots/angularjs-crypto/blob/master/public/js/lib/angularjs-crypto.js)
* download [js plugin file](https://github.com/pussinboots/angularjs-crypto/blob/master/public/js/lib/plugins/CryptoJSCipher.js)
* added javascript file to your app html file
```html
<script type='text/javascript' src="CryptoJSCipher.js"></script>
<script type='text/javascript' src="angularjs-crypto.js"></script>
<script type='text/javascript' src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js"></script>
<script type='text/javascript' src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb.js"></script>
```

##Usage

* add modul dependency ('angularjs-crypto') to angular
```js
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto']);
```

Example Service Definition

* configure the http request for automatic decryption/encryption detection by setting property crypt:true

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

That's done now all json fields that end with the pattern (default: '_enc') will be encoded in requests and decoded in responses.

Issues
-------------
- Report at the github [issue tracker](https://github.com/pussinboots/angularjs-crypto/issues)

Todos
-------------
* configurable error handling strict or elegant mode 
* support for http ajax calls missing only ng resource calls are supported (under investigation)
* aggressive console logging is active for development maybe make it configurable

Features
-------------
* implements ciphers offered by the [crypto-js](https://code.google.com/p/crypto-js/) project
 * AES
 * DES
 * Triple DES
 * Rabbit
 * RC4, RC4Drop
* configuration the cipher algorithm to use (aes is configured as default) (done [see](https://github.com/pussinboots/angularjs-crypto/blob/master/README.md#set-own-plugin-implementation-for-encoding-and-decoding)))
* configuration a function that return the aes secret key to use for encryption/decryption
* encoding of complete query and body for requests
* encoding of query parameter fields that end with the pattern
* configuration of encode/decode function so that you can plugin in your own implementation
* configuration of the aes secret key to use for encryption/decryption
* configuration of the field name pattern which determinate which fields will be encrypted/decrypted
* aes encryption/decryption of http json requests and responses
  * only with mode [ECB](http://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_codebook_.28ECB.29)
  * only with padding [Pkcs7](http://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS7)
* automatic detection of encryption/decryption for json fields based on the naming rule all fields end with pattern (default: :enc) as it comes 
  * reponse then decrypt 
  * request then encrypt
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

#### Set own plugin implementation for encoding and decoding

This make it now possible to simple add other CryptoJs cipher implementations like DES or even other crypto libraries as well. If i find the time than i will add at least the supported cipher from CryptoJs. An example implementation that use Crypto AES can be found [here](https://github.com/pussinboots/angularjs-crypto/blob/master/public/js/lib/CryptoJSPlugin.js)
```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
 cfCryptoHttpInterceptor.plugin = {
        encode: function(plainValue, base64Key) {
		    return plainValue;
                },
        decode : function(encryptedValue, base64Key) {
                    return encryptedValue;
                }
    };
}])
```

#### connfigure the cipher algorithm to use

```js
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.DES)
})
```

- availabe ciphers all that are supported by [CryptoJS](https://code.google.com/p/crypto-js/#Ciphers)
```js
demoApp.run(['cfCryptoHttpInterceptor', function(cfCryptoHttpInterceptor) {
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.AES)
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.DES)
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.TripleDES)
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.Rabbit)
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.RC4)
    cfCryptoHttpInterceptor.plugin = new CryptoJSCipher(CryptoJS.mode.ECB, CryptoJS.pad.Pkcs7, CryptoJS.RC4Drop)
})
```

#### Complete encoding of query parameter

```js
$provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
	        queryFullCrypt: {method: 'GET', isArray: false, fullcryptquery:true}
        });
    });
```

#### Complete encoding of body

```js
$provide.factory('Data', function ($resource) {
        return $resource('/assets/config', {}, {
            saveFullCrypt: {method: 'POST',  fullcryptbody:true}
        });
    });
```

##Example

#### Key Example

Change the base64Key locally by read it from the rootScope.

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    cfCryptoHttpInterceptor.base64Key = $rootScope.base64Key;
    cfCryptoHttpInterceptor.pattern = "_enc"; //default value but for a better understanding it is also defined here
})
```

#### Key Example Function

Define a function which will be used to get the key for encryption/decryption is called 
for every encryption/decryption process.

```js
var demoApp = angular.module('demoApp', ['angularjs-crypto']);
demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    cfCryptoHttpInterceptor.base64KeyFunc = function() {
        return $rootScope.base64Key;
    }
})
```

With this html snippet you can edit the key to use only locally.

```html
<input type="text" ng-model="$root.base64Key" />
```

Demo
-------------

live
------

The http calls are mocked with angular-mock.

[Http Get Example](http://angularjs-crypto.herokuapp.com/#/get)

[Http Post Example](http://angularjs-crypto.herokuapp.com/#/post)

[Http Get query parameters encoding ](http://angularjs-crypto.herokuapp.com/#/query)

[Complete query encoding](http://angularjs-crypto.herokuapp.com/#/fullquery)

[Complete body encoding](http://angularjs-crypto.herokuapp.com/#/fullbody)

[Change base64Key Example](http://angularjs-crypto.herokuapp.com/#/key)

local
------

Two ways to run the demo app local one with play or second with nodejs.

Dependencies
* play 2.2.3 (optional)
* nodejs 0.10.28
* [karma-test runner](http://karma-runner.github.io/0.12/intro/installation.html)

Start it with play

    play run
    
Then go to
* [Get Example](http://localhost:9000/#/get)
* [Post Example](http://localhost:9000/#/post)
* [Http Get query parameters encoding ](http://localhost:9000/#/query)
* [Change base64Key Example](http://localhost:9000/#/key)
* [Complete query encoding](http://localhost:9000/#/fullquery)
* [Complete body encoding](http://localhost:9000/#/fullbody)

Start it with nodejs

    node server.js
    

Then go to
* [Get Example](http://localhost:9000/#/get)
* [Post Example](http://localhost:9000/#/post)
* [Http Get query parameters encoding ](http://localhost:9000/#/query)
* [Change base64Key Example](http://localhost:9000/#/key)
* [Complete query encoding](http://localhost:9000/#/fullquery)
* [Complete body encoding](http://localhost:9000/#/fullbody)

Or run the karma test local with 

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
