1. Apa perbedaan antara static web server dan dynamic web server?

   - `Static web` adalah web yang kontennya tidak berubah jika tidak diubah langsung di server, jadi client / pengguna akan selalu mendapatkan tampilan yang sama.
   - `Dynamic web` adalah web yang kontennya bisa berubah-ubah (lebih interaktif) sesuai dengan data yang dimasukkan di database atau ketika ada interaksi dengan user seperti posting artikel atau komentar, maka postingan tadi bisa dimunculkan tanpa mengubah web di server.

2. Jelaskan arsitektur static site dan dynamic site

   Pada static web arsitekturnya sederhana, yaitu client meminta halaman, server akan memprosesnya atau memberikan halaman & assets yang dibutuhkan dan mengirimnya ke client. Detil prosesnya sebagai berikut:

   1. Client request ke server.
   2. Server memproses request.
   3. Server mengirim response.
   4. Client menerima response.

   Pada dynamic web selain terdapat komponen static web terdapat aplikasi web yaitu komponen yang terhubung dengan web server dan software tambahan biasanya database. Aplikasi web ini yang membuat tampilan web menjadi lebih interaktif /dinamis.

   Apabila client meminta halaman / rute dengan konten statis maka aplikasi web akan memprosesnya layaknya pada static web

   Namun saat client meminta halaman yang dinamis maka aplikasi web akan memuat data yang diperlukan beserta template / kerangka tampilan web yang sudah ditentukan untuk membuat / mengombinasi tampilan sesuai data yang dibutuhkan tadi secara otomatis yang Selanjutnya dikirim ke client.

3. Apa saja yang dapat kita buat pada sisi server?
   - Aplikasi web
   - API
   - Database server
   - Menyimpan informasi/data pengguna
   - Notifikasi
   - Analisa data
   - File server
   - Menyimpan postingan gambar/video dan file lainnya
   - Email server
   - Konfirmasi registrasi pengguna
   - Newsletter
   - Dll
4. Mohon jelaskan apa itu RESTful?

   Restful adalah sebutan untuk web yang menggunakan standar / arsitektur REST.

   REST adalah Representational State Transfer, yaitu standar komunikasi yang memungkinkan sistem yang berbeda berkomunikasi tanpa perlu memperhatikan kondisi antar sistem, misalnya perbedaan aplikasi, web server, database dll.

   Biasanya untuk berkomunikasi tiap sistem memiliki API yaitu interface / gerbang untuk bertukar informasi. API ini tentunya berstandar sesuai pada ketentuan REST sehingga antar sistem bisa berkomunikasi dengan metode yang sama atau simpelnya bahasa komunikasi yang sama.

5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)

   Ada banyak HTTP verbs,

   - POST: Untuk memasukkan data/konten baru
   - GET: Mendapatkan data
   - PUT: Mengubah data
   - DELETE: Menghapus data
   - PATCH: Mengubah sebagian data
   - HEAD: Mendapatkan header response
   - Dll

   Namun yang biasa dipakai adalah POST, GET, PUT, DELETE

6. Apa fungsi dari Response Codes?

   Response code berfungsi untuk identifikasi status dari response dari server. Misalnya bila server telah berhasil memproses request maka bisa meresponse dengan kode 200 yan artinya success / OK. Terdapat banyak kode status untuk banyak kondisi response, contohnya:

   - 200: success / OK
   - 201: created (data/konten berhasil dibuat)
   - 400: bad request (data yang dikirim salah)
   - 401: unauthorized (client belum memiliki otorisasi)
   - 403: forbidden (client dilarang mengakses)
   - 500: internal server error (terdapat kegagalan di server)
   - Dll
