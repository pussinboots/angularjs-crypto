var sharedConfig = require('./karma.conf-saucelabs.js');

module.exports = function (config) {
    sharedConfig(config);
    config.set({
        files: [
            'node_modules/karma-ng-scenario/lib/angular-scenario.js',
            'node_modules/karma-ng-scenario/lib/adapter.js',
            'public/test/e2e/*.coffee',
        ],
        reporters: ['progress', 'dots', 'junit'],
    	junitReporter: {
			outputFile: 'test-results-e2e.xml',
			suite: 'End2End test'
		}
    });
}
