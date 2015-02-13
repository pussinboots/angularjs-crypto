var sharedConfig = require('./karma.conf-unit.js');
var hostname = require('os').hostname() + '.codio.io';
var proxyHost = 'http://' + hostname + ':9000/';

module.exports = function (config) {
    sharedConfig(config);
    config.files.push('public/test/e2e/karma/*.coffee');

    config.set({
        files: [
            'node_modules/karma-ng-scenario/lib/angular-scenario.js',
            'node_modules/karma-ng-scenario/lib/adapter.js',
            'public/test/e2e/karma/*.coffee',
        ],
        reporters: ['progress', 'dots', 'junit'],
    	junitReporter: {
			outputFile: 'test-results-e2e.xml',
			suite: 'End2End test'
		},
        port: 9002,
        	browsers: ['PhantomJS'],
        hostname: hostname,
        proxies: {
            '/': proxyHost
        }
    });
}