var obj = require('../src/basic.30.arrays');

describe("basic.30.arrays.general" , function(){
  
  it("fruits should be of an Instance of Array and have a length of 3", function(){
    obj.fruits.should.be.eql(["Apple", "Banana", "Kiwi"]);
    obj.v1_value.should.be.exactly("3");
	});

  it('v2 should be equal to "Apple" and of type string', function(){
    obj.v2.should.be.exactly("Apple");
    obj.v2_value.should.be.exactly("Apple");
    obj.v2_type.should.be.exactly("string");
	});

  it('v3 should be equal to undefined' , function(){
    (typeof(obj.v3) === 'undefined').should.be.true;
    obj.v3_value.should.be.exactly("undefined");
    obj.v3_type.should.be.exactly("undefined");
	});

  it('v4 should be equal to "Kiwi" and of type string', function(){
    obj.v4.should.be.exactly("Kiwi");
    obj.v4_value.should.be.exactly("Kiwi");
    obj.v4_type.should.be.exactly("string");
	});

  it('v5 should be equal to 3  ', function(){
    obj.veggies.should.be.eql(["Cabbage","Celery","Potato"]);
    obj.v5.should.be.exactly(3);
    obj.v5_value.should.be.exactly("3");
	});

  it('v6 should be equal to "Cabbage"  ', function(){
    obj.v6.should.be.exactly("Cabbage");
    obj.v6_value.should.be.exactly("Cabbage");
	});

  it('v7 should be equal to "Celery"  ', function(){
    obj.v7.should.be.exactly("Celery");
    obj.v7_value.should.be.exactly("Celery");
	});

  it('v8 should be equal to "Potato"  ', function(){
    obj.v8.should.be.exactly("Potato");
    obj.v8_value.should.be.exactly("Potato");
	});

  it('v9 should be undefined  ', function(){
    (typeof(obj.v9) === "undefined").should.be.true;
    obj.v9_value.should.be.exactly("undefined");
	});

  it('v10 should be 10  ', function(){
    obj.v10.should.be.exactly(10);
    obj.v10_value.should.be.exactly("10");
	});

   it('v11 should be undefined  ', function(){
    (typeof(obj.v11) === "undefined").should.be.true;
    obj.v11_value.should.be.exactly("undefined");
	});
  

}); //end of describe 



describe ("basic.30.arrays.add" , function(){

  it(' v12 should be 2 ', function(){
    obj.dairy.should.be.eql(["Milk","Cheese"]);
    obj.v12_value.should.be.exactly("2");
	});

  it('v14 should be 3 , v15 should be "rye" ', function(){
    obj.breads.should.be.eql(["white","wheat","rye"]);
    obj.v14.should.be.exactly(3);
    obj.v14_value.should.be.exactly("3");
    obj.v15.should.be.exactly("rye");
    obj.v15_value.should.be.exactly("rye");
	});

   it('v16 should be 3 , v17 should be "corn" ', function(){
    obj.grains.should.be.eql(["rice","barley","corn"]);
    obj.v16.should.be.exactly(3);
    obj.v16_value.should.be.exactly("3");
    obj.v17.should.be.exactly("corn");
    obj.v17_value.should.be.exactly("corn");
  });


});// end of describe


describe ("basic.30.arrays.remove" , function(){

 it('v18 should be "basmati" , v19 should be undefined ', function(){
    obj.rice.should.be.eql(["white","brown"]);
    obj.v18.should.be.exactly("basmati");
    obj.v18_value.should.be.exactly("basmati");
    (typeof(obj.v19) === 'undefined').should.be.exactly(true);
    obj.v19_value.should.be.exactly("undefined");
  });


 it('v20 should be "fusilli" , v21 should be "spaghetti" ', function(){
    obj.pasta.should.be.eql(["spaghetti","fettuccine"]);
    obj.v20.should.be.exactly("fusilli");
    obj.v20_value.should.be.exactly("fusilli");
    obj.v21.should.be.exactly("spaghetti");
    obj.v21_value.should.be.exactly("spaghetti");
  });




});// end of describe


describe ("basic.30.arrays.bonus.isGrapeFruit" , function(){

  it("isGrapeFruit() should return false", function(){
    obj.isGrapeFruit().should.be.exactly(false);
  });

  it("isGrapeFruit('grape fruit') should return false", function(){
    obj.isGrapeFruit("grape fruit").should.be.exactly(false);
  });

  it('isGrapeFruit(["Apple",1,true]) should return false', function(){
    obj.isGrapeFruit(["Apple",1,true]).should.be.exactly(false);
  });
  
  it('isGrapeFruit(["Apple","grape fruit"]) should return true', function(){
    obj.isGrapeFruit(["Apple", "grape fruit"]).should.be.exactly(true);

  });

}); //end of describe 



describe ("basic.30.arrays.bonus.stringify" , function(){

  it("stringify() should return false", function(){
    obj.stringify().should.be.exactly(false);
  });

  it("stringify('grape fruit') should return false", function(){
    obj.stringify("grape fruit").should.be.exactly(false);
  });

  it('stringify(["Apple",1,true]) should return ["Apple"]', function(){
    obj.stringify(["Apple",1,true]).should.be.eql(["Apple"]);
  });
  
  
}); //end of describe 
