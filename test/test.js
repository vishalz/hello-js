var should = require('should');

describe('Arithmetici Operators', function(){
	describe('Unary Plus', function(){

		it('Should convert strigns values to numbers', function(){
			var str = "500";
			str = +str;
			str.should.be.of.type('number');	
			str.should.be.equal(500);	
		});
		it('Should convert non number string values to NaN', function(){
			var str = "foo";
			str = +str;
			str.should.be.of.type('number');	
			str.should.be.NaN;
		});

	
		it('Should convert boolean values to numbers', function(){
			var bool = true;
			bool = +bool;
			bool.should.be.of.type('number');	
			bool.should.be.equal(1);	
		});


	});
});

