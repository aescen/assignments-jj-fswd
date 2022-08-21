-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema skilvul_music
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `skilvul_music` ;

-- -----------------------------------------------------
-- Schema skilvul_music
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `skilvul_music` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin ;
USE `skilvul_music` ;

-- -----------------------------------------------------
-- Table `skilvul_music`.`album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skilvul_music`.`album` (
  `album_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `singer_id` INT(10) UNSIGNED NULL DEFAULT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`album_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_bin;


-- -----------------------------------------------------
-- Table `skilvul_music`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skilvul_music`.`user` (
  `user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `skilvul_music`.`playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skilvul_music`.`playlist` (
  `playlist_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) UNSIGNED NOT NULL,
  `tracks` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`playlist_id`),
  CONSTRAINT `fk_user_id_User.user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `skilvul_music`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_bin;


-- -----------------------------------------------------
-- Table `skilvul_music`.`singer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skilvul_music`.`singer` (
  `singer_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`singer_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_bin;


-- -----------------------------------------------------
-- Table `skilvul_music`.`track`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skilvul_music`.`track` (
  `track_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `singer_id` INT(10) UNSIGNED NULL DEFAULT NULL,
  `album_id` INT(10) UNSIGNED NULL DEFAULT NULL,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`track_id`),
  CONSTRAINT `fk_album_id.Album.album_id`
    FOREIGN KEY (`album_id`)
    REFERENCES `skilvul_music`.`album` (`album_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_singer_id.Singer.singer_id`
    FOREIGN KEY (`singer_id`)
    REFERENCES `skilvul_music`.`singer` (`singer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_bin;


-- -----------------------------------------------------
-- Table `skilvul_music`.`tracks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skilvul_music`.`tracks` (
  `track_id` INT(10) UNSIGNED NOT NULL,
  `playlist_id` INT(10) UNSIGNED NOT NULL,
  CONSTRAINT `fk_playlist_id_Playlist.playlist_id`
    FOREIGN KEY (`playlist_id`)
    REFERENCES `skilvul_music`.`playlist` (`playlist_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_track_id_Track.track_id`
    FOREIGN KEY (`track_id`)
    REFERENCES `skilvul_music`.`track` (`track_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
