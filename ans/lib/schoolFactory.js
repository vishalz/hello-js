'use strict'

// schoolFactory 
let schoolFactory = function schoolFactory(){

// Step 1
let  school = {};

// Step 2
// Step 2a private variables  
let totalStudents     = 0;
let schoolName        = '';
let studentDictionary = {};

// Step 2b private functions
let getSchoolName = function getSchoolName(){
  return schoolName;
};

let setSchoolName = function setSchoolName(strName){
  if (typeof (strName) !== 'string') {
    throw 'strName should be string';  
  }
  schoolName = strName;

};


let getStudentCount = function getStudentCount(){
  return totalStudents;

}

let addNewStudent = function addNewStudent(strName,strEmail,numGrade){
  
  // validate student object  

  if (typeof(strName) !== 'string'){
    throw 'strName should be of type string';
  }
  if (typeof(strEmail) !== 'string'){
    throw 'strEmail should be of type string';
  }

  if (typeof(numGrade) !== 'number'){
    throw 'numGrade should be of type string';
  }

  if (strEmail === ''){
    throw 'strEmail can not be empty';
  }

  if(numGrade < 1 || numGrade >8){
    throw 'numGrade has to be between 1 and 8';
  }

  //check if the student is in the dictionary
  // return error if there is a student with the same email 

  if (typeof (studentDictionary[strEmail]) !== 'undefined'){
    throw 'A student with this email already exists in this school';
  }

  studentDictionary[strEmail] = {
   'name'  : strName,
   'email' : strEmail,
   'grade' : numGrade
  };

  totalStudents = totalStudents + 1; 

};


let removeStudent = function removeStudent(strEmail){

  if (typeof(strEmail) !== 'string'){
    throw 'strEmail should be of type string';
  }

  if (strEmail === ''){
    throw 'strEmail can not be empty';
  }

  let student = studentDictionary[strEmail];
  if (typeof (student) === 'undefined'){
    throw 'A student with this email does not exist in this school';
  }
  
  delete studentDictionary[strEmail];

  totalStudents = totalStudents - 1; 


};
let getStudentGrade = function getStudentGrade(strEmail){

  if (typeof(strEmail) !== 'string'){
    throw 'strEmail should be of type string';
  }

  if (strEmail === ''){
    throw 'strEmail can not be empty';
  }

  let student = studentDictionary[strEmail];
  if (typeof (student) === 'undefined'){
    throw 'A student with this email does not exist in this school';
  }
  
  return student.grade;

};

school.getSchoolName   = getSchoolName;
school.setSchoolName   = setSchoolName;
school.getStudentCount = getStudentCount;
school.addNewStudent   = addNewStudent;
school.removeStudent   = removeStudent;
school.getStudentGrade = getStudentGrade;

return school;

} // end of schoolFactory 

module.exports = schoolFactory; 

