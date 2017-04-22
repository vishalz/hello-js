
var obj = require('../src/basic.30.scope');

describe ("basic.30.scope.block" , function(){

it("v1 should be fruits and v2 should be veggies",function(){;
  obj.v1.should.be.eql("fruits");
  obj.v1_value.should.be.eql("fruits");
  obj.v2.should.be.eql("veggies");
  obj.v2_value.should.be.eql("veggies");
});

it("v3 = 'bread', v4='fruits' , v5 = 'veggies'",function(){;
  obj.v3.should.be.eql("bread");
  obj.v3_value.should.be.eql("bread");
  obj.v4.should.be.eql("fruits");
  obj.v4_value.should.be.eql("fruits");
  obj.v5.should.be.eql("veggies");
  obj.v5_value.should.be.eql("veggies");
});

it("v6 = 'bread', v7='bread' , v8 = 'veggies'",function(){;
  obj.v6.should.be.eql("bread");
  obj.v6_value.should.be.eql("bread");
  obj.v7.should.be.eql("bread");
  obj.v7_value.should.be.eql("bread");
  obj.v8.should.be.eql("veggies");
  obj.v8_value.should.be.eql("veggies");
});



}); //end of describe 
