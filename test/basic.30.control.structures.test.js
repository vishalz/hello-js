var obj = require('../src/basic.30.control.structures');


describe("basic.30.control.structures.if.isFiniteNumber" , function(){
 
  it('isFiniteNumber(6) should return true', function(){
    obj.isFiniteNumber(6).should.be.exactly(true);
	});
	
  it('isFiniteNumber(6000) should return true', function(){
    obj.isFiniteNumber(6).should.be.exactly(true);
	});
	
  it('isFiniteNumber("6") should return false', function(){
    obj.isFiniteNumber("6").should.be.exactly(false);
	});
	
  it('isFiniteNumber(NaN) should return false', function(){
    obj.isFiniteNumber(NaN).should.be.exactly(false);
	});
	
  it('isFiniteNumber(true) should return false', function(){
    obj.isFiniteNumber(true).should.be.exactly(false);
	});
	
  it('isFiniteNumber(null) should return false', function(){
    obj.isFiniteNumber(null).should.be.exactly(false);
	});
	
  it('isFiniteNumber(undefined) should return false', function(){
    obj.isFiniteNumber(undefined).should.be.exactly(false);
	});
	
  it('isFiniteNumber() should return false', function(){
    obj.isFiniteNumber().should.be.exactly(false);
	});
	
  it('isFiniteNumber(Infinity) should return false', function(){
    obj.isFiniteNumber(Infinity).should.be.exactly(false);
	});
	

}); //end of describe 


describe("basic.30.control.structures.if.isString" , function(){
 
  it('isString(6) should return false', function(){
    obj.isString(6).should.be.exactly(false);
	});
	
  it('isString("6") should return true', function(){
    obj.isString("6").should.be.exactly(true);
	});
	
  it('isString(NaN) should return false', function(){
    obj.isString(NaN).should.be.exactly(false);
	});
	
  it('isString(true) should return false', function(){
    obj.isString(true).should.be.exactly(false);
	});
	
  it('isString(null) should return false', function(){
    obj.isString(null).should.be.exactly(false);
	});
	
  it('isString(undefined) should return false', function(){
    obj.isString(undefined).should.be.exactly(false);
	});
	
  it('isString() should return false', function(){
    obj.isString().should.be.exactly(false);
	});
	
  
	

}); //end of describe 



describe("basic.30.control.structures.if.dosGrande" , function(){
 
  it('dosGrande(6,60) should return 60', function(){
    obj.dosGrande(6,60).should.be.exactly(60);
	});
	
  it('dosGrande(600,60) should return 600', function(){
    obj.dosGrande(6,60).should.be.exactly(60);
	});
	

  it('dosGrande("6","600") should return false', function(){
    obj.dosGrande("6","600").should.be.exactly(false);
	});
	
  it('dosGrande(NaN) should return false', function(){
    obj.dosGrande(NaN).should.be.exactly(false);
	});
	
  it('dosGrande(true) should return false', function(){
    obj.dosGrande(true).should.be.exactly(false);
	});
	
  it('dosGrande(null) should return false', function(){
    obj.dosGrande(null).should.be.exactly(false);
	});
	
  it('dosGrande(undefined) should return false', function(){
    obj.dosGrande(undefined).should.be.exactly(false);
	});
	
  it('dosGrande() should return false', function(){
    obj.dosGrande().should.be.exactly(false);
	});
	
  
	

}); //end of describe 


describe("basic.30.control.structures.if.tresGrande" , function(){
 
  it('tresGrande(6,60,7) should return 60', function(){
    obj.tresGrande(6,60,7).should.be.exactly(60);
	});
	
  it('tresGrande(600,60,9) should return 600', function(){
    obj.tresGrande(6,60,9).should.be.exactly(60);
	});
	

  it('tresGrande("6","600","900") should return false', function(){
    obj.tresGrande("6","600","900").should.be.exactly(false);
	});
	
  it('tresGrande(NaN) should return false', function(){
    obj.tresGrande(NaN).should.be.exactly(false);
	});
	
  it('tresGrande(true) should return false', function(){
    obj.tresGrande(true).should.be.exactly(false);
	});
	
  it('tresGrande(null) should return false', function(){
    obj.tresGrande(null).should.be.exactly(false);
	});
	
  it('tresGrande(undefined) should return false', function(){
    obj.tresGrande(undefined).should.be.exactly(false);
	});
	
  it('tresGrande() should return false', function(){
    obj.tresGrande().should.be.exactly(false);
	});
	
  
	

}); //end of describe 

describe("basic.30.control.structures.if.quatroGrande" , function(){
 
  it('quatroGrande(6,60,7,50) should return 60', function(){
    obj.quatroGrande(6,60,7,50).should.be.exactly(60);
	});
	
  it('quatroGrande(600,60,9,50) should return 600', function(){
    obj.quatroGrande(6,60,9,50).should.be.exactly(60);
	});
	

  it('quatroGrande("6","600","900",50) should return false', function(){
    obj.quatroGrande("6","600","900",50).should.be.exactly(false);
	});
	
  it('quatroGrande(NaN) should return false', function(){
    obj.quatroGrande(NaN).should.be.exactly(false);
	});
	
  it('quatroGrande(true) should return false', function(){
    obj.quatroGrande(true).should.be.exactly(false);
	});
	
  it('quatroGrande(null) should return false', function(){
    obj.quatroGrande(null).should.be.exactly(false);
	});
	
  it('quatroGrande(undefined) should return false', function(){
    obj.quatroGrande(undefined).should.be.exactly(false);
	});
	
  it('quatroGrande() should return false', function(){
    obj.quatroGrande().should.be.exactly(false);
	});
	
  
	

}); //end of describe 







describe("basic.30.control.structures.if.gtFive" , function(){
  
  it('gtFive(6) should return true', function(){
    obj.gtFive(6).should.be.exactly(true);
	});
	  
  it('gtFive(4) should return false', function(){
    obj.gtFive(4).should.be.exactly(false);
	});
	
  it('gtFive(5) should return false', function(){
    obj.gtFive(5).should.be.exactly(false);
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


describe("basic.30.control.structures.for,hiFive" , function(){
  
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



describe("basic.30.control.structures.for.loFive" , function(){
  
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

