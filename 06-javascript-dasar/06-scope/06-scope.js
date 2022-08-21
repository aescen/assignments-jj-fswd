// Soal - 01
// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
// dan kamu diminta untuk merangkum tentang:
// - ada berapa banyak jumlah variable scope pada Javascript?
// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

// WRITE YOUR ANALYSIS HERE
/*
- Variabel scope ada:
  1. Block scope
    - Didefinisikan dengan keyword let atau const.
    - Variabel terdefinisi dengan keyword var tidak memiliki fitur block scope.
    - Tidak bisa diakses dari luar blok atau {} / terisolasi.
    - Variabel berada dalam simbol kurawal {}
      ```javascript
        {
          // block scope
          var a = 88; // global variable
          let x = 11; // local variable
        }
        console.log(a); // 88
        console.log(x); // Error: variable not defined
      ```
  2. Function scope
    - Didefinisikan dengan keyword var, let atau const.
    - Tidak bisa diakses dari luar function / terisolasi.
    - Variabel berada dalam simbol kurawal {} milik function.
      ```javascript
        const fun = () => {
          // function scope
          var a = 88; // local variable
          let x = 11; // local variable
        };
        console.log(a); // Error: variable not defined
        console.log(x); // Error: variable not defined
      ```
  3. Global scope
    - Didefinisikan dengan keyword var, let atau const.
    - Dapat diakses oleh seluruh scope.
    - Variabel yang didefinisikan di luar function/block adalah global.
      ```javascript
        let x = 11; // global variable

        {
          console.log(x); // 11
        }

        const fun = () => {
          console.log(x);
        };
        fun(); // 11
      ```
*/

// Soal - 02
// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
// - apa yang akan tampil didalam comsole.log ?
// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

// WRITE YOUR ANALYSIS HERE
/*
  - Variabel `const name = 'John Watson';` memiliki scope global
  - Variabel `name` pada function `printFirstName` adalah parameter
    sehingga variabel `name` bersifat local.
  - Karena terdapat variabel local `name` maka function tidak akan
    mencari variabel dari global scope.
  - Sehingga yang di-return adalah value dari
    variabel `name` milik function printFirstName
*/
const name = 'John Watson';

function printFirstName(name) {
  return name.split(' ')[0];
}

console.log(printFirstName('Mariah Carey'));
