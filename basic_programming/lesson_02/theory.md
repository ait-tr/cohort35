# Lesson 02

## 01. Среда разработки IntelliJ IDEA
Что такое IntelliJ IDEA?
IntelliJ IDEA — ведущая IDE для разработки на Java и Kotlin.
Она помогает работать продуктивнее за счет интеллектуальной помощи в написании кода, надежных рефакторингов, быстрой навигации по коду, широкого набора встроенных инструментов разработчика, поддержки веб- и корпоративной разработки и многих других полезных возможностей.

## 01 ENG. IntelliJ IDEA Development Environment
What is IntelliJ IDEA?
IntelliJ IDEA is the leading IDE for Java and Kotlin development.
It helps improve productivity through intelligent code assistance, reliable refactoring, quick code navigation, a wide array of built-in developer tools, support for web and enterprise development, and many other useful features.


[Возможности IntelliJ IDEA / IntelliJ IDEA Features](https://www.jetbrains.com/ru-ru/idea/features/ "IntelliJ IDEA features")

**Большой выбор инструментов для работы с кодом**
Хотя среда изначально создавалась для максимальной оптимизации Java-разработки, сейчас в ней есть опции для работы с большинством востребованных языков программирования, причем некоторые из инструментов используют технологию машинного обучения.
IDE предоставляет интеллектуальную помощь во время написания кода:

- выполняет глубокий анализ и создает виртуальную карту проекта; 
- обнаруживает ошибки и предлагает варианты исправления; 
- автоматически дополняет код, учитывая контекст; 
- проводит валидацию (проверку на соответствие стандартам) кода; 
- выполняет рефакторинг кода — делает его проще и понятнее; 
- поддерживает работу со вставками, написанными на других языках программирования; 
- позволяет использовать шаблоны для вставки повторяющихся фрагментов кода; 
- предлагает оптимизацию с помощью профилировщика — инструмента, который анализирует производительность кода и оценивает нагрузку на процессор и оперативную память.


**A Wide Range of Tools for Code Work**
While the environment was initially created to optimize Java development, it now includes options for working with most in-demand programming languages, and some of the tools even utilize machine learning technology.
The IDE provides intelligent assistance while coding:

- It performs deep analysis and creates a virtual project map.
- It detects errors and suggests correction options.
- It automatically completes code based on context.
- It validates (checks for compliance with standards) the code.
- It performs code refactoring to make it simpler and more understandable.
- It supports working with code snippets written in other programming languages.
- It enables the use of templates for inserting repetitive code fragments.
- It offers optimization suggestions using a profiler—an instrument that analyzes code performance and assesses CPU and memory load.


[Сайт / website JetBrains](https://www.jetbrains.com/ "JetBrains web site")

Страница для скачивания / Download Page [IntelliJ IDEA](https://www.jetbrains.com/idea/download/?section=windows "Download page")

## 02. Переменные, типы данных в Java
Переменная в Java — это контейнер,  в котором может храниться некоторое значение данных для дальнейшего использования в программе.

Одной из основных особенностей Java является то, что данный язык является строго типизированным. А это значит, что каждая переменная и константа представляет определенный тип и данный тип строго определен. Тип данных определяет диапазон значений, которые может хранить переменная или константа.

В языке Java существует примитивные (простые / примитивы) и ссылочные типы данных. Примитивные для маленьких данных (простых) и для более сложных, тяжелых - ссылочные переменные.
В Java существует 8 примитивных типов данных, которые можно разделить на 4 группы:
1. Целочисленные - к ним относятся **byte, short, int, long** 
2. Вещественные (с плавающей точкой) -к ним относятся **float, double**
3. Символы (**char**)
4. Логические (**boolean**)

Есть еще один тип данных - **String**. Это ссылочный тип и предназначен он для работы со строками. Видимо, это очень уважаемый тип данных. Его имя пишется с большой, и только большой, буквы. А может быть причина в другом?

## 02 ENG. Variables and Data Types in Java

A variable in Java is a container that can hold a value for later use in the program.

One of the key features of Java is that it is strongly typed. This means that each variable and constant represents a specific type, and that type is strictly defined. The data type defines the range of values that a variable or constant can hold.

In Java, there are primitive and reference data types. Primitive types are used for smaller, simpler data, while reference variables are used for more complex and heavy data.
There are 8 primitive data types in Java, which can be divided into 4 groups:
1. Integral types - including **byte, short, int, long**
2. Floating-point types - including **float, double**
3. Characters (**char**)
4. Booleans (**boolean**)

There is one more data type - **String**. It is a reference type and is designed for working with strings. Perhaps it's a very respected data type. Its name is written with a capital letter, only a capital letter. Or maybe there's another reason?

___
## 03. Naming переменных
В Java очень важно правильно оформлять код. Да-да, не только писать работающие программы, но  ещё и правильно оформленные. Существует целый свод правил, который называется Code Conventions в Java. Так что можете смело искать, скачивать и постепенно изучать. А сейчас мы рассмотрим только часть Code Conventions, а именно правила написания названий переменных. Итак, запоминаем:
- Переменные пишутся только латинскими буквами. Никакой кириллицы!!!
- Имя переменной, по возможности, должно быть "говорящим"
- С чего может/не может начинаться имя переменной:
Может начинаться с :
  - любых латинских букв
  - $ или _

- Не может начинаться с:
  - цифр
- Название переменной, состоящее из 2 и более слов, пишется в CamelCase 
- Нельзя использовать в названиях переменных 54 зарезервированных слова

Зарезервированные слова в Java:
abstract, assert, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, enum, extends, false, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, null, package, private, protected, public, return, short, static, strictfp, String, super, switch, synchronized, this, throw, throws, transient, true, try, void, volatile, while

Как же начать использовать переменные?
```
тип_переменной	имя_переменной;
```


## 03 ENG. Naming Variables

In Java, it's crucial to format your code correctly. Yes, not only writing functional programs, but also well-formatted ones. There's a whole set of rules known as Code Conventions in Java. So, feel free to search, download, and gradually learn. For now, let's focus on a part of the Code Conventions, specifically the rules for naming variables. Let's remember:
- Variables are written only in Latin letters. No Cyrillic!!!
- The variable name, whenever possible, should be "meaningful".
- Starting characters for variable names:
  Can start with:
  - Any Latin letters
  - $ or _

- Cannot start with:
  - Digits
- Variable names consisting of 2 or more words are written in CamelCase.
- You cannot use any of the 54 reserved words in variable names.

Reserved words in Java:
abstract, assert, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, enum, extends, false, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, null, package, private, protected, public, return, short, static, strictfp, String, super, switch, synchronized, this, throw, throws, transient, true, try, void, volatile, while

So, how do you start using variables?

```
variable_type variable_name;
```
