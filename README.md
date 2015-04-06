# Javascript Tutorial 


## Installation 
	
	git clone git://github.com/vishalz/hello-js.git hello-js 
	cd ./hello-js
	npm install 

## Project Directory Sructure
1. The purpose of this tutorial is to test your knowledge of JavaScript concepts.
1. The /src folder contains a list of files that you will need to edit by completing tasks identified by @todo statements

## Modus Operandi

1. Read a Topic mentioned in the Concepts sections below at MDN Javascript guide  e.g. Grammer and Types.
	1. [Javascript Guide on MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. Locate the file related to the concept in the src folder e.g src/basic.30.types.js.
1. Follow instrunctions and complete the @todo tasks
1. Run a npm test command to test your code 
		 npm test basic.30.types

1. In case a test fails, fix code in src/basic.30.type.js and run the test again.  

## Concepts Basic 30 Days (B30)

## Bash and Vim 
use following to learm basic bash and vim basics

1. Define variables  and print types

### Bash Shell Programming 
1. pwd 
1. cd ~ to home directory 
1. ls 
1. mkdir ~/code
1. mkdir ~/code/hallo-js
1. cd ~/code/hallo-js 
1. touch hello.js
1. vim hallo.js
1. node hallo.js

### vim 
1. vim hallo.js
1. Set line numbers
		:set number 
1. Set No Match Pattern             
		:NoMatchParen
1. Toggle between Insert mode and Command mode
1. Type the following 
		var v1 = 5; 
		console.log (v1);
		console.log (typeof v1);
1. Yank and Paste with Visual Mode
		use visual mode select a line  
		yank the selection
		paste the selection
1. Save file 
1. Quit file 
1. Run file 
		node hallo.js

### git
1. Browse to github and search for vishalz/hello-js
1. cd ~/code
1. git clone git://github.com/vishalz/hello-js.git hello-js 
1. cd ./hello-js
1. npm install 


### Types
1. [Basic syntax & comments](http://mzl.la/1DoKfIO)
		
		vim src/basic.30.types.js	
		npm test basic.30.types

1. [Declarations] (http://mzl.la/1EhvJxL)
1. [Data structures and types](http://mzl.la/1NXTlzl)
1. [Literals](http://mzl.la/1As6oQp) 

### Expressions and operators
1. [Arithmetic operators](http://mzl.la/1EnKfqa)
		
		vim  basic.30.operators.arithmetic.js
		npm test basic.30.operators.arithmetic

	To Test by a specific arithmentic operator 

		npm test basic.30.operators.arithmetic.addition
		npm test basic.30.operators.arithmetic.subtraction
		npm etst basic.30.operators.arithmetic.division
		npm etst basic.30.operators.arithmetic.multiplicaiton
		
1. [Assignment operators](http://mzl.la/1GIun1v)
1. [Comma operator] (http://mzl.la/SACQ45)
1. [Comparison Operators](http://mzl.la/1ksAvyK)
1. [Conditional Ternary Operator](http://mzl.la/QJDT09)
1. [Grouping operator](http://mzl.la/1NY4S1G)
1. [Logical operators](http://mzl.la/19VbTj5)
1. [Object initializer](http://mzl.la/1GIMi82)
1. [Property accessors](http://mzl.la/1HuFOi1)
1. [function expression](http://mzl.la/17lOhTZ)
1. [in operator](http://mzl.la/1GIORar)
1. [typeof](http://mzl.la/1adFxB9)

### Statements & declarations
1. [block](http://mzl.la/1HULL4h)
1. [break](http://mzl.la/1zi77Gd)
1. [continue](http://mzl.la/18tVsu3)
1. [empty](http://mzl.la/1AJhnnB)
1. [export](http://mzl.la/1wNC6eK)
1. [for](http://mzl.la/1x6UKyt)
1. [for...in](http://mzl.la/1EhWBNV)
1. [function](http://mzl.la/17ehAI9)
1. [if...else](http://mzl.la/1CjN3FN)
1. [return](http://mzl.la/1AJkxYH)
1. [var](http://mzl.la/19pfwia)


### npm
1. Initialising npm  
1. Install node modules 
	1. colors
	1. mocha
	1. should 
1. Inlcuding node modules using require

### git 
1. git global config 
1. git init 
1. git add
1. git status 
1. git commit 

### Exporting Modules
1. using module.exports
1. Create a module in /lib
2. Use the module using require

### Numbers and dates
1. Number


### mocha
1. setup mocha module
1. setup mocha test for 


## Basic 60 Days (B60)

### Grammar & Types
1. Variable scope
1. Variable hoisting

### Expressions and operators
1. Bitwise Operators
1. Assignment & destructuring
1. [delete operator](http://mzl.la/1GIMLHi)
1. [function * expression](http://mzl.la/18PE036) 
1. [void](http://mzl.la/1x6OJC7)
1. [yield](http://mzl.la/1GIPX5X)
1. [this](http://mzl.la/1wNorEn)
1. [new operator](http://mzl.la/1xM2M9S)
1. [instanceof](http://mzl.la/1dqYtqW)

### Statements & declarations
1. [switch](http://mzl.la/1DprCEJ)
1. [throw](http://mzl.la/1CkHpEM)
1. [try...catch](http://mzl.la/1AJkTOS). [debugger](http://mzl.la/18tVD8x)
1. [while](http://mzl.la/18PSEY9)


### Misc - Intermediate  
1. [A re-introduction to JavaScript (JS tutorial)](http://mzl.la/1nNiLCB)
1. [JavaScript data types and data structures](http://mzl.la/1DpjaFm)
1. [Equality comparisons and sameness](http://mzl.la/1F1nISD)
1. [Closures](http://mzl.la/17lRliK)

### Advanced  
1. [Inheritance and the prototype chain](http://mzl.la/1FXbcAX)
1. [Strict mode](http://mzl.la/1onrGsw)
1. [JavaScript typed arrays](http://mzl.la/1Fr4VNQ)
1. [Memory Management](http://mzl.la/1hSDfni)

### git 
1. setup git repo on github
1. git push origin master

### Control Flow & Error Handling 
1. switch
1. try/catch/throw
1. Error objects
1. Promises

### Loops and iteration
1. while
1. do...while
1. break/continue
1. for..in
1. for..of

### Functions

1. Closures
1. Arguments and parameters
1. Arrow functions
1. [Function Scope] (http://mzl.la/1Fy1Ey0)
1. [Scope and the Function Stack](http://mzl.la/1xcIooK)
1.  
### Numbers and dates
1. Math
1. Date

## Basic 90  Days (B90)

## References to be Checcked Out 
1. [Sitepoint JavaScript](http://www.sitepoint.com/javascript/)
1. [5 More JavaScript Interview Excercises](http://www.sitepoint.com/5-javascript-interview-exercises/)
 

