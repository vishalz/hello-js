var obj = require('../src/grammar.types.b30');

describe("Grammer & Types Level Basic 30" , function(){
	it(" v3 should be undefined ", function(){
		(typeof (obj.v3) === 'undefined').should.be.true;
	});

	it(" v4 should be null ", function(){
		(obj.v4 === null).should.be.true;
	});
	it(" v5 should be of type number and value 5 ", function(){
		obj.v5.should.be.exactly(5).and.be.of.type('number');
	});

	it(" v6 should have a string value = foo ", function(){
		obj.v6.should.be.exactly('foo').and.be.of.type('string');	
	});
	it(" v7 should be a boolean of type true", function(){
		obj.v7.should.be.exactly(true).and.be.of.type('boolean');
	});
	it(" v8 should be of type object", function(){
		obj.v8.should.be.of.type('object');
		obj.v8.should.have.property('name',"Sponge Bob");
		obj.v8.should.have.property('age',100);
	});

});
