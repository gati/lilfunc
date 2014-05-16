/*
 * Demo code snippets for a blog post. Mostly for instructional purposes, and 
 * not really production quality. There's nothing in here that isn't also 
 * in Underscore.js, lodash.js or any of the other functional programming 
 * libraries for JavaScript. I highly recommend you use one of those 
 * instead.
 */

function addNumbers(a, b) {
  return a + b;
};

// Takes the values of an array and returns the total. Demonstrates simple 
// recursion.
function totalForArray(arr, currentTotal) {
  currentTotal = addNumbers(currentTotal + arr.shift());
  
  if(arr.length > 0) {
    return totalForArray(currentTotal, arr);
  }
  else {
    return currentTotal;
  }
}

// Or you could just use reduce.
function totalForArray(arr) {
  return arr.reduce(addNumbers);
}

// Should really be called divideTwoNumbers
function average(total, count) {
  return count / total;
}

function averageForArray(arr) {
  return average(arr.length, totalForArray(arr));
}

// Gets the value associated with the property of an object. Intended for 
// use with a collection method like map, hence the generator.
function getItem(propertyName) {
  return function(item) {
    return item[propertyName];
  }
}

// A specific implementation of map, when you have an array of objects and 
// want an array of values associated with a specific property of every object.
function pluck(arr, propertyName) {
  return data.map(getItem(propertyName));
}

// Take two arrays and return a single array of [x1,y1],[x2,y2] pairs
function combineArrays(arr1, arr2, finalArr) {
  // Just in case both arr1 and arr2 were empty to begin with, we might only 
  // call this function once.
  finalArr = finalArr || [];

  // Push the current element in each array into what we'll eventually return
  finalArr.push([arr1.shift(), arr2.shift()]);

  // If both arrays are empty, then we're done
  if(arr1.length === 0 && arr2.length === 0) {
    return finalArr;
  }
  else {
    // Recursion!
    return combineArrays(arr1, arr2, finalArr);
  }
};