USE scoredb;
CREATE TABLE carLogo(
  `logo` varchar(15) primary key,
  `src` varchar(35) not null
);

INSERT INTO carLogo (`logo`, `src`) VALUES 
 ('honda', 'img/cars/honda.jpg'),
 ('mazda', 'img/cars/mazda.png'),
 ('lada', 'img/cars/lada.png'),
 ('audi', 'img/cars/audi.png'),
 ('volkswagen', 'img/cars/volkswagen.png'),
 ('dodge', 'img/cars/dodge.png'),
 ('mercedes', 'img/cars/mercedes.jpg'),
 ('acura', 'img/cars/acura.png'),
 ('toyota', 'img/cars/toyota.jpg'),
 ('peugeot', 'img/cars/peugeot.jpg'),
 ('brilliance', 'img/cars/brilliance.png'),
 ('skoda', 'img/cars/skoda.png'),
 ('haima', 'img/cars/haima.png'),
 ('infinity', 'img/cars/infinity.png')