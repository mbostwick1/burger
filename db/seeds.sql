INSERT INTO burgers (burger_name, devoured) VALUES ('LONE STAR TEX MELT™', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('PICKLE RICK', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('ZOMBIE APOCALYPSE™', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('CLASSIC BYPASS™', false);
INSERT INTO burgers (burger_name) VALUES ('FAT ELVIS');

SELECT * FROM burgers;
UPDATE burgers SET devoured = 1 WHERE id = 1;