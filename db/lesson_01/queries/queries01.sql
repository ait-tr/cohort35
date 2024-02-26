CREATE USER test_user WITH PASSWORD 'qwerty';
CREATE DATABASE test_db OWNER test_user;
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
DROP DATABASE test_db;
CREATE TABLE students (
                          id serial PRIMARY KEY,
                          name varchar(80),
                          age integer
);
INSERT INTO students (name, age) VALUES
                                     ('Anna', 25),
                                     ('Maria', 23),
                                     ('Roman', 28);
SELECT * FROM students;
SELECT name, age FROM students;
SELECT name, age FROM students WHERE age >= 25;

SELECT * FROM students ORDER BY age DESC;
SELECT AVG(age) AS "Средний возраст" FROM students;
SELECT id + age, name FROM students;
UPDATE students SET age = 26 WHERE name = 'Anna';
