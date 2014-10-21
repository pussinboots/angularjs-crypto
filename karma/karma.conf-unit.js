// Karma configuration
// Generated on Wed Aug 14 2013 22:33:43 GMT+0200 (CEST)
var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {
    sharedConfig(config);
    config.set({
       singleRun: false,
       proxies: {
            '/test/lib/angular/': 'http://localhost:8888/asset/test/lib/angular/'
       },
       urlRoot: '/__karma/'
    });
};
