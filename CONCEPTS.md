

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
	   * var x = "foo" + 1 // x value = foo1 , type = string
	   * var x = "4" + 1 // x value = 41 , x type = string
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
    * var x = 1 , var y = x++ , console.log (y) // y will be 1 . Postfix ++ will return the value of x before incrementing
    * var x = 1 , var y = ++x , console.log (y) // y will be 2 . Prefix ++ will increment the value of x before returning it 
	* Increment operator does not concatenate strings like the addition + operator
	  * var x= "4" , var y= ++x , console.log(y) // y value will be 5 and type number (not 41 and type string). 
		* var x= "4" , var y= x++ , console.log(y) // y value will be 4 and type number (not 41 and type string). 
  * ++ operator will convert numbers enclosed in quotes (string values) into number values 
    * var x = "4" , x++  // x will have a value of 5 and type number
1. postfix decrement x-- , prefix decrement --x 
	* var x = 2 , var y = x-- , console.log (y) // y will be 2 . Postfix -- will return the value of x before decrementing
	* var x = 2 , var y = --x , console.log (y) // y will be 1 . Prefix -- will decrement the value of x before returning it 

1. unary -	
  * unary - attempts to convert its operand into a number type. 
  * var v = -"1" ; // v value will be -1 and type will be  number
1. unary plus or tonumber  +
  * unary + attempts to convert its operand into a number type.
	 


# basic.30.operators.logical

## JavaScript Falsy Values 
	1. false
	1. 0
	1. ""
	1. null
	1. undefined
	1. NaN

## Logical And (&&)
  1. expr1 && expr2 -> Takes two operands
	1. Returns expr1 if expr1 is falsy else returns expr2 

## Logical Or (||)
	1. expr1 || expr2 -> Takes two operands 
	1. Returns expr2 if expr1 is falsy else returns expr1 

## Conditional Operator (Also known as ternary operator) 
  1. condition ? expr1 : expr2 -> Takes three operands operand 1 = condition , operand 2 = expr1 and operand 3 = expr2 
  1. Returns expr2 if value of condition is falsy else retrun expr1 

## Logical NOT (!)
  1. Logical NOT operator takes one operand 
	1. ! expr1 
	1. returns true if expr1 is falsy else returns false


# basic.30.expressions.functions

## Function Literal
	1. A function literal is an expression that defines a value of type function . Another way of defining a function
	      var myFunction = function(x){
	        x = x * x;  
	        return x;
	      } 
	1. It can have an optional name. Function with no name are called anonymous functions 
	1. It can specify a list of parameters enclosed in braces (...)  // (x)
	1. The body of function enclosed in curly braces {...}
	1. The function returns a value with a return statement.
  1. If a function does not return a value with a return statement then undefined is returned when the function exits 
  1. typeof myFunction = function
  1. function parameters are specified when a function is declared. In the example above x is a function parameter.
  1. function arguments are passed to functions when the function is invoked. In the examle below 5 is function argument
      var y = myFunction(5);

## Function objects 
	1. Functions in Javascript are Objects 
	1. Objects are collections of name/value pairs with a hidden link to prototype object 
	1. Objects produced from Object literals are linked to Object.prototype 
	1. functions can be used like any other value since they are objects 
	1. functions can be stored in variables , objects and arrays 
	1. Functions can be passed as arguments to functions 
	1. functions can be returned from functions 
	1. functions can have methods 
	          	
		

# basic.30.control.structures
  1. [typeof Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
  1. [isFinite function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
  1. [isNaN function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 
  1. [if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement)
  1. [while Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)
  1. [for Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
  1. [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)


# basic.30.strings
## General
1. A string literal can be wrapped in single quotes or double quotes
    var str = "Hello";
    var anotherStr = 'World';
1. typeof (str) === "string" //returns true 
1. A string contains zero or more characters. Each character is 16 bits wide  

## length property
1. String literals have a length property 
        "Hello".length ;  // returns 5
## Access and Enumeration
1. Use charAt method to retrieve characters from the string 
      var str = "Hello";
      var firstChar = str.charAt(0) // returns "H"
      var secondChar = str.charAt(1)  // returns "e" 
      var fifthChar = str.charAt(4) // returns "d"
      var sixthChar = str.charAt(5) // returns "" empty string

1. loop thorugh all characters in a string using for loop 
      for(i=0 ; i < str.length ; i++) {
        console.log(str.charAt(i));
      }


# basic.30.arrays
## General
1. An array literal is a pair of square brackets surrounding zero or more values separated by commas
      var fruits =["Apple", "Kiwi"]
1. The first value will get a property name '0' , second value will get a property name '1'
1. typeof (fruits) === "object" 
1. To check if a value is of Array type, use Array.isArray() method 
        Array.isArray(fruits) // returns true

## length property
1. Arrays have a length property
      var fruits =["Apple", "Kiwi"]
      console.log(fruits.length) // = 2 
1. The length property is not necessarily the number of values in the array
      var veggies = [];
      veggies[100]= "Potatos";
      console.log (veggies.length) // wiil print 101 but there is only one value in the array

## Access & Enumeration

1. Access Array Element using numbers enclosed in square brackets staring with zero
      var fruits =["Apple", "Kiwi"]
      var firstFruit = fruits[0]; // fristFruit will have a value =  "Apple"
      var secondFruit = fruits[1]; // secondFruit will have a value = "Kiwi"
      var thridFruit = fruits[2]; // thirdFruit will have a value = undefined

1. Loop through all elements of array using for loop 
      for(i=0; i < fruits.length ; i++){
          console.log (fruits[i]);
      }

## Adding Values to Arrays
1. Adding values to Arrays
      var fruits =["Apple", "Kiwi"]
      fruits[2] = "Banana" 
      console.log (fruits.length) // will print 3 , 
      console.log (fruits) //  ["Apple", "Kiwi", "Banana"]

1. Add value to the end of an Array push method   
      var totalFruits = fruits.push("Orange", "Mango");    
      console.log (fruits) // frutis = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"]
      cosnole.log (totalFruits) // totalFruits = 5

1. Add value to the beginning of an Array unshift  method   
      var totalFruits = fruits.unshift("Grape Fruit","Grape");    
      console.log (fruits) //  ["Grape Fruit","Grape","Apple", "Kiwi", "Banana", "Orange" , "Mango"]
      cosnole.log (totalFruits) // totalFruits = 7

## Removing Values from Arrays 

1. Remove last value of an Array use  pop method   
      var fruits = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"];
      var lastFruit = fruits.pop();    
      console.log (fruits); // frutis = ["Apple", "Kiwi", "Banana","Orange"];
      cosnole.log (lastFruit); // lastFruit = "Mango"

1. shift method, remove first element of an array  
      var fruits = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"];
      var firstFruit = fruits.shift();    
      console.log (fruits); // frutis = ["Kiwi", "Banana","Orange","Mango"];
      cosnole.log (firstFruit); // firstFruit = "Apple"



## References
1. [push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

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

### Infix Operators

	1. greater or equal >= 
	1. less or equal <=
	1. greater >
	1. less <
	1. equal ===
	1. not equal !==
	1. logical or || 
	1. logical and &&






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
		







