//  Object /    Array Destructuring
//  obje ve dizilerin bölünüp değişkenlere atanması

// const kullanici = { isim:  "Mehmet", yas: 35};

// const { isim, yas} = kullanici;

// console.log(isim);
// console.log(yas);

// const kullanici = {
//     isim: "Mehmet",
//     yas: 35,
//     adres: "Istanbul",
//     memleket: "Sakarya",
//     meslek: "Ogrenci"
// };

// // const { isim, ...kalanlar } = kullanici;
// const { isim, yas, ...kalanlar } = kullanici;
// //  rest operator (rest/spread)

// console.log(kalanlar);

// function KullaniciGoster ({ isim, yas }) {
//     return `${isim} isimli kullanıcı ${yas} yaşındadır.`;
// }

const sayilar = [1, 2, 3, 4, 5];
// const [bir, iki, uc, dort, bes] = sayilar;

// console.log(bir, iki, uc, dort, bes);

const [birinciEleman, ...kalanElemanlar] = sayilar;

console.log(birinciEleman);
console.log(kalanElemanlar);

