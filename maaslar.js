// ODEV: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

//*pseudocode;
// 1. ortalama bul, (reduce)
// 2. ortalamanın altındakileri bul,(filter)
// 3. bunlara %20 zam yap ve ayrı bir diziye at,(map)

const maaslar = [3000, 5000, 4000, 6000, 6500];
// const result = maaslar
//   .filter((x) => x < maaslar.reduce((x, y) => x + y) / maaslar.length)
//   .map((x) => x * 1.2);
//   console.log(result);

const yeniMaaslar = maaslar.map((item, index, array) => {
    if(item < (array.reduce((acc, item) => acc + item, 0)/array.length)){
        item = item * 1.20
    return item
}});
console.log(yeniMaaslar);