<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

### Основы регулярных выражений в Java

Регулярные выражения (часто сокращенно "регекс" или "regex") — это особый способ искать и управлять текстом. Представьте, что у вас есть огромная книга, и вы хотите найти все упоминания определенного слова или фразы. Вместо того чтобы читать всю книгу, вы используете особый "магический прибор", который быстро находит все, что вам нужно. Регулярные выражения — это как этот "магический прибор" для работы с текстом в программировании.

В Java для работы с регулярными выражениями есть специальные классы, такие как `Pattern` и `Matcher`.

1. **Класс Pattern**: Это как правило для поиска. Вы говорите ему, что искать, например, "все слова, начинающиеся на 'А'". В Java это выглядит как `Pattern pattern = Pattern.compile("А\\w*");`. Здесь `"А\\w*"` — это само регулярное выражение.

2. **Класс Matcher**: После того как вы создали правило (Pattern), вам нужен способ его применить. Класс Matcher берет текст и применяет к нему ваше правило. Если мы продолжим пример выше, это будет выглядеть как `Matcher matcher = pattern.matcher(текст);`.

### Примеры регулярных выражений

- **Поиск цифр**: Если вам нужно найти все цифры в тексте, вы можете использовать выражение `\d`, которое соответствует любой цифре.

- **Поиск слов**: Если вы ищете слово "кошка", ваше регулярное выражение будет просто `"кошка"`.

- **Сложные шаблоны**: Можно создавать более сложные шаблоны, например, чтобы найти адрес электронной почты, нужен шаблон, который учитывает буквы, символы типа '@' и точки.

### Немного о синтаксисе

- **Метасимволы**: Это специальные символы, которые имеют особое значение. Например, `.` (точка) соответствует любому символу, а `*` означает "ноль или более предыдущего элемента".

- **Экранирование**: Если вам нужно искать метасимвол как обычный символ (например, точку), его нужно "экранировать" с помощью обратной косой черты, например `\\.`.

- **Группы**: Вы можете группировать части вашего выражения с помощью скобок, чтобы управлять ими как единым целым.

Регулярные выражения могут казаться сложными, но они очень мощные для работы с текстом. Они позволяют быстро искать, заменять и управлять данными в текстовом формате. В Java регулярные выражения используются через классы Pattern и Matcher, которые предоставляют гибкие и мощные инструменты для этой задачи.

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

### Basics of Regular Expressions in Java

Regular expressions (often abbreviated as "regex" or "regexp") are a special way to search and manipulate text. Imagine having a huge book, and you want to find all mentions of a specific word or phrase. Instead of reading the entire book, you use a special "magical device" that quickly finds everything you need. Regular expressions are like this "magical device" for working with text in programming.

In Java, there are special classes for working with regular expressions, such as `Pattern` and `Matcher`.

1. **Pattern Class**: This is like the rule for searching. You tell it what to look for, for example, "all words starting with 'A'". In Java, it looks like `Pattern pattern = Pattern.compile("A\\w*");`. Here, `"A\\w*"` is the regular expression itself.

2. **Matcher Class**: After you've created a rule (Pattern), you need a way to apply it. The Matcher class takes the text and applies your rule to it. Continuing the example above, it would look like `Matcher matcher = pattern.matcher(text);`.

### Examples of Regular Expressions

- **Finding Digits**: If you need to find all digits in a text, you can use the expression `\d`, which matches any digit.

- **Finding Words**: If you're looking for the word "cat", your regular expression would simply be `"cat"`.

- **Complex Patterns**: More complex patterns can be created, for instance, to find an email address, you need a pattern that accounts for letters, symbols like '@', and dots.

### A Bit About Syntax

- **Metacharacters**: These are special characters that have a special meaning. For example, `.` (dot) matches any character, while `*` means "zero or more of the preceding element".

- **Escaping**: If you need to search for a metacharacter as a regular character (like a dot), it needs to be "escaped" using a backslash, e.g., `\\.`.

- **Groups**: You can group parts of your expression using brackets to treat them as a single unit.

Regular expressions might seem complex, but they are incredibly powerful for working with text. They allow you to quickly search, replace, and manage data in text format. In Java, regular expressions are used through the Pattern and Matcher classes, which provide flexible and powerful tools for this task.

</details>