'use strict'
module.exports = function(){

/**
 *
*
 *
 *
 *
 *
 *
 * # Tests 
 * to run all tests in this file use 
 *  
 *  npm test basic.30.control.structures
 *
 * -----------------if else statement --------------------------------------
 * npm test control.structures.if 
 *
 * @todo isFiniteNumber
 * Declare variable isFiniteNumber and assign it a function expression that
 * Takes 1 parameter
 * returns false if the parameter is missing or undefined
 * returns false if the parameter is NaN
 * returns false if the parameter is Infinity or -Infinity
 * returns true if the type of parameter = number else returns false
 *
 * @todo isString
 * Declare variable isString and assign it a function expression that
 * Takes 1 parameter
 * returns false if the parameter is missing or undefined
 * returns true if the type of parameter = "string" else returns false
 * 
 * @todo declare  variable gtFive
 * Assign  gtFive  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x
 * The function throw an exception if the parameter x is not a number 
 * The function throw an exception if the parameter x is NaN  
 * The function returns boolean value true if the parameter x is a number and is greater than 5  
 * The function returns boolean value false if the parameter x is a number and is less than equal to five
 * e,g gtFive(6) returns true  
 * e,g gtFive("6") throw an exception 
 * e,g gtFive(NaN) throw an exception  
 * e,g gtFive(5) throw an exception  
 * e,g gtFive(4) throw an exception  
 * e,g gtFive() throw an exception   
 * 
 * @todo dosGrande
 * declare variable dosGrande and assign it a function expression that
 * Takes 2 numbers as parameters and returns the largest number
 * Returns Exception if the parameters are missing or if they are not numbers
 * 
 * @todo tresGrande
 * declare variable tresGrande and assign it a function expression that
 * Takes 3 numbers as parameters and returns the largest number
 * Returns Exceptionif the parameters are missing or if they are not numbers
 * 
 * 
 * @todo quatroGrande
 * Declare variable quatroGrande and assign it a function expression that
 * Takes 4 numbers as parameters and returns the largest number
 * Throws Exception if the parameters are missing or if they are not numbers* 
 * 
 *
 *
 * -----------------for  statement --------------------------------------
 * ## To run all tests in this section use 
 *  npm test for 
 *
 * 
 * @todo naturalSum
 * Declare variable naturalNum and assign it a function expression that
 * Takes 1 parameter n
 * returns false if the parameter is missing or undefined
 * returns false if the parameter is NaN
 * returns false if the parameter is Infinity or -Infinity
 * returns false if the type of parameter is not a number
 * returns the sum of Natural numbers till the number n
 * e.g. naturalNum(2) //returns 0+1+2 = 3
 * e.g. naturalNum(5) //returns 0+1+2+3+4+5 = 15
 * 
 * 
 * 
 * @todo declare  variable hiFive 
 * Assign  hiFive = an anonymous function using a function expression 
 * The function takes two  input parameters  x and y  
 * The function throw an exception if the parameter x or y is not a number 
 * The function throw an exception if the parameter x or y is NaN  
 * The function increments x by 5 , y number of times and returns the number value 
 * e.g hiFive() throw an exception as one or both arguments are missing  
 * e.g hiFive(5) throw an exception as one or both arguments are missing  
 * e.g hiFive("5",1) throw an exception as one or both arguments is not a number 
 * e.g hiFive(5,"1") throw an exception  as one or both arguments is not a number
 * e.g hiFive(5,0) returns 5 
 * e.g hiFive(5,1) returns 10
 * e.g hiFive(5,2) returns 15
 * e.g hiFive(5,3) returns 20
 * e.g hiFive(6,1) returns 11
 * 
 *
 * @todo declare  variable loFive 
 * Assign  loFive = an anonymous function using a function expression 
 * The function takes two  input parameters  x and y  
 * The function throw an exception if the parameter x or y is not a number 
 * The function throws an exception if the parameter x or y is NaN  
 * The function decrements x by 5 , y number of times and returns the number value 
 * e.g loFive() throws an exception as one or both arguments are missing  
 * e.g loFive(5) throws an exception as one or both arguments are missing  
 * e.g loFive("5",1) throws an exception as one or both arguments is not a number 
 * e.g loFive(5,"1") throws an exception  as one or both arguments is not a number
 * e.g loFive(5,0) returns 5 
 * e.g loFive(5,1) returns 0
 * e.g loFive(5,2) returns -5
 * e.g loFive(5,3) returns -10
 * e.g loFive(6,1) returns 1
 *
 *
 * ---------------------------  bonus --------------------------------------------------
 *
 * to run all tests in this section  use 
 *  npm test control.structures.bonus
 *
 * @Declare variable naturalSum 
 * Assign naturalSum  = an anonymous function using a function expression 
 * The function takes one parameter num  which should be an a valid finite number
 * The function throws an exception if the parameter passed num is not a  number
 * The function returns the sum of Natural numbers till the number num
 * e.g. naturalSum(2) //returns 1+2 = 3
 * e.g. naturalSum(5) //returns 1+2+3+4+5 = 15
 * e.g. naturalSum(10) //returns 1+2+3+4+5+6+7+8+9+10 = 55
 *
 *
 */
// ******** Don't edit above this line *********************** 



//isFiniteNumber
var isFiniteNumber = function(x){
  
  //check if the argument x is not a number  
  if(typeof(x) !== "number"){    return false; }
  //check if the argument x is a NaN
  if ( isNaN(x) ){ return false;}   


  
  var answer = false;
  //check if the argument x is a finite number  
  if (isFinite(x)){ answer = true;}


  return answer;

}//end of isFiniteNumber


//isString
var isString = function(x){
  
  //check if the argument x is not a number  
  
  var answer = false; 
  if(typeof(x) === "string"){  answer = true;  }
  
  return answer;

}//end of isString


// gtFive

var gtFive =function(x){

  //throw an exception if the argument x is not a number or if it is a NaN
  if(typeof(x) !== "number"){  throw 'Invalid Parameter';}
  if(isNaN(x)) { throw 'Invalid Parameter'; } 

  var answer = false; 
  
  if ( x>5 ) { answer = true;} 
  
  return answer;

  // (x>5) ? true : false;
 } 


//dosGrande
var dosGrande = function(x,y){
  
  //check if the argument x or y is not a number  
  if(typeof(x) !== "number"){  throw 'Invalid Parameter';}
  if(isNaN(x)) { throw 'Invalid Parameter'; } 
  
  if(typeof(y) !== "number"){  throw 'Invalid Parameter';}
  if(isNaN(y)) { throw 'Invalid Parameter'; } 
  
  var bigNumber = -Infinity; 
  
  if ( x > bigNumber) { bigNumber = x; }
  if ( y > bigNumber) { bigNumber = y; } 
  
  return bigNumber;


}//end of dosGrande


//tresGrande
var tresGrande = function(x,y,z){
  
  //check if the argument x or y is not a number  
  if(typeof(x) !== "number"){  throw 'Invalid Parameter';}
  if(isNaN(x)) { throw 'Invalid Parameter'; } 
  
  if(typeof(y) !== "number"){  throw 'Invalid Parameter';}
  if(isNaN(y)) { throw 'Invalid Parameter'; } 
 
  if(typeof(z) !== "number"){  throw 'Invalid Parameter';}
  if(isNaN(z)) { throw 'Invalid Parameter'; } 
 
  var bigNumber = -Infinity; 
  
  if ( x > bigNumber) { bigNumber = x; }
  if ( y > bigNumber) { bigNumber = y; } 
  if ( z > bigNumber) { bigNumber = z; } 

  return bigNumber;


}//end of tresGrande


//quatroGrande
var quatroGrande = function(x,y,z,a){
  
  //check if the argument x or y is not a number  
  if(typeof(x) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(x)) {  throw 'Invalid Parameter'; } 
  
  if(typeof(y) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(y)) {  throw 'Invalid Parameter'; } 
 
  if(typeof(z) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(z)) {  throw 'Invalid Parameter'; } 
 
  if(typeof(a) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(a)) {  throw 'Invalid Parameter'; } 
 
  var bigNumber = -Infinity; 
  
  if ( x > bigNumber) { bigNumber = x; }
  if ( y > bigNumber) { bigNumber = y; } 
  if ( z > bigNumber) { bigNumber = z; } 
  if ( a > bigNumber) { bigNumber = a; } 

  return bigNumber;


}//end of quatroGrande




var hiFive =function(x,y){

  //throw an exception if the arguments are not valid numbers 
  if(typeof(x) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(x)) {  throw 'Invalid Parameter'; } 
  
  if(typeof(y) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(y)) {  throw 'Invalid Parameter'; } 
 
  //throw an exception if x or y is not a  finite number  
  if (! isFinite(y)){  throw 'Invalid Parameter';  }
  if (! isFinite(x)){  throw 'Invalid Parameter';  }
 
  var answer = x; 
  var i = 0 ;
  for(i=0; i<y ; i++){
    
    answer  = answer + 5; 

  }//end for loop 
  
  return answer;

 } 



var loFive =function(x,y){

  //throw an exception if the arguments are not valid numbers 
  if(typeof(x) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(x)) {  throw 'Invalid Parameter'; } 
  
  if(typeof(y) !== "number"){   throw 'Invalid Parameter';}
  if(isNaN(y)) {  throw 'Invalid Parameter'; } 
 
  //throw an exception if x or y is not a  finite number  
  if (! isFinite(y)){  throw 'Invalid Parameter';  }
  if (! isFinite(x)){  throw 'Invalid Parameter';  }
 
  var answer = x; 
  var i = 0 ;  
  //use for loop to decrease x by 5 , y times 
  for(i=0; i<y ; i++){
    
    answer = answer - 5; 

  }//end for loop 
    

  return answer;

} 


//bonus section


//naturalSum
var naturalSum = function(n){
  //check if the argument n is not a number  
  if(typeof(n) !== "number"){     throw 'Invalid Parameter'; }
  //check if the argument n is a NaN
  if ( isNaN(n) ){  throw 'Invalid Parameter';}   
  //check if the argument n is a finite number  
  if (isFinite(n) === false){  throw 'Invalid Parameter'; ;}

  let answer = 0; 
  let i = 0;
  for(i=1; i<= n ; i++){
    answer = answer + i;
  }//end for loop   

  return answer;

}//end of naturalSum



 



// ******** Don't edit below this line *********************** 
  var obj = {};

  (typeof(isFiniteNumber)=== 'undefined') || (obj.isFiniteNumber = isFiniteNumber); 
  (typeof(isString)=== 'undefined') || (obj.isString = isString); 
  (typeof(gtFive)=== 'undefined') || (obj.gtFive = gtFive); 
  (typeof(dosGrande)=== 'undefined') || (obj.dosGrande = dosGrande); 
  (typeof(tresGrande)=== 'undefined') || (obj.tresGrande = tresGrande); 
  (typeof(quatroGrande)=== 'undefined') || (obj.quatroGrande = quatroGrande); 
  

  (typeof(hiFive)=== 'undefined') || (obj.hiFive = hiFive); 
  (typeof(loFive)=== 'undefined') || (obj.loFive = loFive); 
  (typeof(naturalSum)=== 'undefined') || (obj.naturalSum = naturalSum); 
  
  return obj;
  
}();
