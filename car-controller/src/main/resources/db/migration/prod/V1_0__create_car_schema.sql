CREATE TABLE IF NOT EXISTS car (

id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
brand varchar(20),
model varchar(50),
color varchar(50),
price int,
year int

)ENGINE=InnoDB DEFAULT CHARSET=UTF8; 

INSERT INTO car VALUES (12,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (13,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (14,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (15,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (16,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (17,'volvo','ultimate','red',13000,2010);