<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Optional

Класс `Optional` в Java - это контейнерный класс, используемый для представления необязательных значений, которые могут быть `null`. Он был введен в Java 8 как часть java.util пакета и предлагает удобный способ работать с значениями, которые могут отсутствовать, без явного использования `null` проверок, что уменьшает возможность возникновения `NullPointerException`.

Вот основные характеристики и методы класса `Optional`:

### Создание объекта Optional

- `Optional.empty()`: возвращает пустой `Optional` объект.
- `Optional.of(value)`: возвращает `Optional` с не-null значением. Если значение `null`, то будет выброшено исключение `NullPointerException`.
- `Optional.ofNullable(value)`: возвращает `Optional`, который содержит значение, если оно не `null`, и пустой `Optional`, если значение `null`.

### Проверка наличия значения

- `isPresent()`: возвращает `true`, если значение присутствует в `Optional`.
- `isEmpty()`: возвращает `true`, если значение отсутствует в `Optional` (появился в Java 11).

### Получение значения

- `get()`: возвращает значение, если оно присутствует, иначе выбрасывает `NoSuchElementException`.
- `orElse(defaultValue)`: возвращает значение, если оно присутствует, иначе возвращает `defaultValue`.
- `orElseGet(supplier)`: возвращает значение, если оно присутствует, иначе вызывает функцию `supplier` для генерации значения по умолчанию.
- `orElseThrow(exceptionSupplier)`: возвращает значение, если оно присутствует, иначе выбрасывает исключение, созданное с помощью `exceptionSupplier`.

### Работа со значениями

- `ifPresent(consumer)`: выполняет действие `consumer`, если значение присутствует.
- `ifPresentOrElse(consumer, emptyAction)`: выполняет действие `consumer`, если значение присутствует, иначе выполняет `emptyAction` (добавлен в Java 9).
- `stream()`: если значение присутствует, возвращает поток с одним элементом, иначе возвращает пустой поток (добавлен в Java 9).
- `filter(predicate)`: если значение присутствует и удовлетворяет условию `predicate`, возвращает `Optional` этого значения, иначе возвращает пустой `Optional`.
- `map(function)`: если значение присутствует, применяет функцию `function` и возвращает `Optional` результата.
- `flatMap(function)`: если значение присутствует, применяет функцию `function`, которая сама возвращает `Optional`, и затем возвращает этот `Optional` напрямую, избегая дополнительной обертки `Optional<Optional<T>>`.

### Примеры использования

```
// Создание Optional объекта
Optional<String> optional = Optional.of("Hello");

// Использование map для преобразования содержимого, если оно присутствует
optional.map(String::toUpperCase).ifPresent(System.out::println); // Выведет "HELLO"

// Получение значения с альтернативой
String nullSafe = optional.orElse("Default Value");

// Использование orElseThrow для генерации исключения, если значение отсутствует
String value = optional.orElseThrow(IllegalStateException::new);

```

Использование класса `Optional` помогает писать более чистый код, уменьшая необходимость в проверках на `null` и явных `null` значениях. Это может привести к уменьшению ошибок, связанных с отсутствием значений, и улучшить читаемость кода.

Однако **следует избегать использования `Optional` для полей классов или в качестве аргументов методов**, так как это увеличивает сложность и не соответствует первоначальной цели класса `Optional`, которой является предоставление ясного и удобного способа работы с методами, которые могут возвращать `null`.

--- 

## Enums 

---

### Что такое Enums?
- Специальный тип данных, который позволяет переменной быть набором предварительно определенных значений.

**Основная цель Enums:**
- Обеспечивать типобезопасность и снижать количество ошибок.

---

### Основы Enums

#### Создание Enums:
```
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
}
```

#### Использование Enums:
```
Day today = Day.MONDAY;
switch(today) {
    case MONDAY:
        System.out.println("Today is Monday.");
        break;
    // ... другие дни
}
```

---

### Продвинутые возможности Enums

#### Конструкторы и методы:
```
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6);
    // ... другие планеты

    private final double mass;
    private final double radius;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double getMass() {
        return mass;
    }

    public double getRadius() {
        return radius;
    }
}
```

#### Встроенные методы:
- `values()`: Возвращает массив, содержащий список констант Enum.
- `valueOf(String name)`: Возвращает константу Enum с указанным именем.

#### Перечисление через цикл:
```
for (Day day : Day.values()) {
    System.out.println(day);
}
```

---

### Сравнение Enums

#### Сравнение с использованием `==` и `equals()`:
- Для сравнения двух значений Enum можно безопасно использовать оператор `==`.

#### Метод `ordinal()`:
- Возвращает порядковый номер константы (начиная с нуля).

---

### EnumSets и EnumMaps

#### EnumSet:
- Специализированный набор для работы с enums.
```
EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
```

#### EnumMap:
- Специализированная карта для ключей типа Enum.
```
EnumMap<Day, String> dayActivityMap = new EnumMap<>(Day.class);
dayActivityMap.put(Day.MONDAY, "Work");
```

---

### Преимущества использования Enums:
- Типобезопасность.
- Читаемость кода.
- Возможность группировки связанных констант.


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Optional

The `Optional` class in Java is a container class used for encapsulating optional values that can be `null`. It was introduced in Java 8 as part of the java.util package and offers a convenient way of working with potentially absent values without the explicit use of `null` checks, thereby reducing the possibility of encountering `NullPointerException`.

Here are the main characteristics and methods of the `Optional` class:

### Creating an Optional Object

- `Optional.empty()`: returns an empty `Optional` object.
- `Optional.of(value)`: returns an `Optional` with a non-null value. If the value is `null`, a `NullPointerException` is thrown.
- `Optional.ofNullable(value)`: returns an `Optional` that contains a value if it is not `null`, and an empty `Optional` if the value is `null`.

### Checking for Value Presence

- `isPresent()`: returns `true` if there is a value present in the `Optional`.
- `isEmpty()`: returns `true` if a value is absent in the `Optional` (introduced in Java 11).

### Retrieving the Value

- `get()`: returns the value if it is present, otherwise throws `NoSuchElementException`.
- `orElse(defaultValue)`: returns the value if it is present, otherwise returns `defaultValue`.
- `orElseGet(supplier)`: returns the value if it is present, otherwise calls a `supplier` function to generate a default value.
- `orElseThrow(exceptionSupplier)`: returns the value if it is present, otherwise throws an exception created by the `exceptionSupplier`.

### Working with Values

- `ifPresent(consumer)`: performs the `consumer` action if the value is present.
- `ifPresentOrElse(consumer, emptyAction)`: performs the `consumer` action if the value is present, otherwise performs the `emptyAction` (added in Java 9).
- `stream()`: if the value is present, returns a stream with one element, otherwise returns an empty stream (added in Java 9).
- `filter(predicate)`: if a value is present and matches the `predicate`, returns an `Optional` of that value, otherwise returns an empty `Optional`.
- `map(function)`: if a value is present, applies the `function` and returns an `Optional` of the result.
- `flatMap(function)`: if a value is present, applies the `function` that itself returns an `Optional`, and then returns that `Optional` directly, avoiding an additional `Optional<Optional<T>>` wrapper.

### Usage Examples

```
// Creating an Optional object
Optional<String> optional = Optional.of("Hello");

// Using map to transform the content if present
optional.map(String::toUpperCase).ifPresent(System.out::println); // Will print "HELLO"

// Retrieving the value with an alternative
String nullSafe = optional.orElse("Default Value");

// Using orElseThrow to generate an exception if the value is absent
String value = optional.orElseThrow(IllegalStateException::new);
```

Using the `Optional` class helps in writing cleaner code by reducing the necessity for `null` checks and explicit `null` values. This can lead to fewer errors related to the absence of values and improve code readability.

However, **it is advisable to avoid using `Optional` for class fields or as method arguments**, as this increases complexity and does not align with the original intent of the `Optional` class, which is to provide a clear and convenient way of dealing with methods that may return `null`.

## Enums in Java

---

### What are Enums?
- A special data type that enables a variable to be a set of predefined constants.

**The main goal of Enums:**
- To provide type safety and reduce the number of errors.

---

### Basics of Enums

#### Creating Enums:
```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
}
```

#### Using Enums:
```java
Day today = Day.MONDAY;
switch(today) {
    case MONDAY:
        System.out.println("Today is Monday.");
        break;
    // ... other days
}
```

---

### Advanced Features of Enums

#### Constructors and Methods:

```
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6);
    // ... other planets

    private final double mass;
    private final double radius;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double getMass() {
        return mass;
    }

    public double getRadius() {
        return radius;
    }
}
```

#### Built-in Methods:
- `values()`: Returns an array containing a list of the Enum constants.
- `valueOf(String name)`: Returns the Enum constant with the specified name.

#### Iterating Through Enums:
```
for (Day day : Day.values()) {
    System.out.println(day);
}
```

---

### Comparing Enums

#### Comparison Using `==` and `equals()`:
- You can safely use the `==` operator to compare two Enum values.

#### The `ordinal()` Method:
- Returns the ordinal number of the constant (starting with zero).

---

### EnumSets and EnumMaps

#### EnumSet:
- A specialized set designed for use with Enums.
```
EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
```

#### EnumMap:
- A specialized map for keys of the Enum type.
```
EnumMap<Day, String> dayActivityMap = new EnumMap<>(Day.class);
dayActivityMap.put(Day.MONDAY, "Work");
```

---

### Advantages of Using Enums:
- Type safety.
- Code readability.
- The ability to group related constants.

</details>