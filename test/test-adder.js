var adder = require('../src/adder');
describe ("Adder Module" , function(){
	describe("#addIt Function", function(){
		it("Should Add two numbers and return the sum as a number",function(){
			var x = adder.addIt(2,3);
			x.should.be.exactly(5).and.of.type('number');		
		});
		it("Should Add two boolean true vaues  and return the sum as 2 ",function(){
			var x = adder.addIt(true,true);
			x.should.be.exactly(2).and.of.type('number');		
		});
		it("Should concatentate 2 strings and return a string ",function(){
			var x = adder.addIt("foo", "bar");
			x.should.be.exactly("foobar").and.of.type('string');		
		});
	
	
	
	}); // end of describe addIt function

}); //end of describe 'Adder Module'

