describe('Testing paragraph', function() {
	beforeEach(function(){
		console.log('--------------------------------');
		console.log('Starting test...');
	});
	
 it('Read text from paragraph', function() {
	 
 browser.ignoreSynchronization = true;
 browser.get('https://the-internet.herokuapp.com/abtest');
 browser.sleep(4000);
 
 var header = $('h3');
  var paragraph = element(by.css('p'));
  paragraph.getText().then(function(text){
	  console.log('--------------------------------');
	  console.log('Text read from page:');
	  console.log(text);
	  console.log('--------------------------------');
  });
  expect(paragraph.getText()).toContain('Also known as split testing.');
  expect(header.getText()).toMatch('A/B Test Control');
  });
});

describe('Testing Checkboxes', function() {
 it('Clicking checkboxes', function() {
	 
 browser.ignoreSynchronization = true;
 browser.get('https://the-internet.herokuapp.com/checkboxes');
 browser.sleep(3500);
 
  var header = $('h3');
  var checkboxes = $$('form > input');
    
  expect(header.getText()).toMatch('Checkboxes');  
  //expect(checkboxes.getText()).toContain('Also known as split testing.');
  
  });
});

