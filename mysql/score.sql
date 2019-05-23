CREATE DATABASE scoredb;
USE scoredb;
CREATE TABLE SCORE(
  `id` int primary key auto_increment,
  `name` nvarchar(20),
  `password` varchar(200),
  `score` int
)
