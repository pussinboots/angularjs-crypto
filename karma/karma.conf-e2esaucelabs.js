var sharedConfig = require('./karma.conf-saucelabs.js');

module.exports = function (config) {
    sharedConfig(config);
    config.files.push();
    config.files.push();
    config.files.push();
    config.set({
        files: [
            'node_modules/karma-ng-scenario/lib/angular-scenario.js',
            'node_modules/karma-ng-scenario/lib/adapter.js',
            'public/test/e2e/*.coffee',
        ],
    	junitReporter: {
			outputFile: 'test-results-e2e.xml',
			suite: 'End2End test'
		},
        proxies: {
            '/': 'http://localhost:9000/'
        }
    });
}
