// Karma configuration
// Generated on Wed Aug 14 2013 22:33:43 GMT+0200 (CEST)
var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {
    sharedConfig(config);
    config.set({
       files: [
            // bower:js
            'public/components/angular/angular.js',
            'public/components/angular-cookies/angular-cookies.js',
            'public/components/angular-resource/angular-resource.js',
            'public/components/angular-route/angular-route.js',
            // endbower
	        'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-mocks.js',
 	        'http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js',
    	    'http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb.js',
            'public/js/*.js',
            'public/js/lib/*.js',
            'public/js/lib/plugins/*.js',
       ],
       singleRun: false,
       proxies: {
            '/test/lib/angular/': 'http://localhost:8888/asset/test/lib/angular/'
       },
       urlRoot: '/__karma/'
    });

    config.files.push('public/test/**/*.js');
};
