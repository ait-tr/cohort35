<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Wrappers

Классы-обертки в Java используются для представления примитивных типов данных как объектов. Примитивные типы данных в Java, такие как `int`, `char` и `double`, не являются объектами. Однако иногда требуется работать с примитивами как с объектами, например, при добавлении их в коллекции или при использовании методов, ожидающих объекты.

Вот список классов-оберток для примитивных типов:

1. `Byte` - обертка для `byte`
2. `Short` - обертка для `short`
3. `Integer` - обертка для `int`
4. `Long` - обертка для `long`
5. `Float` - обертка для `float`
6. `Double` - обертка для `double`
7. `Character` - обертка для `char`
8. `Boolean` - обертка для `boolean`

Основные причины использования классов-оберток:

1. **Добавление в коллекции**: Примитивы напрямую не могут быть добавлены в коллекции, такие как `ArrayList`. С помощью классов-оберток их можно добавить как объекты.

2. **Методы и константы**: Классы-обертки предоставляют ряд полезных методов и констант для работы с соответствующими примитивами. Например, `Integer` предоставляет метод `parseInt` для преобразования строки в целое число.

3. **Поддержка `null`**: Примитивные типы не могут принимать значение `null`, в то время как их обертки могут. Это может быть полезно в некоторых случаях, чтобы отличить "отсутствующее" значение от любого конкретного значения примитива.

4. **Приведение типов**: Автоупаковка и автораспаковка в Java позволяют автоматически конвертировать примитивы в их обертки и наоборот.

Пример автоупаковки и автораспаковки:

```
Integer wrappedInt = 5;  // автоупаковка
int primitiveInt = wrappedInt;  // автораспаковка
```

Однако следует быть осторожным при работе с классами-обертками из-за возможных проблем с производительностью и неожиданным поведением, связанным с автоупаковкой и автораспаковкой.



Особенности работы с классами-обертками, связанные с автоупаковкой и автораспаковкой, могут проявляться в следующих условиях:

1. **Сравнение объектов с использованием `==`**: При использовании оператора `==` для сравнения двух объектов классов-оберток, сравниваются их ссылки, а не их значения. Это может привести к неожиданным результатам, особенно когда используется автоупаковка.

   ```
   Integer a = 127;
   Integer b = 127;
   System.out.println(a == b); // true

   Integer c = 128;
   Integer d = 128;
   System.out.println(c == d); // false
   ```

   В приведенном выше примере для значений от -128 до 127 используются кешированные объекты, поэтому `a` и `b` ссылаются на один и тот же объект. Однако для значений вне этого диапазона создаются новые объекты, и `c` и `d` являются разными объектами.

2. **Производительность**: Автоупаковка и автораспаковка добавляют накладные расходы, так как каждый раз создается новый объект. В циклах или интенсивных вычислениях это может существенно снизить производительность.

Общие (или схожие) методы, которыми обладают классы-обертки:

1. **`valueOf()`**: Преобразует данный тип (обычно строку или примитив) в соответствующий объект класса-обертки.

2. **`parseXxx()`**: Преобразует строку в соответствующий примитивный тип. Например, `Integer.parseInt()` или `Double.parseDouble()`.

3. **`toString()`**: Возвращает строковое представление значения объекта.

4. **`equals(Object obj)`**: Сравнивает текущий объект с указанным объектом на равенство.

5. **`compareTo()`**: Сравнивает текущий объект с другим объектом того же типа.

6. **`XxxValue()`**: Возвращает значение объекта как примитивный тип. Например, `intValue()` для `Integer` или `doubleValue()` для `Double`.

Это общие методы, но стоит отметить, что у каждого класса-обертки могут быть и свои уникальные методы, связанные с особенностями данного примитивного типа.
Все числовые обертки над примитивами в Java наследуются от абстрактного класса `Number`. Это включает в себя следующие классы:

- `Byte`
- `Short`
- `Integer`
- `Long`
- `Float`
- `Double`

Эти классы обладают методами, унаследованными от `Number`, которые позволяют извлекать значение объекта в различных примитивных форматах. К таким методам относятся:

- `byteValue()`
- `shortValue()`
- `intValue()`
- `longValue()`
- `floatValue()`
- `doubleValue()`

Таким образом, вы можете создать объект, например, `Integer`, и затем извлечь его значение в любом другом примитивном числовом формате с помощью соответствующего метода.

## Двусвязные списки

Представьте себе поезд, где каждый вагон — это элемент списка. Каждый вагон связан с предыдущим и следующим вагоном. В каждом вагоне есть:

- Место для хранения пассажира (данные элемента).
- Дверь, ведущая к предыдущему вагону.
- Дверь, ведущая к следующему вагону.

Первый вагон (головной элемент списка) имеет дверь, ведущую только вперед, а последний вагон (хвостовой элемент списка) — только назад.

### Отличие от массива

- **Массивы** — это непрерывные блоки памяти, где каждый элемент располагается рядом с другим. Если вы хотите добавить или удалить элемент из середины массива, вам придется "перемещать" все последующие элементы.

- **Связные списки** не требуют непрерывного блока памяти. Элементы могут быть разбросаны по разным участкам памяти, но связаны между собой указателями (в нашей аналогии — дверьми между вагонами). Это делает вставку или удаление элемента из середины списка более быстрой операцией по сравнению с массивами.

### Преимущества и недостатки


- **Преимущества:**
    - Динамический размер (не требует предварительного объявления размера, как массив).
    - Быстрая вставка или удаление из середины списка (в отличие от массивов).

- **Недостатки:**
    - Занимают больше памяти из-за хранения дополнительных указателей на предыдущий и следующий элементы.
    - Последовательный доступ к элементам (для доступа к элементу необходимо пройти через все предыдущие элементы).
    - Нет прямого доступа к произвольному элементу (как в массиве).

 
**Двусвязные списки — это лишь одна из структур данных**, и в разных задачах может потребоваться использование разных структур. Но понимание основ работы со списками даст вам хорошую основу для изучения других структур данных и алгоритмов


### Практическое упражнение
**Задача:** Создать базовую реализацию двусвязного списка для понимания его внутреннего устройства и методов работы.

- Задача минимум: Реализовать следующие методы:
  - `add(T value)` - добавить элемент в конец списка.
  - `add(int index, T value)` - добавить элемент в указанную позицию.
  - `remove(int index)` - удалить элемент из указанной позиции.
  - `get(int index)` - получить элемент из указанной позиции.
  - `size()` - получить количество элементов в списке.
  - `isEmpty()` - проверить, пуст ли список.
  - `clear()` - очистить список.



</details>

<hr>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Wrappers

Wrapper classes in Java are used to represent primitive data types as objects. Primitive data types in Java, such as `int`, `char`, and `double`, are not objects. However, there are times when you need to treat primitives as objects, for instance when adding them to collections or when using methods that expect objects.

Here's a list of wrapper classes for primitive types:

1. `Byte` - wrapper for `byte`
2. `Short` - wrapper for `short`
3. `Integer` - wrapper for `int`
4. `Long` - wrapper for `long`
5. `Float` - wrapper for `float`
6. `Double` - wrapper for `double`
7. `Character` - wrapper for `char`
8. `Boolean` - wrapper for `boolean`

Main reasons for using wrapper classes:

1. **Adding to Collections**: Primitives can't be added directly to collections, like `ArrayList`. With wrapper classes, they can be added as objects.

2. **Methods and Constants**: Wrapper classes offer a range of useful methods and constants to work with their respective primitives. For instance, `Integer` offers the `parseInt` method to convert a string into an integer.

3. **Support for `null`**: Primitive types can't take a `null` value, while their wrappers can. This can be helpful in certain scenarios to distinguish a "missing" value from any specific primitive value.

4. **Type Casting**: Autoboxing and unboxing in Java allows primitives to be automatically converted to their wrappers and vice versa.

Example of autoboxing and unboxing:

```
Integer wrappedInt = 5;  // autoboxing
int primitiveInt = wrappedInt;  // unboxing
```

However, care should be taken when working with wrapper classes due to possible performance issues and unexpected behavior related to autoboxing and unboxing.

Particularities of working with wrapper classes related to autoboxing and unboxing can manifest under the following conditions:

1. **Object comparison using `==`**: When using the `==` operator to compare two wrapper class objects, their references are compared, not their values. This can lead to unexpected results, especially when autoboxing is involved.

   ```
   Integer a = 127;
   Integer b = 127;
   System.out.println(a == b); // true

   Integer c = 128;
   Integer d = 128;
   System.out.println(c == d); // false
   ```

In the example above, for values from -128 to 127, cached objects are used, so `a` and `b` refer to the same object. However, for values outside this range, new objects are created, and `c` and `d` are different objects.

Here's the translation:

2. **Performance**: Autoboxing and unboxing introduce overhead since a new object is created every time. In loops or intensive computations, this can significantly degrade performance.

Common (or similar) methods that wrapper classes possess:

1. **`valueOf()`**: Converts the given type (usually a string or primitive) into the corresponding wrapper class object.

2. **`parseXxx()`**: Converts a string into the corresponding primitive type. For instance, `Integer.parseInt()` or `Double.parseDouble()`.

3. **`toString()`**: Returns the string representation of the object's value.

4. **`equals(Object obj)`**: Compares the current object with the specified object for equality.

5. **`compareTo()`**: Compares the current object with another object of the same type.

6. **`XxxValue()`**: Returns the object's value as a primitive type. For instance, `intValue()` for `Integer` or `doubleValue()` for `Double`.

These are general methods, but it's worth noting that each wrapper class may also have its own unique methods related to the specifics of its primitive type.
All numeric wrappers over primitives in Java inherit from the abstract class `Number`. This includes the following classes:

- `Byte`
- `Short`
- `Integer`
- `Long`
- `Float`
- `Double`

These classes possess methods inherited from `Number` that allow extracting the object's value in various primitive formats. Such methods include:

- `byteValue()`
- `shortValue()`
- `intValue()`
- `longValue()`
- `floatValue()`
- `doubleValue()`

Thus, you can create an object, for instance, `Integer`, and then extract its value in any other primitive numeric format using the respective method.

## Doubly Linked Lists

Imagine a train where each carriage is an element of the list. Each carriage is connected to the previous and next one. In each carriage there is:

- A place to store a passenger (the element's data).
- A door leading to the previous carriage.
- A door leading to the next carriage.

The first carriage (head of the list) has a door only leading forward, while the last carriage (tail of the list) only leads backward.

### Difference from an array

- **Arrays** are continuous memory blocks where each element is next to the other. If you want to add or remove an element from the middle of the array, you'll need to "move" all the subsequent elements.

- **Linked Lists** don't require a continuous block of memory. Elements can be scattered throughout different memory areas but are connected via pointers (in our analogy - doors between carriages). This makes inserting or deleting an element from the middle of the list a faster operation compared to arrays.

### Pros and Cons

- **Pros:**
    - Dynamic size (doesn't require size declaration upfront as arrays do).
    - Quick insertion or removal from the middle of the list (unlike arrays).

- **Cons:**
    - Consumes more memory because of the storage of additional pointers to previous and next elements.
    - Sequential access to elements (to access an element, you have to go through all previous elements).
    - No direct access to a random element (as in arrays).

**Doubly Linked Lists are just one of the data structures,** and different tasks may require using different structures. But understanding the basics of working with lists will give you a solid foundation for studying other data structures and algorithms.

### Practical Exercise
**Task:** Create a basic implementation of a doubly-linked list to understand its internal structure and working methods.

- Minimum task requirements: Implement the following methods:
    - `add(T value)` - add an element to the end of the list.
    - `add(int index, T value)` - add an element to the specified position.
    - `remove(int index)` - delete an element from the specified position.
    - `get(int index)` - retrieve an element from the specified position.
    - `size()` - get the number of elements in the list.
    - `isEmpty()` - check if the list is empty.
    - `clear()` - clear the list.

</details>