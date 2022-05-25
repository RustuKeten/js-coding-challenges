//=============>
// Calculate the mean and median values of the number elements from the input array.
// Pseudocode:
// bir array oluştur
// array içindeki sayıları topla ve eleman sayısına böl
// virgülden sonra 1 değer al trunc, ceil, floor, round, toFixed
// mean : ortalama, median: sayı miktarının bir fazlasının ikiye bölümüdür
// array length tek sayı ise (length+1)/2 , array length çift sayı ise ortadaki iki değerin aritmetik ortalamasını al

const array = [20, 15, 10, 5, 78, 36, 3, 6, 4, 45];
let result = 0;
for (const iterator of array) {
  result += iterator;
}
console.log(Math.floor(result / array.length)); // mean

if (array.length % 2 !== 0) {
  console.log(array[(array.length + 1) / 2 - 1]);
} else {
  x = array.slice(array.length / 2 - 1, array.length / 2 + 1);
  console.log(x);
}
console.log((x[0] + x[1]) / 2); // median
