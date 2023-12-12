<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

### Квантификаторы
Квантификаторы в регулярных выражениях используются для указания количества раз, которое должен встречаться элемент (символ, группа символов или группа). Эти квантификаторы помогают сделать регулярные выражения гибкими и мощными. Вот основные типы квантификаторов в регулярных выражениях:

**`*` (Звездочка)**: Соответствует предыдущему элементу ноль или более раз. Например, `a*` соответствует "", "a", "aa", "aaa", и так далее.

**`+` (Плюс)**: Соответствует предыдущему элементу один или более раз. Например, `a+` соответствует "a", "aa", "aaa", и так далее.

**`?` (Вопросительный знак)**: Соответствует предыдущему элементу ноль или один раз. Например, `a?` соответствует "" (пустой строке) или "a".

**`{n}`**: Соответствует ровно n раз предыдущему элементу. Например, `a{3}` соответствует "aaa".

**`{n,}`**: Соответствует предыдущему элементу n или более раз. Например, `a{2,}` соответствует "aa", "aaa", "aaaa", и так далее.

**`{n,m}`**: Соответствует предыдущему элементу от n до m раз. Например, `a{2,4}` соответствует "aa", "aaa", или "aaaa".

- **Ленивые квантификаторы**: Добавление `?` после квантификатора делает его "ленивым" (минимальным). Он будет соответствовать минимально возможному количеству символов. Например, `a+?` соответствует "a", даже если за ним следуют другие "a".

- **Жадные квантификаторы**: По умолчанию квантификаторы являются "жадными" и пытаются соответствовать максимально возможному количеству символов.

 - **Владеющие квантификаторы (ревнивые)**: Они похожи на жадные, но не позволяют откатываться. Они используются редко и могут привести к неожиданным результатам. Пример: `a++` соответствует максимально возможной последовательности "a", не позволяя откату.

### Группы в Регулярных Выражениях: Основы

#### Что такое Группы
Группы в регулярных выражениях — это способ объединить часть выражения так, чтобы оно рассматривалось как одно целое. Это делается с помощью круглых скобок `()`.

#### Зачем используются Группы
    - **Извлечение данных**: Группы позволяют извлекать части совпадения из строки.
    - **Переиспользование**: Внутри выражения можно обращаться к ранее определенной группе.
    - **Применение квантификаторов**: Квантификаторы (например, `+`, `*`) могут применяться ко всей группе символов.

#### Нумерация Групп
Каждая группа в регулярном выражении автоматически получает номер. Нумерация начинается с 1 и увеличивается слева направо по мере появления открывающих скобок. Группа с номером 0 всегда соответствует всему выражению.

### Типы Групп

1. **Захватывающие группы**: Это самый распространенный тип групп, обозначаемый круглыми скобками `()`. Текст, соответствующий части шаблона внутри скобок, можно извлечь после выполнения сопоставления.

```
Pattern pattern = Pattern.compile("(\\d{2})-(\\d{2})-(\\d{4})");
Matcher matcher = pattern.matcher("Дата: 15-03-2023");
if (matcher.find()) {
    System.out.println("День: " + matcher.group(1)); // 15
    System.out.println("Месяц: " + matcher.group(2)); // 03
    System.out.println("Год: " + matcher.group(3)); // 2023
}
```
В этом примере `(\\d{2})-(\\d{2})-(\\d{4})` разбивает дату на три группы, и каждая группа соответствует определенной части даты.

2. **Не захватывающие группы**: Обозначаются как `(?: ...)`. Они группируют часть шаблона, но текст, соответствующий этой части, не сохраняется для последующего извлечения.

```
Pattern pattern = Pattern.compile("(?:\\d{2})-(\\d{2})-(\\d{4})");
Matcher matcher = pattern.matcher("Дата: 15-03-2023");
if (matcher.find()) {
    System.out.println("Месяц: " + matcher.group(1)); // 03
    System.out.println("Год: " + matcher.group(2)); // 2023
}
```
Здесь `(?:\\d{2})` группирует первые две цифры, но они не сохраняются для последующего извлечения.

3. **Именованные группы**: Используются для присвоения имени определенной группе. Синтаксис для именованной группы: `(?<name>...)`, где `name` - это имя группы.

```
Pattern pattern = Pattern.compile("(?<day>\\d{2})-(?<month>\\d{2})-(?<year>\\d{4})");
Matcher matcher = pattern.matcher("Дата: 15-03-2023");
if (matcher.find()) {
    System.out.println("День: " + matcher.group("day")); // 15
    System.out.println("Месяц: " + matcher.group("month")); // 03
    System.out.println("Год: " + matcher.group("year")); // 2023
}
```
В этом примере каждая группа имеет свое имя, что упрощает извлечение данных.

4. **Условные группы**: Это группы, которые совпадают только при выполнении определенного условия.

Условные группы в Java менее распространены и сложны в использовании


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

### Quantifiers
Quantifiers in regular expressions are used to specify the number of times an element (a character, a group of characters, or a group) should occur. These quantifiers help make regular expressions flexible and powerful. Here are the main types of quantifiers in regular expressions:

**`*` (Asterisk)**: Matches the preceding element zero or more times. For example, `a*` matches "", "a", "aa", "aaa", etc.

**`+` (Plus)**: Matches the preceding element one or more times. For example, `a+` matches "a", "aa", "aaa", etc.

**`?` (Question Mark)**: Matches the preceding element zero or one time. For example, `a?` matches "" (empty string) or "a".

**`{n}`**: Matches the preceding element exactly n times. For example, `a{3}` matches "aaa".

**`{n,}`**: Matches the preceding element n or more times. For example, `a{2,}` matches "aa", "aaa", "aaaa", etc.

**`{n,m}`**: Matches the preceding element from n to m times. For example, `a{2,4}` matches "aa", "aaa", or "aaaa".

- **Lazy Quantifiers**: Adding `?` after a quantifier makes it "lazy" (minimal). It will match the minimum possible number of characters. For example, `a+?` matches "a", even if there are other "a"s following it.

- **Greedy Quantifiers**: By default, quantifiers are "greedy" and try to match as many characters as possible.

- **Possessive Quantifiers**: Similar to greedy ones, but they do not allow backtracking. They are rarely used and can lead to unexpected results. Example: `a++` matches the longest possible sequence of "a" without allowing for backtracking.

### Groups in Regular Expressions: Basics

#### What are Groups
Groups in regular expressions are a way to combine a part of the expression so that it is treated as a single unit. This is done using parentheses `()`.

#### Why Use Groups
- **Data Extraction**: Groups allow for the extraction of parts of a match from a string.
- **Reuse**: Inside the expression, you can refer back to a previously defined group.
- **Applying Quantifiers**: Quantifiers (e.g., `+`, `*`) can be applied to an entire group of characters.

#### Group Numbering
Each group in a regular expression automatically gets a number. The numbering starts at 1 and increases from left to right as opening brackets appear. Group number 0 always corresponds to the entire expression.

### Types of Groups

1. **Capturing Groups**: This is the most common type of group, denoted by parentheses `()`. The text that matches the part of the pattern inside the brackets can be extracted after the match.

```
Pattern pattern = Pattern.compile("(\\d{2})-(\\d{2})-(\\d{4})");
Matcher matcher = pattern.matcher("Date: 15-03-2023");
if (matcher.find()) {
    System.out.println("Day: " + matcher.group(1)); // 15
    System.out.println("Month: " + matcher.group(2)); // 03
    System.out.println("Year: " + matcher.group(3)); // 2023
}
```
In this example, `(\\d{2})-(\\d{2})-(\\d{4})` breaks down the date into three groups, each corresponding to a specific part of the date.

2. **Non-Capturing Groups**: Denoted as `(?: ...)`. They group a part of the pattern, but the text that matches this part is not saved for later extraction.

```
Pattern pattern = Pattern.compile("(?:\\d{2})-(\\d{2})-(\\d{4})");
Matcher matcher = pattern.matcher("Date: 15-03-2023");
if (matcher.find()) {
    System.out.println("Month: " + matcher.group(1)); // 03
    System.out.println("Year: " + matcher.group(2)); // 2023
}
```
Here `(?:\\d{2})` groups the first two digits, but they are not saved for later extraction.

3. **Named Groups**: Used to assign a name to a specific group. The syntax for a named group is `(?<name>...)`, where `name` is the name of the group.

```
Pattern pattern = Pattern.compile("(?<day>\\d{2})-(?<month>\\d{2})-(?<year>\\d{4})");
Matcher matcher = pattern.matcher("Date: 15-03-2023");
if (matcher.find()) {
    System.out.println("Day: " + matcher.group("
```
</details>