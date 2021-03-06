'use strict'
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
 *
 * --------------------------------- split   ---------------------------------------
 * !!!!!!!!!!!!     Attempt the tests in this section after completing basic.30.arrays !!!!!!!
 *
 * to run all tests in this section  use 
 * 	npm test strings.split
 *
 * @todo Declare variables  str3, v8 , v9,  v9_value & v9_type 
 * Assign str3 = "Crime Of The Century";
 * Assign v8 = str3.split(" "); 
 * Assign v9 = v8[0];
 * Assign the value of v9 variable to v9_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v9 to v9_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables  str4, v10 , v11,  v11_value & v11_type 
 * Assign str4 = "Starman";
 * Assign v10 = str4.split(""); 
 * Assign v11 = v10[3];
 * Assign the value of v11 variable to v11_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v11 to v11_type as a string e.g. "number" or "string" or "boolean"
 *
 * @todo Declare variables  str5, v12 , v14,  v14_value & v14_type 
 * Assign str5 = "Ziggy,Stardust";
 * Assign v12 = str5.split(","); 
 * Assign v14 = v12[1];
 * Assign the value of v14 variable to v14_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the type of variable v14 to v14_type as a string e.g. "number" or "string" or "boolean"
 *
 *
 *
 * --------------------------------- slice   ---------------------------------------
 *
 * to run all tests in this section  use 
 * 	npm test strings.slice
 *
 * @todo Declare variables  str6, v15 , v15_value , v16,  v16_value  
 * Assign str6 = "Ziggy Stardust By David Bowie";
 * Assign v15 = str6.slice(5,5+8); 
 * Assign v16 = str6.slice(0,5);
 * Assign the value of v15 variable to v15_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 * Assign the value of v16 variable to v16_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * --------------------------------- indexOf   ---------------------------------------
 *
 * to run all tests in this section  use 
 * 	npm test strings.indexOf
 *
 * @todo Declare variables  str7, v17 , v17_value ;
 * Assign str7 = "Ziggy Stardust By David Bowie";
 * Assign v17 = str7.indexOf("David"); 
 * Assign the value of v17 variable to v17_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * --------------------------------- replace   ---------------------------------------
 *
 * to run all tests in this section  use 
 * 	npm test strings.replace
 *
 * @todo Declare variables  str8, v18 , v18_value ;
 * Assign str8 = "Under Pressure by Queen";
 * Assign v18 = str8.replace("Queen", "David Bowie"); 
 * Assign the value of v18 variable to v18_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * @todo Declare variables  str9, v19 , v19_value ;
 * Assign str9 = "The-Jean-Genie";
 * Assign v19 = str9.replace("-", " "); 
 * Assign the value of v19 variable to v19_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * --------------------------------- escape   ---------------------------------------
 * to run all tests in this section  use 
 * 	npm test strings.escape
 *
 * @todo Declare variables str10
 * Assign str10 a string = Ryan Jr will be my father's father's son's son's son;

 *
 * @todo Declare variables str11
 * Assign str11 a string that when printed will print the following on two lines 
 * Line 1 - 'It ain't easy' 
 * Line 2 - 'starman'
 *
 *
 *
 *
 * --------------------------------- enumeration   ---------------------------------------
 * to run all tests in this section  use 
 * 	npm test strings.enumeration
 *
 * @todo declare  variable isSpace
 * Assign  isSpace  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x and returns true if there is a Space in the string. 
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. isSpace("Hello World") // returns true
 * e.g. isSpace("Hello") // returns false
 * e.g. isSpace(1000) // throws an Exception 
 *
 * @todo declare  variable firstSpace
 * Assign  firstSpace  = an anonymous function using a function expression 
 * The function takes one argument as input parameter x and returns the index of first Space in the string. 
 * The function throws an Exception if there is no space in the string
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. firstSpace("Hello World") // returns the number 5 
 * e.g. firstSpace(1000) // throws an Exception 
 * 
 * @todo declare  variable countSpace
 * Assign  countSpace  = an anonymous function using a function expression 
 * takes one argument as input parameter str 
 * returns the number of spaces in the parameter str
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. countSpace("Hello World, Here I Come") // returns the number 4 
 * e.g. countSpace(1000) // throws an Exception 
 * 
 *
 *
 *
 *
 *
 *
 * --------------------------------- bonus   ---------------------------------------
 * to run all tests in this section  use 
 * 	npm test strings.bonus
 *
 * @todo declare  variable lastChar
 * Assign  lastChar  = an anonymous function using a function expression 
 * takes one argument as input parameter str 
 * returns the last character in parameter str
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. lastChar("Hello World Here I Come") // returns the number e
 * e.g. lastChar(1000) // throws an Exception 
 *
 *
 * @todo declare  variable countWhiteSpace
 * Assign  countWhiteSpace  = an anonymous function using a function expression 
 * takes one argument as input parameter str 
 * returns the number of white spaces in the parameter str
 * white space = spaces , tabs , line feed or carriage returns
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. countWhiteSpace("Hello\tWorld\nHere I Come") // returns the number 4 
 * e.g. countWhiteSpace(1000) // throws an Exception 
 *
 *
 * @Declare a variable  numberify and assign it to a function expression
 * Takes one parameter str
 * throws an Exception if str is missing or if it is not an str
 * returns a string that has only number values from str
 * returns an empty string if str does not have any number type values
 * e.g. numberify() //throws an Exception 
 * e.g. numberify("10 Downing Street") // returns '10' 
 * e.g. numberify("250 Beverly Hills  90210") // returns '25090210' 
 *
 *
 * @todo declare  variable deSpacify
 * Assign  deSpacify  = an anonymous function using a function expression 
 * Takes one argument as input parameter str 
 * Enumerates str , replaces each  white space in str with - and returns a string  
 * white space = spaces , tabs , line feed or carriage returns
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. deSpacify("Under Pressure") // returns the string "UnderPressure"
 * e.g. deSpacify("The Jean Genie") // returns the string "TheJeanGenie"
 * e.g. deSpacify("starman") // returns the string "starman"
 * e.g. deSpacify(1000) // throws an Exception 
 * e.g. deSpacify("abc\tdef") returns "abcdef"
 * e.g. deSpacify("abc\ndef") returns "abcdef"
 * e.g. deSpacify("abc\rdef") returns "abcdef"
 *
 * @todo declare  variable slugify
 * Assign  slugify  = an anonymous function using a function expression 
 * Takes one argument as input parameter str 
 * Enumerates str , replaces each  white space in str with - and returns a string  
 * white space = spaces , tabs , line feed or carriage returns
 * The function throws an Exception if the parameter x is missing
 * The function throws an Exception if the parameter x is not a  string 
 * e.g. slugify("Under Pressure") // returns the string "Under-Pressure"
 * e.g. slugify("The Jean Genie") // returns the string "The-Jean-Genie"
 * e.g. slugify("starman") // returns the string "starman"
 * e.g. slugify(1000) // throws an Exception 
 * e.g. slugify("abc\tdef") returns "abc-def"
 * e.g. slugify("abc\ndef") returns "abc-def"
 * e.g. slugify("abc\rdef") returns "abc-def"
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


// string.prototype.split()

var str3 , v8 , v9 , v9_value , v9_type;
str3 = "Crime Of The Century";
v8 = str3.split(" ");
v9 = v8[0];
v9_value = "Crime";
v9_type = "string";

var str4 , v10 , v11 , v11_value , v11_type;
str4 = "Starman";
v10 = str4.split("");
v11 = v10[3];
v11_value = "r";
v11_type = "string";


var str5 , v12 , v14 , v14_value , v14_type;
str5 = "Ziggy,Stardust";
v12 = str5.split(",");
v14 = v12[1];
v14_value = "Stardust";
v14_type = "string";




// string.prototype.slice
var str6 , v15 , v15_value , v16 , v16_value;
str6 = "Ziggy Stardust By David Bowie";
v15 = str6.slice(6, 6+8);
v16 = str6.slice(0,5);
v15_value = "Stardust";
v16_value = "Ziggy";


// string.prototype.indexOf
var str7 , v17 , v17_value ;
str7 = "Ziggy Stardust By David Bowie";
v17 = str7.indexOf("David");
v17_value = "18";

// string.prototype.replace
var str8 , v18 , v18_value ;
str8 = "Under Pressure by Queen";
v18 = str8.replace("Queen", "David Bowie");
v18_value = "Under Pressure by David Bowie";

var str9 , v19 , v19_value ;
str9 = "The-Jean-Genie";
v19 = str9.replace("-", " ");
v19_value = "The Jean-Genie";


//string.escape

var str10 ='Ryan Jr will be my father\'s father\'s son\'s son\'s son';
 
var str11 = 'It ain\'t easy\nstarman';


//string.enumeration


// isSpace 

var isSpace = function(x){

  if (typeof x !== 'string') { throw 'Invalid Parameter'; } 

  var strLength = x.length;
  var returnValue = false;
  var index;
  for(index =0 ; index < strLength ; index++){
	  if (x.charAt(index) === " "){
	    returnValue = true;
      break;
	  }
	
  }//end for loop 

  return returnValue ;

}

// firstSapce

var firstSpace = function(x){

  if (typeof x !== 'string') { throw 'Invalid Parameter'; } 

  var strLength = x.length;
  var returnValue = false;
  var index;
  for(index =0 ; index < strLength ; index++){

	  if (x.charAt(index) === " "){
	    returnValue = index;
      break;
	  }
	
  }//end for loop 

  return returnValue;

} // end of fristSpace



// countSpace
var countSpace = function(x){

  if (typeof x !== 'string') { throw 'Invalid Parameter'; } 

  var strLength = x.length;
  var spaceCount = 0;
  var index;
  for(index =0 ; index < strLength ; index++){

	  if (x.charAt(index) === " "){
	    // A Space is found in the String, increment spaceCount 
      spaceCount++;
	  }
	
  }//end for loop 

  return spaceCount;

} // end of countSpace


// bonus section 


//lastChar 
var lastChar = function(str){

  if (typeof (str) !== 'string') { throw 'Invalid Parameter'; }

  return str[str.length -1];


}// end of lastChar



// countWhiteSpace
var countWhiteSpace = function(x){

  if (typeof x !== 'string') { throw 'Invalid Parameter'; } 

  var strLength = x.length;
  var whiteSpaceCount = 0;

  var whiteSpaces = [ " " , "\t" , "\n" , "\r"] ;
  var index;
  for(index =0 ; index < strLength ; index++){
    var char = x.charAt(index);
    if (whiteSpaces.includes(char)){
      whiteSpaceCount++;
	  }
  }//end for loop 

  return whiteSpaceCount;

} // end of countWhiteSpace

//numberify

var numberify = function (str){
  var i, returnValue;
	if (typeof(str) !== 'string') { throw 'Invalid Parameter'; }
	returnValue = "";
  var i;
  for(i=0 ; i< str.length ; i++){
		//var num = (+str.charAt(i));
		var num = parseInt(str.charAt(i),10);
		if(typeof(num) === 'number' && isFinite(num)){
			returnValue = returnValue + num.toString();	
		}// end of if 

	}// end of for
	return returnValue;

}// end of numberify







// deSpacify
var deSpacify = function(str){
  if (typeof(str) !== 'string') {throw 'Invalid Parameter';}

  var whiteSpaces = [ " " , "\t" , "\n" , "\r"] ;
  var deSpaceStr = "";
  var i;
  for (i=0 ; i < str.length ; i++){
    var char = str.charAt(i);
    if (whiteSpaces.includes(char) !== true){
      deSpaceStr = deSpaceStr + str.charAt(i);
    }

  }//end of for 

  return deSpaceStr;


} // end of deSpacify






// slugify
var slugify = function(str){
  if (typeof(str) !== 'string') {throw 'Invalid Parameter';}

  var whiteSpaces = [ " " , "\t" , "\n" , "\r"] ;
  var slugStr = "";
  var i;
  for (i=0 ; i < str.length ; i++){
   
    var char = str.charAt(i);
    //if ( char === " " || char === "\t" || char === "\n" || char == "\r")
    if (whiteSpaces.includes(char) === true){
      slugStr = slugStr + "-";
    }else {
      slugStr = slugStr + str.charAt(i);
    }

  }//end of for 

  return slugStr;


} // end of slugify





// ******** Don't edit below this line *********************** 
	var obj = {};

	(typeof(isSpace)=== 'undefined') || (obj.isSpace = isSpace); 
  (typeof(firstSpace)=== 'undefined') || (obj.firstSpace = firstSpace); 
  (typeof(countSpace)=== 'undefined') || (obj.countSpace = countSpace); 
  (typeof(slugify)=== 'undefined') || (obj.slugify = slugify); 
  (typeof(lastChar)=== 'undefined') || (obj.lastChar = lastChar); 
  (typeof(countWhiteSpace)=== 'undefined') || (obj.countWhiteSpace = countWhiteSpace); 
  (typeof(deSpacify)=== 'undefined') || (obj.deSpacify = deSpacify); 
  (typeof(numberify)=== 'undefined') || (obj.numberify = numberify); 


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
	(typeof(str11)=== 'undefined') || (obj.str11 = str11); 
	(typeof(str12)=== 'undefined') || (obj.str12 = str12); 



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
