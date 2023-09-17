## Циклы
**Циклы** позволяют выполнить некий код несколько раз подряд
Каждый такой повтор называется **итерацией**

## Циклы "while" / "do ... while"
Цикл **while** выполняется до тех пор, пока заданное условие является верным (имеет значение **true**):

```
while (condition) {
    // body
    ...
}
```


**Предикат** — условие, которое указывается в скобках после ключевого слова while и вычисляется на каждой итерации

**Тело цикла** — блок кода в фигурных скобках, аналогичный блоку кода в методе. Все константы или переменные, определенные внутри этого блока, будут видны только внутри этого блока

Цикл while - цикл с предусловием

цикл do-while - цикл с постусловием

Цикл "do ... while" похож, но он всегда выполняет блок кода хотя бы один раз, независимо от того, истинно условие или ложно:

```
do {
    ...
    ...
} while (condition)
```


## Loops
**Loops** allow you to execute a certain piece of code multiple times in a row. Each repetition is referred to as an **iteration**.

## "while" / "do ... while" Loops
The **while** loop continues executing as long as the specified condition remains true (evaluates to **true**):

```
while (condition) {
    // code to be executed
}
```

**Predicate** - a condition specified within the parentheses after the **while** keyword, evaluated at each iteration.

**Loop Body** - a code block enclosed in curly braces, similar to a code block in a method. All constants or variables defined inside this block will only be visible within this block.


The `do ... while loop` is similar, but it always executes the code block at least once, regardless of whether the condition is true or false:

```
do {
    ...
    ...
} while (condition)
```
