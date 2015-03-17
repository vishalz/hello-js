var obj = require('../src/basic.30.expressions.functions');

describe("basic.30.expressions.functions" , function(){

	it(" myFunction_type should be function", function(){
		obj.myFunction.should.be.of.type('function');
		obj.myFunction_type.should.be.exactly("function");
	});
	it(" v2 should be = 25 and of type number ", function(){
		obj.v2.should.be.exactly(25).and.be.of.type('number');
		obj.v2_type.should.be.exactly("number");
		obj.v2_value.should.be.exactly("25");
	});

	it(" v3 should be = 9 and of type number ", function(){
		obj.v3.should.be.exactly(9).and.be.of.type('number');
		obj.v3_type.should.be.exactly("number");
		obj.v3_value.should.be.exactly("9");
	});

	it(" v4 should be= 4 and of type number", function(){
		obj.v4.should.be.exactly(4).and.be.of.type('number');
		obj.v4_type.should.be.exactly("number");
		obj.v4_value.should.be.exactly("4");
	});

	it(" v5 should be = NaN and of type number ", function(){
		obj.v5.should.be.NaN.and.be.of.type('number');
		obj.v5_type.should.be.exactly("number");
		obj.v5_value.should.be.exactly("NaN");
	});

	it(" v6 should be= 13  and of type number", function(){
		obj.v6.should.be.exactly(13).and.be.of.type('number');
		obj.v6_type.should.be.exactly("number");
		obj.v6_value.should.be.exactly("13");
	});

	it(" v7 should be= 36 and of type number", function(){
		obj.v7.should.be.exactly(36).and.be.of.type('number');
		obj.v7_type.should.be.exactly("number");
		obj.v7_value.should.be.exactly("36");
	});

	it(" v8 should be= 100  and of type number", function(){
		obj.v8.should.be.exactly(100).and.be.of.type('number');
		obj.v8_type.should.be.exactly("number");
		obj.v8_value.should.be.exactly("100");
	});

	it(" v9 should be= 16  and of type number", function(){
		obj.v9.should.be.exactly(16).and.be.of.type('number');
		obj.v9_type.should.be.exactly("number");
		obj.v9_value.should.be.exactly("16");
	});

	it(" v10 should be= 16 and of type number", function(){
		obj.v10.should.be.exactly(16).and.be.of.type('number');
		obj.v10_type.should.be.exactly("number");
		obj.v10_value.should.be.exactly("16");
	});



});
