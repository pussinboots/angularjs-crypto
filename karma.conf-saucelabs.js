// Karma configuration
// Generated on Wed Aug 14 2013 22:33:43 GMT+0200 (CEST)

module.exports = function (config) {
    // Browsers to run on Sauce Labs
	var customLaunchers= {
	      'SL_Chrome': {
		base: 'SauceLabs',
		browserName: 'chrome',
		version: '34'
	      },
	      'SL_Firefox': {
		base: 'SauceLabs',
		browserName: 'firefox',
		version: '26'
	      },
	      'SL_Safari': {
		base: 'SauceLabs',
		browserName: 'safari',
		platform: 'OS X 10.9',
		version: '7'
	      },
	      'SL_IE_11': {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		platform: 'Windows 8.1',
		version: '11'
	      }
	  };
    config.set({
	// base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
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
            'public/test/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'public/test/lib/jasmine/*',
            'public/test/lib/jasmine-jstd-adapter/*',
            'public/test/e2e/*.js',
            'public/test/lib/angular/angular-scenario.js',
            'public/test/lib/angular/jstd-scenario-adapter.js'
        ],

        preprocessors: { 'public/js/*.js': ['coverage'],'public/js/lib/*.js': ['coverage'], 'public/test/unit/*.js': ['coverage'] },

	sauceLabs: {
	      testName: 'Karma and Sauce Labs demo',
	      recordScreenshots: false
	},

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'dots', 'junit', 'coverage', 'coveralls', 'threshold', 'saucelabs'],

	thresholdReporter: {
	      statements: 90,
	      branches: 60,
	      functions: 85,
	      lines: 90
	},

	coverageReporter: {
	    type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
	    dir: 'coverage/'
	},

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        //browsers: ['Firefox','Opera'/*, 'Chrome_without_security','Chrome'*/], //Chrome not started in travis ci
	customLaunchers: customLaunchers,
	browsers: Object.keys(customLaunchers),

	/*customLaunchers: {
	      Chrome_without_security: {
		base: 'Chrome',
		flags: ['--disable-web-security']
	      }
	},*/

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 120000,
	browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 2,
        browserNoActivityTimeout: 20000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        proxies: {
            '/test/lib/angular/': 'http://localhost:8888/asset/test/lib/angular/'
        },

        urlRoot: '/__karma/'
    });
};
