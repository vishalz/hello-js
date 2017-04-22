var obj = require('../src/basic.60.algo');



describe ("basic.60.algo.general" , function(){

  it("fibonacciNum() should return false", function(){
    obj.fibonacciNum().should.be.eql(false);
  });

  it('fibonacciNum(1) should return 1', function(){
    obj.fibonacciNum(1).should.be.eql(1);
  });

  it("fibonacciNum(2) should return 1", function(){
    obj.fibonacciNum(2).should.be.eql(1);
  });

   it('fibonacciNum(3) should return 2', function(){
    obj.fibonacciNum(3).should.be.eql(2);
  });

  it('fibonacciNum(4) should return 3', function(){
    obj.fibonacciNum(4).should.be.eql(3);
  });
 
  
}); //end of describe 


