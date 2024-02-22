-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema charity
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema charity
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `charity` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `charity` ;

-- -----------------------------------------------------
-- Table `charity`.`categorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`categorie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categorie` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`donation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`donation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  `startdate` VARCHAR(100) NOT NULL,
  `enddate` VARCHAR(100) NOT NULL,
  `registrationdeadline` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`help`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`help` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(1000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `location` VARCHAR(1000) NOT NULL,
  `phone` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`palestine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`palestine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(10000) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`peoplewhohelp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`peoplewhohelp` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(1000) NOT NULL,
  `phone` VARCHAR(1000) NOT NULL,
  `donations` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `questions` VARCHAR(1000) NOT NULL,
  `responses` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`schoolcourses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`schoolcourses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `nameodteacher` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(10000) NOT NULL,
  `start` VARCHAR(45) NOT NULL,
  `end` VARCHAR(45) NOT NULL,
  `duration` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`supporters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`supporters` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(10000) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `poitns` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(100) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `birth` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`voluntarywork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`voluntarywork` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `job` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `charity`.`whattheyneed`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `charity`.`whattheyneed` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `needs` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
