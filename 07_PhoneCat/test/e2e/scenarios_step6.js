'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

xdescribe('Phonecat app', function () {
  xdescribe('Phone list view', function () {

    beforeEach(function () {
      browser.get('app/index.html');
    });

    xit('should filter the phone list as a user type into the search box', function () {
      var phonelist = element.all(by.repeater('phone in phones'));
      var query = element(by.model('sjpQuery'));
      expect(phonelist.count()).toBe(4);

      query.sendKeys('nexus');
      expect(phonelist.count()).toBe(2);

      //browser.driver.sleep(10000);
      //browser.waitForAngular();
      query.clear();
      query.sendKeys('siddy');
      expect(phonelist.count()).toBe(0);

      query.clear();
      query.sendKeys('galaxy');
      expect(phonelist.count()).toBe(1);

    });

    it('should display the current filter value in the title bar', function () {
      var query = element(by.model('sjpQuery'));
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/); //note: $ at the end is not essential.

      /*

       \s 	Find a whitespace character
       n* 	Matches any string that contains zero or more occurrences of n
       n$ 	Matches any string with n at the end of it

      * */


      query.clear();
      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);


    });

    xit('should be able to control phone list order by drop down select box ', function () {
      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      var query = element(by.model('sjpQuery'));

      function getNames(){
        return phoneNameColumn.map(function (elem) {
          //console.log("===============in getNames=======================");
          //console.log(elem.getText());
          return elem.getText();
        });
      }

    /*  console.log("=====================getNames======================");
      console.log(getNames());
      console.log("=====================phoneNameColumn=================================");
      console.log(phoneNameColumn);
*/
      query.clear();
      query.sendKeys('nexus');
      expect(getNames()).toEqual([
          'Nexus s','Nexus Bs'
      ]);


      element(by.model('sjpOrder')).element(by.css('option[value="name"]')).click();///HARD ?????

      expect(getNames()).toEqual(
          [
            'Nexus Bs', 'Nexus s'
          ]
      );


      query.clear();
      element(by.model('sjpOrder')).element(by.css('option[value="age"]')).click();
      expect(getNames()).toEqual(
          ['Iphone 6', 'Nexus s', 'Galaxy S6','Nexus Bs' ]
      );
    });



  });

  xdescribe('Phone list view after the images', function() {

    beforeEach(function () {
      browser.get('/app/index.html');
    });

    it('should render phone links', function () {
      var query = element(by.model('sjpQuery'));
      query.sendKeys('motorola');

      element(by.model('sjpOrder')).element(by.css('option[value="name"')).click();
      element.all(by.css('.phones li a')).first().click();

      expect(browser.getLocationAbsUrl()).toBe('/phones/droid-2-global-by-motorola');

    });

  });
  
  
});
