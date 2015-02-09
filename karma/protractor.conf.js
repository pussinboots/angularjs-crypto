require('coffee-script').register();
//var hostname = require('os').hostname() + '.codio.io';
/*var hostname = 'localhost';
var proxyHost = 'http://' + hostname + ':9000/';
*/

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //baseUrl : proxyHost,
  /*capabilities: {
      'browserName': 'phantomjs',
      'phantomjs.binary.path': 'node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin',
      'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },*/
  capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['no-sandbox']
      }
  },
  specs: [
      '../public/test/e2e/protractor/*.coffee'
  ],
  framework: 'jasmine',
  baseUrl: 'http://localhost:9000/',
}
