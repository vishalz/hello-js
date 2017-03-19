
module.exports = function(){

/**
 *
 *
 *
 *
 *
 *
 * to run all tests in this file use 
 * 	npm test basic.30.strings
 *
 * -----------------------  general ------------------------------------- ------------------  
 * to run all tests in this section  use 
 * 	npm test strings.general
 *
 * @todo Declare variables str1, v2 ,  v2_value , v2_type 
 * Assign variable str1  string "Hello World"
 * Assign v2 = str1.length    
 * Assign the value of v2 variable to v2_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v2 to v2_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables  str2 , str2Length   
 * Assign str2 = "Hello World";
 * Assign str2Length   = str2.length;
 * 
 * @todo Declare variables  v4 & v4_value & v4_type 
 * Assign v4 = str2.charAt(0);    
 * Assign the value of v4 variable to v4_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v4 to v4_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables   v5 & v5_value & v5_type 
 * Assign v5 = str2.charAt(5);    
 * Assign the value of v5 variable to v5_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v5 to v5_type as a string e.g. "number" or "string" or "boolean"
 *
 *
 * @todo Declare variables  v6 & v6_value & v6_type 
 * Assign v6 = str2.charAt(str2Length);    
 * Assign the value of v6 variable to v6_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v6 to v6_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables  v7 & v7_value & v7_type 
 * Assign v7 = str2.charAt(str2Length -1);    
 * Assign the value of v7 variable to v7_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v7 to v7_type as a string e.g. "number" or "string" or "boolean"
 * 
 * --------------------------------- bonus   ---------------------------------------
 * to run all tests in this section  use 
 * 	npm test strings.bonus
 *
 * @todo declare  variable isSpace
 * Assign  isSpace  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x and returns true if there is a Space in the string. 
 * The function return false if the parameter x is missing
 * The function return false if the parameter x is not a  string 
 * e.g. isSpace("Hello World") // returns true
 * e.g. isSpace("Hello") // returns false
 * e.g. isSpace(1000) // returns false 
 * 
 
 * 
 * @todo declare  variable firstSpace
 * Assign  firstSpace  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x and returns the index of first Space in the string. 
 * The function return false if there is no space in the string
 * The function return false if the parameter x is missing
 * The function return false if the parameter x is not a  string 
 * e.g. firstSpace("Hello World") // returns the number 5 
 * e.g. firstSpace(1000) // returns false 
 * 
* 
 * 
 *------------------------------------bonus or basic.60 ----------------------------------------- 
 * @todo declare  variable deSpacify
 * Assign  deSpacify  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x and returns a string with all spaces removed. 
 * The function return false if the parameter x is missing
 * The function return false if the parameter x is not a  string 
 * e.g. deSpacify("Hello World") // returns "HelloWorld"
 * e.g. deSpacify(1000) // returns false * 
 * 
 * @todo declare  variable firstWord
 * Assign  firstWord  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x and returns the first word of the string. 
 * The function return false if the parameter x is missing
 * The function return false if the parameter x is not a  string 
 * e.g. firstWord("Hello World") // returns "Hello"
 * e.g. firstWord(1000) // returns false 
 * e.g. firstWord("IHaveThePower") // returns false 
 * 
 * 
 * 
 *
 *
 */
// ******** Don't edit above this line *********************** 

var str1 = "Hello World";
var v2 = str1.length; 
var v2_value = "11";
var v2_type = "number";

var str2 = "Hello World";
var str2Length = str2.length;

var v4 = str2.charAt(0); 
var v4_value = "H";
var v4_type = "string";


var v5 = str2.charAt(5); 
var v5_value = " ";
var v5_type = "string";

var v6 = str2.charAt(str2Length); 
var v6_value = "";
var v6_type = "string";

var v7 = str2.charAt(str2Length - 1 ); 
var v7_value = "d";
var v7_type = "string";


// isSpace 

var isSpace = function(x){

  if (typeof x !== 'string') { return false; } 
  var strLength = x.length;
  for(index =0 ; index < strLength ; index++){

	  if (x.charAt(index) === " "){
	    return true;
	  }
	
  }//end for loop 

  // no Space found in the string return false 
  return false;

}

// firstSapce

var firstSpace = function(x){

  if (typeof x !== 'string') { return false; } 
  var strLength = x.length;
  for(index =0 ; index < strLength ; index++){

	  if (x.charAt(index) === " "){
	    return index;
	  }
	
  }//end for loop 

  // no Space found in the string return false 
  return false;

} // end of fristSpace



// countSpace
var countSpace = function(x){

  if (typeof x !== 'string') { return false; } 
  var strLength = x.length;
  var spaceCount = 0;
  for(index =0 ; index < strLength ; index++){

	  if (x.charAt(index) === " "){
	    // A Space is found in the String, increment spaceCount 
      spaceCount++;
	  }
	
  }//end for loop 

  // no Space found in the string return false 
  return spaceCount;

} // end of countSpace








// ******** Don't edit below this line *********************** 
	var obj = {};

	(typeof(isSpace)=== 'undefined') || (obj.isSpace = isSpace); 
  (typeof(firstSpace)=== 'undefined') || (obj.firstSpace = firstSpace); 
  (typeof(countSpace)=== 'undefined') || (obj.countSpace = countSpace); 


	(typeof(str1)=== 'undefined') || (obj.str1 = str1); 
	(typeof(str2)=== 'undefined') || (obj.str2 = str2); 
	(typeof(str3)=== 'undefined') || (obj.str3 = str3); 
	(typeof(str4)=== 'undefined') || (obj.str4 = str4); 
	(typeof(str5)=== 'undefined') || (obj.str5 = str5); 
	(typeof(str6)=== 'undefined') || (obj.str6 = str6); 
	(typeof(str7)=== 'undefined') || (obj.str7 = str7); 
	(typeof(str8)=== 'undefined') || (obj.str8 = str8); 
	(typeof(str9)=== 'undefined') || (obj.str9 = str9); 
	(typeof(str10)=== 'undefined') || (obj.str10 = str10); 



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
