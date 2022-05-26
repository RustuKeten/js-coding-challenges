// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences. (reduce ve flat ile çözülecek)

// result
// {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
//   }
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
// const array = input.flat();
// let result = array.reduce((prev, current) => {
//     if(current in prev) {
//           prev[current]++;
//     }else{
//           prev[current]=1;
//     },{});
// console.log(result);
 
const array = input.flat();

const result = array.reduce((prev, current) => {
  if (current in prev) {
    prev[current]++;
  } else {
    prev[current] = 1;
  }
  return prev;
}, {});
console.log(result);
