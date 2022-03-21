/* CREAT LISTS TABLE */
create table lists (
id INT AUTO_INCREMENT,
PRIMARY KEY(id),
title VARCHAR(50)
)

/* CREAT ITEMS TABLE */
create table items (
id INT AUTO_INCREMENT,
PRIMARY KEY(id),
title VARCHAR(50),
description VARCHAR (500),
list_id INT,
FOREIGN KEY(list_id) REFERENCES lists(id),
color VARCHAR(50)
)

/* POPULATE TABLE LISTS */
INSERT INTO lists (title) VALUES ("To Do")
INSERT INTO lists (title) VALUES ("Doing")
INSERT INTO lists (title) VALUES ("Done")

/* POPULATE TABLE ITEMS */
INSERT INTO items (title, description, list_id) VALUES ("Lavar a louça", "Lavar tudo até hoje a noite", 1)
INSERT INTO items (title, description, list_id) VALUES ("Levar as crianças para escola", "Levar rápido", 1)
INSERT INTO items (title, description, list_id) VALUES ("Pendurar as roupas", "Deixar secar por duas horas ou mais", 2)