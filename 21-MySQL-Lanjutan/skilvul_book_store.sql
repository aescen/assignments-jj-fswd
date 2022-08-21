-- TRANSACTION: 21-MySQL-Lanjutan


-- CREATE database bernama skilvulbookstore
CREATE DATABASE `skilvulbookstore`;
--

-- Buatlah table bernama penerbit dengan attribute/column yang berisi
CREATE TABLE `skilvulbookstore`.`penerbit` (
  `id` INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nama` VARCHAR(50) NULL,
  `kota` VARCHAR(50) NULL
);
--

-- Buatlah table bernama penulis dengan attribute/column yang berisi
CREATE TABLE `skilvulbookstore`.`penulis` (
  `id` INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nama` VARCHAR(50) NULL UNIQUE,
  `kota` VARCHAR(50) NULL
);

-- Kita akan melakukan relasi pada table terakhir yang bernama buku terhadap kedua table yang ada.
-- 1 penerbit dapat memiliki banyak buku
-- 1 buku hanya memiliki 1 penulis
-- Buatlah table bernama buku lengkap dengan relasi terhadap penulis dan penerbit dengan attribute/column yang berisi
CREATE TABLE `skilvulbookstore`.`buku` (
  `id` INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ISBN` VARCHAR(50) NULL,
  `judul` VARCHAR(50) NULL,
  `penulis` VARCHAR(50) NULL,
  `penerbit` INTEGER(10) NULL,
  `harga` INTEGER(10) NULL,
  `stock` INTEGER(10) NULL,
  CONSTRAINT `fk_penerbit_penerbit.id`
    FOREIGN KEY (`penerbit`)
    REFERENCES `penerbit`(`id`),
  CONSTRAINT `fk_penulis_penulis.nama`
    FOREIGN KEY (`penulis`)
    REFERENCES `penulis`(`nama`)
  );
--

-- data penulis
INSERT INTO `skilvulbookstore`.`penulis` (
  `nama`,
  `kota`
) VALUES 
  (
    'penulis 1',
    'kota 1'
  ),
  (
    'penulis 2',
    'kota 2'
  );
--

-- data penerbit
INSERT INTO `skilvulbookstore`.`penerbit` (
  `nama`,
  `kota`
) VALUES
  (
    'penerbit a',
    'kota a'
  ),
  (
    'penerbit b',
    'kota b'
  );
--

-- data buku
INSERT INTO `skilvulbookstore`.`buku` (
  `ISBN`,
  `judul`,
  `penulis`,
  `penerbit`,
  `harga`,
  `stock`
) VALUES
  (
    '123QWEASDZXC',
    'judul 1',
    'penulis 1',
    '1',
    '88000',
    '8'
  ),
  (
    '456RTYFGHVBN',
    'judul 2',
    'penulis 2',
    '2',
    '110000',
    '11'
  );
--

-- Lakukan INNER JOIN dari table buku terhadap table penerbit
SELECT
  `buku`.*,
  `penerbit`.*
FROM
  `skilvulbookstore`.`buku`
INNER JOIN `skilvulbookstore`.`penerbit`
  ON `buku`.`penerbit` = `penerbit`.`id`;

-- Lakukan LEFT JOIN dari table buku terhadap table penerbit
SELECT
  `buku`.*,
  `penerbit`.*
FROM
  `skilvulbookstore`.`buku`
LEFT JOIN `skilvulbookstore`.`penerbit`
  ON `buku`.`penerbit` = `penerbit`.`id`;

-- Lakukan RIGHT JOIN dari table buku terhadap table penerbit
SELECT
  `buku`.*,
  `penerbit`.*
FROM
  `skilvulbookstore`.`buku`
RIGHT JOIN `skilvulbookstore`.`penerbit`
  ON `buku`.`penerbit` = `penerbit`.`id`;

-- Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10
SELECT
  MAX(`harga`) AS `harga`
FROM `skilvulbookstore`.`buku`
WHERE `stock` < 10;

-- Cek nilai MIN dari column harga pada table book
SELECT
  MIN(`harga`) AS `harga`
FROM `skilvulbookstore`.`buku`;

-- Gunakan COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000
SELECT
  COUNT(*) AS `harga buku di bawah 100000`
FROM `skilvulbookstore`.`buku`
WHERE `harga` < 100000;

-- DROP DATABASE `skilvulbookstore`;
