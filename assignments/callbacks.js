// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items 
// array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
///////////////////////////////////////////////////////////////////////////
let theLength = (array) => array.length;

function getLength(arr, cb) {
  return (cb(arr));
}

console.log("Length of array is --> ", getLength(items, theLength));

////////////////////////////////////////////////////////////////////////////
let theLast = (array) => array[array.length -1];

function last(arr, cb) {
  return (cb(arr));
}

console.log("Last item of array --> ", last(items, theLast));

////////////////////////////////////////////////////////////////////////////
let add = (num1, num2) => num1 + num2;

function operation(num1, num2, callback){
  return (callback(num1, num2));
}
console.log("The sum is -->")
console.log(operation(1, 2, add))

////////////////////////////////////////////////////////////////////////////
let multiply = (num1, num2) => num1 * num2

function multiplyNums(num1, num2, callback) {
  return (callback(num1, num2));
}
console.log("The product is -->");
console.log(multiplyNums(6, 16, multiply));

////////////////////////////////////////////////////////////////////////////

let itemChecker = (array, item) => array.includes(item);

function contains(array, item, cb) {
  return cb(array, item);

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
console.log(contains(items, "Gum", itemChecker))





/* STRETCH PROBLEM */
////////////////////////////////////////////////////////////////////////////
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
