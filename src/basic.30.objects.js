'use strict'
module.exports = function(){

/**
 *
 *  npm test basic.30.objects
 * 
 * -----------------------   general  property ------------------  
 * 
 * to run all tests in this section  use 
 *  npm test basic.30.objects.general
 * 
 * @todo declare variable v0 , v1 , v1_value;
 * Create an object and assign it to v0
 * Add a properties called make,model,year to object v0
 * Assign v1 = v0.hasOwnProperty('color')
 * Assign the value of v1 variable to v1_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 *
 * @todo Declare variable v2 
 * Assign v2 an empty object and add followig properties to the v2 object
 * string type values make , model , color , type, vin 
 * number type value  year , mileage  
 *
 *
 * @todo Declare function validateVehicle
 * function takes one input parameter spec of type object
 * function validates if spec has following properties
 * property name make  
 * property name model
 * property name color  
 * function throws an exception if property names are missing or invalid types
 *
 *
 *
 *
  * -----------------------   factory   ------------------  
 * 
 * to run all tests in this section  use 
 *  npm test basic.30.objects.factory
 *
 * @todo create a factory function called vehicleFactory that will return an object with following 
 * 
 * private variables 
 *
 * make of type string
 * model of type string 
 * year of type number
 *
 * public methods
 *
 * getMake() returns a string = make of the vehicle 
 * getModel() return a string = model of the vehicle 
 * getYear() returns a year = the year the vehicle was made 
 *
 *
 * setMake(strMake) 
 * sets the make of the factory object
 * throws an error if strMake is not a string 
 *
 * setModel(strModel)
 * sets the model of the factory object 
 * throws an error if strModel is not a string 
 * throws an error if the private variable make of the object has not been set
 *
 * setYear(numYear)
 * sets the model of the factory object 
 * throws an error if numYear is not a number 
 * throws an error if year is greater than 2017 or less than 1908 
 * throws an error if the private variable make  of the object has not been set
 * throws an error if the private variable model of the object has not been set
 *
 *
 * 
 * 
 */
// ******** Don't edit above this line *********************** 






// ******** Don't edit below this line *********************** 
  var obj = {};

  (typeof(validateVehicle)=== 'undefined') || (obj.validateVehicle = validateVehicle); 
  (typeof(vehicleFactory)=== 'undefined') || (obj.vehicleFactory = vehicleFactory); 
  
  (typeof(v0)=== 'undefined') || (obj.v0 = v0); 
  (typeof(v0_type)=== 'undefined') || (obj.v0_type = v0_type) ;
  (typeof(v0_value)=== 'undefined') || (obj.v0_value = v0_value) ;
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
