var obj = require('../src/arithmetic.operators.b30');

describe("Arithmetic Operators  Level Basic 30" , function(){
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
