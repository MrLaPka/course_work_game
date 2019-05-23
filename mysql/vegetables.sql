USE scoredb;
CREATE TABLE VEGETABLES(
  `name` varchar(15) primary key,
  `src` varchar(35) not null
);

INSERT INTO VEGETABLES (`name`, `src`) VALUES ('cabbage', 'img/vegetables/cabbage.jpg'),
 ('carrot', 'img/vegetables/carrot.png'),
 ('corn', 'img/vegetables/corn.png'),
 ('cucumber', 'img/vegetables/cucumber.png'),
 ('eggplant', 'img/vegetables/eggplant.png'),
 ('pepper', 'img/vegetables/pepper.png'),
 ('pumpkin', 'img/vegetables/pumpkin.png'),
 ('tomato', 'img/vegetables/tomato.png')
