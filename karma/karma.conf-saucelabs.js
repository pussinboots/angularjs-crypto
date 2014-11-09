// Karma configuration
// Generated on Wed Aug 14 2013 22:33:43 GMT+0200 (CEST)
// Karma configuration
// Generated on Wed Aug 14 2013 22:33:43 GMT+0200 (CEST)
var sharedConfig = require('./karma.conf-unit.js');

module.exports = function (config) {
    var customLaunchers= {
	      /*'SL_Chrome': {
		base: 'SauceLabs',
		browserName: 'chrome',
		version: '34'
	      },*/
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
    
    sharedConfig(config);
       
    config.set({
	sauceLabs: {
	      testName: 'Karma and Sauce Labs demo',
	      recordScreenshots: false
	},

	customLaunchers: customLaunchers,
	browsers: Object.keys(customLaunchers),

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
