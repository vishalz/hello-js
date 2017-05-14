

# basic.30.types 

## General

1. Simple (or primitive) value types are 
    * numbers
    * strings 
    * boolean
    * undefined 
    * null 

1. All other values are objects 
    * Arrays are objects 
    * Functions are objects 
    * Regular Expressions are objects 
    * Objects are objects 

## Bonus 



## JavaScript falsy Values 

1. false
1. 0
1. ""
1. null
1. undefined
1. NaN

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





# basic.30.operators.arithmetic

## Infix Operators 
 
### add +
  1. Number + Number = addition
  1. Boolean + Number = addition
  1. Boolean + Boolean = addition
  1. String + Number  = concatenation
```
var x = "foo" + 1 // x value = foo1 , type = string
var x = "4" + 1   // x value = 41 , x type = string
```
  1. String + Boolean = concatenation
  1. String + String = concatenation

### subtract - 
  1. Number - Number = subctraction
  1. "100" - Number  = subtraction // Numbers enclosed in quotes are  converted into numbers
  1. Number - Boolean = subtraction //Boolean values are converted to numbers  
  1. Boolean - Boolean = subtraction
  1. String - String = NaN
  1. String - Number  = NaN

### multiply *
  1. Infinity * 0 = NaN
  1. Infinity * Infinity = Infinity
  1. Infinity * -Infinity = -Infinity
  1. Number * -0 = -0
  1. "2" * Number  = multiplication // Numbers enclosed in quotes are converted to numbers
  1. Boolean * Number = multiplication // Boolean converted to a number
  1. String * Number = NaN
  1. String * String = NaN

### divide / 
  1. Number / 0 = Infinity
  1. Number / -0 = -Infinity
  1. Boolean / Number = division // Boolean converted to a number
  1. "4" / Number  = division // Numbers enclosed in quotes are converted to numbers
  1. String / Number = NaN
  1. String / String = NaN

### Remainder %
```
-5 % 2  = -1 // remainder operator takes the sign of the numerator (or dividend)
5 % -2  = 1  // remainder operator takes the sign of the numerator (or dividend)
"5" % 2 = 1  // Numbers enclosed in quotes are converted to number type
```
### postfix increment x++ , prefix increment ++x
  1. Postfix ++ will return the value of operand before incrementing it. Prefix ++ will increment the value of operand before returning it
```
var x = 1;
var y = x++;
console.log (y); // y will be 1 . Postfix ++ will return the value of x before incrementing
```
```
var x = 1;
var y = ++x;
console.log (y); // y will be 2 . Prefix ++ will increment the value of x before returning it
```
  1. Increment operator does not concatenate strings like the addition + operator
```
var x= "4" ;
var y= ++x ;
console.log(y); // y value will be 5 and type number (not 41 and type string).
```
```
var x= "4";
var y= x++;
console.log(y); // y value will be 4 and type number (not 41 and type string).
```
  1. ++ operator will convert numbers enclosed in quotes (string values) into number values 
```
var x = "4";
x++;  // x will have a value of 5 and type number
```
### postfix decrement x-- , prefix decrement --x 
```
var x = 2;
var y = x--;
console.log (y); // y will be 2 . Postfix -- will return the value of x before decrementing
```
```
var x = 2;
var y = --x;
console.log (y)  // y will be 1 . Prefix -- will decrement the value of x before returning it
```
### unary -  
  1. unary - attempts to convert its operand into a number type. 
```
var v = -"1" ; // v value will be -1 and type will be  number
```
### unary plus or tonumber  +
  1. unary + attempts to convert its operand into a number type.


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

```
var myFunction = function(x){
x = x * x;  
return x;
}

```
 
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

## References

  1. [typeof Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
  1. [isFinite function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
  1. [isNaN function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 
  1. [if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement)
  1. [for Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
  1. [break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) 
  1. [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Throwing Errors 
1. Use throw statement to generte an exception from your function 
1. Exceptions can be generated using string values 
```
// incremento
let incremento = function (x){
if (typeof(x) !== 'number'){
  throw  "x is not a number";  // throw an exception with a string
}

if (isNaN(x)){
throw  'x is a NaN';           // throw an exception with a string
}

if (!isFinite(x)){
  throw  'x is not Finite';    // throw an error object using new
}

++x;
return x;

}                              // end of incremento

```

# basic.30.strings

## General

1. A string literal can be wrapped in single quotes or double quotes

```
var str = "Hello";
var anotherStr = 'World';
```
1. Use typeof operator to find if a value is of type string 

```
typeof (str) === "string" //returns true 
```

1. A string contains zero or more characters. Each character is 16 bits wide  

## length property
1. String literals have a length property 

```
"Hello".length ;  // returns 5
```

1. Use toString() method to convert a value to a string 

```
true.toString()    // returns "true"
100.toString()     // returns "100";
[1,2,3].toString() // retunrs "1,2,3";

```
1. Use parseInt() method to convert a string to a number
  1. pasrseInt takes 2 parameters string to convert and radix. Set radix to 10 for decimal number system

```
console.log( parseInt("250 Beverly Hills 902010",10)); // prints 250
console.log (parseInt(1.1,10));                        // prints 1
console.log( parseInt("Infinity",10));                 // prints NaN
console.log( parseInt("abcdef",10));                   // prints NaN
console.log (parseInt(false,10));                      // prints NaN
console.log (parseInt(null,10));                       // prints NaN
console.log (parseInt(undefined,10));                  // prints NaN
console.log (parseInt('',10));                         // prints NaN
console.log (parseInt({"1" : 1 , "2" : 2} ,10));       // prints NaN
console.log (parseInt([1,2],10));                      // prints 1
console.log (parseInt(["1.1","2"],10));                // prints 1
```



## Access and Enumeration

1. Use charAt method to retrieve characters from the string 

```
var str = "Hello";
var firstChar = str.charAt(0) // returns "H"
var secondChar = str.charAt(1)  // returns "e" 
var fifthChar = str.charAt(4) // returns "d"
var sixthChar = str.charAt(5) // returns "" empty string
```

1. loop thorugh all characters in a string using for loop 

```
var i; 
for(i=0 ; i < str.length ; i++) {
console.log(str.charAt(i));
}
```

## concatenating  strings

1. use the + operator to concatenate strings 

```
var str = "Jean";
console.log( str.length)   // prints 4
str = str + " " + "Genie";
console.log (str);         // prints 'Jean Genie'
console.log (str.length);  // prints  10
```
## split method

The split() method splits a String object into an array of strings

1. Split a string by Space " "

```
var  str, result;
str =  "221 B Baker St, London, England"
result  = str.split(" ");
console.log (result);                    // will print [ '221', 'B', 'Baker', 'St,', 'London,', 'England' ]
console.log (result[0])                  // will print 221
console.log (result[1])                  // will print B
```
1. Split a string by each character

```
var  str, result;
str =  "Moonage Daydream"
result  = str.split("");
console.log (result);     // will print [ 'M','o','o','n','a','g','e',' ','D','a','y','d','r','e','a','m' ]
console.log (result[0])   // will print M
console.log (result[1])   // will print o
```

1. Split a string by  colons :

```
var  str, result;
str =  "Houston:We:Have:A:Problem";
result  = str.split(":");
console.log (result);               // will print [ 'Houston', 'We', 'Have', 'A', 'Problem' ]
console.log (result[0])             // will print Houston
console.log (result[1])             // will print We
```


## slice method
1. The string.slice(start, end ) method extracts a section of a string and returns a new string.

```
var  str, result;
str =  "221 B Baker St, London, England"
console.log (str.slice(0,3));            // prints 221
console.log(str.slice(6,6+5));           // prints Baker
console.log(str.slice(6));               // prints Baker St, London, England
```

## strings.indexOf

1. Returns the index of the first occurrence of the specified value, Returns -1 if the value is not found.

```
var  str, result;
str =  "221 B Baker St, London, England"
console.log (str.indexOf("Baker"));       // prints 6
console.log (str.indexOf("Tokyo"));       // prints -1
```

## replace(searchValue, replaceValue) 
1. Returns the index of the first occurrence of the specified value, Returns -1 if the value is not found.
1. searchValue can be a string or a regular expression, repalceValue is a string

```
var  str, result;
str =  "221 B Baker St, London, England"
console.log (str.replace("221", "5050"); // prints  "5050 B Baker St, Tokyo, England"
```
1. If searchValue is a string then only first occurance of is replaced

```
var  str, result;
str =  "221 B Baker St, London, England"
console.log (str.replace(" ", "-"));      //prints '221-B Baker St, London, England'
```


##  Escape Notation and  White spaces
1. Escape character is used to inserting characters into strings that are normally not permitted such as quotes
1.  \ (backslash) is the  escape character

```
var str = 'Ceaser is my father\'s sister\'s son\'s dog'; // use \ to escape single quote
console.log (str)                                        // prints 'Ceaser is my father's sister's son's dog'

```

1. White spaces in Javascript are  
  1. space = " " 
  1. tab = "\t" 
  1. End of Line = "\n" and 
  1. Carriage Return = "\r"
 
```
// Function to check if a string has a whiteSpace
// Returns true is parameter has a white space, false otherwise

function hasWhiteSpace(str){
  var i, returnValue;
  returnValue = false;
  for (i=0 ; i < str.length ; i++){
  var char = str.charAt(i);
  if (char === " " || char === "\t" || char === "\n" || char === "\r"){
    returnValue = true;

  }                                                                     // end of if

  }                                                                     // end of for loop

  return returnValue;

}                                                                       // end of hasWhiteSpace


console.log (hasWhiteSpace("starman"));                                 // prints false
console.log (hasWhiteSpace("Jean Genie"));                              // prints true
console.log (hasWhiteSpace("Jean" + "\t" + "Genie"));                   // prints true
```



# basic.30.arrays

## General

1. An array literal is a pair of square brackets surrounding zero or more values separated by commas

```
var fruits =["Apple", "Kiwi"]
```

1. The first value will get a property name '0' , second value will get a property name '1'
1. typeof (fruits) === "object" 
1. To check if a value is of Array type, use Array.isArray() method 

```
Array.isArray(fruits) // returns true
```

## length property
1. Arrays have a length property

```
var fruits =["Apple", "Kiwi"]
console.log(fruits.length) // = 2
```

1. The length property is not necessarily the number of values in the array

```
var veggies = [];
veggies[100]= "Potatos";
console.log (veggies.length) // wiil print 101 but there is only one value in the array
```

## Access & Enumeration

1. Access Array Element using numbers enclosed in square brackets staring with zero

```
var fruits =["Apple", "Kiwi"]
var firstFruit = fruits[0];   // fristFruit will have a value =  "Apple"
var secondFruit = fruits[1];  // secondFruit will have a value = "Kiwi"
var thridFruit = fruits[2];   // thirdFruit will have a value = undefined
```

1. Loop through all elements of array using for loop 

```
var fruits =["Apple", "Kiwi"]
var i; 
for(i=0; i < fruits.length ; i++){
console.log (fruits[i]);
}
```

## Adding Values to Arrays
1. Adding values to Arrays

```
var fruits =["Apple", "Kiwi"]
fruits[2] = "Banana"
console.log (fruits.length)   // will print 3 ,
console.log (fruits)          // ["Apple", "Kiwi", "Banana"]

```

1. Add value to the end of an Array push method   

```
var fruits =["Apple", "Kiwi", "Banana"];
var totalFruits = fruits.push("Orange", "Mango");
console.log (fruits)                              // frutis = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"]
cosnole.log (totalFruits)                         // totalFruits = 5
```

1. Add value to the beginning of an Array unshift  method   

```
var fruits = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"]
var totalFruits = fruits.unshift("Grape Fruit","Grape");
console.log (fruits)                                         // ["Grape Fruit","Grape","Apple", "Kiwi", "Banana", "Orange" , "Mango"]
cosnole.log (totalFruits)                                    // totalFruits = 7
```

## Removing Values from Arrays 

1. Remove last value of an Array use  pop method   

```
var fruits = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"];
var lastFruit = fruits.pop();
console.log (fruits);                                         // frutis = ["Apple", "Kiwi", "Banana","Orange"];
cosnole.log (lastFruit);                                      // lastFruit = "Mango"
```

1. shift method, remove first element of an array  

```
var fruits = ["Apple", "Kiwi", "Banana", "Orange" , "Mango"];
var firstFruit = fruits.shift();
console.log (fruits);                                         // frutis = ["Kiwi", "Banana","Orange","Mango"];
cosnole.log (firstFruit);                                     // firstFruit = "Apple"
```


## Finding values in arrays

1. Use includes() method to find if an array includes a certain value

```
var vowels , char1 , char2;
vowels = ["a", "e", "i", "o" , "u" , "A", "E" , "I" , "O", "U"];
char1 = "i"; char2 = "p";
console.log (vowels.includes(char1) )                            // prints true;
console.log (vowels.includes(char2) )                            // prints false;
```
1. Use indexOf() method to find the index of a value in an array
  1. returns the first index of the value in the array; -1 if not found.

```
var whiteSpaces , char1 , char2;
whiteSpaces = [" ","/t","n", "/r"];
char1 = "The Jean Genie".charAt(3)        // char1 = " "
char2 = "The Jean Genie".charAt(4)        // char2 = "J"
console.log (whiteSpaces.indexOf(char1) ) // prints 0;
console.log (whiteSpaces.indexOf(char2) ) // prints -1;
```




## misc 
1. Arrays are passed around by reference 

```
var sushi = ["maki" , "sahsimi"]; // sushi points to a location in memory that holds array object with "maki" and "sashimi" values
var pizza = sushi;                // pizza now points to the same location in memory that holds array object with "maki" and "sashimi" values
console.log( pizza[1]) ;          // prints 'sashimi'
pizza.push("chicago");            // adds "chicago" to the array object that previosuly had 2 values "maki" and "sashimi"
console.log(sushi.length);        // prints 3;
console.log (sushi[2]);           // prints 'chicago'

```


1. Arrays are passed to functions by reference. 

```
var sushi , pizzas ;
sushi =  ["nigri" , "sashimi" , "maki"]; // sushi points to an array object with 3 values

// Declare a function addPizza that takes array as input parameter

var addPizza = function(someArray){
  someArray.push("chicago");
}
addPizza(sushi); // Invoke addPizza  with sushi as arguement. 
//sushi is passed to addPizza function by reference.
//This means that that someArray parameter of function addPizza points to the same array object that sushi points to
// addPizza executes and adds a value "chicago" to the same array object that sushi points to

console.log (sushi); // this will print ["nigri", "sashimi" , "maki","chicago"];


```

1. Copying Arrays, Use  spread (...) syntax to make a copy of an array 

```
var coffee = ["espresso" , "cappuccino"];
var moreCoffee = [...coffee];
console.log (moreCoffee)          // prints ['expresso','cappuccino']
moreCoffee.push ("latte");
console.log (moreCoffee);         // prints ['expresso','cappuccino','latte']
console.log (coffee)              // prints ['expresso','cappuccino']
```

# basic.30.scope 
  1. Variables in JS have 3 types of scope: global , function and block (with ES6)
  1. Variables with block scope are visible anywhere in the block. Not visible outside the block 
  1. Variables with function scope are visible anywhere in the function. Not visible outside the function 
  1. Variables with global scope are visible(accessible) anywhere in the program 
  1. Inner blocks get access to parameters and variables of the blocks that they are defiend within
  1. Basic.60.scope ->Inner blocks do not get access to arguments this 
  1. Basic.60.scope ->Inner blocks do not get access to this 

## Block Scope with let statement 
  1. A variable with block scope is visible anywhere within the block & not visible outside the block
  1. Inner blocks get access to variables declared in outer blocks 
  1. Use let statement to declare variable with block scope
  1. Inner blocks get access to parameters and variables of the blocks that they are defiend within
  1. Basic.60.scope ->Inner blocks do not get access to arguments this 
  1. Basic.60.scope ->Inner blocks do not get access to this 

```
'use strict';
let fruits = function(){        // Block 1 Start
  let x = "Oranges";
  let y = "Bananas"

  if(true){                     // Block 2 Start. Block 2 is inside Block 1
    let z = "Grapes";
    console.log ("In Block 2");
    console.log (x);            // prints 'Oranges'. x is declared in the outer block
    console.log (y);            // prints 'Bananas'. y is declared in the outher block
    console.log (z);            // prints 'Grapes',
  }                             // Block 2 Ends

    console.log ("In Block 1");
    console.log (x);            // prints 'Oranges'.
    console.log (y);            // prints 'Bananas'
    console.log (z) ;           // throws ReferenceError  z was defined in Inner Block not accessible here
}();                            // Block 1 Ends

```

## Function scope with var statement
  1. A variable with function scope is visible anywhere within the function & not visible outside the function
  1. Use var statement to declare variable with function scope
  1. Inner functions get access to parameters and variables of the functions that they are defiend within
  1. Inner functions do not get access to arguments and this 
  1. All varaibles declarations with var are hoisted(moved) to the begining of the function

```
'use strict';
var fruits = function(){        // Block 1 Start
  var x = "Oranges";
  var y = "Bananas"

  if(true){                     // Block 2 Start. Block 2 is inside Block 1
    var z = "Grapes";           // z declared in Block 2 with var statement has function scope
    console.log ("In Block 2");
    console.log (x);            // prints 'Oranges'. x is declared in the outer block
    console.log (y);            // prints 'Bananas'. y is declared in the outher block
    console.log (z);            // prints 'Grapes',
  }                             // Block 2 Ends

    console.log ("In Block 1");
    console.log (x);            // prints 'Oranges'.
    console.log (y);            // prints 'Bananas'
    console.log (z) ;           // prints 'Grapes'
}();                            // Block 1 Ends
```
##  Global Scope 
  1. Global scope is root of all evil.Any undeclared variable will be have global scope 
  1. Use strict mode to force declaration of variables 
  1. Add "use strict"; before any other statements.

  ```
  'use strict';
  str = "Bad Variable"; //  will generate ReferenceError: str is not defined
  console.log(str);     //  will never execute
  ```

## Javascript Values are passed or assigned  by value or reference

### numbers, boolean & string values  are assigned by Value 
```
var x , y; 
x = 5;            // x has a value of 5 
y = x;            // y is assigned the value of x. y has a value of 5
console.log (x) ; // prints 5 
console.log (y) ; //prints 5 

x = x + 1 ;        

console.log (x) ; // prints 6
console.log (y) ; //prints 5 
```
1. Objects, Arrays and Functions are passed or assigned by Reference

```   
var a, b;
a = { name : "Sponge Bob" , age : "100" };
// Value of a is a pointer (reference) to the object in memory which has two properties name and age.
b = a; //Value of b is the pointer (or referene) to the same object in memory;
//a and b point to the same object
console.log (b.name); //will print "Sponge Bob";
b.name = "Patrick Star"
console.log (a.name); //will print "Patrick Star"

```

1. Simple values are passed to functions  by Value 
```
var num = 10; 
var incremento = function(x){
x = x + 1; 
}

//parameter x of incremento will be assigned the value of num when the function is invoked. 
incremento(num);
console.log (num); //will print 10;
```

## Closure - Very Cool JavaScript Feature 
1. Inner functions have access to outer function's variables and parameters even after the outer function has returned
1. Closures are functions that remember the variables of the outer functions where they were created.

```
let makeFruitify = function(strFruit){
  let fruit = strFruit;
    let fruitfy = function(){
     return fruit;
    }                                  // end of fruitfy
  return fruitfy;
}                                      // end of makeFruitify

let kiwify  = makeFruitify('kiwi');    // kiwify is a closure
                                       // can access var fruit declared in makeFruitify, even after makeFruitify returns.
console.log(typeof (kiwify));          // prints 'function'
console.log (kiwify());                // prints kiwi.




```

# basic.30.objects

## General
1. Objecs are collection of properties
1. A property = a pair of name and value
1. Property name is a string
1. Property value can be boolean, number , string, objects and functions
1. Property values that are functions are called methods

## Creating objects using Object literal notation {} 
```
let vehicle   = {};
console.log (typeof(vehicle)); //prints 'object'
```
### Adding properties to an Object 
1. Add properties to Object using dot notation and assignment operator
1. To create a property name w/o any values assign undefined to property name (Do not use null)
1. to check if Object has a property use in operator
```
let vehicle   = {};
vehicle.make  = 'Honda';          // Adds a property with name = 'make' and value ='Honda'
vehicle.model = 'Accord';         // Adds a property with name = 'model' and value = 'Accord'
vehicle.year  = undefined;        // Adds a propert with name = 'year' and value = undefined

console.log ('make' in vehicle);  // prints true
console.log ('model' in vehicle); // prints true
console.log ('year' in vehicle);  // prints true even if the value of property is undefined
console.log ('color' in vehicle); // prints false

```

1. You can also Add properties to Object using [] notation and assignment operator
1. The property name have to be enclosed in quotes (or double quotes)

```
let vehicle      = {};
vehicle['make']  = 'Honda';
vehicle['model'] = 'Accord';
vehicle['year']  = undefined;

console.log ('make' in vehicle);  // prints true
console.log ('model' in vehicle); // prints true
console.log ('year' in vehicle);  // prints true
console.log ('color' in vehicle); // prints false
```
1. you can also add properties to an object using notation shown below 

```
let vehicle = { 
  make  : 'Honda',
  model : 'Accord',
  year  : undefined
};

console.log ('make' in vehicle);  // prints true
console.log ('model' in vehicle); // prints true
console.log ('year' in vehicle);  // prints true
console.log ('color' in vehicle); // prints false
```
### Retriving property values  from an Object 
1. Property can be retireved  using . notations or square brackets [] 

```
let vehicle = { 
  make  : 'Honda',
  model : 'Accord',
  year  : undefined
};

console.log (vehicle.make);     // prints 'Honda'
console.log (vehicle['model']); // prints 'Accord'

```
### Updating  property values  from Object 
1. Property can be updating  using . notation or square brackets [] 

```
let vehicle = { 
  make  : 'Honda',
  model : 'Accord',
  year  : undefined
};

vehicle.make = "BMW";
vehicle["model"] = "X5";

console.log (vehicle.make);     // prints 'BMW'
console.log (vehicle['model']); // prints 'X5'

```

### Deleting Object properties with a delete operator  
```
let vehicle      = {};
vehicle['make']  = 'Honda';
vehicle['model'] = 'Accord';
vehicle['year']  = undefined;

console.log ('make' in vehicle);  // prints true
console.log ('model' in vehicle); // prints true
console.log ('year' in vehicle);  // prints true

delete vehicle.make;
delete vehicle.model; 

console.log ('make' in vehicle);  // prints false
console.log ('model' in vehicle); // prints false
console.log ('year' in vehicle);  // prints true

```


###  Objects can have properties that are simple value types (number, string or boolean) 
1. vehicle object with make, model and year properties
```
let vehicle   = {};
vehicle.make  = 'Honda';
vehicle.model = 'Accord';
vehicle.year  = 2015;

console.log (vehicle.make)  // prints 'Honda'
console.log (vehicle.model) // prints 'Accord'
console.log (vehicle.year)  // prints 2015 
```
### Object Specifiers
1. Objects with simple property values can be passed as arguments to functions 
1. This simplifies the declaration and invokation of functions with large number of parameters
1. These objects are called Object Specfiers 
```
var printVehicle = function (make, model , color, year, mileage, vinNumber){
  console.log ('make = ' + make);
  console.log ('model = ' + model);
  console.log ('color = ' + color);
  console.log ('year = ' + year);
  console.log ('mileage = ' + mileage);
  console.log ('vinNumber = ' + vinNumber);

}// end of printVehicle

// Invoke printVehicle 
printVehicle('Honda','Accord','red','2015','12000','123123213131');
```
```
var betterPrintVehicle = function (spec){
  console.log ('make = '      + spec.make);
  console.log ('model = '     + spec.model);
  console.log ('color = '     + spec.color);
  console.log ('year = '      + spec.year);
  console.log ('mileage = '   + spec.mileage);
  console.log ('vinNumber = ' + spec.vinNumber);

}// end of betterPrintVehicle

let spec       = {};       // Create the Object Specifier
spec.make      = 'Honda';
spec.model     = 'Accord';
spec.color     = 'red';
spec.year      = '2017';
spec.mileage   = '12000';
spec.vinNumber = '1232143253456346';

betterPrintVehicle(spec);  // Invoke betterPrintVehicle 
```

### Objects can have properties that are functions.These functions are called methods
```
let vehicle   = {};
vehicle.make  = 'Honda';
vehicle.model = 'Accord';

vehicle.sayHello = function sayHello(){
  console.log ('Hello');
}

console.log(typeof (vehicle.sayHello)) // prints 'function'
vehicle.sayHello();                    // prints 'Hello'
```

### Objects can have properties that are other objects 

```
let vehicle   = {};
vehicle.make  = 'Honda';
vehicle.model = 'Accord';

vehicle.driver = {};  // Creates a property with name = 'driver' and value of type object
vehicle.driver.name = 'Sponge Bob';
vehicle.driver.age = 20;

console.log (typeof (vehicle.driver)); // prints 'object'
console.log (vehicle.driver.name);     // prints 'Sponge Bob'
console.log (vehicle.driver.age);      // prints 20
```
## Dictionaries : Collection of Objects  
1. A Dictionary is a an Object that has properties whoe's values are also objects 
    1. Each property value of the dictionary is an object.
    1. Each property name of the dictionary is a string that uniquely identifies the object
1. Dictionaries are used to store a collecton of related objects
    1. e.g. a collection of all vehicles at a dealership can be stored in a toyotaDealer dictionary 
    1. e.g. a collection of all students at Oxford Learning Center in a oxfordSchool dictionary
1. Implementing Dictionaries in JavaScript is hilariously simple
1. Dictionary in JavaScript an Object with a set of name Value pairs where 
    1. the property value is an object e.g student = { name = 'ryan' , email = 'ryan@gmail.com , grade = 7 }
    1. the property value is the unique string that identifies student e.g. 'ryan@gmail.com'
1. Steps to create a Dictionary (e.g a dictionary of all students at a school)
    1. Step 0 Find out what makes each student unique and use it as a property name for dictionary object
    1. Step 1 create an empty object to hold the dictioanry e.g. sudentDictionary
    1. Step 2 create a new student object that will be added to the dictionary
    1. Step 3 Add student object created in step 2 to the dicitonary  object using the [] notation
        1. property name = uniquie value of the student object 
        1. property value = copy of the student object
    1. Step 4 Repeat Step 2 and 3 for other student objects

```
// Assume there are three students with following properties 
// First student  : name = ryan , email = ryan@gmail.com , grade = 7
// Second student : name = alex , email = alex@gmail.com , grade = 6
// Third student : name = bella , email = bella@hotmail.com , grade = 4
// Also Assume that each student has a unique email


// Create a dictionary of student objects

// step 0 :  find what makes every student unique 
// we know that every student has a unique email  

//step 1 : Create empty object to hold the dictionary 
let studentDictionary = {};

//step 2 : Create a new student object that will be added to the dictionary 
let student1    = {};
student1.name   = 'ryan';
student1.email  = 'ryan@gmail.com';
student1.grade  = 7;


//step 3 : Add student object to the dictionary object using [] notation
// the property name = email of the student 
// the property value = the student object
studentDictionary[student1.email] = student1;


//step 3 : Repeat step 2 and 3  for other student objects 

// Add student 2 to the dictionary
let student2    = {}
student2.name   = 'alex';
student2.email  = 'alex@gmail.com';
student2.grade  = 6;

studentDictionary[student2.email] = student2;

// Add student 3 to the dictionary
let student3    = {}
student3.name   = 'bella';
student3.email  = 'bella@hotmail.com';
student3.grade  = 4;

studentDictionary[student3.email] = student3;

console.log(studentDictionary);


// find student ryan in student dictionary
// to find ryan in the dictioanry we need to know ryan's email as this makes him unique
let student = studentDictionary["ryan@gmail.com"];
console.log (student.grade);  // prints 7
console.log (student.name) ; // prints 'ryan'

// delete student ryan from  student dictionary
delete studentDictionary["ryan@gmail.com"] ;
let ryan = studentDictionary["ryan@gmail.com"];
console.log (typeof(ryan)); // prints undefinedd

```

## Factories : Making  objects with function factories
1. All properties of an object are visible.This implies these can be read and updated by anybody 
1. Some applications require private variables and private methods. 
1. The best way to create objects with private variables and functions is to use a function factory. 
1. A factory is a function that returns an object that hides its  private variables  
1. A factory function does the following 
    1. Step 1 : Create a new  empty object 
    1. Step 2 : Defines private variables and methods. These are vars with function scope, hence are accessible only inside the function 
    1. Step 3 : Adds methods to the object.These methods will remember vars define in step 2 even after factory function returns (closure) 
    1. Step 4 : Returns the object defined in step 1 

### Create a factory function for vehicle objects
```
let vehicleFactory = function(spec){

  // Step 1 : Create new Object
  let vehicle   = {};

  // Step 2a : Declare and initialize private variables

  let make  = '';                          
  let model = '';                          

  // Step 2b : Declare private functions 
 
  let getMake = function getMake(){   
    return make;
  }// end of getMake

  let setMake = function setMake(strMake){ 
    if (typeof (strMake) !== 'string'){
      throw 'strMake is not of type string';
    }
    make = strMake;
  }// end of setMake

  let getModel = function getModel(){   
    return model;
  }// end of getModel

  let setModel = function setModel(strModel){ 
    if (typeof (strModel) !== 'string'){
      throw 'strModel is not of type string';
    }
    model = strModel;
  }// end of setModel

  // Step 3 : Add public methods to the object
  
  vehicle.getMake  = getMake;
  vehicle.setMake  = setMake;
  vehicle.getModel = getModel;
  vehicle.setModel = setModel;

  // Step 4 : return the object
  return vehicle;                                 

}
```
### Use vehicle facrory to create Objects 
1. Create an objects with Factory function
```
let dadCar = vehicleFactory();   // create dad's Car object using factory function

console.log (dadCar.make)        // prints undefined make is a private variable 
console.log (dadCar.model)       // prints undefined model is a private variable

dadCar.setMake('BMW');           // set make for dadCar
dadCar.setModel('X5');           // set model for dadCar
console.log (dadCar.getMake());  // prints  'BMW'
console.log (dadCar.getModel()); // prints  'X5'

```
```
let ryanCar = vehicleFactory();   // create ryan's Car object using factory function
ryanCar.setMake('Ford');          // set make for ryanCar
ryanCar.setModel('F150');         // set model for ryanCar
console.log (ryanCar.getMake());  // prints  'Ford'
console.log (ryanCar.getModel()); // prints  'F150'

```












