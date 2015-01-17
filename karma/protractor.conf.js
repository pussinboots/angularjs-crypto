var hostname = require('os').hostname() + '.codio.io';
var proxyHost = 'http://' + hostname + ':9000/';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl : proxyHost,
  capabilities: {
      'browserName': 'phantomjs',
      /* 
       * Can be used to specify the phantomjs binary path.
       * This can generally be ommitted if you installed phantomjs globally.
       */
      'phantomjs.binary.path': 'node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin',

      /*
       * Command line args to pass to ghostdriver, phantomjs's browser driver.
       * See https://github.com/detro/ghostdriver#faq
       */
      'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  specs: [
      '../public/test/e2e/*.coffee'
  ],
}