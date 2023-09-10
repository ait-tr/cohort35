## 01. Тип char
Среди примитивных типов в Java есть еще один, который заслуживает особого внимания — тип **char**. Его название происходит от слова Character, а сам тип используется для того, чтобы хранить символы.
Но! тип char — это и числовой тип тоже! Тип двойного назначения.
Все дело в том, что на самом деле тип char хранит не символы, а коды символов из кодировки Unicode. Каждому символу соответствует число — числовой код символа.
Итак, раз тип char — гибридный тип. Его значения можно интерпретировать и как числа (их можно складывать и умножать), и как символы.

В памяти занимает 16 бит (2 байта). Может принимать значения от 0 до 65535;
```
char a = 'A';
```

Формат **Unicode** (шестнадцатеричное представление)

Мы сказали, что примитивный тип char хранится в 16 битах и может определять до 65 536 различных символов. 
Кодирование Unicode занимается стандартизацией всех символов (а также символов, смайликов, идеограмм и т. д.), существующих на этой планете. Unicode - это расширение кодировки, известной как UTF-8, которая, в свою очередь, основана на старом 8-битном расширенном стандарте ASCII, который, в свою очередь, содержит самый старый стандарт, ASCII code (аббревиатура от American Standard Code for Information Interchange).

Мы можем напрямую присвоить Unicode char значение в шестнадцатеричном формате, используя 4 цифры, которые однозначно идентифицируют данный символ, добавляя к нему префикс \u (всегда в нижнем регистре). Например:
```
char phiCharacter = '\u03A6';  // Capital Greek letter Φ

```

Каждый символ char — это в первую очередь число (код символа), а потом уже символ. Зная код символа, всегда можно получить его в программе.


## 01 ENG. The `char` Type

Among the primitive data types in Java, there is one that deserves special attention — the `char` type. Its name comes from "Character," and it is used to store characters. However, the `char` type is also a numeric type! It serves a dual purpose.

The reason is that the `char` type doesn't actually store characters directly; it stores the character codes from the Unicode encoding. Each character corresponds to a numeric code.

So, the `char` type is a hybrid type. Its values can be interpreted both as numbers (which can be added and multiplied) and as characters.

In memory, it occupies 16 bits (2 bytes). It can take values from 0 to 65535.
```
char a = 'A';
```

### Unicode Format (Hexadecimal Representation)

As we mentioned, the primitive `char` type is stored in 16 bits and can represent up to 65,536 different characters.
Unicode encoding standardizes all characters (as well as emojis, ideograms, etc.) that exist on this planet. Unicode is an extension of the UTF-8 encoding, which is, in turn, based on the old 8-bit extended ASCII standard. ASCII code stands for American Standard Code for Information Interchange.

We can directly assign a Unicode character value to a `char` using a hexadecimal format with 4 digits that uniquely identifies the character. It's done by adding the `\u` prefix (always in lowercase) to it. For example:

```
char phiCharacter = '\u03A6';  // Capital Greek letter Φ

```

### Each char Symbol is Primarily a Number (Character Code)

Every `char` symbol is essentially a number (character code) first and then a symbol. Knowing the character code, you can always retrieve the corresponding symbol in your program.




## 02. Class String
Для работы со строками в Java существует класс String, который предоставляет ряд методов для манипуляции строками. Строка представляет собой последовательность символов.

Ввиду того, что мы (люди) общаемся с помощью слов (иначе говоря – строк), класс String используется в приложениях очень часто и умение работать с ним корректно и эффективно является крайне важным.

При работе со строками важно понимать, что объект String является неизменяемым (immutable). То есть при любых операциях над строкой, которые изменяют эту строку, фактически будет создаваться новая строка.

Физически объект String представляет собой **ссылку на область в памяти**, в которой размещены символы.

___
### Некоторый методы класса String для работы со строками:

- length(): возвращает длину строки 
- substring(): возвращает подстроку, начиная с определенного индекса до конца или до определенного индекса 
- toLowerCase(): переводит все символы строки в нижний регистр 
- toUpperCase(): переводит все символы строки в верхний регистр 
- valueOf(): преобразует объект в строковый вид 
- charAt(): возвращает символ строки по индексу 
- regionMatches(): сравнивает подстроки в строках 
- indexOf(): находит индекс первого вхождения подстроки в строку 
- lastIndexOf(): находит индекс последнего вхождения подстроки в строку 
- replace(): заменяет в строке одну подстроку на другую
- toCharArray(): можно обратно преобразовать строку в массив символов 
- isEmpty(): (boolean) является ли строка пустой 
- equals(): сравнивает строки с учетом регистра 
- equalsIgnoreCase(): сравнивает строки без учета регистра 
- сompareTo(): сравнивает две строки 
- startsWith(): определяет, начинается ли строка с подстроки 
- endsWith(): определяет, заканчивается ли строка на определенную подстроку 
- getChars(): возвращает группу символов 
- trim(): удаляет начальные и конечные пробелы 
- concat(): объединяет строки 
- join(): соединяет строки с учетом разделителя


## 02 ENG. Class String

In Java, the `String` class is used for working with strings and provides a set of methods for string manipulation. A string is a sequence of characters.

Given that we (humans) communicate using words (in other words - strings), the `String` class is used very often in applications, and the ability to work with it correctly and efficiently is crucial.

When working with strings, it's important to understand that a `String` object is immutable. This means that any operations on a string that appear to modify it will actually create a new string.

Physically, a `String` object represents a **reference to a memory area** where characters are stored.

___
## String Class Methods

- `length()`: Returns the length of the string.
- `substring()`: Returns a substring starting from a specified index to the end or up to a specified index.
- `toLowerCase()`: Converts all characters in the string to lowercase.
- `toUpperCase()`: Converts all characters in the string to uppercase.
- `valueOf()`: Converts an object to its string representation.
- `charAt()`: Returns the character at a specific index in the string.
- `regionMatches()`: Compares substrings within strings.
- `indexOf()`: Finds the index of the first occurrence of a substring in the string.
- `lastIndexOf()`: Finds the index of the last occurrence of a substring in the string.
- `replace()`: Replaces one substring with another in the string.
- `toCharArray()`: Converts a string back into an array of characters.
- `isEmpty()`: Returns `true` if the string is empty.
- `equals()`: Compares strings considering case sensitivity.
- `equalsIgnoreCase()`: Compares strings without considering case.
- `compareTo()`: Compares two strings.
- `startsWith()`: Determines if a string starts with a specified substring.
- `endsWith()`: Determines if a string ends with a specific substring.
- `getChars()`: Returns a group of characters.
- `trim()`: Removes leading and trailing whitespaces.
- `concat()`: Concatenates strings.
- `join()`: Joins strings using a delimiter.




Документация Oracle / Oracle documentation. [Все методы класса String / All methods of class String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html "Oracle documentation")













