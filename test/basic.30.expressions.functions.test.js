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
		obj.v5.should.be.NaN;
		obj.v5.should.be.of.type('number');
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

	it(" incremento_type should be function", function(){
		obj.incremento.should.be.of.type('function');
		obj.incremento_type.should.be.exactly("function");
	});

	it(" v11 should be= 6 and of type number", function(){
		obj.v11.should.be.exactly(6).and.be.of.type('number');
		obj.v11_type.should.be.exactly("number");
		obj.v11_value.should.be.exactly("6");
	});

	it(" v12 should be= 11 and of type number", function(){
		obj.v12.should.be.exactly(11).and.be.of.type('number');
		obj.v12_type.should.be.exactly("number");
		obj.v12_value.should.be.exactly("11");
	});

	it(" v13 should be= 12 and of type number", function(){
		obj.v13.should.be.exactly(12).and.be.of.type('number');
		obj.v13_type.should.be.exactly("number");
		obj.v13_value.should.be.exactly("12");
	});

	it(" v14 should be= 5 , v15 should be = 6 ", function(){
		obj.v14.should.be.exactly(5).and.be.of.type('number');
		obj.v14_value.should.be.exactly("5");
		obj.v15.should.be.exactly(6).and.be.of.type('number');
		obj.v15_value.should.be.exactly("6");
	});

	it(" v16 should be= 7 and of type number", function(){
		obj.v16.should.be.exactly(7).and.be.of.type('number');
		obj.v16_type.should.be.exactly("number");
		obj.v16_value.should.be.exactly("7");
	});

	it(" v17 should be= 31 and of type number", function(){
		obj.v17.should.be.exactly(31).and.be.of.type('number');
		obj.v17_type.should.be.exactly("number");
		obj.v17_value.should.be.exactly("31");
	});

	it(" v18 should be= 26 and of type number", function(){
		obj.v18.should.be.exactly(26).and.be.of.type('number');
		obj.v18_type.should.be.exactly("number");
		obj.v18_value.should.be.exactly("26");
	});

	it(" v19 should be of type object", function(){
		obj.v19.should.be.of.type('object');
		obj.v19.should.have.property('name',"Sponge Bob");
		obj.v19.should.have.property('age',100);
	});

	it(" v20 should be= 101 and of type number", function(){
		obj.v20.should.be.exactly(101).and.be.of.type('number');
		obj.v20_type.should.be.exactly("number");
		obj.v20_value.should.be.exactly("101");
	});

	it(" v21 should be= Sponge Bob1  and of type string", function(){
		obj.v21.should.be.exactly("Sponge Bob1").and.be.of.type('string');
		obj.v21_type.should.be.exactly("string");
		obj.v21_value.should.be.exactly("Sponge Bob1");
	});



});
