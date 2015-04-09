# Grammar 

## JavaScript built in values 
	1. true
	1. false
	1. null
	1. undefined
	1. NaN
	1. Infinity

## The values produced by typeof 
	1. number
	1. string 
	1. boolean
	1. undefined
	1. function
	1. object

## JavaScript falsy Values 
	1. false
	1. 0
	1. ""
	1. null
	1. undefined
	1. NaN

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
	1. multiply *
	1. divide / 
	1. modulo %
	1. add +
	1. subtract - 
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




