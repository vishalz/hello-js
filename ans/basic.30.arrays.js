
module.exports = function(){

/**
 *
 *  npm test basic.30.arrays
 * 
 * -----------------------   general  property ------------------  
 * 
 * to run all tests in this section  use 
 *  npm test basic.30.arrays.general
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
 * ---------------------------  Add  Values to  Array--------------------------------------------------
 *
 * to run all tests in this section  use 
 *  npm test arrays.add
 *
 * @todo Declare variables dairy, v12 , v12_value 
 * Assign dairy = [];
 * Assign dairy[0] = "Milk";
 * Assign dairy[1] = "Cheese";
 * Assign v12.length = dairy.length; 
 * Assign the value of v12 variable to v10_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * 
 * @todo Declare variables breads , v14 , v14_value, v15, v15_value;
 * Assign breads = ["white","wheat"]; 
 * Assign v14 = breads.push("rye"); 
 * Assign v15 = breads[2];
 * Assign the value of v14 variable to v14_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v15 variable to v15_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * 
 * @ Declare variables grains , v16 , v16_value, v17, v17_value;
 * Assign grains = ["barley","corn"]; 
 * Assign v16 = grains.unshift("rice"); 
 * Assign v17 = grains[2];
 * Assign the value of v16 variable to v16_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v17 variable to v17_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * ---------------------------  Remove Values from Array--------------------------------------------------
 * to run all tests in this section  use 
 *  npm test arrays.remove
 *
 * @ Declare variables rice , v18 , v18_value, v19, v19_value;
 * Assign rice = ["white","brown","basmati"]; 
 * Assign v18 = rice.pop(); 
 * Assign v19 = rice[2];
 * Assign the value of v18 variable to v18_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v19 variable to v19_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * Declare variables pasta , v20 , v20_value, v21, v21_value;
 * Assign pasta = ["fusilli","spaghetti","fettuccine"]; 
 * Assign v20 = pasta.shift(); 
 * Assign v21 = pasta[0];
 * Assign the value of v20 variable to v20_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v21 variable to v21_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * ---------------------------  Finding  Values in an  Array--------------------------------------------------
 * to run all tests in this section  use 
 *  npm test arrays.find
 *
 * @ Declare variables pizzas , v22 , v22_value, v23, v23_value;
 * Assign pizzas = ["New York" , "Chicago" , "Sicilian"];
 * Assign v22 = "Chicago"; 
 * Assign v23 = pizzas.includes(v22);
 * Assign the value of v23 variable to v23_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * @ Declare variables sushi , v24 , v24_value, v25, v25_value;
 * Assign sushi = ["nigri" , "sashimi" , "maki" ];
 * Assign v24 = "maki"; 
 * Assign v25 = sushi.indexOf(v24);
 * Assign the value of v25 variable to v25_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * 
  
 * --------------------------- misc arrays --------------------------------------------------------
 * to run all tests in this section  use 
 *  npm test arrays.misc
 *
 * @ Declare variables sushiPizza , addPizza , v26 and v26_value
 * Assign sushiPizza = ["nigri" , "maki"]
 * Assign addPizza = function that takes one parameter as an array and adds "chicago" to the end of array
 * Invoke addPizza and pass sushiPizza as a parameter  addPizza(sushiPizza);
 * Assign v26 = sushiPizza[2];
 * Assign the value of v26 variable to v26_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * Declare var apples , pears, v27, v27_value ; 
 * Assign apples = ["gala" , "fuji"];
 * Assign pears = apples;
 * push a value "asian" to the pears array 
 * Assign v27 = apples[2];
 * Assign the value of v27 variable to v27_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * Declare var coffee , moreCoffee, v28, v28_value, v29, v29_value ; 
 * Assign coffee =  ["espresso" , "cappuccino"];
 * Assign moreCoffee = [...coffee];
 * push a value "latte" to the moreCoffee array 
 * Assign v28 = coffee[2];
 * Assign v29 = moreCoffee[2];
 * Assign the value of v28 variable to v28_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v29 variable to v29_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 *
 *
 *
 *
 * ---------------------------  bonus --------------------------------------------------
 *
 * to run all tests in this section  use 
 *  npm test arrays.bonus
 *
 * @Declare variable isGrapeFruit 
 * Assign isGrapeFruit  = an anonymous function using a function expression 
 * The function takes one parameter fruits which should be an array
 * The function returns true is there a "grape fruit" string value in the array
 * The function returns false of there is no "grape fruit" string value in the array
 * The function returns false if the parameter passed frutis is not an array
 *
 * @Declare variable swapify 
 * Assign swapify  = an anonymous function using a function expression 
 * The function takes one parameter arr which should be an array with two values
 * The function returns false if the parameter passed arr is not an array
 * The function returns false if the parameter passed arr has less than 2 values
 * The function returns false if the parameter passed arr has more than 2 values
 * The function swaps the values of the arr array
 * e.g. swapify([1,2])  returns [2,1];
 * e.g. swapify(["apple", "orange"]) returns ["orange" , "apple]
 * e.g. swapify(1,2); returns false 
 * e.g. swapify([1,2,3]); returns false 
 *
 * @Declare a variable  stringify and assign it to a function expression
 * Takes one parameter someArray
 * returns empty array [] if someArray is missing or if it is not an array
 * returns an empty array if someArray does not have any string values
 * returns an array that has only string values from someArray
 * e.g. stringify() //returns [] 
 * e.g. stringify(["Apple",1,2,true,"Orange"]) // returns ["Apple" , "Orange"];
 *
 * @Declare a variable  numberify and assign it to a function expression
 * Takes one parameter someArray
 * returns an array that has only number values from someArray
 * returns an empty array if someArray does not have any number values
 * returns emptty array if someArray is missing or if it is not an array
 * e.g. numberify() //returns [] 
 * e.g. numberify([NaN,undefined,null,'',,false]) //returns [] 
 * e.g. numberify([Infinity]) //returns [Infinity] 
 * e.g. numberify(['0',1,2,true,"Orange","3",NaN]) // returns [1,2];
 *
  * @todo declare  variable countVowels
 * Assign  countVowels  = an anonymous function using a function expression 
 * takes one argument as input parameter str 
 * returns the number of vowels the parameter str
 * The function return false if the parameter str is missing
 * The function return false if the parameter str is not a  string 
 * e.g. countVowels("starman") // returns the number 2` 
 * e.g. countVowels("Under Pressure") // returns 5
 * e.g. countVowels("The Jean Genie") // returns 6
 * e.g. countVowels(1000) // returns false 
 * 
 * @Declare a variable  maxNumber and assign it to a function expression
 * Takes one parameter someArray
 * returns largest number in the array
 * returns false if someArray does not have any number values
 * returns false if someArray is missing or if it is not an array
 * e.g. maxNumber() //returns false 
 * e.g. maxNumber([5,"90",80,3,4,1]) // returns 80
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

// arrays.add

var dairy, v12, v12_value;
dairy = [];
dairy[0] = "Milk";
dairy[1] = "Cheese";
v12 = dairy.length;
v12_value = "2";

var breads , v14 , v14_value , v15 , v15_value;
breads = ["white","wheat"];
v14 = breads.push("rye");
v15 = breads[2];
v14_value = "3";
v15_value ="rye";


var grains , v16 , v16_value , v17, v17_value;
grains = ["barley","corn"];
v16 = grains.unshift("rice");
v17 = grains[2];
v16_value = "3";
v17_value = "corn";


//arrays.remove

var rice , v18 , v18_value , v19 , v19_value; 
rice = ["white", "brown" , "basmati"];
v18 = rice.pop();
v19 = rice[2];
v18_value = "basmati";
v19_value = "undefined";

var pasta , v20 , v20_value , v21 , v21_value ;
pasta = ["fusilli","spaghetti","fettuccine"];
v20 = pasta.shift();
v21 = pasta[0];
v20_value = "fusilli";
v21_value = "spaghetti";

//arrays.find
var pizzas, v22 , v23 , v23_value; 
pizzas = ["New York" , "Chicago" , "Sicilian"];
v22 = "Chicago";
v23 = pizzas.includes(v22);
v23_value = "true";

var sushi, v24 , v25 , v25_value; 
sushi = ["nigri" , "sashimi" , "maki"];
v24 = "maki";
v25 = sushi.indexOf(v24);
v25_value = "2";


//arrays.misc

var sushiPizza , addPizza , v26 , v26_value;
sushiPizza = ["nigri", "maki"];
addPizza = function(someArray){
  someArray.push("chicago");
}
addPizza(sushiPizza);
v26 = sushiPizza[2];
v26_value = "chicago";


var apples , pears, v27, v27_value ; 
apples = ["gala" , "fuji"];
pears = apples;
pears.push("asian");
v27 = apples[2];
v27_value = "asian"

var coffee , moreCoffee , v28 , v28_value , v29 , v29_value;
coffee = ["espresso" , "cappuccino"];
moreCoffee = [...coffee];
moreCoffee.push ("latte");
v28 = coffee[2];
v29 = moreCoffee[2];
v28_value = "undefined";
v29_value = "latte";




 






// arrays.bonus

// arrays.bonus.isGrapeFruit
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


//arrays.bonus.swapify
var swapify = function(arr){

  if(Array.isArray(arr) === false) { return false; } 
  var badValues = ["undefined", "null"];
  if (badValues.includes(typeof(arr[0])) === true){ return false;}
  if (badValues.includes(typeof(arr[1])) === true){ return false;}

  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}



// arrays.bonus.stringify
let stringify = function (someArray){
  let returnArray = [];
  //check if someArray is an Array
  if (! Array.isArray(someArray)){
    return returnArray;
  }
  for(i=0;i<someArray.length;i++){
    if(typeof(someArray[i]) === "string"){
        returnArray.push(someArray[i]);
      }
  }

  return returnArray;
}

// arrays.bonus.numberify
var numberify = function (someArray){
  let returnArray = [];
  if (Array.isArray(someArray) !== true){               // check if someArray is an Array
    return returnArray;
  }
  let i;
  for(i=0;i<someArray.length;i++){
    let num  = someArray[i];                            // extract element from the array at index i
    if(typeof(num) === "number" && isNaN(num)!== true){
        returnArray.push(num);
      }
  }

  return returnArray;
}//end of numberify


// countVowels
var countVowels = function(str){

  if (typeof(str) !== 'string') { return false; } 

  var vowelCount = 0;
  var vowels = ["a","e","i","o","u","A", "E", "I" ,"O" , "U"];
  for(index =0 ; index < str.length ; index++){
    var char = str.charAt(index);
    if(vowels.includes(char) === true){
      vowelCount++;
    }
   
  }//end for loop 

  return vowelCount;

} // end of countVowels


// arrays.bonus.maxNumber
var maxNumber = function (someArray){
  let returnValue = -Infinity;
  if (! Array.isArray(someArray)){                      // check if someArray is an Array
    return false;
  }
  let i = 0;
  for(i=0;i<someArray.length;i++){
    let num = someArray[i];                             // extract element from the array at index i
    if(typeof(num) === "number" && isNaN(num)!== true){ // check if it is a valid number 
      if (num > returnValue){
          returnValue = num;
      }                                                 // end of if
    }                                                   // end of if
  }                                                     // end of for loop

  if (returnValue === -Infinity){
    return false; 
  }else {
    return returnValue;;
  }
}                                                       // end of maxNumber







// ******** Don't edit below this line *********************** 
  var obj = {};

  (typeof(fruits)=== 'undefined') || (obj.fruits = fruits); 
  (typeof(veggies)=== 'undefined') || (obj.veggies = veggies); 
  (typeof(dairy)=== 'undefined') || (obj.dairy = dairy); 
  (typeof(breads)=== 'undefined') || (obj.breads = breads); 
  (typeof(grains)=== 'undefined') || (obj.grains = grains); 
  (typeof(rice)=== 'undefined') || (obj.rice = rice); 
  (typeof(pasta)=== 'undefined') || (obj.pasta = pasta); 
  (typeof(pizzas)=== 'undefined') || (obj.pizzas = pizzas); 
  (typeof(sushi)=== 'undefined') || (obj.sushi = sushi); 
  (typeof(sushiPizza)=== 'undefined') || (obj.sushiPizza = sushiPizza); 
  (typeof(apples)=== 'undefined') || (obj.apples = apples); 
  (typeof(pears)=== 'undefined') || (obj.pears = pears); 
  (typeof(addPizza)=== 'undefined') || (obj.addPizza = addPizza); 

  (typeof(coffee)=== 'undefined') || (obj.coffee = coffee); 
  (typeof(moreCoffee)=== 'undefined') || (obj.moreCoffee = moreCoffee); 

  (typeof(isGrapeFruit)=== 'undefined') || (obj.isGrapeFruit = isGrapeFruit); 
  (typeof(swapify)=== 'undefined') || (obj.swapify = swapify); 
  (typeof(stringify)=== 'undefined') || (obj.stringify = stringify); 
  (typeof(numberify)=== 'undefined') || (obj.numberify = numberify); 
  (typeof(countVowels)=== 'undefined') || (obj.countVowels = countVowels); 
  (typeof(maxNumber)=== 'undefined') || (obj.maxNumber = maxNumber); 
 
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
  (typeof(v21)=== 'undefined') || (obj.v21 = v21) ;
  (typeof(v21_type)=== 'undefined') || (obj.v21_type = v21_type) ;
  (typeof(v21_value)=== 'undefined') || (obj.v21_value = v21_value) ;
  (typeof(v22)=== 'undefined') || (obj.v22 = v22) ;
  (typeof(v22_type)=== 'undefined') || (obj.v22_type = v22_type) ;
  (typeof(v22_value)=== 'undefined') || (obj.v22_value = v22_value) ;
  (typeof(v22)=== 'undefined') || (obj.v22 = v22) ;
  (typeof(v22_type)=== 'undefined') || (obj.v22_type = v22_type) ;
  (typeof(v22_value)=== 'undefined') || (obj.v22_value = v22_value) ;
  (typeof(v23)=== 'undefined') || (obj.v23 = v23) ;
  (typeof(v23_type)=== 'undefined') || (obj.v23_type = v23_type) ;
  (typeof(v23_value)=== 'undefined') || (obj.v23_value = v23_value) ;
  (typeof(v24)=== 'undefined') || (obj.v24 = v24) ;
  (typeof(v24_type)=== 'undefined') || (obj.v24_type = v24_type) ;
  (typeof(v24_value)=== 'undefined') || (obj.v24_value = v24_value) ;
  (typeof(v25)=== 'undefined') || (obj.v25 = v25) ;
  (typeof(v25_type)=== 'undefined') || (obj.v25_type = v25_type) ;
  (typeof(v25_value)=== 'undefined') || (obj.v25_value = v25_value) ;
  (typeof(v26)=== 'undefined') || (obj.v26 = v26) ;
  (typeof(v26_type)=== 'undefined') || (obj.v26_type = v26_type) ;
  (typeof(v26_value)=== 'undefined') || (obj.v26_value = v26_value) ;
  (typeof(v27)=== 'undefined') || (obj.v27 = v27) ;
  (typeof(v27_type)=== 'undefined') || (obj.v27_type = v27_type) ;
  (typeof(v27_value)=== 'undefined') || (obj.v27_value = v27_value) ;
  (typeof(v28)=== 'undefined') || (obj.v28 = v28) ;
  (typeof(v28_type)=== 'undefined') || (obj.v28_type = v28_type) ;
  (typeof(v28_value)=== 'undefined') || (obj.v28_value = v28_value) ;
  (typeof(v29)=== 'undefined') || (obj.v29 = v29) ;
  (typeof(v29_type)=== 'undefined') || (obj.v29_type = v29_type) ;
  (typeof(v29_value)=== 'undefined') || (obj.v29_value = v29_value) ;







  
  return obj;
  
}();
