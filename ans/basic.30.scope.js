module.exports = function(){
/**
 *
 *
 *
 */
// ******** Don't edit above this line *********************** 


//block scope 

let str1, v1 , v1_vaue , v2, v2_value ;
str1 = 'veggies';
let fruitify = function(){
  let str1 = 'fruits';
  v1 = str1;
 }                                // end of fruitify

fruitify();                       // Invoke fruitify
v2 = str1;

// @todo   Assign the value of v1 variable to v1_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v2 variable to v2_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v1_value = 'fruits' ;
v2_value = 'veggies' ;


let str2, v3 , v3_vaue , v4, v4_value, v5, v5_value;;
str2 = 'veggies';
let breadify = function(){
  let str2 = 'fruits';
  {
    let str2 = "bread"
    v3 = str2;
  }
  v4 = str2;
 }                                                    // end of breadify

v5 = str2;
breadify();                                           // Invoke breadify


// @todo   Assign the value of v3 variable to v3_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v4 variable to v4_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v5 variable to v5_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v3_value = 'bread';
v4_value = 'fruits' ;
v5_value = 'veggies';


//function scope 
var str3, v6 , v6_vaue , v7, v7_value, v8, v8_value;;
str3 = 'veggies';
var breadify2 = function(){
  var str3 = 'fruits';
  {
    var str3 = "bread"
    v6 = str3;
  }
  v7 = str3;
 }                                                    // end of breadify2

v8 = str3;
breadify2();                                          // Invoke breadify2

// @todo   Assign the value of v6 variable to v6_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v7 variable to v7_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v8 variable to v8_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v6_value = 'bread';
v7_value = 'bread';
v8_value = 'veggies';



// variables passed by Reference
// use npm test scope.reference to run tests in this section


//arrays
let colors , smells , v9 , v9_value , v10 , v10_value;
colors = ['red','blue'];
smells = colors
smells.push ('fruity');
colors.push ('yellow');
v9 = colors[2];
v10 = smells[3];

// @todo   Assign the value of v9 variable to v9_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v10 variable to v10_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v9_value = 'fruity';
v10_value = 'yellow';



//Objects 
let car , truck , v11 , v11_value , v12 , v12_value;
car = { 
  make  : 'honda',
  model : 'accord',
  year  : '1974'
};

let truckify = function(truck){
  truck.make = 'toyota';
  truck.model = 'tacoma';
}

truckify(car);
v11 = car.make;
v12 = car.model;

// @todo   Assign the value of v11 variable to v11_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v12 variable to v12_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v11_value = 'toyota'
v12_value = 'tacoma';


// variables passed by value
// use npm test scope.value to run tests in this section

//numbers 
let v14, v14_value, v15, v15_value; 
v14 = 100;
v15 = v14; 
v15 = v15 + 100;

// @todo   Assign the value of v14 variable to v14_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v15 variable to v15_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v14_value = '100'
v15_value = '200';

//strings 
let v16, v16_value, v17, v17_value; 
v16 = 'bowie';
v17 = v16; 
v17 = 'freddie';

// @todo   Assign the value of v16 variable to v16_value as a string   e.g. "10" , "100" , "Infinity" etc.  
// @todo   Assign the value of v17 variable to v17_value as a string   e.g. "10" , "100" , "Infinity" etc.  
v16_value = 'bowie'
v17_value = 'freddie';






// ******** Don't edit below this line *********************** 

let obj = {};

(typeof (colors) !== 'undefined')  && (obj.colors = colors);
(typeof (smells) !== 'undefined')  && (obj.smells = smells);
(typeof (car) !== 'undefined')  && (obj.car = car);
(typeof (truck) !== 'undefined')  && (obj.truck = truck);



(typeof (str1) !== 'undefined')  && (obj.str1 = str1);
(typeof (str2) !== 'undefined')  && (obj.str2 = str2);
(typeof (str3) !== 'undefined')  && (obj.str3 = str3);
(typeof (str4) !== 'undefined')  && (obj.str4 = str4);
(typeof (str5) !== 'undefined')  && (obj.str5 = str5);
(typeof (str6) !== 'undefined')  && (obj.str6 = str6);
(typeof (str7) !== 'undefined')  && (obj.str7 = str7);
(typeof (str8) !== 'undefined')  && (obj.str8 = str8);
(typeof (str9) !== 'undefined')  && (obj.str9 = str9);
(typeof (str10) !== 'undefined') && (obj.str10 = str10);
(typeof (str11) !== 'undefined') && (obj.str11 = str11);

(typeof (v1) !== 'undefined')        && (obj.v1 = v1);
(typeof (v1_value) !== 'undefined')  && (obj.v1_value = v1_value);
(typeof (v1_type) !== 'undefined')   && (obj.v1_type = v1_type);
(typeof (v2) !== 'undefined')        && (obj.v2 = v2);
(typeof (v2_value) !== 'undefined')  && (obj.v2_value = v2_value);
(typeof (v2_type) !== 'undefined')   && (obj.v2_type = v2_type);
(typeof (v3) !== 'undefined')        && (obj.v3 = v3);
(typeof (v3_value) !== 'undefined')  && (obj.v3_value = v3_value);
(typeof (v3_type) !== 'undefined')   && (obj.v3_type = v3_type);
(typeof (v4) !== 'undefined')        && (obj.v4 = v4);
(typeof (v4_value) !== 'undefined')  && (obj.v4_value = v4_value);
(typeof (v4_type) !== 'undefined')   && (obj.v4_type = v4_type);
(typeof (v5) !== 'undefined')        && (obj.v5 = v5);
(typeof (v5_value) !== 'undefined')  && (obj.v5_value = v5_value);
(typeof (v5_type) !== 'undefined')   && (obj.v5_type = v5_type);
(typeof (v6) !== 'undefined')        && (obj.v6 = v6);
(typeof (v6_value) !== 'undefined')  && (obj.v6_value = v6_value);
(typeof (v6_type) !== 'undefined')   && (obj.v6_type = v6_type);
(typeof (v7) !== 'undefined')        && (obj.v7 = v7);
(typeof (v7_value) !== 'undefined')  && (obj.v7_value = v7_value);
(typeof (v7_type) !== 'undefined')   && (obj.v7_type = v7_type);
(typeof (v8) !== 'undefined')        && (obj.v8 = v8);
(typeof (v8_value) !== 'undefined')  && (obj.v8_value = v8_value);
(typeof (v8_type) !== 'undefined')   && (obj.v8_type = v8_type);
(typeof (v9) !== 'undefined')        && (obj.v9 = v9);
(typeof (v9_value) !== 'undefined')  && (obj.v9_value = v9_value);
(typeof (v9_type) !== 'undefined')   && (obj.v9_type = v9_type);
(typeof (v10) !== 'undefined')       && (obj.v10 = v10);
(typeof (v10_value) !== 'undefined') && (obj.v10_value = v10_value);
(typeof (v10_type) !== 'undefined')  && (obj.v10_type = v10_type);
(typeof (v11) !== 'undefined')       && (obj.v11 = v11);
(typeof (v11_value) !== 'undefined') && (obj.v11_value = v11_value);
(typeof (v11_type) !== 'undefined')  && (obj.v11_type = v11_type);
(typeof (v12) !== 'undefined')       && (obj.v12 = v12);
(typeof (v12_value) !== 'undefined') && (obj.v12_value = v12_value);
(typeof (v12_type) !== 'undefined')  && (obj.v12_type = v12_type);

(typeof (v14) !== 'undefined')       && (obj.v14 = v14);
(typeof (v14_value) !== 'undefined') && (obj.v14_value = v14_value);
(typeof (v14_type) !== 'undefined')  && (obj.v14_type = v14_type);

(typeof (v15) !== 'undefined')       && (obj.v15 = v15);
(typeof (v15_value) !== 'undefined') && (obj.v15_value = v15_value);
(typeof (v15_type) !== 'undefined')  && (obj.v15_type = v15_type);

(typeof (v16) !== 'undefined')       && (obj.v16 = v16);
(typeof (v16_value) !== 'undefined') && (obj.v16_value = v16_value);
(typeof (v16_type) !== 'undefined')  && (obj.v16_type = v16_type);

(typeof (v17) !== 'undefined')       && (obj.v17 = v17);
(typeof (v17_value) !== 'undefined') && (obj.v17_value = v17_value);
(typeof (v17_type) !== 'undefined')  && (obj.v17_type = v17_type);

(typeof (v18) !== 'undefined')       && (obj.v18 = v18);
(typeof (v18_value) !== 'undefined') && (obj.v18_value = v18_value);
(typeof (v18_type) !== 'undefined')  && (obj.v18_type = v18_type);



return obj; 



}();
