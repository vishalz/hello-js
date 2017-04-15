
module.exports = function(){

/** 
 * # Tests 
 * to run all tests in this file use 
 *  npm test basic.60.algo
 * * -----------------------   general  property ------------------  
 * 
 * to run all tests in this section  use 
 *  npm test basic.60.algo.general
 *
* @Declare variable fibonacciSum 
* Assign fibonacciSum  = an anonymous function using a function expression 
* The function takes one parameter n  which should be an a valid finite number
* The function returns false if the parameter passed num is not a  number
* The function returns the nth  Natural numbers 
* e.g. fibonacciSum(1) //returns 0 
* e.g. fibonacciSum(2) //returns 1
* e.g. fibonacciSum(3) //returns 1
* e.g. fibonacciSum(10) //returns 34
*
*/

// ******** Don't edit above this line *********************** 



//fibonacciNum
var fibonacciNum = function(n){
  //check if the argument n is not a number  
  if(typeof(n) !== "number"){    return false; }
  //check if the argument n is a NaN
  if ( isNaN(n) ){ return false;}   
  //check if the argument n is a finite number  
  if (isFinite(n) === false){ return false; ;}

  let fiboX = 0; 
  let fiboY = 1;
  let fiboZ = 0 
  let i = 0;
  for(i=1; i<= n ; i++){
    fiboX = fiboY;
    fiboY = fiboZ;
    fiboZ  = fiboX + fiboY;
    
  }//end for loop   

  return fiboZ;

}//end of fibonacciNum


// ******** Don't edit below this line *********************** 
  var obj = {};

  (typeof(fibonacciNum)=== 'undefined') || (obj.fibonacciNum = fibonacciNum); 
  
  return obj;
  
}();
