var obj = require('../src/basic.30.control.structures');

describe("basic.30.control.structures.if" , function(){
  
  it('gtFive(6) should return true', function(){
    obj.gtFive(6).should.be.exactly(true);
	});
	
  it('gtFive("6") should return false', function(){
    obj.gtFive("6").should.be.exactly(false);
	});
	
  it('gtFive(NaN) should return false', function(){
    obj.gtFive(NaN).should.be.exactly(false);
	});
	
  it('gtFive(true) should return false', function(){
    obj.gtFive(true).should.be.exactly(false);
	});
	
  it('gtFive(null) should return false', function(){
    obj.gtFive(null).should.be.exactly(false);
	});
	
  it('gtFive(undefined) should return false', function(){
    obj.gtFive(undefined).should.be.exactly(false);
	});
	
 it('gtFive() should return false', function(){
    obj.gtFive().should.be.exactly(false);
	});
	

});


describe("basic.30.control.structures.while" , function(){
  
  it('hiFive(5,Infinity) should return  false', function(){
    console.log(obj.hiFive(5,Infinity));
    obj.hiFive(5,Infinity).should.be.exactly(false);
	});
	
  it('hiFive() should return false', function(){
    obj.hiFive().should.be.exactly(false);
	});
	
  it('hiFive(5) should return false', function(){
    obj.hiFive().should.be.exactly(false);
	});
	
  it('hiFive(5,0) should return number 5', function(){
    obj.hiFive(5,0).should.be.exactly(5);
	});
	
  it('hiFive(5,1) should return number 10', function(){
    obj.hiFive(5,0).should.be.exactly(5);
	});
	
  it('hiFive(0,10) should return number 50', function(){
    obj.hiFive(0,10).should.be.exactly(50);
	});
	
  it('hiFive("6") should return false', function(){
    obj.hiFive("6").should.be.exactly(false);
	});
	
  it('hiFive(NaN) should return false', function(){
    obj.hiFive(NaN).should.be.exactly(false);
	});
	
  it('hiFive(true) should return false', function(){
    obj.hiFive(true).should.be.exactly(false);
	});
	
  it('hiFive(null) should return false', function(){
    obj.hiFive(null).should.be.exactly(false);
	});
	
  it('hiFive(undefined) should return false', function(){
    obj.hiFive(undefined).should.be.exactly(false);
	});
	
 });



describe("basic.30.control.structures.for" , function(){
  
  it('loFive(5,Infinity) should return  false', function(){
    console.log(obj.loFive(5,Infinity));
    obj.loFive(5,Infinity).should.be.exactly(false);
	});
	
  it('loFive() should return false', function(){
    obj.loFive().should.be.exactly(false);
	});
	
  it('loFive(5) should return false', function(){
    obj.loFive().should.be.exactly(false);
	});
	
  it('loFive(5,0) should return number 5', function(){
    obj.loFive(5,0).should.be.exactly(5);
	});
	
  it('loFive(5,1) should return number 0', function(){
    obj.loFive(5,1).should.be.exactly(0);
	});
	
  it('loFive(5,2) should return number -5', function(){
    obj.loFive(5,2).should.be.exactly(-5);
	});
  it('loFive(6,1) should return number 1', function(){
    obj.loFive(6,1).should.be.exactly(1);
	});
	
  it('loFive("6") should return false', function(){
    obj.loFive("6").should.be.exactly(false);
	});
	
  it('loFive(NaN) should return false', function(){
    obj.loFive(NaN).should.be.exactly(false);
	});
	
  it('loFive(true) should return false', function(){
    obj.loFive(true).should.be.exactly(false);
	});
	
  it('loFive(null) should return false', function(){
    obj.loFive(null).should.be.exactly(false);
	});
	
  it('loFive(undefined) should return false', function(){
    obj.loFive(undefined).should.be.exactly(false);
	});
	
 });

