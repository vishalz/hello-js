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
v1_value = '';
v2_value = '';


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
v3_value = '';
v4_value = '';
v5_value = '';


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
v6_value = '';
v7_value = '';
v8_value = '';












// ******** Don't edit below this line *********************** 

let obj = {};


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


return obj; 



}();
