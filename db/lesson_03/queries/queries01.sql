CREATE SCHEMA Bookstore;

CREATE TABLE Bookstore.Book
(
    "book_id"         SERIAL PRIMARY KEY,
    "book_name"       VARCHAR(64) NOT NULL,
    "price"           INTEGER     NOT NULL,
    "number_of_pages" INTEGER     NULL,
    "left_in_store"   INTEGER     NOT NULL
);

CREATE TABLE Bookstore.Author
(
    "author_id"  SERIAL PRIMARY KEY,
    "first_name" VARCHAR(64) NOT NULL,
    "last_name"  VARCHAR(64) NULL
);

CREATE TABLE Bookstore.Book_author
(
    "book_id"   INTEGER,
    "author_id" INTEGER,
    PRIMARY KEY (book_id, author_id),

    FOREIGN KEY ("book_id") REFERENCES Bookstore.Book ("book_id"),
    FOREIGN KEY ("author_id") REFERENCES Bookstore.Author ("author_id")
);

CREATE TABLE Bookstore.Genre
(
    "genre_id"   SERIAL PRIMARY KEY,
    "genre_name" VARCHAR(32) NOT NULL UNIQUE
);

CREATE TABLE Bookstore.Book_genre
(
    "book_id"  INTEGER,
    "genre_id" INTEGER,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY ("genre_id") REFERENCES Bookstore.Genre ("genre_id"),
    FOREIGN KEY ("book_id") REFERENCES Bookstore.Book ("book_id")
);


-- inserts
INSERT INTO Bookstore.Genre (genre_name) VALUES
                                             ('Detective fiction'),
                                             ('Fantasy'),
                                             ('Educational'),
                                             ('Thriller'),
                                             ('Psychology'),
                                             ('Drama'),
                                             ('For children'),
                                             ('Test');

INSERT INTO Bookstore.Author (author_id, first_name, last_name) VALUES
                                                                    (0, 'Joanne', 'Rowling'),
                                                                    (1, 'Arthur', 'Conan Doyle'),
                                                                    (2, 'Bjarne', 'Stroustrup'),
                                                                    (3, 'Joshua', 'Bloch'),
                                                                    (4, 'Daniel', 'Kahneman'),
                                                                    (5, 'Alex', 'Michaelides'),
                                                                    (6, 'William', 'Shakespeare');
INSERT INTO Bookstore.Author (author_id, first_name) VALUES (7, 'Joker');

INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (0, 'Harry Potter and the Philosopher`s Stone', 10, 300, 16);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (1, 'Harry Potter and the Chamber of Secrets', 10, 325, 14);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (2, 'Harry Potter and the Prisoner of Azkaban', 10, 417, 17);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (3, 'Harry Potter and the Goblet of Fire', 12, 587, 10);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (4, 'Harry Potter and the Order of Phoenix', 12, 615, 19);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (5, 'Harry Potter and the half-blood Prince', 10, 423, 8);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (6, 'Harry Potter and the Deathly Hallows', 10, 511, 7);

INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (7, 'Harry Proger and the Granite of Science', 10, 300, 5);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (8, 'Harry Proger and the Chamber of Servers', 10, 325, 3);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (9, 'Harry Proger and the Prisoner of Tutorial Hell', 10, 417, 1);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (10, 'Harry Proger and the Goblet of File', 12, 587, 3);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (11, 'Harry Proger and the Order of HashMap', 12, 615, 0);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (12, 'Harry Proger and the Half-educated Pupil', 10, 423, 4);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES (13, 'Harry Proger and the Deadly Computer Viruses', 10, 511, 1);

INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(14, 'The adventures of Sherlock Holmes', 15, 2);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES(15, 'The Hound of Baskervilles', 8, 248, 4);
INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(16, 'Harry Potter and the Cursed Child', 25, 20);

INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(17, 'Effective Java', 35, 7);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES(18, 'A tour of C++', 23, 259, 2);
INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(19, 'The silent patient', 15, 3);
INSERT INTO Bookstore.Book (book_id, book_name, price, number_of_pages, left_in_store)
VALUES(20, 'The Maidens: A Novel', 10, 352, 2);
INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(21, 'Thinking, fast and slow', 25, 12);
INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(22, 'Hamlet', 10, 1);
INSERT INTO Bookstore.Book (book_id, book_name, price, left_in_store)
VALUES(23, 'Romeo and Juliet', 10, 1);


INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (0, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (1, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (2, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (3, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (4, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (5, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (6, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (7, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (7, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (8, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (9, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (10, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (11, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (12, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (13, 7);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (14, 1);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (15, 1);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (16, 0);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (17, 3);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (18, 2);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (19, 5);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (20, 5);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (21, 4);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (22, 6);
INSERT INTO Bookstore.Book_author (book_id, author_id) VALUES (23, 6);

INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(0, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(1, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(2, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(3, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(4, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(5, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(6, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(7, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(8, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(9, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(10, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(11, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(12, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(13, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(0, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(1, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(2, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(3, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(4, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(5, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(6, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(14, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(14, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(15, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(15, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(16, 1);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(16, 5);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(16, 6);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(17, 2);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(18, 2);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(19, 3);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(20, 3);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(21, 2);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(21, 4);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(22, 5);
INSERT INTO Bookstore.Book_genre (book_id, genre_id) VALUES(23, 5);
