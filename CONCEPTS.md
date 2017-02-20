

# basic.30.types 

## Javascript types -> These are  values produced by typeof operator 
1. number
1. string 
1. boolean
1. undefined
1. function
1. object

## JavaScript built in values 
1. true
1. false
1. null
1. undefined
1. NaN
1. Infinity

## JavaScript falsy Values 
1. false
1. 0
1. ""
1. null
1. undefined
1. NaN

# basic.30.operators.arithmetic

## Infix Operators 
 
1. add +
	* Number + Number = addition
	* Boolean + Number = addition
	* Boolean + Boolean = addition
	* String + Number  = concatenation
		** var x = "foo" + 1 // x value = foo1 , type = string
		** var x = "4" + 1 // x value = 41 , x type = string
	* String + Boolean = concatenation
	* String + String = concatenation

1. subtract - 
	* Number - Number = subctraction
	* "100" - Number  = subtraction // Numbers enclosed in quotes are  converted into numbers
	* Number - Boolean = subtraction //Boolean values are converted to numbers 	
	* Boolean - Boolean = subtraction
	* String - String = NaN
	* String - Number  = NaN

1. multiply *
	* Infinity * 0 = NaN
	* Infinity * Infinity = Infinity
	* Infinity * -Infinity = -Infinity
	* Number * -0 = -0
	* "2" * Number  = multiplication // Numbers enclosed in quotes are converted to numbers
	* Boolean * Number = multiplication // Boolean converted to a number
	* String * Number = NaN
	* String * String = NaN

	1. divide / 
		* Number / 0 = Infinity
		* Number / -0 = -Infinity
		* Boolean / Number = division // Boolean converted to a number
		* "4" / Number  = division // Numbers enclosed in quotes are converted to numbers
		* String / Number = NaN
		* String / String = NaN

	1. Remainder %
		* -5 % 2 = -1 	// remainder operator takes the sign of the numerator (or dividend) 
		* 5 % -2 = 1 		// remainder operator takes the sign of the numerator (or dividend) 
		* "5" % 2 = 1  	// Numbers enclosed in quotes are converted to number type 

	1. postfix increment x++ , prefix increment ++x
		* Postfix ++ will return the value of operand before incrementing it. Prefix ++ will increment the value of operand before returning it
			** var x = 1 , var y = x++ , console.log (y) // y will be 1 . Postfix ++ will return the value of x before incrementing
			** var x = 1 , var y = ++x , console.log (y) // y will be 2 . Prefix ++ will increment the value of x before returning it 
		* Increment operator does not concatenate strings like the addition + operator
			** var x= "4" , var y= ++x , console.log(y) // y value will be 5 and type number (not 41 and type string). 
			** var x= "4" , var y= x++ , console.log(y) // y value will be 4 and type number (not 41 and type string). 
		* ++ operator will convert numbers enclosed in quotes (string values) into number values 
			** var x = "4" , x++  // x will have a value of 5 and type number
	1. postfix decrement x-- , prefix decrement --x 
		* var x = 2 , var y = x-- , console.log (y) // y will be 2 . Postfix -- will return the value of x before decrementing
		* var x = 2 , var y = --x , console.log (y) // y will be 1 . Prefix -- will decrement the value of x before returning it 
	
	1. unary -	
		* unary - attempts to convert its operand into a number type. 
		* var v = -"1" ; // v value will be -1 and type will be  number
	1. unary plus or tonumber  +
		* unary + attempts to convert its operand into a number type.
		 




# basic.60.types

## Name 
	1. A name is a letter optinally followed by one or more numbers, letters or underbars. 
	1. A name can not be a JS reserved word 
	1. names are used for
		1. variables
		1. parameters
		1. property names
		1. statements
		1. operators
		1. labels

## Numbers
	1. JavaScript has a single number type internally repesented as a 64 bit floating point
	1. 1 = 1.0 
	1. 100 = 1e2 
	1. There is no integer type 
	1. NaN is a number value 
	1. NaN is not equal to any value including itself
	1. Detect NaN with isNaN(number) function
	1. Numbers have methods
		1. number.toExponential(fractionDigits)
		1. number.toFixed(fractionDigits)
		1. number.toPrecision(precision)
		1. number.toString(radix)

## Strings 
		1. A string literal can be wrapped in single quotes of double quotes
		1. It can contain zero or more characters
		1. The \ (backslash) is the escape character
		1. All characters are 16 bit wide
		1. Strings have a length property 
		1. Strings are immutable
		1. + operator is used to concatenate strings 
		1. Strings have methods
			1. string.charAt(pos)
			1. string.charCodeAt(pos)
			1. string.concat(string…)
			1. string.indexOf(searchString, position)
			1. string.lastIndexOf(searchString, position)
			1. string.localeCompare(that)
			1. string.match(regexp)
			1. string.replace(searchValue, replaceValue)
			1. string.search(regexp)  
			1. string.slice(start, end)
			1. string.split(separator, limit)
			1. string.toLowerCase( )
			1. string.toUpperCase( )
			1. String.fromCharCode(char…)

## Statements
	1. A compilation unit consists of a set of executable statements 
	1. Statements tend to be executed in order from top to bottom. 
	1. The sequence of execution can be altered by 
		1. conditional statements (if and switch), 
		1. looping statements (while, for, and do), 
		1. disruptive statements (break, return, and throw),
		1. function invocation.	
	
### var statement
	1. When used inside a function defines the functions private variables

### if statement
	1. if (expression){ ... } else { ... };
	1. if statement changes the flow of the program based on the value of  expression
	1. if expression is falsy the else block is executed.

### while statement
	1. while (expression) {... } ; 
	1. while expression is truthy the block will be executed



## Expressions

### The simplest expressions are
	1. A literal value (string or number)
	1. A variable 
	1. A built in value 
	1. An invoation expression 
	1. 

### Inovocation Operator 
	1. Invoation operator casues the execution of a function value
	1. Invocation operator is a  pair of parenthesis  that follow function value 
	1. (expression)
	1. The parentheses can contain arguments that will be delivered to the function

### Refinement operator 
	1. A refinement is used to specify a property or element of an object or array.
	1. .name or [expresssion]

### Prefix Operators
	1. typeof
	1. unary plus or tonumber  +
	1. unary -	
	1. Logical not !
		1.! expr1 
		1.returns true if expr1 is falsy else returns false

### Infix Operators

	1. greater or equal >= 
	1. less or equal <=
	1. greater >
	1. less <
	1. equal ===
	1. not equal !==
	
	1. logical or || 
			1.expr1 || expr2 -> Takes two operands 
			1.Returns expr2 if expr1 is falsy else returns expr1 
	
	1. logical and &&
			1. expr1 && expr2 -> Takes two operands
			1.Returns expr1 if expr1 is falsy else returns expr2 











## Literals
### Types of Literals -> Literal is a convenient notation of speccifying a type
		1. number literal 
		1. string literal 
		1. object literal 
		1. array literal 
		1. function literal 
		1. regexp literal

### Object Literal
		1. Pair of curly braces surrounding zero or more name/valaue pairs

### Function Literal
		1. Defines function value 
		1. It can have an optional name 
		1. It can specify a list of parameters enclosed in braces (...)
		1. The body of function enclosed in curly braces {...}
		1. returm statement 





## Functions

### Function objects 
	1. Functions in Javascript are Objects 
	        * Objects are collections of name/value pairs with a hidden link to prototype object 
	        * Objects produced from Object literals are linked to Object.prototype 
	        * functions can be used like any other value since they are objects 
	        * functions can be stored in variables , objects and arrays 
	        * Functions can be passed as arguments to functions 
	        * functions can be returned from functions 
	        * functions can have methods 
	
	
	1. Function Objects are linked to Function.prototype, which is linked to Object.prototype
	1. Every function has two more hidden propertoes 
	        1. Function's Context 
	        1. Code that implements function's behaviour 
	1. prototype property
	 *      Every functions object is also created with a prototype property. 
	 *      The value of the prototype property is an object with a constructor property whose value is the function.
	 *      This is not the same as the hidden link to the Function.prototype
	
###  Scope 
	1. Javascript does not have block scope 
		1. Its best to declare all of the variables used in a function at the top of the function body 
	1. Javascript has function scope 
		1. Parameters & Variables declared inside a function are not visible outside the fucntion 
		1. Variable declared within a function is visible anywhere within the function
		1. Inner functions get access to parameters and variables of the functions that they are defiend within
		1. Inner functions donot get access to arguments and this 
		







