## 01. Условные операторы
**Блок**

Перед изучением управляющих структур (условных операторов, операторов ветвления) нам необходимо узнать о блоках.

**Блок**, или составной оператор, — это произвольное количество простых операторов языка Java, заключенных в фигурные скобки **{}**.
Блоки определяют область видимости своих переменных. Блоки могут быть вложенными один в другой

От программ было бы мало толку, если бы они делали одно и то же, независимо от того, как меняются внешние обстоятельства. Программе нужно уметь подстраиваться под разные ситуации

Условный **оператор if** позволяет выборочно выполнять отдельные части программы (блок кода). Условные операторы часто называют операторами принятия решения или операторами ветвления

```
if (условие) оператор;
```

```
if (условие) оператор;
else оператор;
```

```
if (условие) {блок кода}
else {блок кода}
```

## 01. Conditional Statements
**Block**

Before we delve into control structures (conditional statements, branching statements), it's essential to understand blocks.

A **block**, or a compound statement, consists of an arbitrary number of simple Java language statements enclosed in curly braces **{}**.
Blocks determine the scope of their variables. Blocks can be nested within each other.

Programs would be of little use if they performed the same actions regardless of changing external circumstances. Programs need to be capable of adapting to various situations.

The **if statement** enables the selective execution of distinct parts of the program (code block). Conditional statements are often referred to as decision-making statements or branching statements.


```if (condition) statement;```

```
if (condition) statement;
else statement;
```

```
if (condition) {
    // code block
  }
  else {
    // code block
  }
```



## Тернарный оператор
Тернарный оператор
Это альтернатива условному оператору if-else, который нам уже знаком.
Как правило, используется в ситуациях “одно условие — два возможных результата”

```
условие ? выражение1 : выражение2
```

```
System.out.println((x == 10) ? "x = 10" : "x != 10");jljjhjlljpjljlkkjklj8klikkkyulou0.
```


## Ternary Operator
The ternary operator provides an alternative to the if-else conditional statement that we are already familiar with. It is typically used in situations where there is "one condition - two possible outcomes."

```
condition ? expression1 : expression2
```

```
System.out.println((x == 10) ? "x = 10" : "x != 10");jljjhjlljpjljlkkjklj8klikkkyulou0.
```

![Stack&Heap](https://raw.githubusercontent.com/ait-tr/cohort35/main/basic_programming/lesson_07/img/Stack_Heap.jpeg)