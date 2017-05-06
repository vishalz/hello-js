'use strict'

var obj = require('../src/basic.30.objects');

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




