
module.exports = function(){ 

/**
*
* # Concepts 
*		1. Logical And , Logical Or operators return the value of one e of the operands. 
*		1. expr1 && expr2 -> returns expr1 if expr1 is falsy else returns expr2 
*		1. expr1 || expr2 -> returns expr2 if expr1 is falsy else returns expr1 
*		1. Javascript falsy values 
*			1. false
*			1. 0
*			1. ""
*			1. null
*			1. undefined
*			1. NaN
*
*
* # Running the Tests
*	 To test all logical operators use
* 	npm test basic.30.operators.logical
*
* ------------------logical-or-----------------------------
*
* ##  To run all tests in this section use 
* 	npm test logical-or
*
* @todo Declare variables v1 , v1_value and v1_type
* Assign v1 = true || true ; 
* Assign the value of variable v1 to variable v1_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v1 to v1_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v2 , v2_value and v2_type
* Assign v2 = false || true ; 
* Assign the value of variable v2 to variable v2_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v2 to v2_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v3 , v3_value and v3_type
* Assign v3 = true || false ; 
* Assign the value of variable v3 to variable v3_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v3 to v3_type as a string e.g. "number" or "string" or "boolean"

* @todo Declare variables v4 , v4_value and v4_type
* Assign v4 = "cat" || "dog" ; 
* Assign the value of variable v4 to variable v4_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v4 to v4_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v5 , v5_value and v5_type
* Assign v5 = false || "dog" ; 
* Assign the value of variable v5 to variable v5_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v5 to v5_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v6 , v6_value and v6_type
* Assign v6 = "cat" || false ; 
* Assign the value of variable v6 to variable v6_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v6 to v6_type as a string e.g. "number" or "string" or "boolean"
*
*@todo Declare variables v7 , v7_value and v7_type
* Assign v7 = 5 || 10;         
* Assign the value of variable v7 to variable v7_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v7 to v7_type as a string e.g. "number" or "string" or "boolean"
*
@todo Declare variables v8 , v8_value and v8_type
* Assign v8 = 0 || 10;         
* Assign the value of variable v8 to variable v8_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v8 to v8_type as a string e.g. "number" or "string" or "boolean"
*
@todo Declare variables v9 , v9_value and v9_type
* Assign v9 = NaN || "foo" ;    
* Assign the value of variable v9 to variable v9_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v9 to v9_type as a string e.g. "number" or "string" or "boolean"
*
@todo Declare variables v10 , v10_value and v10_type
* Assign v10 = "" || null ;     
* Assign the value of variable v10 to variable v10_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v10 to v10_type as a string e.g. "number" or "string" or "boolean"
*


* ------------------logical-and-----------------------------
*
* To run all tests in this section use 
* 	npm test logical-and
*
* @todo Declare variables v11 , v11_value and v11_type
* Assign v11 = true && true ; 
* Assign the value of variable v11 to variable v11_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v11 to v11_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v12 , v12_value and v12_type
* Assign v12 = true && false;
* Assign the value of variable v12 to variable v12_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v12 to v12_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v13 , v13_value and v13_type
* Assign v13 = false && true ; 
* Assign the value of variable v13 to variable v13_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v13 to v13_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v14 , v14_value and v14_type
* Assign v14 = "cat"  && "dog" ; 
* Assign the value of variable v14 to variable v14_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v14 to v14_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v15 , v15_value and v15_type
* Assign v15 = "false" && "dog" ; 
* Assign the value of variable v15 to variable v15_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v15 to v15_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v16 , v16_value and v16_type
* Assign v16 = "true" && "dog" ; 
* Assign the value of variable v16 to variable v16_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v16 to v16_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v17 , v17_value and v17_type
* Assign v17 = "cat" && true ; 
* Assign the value of variable v17 to variable v17_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v17 to v17_type as a string e.g. "number" or "string" or "boolean"
*
* @todo Declare variables v18 , v18_value and v18_type
* Assign v18 = "cat"  && false; 
* Assign the value of variable v18 to variable v18_value as a string e.g. "40" or "5000" or "true" or "false"
* Assign the type of v18 to v18_type as a string e.g. "number" or "string" or "boolean"
* 
*
*
*
*/

// ******** Don't edit above this line *********************** 

	var v1 = true || true ;
	var v1_value = "true";
	var v1_type = "boolean";
	
	var v2 = false || true; 
	var v2_value = "true";
	var v2_type = "boolean";
	
	var v3 = true || false; 
	var v3_value = "true";
	var v3_type = "boolean";
	
	var v4 = "cat" || "dog"; 
	var v4_value = "cat";
	var v4_type = "string";
	
	var v5 = false || "dog" ;
	var v5_value = "dog";
	var v5_type = "string";
	
	var v6 = "cat" || false ;
	var v6_value = "cat";
	var v6_type = "string";
	
	var v7 =  5 || 10 ;
	var v7_value = "5";
	var v7_type = "number";
	
	var v8 = 0 || 10 ;
	var v8_value = "10";
	var v8_type = "number";

	var v9 = NaN || "foo" ;
	var v9_value = "foo";
	var v9_type = "string";

	var v10 = ""  || null ;
	var v10_value = "null";
	var v10_type = "object";

	var v11 = true && true ;
	var v11_value = "true";
	var v11_type = "boolean";
	
	var v12 = true && false;
	var v12_value = "false";
	var v12_type = "boolean";
	

	var v13 = false && true ;
	var v13_value = "false";
	var v13_type = "boolean";
	

	var v14 = "cat" && "dog" ;
	var v14_value = "dog";
	var v14_type = "string";
	

	var v15 = false && "dog" ;
	var v15_value = "false";
	var v15_type = "boolean";
	

	var v16 = true && "dog" ;
	var v16_value = "dog";
	var v16_type = "string";
	

	var v17 = "cat" && true ;
	var v17_value = "true";
	var v17_type = "boolean";
	

	var v18 = "cat"  && false ;
	var v18_value = "false";
	var v18_type = "boolean";
	
	var v19 = 5  && 10  ;
	var v19_value = "10";
	var v19_type = "number";
	
	var v20 = 0  && 10  ;
	var v20_value = "0";
	var v20_type = "number";
	
	var v21 = NaN  && "dog" ;
	var v21_value = "NaN";
	var v21_type = "number";
	
	var v22 = null  && "dog" ;
	var v22_value = "null";
	var v22_type = "object";
	
	var v23 = ""  && false ;
	var v23_value = "";
	var v23_type = "string";
	

// @todo add  these in bonus section
//	var v1000 = 5 ;
//	var v1001 = false || ++v1000 ;
//	var v1000_value = 6;
//	var v1001_value = 6;
//	var v1002 = 5; 
//	var v1003 = true || ++V1002;
//	var v1002_value = "5";
//  var v1003_value = "true";
//  var v1003_type = "boolean";
//
//
//
//	var v10_value = "";
//	var v10_type = "boolean";
//	var v8 = (10 + 10) || true ;
//	var v8_value = "20";
//	var v8_type = "number";
//

	
	







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





	return obj;
}();


