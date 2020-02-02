DROP TABLE IF EXISTS CAR;

CREATE SEQUENCE group_seq;
  
CREATE TABLE CAR (
  id BIGINT  default group_seq.nextval PRIMARY KEY,
  brand VARCHAR(250) NOT NULL,
  model VARCHAR(250) NOT NULL,
  color VARCHAR(250) NOT NULL,
  price INT NOT NULL,
  year INT NOT NULL
  );

INSERT INTO car VALUES (12,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (13,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (14,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (15,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (16,'volvo','ultimate','red',13000,2010);
INSERT INTO car VALUES (17,'volvo','ultimate','red',13000,2010);