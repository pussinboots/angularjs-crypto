require('coffee-script').register();

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
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
  allScriptsTimeout: 20000,
  baseUrl: 'http://localhost:9000/',
  onPrepare: function() {
    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('./', true, true, 'protractor.', true)
    );
    var ScreenShotReporter = require('protractor-screenshot-reporter');
    jasmine.getEnv().addReporter(
      new ScreenShotReporter({baseDirectory: '/tmp/screenshots'})
    );
  },
}
