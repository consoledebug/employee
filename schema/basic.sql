/* creating database */
CREATE DATABASE employee_bc;

/* creating schema for employee table */
CREATE TABLE IF NOT EXISTS `employee`
( `id` INT NOT NULL AUTO_INCREMENT , `employee_id` INT NOT NULL , `name` VARCHAR
(255) NOT NULL , `designation` VARCHAR
(255) NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY
(`id`)) ENGINE = InnoDB;

/* sample data for employee */
INSERT INTO employee (employee_id,name,designation) VALUES ('1','Vasantha Kumar B','Full Stack Developer');