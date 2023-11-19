<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

Функциональные интерфейсы `Function`, `Predicate` и `Consumer` являются частью Java Lambda Expressions, введенных в Java 8. Они играют ключевую роль в функциональном программировании в Java, предоставляя удобные способы обработки данных с помощью лямбда-выражений и методов, которые принимают функциональные интерфейсы в качестве параметров.

### Function<T, R>

Интерфейс `Function<T, R>` предназначен для операций, которые принимают один входной параметр типа `T` и возвращают результат типа `R`. Этот интерфейс имеет один абстрактный метод `apply`.

#### Метод `apply`:
- **Сигнатура**: `R apply(T t)`
- **Описание**: Принимает объект типа `T` и возвращает объект типа `R`.

#### Пример использования `Function`:

```
Function<String, Integer> lengthFunction = str -> str.length();
int length = lengthFunction.apply("Hello, World!"); // Возвращает длину строки
```

### Consumer<T>

Интерфейс `Consumer<T>` предназначен для операций, которые выполняют действие над объектом типа `T`, но не возвращают никакого результата (void). Он содержит один абстрактный метод `accept`.

#### Метод `accept`:
- **Сигнатура**: `void accept(T t)`
- **Описание**: Выполняет операцию над объектом типа `T`.

#### Пример использования `Consumer`:

```
Consumer<String> printConsumer = System.out::println;
printConsumer.accept("Hello, World!"); // Печатает строку в консоль
```


### Predicate<T>

`Predicate<T>` предназначен для представления простых функций, которые принимают один аргумент типа `T` и возвращают логическое значение (`boolean`). Этот интерфейс особенно полезен для фильтрации или проверки соответствия элементов определенным условиям.

#### Методы интерфейса `Predicate`:

- **`test(T t)`**: Это основной метод интерфейса. Он оценивает условие на предоставленном объекте и возвращает `true` или `false`.

- **`and(Predicate<? super T> other)`**: Возвращает составной предикат, который является логическим "И" (`AND`) этого предиката и предиката `other`.

- **`or(Predicate<? super T> other)`**: Возвращает составной предикат, который является логическим "ИЛИ" (`OR`) этого предиката и предиката `other`.

- **`negate()`**: Возвращает предикат, который является логическим отрицанием (`NOT`) этого предиката.

#### Пример использования `Predicate`:

```
Predicate<String> isNotEmpty = s -> !s.isEmpty();
boolean result = isNotEmpty.test("Hello, World!"); // Возвращает true
```

`Predicate`, так же как и `Function` и `Consumer`, является ключевым элементом функционального программирования в Java и играет важную роль в работе со стримами и коллекциями, где часто требуются операции фильтрации, сопоставления или условной логики.

### Комбинирование функциональных интерфейсов

Функциональные интерфейсы также предоставляют методы по умолчанию, такие как `andThen` и `compose` для `Function`, которые позволяют комбинировать несколько функций в цепочку. Например:

```
Function<String, String> toUpperCase = String::toUpperCase;
Function<String, String> concatenateExclamation = str -> str + "!";
Function<String, String> combinedFunction = toUpperCase.andThen(concatenateExclamation);

String result = combinedFunction.apply("hello"); // "HELLO!"
```

Точно так же, вы можете использовать метод `andThen` с интерфейсом `Consumer` для создания цепочек потребителей.

---

## Builder 

Паттерн "Строитель" (Builder) — это **порождающий паттерн проектирования**, который используется для создания сложных объектов с множеством параметров. Особенно он полезен, когда объект должен быть создан пошагово, или когда множество параметров объекта делает его конструктор слишком громоздким или нечитаемым.

Основные преимущества использования паттерна Builder:
1. **Повышение читаемости кода**: Когда создается объект с множеством параметров, использование паттерна Builder делает код более понятным.
2. **Гибкость**: Можно создавать различные представления объекта, используя один и тот же процесс построения.
3. **Изоляция сложности**: Клиентский код может строить сложные объекты, не зная о тонкостях их реализации.

### Реализация в Java:

В Java паттерн Builder обычно реализуется следующим образом:

1. **Определение класса Builder**: Создается внутренний статический класс Builder внутри класса продукта, который содержит методы для установки различных параметров продукта.

2. **Методы для установки параметров**: Каждый метод в классе Builder возвращает экземпляр Builder, что позволяет использовать цепочки вызовов (chaining).

3. **Метод `build`**: В конце класс Builder содержит метод `build`, который возвращает итоговый объект продукта.



</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

Functional interfaces `Function`, `Predicate`, and `Consumer` are part of Java Lambda Expressions, introduced in Java 8. They play a key role in functional programming in Java, offering convenient ways to process data using lambda expressions and methods that take functional interfaces as parameters.

### Function<T, R>

The `Function<T, R>` interface is intended for operations that take one input parameter of type `T` and return a result of type `R`. This interface has a single abstract method `apply`.

#### `apply` Method:
- **Signature**: `R apply(T t)`
- **Description**: Takes an object of type `T` and returns an object of type `R`.

#### Example of using `Function`:

```java
Function<String, Integer> lengthFunction = str -> str.length();
int length = lengthFunction.apply("Hello, World!"); // Returns the length of the string
```

### Consumer<T>

The `Consumer<T>` interface is intended for operations that perform an action on an object of type `T` but do not return any result (void). It contains one abstract method `accept`.

#### `accept` Method:
- **Signature**: `void accept(T t)`
- **Description**: Performs an operation on an object of type `T`.

#### Example of using `Consumer`:

```java
Consumer<String> printConsumer = System.out::println;
printConsumer.accept("Hello, World!"); // Prints the string to the console
```

### Predicate<T>

`Predicate<T>` is intended to represent simple functions that take a single argument of type `T` and return a boolean value. This interface is particularly useful for filtering or checking if elements meet certain conditions.

#### Methods of the `Predicate` Interface:

- **`test(T t)`**: This is the primary method of the interface. It evaluates the condition on the provided object and returns `true` or `false`.

- **`and(Predicate<? super T> other)`**: Returns a composite predicate that represents the logical "AND" of this predicate and another predicate `other`.

- **`or(Predicate<? super T> other)`**: Returns a composite predicate that represents the logical "OR" of this predicate and another predicate `other`.

- **`negate()`**: Returns a predicate that is the logical negation ("NOT") of this predicate.

#### Example of using `Predicate`:

```
Predicate<String> isNotEmpty = s -> !s.isEmpty();
boolean result = isNotEmpty.test("Hello, World!"); // Returns true
```

`Predicate`, along with `Function` and `Consumer`, is a key element of functional programming in Java and plays an important role in working with streams and collections, where operations like filtering, mapping, or conditional logic are often required.

### Combining Functional Interfaces

Functional interfaces also provide default methods like `andThen` and `compose` for `Function`, which allow combining multiple functions into a chain. For example:

```
Function<String, String> toUpperCase = String::toUpperCase;
Function<String, String> concatenateExclamation = str -> str + "!";
Function<String, String> combinedFunction = toUpperCase.andThen(concatenateExclamation);

String result = combinedFunction.apply("hello"); // "HELLO!"
```

Similarly, you can use the `andThen` method with the `Consumer` interface to create chains of consumers.

---

## Builder pattern

The "Builder" pattern is a creational design pattern used to construct complex objects with multiple parameters. It is particularly useful when an object needs to be created step by step, or when the multitude of an object's parameters makes its constructor too cumbersome or unreadable.

Key Advantages of Using the Builder Pattern:
1. **Improved Code Readability**: When creating an object with many parameters, using the Builder pattern makes the code more understandable.
2. **Flexibility**: Different representations of an object can be created using the same construction process.
3. **Complexity Isolation**: Client code can build complex objects without knowing the details of their implementation.

### Implementation in Java:

In Java, the Builder pattern is usually implemented as follows:

1. **Defining the Builder Class**: An inner static Builder class is created inside the product class, which contains methods for setting various product parameters.

2. **Parameter Setting Methods**: Each method in the Builder class returns an instance of the Builder, allowing for the use of method chaining.

3. **The `build` Method**: The Builder class concludes with a `build` method that returns the final product object.


</details>