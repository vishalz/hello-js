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
 * Assign v2 an empty object and add followig 7 properties to the v2 object
 * name = make    , value of type string
 * name = model   , value of type string
 * name = color   , value of type string
 * name = type    , value of type string
 * name = vin     , value of type string
 * name = year    , value of type number
 * name = mileage , value of type number
 *
 *
 * @todo Declare function validateVehicle
 * function takes one input parameter spec of type object
 * function validates if spec has following 3 properties
 * property name make  
 * property name model
 * property name color  
 * function throws an exception if property names are missing 
 *
 * @todo Declare variable v3 
 * Assign v3 an empty object and add 3  properties to the v3 object
 * name = first-name , value = 'Sponge Bob';
 * name = last-name , value = 'Square Pants';
 * name = class , value = 'Sponge';
 *
 * @todo Declare variable v4 
 * Assign v4 an empty object and add 3  properties to the v4 object
 * name = first-name , value = 'Patrick';
 * name = last-name , value = 'Star';
 * name = class , value = 'Starfish';
 * delete property class from the v4 object 
 *
 *
 *
 * -----------------------   dictionary   ------------------  
 * 
 * to run all tests in this section  use 
 *  npm test basic.30.objects.dictionary
 *
 *
 * @todo Declare variables v11, v12 , v14 , v14_value ,v15 , v15_value 
 * Assign v11 an empty object and add 3  properties to the v11 object
 * name = ryan@gmail.com , value = { name : 'ryan', grade : 7 , email : 'ryan@gmail.com'} 
 * name = vishal@gmail.com , value = { name : 'vishal', grade : 10 , email : 'vishal@gmail.com'} 
 * name = bella@hotmail.com , value = { name : 'bella', grade : 4 , email : 'bella@hotmail.com'} 
 * 
 * Assign v12 = v11['ryan@gmail.com'];
 * Assign v14 = v12.grade;
 * Assign the value of v14 variable to v14_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * Assign v15 = v11['alex@hotmail.com'];
 * Assign the value of v15 variable to v15_value as a string   e.g. "10" , "100" , "Infinity" etc.  
 *
 * @todo create a dictionary called carsDictionary 
 * Assume there are three cars with following properties 
 * First car  : make = Honda , model = Accord  , year = 2017 , vin = 111111A
 * Second car : make = Honda , model = Civic  , year  = 2016 , vin = 222222B
 * Third car  : make = Dodge , model = Viper  , year  = 2001 , vin = 333333C
 * Assume that each car has a unique vehicle identification number (vin)
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
 *@todo Create a factory function called schoolFactory
 *The factory returns a school object with following properties 
 * 
 * private properties 
 * 3 private properties totalStudents, schoolName  and studentDictionary
 *
 * name = totalStudents , value of type number
 * totalStudents is number of students in the school 
 *
 * name = schoolName , value of type string 
 * schoolName is the name of the school 
 *
 * name = studentDictionary , value of type object 
 * studentDictionary is a dictionary object which is a collection of student objects  
 *
 * each student object has following properties 
 * name = name , value = string 
 * name = email , value = string 
 * name = grade , value = number 
 *
 * all students have a unique email 
 * grades in school are between 1 and 8 
 *
 * public methods
 * 6 public methods  
 * setSchoolName 
 * getSchoolName
 * getStudentCount
 * addNewStudent()
 * removeStudent()
 * getStudentGrade()
 *
 * 
 * 1. getSchoolName
 * returns schoolName
 *
 * 2. setSchoolName(strSchoolName) 
 * throws error if strSchoolName is not string 
 * sets the schoolName private property 
 * 
 * 3. getStudentCount
 * returns the studentCount private variable
 *
 * 4. addNewStudent(strName, strEmail, numGrade)
 * throws an error if any parameter is not of right type
 * throws an error if strEmail is an empty string
 * throws an error if numGrade less than 1 or greater than 8
 * checks if a student with strEmail already exists in studentDictionary, if so throws an error 
 * creates a student object with properties name = strName , email = strEmail , grade = numGrade
 * adds a property to studentDictionary object where name = strEmail and value = student object
 * increments totalStudents private variable
 *
 * 5. removeStudent(strEmail)
 * throws an error if any parameter is not a string
 * throws an error if strEmail is an empty string
 * checks if a student with prpoerty name = strEmail exists in studentDictionary, if not throws an error 
 * deletes the property to studentDictionary object where property name = strEmail 
 * decrements  totalStudents private variable
 *
 * 6. getStudentGrade(strEmail)
 * throws an error if  parameter is not a string
 * throws an error if strEmail is an empty string
 * checks if a student with prpoerty name = strEmail exists in studentDictionary, if not throws an error 
 * retrievs the student object with property name = strEmail from studentDictionary 
 * returns the student's grade from the student object
 *
 * getStudentName(strEmail)
 * throws an error if  parameter is not a string
 * throws an error if strEmail is an empty string
 * checks if a student with prpoerty name = strEmail exists in studentDictionary, if not throws an error 
 * retrievs the student object with property name = strEmail from studentDictionary 
 * returns the student's name from the student object
 *
 *
 *
 *

 *
 * @todo create a catalogue object function factory called catalogueFactory
 * An item is a thing listed on a website with name , description, price, and universal product code
 * A catalogue is a collection of items 
 *
 * The factory should have following 
 *
 *
 * private variables 
 * has
 *
 * name        : alphanumeric 256 character
 * description : alphanumeric 1024 characters
 * price       : numeric upto two decimal points
 * upc         : numeric upto 12 digits identifies the 
 * 
 * https://www.amazon.ca/gp/help/customer/display.html?nodeId=200576730#identify_gtins
 *
 *
 * public methods
 * createItem(spec);
 * createItem method take an object of type spec with following properties
   * spec.name, spec.description, spec.price 
   * creatItem throws an exception if name , description, price or upc fields are missing  
   * createItem throws an exception if name , description or pr
 * 
 * 
 */
// ******** Don't edit above this line *********************** 






// ******** Don't edit below this line *********************** 
  let obj = {};

  (typeof(validateVehicle)=== 'undefined') || (obj.validateVehicle = validateVehicle); 
  (typeof(carsDictionary)=== 'undefined') || (obj.carsDictionary = carsDictionary); 
  (typeof(vehicleFactory)=== 'undefined') || (obj.vehicleFactory = vehicleFactory); 
  (typeof(schoolFactory)=== 'undefined') || (obj.schoolFactory = schoolFactory); 
  
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
