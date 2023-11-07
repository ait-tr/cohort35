<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Java Collections Framework
**Java Collections Framework** (JCF) - это архитектура в Java, которая предоставляет структуры данных и алгоритмы для работы с коллекциями. JCF входит в состав Java Standard Edition и содержит набор интерфейсов и их реализаций, которые облегчают разработку программного обеспечения, работающего с группами объектов.

**Коллекция** в Java (и в программировании в целом) - это объект, который группирует множество элементов в одном контейнере. В Java коллекции используются для хранения, управления, получения  и обработки данных в виде группы объектов.

Коллекции облегчают организацию данных и манипулирование ими, предоставляя структурированный и удобный способ работы с группами объектов.

Все коллекции в Java являются параметризованными, что означает, что они могут работать с элементами любого ссылочного типа данных. Параметризация коллекций позволяет задать конкретный тип данных, с которым будет работать коллекция, что обеспечивает типобезопасность и избавляет от необходимости приведения типов при извлечении элементов из коллекции.

```
List<String> strings = new ArrayList<>();  // коллекция для строк
List<Integer> integers = new LinkedList<>();  // коллекция для целых чисел
```

В этом примере `strings` может содержать только строки, а `integers` - только целые числа. Если попытаться добавить элемент другого типа, то компилятор выдаст ошибку.

Java Collections Framework (JCF) предоставляет несколько видов коллекций, каждый из которых имеет свои особенности:

- **Списки (List)**: упорядоченные коллекции, которые поддерживают дубликаты и обеспечивают доступ к элементам по индексу.
- **Множества (Set)**: неупорядоченные коллекции, не поддерживающие дубликаты.
- **Очереди (Queue)**: коллекции, обеспечивающие упорядоченное хранение элементов в порядке их добавления.
- **Карты (Map)**: коллекции, хранящие данные в виде пар "ключ-значение".

Таким образом, коллекция в Java - это структура данных, которая позволяет группировать объекты и работать с ними как с единой сущностью.

![img](https://raw.githubusercontent.com/ait-tr/cohort35/main/basic_programming/lesson_45/img/Collection.jpeg)


### Основные интерфейсы и их реализации в JCF:

#### Интерфейсы:
    - `Collection`: базовый интерфейс для всех коллекций.
    - `List`: интерфейс для упорядоченных коллекций, поддерживающих дубликаты. Реализации: `ArrayList`, `LinkedList`, `Vector`.
    - `Set`: интерфейс для наборов уникальных элементов. Реализации: `HashSet`, `LinkedHashSet`, `TreeSet`.
    - `SortedSet`: интерфейс для сортированных наборов.
    - `Queue`: интерфейс для очередей. Реализации: `LinkedList`, `PriorityQueue`.
    - `Deque`: интерфейс для двусторонних очередей. Реализации: `LinkedList`, `ArrayDeque`.
    - `Map`: интерфейс для коллекций пар "ключ-значение". Реализации: `HashMap`, `LinkedHashMap`, `TreeMap`.
    - `SortedMap`: интерфейс для сортированных карт.

#### Реализации:
    - `ArrayList` - базируется на массиве, обеспечивает быстрый доступ по индексу.
    - `LinkedList` - базируется на двусвязном списке, обеспечивает быстрое добавление/удаление элементов.
    - `Vector` - аналогичен `ArrayList`, но синхронизирован.
    - `HashSet` - обеспечивает быстрый доступ к элементам, порядок следования не гарантирован.
    - `LinkedHashSet` - сохраняет порядок добавления элементов.
    - `TreeSet` - хранит элементы в отсортированном порядке.
    - `PriorityQueue` - организует элементы в порядке приоритета.
    - `ArrayDeque` - быстрое добавление/удаление элементов с обеих сторон очереди.
    - `HashMap` - быстрый доступ к элементам, порядок следования не гарантирован.
    - `LinkedHashMap` - сохраняет порядок добавления элементов.
    - `TreeMap` - хранит элементы в отсортированном порядке.

#### Алгоритмы:
    - JCF предоставляет стандартные алгоритмы для сортировки, поиска и перестановки элементов коллекций.
      Класс `Collections`, который предоставляет статические методы для работы с коллекциями. Эти методы включают алгоритмы сортировки, поиска и перестановки элементов. Вот несколько примеров:


#### Синхронизация и неизменяемость:
    - Для поддержки многопоточных операций в JCF есть синхронизированные обертки для коллекций и методы для создания неизменяемых коллекций.
      Большинство реализаций коллекций в Java Collections Framework не являются потокобезопасными, то есть не гарантируют корректное поведение при использовании из нескольких потоков одновременно. Однако для обеспечения потокобезопасности, в Java есть специальные методы, которые позволяют создавать синхронизированные обертки над коллекциями.

Примеры создания синхронизированных коллекций:

```
List<String> list = Collections.synchronizedList(new ArrayList<String>());
Set<String> set = Collections.synchronizedSet(new HashSet<String>());
Map<String, String> map = Collections.synchronizedMap(new HashMap<String, String>());
```

Что касается неизменяемости, то в Java есть методы, которые позволяют создать неизменяемые (immutable) коллекции. Это означает, что после создания такой коллекции, ее содержимое не может быть изменено. Пример создания неизменяемого списка:

```
List<String> list = Collections.unmodifiableList(new ArrayList<String>(Arrays.asList("a", "b", "c")));
```
Попытка добавить или удалить элемент из неизменяемой коллекции приведет к выбросу исключения `UnsupportedOperationException`.


Выбор конкретной реализации коллекции в JCF зависит от требований к производительности, порядку элементов и других факторов, специфичных для конкретной задачи.


### Итераторы

Итераторы играют ключевую роль в JCF, предоставляя способ обхода элементов коллекции. Интерфейс `Iterator` позволяет проходить по коллекции, не раскрывая её внутреннее представление. Расширенный интерфейс `ListIterator` добавляет возможность итерации в обоих направлениях и возможность модифицировать элементы при обходе.

### Конкурентные коллекции

Для многопоточных приложений важным дополнением к JCF являются конкурентные коллекции, находящиеся в пакете `java.util.concurrent`. Эти коллекции, такие как `ConcurrentHashMap`, `CopyOnWriteArrayList` и `BlockingQueue`, разработаны для использования в многопоточном контексте и помогают избежать проблем с синхронизацией и блокировками.

### Производительность

Выбор конкретной реализации коллекции может зависеть от требований к производительности. Например, `ArrayList` предпочтительнее, если часто нужен быстрый доступ по индексу, а `LinkedList` - если требуется частая вставка и удаление элементов.

### Синхронизация

Несмотря на то, что некоторые старые коллекции, такие как `Vector` и `Stack`, являются синхронизированными, для современных многопоточных приложений рекомендуется использовать конкурентные коллекции из пакета `java.util.concurrent`. Для обычных коллекций также можно использовать обёртки из классов `Collections.synchronizedList`, `Collections.synchronizedSet` и т.д., чтобы добавить базовую синхронизацию.


### Заключение

Java Collections Framework обеспечивает мощные инструменты для работы с данными в коллекциях, способствуя написанию более чистого, эффективного и масштабируемого кода. Благодаря широкому спектру реализаций, JCF может удовлетворить различные потребности в разработке программного обеспечения на Java.


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Java Collections Framework

**Java Collections Framework** (JCF) is an architecture in Java that provides data structures and algorithms for working with collections. JCF is part of the Java Standard Edition and contains a set of interfaces and their implementations that facilitate the development of software that works with groups of objects.

A **collection** in Java (and in programming in general) is an object that groups multiple elements within a single container. In Java, collections are used for storing, managing, retrieving, and processing data in the form of groups of objects.

Collections simplify the organization of data and its manipulation by providing a structured and convenient way to work with groups of objects.

All collections in Java are parameterized, meaning they can work with elements of any reference data type. The parameterization of collections allows specifying the exact data type with which the collection will work, ensuring type safety and eliminating the need for typecasting when retrieving elements from the collection.

```
List<String> strings = new ArrayList<>();  // a collection for strings
List<Integer> integers = new LinkedList<>();  // a collection for integers
```

In this example, `strings` can contain only strings, and `integers` can contain only integers. Attempting to add an element of another type will result in a compiler error.

The Java Collections Framework (JCF) offers several types of collections, each with its own features:

- **Lists (List)**: ordered collections that support duplicates and provide access to elements by index.
- **Sets (Set)**: unordered collections that do not support duplicates.
- **Queues (Queue)**: collections that provide ordered storage of elements as they are added.
- **Maps (Map)**: collections that store data in "key-value" pairs.

Thus, a collection in Java is a data structure that allows grouping objects and working with them as a single entity.

### Main interfaces and their implementations in JCF:

#### Interfaces:
    - `Collection`: the base interface for all collections.
    - `List`: an interface for ordered collections that support duplicates. Implementations: `ArrayList`, `LinkedList`, `Vector`.
    - `Set`: an interface for sets of unique elements. Implementations: `HashSet`, `LinkedHashSet`, `TreeSet`.
    - `SortedSet`: an interface for sorted sets.
    - `Queue`: an interface for queues. Implementations: `LinkedList`, `PriorityQueue`.
    - `Deque`: an interface for double-ended queues. Implementations: `LinkedList`, `ArrayDeque`.
    - `Map`: an interface for collections of "key-value" pairs. Implementations: `HashMap`, `LinkedHashMap`, `TreeMap`.
    - `SortedMap`: an interface for sorted maps.

#### Implementations:
    - `ArrayList` - based on an array, provides fast access by index.
    - `LinkedList` - based on a doubly-linked list, provides fast addition/removal of elements.
    - `Vector` - similar to `ArrayList`, but synchronized.
    - `HashSet` - provides fast access to elements, the order of elements is not guaranteed.
    - `LinkedHashSet` - maintains the order of elements as they were added.
    - `TreeSet` - stores elements in sorted order.
    - `PriorityQueue` - organizes elements in priority order.
    - `ArrayDeque` - allows fast addition/removal of elements from both ends of the queue.
    - `HashMap` - provides fast access to elements, the order of elements is not guaranteed.
    - `LinkedHashMap` - maintains the order of elements as they were added.
    - `TreeMap` - stores elements in sorted order.

#### Algorithms:
- The JCF provides standard algorithms for sorting, searching, and permuting the elements of collections.
  The `Collections` class offers static methods for working with collections. These methods include algorithms for sorting, searching, and permuting elements. Here are some examples:


#### Synchronization and Immutability:
- For supporting multi-threaded operations in JCF, there are synchronized wrappers for collections and methods for creating immutable collections.
  Most of the collection implementations in the Java Collections Framework are not thread-safe, meaning they do not guarantee correct behavior when used concurrently by multiple threads. However, for ensuring thread safety, Java provides special methods that allow creating synchronized wrappers over collections.

Examples of creating synchronized collections:

```
List<String> list = Collections.synchronizedList(new ArrayList<String>());
Set<String> set = Collections.synchronizedSet(new HashSet<String>());
Map<String, String> map = Collections.synchronizedMap(new HashMap<String, String>());
```

As for immutability, Java has methods that allow the creation of immutable collections. This means that once such a collection is created, its contents cannot be changed. An example of creating an immutable list:

```
List<String> list = Collections.unmodifiableList(new ArrayList<String>(Arrays.asList("a", "b", "c")));
```
Attempting to add or remove elements from an immutable collection will throw an `UnsupportedOperationException`.


Choosing a specific JCF collection implementation depends on performance requirements, order of elements, and other factors specific to the task at hand.


### Iterators

Iterators play a key role in JCF, providing a way to traverse the elements of a collection. The `Iterator` interface allows for going through a collection without revealing its internal representation. The extended `ListIterator` interface adds the capability to iterate in both directions and to modify elements during traversal.

### Concurrent Collections

For multi-threaded applications, an important addition to JCF is the concurrent collections found in the `java.util.concurrent` package. These collections, such as `ConcurrentHashMap`, `CopyOnWriteArrayList`, and `BlockingQueue`, are designed for use in a multi-threaded context and help avoid synchronization issues and locking problems.

### Performance

The choice of a particular collection implementation may depend on performance requirements. For instance, `ArrayList` is preferable if fast index-based access is frequently needed, whereas `LinkedList` is better for frequent insertions and deletions.

### Synchronization

Even though some older collections like `Vector` and `Stack` are synchronized, for modern multi-threaded applications, it is recommended to use concurrent collections from the `java.util.concurrent` package. For regular collections, wrappers from `Collections.synchronizedList`, `Collections.synchronizedSet`, etc., can also be used to add basic synchronization.


### Conclusion

The Java Collections Framework provides powerful tools for working with data in collections, contributing to writing cleaner, more efficient, and scalable code. Thanks to a wide range of implementations, the JCF can satisfy various needs in software development with Java.


</details>