
module.exports = function(){

/**
 *
 * 	npm test basic.30.arrays
 * 
 * -----------------------   length property ------------------  
 * 
 * to run all tests in this section  use 
 * 	npm test basic.30.arrays.length
 * 
 * @todo Declare variables v1 , v1_value, v1_type 
 * Assign fruits = ["Apple", "Banana", "Kiwi"]; 
 * Assign v1 = fruits.length;    
 * Assign the value of v1 variable to v1_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v1 to v1_type as a string e.g. "number" or "string" or "boolean"
 * 
 * @todo Declare variables v2 , v2_value  
 * Assign v2 = fruits[0]; 
 * Assign the value of v2 variable to v2_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v2 to v2_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables v3 , v3_value,  
 * Assign v3 = fruits[3]; 
 * Assign the value of v3 variable to v3_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v3 to v3_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables v4 , v4_value, 
 * Assign v4 = fruits[fruits.length -1]; 
 * Assign the value of v4 variable to v4_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v4 to v4_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables veggies, v5 , v5_value, 
 * Assign veggies = ["Cabbage", "Carrot"];
 * Assign veggies[1] = "Celery";
 * Assign veggies[2] = "Potato";
 * Assign v5 = veggies.length; 
 * Assign the value of v5 variable to v5_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * 
 * Assign v6 = veggies[0];
 * Assign v7 = veggies[1];
 * Assign v8 = veggies[2];
 * Assign v9 = veggies[3];
 
 * Assign the value of v6 variable to v6_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v7 variable to v7_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v8 variable to v8_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v9 variable to v9_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * 
 * @todo Declare varaible empty , v10 , v10_value , v11 and v11_value
 * Assign empty = [];
 * Assign empty.length = 10;
 * Assign v10 = empty.length;
 * Assign v11 = empty[1]; 
 *
 * Assign the value of v10 variable to v10_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v11 variable to v11_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * @todo Declare variables dairy, v12 , v12_value 
 * Assign dairy = [];
 * Assign dairy[0] = "Milk";
 * Assign dairy[1] = "Cheese";
 * Assign v12.length = dairy.length; 
 * Assign the value of v12 variable to v10_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * 
 * @Declare variable isGrapeFruit 
 * Assign isGrapeFruit  = an anonymous function using a function expression 
 * The function takes one parameter fruits which should be an array
 * The function returns true is there a "grape fruit" string value in the array
 * The function returns false of there is no "grape fruit" string value in the array
 * The function returns false if the parameter passed frutis is not an array
 *
 *
  *
    * @Declare a variable  stringify and assign it to a function expression
    * Takes one parameter someArray
    * returns false if someArray is missing or if it is not an array
    * returns an array that has only string values from someArray
    * returns an empty array if someArray does not have any string values
    * e.g. stringify() //returns false 
    * e.g. stringify(["Apple",1,2,true,"Orange"]) // returns ["Apple" , "Orange"];
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
 * 
 */
// ******** Don't edit above this line *********************** 

var fruits = ["Apple", "Banana" , "Kiwi"];

var v1 = fruits.length; 
var v1_value = "3"; 
var v1_type = "number";

var v2 = fruits[0];
var v2_value = "Apple";
var v2_type = "string";

var v3 = fruits[3];
var v3_value = "undefined";
var v3_type = "undefined";

var v4 = fruits[fruits.length -1];
var v4_value = "Kiwi";
var v4_type ="string"

var veggies = ["Cabbage", "Carrot"];
veggies[1] = "Celery";
veggies[2] = "Potato";

var v5 = veggies.length;
var v5_value ="3";

var v6 = veggies[0];
var v6_value = "Cabbage";
 
var v7 = veggies[1];
var v7_value = "Celery";
var v8 = veggies[2];
var v8_value = "Potato";
var v9 = veggies[3];
var v9_value = "undefined";
 

var empty = [];
empty.length = 10;
var v10 = empty.length;
var v10_value = "10";
var v11 = empty[1];
var v11_value = "undefined";


var dairy, v12, v12_value;
dairy = [];
dairy[0] = "Milk";
dairy[1] = "Cheese";
v12 = dairy.length;
v12_value = "2";



// isGrapeFruit
var isGrapeFruit; 
isGrapeFruit = function (fruits){
  if (! Array.isArray(fruits)) {
    return false;
  }
  var returnValue = false;
  for(i=0; i<fruits.length; i++){
    if (fruits[i] === "grape fruit"){
      returnValue = true;
    }
  }

  return returnValue;

} // end of isGrapeFruit


// stringify
var stringify = function (someArray){
  var returnArray = [];
  //check if someArray is an Array
  if (! Array.isArray(someArray)){
    return false;
  }
  for(i=0;i<someArray.length;i++){
    if(typeof(someArray[i]) === "string"){
        returnArray.push(someArray[i]);
      }
  }

  return returnArray;
}









// ******** Don't edit below this line *********************** 
	var obj = {};

	(typeof(fruits)=== 'undefined') || (obj.fruits = fruits); 
	(typeof(veggies)=== 'undefined') || (obj.veggies = veggies); 
	(typeof(dairy)=== 'undefined') || (obj.dairy = dairy); 
	(typeof(isGrapeFruit)=== 'undefined') || (obj.isGrapeFruit = isGrapeFruit); 
	(typeof(stringify)=== 'undefined') || (obj.stringify = stringify); 
 
	(typeof(v1)=== 'undefined') || (obj.v1 = v1); 
	(typeof(v1_type)=== 'undefined') || (obj.v1_type = v1_type) ;
	(typeof(v1_value)=== 'undefined') || (obj.v1_value = v1_value) ;
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



	
	return obj;
	
}();
