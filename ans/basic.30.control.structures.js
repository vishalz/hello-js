
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
 * 	npm test basic.30.control.structures
 *
 * -----------------if else statement --------------------------------------
 * ## To run all tests in this section use 
 * npm test if 
 *
 * @todo declare  variable gtFive
 * Assign  gtFive  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x
 * The function return false if the parameter x is not a number 
 * The function returns false if the parameter x is NaN  
 * The function returns boolean value true if the parameter x is a number and is greater than 5  
 * The function returns boolean value false if the parameter x is a number and is less than equal to five
 * e,g gtFive(6) returns true  
 * e,g gtFive("6") returns false 
 * e,g gtFive(NaN) returns false  
 * e,g gtFive(5) returns false  
 * e,g gtFive(4) returns false  
 * e,g gtFive() returns false   
 *
 * -----------------while  statement --------------------------------------
 * ## To run all tests in this section use 
 *  npm test while 
 *
 * @todo declare  variable hiFive 
 * Assign  hiFive = an anonymous function using a function expression 
 * The function takes two  input parameters  x and y  
 * The function return false if the parameter x or y is not a number 
 * The function returns false if the parameter x or y is NaN  
 * The function increments x by 5 , y number of times and returns the number value 
 * e.g hiFive() returns false as one or both arguments are missing  
 * e.g hiFive(5) returns false as one or both arguments are missing  
 * e.g hiFive("5",1) returns false as one or both arguments is not a number 
 * e.g hiFive(5,"1") returns false  as one or both arguments is not a number
 * e.g hiFive(5,0) returns 5 
 * e.g hiFive(5,1) returns 10
 * e.g hiFive(5,2) returns 15
 * e.g hiFive(5,3) returns 20
 * e.g hiFive(6,1) returns 11
 * 
 * -----------------for  statement --------------------------------------
 * ## To run all tests in this section use 
 *  npm test for 
 *
 * @todo declare  variable loFive 
 * Assign  loFive = an anonymous function using a function expression 
 * The function takes two  input parameters  x and y  
 * The function return false if the parameter x or y is not a number 
 * The function returns false if the parameter x or y is NaN  
 * The function decrements x by 5 , y number of times and returns the number value 
 * e.g loFive() returns false as one or both arguments are missing  
 * e.g loFive(5) returns false as one or both arguments are missing  
 * e.g loFive("5",1) returns false as one or both arguments is not a number 
 * e.g loFive(5,"1") returns false  as one or both arguments is not a number
 * e.g loFive(5,0) returns 5 
 * e.g loFive(5,1) returns 0
 * e.g loFive(5,2) returns -5
 * e.g loFive(5,3) returns -10
 * e.g loFive(6,1) returns 1
 * 
 *
 */
// ******** Don't edit above this line *********************** 

var gtFive =function(x){

  //check if the argument x is a NaN
  if ( isNaN(x) ){
    return false;
  }   

  //check if the argument x is not a number  
  if(typeof(x) !== "number"){
    return false;
  }

  // (x>5) ? true : false;

  //check if the argument x is greater than 5
  if ( x>5 ) {
    return true;
  } else {
    return false;
  }

 } 


var hiFive =function(x,y){

  //check if the argument x is a NaN
  if ( isNaN(x) ){
    return false;
  }   

  //check if the argument x is not a number  
  if(typeof(x) !== "number"){
    return false;
  }

  //check if the argument y is a NaN
  if ( isNaN(y) ){
    return false;
  }   

  //check if the argument y is not a number  
  if(typeof(y) !== "number"){
    return false;
  }

  //check if the argument y is a finite number  
  if (!isFinite(y)){
    return false;
  }
  
  //use while loop to increase x by 5 , y times 
  var counter = 0; 
  while (counter < y){
    x = x + 5;
    counter = counter + 1;

  }

  return x;

 } 



var loFive =function(x,y){

  //check if the argument x is a NaN
  if ( isNaN(x) ){
    return false;
  }   

  //check if the argument x is not a number  
  if(typeof(x) !== "number"){
    return false;
  }

  //check if the argument y is a NaN
  if ( isNaN(y) ){
    return false;
  }   

  //check if the argument y is not a number  
  if(typeof(y) !== "number"){
    return false;
  }

  //check if the argument y is a finite number  
  if (!isFinite(y)){
    return false;
  }

  //use for loop to decrease x by 5 , y times 
  for (counter=0 ; counter<y ; counter++){
     x = x - 5;
  }
    

  return x;

} 




 



// ******** Don't edit below this line *********************** 
	var obj = {};

	(typeof(gtFive)=== 'undefined') || (obj.gtFive = gtFive); 
  (typeof(hiFive)=== 'undefined') || (obj.hiFive = hiFive); 
  (typeof(loFive)=== 'undefined') || (obj.loFive = loFive); 
	
	return obj;
	
}();
