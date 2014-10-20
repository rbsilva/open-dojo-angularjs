'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /dojos when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/dojos");
  });


  describe('dojos', function() {

    beforeEach(function() {
      browser.get('index.html#/dojos');
    });

    it('should add a dojo to grid', function() {
      element(by.model('dojo.name')).sendKeys("teste");
      element(by.model('dojo.description')).sendKeys("teste");
      element(by.id('add')).click();
      expect(element.all(by.css('[ng-view] td')).then(function(items) {
        expect(items[1].getText()).toBe('teste');
      }));
    });

  });
});