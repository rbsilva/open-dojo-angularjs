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
      element(by.name('name')).sendKeys("teste");
      element(by.name('dojoDescription')).sendKeys("teste");
      element(by.id('add')).click();
      expect(element.all(by.css('[ng-view] td')).then(function(items) {
        expect(items[1].getText()).toBe('teste');
      }));
    });

  });

    describe('senseis', function() {

      beforeEach(function() {
        browser.get('index.html#/senseis');
      });

      it('should add a sensei to grid', function() {
        element(by.name('name')).sendKeys("teste");
        element(by.name('login')).sendKeys("teste");
        element(by.id('knowledges')).sendKeys("angular");
        element(by.id('add')).click();
        expect(element.all(by.css('[ng-view] td')).then(function(items) {

          expect(items[1].getText()).toBe('teste');
          expect(items[2].getText()).toBe('teste');
          expect(items[3].getText()).toBe('angular');
        }));
      });

    });
});
