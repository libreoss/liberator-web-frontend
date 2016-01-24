var BASE_URL = "http://localhost:9000/#/";

var AngularPage = function() {
  browser.get(BASE_URL);

  this.controls = {
    home: element(By.id('home')),
    login: element(By.id('login')),
    article_list: element(By.id('article-list')),
    new_article: element(By.id('new-article'))
  };
};


module.exports = AngularPage;
