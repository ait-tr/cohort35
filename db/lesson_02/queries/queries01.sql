CREATE TABLE owners (
                        id_o serial PRIMARY KEY,
                        name varchar(80)
);

CREATE TABLE cars (
                      id_c serial PRIMARY KEY,
                      brand varchar(40),
                      plate varchar(10),
                      id_owner int REFERENCES owners(id_o)
);

INSERT INTO owners (name) VALUES
                              ('Illia'),
                              ('Yehor'),
                              ('Dmitrii');


INSERT INTO cars (brand, plate, id_owner) VALUES
                                              ('Audi', 'as4512c', 1),
                                              ('Volkswagen', '456as8', 2),
                                              ('Toyota', 'ht955t2', 2),
                                              ('Tesla', '546654', 1),
                                              ('Audi', '45an2k3', 3);

SELECT * FROM owners;
SELECT * FROM cars;

SELECT brand, plate, name FROM cars JOIN owners ON owners.id_o = cars.id_owner;