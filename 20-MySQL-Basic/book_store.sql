-- TRANSACTION: 20-MySQL-Basic


-- SHOW database untuk melihat list database yang ada pada mysql
SHOW DATABASES;

-- CREATE database bernama bookstore
CREATE DATABASE `bookstore`;
--

-- USE database bookstore
USE `bookstore`;
--

-- SHOW seluruh table yang ada pada database bookstore
SHOW TABLES;
--

-- Buatlah table bernama books dengan attribute/column yang berisi
CREATE TABLE `bookstore`.`books` (
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `author1` VARCHAR(100),
  `author2` VARCHAR(100),
  `author3` VARCHAR(100),
  `title` VARCHAR(100),
  `description` TEXT,
  `place_sell` VARCHAR(3),
  `stock` INTEGER DEFAULT 0,
  `creation_date` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--

-- Pada suatu waktu, kamu harus mengupdate column dari table books yang sudah ada.
-- Berikut update yang harus dilakukan:
-- ADD column
ALTER 
  TABLE `bookstore`.`books`
    ADD `price` INTEGER DEFAULT '0',
    ADD `status` ENUM('available','out of stock','limited');
--

-- DROP column
ALTER
  TABLE `bookstore`.`books`
    DROP `place_sell`;
--

-- INSERT 3 data untuk semua column yang ada pada table books
INSERT INTO `bookstore`.`books` (
  `author1`,
  `author2`,
  `author3`,
  `title`,
  `description`,
  `stock`,
  `creation_date`,
  `price`,
  `status`
) VALUES
    (
      'author 1',
      'author 2',
      'author 3',
      'title 1',
      'description 1',
      '1',
      CURRENT_TIMESTAMP(),
      '100',
      'available'
    ),
    (
      'author 4',
      'author 5',
      'author 6',
      'title 2',
      'description 2',
      '1',
      CURRENT_TIMESTAMP(),
      '200',
      'out of stock'
    ),
    (
      'author 7',
      'author 8',
      'author 9',
      'title 3',
      'description 3',
      '1',
      CURRENT_TIMESTAMP(),
      '300',
      'limited'
    );
--

-- SELECT semua row pada table books
SELECT *
  FROM `bookstore`.`books`;
--

-- SELECT menggunakan ALIAS. Column id digantikan ID, author1 digantikan A1, author2 digantikan A2, author3 digantikan A3
SELECT
  `id` AS `ID`, 
  `author1` AS `A1`,
  `author2` AS `A2`,
  `author3` AS `A3`,
  `title`,
  `description`,
  `stock`,
  `creation_date`,
  `price`,
  `status`
  FROM `bookstore`.`books`;
--

-- SELECT data menggunakan WHERE untuk id tertentu
SELECT * 
  FROM `bookstore`.`books`
  WHERE `id` = '1';
--

-- SELECT data menggunakan WHERE untuk ? dengan operator logical AND
SELECT * 
  FROM `bookstore`.`books`
  WHERE 
    `id` = '1'
  AND 
    `status` = 'available';
--

-- SELECT data menggunakan WHERE untuk ? dengan operator logical OR
SELECT * 
  FROM `bookstore`.`books`
  WHERE 
    `id` = '1'
  OR 
    `title` = 'title 3';
--

-- SELECT data menggunakan WHERE untuk ? dengan operator logical NOT
SELECT * 
  FROM `bookstore`.`books`
  WHERE NOT `status` = 'out of stock';
--

-- SELECT seluruh column dari table bookstore dan diurutkan secara ASC berdasarkan id
SELECT * 
  FROM `bookstore`.`books`
  ORDER BY `id` ASC;
--

-- SELECT seluruh column dan berikan LIMIT untuk 2 row saja
SELECT * 
  FROM `bookstore`.`books`
  LIMIT 2;
--

-- Pilih 1 row untuk dilakukan UPDATE pada column author1 dan price
UPDATE `bookstore`.`books`
  SET
    `author1` = 'author 1',
    `price` = '150'
  WHERE `books`.`id` = '2';
--

-- Pilih 1 row untuk dilakukan DELETE
DELETE
  FROM `bookstore`.`books`
  WHERE `books`.`id` = '2';
--

-- DROP DATABASE `bookstore`;
