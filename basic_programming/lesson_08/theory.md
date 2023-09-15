HW07_Task_00Оператор выбора **switch** позволяет сравнивать переменную как с одним, так и с несколькими значениями. Общая форма написания выглядит следующим образом:



```
switch(ВыражениеДляВыбора) {
    case значение1:
        // Блок кода 1
        break;
    case значение2:
        // Блок кода 2
        break;
    case значениеN:
        // Блок кода N
        break;
    default :
        // Блок кода для default
}
```

Тип ВыражениеДляВыбора для оператора выбора switch в Java должен быть одним из следующих:

- byte, short, char, int.
- Их обёртки Byte, Short, Character, Integer.
- String (начиная с Java 7).
- Перечисление (Enum).


The `switch` selection statement allows you to compare a variable against both single and multiple values. The general writing form looks as follows:

```
switch(ExpressionToSelect) {
    case value1:
        // Code Block 1
        break;
    case value2:
        // Code Block 2
        break;
    case valueN:
        // Code Block N
        break;
    default:
        // Code Block for default
}

```

The type of `ExpressionToSelect` for the switch statement in Java must be one of the following:

- `byte`, `short`, `char`, `int`.
- Their wrappers: `Byte`, `Short`, `Character`, `Integer`.
- `String` (starting from Java 7).
- Enum.


![Stack&Heap](https://raw.githubusercontent.com/ait-tr/cohort35/main/basic_programming/lesson_08/img/switch.jpeg)