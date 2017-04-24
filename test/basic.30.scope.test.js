
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


}); //end of describe 


describe ("basic.30.scope.function" , function(){

it("v6 = 'bread', v7='bread' , v8 = 'veggies'",function(){;
  obj.v6.should.be.eql("bread");
  obj.v6_value.should.be.eql("bread");
  obj.v7.should.be.eql("bread");
  obj.v7_value.should.be.eql("bread");
  obj.v8.should.be.eql("veggies");
  obj.v8_value.should.be.eql("veggies");
});

}); //end of describe 

describe ("basic.30.scope.reference" , function(){

it("v9 = 'fruity', v10 = 'yellow'",function(){;
  obj.v9.should.be.eql("fruity");
  obj.v9_value.should.be.eql("fruity");
  obj.v10.should.be.eql("yellow");
  obj.v10_value.should.be.eql("yellow");
});

it("v11 = 'toyota', v10 = 'tacoma'",function(){;
  obj.v11.should.be.eql("toyota");
  obj.v11_value.should.be.eql("toyota");
  obj.v12.should.be.eql("tacoma");
  obj.v12_value.should.be.eql("tacoma");
});

}); //end of describe 

describe ("basic.30.scope.value" , function(){

it("v14 = 100, v15 = 200 ",function(){;
  obj.v14.should.be.eql(100);
  obj.v14_value.should.be.eql("100");
  obj.v15.should.be.eql(200);
  obj.v15_value.should.be.eql("200");
});

it("v16 = 'bowie', v17 = 'freddie'",function(){;
  obj.v16.should.be.eql("bowie");
  obj.v16_value.should.be.eql("bowie");
  obj.v17.should.be.eql("freddie");
  obj.v17_value.should.be.eql("freddie");
});

}); //end of describe 

describe ("basic.30.scope.closure" , function(){

it("v18= 210, v19=310, v20=220 and v21=320",function(){;
  obj.v18.should.be.eql(210);
  obj.v18_value.should.be.eql("210");
  obj.v19.should.be.eql(310);
  obj.v19_value.should.be.eql("310");
  obj.v20.should.be.eql(220);
  obj.v20_value.should.be.eql("220");
  obj.v21.should.be.eql(320);
  obj.v21_value.should.be.eql("320");
});

}); //end of describe 


