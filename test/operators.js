
describe('Arithmetic Operators', function(){

	describe('# Addition Operator', function(){
		it('Should add two numbers', function(){
			var x = 1 + 2 ; 
			x.should.be.equal(3);
			x.should.be.of.type('number');
		});
		it('Should add boolean value with a  number value', function(){
			var x = true + 2 ; 
			x.should.be.equal(3);
			x.should.be.of.type('number');
		});
		it('Should add boolean value with a  number value', function(){
			var x = false + 2 ; 
			x.should.be.equal(2);
			x.should.be.of.type('number');
		});
		it('Should add 2 boolean values ', function(){
			var x = true+ true ; 
			x.should.be.equal(2);
			x.should.be.of.type('number');
		});
		it('Should concatenate  string value to a number value ', function(){
			var x = 'foo' + 5 ; 
			x.should.be.equal('foo5');
			x.should.be.of.type('string');
		});
		it('Should concatenate  string value to a boolean value ', function(){
			var x = 'foo' + true ; 
			x.should.be.equal('footrue');
			x.should.be.of.type('string');
		});
		it('Should concatenate  string value to a string alue ', function(){
			var x = 'foo' + 'bar' ; 
			x.should.be.equal('foobar');
			x.should.be.of.type('string');
		});
		it('Should concatenate string number like value to a number value and return a string', function(){
			var x = '10' + 5 ; 
			x.should.be.equal('105');
			x.should.be.of.type('string');
		});
		it('Should concatenate string number like value to a booleanvalue and return a string', function(){
			var x = '10' + true ; 
			x.should.be.equal('10true');
			x.should.be.of.type('string');
		});
		it('Should concatenate a number value with a string number like value to return a string', function(){
			var x = 10 + '5' ; 
			x.should.be.equal('105');
			x.should.be.of.type('string');
		});
	
	});
	
	describe('# subtraction', function(){
		it('Should subtract  numbers', function(){
			var x = 10 - 7 ; 
			x.should.be.equal(3);
			x.should.be.of.type('number');
		});
		it('Should subtract a string value from a number to return a NaN', function(){
			var x = 10 - 'foo' ; 
			x.should.be.NaN;
			x.should.be.of.type('number');
		});
		it('Should subtract a number  value from a string value to return a NaN', function(){
			var x = 'foo' - 10 ; 
			x.should.be.NaN;
			x.should.be.of.type('number');
		});
		it('Should subtract a number value from a string number like value to return a number', function(){
			var x = '10' - 5 ; 
			x.should.be.equal(5);
			x.should.be.of.type('number');
		});
		it('Should subtract a string number like value from a number to return a number', function(){
			var x = 10 - '5' ; 
			x.should.be.equal(5);
			x.should.be.of.type('number');
		});
	
	});
	

 	describe('# Division ' , function(){

 		// function name = division
 		// @todo use the division operator to divide number value 1 with number value 2 
 		// @todo use the division operator to divide number value 1.0 with number value 2.0 
 		// @todo use the division operator to divide number value 2.0 with number value 0 
 		// @todo use the division operator to divide number value 2.0 with number value 0.0 
 		// @todo use the division operator to divide number value 2.0 with number value -0 
		it ('should divide a number value with another number value to produce a number value', function(){
			var x = 1/2;
			x.should.be.equal(0.5);
			x.should.be.of.type('number');
		});
	
	});
	
	describe('# Unary Plus', function(){

		it('Should convert strings values to numbers', function(){
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

