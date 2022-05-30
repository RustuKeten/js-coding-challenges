//*==========================================
//*           JS-CC-006 : Merge Arrays
//*==========================================
// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.
// Write a function that takes two arrays of sorted numbers and combines them into one array as result.

// Please note that, empty arrays to be checked to avoid exception!

// Please take a look at the empty function and test code below:
const arr1 = [8, 9, 10];
const arr2 = [];

console.log(arr2.concat(arr1));

console.log([...arr2, ...arr1]);

console.log(arr2 + "," + arr1);

function arrConc() {
  return arr2.concat(arr1);
}
function arrConc1(a, b) {
  return a + "," + b;
}
console.log(arrConc1(arr2, arr1));

console.log(arrConc());
