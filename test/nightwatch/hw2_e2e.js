var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Super Time Validator - Smoke Test': function(browser) {
    browser
      .url('http://maoproj.herokuapp.com/')
      .waitForElementVisible('body')
      .assert.title('Super Time Validator')
      .assert.visible('#inputTime')
      .assert.visible('#validateButton')
      .assert.visible('.switch')
      .assert.visible('#resultDisplay')
      .saveScreenshot('screenshots/super_time_validator.png')
      .end();
  }
};
