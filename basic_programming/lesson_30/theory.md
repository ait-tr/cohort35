<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Обобщения (Generics)
Дженерики (обобщения) — это особые средства языка Java для реализации обобщённого программирования: особого подхода к описанию данных и алгоритмов, позволяющего работать с различными типами данных без изменения их описания.
На сайте Oracle дженерикам посвящён отдельный tutorial: [Oracle](https://docs.oracle.com/javase/tutorial/java/generics/index.html "Generics tutorial")

Обобщения или generics (обобщенные типы и методы) позволяют нам уйти от жесткого определения используемых типов.

Дженерики позволяют создавать классы, интерфейсы и методы, работающие с разными типами данных.

 - Обобщенные классы.
Пример: class Box<T> { private T content; ... }
- Обобщенные интерфейсы.
Пример: interface List<T> { void add(T item); T get(int index); }
- Обобщенные методы.
```
    public <T> void printArray(T[] array) {
    for (T item : array) {
    System.out.println(item);
    }
    }
```

- Параметризация типами

```
public class GenericBox<T> {}
...
GenericBox<Integer> integerBox = new GenericBox<>;

```

При создании объекта класса после имени класса в угловых скобках нужно указать, какой именно тип будет использоваться вместо универсального параметра.
При этом надо учитывать, что они **работают только с объектами**, но не работают с примитивными типами.
То есть мы можем написать <Integer>, но не можем использовать тип int или double.
Вместо примитивных типов надо использовать классы-обертки: Integer вместо int, Double вместо double и т.д.


### Ограничения дженериков:

- Использование extends для ограничения типов.
Пример: `class NumericBox<T extends Number> { ... }`

- Использование super для ограничения типов.
Применяется в основном с `wildcards`.
Wildcards: ?, `? extends T`, `? super T`.

Пример: 
```
void processBoxes(List<? extends Fruit> boxes) { ... }
```

### Особенности работы с дженериками

- Erasure типов: что происходит во время компиляции.
Во время выполнения информация о типах удаляется, и `List<Integer>` становится просто `List`.

- Невозможность создания экземпляров обобщенного типа.
Пример: T item = new T(); // Ошибка

### Преимущества и недостатки использования дженериков.
  - Преимущества: безопасность типов, переиспользование кода, улучшенная читаемость кода.
  - Недостатки: сложность, ограничения на использование с примитивами, сложности при работе с массивами обобщенных типов.


</details>

<hr>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Generics

Generics, also known as templates in some programming languages, are a feature in Java that allow you to write classes, interfaces, and methods that operate on types as parameters. They enable you to create more flexible and reusable code by abstracting data types.

In Java, generics provide the ability to work with different types of data without specifying those types when defining the class or method. This makes your code more generic and adaptable to different data types.

Oracle has a dedicated tutorial on generics, which you can find [here](https://docs.oracle.com/javase/tutorial/java/generics/index.html).

Generics help improve code reusability and type safety, allowing you to write more flexible and robust Java programs.


```
public class GenericBox<T> {}
...
GenericBox<Integer> gBox1 = new GenericBox<>;

```

### Using Generics

When creating an object of a generic class, you need to specify the actual type that will be used in place of the generic parameter. This allows you to work with different types in a type-safe manner while reusing the same code structure.

However, it's important to note that generics in Java work only with objects and cannot be used with primitive data types. For instance, you can write `<Integer>` to work with `Integer` objects, but you cannot use generics with primitive types like `int` or `double`. In such cases, you should use wrapper classes like `Integer` instead of `int` and `Double` instead of `double`.

Generics provide a powerful way to create reusable code that can work with various data types while maintaining type safety.

</details>