'use strict';
var fruitsFactory = function fruitsFactory(){
  
  let fruitBasket  = {};
  let fruitsDictionary = {};
  let totalFruits = 0;
  let allowedFruits = ['apple','kiwi','banana','orange'];

  let getCount = function getCount(){
    return totalFruits;
  }

  let getCountByFruit = function getCountByFruit(strFruitType){
    if (typeof(strFruitType) !== 'string') { throw 'Error' };
    //if (allowedFruits.includes(strFruitType) === false) { throw 'Error' };
  
    let fruit = fruitsDictionary[strFruitType]; 
  
    if (typeof(fruit) === 'object'){ 
      return fruit.count ;
    }else{
      return 0;
    }

  }// end of getCountByFruit  
  
  let addFruits = function addFruits(strFruitType,numFruits){

    if (typeof (strFruitType) !== 'string') { throw 'Error' };
    if (typeof (numFruits) !== 'number') { throw 'Error' };
    if (allowedFruits.includes(strFruitType) === false) { throw 'Error' };
    if ((totalFruits + numFruits)> 30) { throw 'Error' };

    let fruit = fruitsDictionary[strFruitType];
    if (typeof(fruit) === 'object'){
      // The fruit already exists in the basket add numFruits to the count 
      fruit.count = fruit.count + numFruits;
    }else{
      // This is a new fruit for the basket create a fruit object
      fruit = { name : strFruitType , count : numFruits };
      fruitsDictionary[strFruitType] = fruit;
    }
    
    totalFruits =  totalFruits + numFruits;
  }; //end of addFruits

  let removeFruits = function removeFruits(strFruitType,numFruits){
    if (typeof (strFruitType) !== 'string') { throw 'Error' };
    if (typeof (numFruits) !== 'number') { throw 'Error' };
    //if (allowedFruits.includes(strFruitType) === false) { throw 'Error' };
    if ((totalFruits -  numFruits) <  1) { throw 'Error' };

    let fruit = fruitsDictionary[strFruitType];
    if (typeof(fruit) !== 'object') { throw 'There are no fruits of this type in the basket' };
    if ( (fruit.count - numFruits) < 1 ) { throw 'Error : Not enough fruits of this type' } ; 

    fruit.count = fruit.count - numFruits; 
    totalFruits =  totalFruits -  numFruits;


  };// end of removeFruits

  
  fruitBasket.addFruits       = addFruits;
  fruitBasket.removeFruits    = removeFruits;
  fruitBasket.getCount        = getCount;
  fruitBasket.getCountByFruit = getCountByFruit;

  return fruitBasket;

};// end of fruitsFactory

module.exports = fruitsFactory;

