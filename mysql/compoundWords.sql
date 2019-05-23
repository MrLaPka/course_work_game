USE scoredb;
CREATE TABLE compoundWords(
  `main_part` varchar(15) primary key,
  `second_part` varchar(15) not null
);

INSERT INTO compoundWords (`main_part`, `second_part`) VALUES ('back', 'bone'),
 ('week', 'end'),
 ('for', 'get'),
 ('key', 'board'),
 ('wood', 'pecker'),
 ('under', 'dog'),
 ('rain', 'bow'),
 ('car', 'go'),
 ('sand', 'lot'),
 ('fore', 'hand'),
 ('pass', 'port'),
 ('bed', 'rock'),
 ('jack', 'pot'),
 ('table', 'ware'),
 ('fire', 'works'),
 ('sub', 'way'),
 ('sea', 'shell'),
 ('brain', 'child'),
 ('foot', 'ball'),
 ('pick', 'up'),
 ('butter', 'fly')
 
