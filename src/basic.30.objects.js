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
 * Assign v1 = 'color' in v0 
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
 * @todo create a dictionary called usersDictionary 
 * Assume there are three users with following properties 
 * First user  : first-name = Bruce , last-name = Wayne  , postal-code = 90210 , account-number = 111111A
 * Second user : first-name = Peter , last-name = Parker  , postal-code  = 10005 , account-number = 222222B
 * Third user  : first-name = Peter , last-name = Griffin  , postal-code  = 10005 , account-number = 333333C
 * Assume that each user can be identified by combinatiion of first-name, last-name and postal-code
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
 * @ todo create a factory function called guitarsFactory that returns a guitars object 
 * Oxford Learning Center school has an inventory of 5 guitars that are allocated to students 
 * The guitars are labelled 001,002...005
 * the guitars object will used to allocate the guitars to students
 * the guitars object has following  properties 
 * 
 * private properties 
 * 
 * 1.inventory
 * this variable holds the list of all guitars in the school 
 * the inventory of guitars does not change when a guitar is given or returned by a student
 * hint : use an array to model inventory of guitars 
 * i.e. inventory = ['001','002','003','004','005']
 * 
 * 2.availableGuitars
 * this variable holds a list of all guitars that are not allocated to any student 
 * when a guitar is allocated to a student, the guitar is removed from the list 
 * when a guitar is returned by a student, the guitar is added to this list 
 * At initialization  list is the same as inventory i.e. it has 5 guitars 001,002...005
 * hint : use an array to model list of available guitars 
 * i.e availableGuitars= copy of inventory array 
 *
 * 3.count            
 * This is the number of guitars available for allocation 
 * when a guitar is allocated to a student the count is decreased by 1 
 * when a guitar is returned by a student the count is increased by 1 
 * the initial count is 5 
 * 
 * public methods 
 * 1. getCount
 * 2. allocateGuitar
 * 3. returnGuitar
 *
 * 1. getCount 
 * this method returns the number of guitars available for allocation 
 *
 * 2. allocateGuitar 
 * returns the first available guitar from the list of availableGuitars 
 * throws an error if there are no guitars left to return 
 * removes the first available guitar from availableGuitars
 * decrements the count by 1
 * returns the guitar label i.e. 002 
 *
 * 3. returnGuitar(strGuitar) 
 * adds the returned guitar to the list of available guitars 
 * strGuitar is the label of guitar being returned by the student i.e 003 or 004 etc
 * throws an error if strGuitar is not a string
 * thorws an error if strGuitar is not included in inventory
 * throws an error if the strGuitar is already included in availableGuitars
 * adds strGuitar to the end of availableGuitars
 * increments  count by 1
 *
 *
 * ----------------------- modules ------------------  
 *
 * to run all tests in this section  use 
 *  npm test basic.30.modules.factory
 *
 * @todo create a mdoule call schoolFactory in ./lib/schoolFactory.js 
 * 
 * The factory models a school object 
 * The school has a name 
 * The school has grades from 1 to 8
 * All students have a unique email 
 * Total number of students in the school can not exceed 40 
 *
 * Factory Function  private variables used to model the school object 
 * 
 * 3 private variables 
 * 1. totalStudents of type number 
 * 2. schoolName  of type string 
 * 3. studentDictionary of type object
 *
 * 1. totalStudents of type number
 * totalStudents is number of students in the school 
 * totalStudents is incremented when a student joins the  school 
 * totalStudents is decremented when a student leaves the school
 * initial value is 0 
 *
 * 2. schoolName of type string 
 * schoolName is the name of the school 
 *
 * 3. studentDictionary  of type object 
 * studentDictionary is a dictionary object which is a collection of student objects  
 *
 * each student object has following properties 
 * name = name , value = string 
 * name = email , value = string 
 * name = grade , value = number 
 *
 * all students have a unique email 
 * grades in school are between 1 and 8 
 **
 * The school object has following mehtods
 *
 * 6 Public methods
 * 1. setSchoolName()  
 * 2. getSchoolName()
 * 3. getStudentCount()
 * 4. addNewStudent()
 * 5. removeStudent()
 * 6. getStudentGrade()
 *
 * 1. getSchoolName
 * returns schoolName
 *
 * 2. setSchoolName(strSchoolName) 
 * throws error if strSchoolName is not string 
 * sets the schoolName  
 * 
 * 3. getStudentCount
 * returns the total students in the school 
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
 * @todo create a mdoule call fruitsFactory in ./lib/fruitsFactory.js 
 * The module fruitsFactory creates an object that models a fruit basket  
 * The fruit basket can hold upto 30 fruits 
 * The fruit basket can only hold fruits of type apple, kiwi,banana & orange
 * The fruit basket has following public methods 
 * 1. getCount()
 * 2. getCountByFruit(strFruitType) 
 * 3. addFruits(strFruitType,numFruits) 
 * 4. removeFruits(strFruitType,numFruits) 
 *
 * 1. getCount()
 * returns totoal fruits in the basket
 *
 * 2. getCountByFruit(strFruitType) 
 * getCountByFruit returns the number of fruits in the basket of a certain type 
 * e.g. getCount("orange") returns 3 
 * e.g. getCount("apple") returns 0 
 *
 *
 * 3. addFruits(strFruitType,numFruits) 
 * adds a number of fruits of a given type to the basket  
 * throws an error if the type of fruit is not an apple, kiwi, banana or orange
 * throws an error if by adding these fruits the total fruits in the basket will exceed 30
 * addFruits('apple',3) adds 3 apples to the basket 
 * addFruits('kiwi',2) adds 2 kiwis to the basket 
 * addFruits('apple',31) throws an error  
 * addFruits('apple',1) throws an error if there are 30 fruits already in the basket
 * addFruits('papaya',1) throws an error
 *
 * 4. removeFruits(strFruitType,numFruits) 
 * removes a number of fruits of a given type from the basket  
 * throws an error if there are not enough fruits left in the basket
 * e.g. removeFruits('apple', 2) removes two apples
 * e.g. removeFruits('apple', 2) throws an error if there are <2 apples left in the basket 
 *
 * HINTs for Private variables 
 * You may want to use following private variables 
 * 3 private variables totalFruits , allowedFruits and fruitsDictionary
 *
 * 1. totalFruits of type number 
 * initial value = 0; 
 * incremented when fruits are added to the basket and decremented when fruits are removed 
 * can not be less than 1 or more than 30 
 *  
 * 2. allowedFruits of type array  = ['apple','kiwi','banana','orange'];
 *
 * 3. fruitsDictionary of type object initial value = {} 
 *
 * The fruitsDictionary object is dictionary object which is a collection of fruits objects  
 * fruitsDictionary property name = type of fruit , property value = fruits object 
 * e.g. name = 'apple' , value = { type : 'apple', count : 3};
 * e.g. name = 'kiwi' , value  = { type : 'kiwi' , count : 4 };
 *
 * fruits object models the type of fruit in the basket and the count of fruits of that type
 * Each fruits object has 2  properties 
 * 1 name = type , value = string and 2. name = count , type = number  
 * e.g. { type : 'apple' , count : 3 } 
 * All fruits objects have a unique property called type e.g. 'apple',  'orange', 'kiwi' etc
 * There will be one fruits object for each type of fruit in the basket
 * e.g. if there are 3 apples in the basket, there will be 1  fruits object with type = 'apple' and count = 3
 * e.g. if there are 4 kiwis in the basket, there will be 1  fruits object with type = 'kiwi' and count = 4
 * when fruits of certian type  are added to the basket the count is incremented
 * when fruits of certian type  are removed from the basket  the count is decremented
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
  (typeof(carsDictionary)=== 'undefined')  || (obj.carsDictionary = carsDictionary);
  (typeof(usersDictionary)=== 'undefined')  || (obj.usersDictionary = usersDictionary);
  (typeof(vehicleFactory)=== 'undefined')  || (obj.vehicleFactory = vehicleFactory);
  (typeof(guitarsFactory)=== 'undefined')  || (obj.guitarsFactory = guitarsFactory);
  (typeof(schoolFactory)=== 'undefined')   || (obj.schoolFactory = schoolFactory);

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
