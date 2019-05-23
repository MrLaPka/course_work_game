USE scoredb;
CREATE TABLE fruits(
  `name` varchar(15) primary key,
  `src` varchar(35) not null
);

INSERT INTO fruits (`name`, `src`) VALUES ('apple', 'img/fruits/apple.png'),
 ('banana', 'img/fruits/banana.png'),
 ('mango', 'img/fruits/mango.png'),
 ('kiwi', 'img/fruits/kiwi.png'),
 ('limon', 'img/fruits/limon.png'),
 ('orange', 'img/fruits/orange.png'),
 ('peach', 'img/fruits/peach.jpg'),
 ('pear', 'img/fruits/pear.png')
