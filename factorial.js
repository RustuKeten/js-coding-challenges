//** */ If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

//?-------pseudocode------------;
//? 1.input  a positive integer number, 
//? 2. 5! = 5*4*3*2*1,(n!=(n-1)*(n-2)*(n-3)*(n-(n-1))) 
//? 3. sonucu yazdır.


//*---------1.solve----------- */
// const n = -4;
// n<0 ? console.log("enter a positive number"):n
// let result = 1;
// for (let i = n; i >0; i--) {
//     result *=i
// }
// console.log(result);

//*---------2.solve----------- */
let result = 1;
const n = 5;
if (n > 0) {
  for (let i = n; i > 0; i--) {
    result *= i;
  }
} else {
  console.log("enter a positive number :");
}
console.log(result);