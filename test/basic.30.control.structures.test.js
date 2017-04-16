
'use strict'

var obj = require('../src/basic.30.control.structures');

describe("basic.30.control.structures.if.isFiniteNumber" , function(){
 
  it('isFiniteNumber(6) should return true', function(){
    obj.isFiniteNumber(6).should.be.eql(true);
  });
  
  it('isFiniteNumber(6000) should return true', function(){
    obj.isFiniteNumber(6).should.be.eql(true);
  });
    
  it('isFiniteNumber(-6) should return true', function(){
    obj.isFiniteNumber(-6).should.be.eql(true);
  });
  
  it('isFiniteNumber("6") should return false', function(){
    obj.isFiniteNumber("6").should.be.eql(false);
  });
  
  it('isFiniteNumber(NaN) should return false', function(){
    obj.isFiniteNumber(NaN).should.be.eql(false);
  });
  
  it('isFiniteNumber(true) should return false', function(){
    obj.isFiniteNumber(true).should.be.eql(false);
  });
  
  it('isFiniteNumber(null) should return false', function(){
    obj.isFiniteNumber(null).should.be.eql(false);
  });
  
  it('isFiniteNumber(undefined) should return false', function(){
    obj.isFiniteNumber(undefined).should.be.eql(false);
  });
  
  it('isFiniteNumber() should return false', function(){
    obj.isFiniteNumber().should.be.eql(false);
  });
  
  it('isFiniteNumber(Infinity) should return false', function(){
    obj.isFiniteNumber(Infinity).should.be.eql(false);
  });
  

}); //end of describe 


describe("basic.30.control.structures.if.isString" , function(){
 
  it('isString(6) should return false', function(){
    obj.isString(6).should.be.eql(false);
  });
  
  it('isString("6") should return true', function(){
    obj.isString("6").should.be.eql(true);
  });
  
  it('isString(NaN) should return false', function(){
    obj.isString(NaN).should.be.eql(false);
  });
  
  it('isString(true) should return false', function(){
    obj.isString(true).should.be.eql(false);
  });
  
  it('isString(null) should return false', function(){
    obj.isString(null).should.be.eql(false);
  });
  
  it('isString(undefined) should return false', function(){
    obj.isString(undefined).should.be.eql(false);
  });
  
  it('isString() should return false', function(){
    obj.isString().should.be.eql(false);
  });
  
  
  

}); //end of describe 



describe("basic.30.control.structures.if.dosGrande" , function(){
 
  it('dosGrande(6,60) should return 60', function(){
    obj.dosGrande(6,60).should.be.eql(60);
  });
  
  it('dosGrande(600,60) should return 600', function(){
    obj.dosGrande(600,60).should.be.eql(600);
  });
  
  it('dosGrande(-100,-200) should return -100', function(){
    obj.dosGrande(-100,-200).should.be.eql(-100);
  });
  
  it('dosGrande(-100,10) should return 10', function(){
    obj.dosGrande(-100,10).should.be.eql(10);
  });

  it('dosGrande("6","600") should throw an Exception', function(){
    (() => obj.dosGrande("6","600")).should.throw();
  });
  
  it('dosGrande(NaN) should throw an Exception', function(){
    (() => obj.dosGrande(NaN)).should.throw();
  });
  
  it('dosGrande(true) should throw an Exception', function(){
    (() => obj.dosGrande(true)).should.throw();
  });
  
  it('dosGrande(null) should throw an Exception', function(){
    (() => obj.dosGrande(null)).should.throw();
  });
  
  it('dosGrande(undefined) should throw an Exception', function(){
    (() => obj.dosGrande(undefined)).should.throw();
  });
  
  it('dosGrande() should throw an Exception', function(){
    (() => obj.dosGrande()).should.throw();
  });
  
  it('dosGrande(5,NaN) should throw an Exception', function(){
    (() => obj.dosGrande(5,NaN)).should.throw();
  });
  
  it('dosGrande(5,true) should throw an Exception', function(){
    (() => obj.dosGrande(5,true)).should.throw();
  });
  
  it('dosGrande(5,null) should throw an Exception', function(){
    (() => obj.dosGrande(5,null)).should.throw();
  });
  
  it('dosGrande(5) should throw an Exception', function(){
    (() => obj.dosGrande(5)).should.throw();
  });
  
  

}); //end of describe 


describe("basic.30.control.structures.if.tresGrande" , function(){
 
  it('tresGrande(6,60,7) should return 60', function(){
    obj.tresGrande(6,60,7).should.be.eql(60);
  });
  
  it('tresGrande(600,60,9) should return 600', function(){
    obj.tresGrande(600,60,9).should.be.eql(600);
  });
  
  it('tresGrande(-600,-60,-9) should return -9', function(){
    obj.tresGrande(-600,-60,-9).should.be.eql(-9);
  });

  it('tresGrande("6","600","900") should throw an Exception', function(){
    (() => obj.tresGrande("6","600","900")).should.throw();
  });
  
  it('tresGrande(NaN) should throw an Exception', function(){
    (() => obj.tresGrande(NaN)).should.throw();
  });
  
  it('tresGrande(true) should throw an Exception', function(){
    (() => obj.tresGrande(true)).should.throw();
  });
  
  it('tresGrande(null) should throw an Exception', function(){
    (() => obj.tresGrande(null)).should.throw();
  });
  
  it('tresGrande(undefined) should throw an Exception', function(){
    (() => obj.tresGrande(undefined)).should.throw();
  });
  
  it('tresGrande() should throw an Exception', function(){
    (() => obj.tresGrande()).should.throw();
  });
  
  it('tresGrande(5,NaN) should throw an Exception', function(){
    (() => obj.tresGrande(5,NaN)).should.throw();
  });
  
  it('tresGrande(5,true) should throw an Exception', function(){
    (() => obj.tresGrande(5,true)).should.throw();
  });
  
  it('tresGrande(5,null) should throw an Exception', function(){
    (() => obj.tresGrande(5,null)).should.throw();
  });
  
  it('tresGrande(5) should throw an Exception', function(){
    (() => obj.tresGrande(5)).should.throw();
  });
  
  it('tresGrande(5,5,NaN) should throw an Exception', function(){
    (() => obj.tresGrande(5,5,NaN)).should.throw();
  });
  
  it('tresGrande(5,5,true) should throw an Exception', function(){
    (() => obj.tresGrande(5,5,true)).should.throw();
  });
  
  it('tresGrande(5,5,null) should throw an Exception', function(){
    (() => obj.tresGrande(5,5,null)).should.throw();
  });
  
  it('tresGrande(5,6) should throw an Exception', function(){
    (() => obj.tresGrande(5,6)).should.throw();
  });
  

  

}); //end of describe 

describe("basic.30.control.structures.if.quatroGrande" , function(){
 
  it('quatroGrande(6,60,7,50) should return 60', function(){
    obj.quatroGrande(6,60,7,50).should.be.eql(60);
  });
  
  it('quatroGrande(600,60,9,50) should return 600', function(){
    obj.quatroGrande(600,60,9,50).should.be.eql(600);
  });
  
  it('quatroGrande(-600,-60,-9,-50) should return -9', function(){
    obj.quatroGrande(-600,-60,-9,-50).should.be.eql(-9);
  });

  it('quatroGrande("6","600","900",50) should throw an Exception', function(){
    (() => obj.quatroGrande("6","600","900",50)).should.throw();
  });
  
  it('quatroGrande(NaN) should throw an Exception', function(){
    (() => obj.quatroGrande(NaN)).should.throw();
  });
  
  it('quatroGrande(true) should throw an Exception', function(){
    (() => obj.quatroGrande(true)).should.throw();
  });
  
  it('quatroGrande(null) should throw an Exception', function(){
    (() => obj.quatroGrande(null)).should.throw();
  });
  
  it('quatroGrande(undefined) should throw an Exception', function(){
    (() => obj.quatroGrande(undefined)).should.throw();
  });
  
  it('quatroGrande() should throw an Exception', function(){
    (() => obj.quatroGrande()).should.throw();
  });
  
  it('quatroGrande(5,NaN) should throw an Exception', function(){
    (() => obj.quatroGrande(5,NaN)).should.throw();
  });
  
  it('quatroGrande(5,true) should throw an Exception', function(){
    (() => obj.quatroGrande(5,true)).should.throw();
  });
  
  it('quatroGrande(5,null) should throw an Exception', function(){
    (() => obj.quatroGrande(5,null)).should.throw();
  });
  
  it('quatroGrande(5) should throw an Exception', function(){
    (() => obj.quatroGrande(5)).should.throw();
  });
  
  it('quatroGrande(5,5,NaN) should throw an Exception', function(){
    (() => obj.quatroGrande(5,5,NaN)).should.throw();
  });
  
  it('quatroGrande(5,5,true) should throw an Exception', function(){
    (() => obj.quatroGrande(5,5,true)).should.throw();
  });
  
  it('quatroGrande(5,5,null) should throw an Exception', function(){
    (() => obj.quatroGrande(5,5,null)).should.throw();
  });
  
  it('quatroGrande(5,6) should throw an Exception', function(){
    (() => obj.quatroGrande(5,6)).should.throw();
  });
  
  it('quatroGrande(5,5,5,NaN) should throw an Exception', function(){
    (() => obj.quatroGrande(5,5,5,NaN)).should.throw();
  });
  
  it('quatroGrande(5,5,5,true) should throw an Exception', function(){
    (() => obj.quatroGrande(5,5,5,true)).should.throw();
  });
  
  it('quatroGrande(5,5,5,null) should throw an Exception', function(){
    (() => obj.quatroGrande(5,5,5,null)).should.throw();
  });
  
  it('quatroGrande(5,6,7) should throw an Exception', function(){
    (() => obj.quatroGrande(5,6,7)).should.throw();
  });
  


 
  

}); //end of describe 







describe("basic.30.control.structures.if.gtFive" , function(){
  
  it('gtFive(6) should return true', function(){
    obj.gtFive(6).should.be.eql(true);
  });
    
  it('gtFive(4) should return false', function(){
    obj.gtFive(4).should.be.eql(false);
  });
  
  it('gtFive(5) should return false', function(){
    obj.gtFive(5).should.be.eql(false);
  });
  
  it('gtFive(-5) should return false', function(){
    obj.gtFive(-5).should.be.eql(false);
  });

  it('gtFive("6") should throw an Exception', function(){
    (() => obj.gtFive("6")).should.throw();
  });
  
  it('gtFive(NaN) should throw an Exception', function(){
    (() => obj.gtFive(NaN)).should.throw();
  });
  
  it('gtFive(true) should throw an Exception', function(){
    (() => obj.gtFive(true)).should.throw();
  });
  
  it('gtFive(null) should throw an Exception', function(){
    (() => obj.gtFive(null)).should.throw();
  });
  
  it('gtFive(undefined) should throw an Exception', function(){
    (() => obj.gtFive(undefined)).should.throw();
  });
  
 it('gtFive() should throw an Exception', function(){
    (() => obj.gtFive()).should.throw();
  });
  

});


describe("basic.30.control.structures.for,hiFive" , function(){
  
  it('hiFive(5,Infinity) should throw an exception', function(){
    (() => obj.hiFive(5,Infinity)).should.throw();
  });
  
  it('hiFive() should throw an exception', function(){
    (() => obj.hiFive()).should.throw();
  });
  
  it('hiFive(5) should throw an exception', function(){
    (() => obj.hiFive(5)).should.throw();
  });
  it('hiFive(NaN) should throw an exception', function(){
    (() => obj.hiFive(NaN)).should.throw();
  });
  
  it('hiFive(true) should throw an exception', function(){
    (() => obj.hiFive(true)).should.throw();
  });
  
  it('hiFive(null) should throw an exception', function(){
    (() => obj.hiFive(null)).should.throw();
  });
  
  it('hiFive(undefined) should throw an exception', function(){
    (() => obj.hiFive(undefined)).should.throw();
  });
  it('hiFive("6") should throw an exception', function(){
    (() => obj.hiFive('6')).should.throw();
  });
  
  it('hiFive(5,0) should return number 5', function(){
    obj.hiFive(5,0).should.be.eql(5);
  });
  
  it('hiFive(5,1) should return number 10', function(){
    obj.hiFive(5,0).should.be.eql(5);
  });
  
  it('hiFive(0,10) should return number 50', function(){
    obj.hiFive(0,10).should.be.eql(50);
  });
  
      
 }); //end of describe



describe("basic.30.control.structures.for.loFive" , function(){
  
  it('loFive(5,Infinity) should throw an exception', function(){
    (() => obj.loFive(5,Inifinity)).should.throw();
  });
  
  it('loFive() should throw an exception', function(){
    (() => obj.loFive()).should.throw();
  });
  
  it('loFive("6") should throw an exception', function(){
    (() => obj.loFive('6')).should.throw();
  });
  
  it('loFive(NaN) should throw an exception', function(){
    (() => obj.loFive(NaN)).should.throw();
  });
  
  it('loFive(true) should throw an exception', function(){
    (() => obj.loFive(true)).should.throw();
  });
  
  it('loFive(null) should throw an exception', function(){
    (() => obj.loFive(null)).should.throw();
  });
  
  it('loFive(undefined) should throw an exception', function(){
    (() => obj.loFive(undefined)).should.throw();
  });
  it('loFive(5) should throw an exception', function(){
    (() => obj.loFive(5)).should.throw();
  });
  
  it('loFive(5,0) should return number 5', function(){
    obj.loFive(5,0).should.be.eql(5);
  });
  
  it('loFive(5,1) should return number 0', function(){
    obj.loFive(5,1).should.be.eql(0);
  });
  
  it('loFive(5,2) should return number -5', function(){
    obj.loFive(5,2).should.be.eql(-5);
  });
  it('loFive(6,1) should return number 1', function(){
    obj.loFive(6,1).should.be.eql(1);
  });
  
  
  
 });// end of describe

describe ("basic.30.control.structures.bonus.naturalSum" , function(){

  it("naturalSum() should throw an exception", function(){
    (() => obj.naturalSum()).should.throw();
  });

  it("naturalSum(NaN) should throw an exception", function(){
    (() => obj.naturalSum(NaN)).should.throw();
  });

  it("naturalSum(Infinity) should throw an exception", function(){
    (() => obj.naturalSum(Infinity)).should.throw();
  });

  it('naturalSum(2) should return 3', function(){
    obj.naturalSum(2).should.be.eql(3);
  });

  it("naturalSum(5) should return 15", function(){
    obj.naturalSum(5).should.be.eql(15);
  });

   it('naturalSum(10) should return 55', function(){
    obj.naturalSum(10).should.be.eql(55);
  });

 
  
}); //end of describe 




