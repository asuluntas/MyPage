DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;

USE myapp;

CREATE TABLE tablename (
  id int NOT NULL AUTO_INCREMENT,
  column1 varchar(50) NOT NULL,
  column2 int NOT NULL,
  PRIMARY KEY(ID)
);




-- mysql -u root < schema.sql
