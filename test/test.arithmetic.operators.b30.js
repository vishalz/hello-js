var obj = require('../src/arithmetic.operators.b30');

describe("Arithmetic Operators  Level Basic 30 # Addition ##" , function(){
	it(" v3 should be 30 ", function(){
		obj.v3.should.be.exactly(30).and.be.of.type('number');
		obj.v3_type.should.be.exactly("number");
		obj.v3_value.should.be.exactly("30");
	});
	it(" v4 should be = 11 and of type number ", function(){
		obj.v4.should.be.exactly(11).and.be.of.type('number');
		obj.v4_type.should.be.exactly("number");
		obj.v4_value.should.be.exactly("11");
	});
	it(" v5 should be = 10 and of type number ", function(){
		obj.v5.should.be.exactly(10).and.be.of.type('number');
		obj.v5_type.should.be.exactly("number");
		obj.v5_value.should.be.exactly("10");
	});
	it(" v6 should be = 0 and of type number ", function(){
		obj.v6.should.be.exactly(0).and.be.of.type('number');
		obj.v6_type.should.be.exactly("number");
		obj.v6_value.should.be.exactly("0");
	});
	it(" v7 should be = foo10 and of type string ", function(){
		obj.v7.should.be.exactly("foo10").and.be.of.type('string');
		obj.v7_type.should.be.exactly("string");
		obj.v7_value.should.be.exactly("foo10");
	});
	it(" v8 should be = footrue and of type string ", function(){
		obj.v8.should.be.exactly("footrue").and.be.of.type('string');
		obj.v8_type.should.be.exactly("string");
		obj.v8_value.should.be.exactly("footrue");
	});
	it(" v9 should be = foofalse and of type string ", function(){
		obj.v9.should.be.exactly("foofalse").and.be.of.type('string');
		obj.v9_type.should.be.exactly("string");
		obj.v9_value.should.be.exactly("foofalse");
	});
	it(" v10 should be = foobar  and of type string ", function(){
		obj.v10.should.be.exactly("foobar").and.be.of.type('string');
		obj.v10_type.should.be.exactly("string");
		obj.v10_value.should.be.exactly("foobar");
	});
	});



describe("Arithmetic Operators  Level Basic 30 # Subtraction ##" , function(){

	it(" v11 should be = 50 and of type number", function(){
		obj.v11.should.be.exactly(50).and.be.of.type('number');
		obj.v11_type.should.be.exactly("number");
		obj.v11_value.should.be.exactly("50");
	});
	it(" v12 should be = NaN  and of type number ", function(){
		obj.v12.should.be.NaN.and.be.of.type('number');
		obj.v12_type.should.be.exactly("number");
		obj.v12_value.should.be.exactly("NaN");
	});
	it(" v13 should be = 50 and of type number ", function(){
		obj.v13.should.be.exactly(50).and.be.of.type('number');
		obj.v13_type.should.be.exactly("number");
		obj.v13_value.should.be.exactly("50");
	});
	it(" v14 should be = 50 and of type number ", function(){
		obj.v14.should.be.exactly(50).and.be.of.type('number');
		obj.v14_type.should.be.exactly("number");
		obj.v14_value.should.be.exactly("50");
	});

});

describe("Arithmetic Operators  Level Basic 30 # Division ##" , function(){

	it(" v15 should be = 0.5 and of type number", function(){
		obj.v15.should.be.exactly(0.5).and.be.of.type('number');
		obj.v15_type.should.be.exactly("number");
		obj.v15_value.should.be.exactly("0.5");
	});
	it(" v16 should be = 0.5 and of type number", function(){
		obj.v16.should.be.exactly(0.5).and.be.of.type('number');
		obj.v16_type.should.be.exactly("number");
		obj.v16_value.should.be.exactly("0.5");
	});
	it(" v17 should be = Infinity andof type number", function(){
		obj.v17.should.be.exactly(Infinity).and.be.of.type('number');
		obj.v17_type.should.be.exactly("number");
		obj.v17_value.should.be.exactly("Infinity");
	});
	it(" v18 should be = Infinity and of type number", function(){
		obj.v18.should.be.exactly(Infinity).and.be.of.type('number');
		obj.v18_type.should.be.exactly("number");
		obj.v18_value.should.be.exactly("Infinity");
	});
	it(" v19 should be = -Infinity and of type number", function(){
		obj.v19.should.be.exactly(-Infinity).and.be.of.type('number');
		obj.v19_type.should.be.exactly("number");
		obj.v19_value.should.be.exactly("-Infinity");
	});
	


});

