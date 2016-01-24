exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    var LOGIN_URL = 'http://localhost:9000/#/auth/login';

    browser.get(LOGIN_URL);

    browser.findElement(by.model('user.email')).sendKeys('admin@example.com');
    browser.findElement(by.model('user.password')).sendKeys('Sekrit');
    browser.findElement(by.id('btn-submit')).click();

    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return LOGIN_URL !== url;
      });
    }, 10000);
  }
};
