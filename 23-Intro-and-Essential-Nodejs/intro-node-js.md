# Description

Pada technical assignment ini kamu diharapkan mampu menjelaskan fundamental konsep dari Node.js dan mampu membuat routing dasar pada Node.js

1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?

   - NodeJS adalah software core yang berjalan di engine V8 google untuk menjalankan kode javascript tanpa browser.

2. Mohon jelaskan arsitektur dari Node.js?

   - App atau kode javascript dijalankan di V8 engine.
   - V8 engine terhubung dengan NodeJS binding / API
   - API nodejs menghubungkan V8 engine dengan OS, sehingga dapat melakukanoperasi yang berhubungan dengan OS
   - Program yang berjalan akan masuk event queue / antrian
   - Antrian akan dijalankan dan selalu di awasi oleh event loop.
   - Bila terdapat program / event yg bersifat blocking maka akan dibuatkan worker thread baru di antrian worker threads.
   - Selain antrian program, event loop juga mengawasi worker treads, apabila terdapat callback atau hasil dari program yang bersifat blocking tadi maka akan dieksekusi.

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?

   - Built-in module: modul atau paket program yang sudah termasuk / terpasang sekaligus ketika memasang nodejs
   - External module: adalah modul third party. Modul ini dipasang secara external, bisa berada di lokasi global atau di tiap project
   - Custom module: modul yang dibuat sendiri oleh developer, menggunakan keyword `module.exports` untuk mengekspose kode dan keyword `require` di kode lain yang membutuhkan kode di modul yang dibuat

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

   - Built-in:

     ```js
     const os = require('os');

     console.log('Platform', os.platform());
     console.log('Architecture', os.arch());
     ```

   - External:

     Misal untuk pemasangan secara global: npm -i -g date-fns

     ```js
     import { format } from 'date-fns';

     const d = format(new Date(2022, 2, 22), 'yyyy-MM-dd');
     console.log(d); // `2022-02-22`
     ```

     - Custom:

       Misalnya buat modul untuk method hitungJumlah,

       `FILE: ./hitung.js`

       ```js
       const hitungJumlah = (a, b) => a + b;

       module.exports = { hitungJumlah };
       ```

       Penggunaaan modul,

       `FILE: ./app.js`

       ```js
       const { hitungJumlah } = require('./hitung');

       const jumlah = hitungJumlah(2, 3);
       console.log(jumlah); // 5
       ```
