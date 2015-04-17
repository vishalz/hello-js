
module.exports = function(){ 

/**
*
* # Concepts 
*
* 	1. The  comparison operator takes two operands and returns a boolean value (true or false)
*
* ## Equality (==) also called abstract equality
*		1. The equality operator converts the operands if they are not of the same type, then applies strict comparison
*		1. When comparing a number and a string, the string is converted to a number value, if the string is number like
*				1. ("4" == 4) --> returns true,  "4" is converted to a number 
*				1. ("four" == 4) ---> returns false, "four" is not converted to a number
*		1. If one of the operands is Boolean, the Boolean operand is converted to 1 if it is true and +0 if it is false
*		1. NaN is not equal to anything, including NaN
*		1. Positive and negative zeros are equal to one another. 
*		1. (null == undefined) --> return true 
*
*	## Strict equality (===)
*		1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions
*		1. Two numbers are strictly equal when they are numerically equal (have the same number value)
*		1. (null === undefined) --> returns false
*
* ## Inequality (!=)
*
* ## Greater than operator (>)
*
* ## Greater than or equal operator (>=)
*
* ## Less than operator (<)
* 
*
*	## Less than or equal operator (<=)
*
* # Running the Tests
*	 To test all logical operators use
* 	npm test basic.30.operators.comparison
*
* ------------------comparison-equality-----------------------------
*
* ##  To run all tests in this section use 
* 	npm test comparison-equality
*
* @todo Declare variables v1 , v1_value 
* Assign v1 = (true == "true") ; 
* Assign the value of variable v1 to variable v1_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v2 , v2_value 
* Assign v2 = (true == false );
* Assign the value of variable v2 to variable v2_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v3 , v3_value
* Assign v3 = (1 == true); 
* Assign the value of variable v3 to variable v3_value as a string e.g. "40" or "5000" or "true" or "false"

* @todo Declare variables v4 , v4_value
* Assign v4 = (1 == "true"); 
* Assign the value of variable v4 to variable v4_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v5 , v5_value 
* Assign v5 = ( "1" == "true"); 
* Assign the value of variable v5 to variable v5_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v6 , v6_value
* Assign v6 = ( "1" == true);
* Assign the value of variable v6 to variable v6_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v7 , v7_value
* Assign v7 = (0 == false); 
* Assign the value of variable v7 to variable v7_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v8 , v8_value
* Assign v8 = ("0" == false); 
* Assign the value of variable v8 to variable v8_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v9 , v9_value
* Assign v9 = (0 == "false"); 
* Assign the value of variable v9 to variable v9_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v10 , v10_value 
* Assign v10 = ("false" == false); 
* Assign the value of variable v10 to variable v10_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v11 , v11_value
* Assign v11 = ( "" == false);  
* Assign the value of variable v11 to variable v11_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v12 , v12_value
* Assign v12 = ( null == false); 
* Assign the value of variable v12 to variable v12_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v13 , v13_value 
* Assign v13 = (undefined == false); 
* Assign the value of variable v13 to variable v13_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v14 , v14_value 
* Assign v14 = (NaN == false) ; 
* Assign the value of variable v14 to variable v14_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v15 , v15_value
* Assign v15 = (NaN == NaN); 
* Assign the value of variable v15 to variable v15_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v16 , v16_value 
* Assign v16 = (null == undefined) ; 
* Assign the value of variable v16 to variable v16_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v17 , v17_value
* Assign v17 = (5 == "five"); 
* Assign the value of variable v17 to variable v17_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v18 , v18_value 
* Assign v18 = ( 5 == "5") ;
* Assign the value of variable v18 to variable v18_value as a string e.g. "40" or "5000" or "true" or "false"
* 
* @todo Declare variables v19 , v19_value 
* Assign v19 = (5 == "5.0") 
* Assign the value of variable v19 to variable v19_value as a string e.g. "40" or "5000" or "true" or "false"
*
*
* @todo Declare variables v20 , v21 , v21_value 
* Assign v20 = 5 
* Assign v21 = ( 6 == v20++)
* Assign the value of variable v21 to variable v21_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v22 ,v23 , v23_value  
* Assign v22 = 5 ;
* Assign v23 = ( 6 == ++v22);
* Assign the value of variable v23 to variable v23_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v24 , v24_value  
* Assign v24 = (true == "true") ; 
* Assign the value of variable v24 to variable v24_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v25 , v25_value 
* Assign v25 = (true == "true") ; 
* Assign the value of variable v25 to variable v25_value as a string e.g. "40" or "5000" or "true" or "false"
*

* ------------------strict-equality-----------------------------
*
* ##  To run all tests in this section use 
* 	npm test strict-equality
*
* @todo Declare variables v26 , v26_value
* Assign v26 = (1 === true); 
* Assign the value of variable v26 to variable v26_value as a string e.g. "40" or "5000" or "true" or "false"
*

* Assign v27 = ( "1" === true);
* Assign the value of variable v27 to variable v27_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v28 , v28_value
* Assign v28 = (0 === false); 
* Assign the value of variable v28 to variable v28_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v29 , v29_value
* Assign v29 = ("0" === false); 
* Assign the value of variable v29 to variable v29_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v30 , v30_value
* Assign v30 = ( "" === false);  
* Assign the value of variable v30 to variable v30_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v31 , v31_value
* Assign v31 = ( null === false); 
* Assign the value of variable v31 to variable v31_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v32 , v32_value 
* Assign v32 = (undefined === false); 
* Assign the value of variable v32 to variable v32_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v33 , v33_value 
* Assign v33 = (null === undefined) ; 
* Assign the value of variable v33 to variable v33_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v34 , v34_value 
* Assign v34 = ( 5 === "5") ;
* Assign the value of variable v34 to variable v34_value as a string e.g. "40" or "5000" or "true" or "false"
* 
*
* ------------------bonus----------------------------
*
* ##  To run all tests in this section use 
* 	npm test comparison.bonus
*
* @todo Declare variables v1000 , v1000_value 
* Assign v1000 = ("cat" == "cat") ; 
* Assign the value of variable v1000 to variable v1000_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v1001 , v1001_value 
* Assign v1001 = ("cat" == "Cat") ; 
* Assign the value of variable v1001 to variable v1001_value as a string e.g. "40" or "5000" or "true" or "false"
*
* @todo Declare variables v1002 , v1002_value 
* Assign v1002 = ("" == 0) ; 
* Assign the value of variable v1002 to variable v1002_value as a string e.g. "40" or "5000" or "true" or "false"
*
*
*
*/

// ******** Don't edit above this line *********************** 

	var v1 = (true == "true"); 
	var v1_value = "false";
	
	var v2 = (true == false); 
	var v2_value = "false";

	var v3 = (1 == true); 
	var v3_value = "true";
	
	var v4 = (1 == "true"); 
	var v4_value = "false";

	var v5 = ("1" == "true"); 
	var v5_value = "false";

	var v6 = ("1" == true); 
	var v6_value = "true";

	var v7 = (0 == false);
	var v7_value = "true";

	var v8 = ("0" == false); 
	var v8_value = "true";

	var v9 = (0 == "false"); 
	var v9_value = "false";

	var v10 = ("0" == "false"); 
	var v10_value = "false";
	
	var v11 = ( "" == false); 
	var v11_value = "true";
	
	var v12 = (null == false); 
	var v12_value = "false";
	
	var v13 = (undefined == false); 
	var v13_value = "false";

	var v14 = (NaN == false); 
	var v14_value = "false";

	var v15 = (NaN == NaN ); 
	var v15_value = "false";

	var v16 = (null == undefined); 
	var v16_value = "true";

	var v17 = (5 == "five"); 
	var v17_value = "false";

	var v18 = (5 == "5"); 
	var v18_value = "true";

 	var v19 = (5 == "5.0"); 
	var v19_value = "true";
	
	var v20 = 5; 
	var v21 = (6 == v20++);
	var v21_value = "false";
	
	var v22 = 5; 
	var v23 = (6 == ++v22); 
	var v23_value = "true";
	
	var v24 = (true == "true"); 
	var v24_value = "false";

	var v25 = (false == "false"); 
	var v25_value = "false";

	var v26 = (1 === true);
	var v26_value = "false";

	var v27 = ("1" === true);
	var v27_value = "false";

	var v28 = (0 === false);
	var v28_value = "false";

	var v29 = ("0" === false);
	var v29_value = "false";

	var v30 = (""  === false );
	var v30_value = "false";

	var v31 = ( null === false);
	var v31_value = "false";

	var v32 = (undefined === false);
	var v32_value = "false";

	var v33 = ( null === undefined);
	var v33_value = "false";

	var v34 = ( 5 === "5" );
	var v34_value = "false";

	var v1000 = ("cat" == "cat");
	var v1000_value = "true";

	var v1001 = ("cat" == "Cat");
	var v1001_value = "false";

	var v1002 = ("" == 0);
	var v1002_value = "true";








// ******** Don't edit below this line *********************** 
	
var obj = {};

	(typeof(v1)=== 'undefined') || (obj.v1 = v1); 
	(typeof(v1_type)=== 'undefined') || (obj.v1_type = v1_type) ;
	(typeof(v1_value)=== 'undefined') || (obj.v1_value = v1_value); 	
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
	(typeof(v30)=== 'undefined') || (obj.v30 = v30) ;
	(typeof(v30_type)=== 'undefined') || (obj.v30_type = v30_type) ;
	(typeof(v30_value)=== 'undefined') || (obj.v30_value = v30_value) ;
	(typeof(v31)=== 'undefined') || (obj.v31 = v31) ;
	(typeof(v31_type)=== 'undefined') || (obj.v31_type = v31_type) ;
	(typeof(v31_value)=== 'undefined') || (obj.v31_value = v31_value) ;
	(typeof(v32)=== 'undefined') || (obj.v32 = v32) ;
	(typeof(v32_type)=== 'undefined') || (obj.v32_type = v32_type) ;
	(typeof(v32_value)=== 'undefined') || (obj.v32_value = v32_value) ;
	(typeof(v33)=== 'undefined') || (obj.v33 = v33) ;
	(typeof(v33_type)=== 'undefined') || (obj.v33_type = v33_type) ;
	(typeof(v33_value)=== 'undefined') || (obj.v33_value = v33_value) ;
	(typeof(v34)=== 'undefined') || (obj.v34 = v34) ;
	(typeof(v34_type)=== 'undefined') || (obj.v34_type = v34_type) ;
	(typeof(v34_value)=== 'undefined') || (obj.v34_value = v34_value) ;
	(typeof(v35)=== 'undefined') || (obj.v35 = v35) ;
	(typeof(v35_type)=== 'undefined') || (obj.v35_type = v35_type) ;
	(typeof(v35_value)=== 'undefined') || (obj.v35_value = v35_value) ;
	(typeof(v36)=== 'undefined') || (obj.v36 = v36) ;
	(typeof(v36_type)=== 'undefined') || (obj.v36_type = v36_type) ;
	(typeof(v36_value)=== 'undefined') || (obj.v36_value = v36_value) ;
	(typeof(v37)=== 'undefined') || (obj.v37 = v37) ;
	(typeof(v37_type)=== 'undefined') || (obj.v37_type = v37_type) ;
	(typeof(v37_value)=== 'undefined') || (obj.v37_value = v37_value) ;
	(typeof(v38)=== 'undefined') || (obj.v38 = v38) ;
	(typeof(v38_type)=== 'undefined') || (obj.v38_type = v38_type) ;
	(typeof(v38_value)=== 'undefined') || (obj.v38_value = v38_value) ;
	(typeof(v39)=== 'undefined') || (obj.v39 = v39) ;
	(typeof(v39_type)=== 'undefined') || (obj.v39_type = v39_type) ;
	(typeof(v39_value)=== 'undefined') || (obj.v39_value = v39_value) ;

	(typeof(v40)=== 'undefined') || (obj.v40 = v40) ;
	(typeof(v40_type)=== 'undefined') || (obj.v40_type = v40_type) ;
	(typeof(v40_value)=== 'undefined') || (obj.v40_value = v40_value) ;


	(typeof(v41)=== 'undefined') || (obj.v41 = v41) ;
	(typeof(v41_type)=== 'undefined') || (obj.v41_type = v41_type) ;
	(typeof(v41_value)=== 'undefined') || (obj.v41_value = v41_value) ;


	(typeof(v42)=== 'undefined') || (obj.v42 = v42) ;
	(typeof(v42_type)=== 'undefined') || (obj.v42_type = v42_type) ;
	(typeof(v42_value)=== 'undefined') || (obj.v42_value = v42_value) ;


	(typeof(v43)=== 'undefined') || (obj.v43 = v43) ;
	(typeof(v43_type)=== 'undefined') || (obj.v43_type = v43_type) ;
	(typeof(v43_value)=== 'undefined') || (obj.v43_value = v43_value) ;


	(typeof(v44)=== 'undefined') || (obj.v44 = v44) ;
	(typeof(v44_type)=== 'undefined') || (obj.v44_type = v44_type) ;
	(typeof(v44_value)=== 'undefined') || (obj.v44_value = v44_value) ;


	(typeof(v45)=== 'undefined') || (obj.v45 = v45) ;
	(typeof(v45_type)=== 'undefined') || (obj.v45_type = v45_type) ;
	(typeof(v45_value)=== 'undefined') || (obj.v45_value = v45_value) ;


	(typeof(v46)=== 'undefined') || (obj.v46 = v46) ;
	(typeof(v46_type)=== 'undefined') || (obj.v46_type = v46_type) ;
	(typeof(v46_value)=== 'undefined') || (obj.v46_value = v46_value) ;


	(typeof(v47)=== 'undefined') || (obj.v47 = v47) ;
	(typeof(v47_type)=== 'undefined') || (obj.v47_type = v47_type) ;
	(typeof(v47_value)=== 'undefined') || (obj.v47_value = v47_value) ;


	(typeof(v48)=== 'undefined') || (obj.v48 = v48) ;
	(typeof(v48_type)=== 'undefined') || (obj.v48_type = v48_type) ;
	(typeof(v48_value)=== 'undefined') || (obj.v48_value = v48_value) ;


	(typeof(v48)=== 'undefined') || (obj.v49 = v49) ;
	(typeof(v49_type)=== 'undefined') || (obj.v49_type = v49_type) ;
	(typeof(v49_value)=== 'undefined') || (obj.v49_value = v49_value) ;

	(typeof(v50)=== 'undefined') || (obj.v50 = v50) ;
	(typeof(v50_type)=== 'undefined') || (obj.v50_type = v50_type) ;
	(typeof(v50_value)=== 'undefined') || (obj.v50_value = v50_value) ;

	(typeof(v51)=== 'undefined') || (obj.v51 = v51) ;
	(typeof(v51_type)=== 'undefined') || (obj.v51_type = v51_type) ;
	(typeof(v51_value)=== 'undefined') || (obj.v51_value = v51_value) ;

	(typeof(v52)=== 'undefined') || (obj.v52 = v52) ;
	(typeof(v52_type)=== 'undefined') || (obj.v52_type = v52_type) ;
	(typeof(v52_value)=== 'undefined') || (obj.v52_value = v52_value) ;

	(typeof(v53)=== 'undefined') || (obj.v53 = v53) ;
	(typeof(v53_type)=== 'undefined') || (obj.v53_type = v53_type) ;
	(typeof(v53_value)=== 'undefined') || (obj.v53_value = v53_value) ;

	(typeof(v1000)=== 'undefined') || (obj.v1000 = v1000) ;
	(typeof(v1000_type)=== 'undefined') || (obj.v1000_type = v1000_type) ;
	(typeof(v1000_value)=== 'undefined') || (obj.v1000_value = v1000_value) ;

	(typeof(v1001)=== 'undefined') || (obj.v1001 = v1001) ;
	(typeof(v1001_type)=== 'undefined') || (obj.v1001_type = v1001_type) ;
	(typeof(v1001_value)=== 'undefined') || (obj.v1001_value = v1001_value) ;

	(typeof(v1002)=== 'undefined') || (obj.v1002 = v1002) ;
	(typeof(v1002_type)=== 'undefined') || (obj.v1002_type = v1002_type) ;
	(typeof(v1002_value)=== 'undefined') || (obj.v1002_value = v1002_value) ;

	(typeof(v1003)=== 'undefined') || (obj.v1003 = v1003) ;
	(typeof(v1003_type)=== 'undefined') || (obj.v1003_type = v1003_type) ;
	(typeof(v1003_value)=== 'undefined') || (obj.v1003_value = v1003_value) ;

	(typeof(v1004)=== 'undefined') || (obj.v1004 = v1004) ;
	(typeof(v1004_type)=== 'undefined') || (obj.v1004_type = v1004_type) ;
	(typeof(v1004_value)=== 'undefined') || (obj.v1004_value = v1004_value) ;

	(typeof(v1005)=== 'undefined') || (obj.v1005 = v1005) ;
	(typeof(v1005_type)=== 'undefined') || (obj.v1005_type = v1005_type) ;
	(typeof(v1005_value)=== 'undefined') || (obj.v1005_value = v1005_value) ;

	(typeof(v1006)=== 'undefined') || (obj.v1006 = v1006) ;
	(typeof(v1006_type)=== 'undefined') || (obj.v1006_type = v1006_type) ;
	(typeof(v1006_value)=== 'undefined') || (obj.v1006_value = v1006_value) ;

	(typeof(v1007)=== 'undefined') || (obj.v1007 = v1007) ;
	(typeof(v1007_type)=== 'undefined') || (obj.v1007_type = v1007_type) ;
	(typeof(v1007_value)=== 'undefined') || (obj.v1007_value = v1007_value) ;

	(typeof(v1008)=== 'undefined') || (obj.v1008 = v1008) ;
	(typeof(v1008_type)=== 'undefined') || (obj.v1008_type = v1008_type) ;
	(typeof(v1008_value)=== 'undefined') || (obj.v1008_value = v1008_value) ;

	(typeof(v1009)=== 'undefined') || (obj.v1009 = v1009) ;
	(typeof(v1009_type)=== 'undefined') || (obj.v1009_type = v1009_type) ;
	(typeof(v1009_value)=== 'undefined') || (obj.v1009_value = v1009_value) ;

(typeof(v1010)=== 'undefined') || (obj.v1010 = v1010) ;
	(typeof(v1010_type)=== 'undefined') || (obj.v1010_type = v1010_type) ;
	(typeof(v1010_value)=== 'undefined') || (obj.v1010_value = v1010_value) ;

(typeof(v1011)=== 'undefined') || (obj.v1011 = v1011) ;
	(typeof(v1011_type)=== 'undefined') || (obj.v1011_type = v1011_type) ;
	(typeof(v1011_value)=== 'undefined') || (obj.v1011_value = v1011_value) ;


(typeof(v1012)=== 'undefined') || (obj.v1012 = v1012) ;
	(typeof(v1012_type)=== 'undefined') || (obj.v1012_type = v1012_type) ;
	(typeof(v1012_value)=== 'undefined') || (obj.v1012_value = v1012_value) ;






	return obj;
}();


