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

describe("basic.30.operators.logical-and " , function(){
	it(" v11 should be true and of type boolean ", function(){
		obj.v11.should.be.exactly(true).and.be.of.type('boolean');
		obj.v11_type.should.be.exactly("boolean");
		obj.v11_value.should.be.exactly("true");
	});

	it(" v12 should be false and of type boolean ", function(){
		obj.v12.should.be.exactly(false).and.be.of.type('boolean');
		obj.v12_type.should.be.exactly("boolean");
		obj.v12_value.should.be.exactly("false");
	});

	it(" v13 should be false and of type boolean ", function(){
		obj.v13.should.be.exactly(false).and.be.of.type('boolean');
		obj.v13_type.should.be.exactly("boolean");
		obj.v13_value.should.be.exactly("false");
	});

	it(" v14 should be dog and of type string ", function(){
		obj.v14.should.be.exactly('dog').and.be.of.type('string');
		obj.v14_type.should.be.exactly("string");
		obj.v14_value.should.be.exactly("dog");
	});

	it(" v15 should be false and of type boolean ", function(){
		obj.v15.should.be.exactly(false).and.be.of.type('boolean');
		obj.v15_type.should.be.exactly("boolean");
		obj.v15_value.should.be.exactly("false");
	});

	it(" v16 should be dog and of type string ", function(){
		obj.v16.should.be.exactly('dog').and.be.of.type('string');
		obj.v16_type.should.be.exactly("string");
		obj.v16_value.should.be.exactly("dog");
	});

	it(" v17 should be true and of type boolean ", function(){
		obj.v17.should.be.exactly(true).and.be.of.type('boolean');
		obj.v17_type.should.be.exactly("boolean");
		obj.v17_value.should.be.exactly("true");
	});

	it(" v18 should be false and of type boolean ", function(){
		obj.v18.should.be.exactly(false).and.be.of.type('boolean');
		obj.v18_type.should.be.exactly("boolean");
		obj.v18_value.should.be.exactly("false");
	});

	it(" v19 should be 10 and of type number ", function(){
		obj.v19.should.be.exactly(10).and.be.of.type('number');
		obj.v19_type.should.be.exactly("number");
		obj.v19_value.should.be.exactly("10");
	});

	it(" v20 should be 0 and of type number ", function(){
		obj.v20.should.be.exactly(0).and.be.of.type('number');
		obj.v20_type.should.be.exactly("number");
		obj.v20_value.should.be.exactly("0");
	});

	it(" v21 should be NaN and of type number ", function(){
		obj.v21.should.be.NaN.and.be.of.type('number');
		obj.v21_type.should.be.exactly("number");
		obj.v21_value.should.be.exactly("NaN");
	});

	it(" v22 should be true and of type object", function(){
		(obj.v22 === null).should.be.true;
		(typeof(obj.v22) === 'object').should.be.true;
		obj.v22_type.should.be.exactly("object");
		obj.v22_value.should.be.exactly("null");
	});

	it(" v23 should be empty string  and of type string ", function(){
		obj.v23.should.be.exactly("").and.be.of.type('string');
		obj.v23_type.should.be.exactly("string");
		obj.v23_value.should.be.exactly("");
	});

	
	

	});

describe("basic.30.operators.logical-ternary " , function(){
	it(" v24 should be true and of type boolean ", function(){
		obj.v24.should.be.exactly(true).and.be.of.type('boolean');
		obj.v24_type.should.be.exactly("boolean");
		obj.v24_value.should.be.exactly("true");
	});

	it(" v25 should be false and of type boolean ", function(){
		obj.v25.should.be.exactly(false).and.be.of.type('boolean');
		obj.v25_type.should.be.exactly("boolean");
		obj.v25_value.should.be.exactly("false");
	});


	it(" v26 should be cat  and of type string ", function(){
		obj.v26.should.be.exactly("cat").and.be.of.type('string');
		obj.v26_type.should.be.exactly("string");
		obj.v26_value.should.be.exactly("cat");
	});


	it(' v27 should be "dog" and of type string ', function(){
		obj.v27.should.be.exactly("dog").and.be.of.type('string');
		obj.v27_type.should.be.exactly("string");
		obj.v27_value.should.be.exactly("dog");
	});


	it(' v28 should be "dog" and of type string ', function(){
		obj.v28.should.be.exactly("dog").and.be.of.type('string');
		obj.v28_type.should.be.exactly("string");
		obj.v28_value.should.be.exactly("dog");
	});


	it(' v29 should be "dog" and of type string ', function(){
		obj.v29.should.be.exactly("dog").and.be.of.type('string');
		obj.v29_type.should.be.exactly("string");
		obj.v29_value.should.be.exactly("dog");
	});


	it(' v30 should be "dog" and of type string ', function(){
		obj.v30.should.be.exactly("dog").and.be.of.type('string');
		obj.v30_type.should.be.exactly("string");
		obj.v30_value.should.be.exactly("dog");
	});


	it(" v32 should be 6 and of type number ", function(){
		obj.v32.should.be.exactly(6).and.be.of.type('number');
		obj.v32_value.should.be.exactly("6");
	});


	it(" v34 should be 4 and of type number ", function(){
		obj.v34.should.be.exactly(4).and.be.of.type('number');
		obj.v34_value.should.be.exactly("4");
	});



	});

describe("basic.30.operators.logical-not " , function(){
	it(" v35 should be false and of type boolean ", function(){
		obj.v35.should.be.exactly(false).and.be.of.type('boolean');
		obj.v35_type.should.be.exactly("boolean");
		obj.v35_value.should.be.exactly("false");
	});
	it(" v36 should be true and of type boolean ", function(){
		obj.v36.should.be.exactly(true).and.be.of.type('boolean');
		obj.v36_type.should.be.exactly("boolean");
		obj.v36_value.should.be.exactly("true");
	});
	it(" v37 should be false and of type boolean ", function(){
		obj.v37.should.be.exactly(false).and.be.of.type('boolean');
		obj.v37_type.should.be.exactly("boolean");
		obj.v37_value.should.be.exactly("false");
	});	
	it(" v38 should be true and of type boolean ", function(){
		obj.v38.should.be.exactly(true).and.be.of.type('boolean');
		obj.v38_type.should.be.exactly("boolean");
		obj.v38_value.should.be.exactly("true");
	});	
	it(" v39 should be true and of type boolean ", function(){
		obj.v39.should.be.exactly(true).and.be.of.type('boolean');
		obj.v39_type.should.be.exactly("boolean");
		obj.v39_value.should.be.exactly("true");
	});	
	it(" v40 should be true and of type boolean ", function(){
		obj.v40.should.be.exactly(true).and.be.of.type('boolean');
		obj.v40_type.should.be.exactly("boolean");
		obj.v40_value.should.be.exactly("true");
	});
	it(" v41 should be true and of type boolean ", function(){
		obj.v41.should.be.exactly(true).and.be.of.type('boolean');
		obj.v41_type.should.be.exactly("boolean");
		obj.v41_value.should.be.exactly("true");
	});
	it(" v43 should be true and of type boolean ", function(){
		obj.v43.should.be.exactly(true).and.be.of.type('boolean');
		obj.v43_type.should.be.exactly("boolean");
		obj.v43_value.should.be.exactly("true");
	});

	

	});

