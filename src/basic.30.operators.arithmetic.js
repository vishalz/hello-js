
module.exports = function(){ 

/**
* To test all arithmetic operators use
*
* 	npm test basic.30.operators.arithmetic
* 
* ------------------ addition -----------------------------
*
* To run all tests in this section use 
* 	npm test decrement 
*
*
* @todo Declare variables  v3 , v3_type and  v3_value.  
* Assign v3 =  10 + 20. 
* Assign the value of v3 to variable v3_value as a string e.g. "40" or "5000" 
* Assign the type of v3 to v3_type as a string e.g. "number" or "string" or "boolean"
*
*
* @todo Declare variables  v4 , v4_type and  v4_value.  
* Assign v4 =  true + 10. 
* Assign the value of v4 variable to v4_value as a string e.g. "40" or "5000" 
* Assign the type of v4 to v4_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v5 , v5_type and  v5_value.  
* Assign v5 =  false + 10. 
* Assign the value of v5 variable to v5_value as a string e.g. "40" or "5000" 
* Assign the type of v5 to v5_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v6 , v6_type and  v6_value.  
* Assign v6 =  false + false. 
* Assign the value of v6 variable to v6_value as a string e.g. "40" or "5000" 
* Assign the type of v6 to v6_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v7 , v7_type and  v7_value.  
* Assign v7 =  "foo"+ 10. 
* Assign the value of v7 variable to v7_value as a string e.g. "40" or "5000" 
* Assign the type of v7 to v7_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v8 , v8_type and  v8_value.  
* Assign v8 =  "foo" + true. 
* Assign the value of v8 variable to v8_value as a string e.g. "40" or "5000" 
* Assign the type of v8 to v8_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v9 , v9_type and  v9_value.  
* Assign v9 =  "foo" + false 
* Assign the value of v9 variable to v9_value as a string e.g. "40" or "5000" 
* Assign the type of v9 to v9_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v10 , v10_type and  v10_value.  
* Assign v10 =  "foo" + "bar" 
* Assign the value of v10 variable to v10_value as a string e.g. "40" or "5000" 
* Assign the type of v10 to v10_type as a string e.g. "number" or "string" or "boolean"
* Subtraction - 
* basic.30.operators.arithmetic.subtraction 
*
* @todo Declare variables  v11 , v11_type and  v11_value.  
* Assign v11 = 100 - 50  
* Assign the value of v11 variable to v11_value as a string e.g. "40" or "5000" 
* Assign the type of v11 to v11_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v12 , v12_type and  v12_value.  
* Assign v12 = 100 - "foo" 
* Assign the value of v12 variable to v12_value as a string e.g. "40" or "5000" 
* Assign the type of v12 to v12_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v13 , v13_type and  v13_value.  
* Assign v13 = 100 - "50"
* Assign the value of v13 variable to v13_value as a string e.g. "40" or "5000" 
* Assign the type of v13 to v13_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v14 , v14_type and  v14_value.  
* Assign v14 = "100" - 50  
* Assign the value of v14 variable to v14_value as a string e.g. "40" or "5000" 
* Assign the type of v14 to v14_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables va9,va10 and va10_value as shown below. 
* var va9 ; 
*	var va10 = va9 + 2; // Is va10 NaN or 2 or undefined
*	var va10_value = ""  // Assign the value of va10 tp va10_value "NaN" or "2" or "undefined" 
*
* ------------------ divsion-----------------------------
* To run all tests in this section use 
* 	npm test division 
*
* @todo Declare variables  v15 , v15_type and  v15_value.  
* Assign v15 = 1 / 2   
* Assign the value of v15 variable to v15_value as a string e.g. "40" or "5000" 
* Assign the type of v15 to v15_type as a string e.g. "number" or "string" or "boolean"
*
*
*@todo Declare variables  v16 , v16_type and  v16_value.  
* Assign v16 =  1.0 / 2.0   
* Assign the value of v16 variable to v16_value as a string e.g. "40" or "5000" 
* Assign the type of v16 to v16_type as a string e.g. "number" or "string" or "boolean"
*
*
*@todo Declare variables  v17 , v17_type and  v17_value.  
* Assign v17 =  2 / 0  
* Assign the value of v17 variable to v17_value as a string e.g. "40" or "5000" 
* Assign the type of v17 to v17_type as a string e.g. "number" or "string" or "boolean"
*
*
*@todo Declare variables  v18 , v18_type and  v18_value.  
* Assign v18 = 2 / 0.0   
* Assign the value of v18 variable to v18_value as a string e.g. "40" or "5000" 
* Assign the type of v18 to v18_type as a string e.g. "number" or "string" or "boolean"
*
*
*@todo Declare variables  v19 , v19_type and  v19_value.  
* Assign v19 =  2 / -0 
* Assign the value of v19 variable to v19_value as a string e.g. "40" or "5000" 
* Assign the type of v19 to v19_type as a string e.g. "number" or "string" or "boolean"
*
* ------------------ multiplication-----------------------------
* To run all tests in this section use 
* 	npm test multiplication 
*
*@todo Declare variables  v20 , v20_type and  v20_value.  
* Assign v20 =  2 * 2   
* Assign the value of v20 variable to v20_value as a string e.g. "40" or "5000" 
* Assign the type of v20 to v20_type as a string e.g. "number" or "string" or "boolean"
* 
*@todo Declare variables  v21 , v21_type and  v21_value.  
* Assign v21 =  -2 * 2   
* Assign the value of v21 variable to v21_value as a string e.g. "40" or "5000" 
* Assign the type of v21 to v21_type as a string e.g. "number" or "string" or "boolean"
*
*@todo Declare variables  v22 , v22_type and  v22_value.  
* Assign v22 =  Infinity * 0   
* Assign the value of v22 variable to v22_value as a string e.g. "40" or "5000" 
* Assign the type of v22 to v22_type as a string e.g. "number" or "string" or "boolean"
*
*@todo Declare variables  v23 , v23_type and  v23_value.  
* Assign v23 = Infinity * Infinity 
* Assign the value of v23 variable to v23_value as a string e.g. "40" or "5000" 
* Assign the type of v23 to v23_type as a string e.g. "number" or "string" or "boolean"
*
*@todo Declare variables  v24 , v24_type and  v24_value.  
* Assign v24 =  2 * "foo"
* Assign the value of v24 variable to v24_value as a string e.g. "40" or "5000" 
* Assign the type of v24 to v24_type as a string e.g. "number" or "string" or "boolean"
*
* -------------- remainder (%) --------------
* To run all tests in this section use 
* 	npm test remainder
*
*@todo Declare variables  v25 , v25_type and  v25_value.  
* Assign v25 =  5 % 2 ;
* Assign the value of v25 variable to v25_value as a string e.g. "40" or "5000" 
* Assign the type of v25 to v25_type as a string e.g. "number" or "string" or "boolean"
*
*@todo Declare variables  v26 , v26_type and  v26_value.  
* Assign v26 =  4 % 2 ; 
* Assign the value of v26 variable to v26_value as a string e.g. "40" or "5000" 
* Assign the type of v26 to v26_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v27 , v27_type and  v27_value.  
* Assign v27 = 1 % 2 ; 
* Assign the value of v27 variable to v27_value as a string e.g. "40" or "5000" 
* Assign the type of v27 to v27_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v28 , v28_type and  v28_value.  
* Assign v28 = -1 % 2 ; 
* Assign the value of v28 variable to v28_value as a string e.g. "40" or "5000" 
* Assign the type of v28 to v28_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v29 , v29_type and  v29_value.  
* Assign v29 = -4 % 2; 
* Assign the value of v29 variable to v29_value as a string e.g. "40" or "5000" 
* Assign the type of v29 to v29_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v30 , v30_type and  v30_value.  
* Assign v30 = -5 % 2; 
* Assign the value of v30 variable to v30_value as a string e.g. "40" or "5000" 
* Assign the type of v30 to v30_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v31 , v31_type and  v31_value.  
* Assign v31 = "foo" % 2 ; 
* Assign the value of v31 variable to v31_value as a string e.g. "40" or "5000" 
* Assign the type of v31 to v31_type as a string e.g. "number" or "string" or "boolean"
*
* -------------- increment (++)--------------
* To run all tests in this section use 
* 	npm test remainder
*
* @todo Declare variables  v32 , v32_value , v33 & v33_value  
* Assign v32 = 2; 
* Assign v33 = ++v32; 
* Assign the value of v32 variable to v32_value as a string e.g. "40" or "5000" 
* Assign the value of v33 variable to v33_value as a string e.g. "40" or "5000" 
*
* @todo Declare variables  v34 , v34_value , v35 & v35_value  
* Assign v34 = 2; 
* Assign v35 = v34++; 
* Assign the value of v34 variable to v34_value as a string e.g. "40" or "5000" 
* Assign the value of v35 variable to v35_value as a string e.g. "40" or "5000" 
*
* -------------- decrement (--) --------------
* To run all tests in this section use 
* 	npm test decrement 
*
* @todo Declare variables  v36 , v36_value , v37 & v37_value  
* Assign v36 = 2; 
* Assign v37 = --v36; 
* Assign the value of v36 variable to v36_value as a string e.g. "40" or "5000" 
* Assign the value of v37 variable to v37_value as a string e.g. "40" or "5000" 
*
* @todo Declare variables  v38 , v38_value , v39 & v39_value  
* Assign v38 = 2; 
* Assign v39 = v38--; 
* Assign the value of v38 variable to v38_value as a string e.g. "40" or "5000" 
* Assign the value of v39 variable to v39_value as a string e.g. "40" or "5000" 
*
*
* --------------unary negation (-) -----------
* To run all tests in this section use 
* 	npm test decrement 
*
* @todo Declare variables  v40 , v41 & v41_value  
*
* Assign v40 = 2; 
* Assign v41 = -v40; 
* Assign the value of v41 variable to v41_value as a string e.g. "40" or "5000" 
*
* @todo Declare variables  v42 , v42_value , v43 & v43_value  
* Assign v42 = -2; 
* Assign v43 = -v42; 
* Assign the value of v43 variable to v43_value as a string e.g. "40" or "5000" 
*
*
* --------------unary addition (+) -----------
* To run all tests in this section use 
* 	npm test decrement 
*
* @todo Declare variables  v44 , v45 , v45_value and v45_type  
* Assign v44 =  2 ; 
* Assign v45 = +v44; 
* Assign the value of v45 variable to v45_value as a string e.g. "40" or "5000" 
* Assign the type of v45 to v45_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v46 , v47 , v47_value and v47_type  
* Assign v46 =  true ;
* Assign v47 = +v46; 
* Assign the value of v47 variable to v47_value as a string e.g. "40" or "5000" 
* Assign the type of v47 to v47_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v48 , v49 , v49_value and v49_type  
* Assign v48 =  false ;
* Assign v49 = +v48; 
* Assign the value of v49 variable to v49_value as a string e.g. "40" or "5000" 
* Assign the type of v49 to v49_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v50 , v51 , v51_value and v51_type  
* Assign v50 = null;
* Assign v51 = +v50; 
* Assign the value of v51 variable to v51_value as a string e.g. "40" or "5000" 
* Assign the type of v51 to v51_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables  v52 , v52 , v52_value and v52_type  
* Assign v52 = "hello"
* Assign v52 = +v52; 
* Assign the value of v52 variable to v52_value as a string e.g. "40" or "5000" 
* Assign the type of v52 to v52_type as a string e.g. "number" or "string" or "boolean"
*
*
*
*/

// ******** Don't edit above this line *********************** 
















// ******** Don't edit below this line *********************** 
	var obj = {};
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
	(typeof(va9)=== 'undefined') || (obj.va9 = va9) ;
	(typeof(va9_type)=== 'undefined') || (obj.va9_type = va9_type) ;
	(typeof(va9_value)=== 'undefined') || (obj.va9_value = va9_value) ;
	
	(typeof(va10)=== 'undefined') || (obj.va10 = va10) ;
	(typeof(va10_type)=== 'undefined') || (obj.va10_type = va10_type) ;
	(typeof(va10_value)=== 'undefined') || (obj.va10_value = va10_value) ;
	
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







	return obj;
}();








