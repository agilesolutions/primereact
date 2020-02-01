CREATE TABLE IF NOT EXISTS `car` (

`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`brand` varchar(20),
`model` varchar(50),
`color` varchar(50),
`price` int,
`year` int

)ENGINE=InnoDB DEFAULT CHARSET=UTF8; 