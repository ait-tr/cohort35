## 1 Данные
* Данные – это представление фактов и идей в формализованном виде, пригодном для передачи и переработки в некотором процессе
* Информация это:
1) значимые данные независимо от формы их представления;
2) это смысл, который придается данным при их представлении;
3) информация является данными, которым предоставляется некоторое содержание (интерпретация) в конкретной ситуации 
в рамках некоторой системы понятий.
* Система управления базами данных, СУБД — специальная программа-сервер позволяющая использовать и управлять базами данных. 
* СУБД позволяет читать и записывать данные, искать по ним и выполнять сложные выборки.
* Реляционная система управления базами данных, РСУБД / Relational Database Management System (RDBMS) — СУБД которая 
хранит данные в виде таблиц и строк в этих таблицах. Любая данные в РСУБД должны быть структурированы в соответствии 
с реляционной моделью. Примеры РСУБД:
  * MySQL
  * PostgreSQL
  * MSSQL
  * Oracle
  
## 2 Реляционные БД
* SQL - язык структурированных запросов (Structured Query Language)
* SQL — декларативный язык программирования, предназначенный для описания, изменения и извлечения данных из СУБД. 
Чаще всего используется в реляционных СУБД.
* Данные в БД описываются в таблицах.
* Таблица (table) — совокупность строк и столбцов
* Строка (row) — запись в БД о конкретной сущности, также называемая словом "кортеж" 
* Столбец (column) — любой атрибут сущности хранящейся в строке
* Все таблицы находятся в схеме и могут взаимосвязаны.
* Схемы хранятся в базе данных. Но, обычно, в базе данных одна схема.
* Базы данных управляются СУБД.

## 3 Язык SQL
* Типы данных (Числовые)
  * serial — целое с автоувеличением, от 1 до 2147483647
  * smallint, int2 — целое, от -32768 до +32767;
  * integer, int, int4 — целое, от -2147483648 до +2147483647
  * bigint, int8 — целое, от -9 223 372 036 854 775 808 до 9 223 372 036 854 775 807
  * double precision, float8 — с плавающей точкой, от 1E-307 до 1E+308
* Типы данных (Строковые)
  * character(n), char(n) — представляет строку из фиксированного количества символов. 
  С помощью параметра задается задается количество символов в строке
  * character varying(n), varchar(n) - представляет строку из фиксированного количества символов. 
  С помощью параметра задается задается количество символов в строке
  * text — представляет текст произвольной длины
* Типы данных (Даты)
  * timestamp — хранит дату и время, с учётом часового пояса или без. Для дат самое нижнее 
  значение 4713 год до н. э., самое верхнее значение 294276 год н. э.
  * date — представляет дату от 4713 год до н. э. до 5874897 года н.э
  * time — хранит время суток, без даты, с учётом часового пояса или без. Принимает значения от 00:00:00 до 24:00:00
* Язык SQL делится на 5 разделов по типу действий, выполняемых командами в этих разделах:
1. DDL - Data Definition Language
2. DML - Data Manipulation Language
3. DQL - Data Query Language
4. DCL - Data Control Language
5. TCL
* DDL — подмножество языка SQL, предназначенное для создания, изменения и удаления баз данных и таблиц в них. 
* К нему относятся все команды, начинающиеся с CREATE, ALTER и DROP.
* DCL — подмножество языка SQL, предназначенное для управления правами доступа к базам данным и таблицам в них. 
* С помощью него можно разрешить и запретить пользователям создавать, изменять и удалять базы данных или таблицы. 
* К нему относятся все команды, начинающиеся на GRANT и REVOKE.
* DML — подмножество языка SQL, предназначенное для создания, изменения и удаления данных в таблицах внутри базы данных. 
* К нему относятся все команды, начинающиеся с UPDATE и DELETE. (CRUD аббревиатура CREATE READ UPDATE DELETE) 
* В целом SQL DML очень похожи среди разных баз данных, но иногда бывают серьезные отличия, поэтому всегда полезно 
сверяться с документацией по конкретной БД в случае проблем.
* DQL - подмножество языка SQL, предназначенное для обработки, чтения и анализа данных в БД. Можно сказать, что это самый
часто используемый раздел языка.