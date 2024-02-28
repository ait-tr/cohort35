SELECT * FROM bookstore.book WHERE left_in_store > 0 AND price <= 10;
-- Вывести выручку с продажи всех книг (по каждому наименованию книги)
SELECT
    book_name,
    price * left_in_store AS "Выручка с продажи"
FROM bookstore.book
WHERE left_in_store > 0
ORDER BY book_name;

SELECT * FROM bookstore.book;

