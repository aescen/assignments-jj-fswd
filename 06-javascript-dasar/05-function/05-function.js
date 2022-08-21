// Soal - 01
// Kamu diminta untuk membuat sebuah fungsi yang akan me-return
// berapa banyak pajak yang harus kamu bayarkan,
// fungsi tersebut memiliki spesifikasi sebagai berikut

// Spesifikasi
// - 0% pajak apabila $SALARY < Rp 5.000.000
// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
// - 20% pajak apabila Rp 20.000.000 <= $SALARY

// Parameter
// - (Number) `salary` => gaji yang kamu hasilkan

// Return Value
// - (Number) total pajak yang harus kamu bayarkan

// EDIT HERE
const taxCalc = ($salary) => {
  switch (true) {
    case $salary < 5_000_00:
      return 0;
    case $salary >= 5_000_000 && $salary < 10_000_00:
      return $salary * 0.05;
    case $salary >= 10_000_000 && $salary < 20_000_00:
      return $salary * 0.1;
    case $salary >= 20_000_00:
      return $salary * 0.2;
    default:
      return null;
  }
};
console.log(taxCalc(4_500_000).toLocaleString('id-ID'));
console.log(taxCalc(5_000_000).toLocaleString('id-ID'));
console.log(taxCalc(20_000_000).toLocaleString('id-ID'));

// Soal - 02
// BMI merupakan sebuah perhitungan yang mana dapat menunjukan
// apakah seseorang itu masuk dalam kategori obesitas atau tidak.
// Kamu diminta untuk membuat sebuah fungsi untuk menghitung
// BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

// Spesifikasi BMI
// - 'under weight' apabila $BMI < 18.5
// - 'normal' apabila 18.5 < $BMI < 24.9
// - 'over weight' apabila 25 < $BMI < 29.9
// - 'obese' apabila 30 < $BMI < 34.9
// - 'extremely obese' apabila 35 < BMI

// Parameter
// - (Number) `height` ⇒ tinggi seseorang (cm)
// - (Number) `weight` ⇒ berat badan seseorang (kg)

// Return Value
// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
//   (weight/(height^2)) * 10000

// EDIT HERE
const checkBMI = ($height, $weight) => {
  const $BMI = ($weight / ($height ** 2)) * 10_000;
  switch (true) {
    case $BMI < 18.5: return 'under weight';
    case $BMI < 24.9: return 'normal';
    case $BMI < 29.9: return 'over weight';
    case $BMI < 34.9: return 'obese';
    case $BMI > 35: return 'extremely obese';
    default: return null;
  }
};

console.log(checkBMI(170, 80));
console.log(checkBMI(160, 80));

// Soal - 03
// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

// Parameter
// - (String) sentence => kalimat yang nanti akan diubah

// Return Value
// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

// EDIT HERE
const convToUpperCase = ($string) => {
  const sentence = $string.trim().replace(/ +/g, ' ');
  if (sentence.length === 0) return null;
  const arr = sentence.split(' ');
  return arr.map((item) => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
};

// console.log(convToUpperCase(' qwe  qweqwe qwe    qwe  '));
console.log(convToUpperCase('hello bandung'));
console.log(convToUpperCase('helloworldwide'));

// Soal - 04
// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

// Spesifikasi
// - apabila inputan berupa kata yang dipisah, maka kembalikan 'kata tidak boleh dipisah'
// - apabila inputan tidak memiliki karakter yang tidak kembar,
//   maka kembalikan string kosong ''
// - apabila ditemukan lebih dari 0 karakter yang tidak sama,
//   maka kembalikan karakter pertama yang tidak sama

// Parameter
// - (String) word => kata yang nanti akan kita gunakan untuk
// mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

// Result Value
// (String) huruf yang pertama kali tidak ada kembarannya

// EDIT HERE
const firstNonRepeatedChar = ($string) => {
  const word = $string.trim(); // .replace(/\s/g, '');
  if (word.indexOf(' ') > -1) return 'kata tidak boleh dipisah';
  const mappedWord = new Map();
  for (let i = 0; i < word.length; i += 1) {
    const $char = word.charAt(i);
    if (!mappedWord.has($char)) {
      mappedWord.set($char, 0);
    }
    mappedWord.set($char, mappedWord.get($char) + 1);
  }

  for (const [key, value] of mappedWord) {
    if (value === 1) {
      return key;
    }
  }
  return '';
};

console.log(firstNonRepeatedChar('hello world'));
console.log(firstNonRepeatedChar('alloha'));
console.log(firstNonRepeatedChar('wooohoowh'));
