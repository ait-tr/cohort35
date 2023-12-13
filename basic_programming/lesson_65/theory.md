<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

### Именованные группы
Именованные группы в регулярных выражениях добавляют читаемость и гибкость при работе со сложными шаблонами. Вот как вы можете использовать именованные группы в различных контекстах:

### Обращение к Именованным Группам в Регулярном Выражении

Чтобы определить именованную группу, используйте синтаксис `(?<name>pattern)`, где `name` - это имя группы, а `pattern` - шаблон, который она захватывает. Для обращения к этой группе внутри того же регулярного выражения используйте синтаксис `\k<name>`.

```
Pattern pattern = Pattern.compile("(?<word>\\w+) \\k<word>");
Matcher matcher = pattern.matcher("hello hello");
if (matcher.find()) {
    System.out.println("Найдено совпадение: " + matcher.group("word"));
}
```

В этом примере `(?<word>\\w+)` определяет группу с именем "word", и `\k<word>` используется для ссылки на эту группу позже в выражении.

### Обращение к Именованным Группам в Методе `replaceAll`

В методе `replaceAll` можно ссылаться на захваченное содержимое именованных групп с помощью синтаксиса `$` и имени группы.

```
String text = "hello";
text = text.replaceAll("(?<word>hello)", "Привет, ${word}!");
System.out.println(text); // Выводит: Привет, hello!
```

Здесь `${word}` используется для вставки содержимого группы "word" в результат замены.

### 3. Нюансы и Особенности

- **Обращение к Группам**: При обращении к именованным группам в Java используйте `\k<name>` внутри регулярного выражения и `$<name>` при замене.
- **Извлечение данных**: Для получения данных из именованной группы после сопоставления используйте `matcher.group("name")`.
- **Совместимость**: Убедитесь, что ваша версия Java поддерживает именованные группы, так как это относительно новая функция (добавлена в Java 7).
- **Уникальность имен**: Имя группы должно быть уникальным в пределах регулярного выражения.
- **Сложность**: Использование именованных групп может увеличить сложность выражения, но повышает его читаемость и поддерживаемость, особенно в случае сложных шаблонов.

### Режимы 
Регулярные выражения могут работать в различных режимах, которые изменяют их поведение при сопоставлении шаблонов. Эти режимы часто устанавливаются с помощью так называемых "флагов" или "модификаторов". Вот некоторые из наиболее распространенных режимов работы регулярных выражений:

### Режим без учета регистра (Case Insensitive)
- **Флаг**: `Pattern.CASE_INSENSITIVE` в Java (`i` в других языках)
- Сопоставление шаблона происходит без учета регистра символов. Например, шаблон `a` будет соответствовать как `a`, так и `A`.

### Многострочный режим (Multiline)
- **Флаг**: `Pattern.MULTILINE` в Java (`m` в других языках)
- Метасимволы начала `^` и конца `$` строки соответствуют началу и концу каждой строки (разделенной символами перевода строки) в тексте, а не только началу и концу всего текста.

### Режим "точка соответствует всему" (Dotall)
- **Флаг**: `Pattern.DOTALL` в Java (`s` в других языках)
- Символ `.` (точка) соответствует любому символу, включая символы перевода строки, что не так в стандартном режиме.

### Режим "ленивой" квантификации (Non-greedy)
- Не является отдельным режимом, но может быть достигнут с помощью ленивых квантификаторов (например, `*?`, `+?`, `??`). В этом режиме квантификаторы захватывают минимально возможное количество символов, удовлетворяющее условию.

### 5. Режим "свободных пробелов" (Free-Spacing)
- **Флаг**: `Pattern.COMMENTS` в Java (`x` в других языках)
- Позволяет вставлять пробелы, табуляции и комментарии в регулярные выражения для улучшения их читаемости, при этом они игнорируются при сопоставлении.

### Юникод-совместимый режим
- **Флаги**: `Pattern.UNICODE_CASE`, `Pattern.UNICODE_CHARACTER_CLASS` и другие в Java
- Позволяет регулярным выражениям правильно интерпретировать и сопоставлять символы в юникоде, включая регистрозависимость и классы символов.

### Примеры использования в Java

```
// Режим без учета регистра
Pattern pattern1 = Pattern.compile("example", Pattern.CASE_INSENSITIVE);
Matcher matcher1 = pattern1.matcher("Example");
System.out.println("Без учета регистра: " + matcher1.find()); // Выведет true

// Многострочный режим
Pattern pattern2 = Pattern.compile("^example", Pattern.MULTILINE);
Matcher matcher2 = pattern2.matcher("This is\nexample");
System.out.println("Многострочный: " + matcher2.find()); // Выведет true

// Режим "точка соответствует всему"
Pattern pattern3 = Pattern.compile("e.xample", Pattern.DOTALL);
Matcher matcher3 = pattern3.matcher("e\nxample");
System.out.println("Точка соответствует всему: " + matcher3.find()); // Выведет true
```

Эти режимы могут быть комбинированы для достижения необходимого поведения в регулярных выражениях.

### Lookaround

В регулярных выражениях конструкции lookahead и lookbehind, известные вместе как "lookaround", используются для проверки наличия или отсутствия определённых шаблонов до или после определённой точки в строке, не захватывая при этом эти шаблоны. Они не влияют на то, что регулярное выражение захватывает, а только на то, где оно находит соответствие.

### Lookahead (Предварительная Проверка)

Lookahead проверяет, что после текущей позиции в тексте следует определённый шаблон.

1. **Положительный Lookahead**: `(?=pattern)`. Соответствует позиции в тексте, за которой следует `pattern`. Например, `X(?=Y)` соответствует `X`, только если за `X` следует `Y`.

2. **Отрицательный Lookahead**: `(?!pattern)`. Соответствует позиции в тексте, за которой не следует `pattern`. Например, `X(?!Y)` соответствует `X`, только если за `X` не следует `Y`.

### Lookbehind (Предшествующая Проверка)

Lookbehind проверяет, что перед текущей позицией в тексте находится определённый шаблон.

1. **Положительный Lookbehind**: `(?<=pattern)`. Соответствует позиции в тексте, перед которой находится `pattern`. Например, `(?<=Y)X` соответствует `X`, только если перед `X` находится `Y`.

2. **Отрицательный Lookbehind**: `(?<!pattern)`. Соответствует позиции в тексте, перед которой не находится `pattern`. Например, `(?<!Y)X` соответствует `X`, только если перед `X` не находится `Y`.

### Ограничения

В Java (и в некоторых других языках программирования) lookbehind имеет **ограничение на длину шаблона**: шаблон в lookbehind должен иметь фиксированную длину. Это означает, что вы не можете использовать квантификаторы переменной длины внутри lookbehind.



</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

### Named Groups
Named groups in regular expressions add readability and flexibility when working with complex patterns. Here's how you can use named groups in various contexts:

### Referencing Named Groups in Regular Expressions

To define a named group, use the syntax `(?<name>pattern)`, where `name` is the name of the group, and `pattern` is the pattern it captures. To reference this group later within the same regular expression, use the syntax `\k<name>`.

```
Pattern pattern = Pattern.compile("(?<word>\\w+) \\k<word>");
Matcher matcher = pattern.matcher("hello hello");
if (matcher.find()) {
    System.out.println("Found match: " + matcher.group("word"));
}
```

In this example, `(?<word>\\w+)` defines a group named "word", and `\k<word>` is used to refer back to this group later in the expression.

### Referencing Named Groups in `replaceAll` Method

In the `replaceAll` method, you can refer to the captured content of named groups using the `$` syntax followed by the group name.

```
String text = "hello";
text = text.replaceAll("(?<word>hello)", "Greetings, ${word}!");
System.out.println(text); // Outputs: Greetings, hello!
```

Here `${word}` is used to insert the content of the "word" group into the replacement result.

### 3. Nuances and Features

- **Referring to Groups**: When referring to named groups in Java, use `\k<name>` within the regular expression and `$<name>` in replacements.
- **Extracting Data**: To retrieve data from a named group after matching, use `matcher.group("name")`.
- **Compatibility**: Ensure your version of Java supports named groups, as it's a relatively new feature (introduced in Java 7).
- **Uniqueness of Names**: The name of the group must be unique within the regular expression.
- **Complexity**: Using named groups can increase the complexity of the expression but improves its readability and maintainability, especially in the case of complex patterns.

### Modes
Regular expressions can operate in various modes, which alter their behavior when matching patterns. These modes are often set using so-called "flags" or "modifiers". Here are some of the most common modes of operation for regular expressions:

### Case Insensitive Mode
- **Flag**: `Pattern.CASE_INSENSITIVE` in Java (`i` in other languages)
- Matching occurs without considering the case of characters. For example, the pattern `a` will match both `a` and `A`.

### Multiline Mode
- **Flag**: `Pattern.MULTILINE` in Java (`m` in other languages)
- The start `^` and end `$` metacharacters match the start and end of each line (divided by newline characters) in the text, not just the start and end of the entire text.

### Dotall Mode
- **Flag**: `Pattern.DOTALL` in Java (`s` in other languages)
- The `.` (dot) character matches any character, including newline characters, which is not the case in the standard mode.

### Non-Greedy Quantification Mode
- Not a separate mode but can be achieved using lazy quantifiers (e.g., `*?`, `+?`, `??`). In this mode, quantifiers capture the minimum possible number of characters satisfying the condition.

### Free-Spacing Mode
- **Flag**: `Pattern.COMMENTS` in Java (`x` in other languages)
- Allows inserting spaces, tabs, and comments in regular expressions for better readability, which are ignored during matching.

### Unicode-Compatible Mode
- **Flags**: `Pattern.UNICODE_CASE`, `Pattern.UNICODE_CHARACTER_CLASS`, and others in Java
- Allows regular expressions to correctly interpret and match Unicode characters, including case sensitivity and character classes.

### Examples of Usage in Java

```
// Case Insensitive Mode
Pattern pattern1 = Pattern.compile("example", Pattern.CASE_INSENSITIVE);
Matcher matcher1 = pattern1.matcher("Example");
System.out.println("Case Insensitive: " + matcher1.find()); // Will output true

// Multiline Mode
Pattern pattern2 = Pattern.compile("^example", Pattern.MULTILINE);
Matcher matcher2 = pattern2.matcher("This is\nexample");
System.out.println("Multiline: " + matcher2.find()); // Will output true

// Dotall Mode
Pattern pattern3 = Pattern.compile("e.xample", Pattern.DOTALL);
Matcher matcher3 = pattern3.matcher("e\nxample");
System.out.println("Dotall: " + matcher3.find()); // Will output true
```

These modes can be combined to achieve the required behavior in regular expressions.

### Lookaround

In regular expressions, lookahead and lookbehind constructs, known collectively as "lookaround", are used to check for the presence or absence of certain patterns before or after a

specific point in a string without actually capturing those patterns. They affect where the regular expression finds a match but not what it captures.

### Lookahead (Positive Lookahead)

Lookahead checks that a certain pattern follows the current position in the text.

1. **Positive Lookahead**: `(?=pattern)`. Matches a position in the text that is followed by `pattern`. For example, `X(?=Y)` matches `X` only if `X` is followed by `Y`.

2. **Negative Lookahead**: `(?!pattern)`. Matches a position in the text that is not followed by `pattern`. For example, `X(?!Y)` matches `X` only if `X` is not followed by `Y`.

### Lookbehind (Positive Lookbehind)

Lookbehind checks that a certain pattern precedes the current position in the text.

1. **Positive Lookbehind**: `(?<=pattern)`. Matches a position in the text that is preceded by `pattern`. For example, `(?<=Y)X` matches `X` only if `X` is preceded by `Y`.

2. **Negative Lookbehind**: `(?<!pattern)`. Matches a position in the text that is not preceded by `pattern`. For example, `(?<!Y)X` matches `X` only if `X` is not preceded by `Y`.

### Limitations

In Java (and some other programming languages), lookbehind has a **fixed-length pattern limitation**: the pattern in lookbehind must have a fixed length. This means you cannot use variable-length quantifiers inside lookbehind.
</details>