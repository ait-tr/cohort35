CREATE TABLE farmer
(
    id serial PRIMARY KEY,
    height int,
    age int,
    name varchar,
    number_of_children int,
    country varchar
);
INSERT INTO
    farmer (name, height, age, number_of_children, country)
VALUES
    ('Johanes', 180, 47, 5, 'Germany'),
    ('Pierre', 175, 40, 2, 'France'),
    ('Gerard', 184, 60, 4, 'Germany'),
    ('Marek', 168, 51, 0, 'Poland'),
    ('Hans', 177, 30, 1, 'Germany');

SELECT * FROM farmer WHERE name LIKE '%s';
SELECT name FROM farmer WHERE country IN ('France', 'Poland');
SELECT * FROM farmer WHERE height NOT BETWEEN 177 AND 180;
SELECT COUNT(*) FROM farmer WHERE height BETWEEN 177 AND 180;
SELECT AVG(height) AS avarage_height FROM farmer;
SELECT MAX(age) AS min_age FROM farmer;



SELECT country, AVG(age) AS min_age FROM farmer WHERE age < 50 GROUP BY country HAVING MIN(age) > 30;

