describe('Google\'s Search Functionality', function() {
it('can find search results', function() {

browser.driver.get('https://google.com/');
browser.sleep('3000');
element(by.name('q')).sendKeys('BrowserStack');
element(by.name('btnG')).click();

//title of the launched webpage is expected to be BrowserStack - Google Search

expect(browser.getTitle()).toEqual('BrowserStack - Google Search');
});
});