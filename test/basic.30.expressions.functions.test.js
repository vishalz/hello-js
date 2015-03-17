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


});
