var obj = require('../src/basic.30.strings');

describe("basic.30.strings.general" , function(){

	it("v2 should be of type number and equal to 11", function(){
		obj.str1.should.be.exactly("Hello World");
    obj.v2.should.be.exactly(obj.str1.length).and.be.of.type("number");
	});
		
  it('v4 should be equal to "H" and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v4.should.be.exactly(obj.str2.charAt(0)).and.be.of.type("string");
    obj.v4_value.should.be.exactly("H");
	});
	
  it('v5 should be equal to " " and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v5.should.be.exactly(obj.str2.charAt(5)).and.be.of.type("string");
    obj.v5_value.should.be.exactly(" ");
	});

  it('v6 should be equal to "" and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v6.should.be.exactly(obj.str2.charAt(obj.str2.length)).and.be.of.type("string");
    obj.v6_value.should.be.exactly("");
	});

  it('v7 should be equal to "d" and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v7.should.be.exactly(obj.str2.charAt(obj.str2.length -1 )).and.be.of.type("string");
    obj.v7_value.should.be.exactly("d");
	});


});


describe("basic.30.strings.bonus.isSpace" , function(){
  
  it('isSpace("Hello World") should return true', function(){
    obj.isSpace("Hello World").should.be.exactly(true);
	});
	
  it('isSpace("Hello World Here I Come") should return true', function(){
    obj.isSpace("Hello World Here I Come").should.be.exactly(true);
	});
	
  it('isSpace(" ") should return true', function(){
    obj.isSpace(" ").should.be.exactly(true);
	});
  
  it('isSpace("HelloWorld") should return false', function(){
    obj.isSpace("HelloWorld").should.be.exactly(false);
	});
	
  it('isSpace(NaN) should return false', function(){
    obj.isSpace(NaN).should.be.exactly(false);
	});
	
  it('isSpace(true) should return false', function(){
    obj.isSpace(true).should.be.exactly(false);
	});
	
  it('isSpace(null) should return false', function(){
    obj.isSpace(null).should.be.exactly(false);
	});
	
  it('isSpace(undefined) should return false', function(){
    obj.isSpace(undefined).should.be.exactly(false);
	});
	
}); //end of describe


describe("basic.30.strings.bonus.firstSpace" , function(){
  
  it('firstSpace("Hello World") should return 5', function(){
    obj.firstSpace("Hello World").should.be.exactly(5);
	});
	
  it('firstSpace("Hello World Here I Come") should return 5', function(){
    obj.firstSpace("Hello World Here I Come").should.be.exactly(5);
	});
	
  it('firstSpace(" ") should return 0', function(){
    obj.firstSpace(" ").should.be.exactly(0);
	});
  
  it('firstSpace("HelloWorld") should return false', function(){
    obj.firstSpace("HelloWorld").should.be.exactly(false);
	});
	
  it('firstSpace(NaN) should return false', function(){
    obj.firstSpace(NaN).should.be.exactly(false);
	});
	
  it('firstSpace(true) should return false', function(){
    obj.firstSpace(true).should.be.exactly(false);
	});
	
  it('firstSpace(null) should return false', function(){
    obj.firstSpace(null).should.be.exactly(false);
	});
	
  it('firstSpace(undefined) should return false', function(){
    obj.firstSpace(undefined).should.be.exactly(false);
	});
	
}); //end of describe


describe("basic.30.strings.bonus.countSpace" , function(){
  
  it('countSpace("Hello World") should return 1', function(){
    obj.countSpace("Hello World").should.be.exactly(1);
	});
	
  it('countSpace("Hello World Here I Come") should return 4', function(){
    obj.countSpace("Hello World Here I Come").should.be.exactly(4);
	});
	
  it('countSpace(" ") should return 1', function(){
    obj.countSpace(" ").should.be.exactly(1);
	});
  
  it('countSpace("HelloWorld") should return 0', function(){
    obj.countSpace("HelloWorld").should.be.exactly(0);
	});
	
  it('countSpace(NaN) should return false', function(){
    obj.countSpace(NaN).should.be.exactly(false);
	});
	
  it('countSpace(true) should return false', function(){
    obj.countSpace(true).should.be.exactly(false);
	});
	
  it('countSpace(null) should return false', function(){
    obj.countSpace(null).should.be.exactly(false);
	});
	
  it('countSpace(undefined) should return false', function(){
    obj.countSpace(undefined).should.be.exactly(false);
	});
	
}); //end of describe




