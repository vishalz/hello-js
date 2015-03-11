
module.exports = function(){ 
// ******** Don't edit above this line *********************** 

/**
*
*@todo Declare a variable v3 and print its type. Its should print undefined
*@todo Declare a variable v4 and assign it a null value and print the type of the variable 
*@todo Declare a variable v5 Assign a number value 5 to it and print its type 
*@todo Declare a variable v6 Assign a string value "foo" and print its type 
*@todo Declare a variable v7 Assign a boolean value true and print its type 
*@todo Declare a varable v8 and assign it a object literal. 
*@todo The object should have a name property of string value called "Sponge Bob" and age property with a number value = 100  
*@todo Declare  variables v9,v10 and value_v10 as shown below. Provide the value of v11
* var v9 ; 
*	var v10 = v9 + 2; // Is v10 NaN or 2 or undefined
*	var value_v10= ""  // Assign a string value to  v11.  "NaN" or "2" or "undefined" 
*/



	var v3;
	var v4 = null;
	var v5 = 5;
	var v6 = "foo";
	var v7 = true;
	var v8 = { name : "Sponge Bob" , age : 100 };
	var v9;
	var v10 = v9 + 2;
	var value_v10 = "NaN";
	

// ******** Don't edit below this line *********************** 
	var obj = {};
	(typeof(v3)=== 'undefined') || (obj.v3 = v3); 
	(typeof(v4)=== 'undefined') || (obj.v4 = v4);
	(typeof(v5)=== 'undefined') || (obj.v5 = v5);
	(typeof(v6)=== 'undefined') || (obj.v6 = v6) ;
	(typeof(v7)=== 'undefined') || (obj.v7 = v7) ;
	(typeof(v8)=== 'undefined') || (obj.v8 = v8) ;
	(typeof(v9)=== 'undefined') || (obj.v9 = v9) ;
	(typeof(v10)=== 'undefined') || (obj.v10 = v10) ;
	(typeof(value_v10)=== 'undefined') || (obj.value_v10 = value_v10) ;
	return obj;
}();


