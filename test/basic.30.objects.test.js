'use strict'

const obj            = require('../src/basic.30.objects');
const schoolFactory  = require('../lib/schoolFactory');
const fruitsBasket   = require('../lib/fruitsFactory');

describe("basic.30.objects.general" , function(){
 
  it("v0 should make,model,type,e", function(){
    obj.v0.should.have.property('make');
    obj.v0.should.have.property('model');
    obj.v0.should.have.property('year');
    obj.v1.should.be.eql(false);
    obj.v1_value.should.be.eql(obj.v1.toString());
	});

 
  it("v2 should make,model,color,type,vin,year and mileage", function(){
    obj.v2.should.have.property('make').with.type('string');;
    obj.v2.should.have.property('model').with.type('string');
    obj.v2.should.have.property('color').with.type('string');
    obj.v2.should.have.property('type').with.type('string');
    obj.v2.should.have.property('vin').with.type('string');
    obj.v2.should.have.property('year').with.type('number');
    obj.v2.should.have.property('mileage').with.type('number');
	});

  it("validateVehicle() should throw an Exception", function(){
    (() => obj.validateVehicle()).should.throw();
  });

  it("validateVehicle({make:'str',model:'str',color:'str'}) should not throw an Exception", function(){
    (() => obj.validateVehicle({make:'str',model:'str',color:'str'})).should.not.throw();
  });

  it("validateVehicle({make:'str',color:'str'}) should  throw an Exception", function(){
    (() => obj.validateVehicle({make:'str',color:'str'})).should.throw();
  });
  it("validateVehicle({make:'str'}) should  throw an Exception", function(){
    (() => obj.validateVehicle({make:'str'})).should.throw();
  });

  it("v3 should have first-name, last-name and class", function(){
    let x = {'first-name': 'Sponge Bob', 'last-name' : 'Square Pants' , 'class' : 'Sponge'};
    obj.v3.should.be.eql(x);
  });

  it("v4 should have first-name, last-name ", function(){
    let x = {'first-name': 'Patrick', 'last-name' : 'Star' };
    obj.v4.should.be.eql(x);
  });

}); //end of describe 

describe('basic.30.objects.dictionary' , function(){

 it("v14 should be 7, v15 should be undefined ", function(){
  let v11 = {};
  v11['ryan@gmail.com']    = { name : 'ryan', grade   : 7 , email  : 'ryan@gmail.com'} ;
  v11['vishal@gmail.com']  = { name : 'vishal', grade : 10 , email : 'vishal@gmail.com'} ;
  v11['bella@hotmail.com'] = { name : 'bella', grade  : 4 , email  : 'bella@hotmail.com'} ;
  obj.v11.should.be.eql(v11);
  obj.v12.should.be.eql(v11['ryan@gmail.com']);
  obj.v14_value.should.be.eql(v11['ryan@gmail.com'].grade.toString());
  (typeof(obj.v15) === 'undefined').should.be.true;
  obj.v15_value.should.be.eql('undefined');
   
 });

 it("carsDictionary should have 3 properties", function(){
  let carsDictionary = {};
  carsDictionary['111111A'] = { make : 'Honda' , model : 'Accord'  , year : 2017 , vin : '111111A'};
  carsDictionary['222222B'] = { make : 'Honda' , model : 'Civic'  , year : 2016 , vin : '222222B'};
  carsDictionary['333333C'] = { make : 'Dodge' , model : 'Viper'  , year : 2001 , vin : '333333C'};

  obj.carsDictionary.should.be.eql(carsDictionary);
   
 });

it("usersDictionary should have 3 properties", function(){
	
  let usersDictionary = {};
	usersDictionary['BruceWayne90210'] = {
	  'first-name'                           : 'Bruce',
	  'last-name'                            : 'Wayne',
	  'postal-code'                          : '90210',
	  'account-number'                       : '111111A'
	};

	usersDictionary['PeterParker10005'] = {
	  'first-name'                           : 'Peter',
	  'last-name'                            : 'Parker',
	  'postal-code'                          : '10005',
	  'account-number'                       : '222222B'
	};


	usersDictionary['PeterGriffin10005'] = {
	  'first-name'                           : 'Peter',
	  'last-name'                            : 'Griffin',
	  'postal-code'                          : '10005',
	  'account-number'                       : '333333C'
	};


	
  obj.usersDictionary.should.be.eql(usersDictionary);
   
 });






}); //end of describe 

describe('basic.30.objects.factory.vehicle' , function(){
 
  it("vehicleFactory make, model and year should be private ", function(){
    let v = obj.vehicleFactory();
    (typeof(v.make)  === 'undefined').should.be.true;
    (typeof(v.model) === 'undefined').should.be.true;
    (typeof(v.year)  === 'undefined').should.be.true;
  });
 
  it("vehicleFactory getMake,setMake,getModel,setMode,getYear,setYear should be public", function(){
    let v = obj.vehicleFactory();
    (typeof(v.getMake)  === 'function').should.be.true;
    (typeof(v.getModel) === 'function').should.be.true;
    (typeof(v.getYear)  === 'function').should.be.true;
    (typeof(v.setMake)  === 'function').should.be.true;
    (typeof(v.setModel) === 'function').should.be.true;
    (typeof(v.setYear)  === 'function').should.be.true;
  });
  
  it("vehicle.setMake('Honda') vehicle.getMake() should return 'Honda'", function(){
    let v = obj.vehicleFactory();
    let make = 'Honda';
    v.setMake(make);
    v.getMake().should.be.eql(make);
  });

  it("vehicle.setModel('CRV') vehicle.getModel() should return 'CRV'", function(){
    let v = obj.vehicleFactory();
    let model = 'CRV';
    let make = 'Honda';
    v.setMake(make);
    v.setModel(model);
    v.getModel().should.be.eql(model);
  });

  it("vehicle.setYear(2015) vehicle.getYear() should return 2015", function(){
    let v = obj.vehicleFactory();
    let year = 2015;
    let model = 'CRV';
    let make = 'Honda';
    v.setMake(make);
    v.setModel(model);
    v.setYear(year);
    v.getYear().should.be.eql(year);
  });


  //validation test cases
  it("vehicle.setMake() should throw an error", function(){
    let v = obj.vehicleFactory();
    (() => v.setMake()).should.throw();
  });

  it("vehicle.setModel() should throw an error", function(){
    let v = obj.vehicleFactory();
    (() => v.setModel()).should.throw();
  });
 
  it("vehicle.setYear() should throw an error", function(){
    let v = obj.vehicleFactory();
    (() => v.setYear()).should.throw();
  });

  it("vehicle.setYear('2015') should throw an error", function(){
    let v = obj.vehicleFactory();
    (() => v.setYear('2105')).should.throw();
  });

  it("vehicle.setModel('CRV') w/o calling vehicle.setMake('Honda') should throw an error", function(){
    let v = obj.vehicleFactory();
    let model = 'CRV';
    (() => v.setModel(model)).should.throw();
  });

  it("vehicle.setYear('CRV') w/o setting make and model should throw an error", function(){
    let v = obj.vehicleFactory();
    let year = 2015;
    (() => v.setYear(year)).should.throw();
  });

  it("vehicle.setYear(1900) vehicle.getYear() should throw an exception", function(){
    let v = obj.vehicleFactory();
    let year = 1900;
    let model = 'CRV';
    let make = 'Honda';
    v.setMake(make);
    v.setModel(model);
    (() => v.setYear(year)).should.throw();
  });

  it("vehicle.setYear(2020) vehicle.getYear() should throw an exception", function(){
    let v = obj.vehicleFactory();
    let year = 2020;
    let model = 'CRV';
    let make = 'Honda';
    v.setMake(make);
    v.setModel(model);
    (() => v.setYear(year)).should.throw();
  });


}); //end of describe 

describe('basic.30.objects.factory.guitars' , function(){

  it("Positive tests for guitars object", function(){
    let g = obj.guitarsFactory();
    g.getCount().should.be.eql(5);
    g.allocateGuitar().should.be.eql('001');
    g.getCount().should.be.eql(4);
    g.returnGuitar('001');
    g.getCount().should.be.eql(5);
    g.allocateGuitar().should.be.eql('002');
    g.allocateGuitar().should.be.eql('003');
    g.allocateGuitar().should.be.eql('004');
    g.allocateGuitar().should.be.eql('005');
    g.allocateGuitar().should.be.eql('001');
    g.getCount().should.be.eql(0);
    (()=> g.allocateGuitar()).should.throw();
    g.returnGuitar('003');
    g.returnGuitar('001');
    g.getCount().should.be.eql(2);
    g.allocateGuitar().should.be.eql('003');


  });

  it("Validation tests for returnGuitar method", function(){
    let g = obj.guitarsFactory();
    (()=> g.returnGuitar()).should.throw();
    (()=> g.returnGuitar('001')).should.throw();
    g.allocateGuitar().should.be.eql('001');
    g.getCount().should.be.eql(4);
    (()=> g.returnGuitar('090')).should.throw();
   
  });

}); //end of describe 

//Modules


describe('basic.30.modules.factory.school' , function(){
  it("Positive tests for school object", function(){
    let s = schoolFactory();
    s.setSchoolName('St Peter');
    s.getSchoolName().should.eql('St Peter');
    s.addNewStudent('vishal','vishal@gmail.com',8);
    s.addNewStudent('ryan','ryan@gmail.com',7);
    s.getStudentCount().should.eql(2);
    s.getStudentGrade('ryan@gmail.com').should.eql(7);
    s.removeStudent('vishal@gmail.com');
    s.getStudentCount().should.eql(1);
    (() => s.getStudentGrade('vishal@gmail.com')).should.throw();
  });

  it("Validation tests for setSchoolName  method", function(){
    let s = schoolFactory();
    (() => s.setSchoolName()).should.throw();
  });

  it("Validation tests for addNewStudent  method", function(){
    let s = schoolFactory();
    (() => s.addNewStudent()).should.throw();
    (() => s.addNewStudent(123,'v@gmail.com',7)).should.throw();
    (() => s.addNewStudent('vishal','v@gmail.com','7')).should.throw();
    (() => s.addNewStudent('vishal','',7)).should.throw();
    (() => s.addNewStudent('vishal','vishal@gmail.com',10)).should.throw();
    (() => s.addNewStudent('vishal','vishal@gmail.com',0)).should.throw();
    s.addNewStudent('vishal','vishal@gmail.com',8);
    (() => s.addNewStudent('vishal','vishal@gmail.com',8)).should.throw();
    s.getStudentCount().should.be.eql(1);
  });

  it("Validation tests for removeStudent  method", function(){
    let s = schoolFactory();
    (() => s.removeStudent()).should.throw();
    (() => s.removeStudent('')).should.throw();
    (() => s.removeStudent(123)).should.throw();
    (() => s.removeStudent('vishal@gmail.com')).should.throw();
    s.getStudentCount().should.be.eql(0);
  });

  it("Validation tests for getStudentGrade method", function(){
    let s = schoolFactory();
    (() => s.getStudentGrade()).should.throw();
    (() => s.getStudentGrade('')).should.throw();
    (() => s.getStudentGrade(123)).should.throw();
    (() => s.getStudentGrade('vishal@gmail.com')).should.throw();
  });

}); //end of describe 

/*
describe('basic.30.modules.factory.guitars' , function(){
  it("Positive tests for guitars object", function(){
    let g = guitarsFactory();
    g.getCount().should.be.eql(5);
    g.allocateGuitar().should.be.eql('001');
    g.getCount().should.be.eql(4);
    g.returnGuitar('001');
    g.getCount().should.be.eql(5);
    g.allocateGuitar().should.be.eql('002');
    g.allocateGuitar().should.be.eql('003');
    g.allocateGuitar().should.be.eql('004');
    g.allocateGuitar().should.be.eql('005');
    g.allocateGuitar().should.be.eql('001');
    g.getCount().should.be.eql(0);
    (()=> g.allocateGuitar()).should.throw();
    g.returnGuitar('003');
    g.returnGuitar('001');
    g.getCount().should.be.eql(2);
    g.allocateGuitar().should.be.eql('003');

  });

  it("Validation tests for returnGuitar method", function(){
    let g = guitarsFactory();
    (()=> g.returnGuitar()).should.throw();
    (()=> g.returnGuitar('001')).should.throw();
    g.allocateGuitar().should.be.eql('001');
    g.getCount().should.be.eql(4);
    (()=> g.returnGuitar('090')).should.throw();
   
  });

}); //end of describe 

*/

describe('basic.30.modules.factory.fruits' , function(){
  it('fruitsFactory object should have four methods', function(){
    let fb = fruitsBasket(); 
    fb.should.have.property('getCount').with.type('function');;
    fb.should.have.property('getCountByFruit').with.type('function');;
    fb.should.have.property('addFruits').with.type('function');;
    fb.should.have.property('removeFruits').with.type('function');;
  });
  it('Positive tests for getCount',function(){
    let fb = fruitsBasket();
    fb.getCount().should.be.eql(0);
    fb.addFruits('kiwi',10);
    fb.addFruits('apple',10);
    fb.getCount().should.be.eql(20);
    fb.removeFruits('kiwi',5);
    fb.getCount().should.be.eql(15);
    fb.removeFruits('apple',5);
    fb.getCount().should.be.eql(10);
  });
 
  it('Positive tests for getCountByFruit',function(){
    let fb = fruitsBasket();
    fb.getCountByFruit('apple').should.be.eql(0);
    fb.addFruits('kiwi',10);
    fb.addFruits('apple',10);
    fb.getCountByFruit('apple').should.be.eql(10);
    fb.removeFruits('kiwi',5);
    fb.removeFruits('apple',5);
    fb.getCountByFruit('kiwi').should.be.eql(5);
    fb.getCountByFruit('apple').should.be.eql(5);
  });

  it("Basket can have upto 30 fruits", function(){
    let fb = fruitsBasket();
    fb.addFruits('kiwi',10);
    fb.addFruits('apple',10);
    fb.addFruits('orange',5);
    (() => fb.addFruits('orange',6)).should.throw();
    (() => fb.addFruits('orange',5)).should.not.throw();
    (() => fb.addFruits('kiwi',1)).should.throw();
  });

  it('Allowed fruits = apple, kiwi,banana & orange',function(){
    let fb = fruitsBasket();
    (() => fb.addFruits('apple',5)).should.not.throw();
    (() => fb.addFruits('kiwi',5)).should.not.throw();
    (() => fb.addFruits('banana',5)).should.not.throw();
    (() => fb.addFruits('orange',5)).should.not.throw();
  });

  it('Validation tests for getCountByFruit',function(){
    let fb = fruitsBasket();
    (() => fb.getCountByFruit()).should.throw();
    (() => fb.getCountByFruit(123)).should.throw();
  });

  it('Validation tests for addFruits',function(){
    let fb = fruitsBasket();
    (() => fb.addFruits()).should.throw();
    (() => fb.addFruits('apple')).should.throw();
    (() => fb.addFruits('tomato',10)).should.throw();
    (() => fb.addFruits('apple',31)).should.throw();
    (() => fb.addFruits('kiwi',30)).should.not.throw();
    (() => fb.addFruits('apple',1)).should.throw();

  });

  it('Validation tests for removeFruits',function(){
    let fb = fruitsBasket();
    (() => fb.removeFruits()).should.throw();
    (() => fb.removeFruits('apple')).should.throw();
    (() => fb.removeFruits('tomato',10)).should.throw();
    (() => fb.removeFruits('apple',1)).should.throw();
    (() => fb.addFruits('kiwi',5)).should.not.throw();
    (() => fb.removeFruits('kiwi',6)).should.throw();
  });



}); //end of describe 
