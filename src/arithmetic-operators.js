
var should = require('should');



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_(.2B)


// Arithmetic Operators
/**
 * function name = addition 
 * @todo use the addition  operator to add two number values and print the result 
 * @todo use the addition  operator to add boolean true value to a  number value and print the result 
 * @todo use the addition  operator to add boolean false value to a  number value and print the result 
 * @todo use the addition  operator to add boolean true value to boolean true value.
 * @todo use the addition  operator to add boolean false value to boolean true value. 
 * @todo use the addition  operator to add a string value "foo" to a number value.
 * @todo use the addition  operator to add a string value "foo" to a boolean true value.
 * @todo use the addition  operator to add a string value "foo" to a boolean false value.
 * @todo use the addition  operator to add a string value "foo" to another string value.
 * @todo use the addition  operator to add a string value "5" to a number value 10.
 * @todo use the addition  operator to add a string value "5" to a boolean true value.
 * function name = subtraction
 * @todo use the subtraction operator to subtract a number value 100 from another number value 50 .
 * @todo use the subtraction operator to subtract a string value "foo" from a number 100.
 * @todo use the subtraction operator to subtract a string value "50" from a number 100.
 * @todo use the subtraction operator to subtract number 50 from string value "100".
 * function name = division
 * @todo use the division operator to divide number value 1 with number value 2 
 * @todo use the division operator to divide number value 1.0 with number value 2.0 
 * @todo use the division operator to divide number value 2.0 with number value 0 
 * @todo use the division operator to divide number value 2.0 with number value 0.0 
 * @todo use the division operator to divide number value 2.0 with number value -0 
 * function name = multiplication
 * @todo use multiplication operator to multipy number value 2 with number value 2 
 * @todo use multiplication operator to multipy number value -2 with number value 2 
 * @todo use multiplication operator to multipy number value infinity with number value 2 
 * @todo use multiplication operator to multipy number value infinity with number value 0 
 * @todo use multiplication operator to multipy number value infinity with number value infinity
 * @todo use multiplication operator to multipy number value infinity with string value "foo" 
 * function name = remainder
 * @todo pass number value 12 as 1st operand and 5 as 2nd operand to the remainder operator and print the result
 *
 * function name = increment
 * @todo declare a variable x, assign number value 5 to x
 * @todo declare a variable y and assign it value of x++
 * @todo print value of x and print value of y
 * @todo declare a variable a, assign number value 5 to a
 * @todo declare a variable b and assign it value of ++a
 * @todo print value of a and print value of b
 * 
 * function name = decrement
 * @todo declare a variable x, assign number value 5 to x
 * @todo declare a variable y and assign it value of x--
 * @todo print value of x and print value of y
 * @todo declare a variable a, assign number value 5 to a
 * @todo declare a variable b and assign it value of --a
 * @todo print value of a and print value of b
 *

 *
 *
 *
 */

function unaryPlus(){
 /*
 * @todo decalre a variable str = "5".Convert str to a number using the unary plus operator and print its type and value
 * @todo decalre a variable bool = true.Convert bool to a number  using the unary plus and print its type and value
 * @todo decalre a variable str2 = "foo".Convert str2 to a number using the unary plus and print its type and value
 */


	console.log ("-----------------In function unaryPlus-------------------------");		
	var str = "500";
	str = +str;
	str.should.be.equal(500);
	str.should.be.of.type('number');

	var bool = true;
	bool = +bool;
	bool.should.be.equal(1);
	bool.should.be.of.type('number');

	
	var str2 = "foo";
	str2 = +str2;
  str2.should.be.NaN;
	str2.should.be.of.type('number');
	
}

unaryPlus();
 
 function increment(){
	var x = 5; 
	var y = x++; 
	console.log ("This should print 6-->" + x);
	console.log ("This should print 5-->" + y);
}

//call function increment
//increment();

function addition(){
	var v6 = 1 + 1 ; 
	console.log ("This should print 2 " + v6);
	console.log ("This should print number " + typeof(v6));
	
	var v7 = true + 5 ; 
	console.log ("This should print 6 " + v7);
	console.log ("This should print number " + typeof(v7));
	
	
	var v15 = "5" + 5;
	console.log ("This should print 55 " + v15);
	console.log ("This should print string " + typeof(v15));
	
	var v16 = "5" + true;
	console.log ("This should print 5true " + v16);
	console.log ("This should print string " + typeof(v16));
}


function division(){
	var v25 = 2 / -0;
	console.log ("This should print -infinity -->" + v25);
	console.log ("This should print number --> " + typeof(v25));
	
}

function substraction(){
	var v21 = 100 - "50";
	console.log ("This should print 50  -->" + v21);
	console.log ("This should print number --> " + typeof(v21));
	
	var v22 = "100" - 50;
	console.log ("This should print 50  -->" + v22);
	console.log ("This should print number --> " + typeof(v22));
	
}



