var BASE_URL = "http://localhost:9000/#/auth/login";
var USERNAME = "admin@example.com";
var PASSWORD = "Sekrit";

var AngularPage = function() {
  browser.get(BASE_URL);
  var page = this;

  page.controls = {
    username: browser.element(by.model('user.email')),
    password: element(by.model('user.password')),
    submit: element(by.id('btn-submit'))
  };

  page.do_login = function() {
    page.controls.username.sendKeys(USERNAME);
    page.controls.password.sendKeys(PASSWORD);

    page.controls.submit.click();
  };
};

module.exports = AngularPage;
