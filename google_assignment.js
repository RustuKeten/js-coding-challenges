//**This is an interview question asked by Google.

//** */ Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7]
// and k of 17, return true since 10 + 7 is 17.

// Pseudocode;

let k = 17;
const givenList = [10, 15, 3, 7];
let counter = 0;

let control = function () {
  for (let i = 0; i < givenList.length; i++) {
    for (let ii = 0; ii < givenList.length; ii++) {
      if (givenList[i] + givenList[ii] === k) {
        return true;
      }
    }
  }
  return false;
};

console.log(control());

// const arr = [11, 15, 3, 7];
// let x = 17;

// function sum(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let ii = i + 1; ii < arr.length; ii++) {
//       if (arr[i] + arr[ii] === x) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(sum(arr, x));
