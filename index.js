'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, test){
    if(Array.isArray(collection)){// checking if array is an array
        for(let i = 0; i < collection.length; i++){// looping over the array
            test(collection[i], i, collection);// pushing each value, index, and the collection in the test as arguements
        }
    }else{// default
        for(let key in collection){// looping over the object
            test(collection[key], key, collection);// pushing each value, key and the object into test as arguements
        }
    }
}
module.exports.each = each;

/**
 * identity: Returns the input value unaltered.
 * 
 * @param {*} value: Any value, any datatype returned as itself.
 * 
 * @return {*}: Any value, any datatype as determined from our input 
 * value.
 */
 
function identity(value) {
    return value;// returns value of value
}

module.exports.identity = identity;





/**
 * typeOf: Returns the type of a value as a string.
 * 
 * @param {*} value: Any value, any 
 * datatype. 
 * 
 * @return {String}: returns a string with the datatype.
 */ 
 
 function typeOf(value) {
    if(Array.isArray(value)){// checking if value is an array
        return "array";// return array
    }
    if(value === null){// checking if value is null
        return "null";// return null
    }
    return typeof value;// return typeof method with the arguement value output
}
 
 module.exports.typeOf = typeOf;
 
 
 
 
 
 /**
 * first: takes an array and depending on the number given takes the number 
 * of values starting at the beginning of the array.
 * 
 * Edge Cases: 
 * If an array is not given, or the array parameter is not an array or the 
 * number parameter is a negative number return an empty array. 
 * If number is not given return the first element of the array.
 * If the number is greater than the length of the array return the original 
 * array.
 * 
 * @param {Array} array: takes the array and gives the number of 
 * how many values to return from the beginning of the array.
 * @param {Number} number: number parameter takes the number and searches for 
 * that amount of items starting at the beginning of the array.
 * @return {Array}: the number of the first elements of the array.
 */
 
 function first(array, number) {
    if(!Array.isArray(array)){// checking if array is not an array
        return [];// return an empty array
    }
    if(typeof number !== "number"){// checking if number is a not a number
        return array[0];// return the first value of the array
    }// default
    return array.filter((val, index) => {// return the array with filter method
        if(number > index){// checking if number is less then the index
            return val;// return val
        }
    });
}

module.exports.first = first;





/**
 * last: takes an array and depending on the number given takes the number 
 * of values starting at the end of the array.
 * 
 * Edge Cases: 
 * If an array is not given, or the array parameter is not an array or the 
 * number parameter is a negative number return an empty array. 
 * If number is not given return the last element of the array.
 * If the number is greater than the length of the array return the original 
 * array.
 *
 * @param {Array} array: takes the array and gives the number of 
 * how many values to return from the end of the array.
 * @param {Number} number: number parameter takes the number and searches for 
 * that amount of items starting at the end of the array.
 * 
 * @return {Array}: the number of the last element of the array.
 */ 
 
function last(array, number) {
    if(!Array.isArray(array)){// checking if array is not an array
        return [];// return an empty array
    }
    if(typeof number !== "number"){// checking if number is a not a number
        return array[array.length - 1];// return the last value of the array
    }// default
    let counter = 0;// set counter to 0
    let arr = [];// set arr to an empty array
    for(let i = array.length - 1; i >= 0; i--){// loop over the array backwards
        if(counter < number){//checking if counter is less then number
            arr.unshift(array[i]);// push the value at index i in the array to the beginning of the new array
        }
        counter++;// add one to counter
    }
    return arr;// returns the new array
}

module.exports.last = last;





/**
 * indexOf: It returns the index number of the value at the first time it 
 * appears. If the value doesn't exist in the array, -1 is returned.
 * 
 * @param {Array} array: takes an array and the index of the first 
 * string. 
 * @param {*} value: it takes any value and it returns the first 
 * index of the value in the array.
 * 
 * @return {Number}: Returns the index of the first string or -1 if the value 
 * is noy in the array.
 */
 
function indexOf(array, value) {
    for(let i = 0; i < array.length; i++){// looping over the array
        if(array[i] === value){// checking if value at i index is value
            return i;// return i
        }
    }// default
    return -1;// return -1
}
module.exports.indexOf = indexOf;




/**
 * contains: It loops through the array to see it contains the value and returns
 * true if the value is found.
 * 
 * @param {Array} array: Takes an array and search for the value. 
 * @param {*} value: value that will return true if found.
 * 
 * @returns {Boolean}: it returns a boolean if the value is in the array.
 */
 
 function contains(array, value) {
    return array.includes(value) ? true : false;// checking if value is in the array and return true if it is, otherwise returns false
}

module.exports.contains = contains;




/**
 * unique: It loops through the array and removes any duplicate values
 * 
 * @param {An Array} array: array with duplicate values.
 * 
 * @return {Array}: returns an array with no duplicates. 
 */


function unique(array) {
    return array.reduce((acc, val) => {// return array with the reduce method 
        if(!acc.includes(val)){// checking if val is not inside acc
            acc.push(val);//push val into acc
        }
        return acc;// return acc
    },[]);// set acc default to empty array
}


module.exports.unique = unique;




/**
 * filter: It goes through the array and provides a callback function for 
 * each element, index and the array at each iteration and it
 * constructs a new array of all the values for which the 
 * callback function returns a value that is true.
 * 
 * 
 * @param {Array} array: It takes an array in which the functions acts.
 * @param {Function} test: The Function to be applied to each value in the
 * array.
 * 
 * @return {Array}: Returns an array with passing values.
 */ 
 
 function filter(array, test) {
    let arr = [];// created varible arr and set it to empty array
    for(let i = 0; i < array.length; i++){// loop over the array
        if(test(array[i], i, array)){// checking if values are truthy
            arr.push(array[i]);// push those value into the array
        }
    }
    return arr;// return new array
}

module.exports.filter = filter;





/**
 * reject: It loops thorught the array and test if the values are false, if the 
 * values are false it will return an array of false values.
 * 
 * 
 * @param {Array} array: iterates thorugh the array.
 * @param {Function} test: The Function to be applied to each value in the
 * array.
 * 
 * @return {Array}: returns an array of false arguments.
 */ 
 
function reject(array, test) {
    let arr = [];// created varible arr and set it to empty array
    for(let i = 0; i < array.length; i++){// loop over the array
        if(!test(array[i], i, array)){// checking if values are falsy
            arr.push(array[i]);// push those value into the array
        }
    }
    return arr;// return new array
}

module.exports.reject = reject;





/**
 * partition: It goes through the array and returns the falsey and truthy values 
 * in two sub arrays inside a larger array.
 * 
 * @param {Array} array: iterates thorugh the array.
 * @param {Function} test: The Function to be applied to each value in the
 * array. 
 * 
 * @return {Arrays}: Returns the truthy and falsey values in two sub arrays. 
 */
 
 function partition(array, test) {
    let arr = [];// created a new array
    arr.push(filter(array, test));// push the output of filter function with arguements array and test into arr array
    arr.push(reject(array, test));// push the output of reject function with arguements array and test into arr array
    return arr;// return arr array
}

module.exports.partition = partition;




/**
 * map: It goes through all the values of a collection and the result of the 
 * values with the effect of the function will be pushed into a new array.
 * 
 * @param {Array or Object} collection: it goes through the array or object.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * 
 * @return {Array}: Returns an array with the function applied to the values.
 */ 
 
 
function map(collection, test) {
    let arr = [];// created a new array
    each(collection, (val, index, collection) => {// loop over the array
        arr.push(test(val, index, collection));// push the output of test func with arguements in it
    });
    return arr;// return the array
}

module.exports.map = map;




/**
 * pluck: It looks through an object to find if the property given is in the 
 * object. If the key is found, the values are pushed into an array.
 *
 * @param {Array} array: passes an array made up of objects.
 * @param {String} key: passes a string of property key which returns 
 * an array containing the value of the keys.
 * 
 * @return {Array}: returns an array containing the values of the property keys.
 */ 

function pluck(array, key) {
    return map(array, val => {// loop over the array and return new array
        return val[key];// return values with the key property values
    });
}

module.exports.pluck = pluck;




/**
 * every: Every value from the collection will pass through the function and if 
 * all the values are true it will return true but if one of the values is false 
 * then the result will be false.
 * 
 * Edge Case:
 * If no function is passed it should return true for truthy results.
 * If no function is passed it should return false for falsy results.
 * If function is passed It should return true when all the iteration 
 * is true. 
 * If function is passed and one iteration is false, it should return false.
 * 
 * @param {Array or Object} collection: it goes through the collection to check 
 * for the values.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * 
 * @retun {Boolean}: If it is true or false. 
 */
 
 function every(collection, test) {
    let value = true;// set value to true
    if(!test){// check if there is no test
        each(collection, val => {// loop over the collection
            if(!val){ // check if they're any falsy values
                value = false;// set value to false
            }
        });
        return value;// return value
    }// default
    each(collection, (val, property, collection) => {// loop over the collection
        if(!test(val, property, collection)){// check if theres any falsy output
            value = false;// set value to false
        }
    });
    return value;// return value
}

module.exports.every = every;




/**
 * some: Every value from the collection will pass through the function and if 
 * all the values are true it will return true and if only one of the values is 
 * true then the result will be true.
 * Edge Case:
 * If no function is passed it should return false for falsy results.
 * If function is passed It should return true when at least one iteration 
 * is true.
 * 
 * @param {Array or Object} collection: it goes through the collection to check 
 * for the values.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection.
 * 
 * @retun {Boolean}: If it is true or false. 
 */ 
 
function some(collection, test) {
    let value = false;// set value to false
    if(!test){// check if there is no test
        each(collection, val => {// loop over the collection
            if(val){ // check if they're any truthy values
                value = true;// set value to true
            }
        });
        return value;// return value
    }// default
    each(collection, (val, property, collection) => {// loop over the collection
        if(test(val, property, collection)){// check if theres any truthy output
            value = true;// set value to true
        }
    });
    return value;// return value
}

module.exports.some = some;




/**
 * reduce: It goes through the function and uses the return value of the 
 * function as the "previous result". If there is no seed then "previous result"
 * will be the first index of the array. At the end of the iteration the return 
 * value of the final function call will be returned.
 * 
 * @param {Array} array: Iterated through the array.
 * @param {Function} test: the function applies to each value in the array.
 * @param {*} seed: previous result is equal to the seed which can be any datatype. if 
 * holds a {} for object, a [] for array or a "" for string and a 
 * 0 for number. 
 * 
 * @return {*}: Returns whatever value representing seed during the last interation of the function.
 * 
 */
 
 function reduce(array, test, seed) {
    if(seed === undefined){// checking if seed equal undefined
        each(array, (val, i, collection) => {// looping over the array
            seed = test(seed, val, i);// setting seed equal to the output of test with the arguement seed value and index
            if(!seed){// checking if seed is falsy
                seed = val;// set seed to value
            }
        });
    } else {// default
        each(array, (val, i, collection) => {// loop over the array
            seed = test(seed, val, i);// setting seed equal to the output of test with the arguement seed value and index
        });
    }
    return seed;// return seed
}

module.exports.reduce = reduce;




/**
 * extend: It will join all the objects together. If the key value doesn't exist 
 * then it will add that key to the object and if the key repeats then it will 
 * get updated with the new value.
 * 
 * @param: {Object} object1: Takes an object.
 * @param: {Objects} ...objects: Takes multiple objects
 * 
 * @return {Object}: Returns the object with updated information combining 
 * all the objects.
 * 
 */ 
 
function extend(object,...objects){
    return [...objects].reduce((acc, val) => {// looping over the arguements
        Object.assign(acc, val);// merging val to acc
        return acc;// return acc
    }, object);// set acc to object by default
}

module.exports.extend = extend;