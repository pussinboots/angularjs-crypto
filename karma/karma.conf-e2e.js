var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {
    sharedConfig(config);
    config.files.push('node_modules/karma-ng-scenario/lib/angular-scenario.js');
    config.files.push('node_modules/karma-ng-scenario/lib/adapter.js');
    config.files.push('public/test/e2e/*.coffee');
    config.set({
    	junitReporter: {
			outputFile: 'test-results-e2e.xml',
			suite: 'End2End test'
		},
        proxies: {
            '/': 'http://localhost:9000/'
        }
    });
}
