var obj = require('../src/basic.30.types');

describe("basic.30.types.general" , function(){
	it(" v3 should be undefined ", function(){
		(typeof (obj.v3) === 'undefined').should.be.true;
		obj.v3_type.should.be.exactly("undefined");
	});

	it(" v4 should be null ", function(){
		(obj.v4 === null).should.be.true;
		obj.v4_type.should.be.exactly("object");
	});
	it(" v5 should be of type number and value 5 ", function(){
		obj.v5.should.be.exactly(5).and.be.of.type('number');
		obj.v5_type.should.be.exactly("number");
	});

	it(" v6 should have a string value = foo ", function(){
		obj.v6.should.be.exactly('foo').and.be.of.type('string');	
		obj.v6_type.should.be.exactly("string");
	});
	it(" v7 should be a boolean of type true", function(){
		obj.v7.should.be.exactly(true).and.be.of.type('boolean');
		obj.v7_type.should.be.exactly("boolean");
	});
	it(" v8 should be of type object", function(){
		obj.v8.should.be.of.type('object');
		obj.v8.should.have.property('name',"Sponge Bob");
		obj.v8.should.have.property('age',100);
	});
	it(" v11 should be of type string and have a string value = false ", function(){
		obj.v11.should.be.exactly('false').and.be.of.type('string');	
		obj.v11_type.should.be.exactly("string");
	});
	it(" v12 should be of type string and hould have a string value = 100 ", function(){
		obj.v12.should.be.exactly('100').and.be.of.type('string');	
		obj.v12_type.should.be.exactly("string");
	});
	it(" v13 should be of type string and should have a string value =  undefined ", function(){
		obj.v13.should.be.exactly('undefined').and.be.of.type('string');	
		obj.v13_type.should.be.exactly("string");
	});
	it(" v15 should be of type string and should have a string value = NaN ", function(){
		obj.v15.should.be.exactly('NaN').and.be.of.type('string');	
		obj.v15_type.should.be.exactly("string");
	});

}); // end of Describe 

describe("basic.30.types.bonus" , function(){
	it(" v1000 should be 6 , v1001 should be 5 ", function(){
		obj.v1000.should.be.exactly(6);
		obj.v1001.should.be.exactly(5);
		obj.v1000_value.should.be.exactly("6");
		obj.v1001_value.should.be.exactly("5");
	});

	it(" v1002,v1003 should be 'Patrick Star'", function(){
		obj.v1002_value.should.be.exactly("Patrick Star");
		obj.v1003_value.should.be.exactly("Patrick Star");

	});



}); // end of Describe 
