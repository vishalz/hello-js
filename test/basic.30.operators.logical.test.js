var obj = require('../src/basic.30.operators.logical.js');

describe("basic.30.operators.logical-or " , function(){
	it(" v1 should be true and of type boolean ", function(){
		obj.v1.should.be.exactly(true).and.be.of.type('boolean');
		obj.v1_type.should.be.exactly("boolean");
		obj.v1_value.should.be.exactly("true");
	});

	it(" v2 should be true and of type boolean ", function(){
		obj.v2.should.be.exactly(true).and.be.of.type('boolean');
		obj.v2_type.should.be.exactly("boolean");
		obj.v2_value.should.be.exactly("true");
	});

	
it(" v3 should be true and of type boolean ", function(){
		obj.v3.should.be.exactly(true).and.be.of.type('boolean');
		obj.v3_type.should.be.exactly("boolean");
		obj.v3_value.should.be.exactly("true");
	});

	
it(" v4 should be = cat and of type string ", function(){
		obj.v4.should.be.exactly("cat").and.be.of.type('string');
		obj.v4_type.should.be.exactly("string");
		obj.v4_value.should.be.exactly("cat");
	});

	
it(" v5 should be = dog and of type string ", function(){
		obj.v5.should.be.exactly("dog").and.be.of.type('string');
		obj.v5_type.should.be.exactly("string");
		obj.v5_value.should.be.exactly("dog");
	});

	
it(" v6 should be = cat  and of type string ", function(){
		obj.v6.should.be.exactly("cat").and.be.of.type('string');
		obj.v6_type.should.be.exactly("string");
		obj.v6_value.should.be.exactly("cat");
	});

	
it(" v7 should be = 5  and of type number ", function(){
		obj.v7.should.be.exactly(5).and.be.of.type('number');
		obj.v7_type.should.be.exactly("number");
		obj.v7_value.should.be.exactly("5");
	});

	
it(" v8 should be =10 and of type number ", function(){
		obj.v8.should.be.exactly(10).and.be.of.type('number');
		obj.v8_type.should.be.exactly("number");
		obj.v8_value.should.be.exactly("10");
	});

	
it(" v9 should be = foo and of type string ", function(){
		obj.v9.should.be.exactly("foo").and.be.of.type('string');
		obj.v9_type.should.be.exactly("string");
		obj.v9_value.should.be.exactly("foo");
	});

	
it(" v10 should be = null and of type object", function(){
		(obj.v10 === null).should.be.true;
		(typeof obj.v10 === 'object').should.be.true;
		obj.v10_type.should.be.exactly("object");
		obj.v10_value.should.be.exactly("null");
	});



	});


