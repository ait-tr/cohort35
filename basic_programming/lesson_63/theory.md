<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

### Метасимволы: 

Символы с особенным значением, такие как:

`.` **(Точка)**: - Соответствует любому символу, кроме символа новой строки. Например, `a.b` соответствует "acb", "aab", "a3b" и так далее.

`^` **(Каретка)**: - Соответствует началу строки. Например, `^a` соответствует "a" в начале строки.

`$` **(Доллар)**: - Соответствует концу строки. Например, `a$` соответствует "a" в конце строки.

`*` **(Звездочка)**: - Соответствует предыдущему символу ноль или более раз. Например, `a*` соответствует "", "a", "aa", "aaa", и так далее.

`+` **(Плюс)**: - Соответствует предыдущему символу один или более раз. Например, `a+` соответствует "a", "aa", "aaa", и так далее.

`?` **(Вопросительный знак)**: - Соответствует предыдущему символу ноль или один раз. Например, `a?` соответствует "" или "a".

`{n}` - **(Фигурные скобки с числом)**: Соответствует ровно n раз предыдущему символу. Например, `a{3}` соответствует "aaa".

`{n,}`: - Соответствует предыдущему символу n или более раз. Например, `a{2,}` соответствует "aa", "aaa", "aaaa", и так далее.

`{n,m}`: - Соответствует предыдущему символу от n до m раз. Например, `a{2,4}` соответствует "aa", "aaa", или "aaaa".

`[]` **(Квадратные скобки)**: - Обозначают набор символов. Например, `[abc]` соответствует "a", "b", или "c".

`|` **(Пайп)**: - Обозначает альтернативу (или). Например, `a|b` соответствует "a" или "b".

`\ ` **(Обратная косая черта)**: - Используется для экранирования метасимволов, чтобы они интерпретировались буквально. Например, `\.`, `\*`, `\?`.

`\d`: - Соответствует любой цифре. Эквивалентно `[0-9]`.

`\D`: - Соответствует любому нечисловому символу. Эквивалентно `[^0-9]`.

`\w`: - Соответствует любому словесному символу (буквенно-цифровому и подчеркиванию). Эквивалентно `[a-zA-Z_0-9]`.

`\W`: - Соответствует любому несловесному символу. Эквивалентно `[^a-zA-Z_0-9]`.

`\b` — - это метасимвол, обозначающий границу слова. Граница слова происходит там, где с одной стороны находится символ, который соответствует `\w` (буквенно-цифровой символ или подчеркивание), а с другой стороны — символ, который соответствует `\W` (несловесный символ) или началу/концу строки.

`\s`: - Соответствует любому пробельному символу (пробел, табуляция, новая строка).

`\S`: - Соответствует любому непробельному символу.

`()` **(Круглые скобки)**: - Используются для группирования частей регулярного выражения и захвата текста.


### Квантификаторы 
Определяют, сколько раз элемент должен встречаться.
   - `*` (ноль или более раз),
   - `+` (один или более раз),
   - `?` (ноль или один раз),
   - `{n}` (ровно n раз),
   - `{n,}` (n или более раз),
   - `{n,m}` (от n до m раз).


### Методы класса `Matcher`
#### `find()`, `matches()`, и `group()`

####  Метод `find()`

Метод `find()` используется для поиска следующего совпадения с шаблоном в тексте. Он ищет совпадения последовательно, начиная с текущей позиции в тексте, и перемещает "курсор" в конец найденного совпадения после каждого вызова.

```
String text = "cats, dogs, birds";
Pattern pattern = Pattern.compile("\\w+"); // Шаблон для слова (один или более буквенно-цифровых символов)
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println(matcher.group());
}
```

В этом примере:
- Мы ищем все слова в строке "cats, dogs, birds".
- `find()` находит первое слово "cats", затем "dogs", и наконец "birds".
- `group()` возвращает найденное слово на каждом шаге.

#### Метод `matches()`

Метод `matches()` проверяет, соответствует ли весь текст шаблону целиком. Это означает, что для успешного совпадения весь текст должен удовлетворять шаблону.

```
String text = "cats";
Pattern pattern = Pattern.compile("\\w+"); // Шаблон для слова
Matcher matcher = pattern.matcher(text);

if (matcher.matches()) {
    System.out.println("Весь текст соответствует шаблону");
} else {
    System.out.println("Текст не соответствует шаблону");
}
```
В этом примере:
- Если строка `text` полностью состоит из буквенно-цифровых символов, `matches()` вернет `true`.
- В примере "cats" полностью соответствует шаблону, поэтому будет напечатано "Весь текст соответствует шаблону".

#### Метод `group()`

Метод `group()` используется для получения части текста, которая соответствует шаблону или его части (если использовались группы). Без аргументов `group()` возвращает всё совпадение.

```
String text = "cats 123";
Pattern pattern = Pattern.compile("(\\w+) (\\d+)"); // Две группы: слова и числа
Matcher matcher = pattern.matcher(text);

if (matcher.find()) {
    System.out.println("Слово: " + matcher.group(1)); // Возвращает первую группу (слово)
    System.out.println("Число: " + matcher.group(2)); // Возвращает вторую группу (число)
}
```
В этом примере:
- Шаблон `"(\\w+) (\\d+)"` содержит две группы: первая для слов (`\\w+`) и вторая для чисел (`\\d+`).
- `matcher.find()` находит совпадение "cats 123".
- `matcher.group(1)` возвращает "cats", а `matcher.group(2)` возвращает "123".

Эти методы являются основными инструментами для работы с регулярными выражениями в Java, позволяя находить, проверять и извлекать данные из текста.



</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

### Metacharacters:

Metacharacters are symbols with special meaning, such as:

`.` **(Dot)**: - Matches any character except the newline character. For example, `a.b` matches "acb", "aab", "a3b", etc.

`^` **(Caret)**: - Matches the beginning of a string. For example, `^a` matches "a" at the start of a string.

`$` **(Dollar)**: - Matches the end of a string. For example, `a$` matches "a" at the end of a string.

`*` **(Asterisk)**: - Matches the preceding character zero or more times. For example, `a*` matches "", "a", "aa", "aaa", etc.

`+` **(Plus)**: - Matches the preceding character one or more times. For example, `a+` matches "a", "aa", "aaa", etc.

`?` **(Question Mark)**: - Matches the preceding character zero or one time. For example, `a?` matches "" or "a".

`{n}` - **(Curly Brackets with a Number)**: Matches exactly n times the preceding character. For example, `a{3}` matches "aaa".

`{n,}`: - Matches the preceding character n or more times. For example, `a{2,}` matches "aa", "aaa", "aaaa", etc.

`{n,m}`: - Matches the preceding character from n to m times. For example, `a{2,4}` matches "aa", "aaa", or "aaaa".

`[]` **(Square Brackets)**: - Denotes a set of characters. For example, `[abc]` matches "a", "b", or "c".

`|` **(Pipe)**: - Represents an alternative (or). For example, `a|b` matches "a" or "b".

`\ ` **(Backslash)**: - Used to escape metacharacters so that they are interpreted literally. For example, `\.`, `\*`, `\?`.

`\d`: - Matches any digit. Equivalent to `[0-9]`.

`\D`: - Matches any non-digit character. Equivalent to `[^0-9]`.

`\w`: - Matches any word character (alphanumeric and underscore). Equivalent to `[a-zA-Z_0-9]`.

`\W`: - Matches any non-word character. Equivalent to `[^a-zA-Z_0-9]`.

`\b`: - A metacharacter denoting a word boundary. A word boundary occurs where on one side there is a character that matches `\w` (alphanumeric character or underscore), and on the other side a character that matches `\W` (non-word character) or the beginning/end of the string.

`\s`: - Matches any whitespace character (space, tab, newline).

`\S`: - Matches any non-whitespace character.

`()` **(Parentheses)**: - Used for grouping parts of a regular expression and capturing text.

### Quantifiers
Define how many times an element should occur.
- `*` (zero or more times),
- `+` (one or more times),
- `?` (zero or one time),
- `{n}` (exactly n times),
- `{n,}` (n or more times),
- `{n,m}` (from n to m times).

### Methods of the `Matcher` Class
#### `find()`, `matches()`, and `group()`

####  `find()` Method

The `find()` method is used to search for the next match of the pattern in the text. It sequentially looks for matches starting from the current position in the text and moves the "cursor" to the end of the found match after each call.

```
String text = "cats, dogs, birds";
Pattern pattern = Pattern.compile("\\w+"); // Pattern for a word (one or more alphanumeric characters)
Matcher matcher = pattern.matcher(text);

while (matcher.find()) {
    System.out.println(matcher.group());
}
```

In this example:
- We search for all words in the string "cats, dogs, birds".
- `find()` locates the first word "cats", then "dogs", and finally "birds".
- `group()` returns the found word at each step.

#### `matches()` Method

The `matches()` method checks if the entire text matches the pattern completely. This means that for a successful match, the entire text must satisfy the pattern.

```
String text = "cats";
Pattern pattern = Pattern.compile("\\w+"); // Pattern for a word
Matcher matcher = pattern.matcher(text);

if (matcher.matches()) {
    System.out.println("The entire text matches the pattern");
} else {
    System.out.println("The text does not match the pattern");
}
```
In this example

:
- If the string `text` consists entirely of alphanumeric characters, `matches()` will return `true`.
- In the example, "cats" fully matches the pattern, so "The entire text matches the pattern" is printed.

#### `group()` Method

The `group()` method is used to retrieve a part of the text that matches the pattern or its part (if groups were used). Without arguments, `group()` returns the entire match.

```
String text = "cats 123";
Pattern pattern = Pattern.compile("(\\w+) (\\d+)"); // Two groups: words and numbers
Matcher matcher = pattern.matcher(text);

if (matcher.find()) {
    System.out.println("Word: " + matcher.group(1)); // Returns the first group (word)
    System.out.println("Number: " + matcher.group(2)); // Returns the second group (number)
}
```
In this example:
- The pattern `"(\\w+) (\\d+)"` contains two groups: the first for words (`\\w+`) and the second for numbers (`\\d+`).
- `matcher.find()` finds the match "cats 123".
- `matcher.group(1)` returns "cats", and `matcher.group(2)` returns "123".

These methods are the primary tools for working with regular expressions in Java, allowing for finding, verifying, and extracting data from text.

</details>