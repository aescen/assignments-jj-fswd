// Soal - 01
// Kamu diminta untuk menjelaskan apa perbedaan antara
// - Type Error
// - Reference Error
// - Range Error
// - Syntax Error

// WRITE YOUR ANALYSIS HERE
/*
- Type Error: Error ketika memanggil fungsi / method pada suatu
  variabel / method yang tidak sesuai / tidak terdefinisi
  ```javascript
    let x = 99;
    x.toUpperCase(); // TypeError

    const fun = () => {
      return 99;
    };

    fun().join('');
  ```
- Reference Error: Error ketika memanggil variabel / method
  yang belum didefinisikan
  ```javascript
    console.log(variabelX); // ReferenceError
    fun(); // ReferenceError
  ```
- Range Error: Error ketika memakai angka / number diluar batas ketentuan
    ```javascript
    let x = 123;
      // RangeError karena maksimal hingga 100 (range yang mungkin 1 - 100)
      console.log(x.toPrecision(100));
    ```
- Syntax Error: Error ketika penulisan kode tidak
  sesuai spesifikasi / cara pemakaian bahasa pemrograman
  ```javascript
    if True: console.log('Impossible'); // SyntaxError
    Int x <- 10; // SyntaxError
  ```
*/

// Soal - 02
// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah
// dengan instruksi detail sebagai berikut:
// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

// WRITE YOUR ANALYSIS HERE
/*
  - Pada baris `console.log(salaryWithVar);` console menunjukkan nilai `undefined`.
    Karena pada baris `var salaryWithVar = 15_000_000;` menggunakan keyword `var`
    maka akan otomatis membuat variabel tersebut pada scope global
    tanpa memberi / assign nilai sehingga `undefined` karena variabel tersebut
    dipanggil sebelum didefinisikan.
  - Pada baris `console.log(salaryWithConst);` console menunjukkan nilai Reference Error.
    - Karena terdapat baris `const salaryWithConst = 15_000_000;` dengan keyword `const`
      maka akan menampilkan error disebabkan salaryWithConst dipanggil sebelum dibuat.
    - Selain var, maka akan terjadi ReferenceError ketika memanggil variabel
      yang didefinisikan dengan keyword `const` / `let` atau belum terdefinisi sama sekali.
*/

// console.log(salaryWithVar);
// console.log(salaryWithConst);

// var salaryWithVar = 15_000_000;
// const salaryWithConst = 15_000_000;
