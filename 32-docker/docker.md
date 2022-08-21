Jawablah pertanyaan di bawah ini:

1. Jelaskan apa yang dimaksud dengan **container** pada docker !
   Docker adalah software OS virtualization yang menjalankan suatu aplikasi menggunakan container.

   Tiap container berjalan secara terpisah / terisolasi dari container lainnya.

   Tiap container memiliki libs / dependencies dan environment yang dibutuhkan oleh aplikasi utama pada container untuk bisa berjalan tanpa adanya fitur berbagi libs / dependencies layaknya pada OS umumnya.

   Aplikasi yang berjalan di dalam container docker tidak terpengaruh oleh faktor luar karena terisolasi.

   Kegagalan aplikasi biasanya disebabkan karena libs atau konfigurasi sistem tidak sama dan konflik dengan konfigurasi pada sistem sebelumnya karena perbedaan OS, versi libs dll.

   Atau ketika menginstall aplikasi B, aplikasi tersebut mengupdate libs / konfigurasi yang dibutuhkannya padahal aplikasi A akan gagal berjalan bila versi libs / konfigurasi berubah.

   Karena tanpa fitur berbagi libs / dependencies, maka aplikasi utama tidak akan mengalami kendala seperti libs tidak cocok atau konfigurasi dependencies tidak sesuai.

2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
   Perbedaan mendasar dari konsep container dengan virtual machine adalah docker hanya perlu menyediakan satu virualisasi OS untuk menjalankan banyak container dengan berbagai macam aplikasi.

   Sedangkan apabila menggunakan virtual machine maka perlu membuat virtualisasi OS baru untuk menjalankan aplikasi / service baru.

3. Apa yang dimaksud dengan **docker file** ?
   Docker file berisi konfigurasi container yang dipakai untuk mengatura container secara otomatis sehingga tidak perlu menginisialisasi, memasang ataupan menghubungkan container secara manual.
4. Apa yang dimaksud dengan **docker registery** ?
   Docker registry adalah tempat image / repository dari container di docker. Image tersebut berisi paket aplikasi (container) yang bisa dipakai yang juga memiliki versi dan set konfigurasi container.
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
   Untuk komunikasi antar container maka harus membuka network / port jaringan pada container yang dimaksud sehingga container lainnya bisa mengakses container melalui network / port tersebut.

   Contoh menghubungkan 2 container:

   ```sh
    docker network create iconn
    docker run -d --net iconn --name container1 <nama-image>
    docker run -d --net iconn --name container2 <nama-image>
   ```

   Maka selanjutnya,

   - `container1` dapat diakses melalui alamat `container1.iconn`
   - `container2` dapat diakses melalui alamat `container2.iconn`
