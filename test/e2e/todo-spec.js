describe('angularjs first test', function() {
  var AngularPage = require('./home.page.js');
  var home;

  beforeEach(function() {
    home = new AngularPage();
  });

  it('should have complete navbar', function() {
    expect(home.controls.home.isPresent()).toBe(true);
    expect(home.controls.login.isPresent()).toBe(true);
    expect(home.controls.new_article.isPresent()).toBe(true);
  });

  it('should say hello upon login', function() {
    expect(home.controls.home.isPresent()).toBe(true);
    expect(element(by.id('greeting')).isPresent()).toBe(true);
  });

  it('should open new article form', function() {
    expect(home.controls.new_article.isPresent()).toBe(true);
    home.controls.new_article.click();

    fail('finish this test!');
  });
});
