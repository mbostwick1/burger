INSERT INTO burger (burger_name, devoured) VALUES ('LONE STAR TEX MELT™', false);
INSERT INTO burger (burger_name, devoured) VALUES ('PICKLE RICK', false);
INSERT INTO burger (burger_name, devoured) VALUES ('ZOMBIE APOCALYPSE™', false);
INSERT INTO burger (burger_name, devoured) VALUES ('CLASSIC BYPASS™', false);
INSERT INTO burger (burger_name) VALUES ('FAT ELVIS');

SELECT * FROM burger;
UPDATE burger SET devoured = 1 WHERE id = 1;