
var assert = require('chai').assert;
var expect = require('chai').expect;
var foo = 123;
//assert.typeOf(foo,'string','foo is a string');
expect(foo).to.not.be.a('string');
