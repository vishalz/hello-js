
module.exports = function(){

/**
 *
 * # Concepts 
 * ## The simplest expressions are
 *		1. A literal value (string or number)
 *		1. A variable 
 *		1. A built in value 
 *		1. An invoation expression 
 *		1. 
 * ## Inovocation Operator 
 *		1. (expression)-> Pair of parenthesis  that follow function value 
 * 
 * ## Types of Literals
 * 		1. number literal 
 * 		1. string literal 
 * 		1. object literal 
 * 		1. array literal 
 * 		1. function literal 
 * 		1. regexp literal
 *
 * ### Object Literal
 * 		1. Pair of curly braces surrounding zero or more name/valaue pairs
 * ### Function Literal
 * 		1. Defines function value 
 * 		1. It can have an optional name 
 * 		1. It can specify a list of parameters
 * 		1. The body of function 
 * 		1. returm statement 
 * 
 * ### String Literals
 * 		1. A string literal can be wrapped in single quoates of double qutes
 * 		1. It can contain zero or more characters
 * 		1. The \ (backslash) is the escape character
 * 		1. All characters are 16 bit wide
 * 		1. Strings have a length property 
 * 		1. Strings are immutable
 * 		1. + operator is used to concatenate strings 
 * 		1. Strigns have methods
 * 		1. 
 * ### Name 
 * 		1. A name is a letter optinally followed by one or more numbers, letters or underbars. 
 * 		1. A name can not be a JS reserved word 
 *		1. names are used for
 *				1. variables
 *				1. parameters
 *				1. property names
 *				1. statements
 *				1. operators
 *				1. labels
 *				
 *		1. 
 * ## Statements
 * 	
 * 	## var statement
 * 	## if statement
 * 		1. if (expression){ ... } else { ... };
 * 		1. if statement changes the flow of the program based on the value of  expression
 * 		1. if expression is falsy the else block is executed.
 * 	## while statement
 * 		1. while (expression) {... } ; 
 * 		1. while expression is truthy the block will be executed
 *
 *
 *
 *
 *
 *
 * # Tests 
 * to run all tests in this file use 
 * 	
 * 	npm test basic.30.expressions.functions
 *
 * -----------------functions---------------------------------------
 * @todo declare  variables myFunction and  myFunction_type 
 * Assign  myFunction = an anonymous function using a function expression 
 * The function takes one argument as input parameter
 * The function returns the square of the argument
 * Assign the type of variable myFunction to variable myFunction_type as a string e.g. "object" or "string" or "undefined"
 * var myFunction_type = "" // assign myFunction_type the type of myFunction variable e.g. "boolean" or "number" or "object" 
 * 
 * @todo declare  variables v2 , v2_value and v2_type.
 * Invoke the function expression declared in myFunction above with argument = 5 and assign it to v2
 * Assign  v2 = myFunction(5);
 * Assign the value of v2 variable to v2_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v2 to v2_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo declare  variables v3 , v3_value and v3_type.
 * Invoke the function expression declared in myFunction above with argument = 3 and assign it to v3
 * Assign  v3 = myFunction(3);
 * Assign the value of v3 variable to v3_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v3 to v3_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v4 , v4_value and v4_type.
 * Invoke the function expression declared in myFunction above with argument = -2 and assign it to v4
 * Assign  v4 = myFunction(-2);
 * Assign the value of v4 variable to v4_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v4 to v4_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v5 , v5_value and v5_type.
 * Invoke the function expression declared in myFunction above with argument = "foo" and assign it to v5
 * Assign  v5 = myFunction("foo");
 * Assign the value of v5 variable to v5_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v5 to v5_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v6 , v6_value and v6_type.
 * Invoke the function expression declared in myFunction as shown below and assign it to v6
 * Assign  v6 = myFunction(2) + myFunction(3);
 * Assign the value of v6 variable to v6_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v6 to v6_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v7 , v7_value and v7_type.
 * Invoke the function expression declared in myFunction as shown below and assign it to v7
 * Assign  v7 = myfunction(2) * myFunction(3); 
 * Assign the value of v7 variable to v7_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v7 to v7_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v8 , v8_value and v8_type.
 * Invoke the function expression declared in myFunction as shown below and assign it to v8
 * Assign  v8 = myFunction(5+5); 
 * Assign the value of v8 variable to v8_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v8 to v8_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v9 , v9_value and v9_type.
 * Invoke the function expression declared in myFunction above with argument = "foo" and assign it to v9
 * Assign v9 = myFunction(2);
 * Assign v9 = myFunction(v9);
 * Assign the value of v9 variable to v9_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v9 to v9_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v10 , v10_value and v10_type.
 * Invoke the function expression declared in myFunction as shown below and assign it to v10
 * Assign  v10 = myFunction(myFunction(2));
 * Assign the value of v10 variable to v10_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v10 to v10_type as a string e.g. "number" or "string" or "boolean"
 * 
 * @todo declare  variables incremento and  incremento_type 
 * Assign  incremento = an anonymous function using a function expression 
 * The function takes one argument as input parameter
 * The function increments the value of argument  and returns it
 * Assign the type of variable incremento to variable incremento_type as a string e.g. "object" or "string" or "undefined"
 * var incremento_type = "" // assign incremento_type the type of incremento variable e.g. "boolean" or "number" or "object" 
 *
 * @todo declare  variables v11 , v11_value and v11_type.
 * Invoke the function expression declared in incremento above with argument = 5 and assign it to v11
 * Assign  v11 = incremento(5);
 * Assign the value of v11 variable to v11_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v11 to v11_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo declare  variables v12 , v12_value and v12_type.
 * Invoke the function expression declared in incremento above with argument = 5+5 and assign it to v12
 * Assign  v12 = incremento(5+5);
 * Assign the value of v12 variable to v12_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v12 to v12_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo declare  variables v13 , v13_value and v13_type.
 * Invoke the function expression declared in incremento as shown below and assign it to v13
 * Assign  v13 = incremento(5) + incremento(5);
 * Assign the value of v13 variable to v13_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v13 to v13_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo declare  variables v14 , v14_value, v15  and v15_value
 * Invoke the function expression declared in incremento as shown below and assign it to v15
 * Assign v14 = 5;
 * Assign v15 = incremento(v14);
 * Assign the value of v14 variable to v14_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v15 variable to v15_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 *
 *@todo declare  variables v16 , v16_value and v16_type.
 * Invoke the function expression declared in incremento above with argument = 5 and assign it to v16
 * Assign  v16 = incremento( incremento(5) );
 * Assign the value of v16 variable to v16_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v16 to v16_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v17 , v17_value and v17_type.
 * Invoke the function expression declared in incremento as shown below
 * Assign  v17 = incremento(5) + myFunction(5);
 * Assign the value of v17 variable to v17_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v17 to v17_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo declare  variables v18 , v18_value and v18_type.
 * Invoke the function expression declared in incremento above with argument = 5 and assign it to v18
 * Assign  v18 = incremento( myFunction(5));
 * Assign the value of v18 variable to v18_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v18 to v18_type as a string e.g. "number" or "string" or "boolean"
 *
 *@todo declare  variables v19, v20_value,  v20_typea , v21 and v21_type .
 * Assign v19 to an  object with 2 properties.A name property of string value called "Sponge Bob" and age property with a number value = 100  
*	Assign v19 = { name : "Sponge Bob" , age : 100 } ;
 * Invoke the function expression declared in incremento as shown below 
 * Assign  v20 = incremento(v19.age);
 * Assign v21 = incremento(v19.name);
 * Assign the value of v20 variable to v20_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v20 to v20_type as a string e.g. "number" or "string" or "boolean"
 * Assign the value of v21 variable to v21_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v21 to v21_type as a string e.g. "number" or "string" or "boolean"
 *
 *
 *
 *
 */


// ******** Don't edit above this line *********************** 

 var myFunction = function(a){
	return a * a;
 };

 
 var myFunction_type = "function";
 
 var v2 = myFunction(5);
 var v2_value = "25";
 var v2_type = "number"

 var v3 = myFunction(3);
 var v3_value = "9";
 var v3_type = "number"


 var v4 = myFunction(-2);
 var v4_value = "4";
 var v4_type = "number"


 var v5 = myFunction("foo");
 var v5_value = "NaN";
 var v5_type = "number"

 var v6 = myFunction(2) + myFunction(3);
 var v6_value = "13";
 var v6_type = "number"

 var v7 = myFunction(2) *  myFunction(3);
 var v7_value = "36";
 var v7_type = "number"

 var v8 =  myFunction(5+5);
 var v8_value = "100";
 var v8_type = "number"

 var v9 = myFunction(2);
 v9 = myFunction(v9);
 var v9_value = "16";
 var v9_type = "number"

 var v10 = myFunction( myFunction(2) );
 var v10_value = "16";
 var v10_type = "number"


 var incremento = function(a){ 
	a = a + 1 ; 
	return a;
 };

 var incremento_type = "function";

 var v11 =  incremento(5);
 var v11_value = "6";
 var v11_type = "number"

 var v12 =  incremento(5+5);
 var v12_value = "11";
 var v12_type = "number"

 var v13 =  incremento(5) + incremento(5);
 var v13_value = "12";
 var v13_type = "number"

 var v14 = 5;  
 var v15 = incremento(v14);
 var v14_value = "5";
 var v15_value = "6";

 var v16 =  incremento( incremento(5) );
 var v16_value = "7";
 var v16_type = "number"

 var v17 =  incremento(5) + myFunction(5);
 var v17_value = "31";
 var v17_type = "number"

 var v18 =  incremento( myFunction(5) );
 var v18_value = "26";
 var v18_type = "number"

 var v19 = { name : "Sponge Bob" , age : 100 }; 
 var v20 =  incremento(v19.age);
 var v21 =  incremento(v19.name);
 var v20_value = "101";
 var v20_type = "number"
 var v21_value = "Sponge Bob1";
 var v21_type = "string"





// ******** Don't edit below this line *********************** 
	var obj = {};

	(typeof(myFunction)=== 'undefined') || (obj.myFunction = myFunction); 
	(typeof(myFunction_type)=== 'undefined') || (obj.myFunction_type = myFunction_type) ;
	(typeof(myFunction_value)=== 'undefined') || (obj.myFunction_value = myFunction_value) ;
	(typeof(incremento)=== 'undefined') || (obj.incremento = incremento); 
	(typeof(incremento_type)=== 'undefined') || (obj.incremento_type = incremento_type) ;
	(typeof(incremento_value)=== 'undefined') || (obj.incremento_value = incremento_value) ;
	(typeof(v2)=== 'undefined') || (obj.v2 = v2); 
	(typeof(v2_type)=== 'undefined') || (obj.v2_type = v2_type) ;
	(typeof(v2_value)=== 'undefined') || (obj.v2_value = v2_value) ;
	(typeof(v3)=== 'undefined') || (obj.v3 = v3); 
	(typeof(v3_type)=== 'undefined') || (obj.v3_type = v3_type) ;
	(typeof(v3_value)=== 'undefined') || (obj.v3_value = v3_value) ;
	(typeof(v4)=== 'undefined') || (obj.v4 = v4);
	(typeof(v4_type)=== 'undefined') || (obj.v4_type = v4_type) ;
	(typeof(v4_value)=== 'undefined') || (obj.v4_value = v4_value) ;
	(typeof(v5)=== 'undefined') || (obj.v5 = v5);
	(typeof(v5_type)=== 'undefined') || (obj.v5_type = v5_type) ;
	(typeof(v5_value)=== 'undefined') || (obj.v5_value = v5_value) ;
	(typeof(v6)=== 'undefined') || (obj.v6 = v6) ;
	(typeof(v6_value)=== 'undefined') || (obj.v6_value = v6_value) ;
	(typeof(v6_type)=== 'undefined') || (obj.v6_type = v6_type) ;
	(typeof(v7)=== 'undefined') || (obj.v7 = v7) ;
	(typeof(v7_type)=== 'undefined') || (obj.v7_type = v7_type) ;
	(typeof(v7_value)=== 'undefined') || (obj.v7_value = v7_value) ;
	(typeof(v8)=== 'undefined') || (obj.v8 = v8) ;
	(typeof(v8_type)=== 'undefined') || (obj.v8_type = v8_type) ;
	(typeof(v8_value)=== 'undefined') || (obj.v8_value = v8_value) ;
	(typeof(v9)=== 'undefined') || (obj.v9 = v9) ;
	(typeof(v9_type)=== 'undefined') || (obj.v9_type = v9_type) ;
	(typeof(v9_value)=== 'undefined') || (obj.v9_value = v9_value) ;
	(typeof(v10)=== 'undefined') || (obj.v10 = v10) ;
	(typeof(v10_type)=== 'undefined') || (obj.v10_type = v10_type) ;
	(typeof(v10_value)=== 'undefined') || (obj.v10_value = v10_value) ;
	(typeof(v11)=== 'undefined') || (obj.v11 = v11) ;
	(typeof(v11_type)=== 'undefined') || (obj.v11_type = v11_type) ;
	(typeof(v11_value)=== 'undefined') || (obj.v11_value = v11_value) ;
	(typeof(v12)=== 'undefined') || (obj.v12 = v12) ;
	(typeof(v12_type)=== 'undefined') || (obj.v12_type = v12_type) ;
	(typeof(v12_value)=== 'undefined') || (obj.v12_value = v12_value) ;
	(typeof(v13)=== 'undefined') || (obj.v13 = v13) ;
	(typeof(v13_type)=== 'undefined') || (obj.v13_type = v13_type) ;
	(typeof(v13_value)=== 'undefined') || (obj.v13_value = v13_value) ;
	(typeof(v14)=== 'undefined') || (obj.v14 = v14) ;
	(typeof(v14_type)=== 'undefined') || (obj.v14_type = v14_type) ;
	(typeof(v14_value)=== 'undefined') || (obj.v14_value = v14_value) ;
	(typeof(v15)=== 'undefined') || (obj.v15 = v15) ;
	(typeof(v15_type)=== 'undefined') || (obj.v15_type = v15_type) ;
	(typeof(v15_value)=== 'undefined') || (obj.v15_value = v15_value) ;
	(typeof(v16)=== 'undefined') || (obj.v16 = v16) ;
	(typeof(v16_type)=== 'undefined') || (obj.v16_type = v16_type) ;
	(typeof(v16_value)=== 'undefined') || (obj.v16_value = v16_value) ;

	(typeof(v17)=== 'undefined') || (obj.v17 = v17) ;
	(typeof(v17_type)=== 'undefined') || (obj.v17_type = v17_type) ;
	(typeof(v17_value)=== 'undefined') || (obj.v17_value = v17_value) ;
	(typeof(v18)=== 'undefined') || (obj.v18 = v18) ;
	(typeof(v18_type)=== 'undefined') || (obj.v18_type = v18_type) ;
	(typeof(v18_value)=== 'undefined') || (obj.v18_value = v18_value) ;
	(typeof(v19)=== 'undefined') || (obj.v19 = v19) ;
	(typeof(v19_type)=== 'undefined') || (obj.v19_type = v19_type) ;
	(typeof(v19_value)=== 'undefined') || (obj.v19_value = v19_value) ;
	(typeof(v20)=== 'undefined') || (obj.v20 = v20) ;
	(typeof(v20_type)=== 'undefined') || (obj.v20_type = v20_type) ;
	(typeof(v20_value)=== 'undefined') || (obj.v20_value = v20_value) ;
	(typeof(v21)=== 'undefined') || (obj.v21 = v21) ;
	(typeof(v21_type)=== 'undefined') || (obj.v21_type = v21_type) ;
	(typeof(v21_value)=== 'undefined') || (obj.v21_value = v21_value) ;
	(typeof(v22)=== 'undefined') || (obj.v22 = v22) ;
	(typeof(v22_type)=== 'undefined') || (obj.v22_type = v22_type) ;
	(typeof(v22_value)=== 'undefined') || (obj.v22_value = v22_value) ;
	(typeof(v23)=== 'undefined') || (obj.v23 = v23) ;
	(typeof(v23_type)=== 'undefined') || (obj.v23_type = v23_type) ;
	(typeof(v23_value)=== 'undefined') || (obj.v23_value = v23_value) ;
	(typeof(v24)=== 'undefined') || (obj.v24 = v24) ;
	(typeof(v24_type)=== 'undefined') || (obj.v24_type = v24_type) ;
	(typeof(v24_value)=== 'undefined') || (obj.v24_value = v24_value) ;

	return obj;
	
}();
