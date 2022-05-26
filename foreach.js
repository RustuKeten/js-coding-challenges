//*-----------soru5----------- */
/*maaşı 4000'den fazla olanlara %25 zam yaparak, console da yazdıralım*/

//?         pseudocode;
//?   1.get each element of the array which bigger than 4000; foreach(x)=>(x>4000);
//?   1.make  %25 raise  that salary x*1.50 and round the number 2 digit after "." (tofixed(2))
//?   1.console.log(array);

// const maaşlar = [3000, 5000, 4000, 6000, 6500];

// console.log(maaşlar.filter((x) => x > 4000).map((x)=>x*1.50)); 

// let may = maaslar.filter((c) => c > 4000);
// may.forEach((v,i,arr) => arr[i] = v * 1.25)

// console.log(may);


// çözüm-3
const annualSalary = [25000,3900,3200,120000,73000];
let sum = null;
annualSalary.forEach((v)=> sum += v);
console.log(sum);
