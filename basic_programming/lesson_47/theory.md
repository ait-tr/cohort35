<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Интерфейс Map
Интерфейс `Map` в Java представляет собой структуру данных для хранения пар "ключ-значение". Каждый ключ в `Map` уникален, и каждому ключу соответствует ровно одно значение. `Map` не является наследником интерфейса `Collection`.

### Особенности интерфейса `Map`:

- **Не является коллекцией:** `Map` не наследуется от интерфейса `Collection` и поэтому имеет уникальный API, отличный от других коллекций.
- **Уникальные ключи:** Каждый ключ в `Map` должен быть уникальным, и попытка вставить дублирующийся ключ приведёт к замене старого значения новым.
- **Один `null` ключ:** Большинство реализаций `Map` (за исключением `Hashtable` и подобных) допускают использование `null` в качестве ключа, но только для одного элемента.
- **Множественные `null` значения:** `Map` может содержать несколько пар "ключ-значение", где значения являются `null`.

### Особенности использования интерфейса `Map`:

- **Доступ по ключу:** `Map` предоставляет быстрый доступ к значениям по ключам.
- **Изменяемость:** В отличие от коллекций, которые хранят отдельные элементы, `Map` позволяет изменять значения, связанные с конкретными ключами.
- **Порядок элементов:** `HashMap` не гарантирует порядок элементов, `LinkedHashMap` сохраняет порядок вставки или порядок доступа, `TreeMap` обеспечивает сортировку по ключам.
- **Подклассы и поведение:** Подклассы `Map`, такие как `TreeMap` и `ConcurrentHashMap`, предоставляют специальное поведение, например, упорядоченность или многопоточную поддержку.

### Основные методы интерфейса Map:

- `void clear()`: очищает карту.
- `boolean containsKey(Object key)`: возвращает `true`, если карта содержит указанный ключ.
- `boolean containsValue(Object value)`: возвращает `true`, если карта содержит одно или несколько значений.
- `Set<Map.Entry<K,V>> entrySet()`: возвращает `Set` представлений всех пар "ключ-значение" карты.
- `boolean equals(Object o)`: сравнивает указанный объект с картой на равенство.
- `V get(Object key)`: возвращает значение, соответствующее указанному ключу, или `null`, если такого ключа нет.
- `V getOrDefault(Object key, V defaultValue)`: возвращает значение, соответствующее указанному ключу, или `defaultValue`, если такого ключа нет в карте.
- `int hashCode()`: возвращает хеш-код для карты.
- `boolean isEmpty()`: возвращает `true`, если карта пуста.
- `Set<K> keySet()`: возвращает `Set` всех ключей карты.
- `V put(K key, V value)`: ассоциирует указанное значение с указанным ключом в карте.
- `void putAll(Map<? extends K, ? extends V> m)`: копирует все пары "ключ-значение" из указанной карты в текущую.
- `V remove(Object key)`: удаляет пару "ключ-значение" по указанному ключу.
- `int size()`: возвращает количество пар "ключ-значение" в карте.
- `Collection<V> values()`: возвращает `Collection` всех значений карты.

### Реализации интерфейса Map и их отличия:

- **HashMap**:
    - Не гарантирует порядок элементов.
    - Позволяет `null` в качестве ключа и значения.
    - Операции вставки и доступа имеют константную временную сложность в идеальных условиях.

- **LinkedHashMap**:
    - Расширяет `HashMap`, сохраняя связный список записей в порядке их добавления или в порядке доступа (если это указано при создании).
    - Подходит для создания кэшей, где важен порядок элементов.

- **TreeMap**:
  - Реализует отсортированное навигационное дерево.
  - Гарантирует, что элементы будут в порядке возрастания ключей.
  - Позволяет извлекать части карты (например, `headMap`, `tailMap`, `subMap`).
  - Операции доступа имеют временную сложность `O(log n)`.

- **Hashtable**:
    - Предшественник `HashMap`, но синхронизирован и не допускает `null` в качестве ключа или значения.
    - Устарела из-за низкой производительности в многопоточных приложениях.

- **ConcurrentHashMap**:
    - Предназначен для использования в многопоточных приложениях.
    - Позволяет конкурентный доступ и обновления без полной блокировки карты.
    - Не допускает `null` в качестве ключа или значения.

- **EnumMap** — это специализированная реализация интерфейса `Map`, предназначенная исключительно для использования с ключами типа перечисления (`enum`). `EnumMap` хранит элементы в массиве и использует порядковый номер `enum` в качестве индекса, что обеспечивает отличную производительность операций.
    - **Ключи-перечисления:** Все ключи должны быть элементами одного и того же `enum` типа.
    - **Порядок элементов:** Элементы в `EnumMap` хранятся в естественном порядке их объявления в `enum` типе.
    - **Производительность:** Операции доступа, вставки и удаления выполняются очень быстро благодаря использованию массива и порядковых номеров `enum`.
    - **Null значения:** `EnumMap` допускает использование `null` в качестве значения, но не в качестве ключа.
    - **Итераторы:** Итераторы возвращаемые `EnumMap` не выбрасывают `ConcurrentModificationException`, и поэтому `EnumMap` не подходит для использования в многопоточных средах, где карта может изменяться другими потоками.
    - **Специализированное использование:** `EnumMap` является хорошим выбором, когда ключи являются перечислениями, так как это обеспечивает лучшую производительность и компактное использование памяти по сравнению с `HashMap`.


### Примеры использования интерфейса `Map`:

- **Хранение связей:** Когда необходимо хранить связи типа "ключ-значение", например, идентификаторы пользователей и их данные.
- **Уникальность ключей:** Когда нужно гарантировать, что каждый ключ в коллекции уникален.
- **Поиск:** Когда часто требуется поиск элементов, `Map` обеспечивает эффективный доступ по ключу.
- **В качестве кэша:** `LinkedHashMap` часто используется для реализации LRU кэшей.
- **Конкурентные коллекции:** `ConcurrentHashMap` используется в многопоточных приложениях для предотвращения блокировок и улучшения производительности.


### Примечание по использованию:

- **Ключи:** Идеально подходящими ключами для `Map` являются **неизменяемые классы**, которые правильно реализуют `equals()` и `hashCode()` (например, строки или числа).
- **Производительность:** Надо помнить, что хеш-карты (`HashMap`, `ConcurrentHashMap`) быстрее для операций поиска, вставки и удаления в сравнении с древовидной реализацией (`TreeMap`), которая обеспечивает упорядоченность элементов.


Выбор реализации `Map` зависит от конкретных требований и контекста использования. Например, если важен порядок элементов, стоит рассмотреть `LinkedHashMap` или `TreeMap`. Если вы работаете в многопоточной среде, `ConcurrentHashMap` будет лучшим выбором.

---

### EnumSet

`EnumSet` — это специализированная реализация интерфейса `Set` для использования исключительно с перечислениями (`enum`). Она представляет собой высокоэффективную и компактную структуру данных для `enum` типов. `EnumSet` использует битовые векторы для представления множеств, что делает операции над ними очень быстрыми.

Поскольку `EnumSet` не использует хэш-коды, как `HashSet`, операции вставки, удаления и проверки наличия элементов выполняются очень быстро, практически за константное время. Кроме того, итераторы, возвращаемые `EnumSet`, не выдают `ConcurrentModificationException` и могут использоваться безопасно даже при изменении множества.

Основные особенности `EnumSet`:

- Элементы автоматически упорядочены в порядке, в котором объявлены `enum` константы.
- `null` элементы не допускаются.

Вот несколько ключевых особенностей и сценариев использования `EnumSet`:

- **Производительность**: `EnumSet` основан на использовании битовых векторов, что делает операции такие как добавление, удаление и проверка на вхождение очень быстрыми, близкими к выполнению за константное время.
- **Компактное хранение**: Поскольку `enum` имеет фиксированный набор возможных значений, `EnumSet` может использовать биты для представления присутствия или отсутствия каждого элемента, что делает его очень эффективным по памяти.
- **Специализированные методы**: `EnumSet` предлагает методы для создания диапазонов (например, `range(E from, E to)`), которые позволяют создавать наборы, содержащие все элементы перечисления в определенном диапазоне.
- **Предсказуемый порядок итерации**: `EnumSet` гарантирует, что итератор проходит элементы в порядке, в котором они объявлены в `enum`. Это может быть полезно для алгоритмов, которым важен порядок элементов.
- **Безопасность типов**: `EnumSet` гарантирует, что в наборе могут быть только элементы одного `enum` типа, что предотвращает ошибки, связанные с неверным типом элементов.

`EnumSet` в Java предоставляет несколько уникальных статических методов, которые оптимизированы для работы с элементами перечисления (`enum`). Вот основные из них:

- **allOf(Class<E> elementType)**:
   Создаёт `EnumSet`, содержащий все элементы указанного элементного типа `enum`.
- **noneOf(Class<E> elementType)**:
   Создаёт пустой `EnumSet` для указанного элементного типа `enum`.
- **of(E first, E... rest)**:
   Создаёт `EnumSet`, содержащий указанный первый элемент и необязательно последующие элементы.
  - **of(E e)**:
     Создаёт `EnumSet`, содержащий один указанный элемент.
  - **of(E e1, E e2)**, **of(E e1, E e2, E e3)** и так далее до **of(E e1, E e2, E e3, E e4, E e5)**:
   Создаёт `EnumSet`, содержащий от двух до пяти указанных элементов (перегрузки для определенного числа элементов).
- **range(E from, E to)**:
Создаёт `EnumSet`, содержащий все элементы перечисления в диапазоне от `from` до `to` (включительно).
- **copyOf(EnumSet<E> s)**:
   Создаёт копию существующего `EnumSet`.
- **copyOf(Collection<E> c)**:
   Создаёт `EnumSet`, содержащий все элементы указанной коллекции. Если коллекция `c` также является `EnumSet`, этот метод ведёт себя идентично методу `copyOf(EnumSet<E> s)`.
- **complementOf(EnumSet<E> s)**:
   Создаёт `EnumSet`, содержащий все элементы типа элементов указанного `EnumSet`, которые не присутствуют в самом `s` (то есть дополнение `s`).

Эти методы позволяют легко и эффективно создавать и манипулировать `EnumSet`, что делает его идеальным выбором для работы с наборами перечислений.



Пример использования `EnumSet`:

```
// Пример перечисления
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}


public class EnumSetExample {
    public static void main(String[] args) {
        // Создание EnumSet со всеми элементами
        EnumSet<Day> daysOff = EnumSet.allOf(Day.class);

        // Удаление элементов
        daysOff.remove(Day.MONDAY);
        daysOff.remove(Day.TUESDAY);

        // Создание EnumSet с частью элементов
        EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);

        // Создание EnumSet с диапазоном элементов
        EnumSet<Day> workDays = EnumSet.range(Day.MONDAY, Day.FRIDAY);

       
        // Объединение двух EnumSet
        EnumSet<Day> allDays = EnumSet.copyOf(daysOff);
        allDays.addAll(weekend);

    }
}
```

`EnumSet` является предпочтительным выбором, когда нужно работать с множеством элементов перечисляемого типа, так как она обеспечивает лучшую производительность по сравнению с обычными `HashSet` или `TreeSet`.


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Map Interface
The `Map` interface in Java represents a data structure for storing "key-value" pairs. Each key in a `Map` is unique, and each key corresponds to exactly one value. `Map` is not a descendant of the `Collection` interface.

### Features of the `Map` interface:

- **Not a collection:** `Map` does not inherit from the `Collection` interface and therefore has a unique API that is different from other collections.
- **Unique keys:** Each key in a `Map` must be unique, and an attempt to insert a duplicate key will result in the old value being replaced by the new one.
- **One `null` key:** Most `Map` implementations (except `Hashtable` and similar) allow the use of `null` as a key but only for one element.
- **Multiple `null` values:** A `Map` can contain several "key-value" pairs where the values are `null`.

### How to use the `Map` interface:

- **Access by key:** `Map` provides quick access to values by keys.
- **Mutability:** Unlike collections that store individual elements, `Map` allows you to change values associated with specific keys.
- **Order of elements:** `HashMap` does not guarantee the order of elements, `LinkedHashMap` maintains the order of insertion or access order, `TreeMap` provides sorting by keys.
- **Subclasses and behavior:** `Map` subclasses such as `TreeMap` and `ConcurrentHashMap` provide special behavior, such as orderliness or multithreading support.

### Main methods of the Map interface:

- `void clear()`: clears the map.
- `boolean containsKey(Object key)`: returns `true` if the map contains the specified key.
- `boolean containsValue(Object value)`: returns `true` if the map contains one or more values.
- `Set<Map.Entry<K,V>> entrySet()`: returns a `Set` view of all the "key-value" pairs in the map.
- `boolean equals(Object o)`: compares the specified object with the map for equality.
- `V get(Object key)`: returns the value corresponding to the specified key, or `null` if there is no such key.
- `V getOrDefault(Object key, V defaultValue)`: returns the value corresponding to the specified key, or `defaultValue` if there is no such key in the map.
- `int hashCode()`: returns the hash code for the map.
- `boolean isEmpty()`: returns `true` if the map is empty.
- `Set<K> keySet()`: returns a `Set` of all the keys in the map.
- `V put(K key, V value)`: associates the specified value with the specified key in the map.
- `void putAll(Map<? extends K, ? extends V> m)`: copies all of the "key-value" pairs from the specified map to the current one.
- `V remove(Object key)`: removes the "key-value" pair for the specified key.
- `int size()`: returns the number of "key-value" pairs in the map.
- `Collection<V> values()`: returns a `Collection` of all the values in the map.

### Implementations of the Map interface and their differences:

- **HashMap**:
    - Does not guarantee the order of elements.
    - Allows `null` as both key and value.
    - Insertion and access operations have constant time complexity under ideal conditions.

- **LinkedHashMap**:
    - Extends `HashMap` by maintaining a linked list of entries in the order they were added, or in the order of access (if specified at creation).
    - Suitable for creating caches where the order of elements is important.

- **TreeMap**:
    - Implements a sorted navigational tree.
    - Guarantees that elements will be in ascending key order.
    - Allows extraction of parts of the map (e.g., `headMap`, `tailMap`, `subMap`).
    - Access operations have a time complexity of `O(log n)`.

- **Hashtable**:
    - A predecessor of `HashMap`, synchronized and does not allow `null` as key or value.
    - Outdated due to poor performance in multithreaded applications.

- **ConcurrentHashMap**:
    - Designed for use in multithreaded applications.
    - Allows concurrent access and updates without full locking of the map.
    - Does not allow `null` as key or value.

- **EnumMap** is a specialized implementation of the `Map` interface designed exclusively for use with enumeration (`enum`) keys. `EnumMap` stores elements in an array and uses the ordinal number of the `enum` as an index, which ensures excellent performance of operations.
    - **Enumeration keys:** All keys must be elements of the same `enum` type.
    - **Order of elements:** Elements in `EnumMap` are stored in the natural

Here is the translation of the provided text into English:

### Examples of using the `Map` interface:

- **Storing associations:** When it's necessary to store key-value type associations, for example, user IDs and their data.
- **Uniqueness of keys:** When it is necessary to guarantee that each key in the collection is unique.
- **Search:** When elements need to be frequently searched, `Map` provides efficient access by key.
- **As a cache:** `LinkedHashMap` is often used to implement LRU caches.
- **Concurrent collections:** `ConcurrentHashMap` is used in multi-threaded applications to prevent locks and improve performance.

### Notes on use:

- **Keys:** Immutable classes that properly implement `equals()` and `hashCode()` (such as strings or numbers) are ideal as keys for `Map`.
- **Performance:** It should be remembered that hash maps (`HashMap`, `ConcurrentHashMap`) are faster for search, insertion, and deletion operations compared to tree implementation (`TreeMap`), which provides an ordering of elements.

The choice of `Map` implementation depends on the specific requirements and context of use. For instance, if the order of elements is important, `LinkedHashMap` or `TreeMap` should be considered. If you are working in a multi-threaded environment, `ConcurrentHashMap` would be the best choice.

---

### EnumSet

`EnumSet` is a specialized implementation of the `Set` interface for exclusive use with enumerations (`enum`). It represents a highly efficient and compact data structure for `enum` types. `EnumSet` uses bit vectors to represent sets, which makes the operations on it very fast.

Since `EnumSet` does not use hash codes like `HashSet`, operations such as insertion, deletion, and presence checks are performed very quickly, virtually in constant time. Additionally, iterators returned by `EnumSet` do not throw `ConcurrentModificationException` and can be safely used even when the set is modified.

Main features of `EnumSet`:

- Elements are automatically ordered in the order in which the `enum` constants are declared.
- `Null` elements are not permitted.

Here are some key features and usage scenarios for `EnumSet`:

- **Performance**: `EnumSet` is based on the use of bit vectors, which makes operations such as adding, removing, and checking for inclusion very fast, close to constant time execution.
- **Compact storage**: Since `enum` has a fixed set of possible values, `EnumSet` can use bits to represent the presence or absence of each element, making it very memory efficient.
- **Specialized methods**: `EnumSet` offers methods for creating ranges (e.g., `range(E from, E to)`), which allow creating sets that contain all the `enum` elements within a certain range.
- **Predictable iteration order**: `EnumSet` guarantees that the iterator goes through the elements in the order they are declared in the `enum`. This can be useful for algorithms that require a certain order of elements.
- **Type safety**: `EnumSet` guarantees that only elements of one `enum` type can be in the set, preventing errors related to the incorrect type of elements.

`EnumSet` in Java provides several unique static methods that are optimized for working with `enum` elements. Here are the main ones:

- **allOf(Class<E> elementType)**:
  Creates an `EnumSet` containing all the elements of the specified `enum` element type.
- **noneOf(Class<E> elementType)**:
  Creates an empty `EnumSet` for the specified `enum` element type.
- **of(E first, E... rest)**:
  Creates an `EnumSet` containing the specified first element and optionally subsequent elements.
  - **of(E e)**:
    Creates an `EnumSet` containing one specified element.
  - **of(E e1, E e2)**, **of(E e1, E e2, E e3)**, and so on up to **of(E e1, E e2, E e3, E e4, E e5)**:
    Creates an `EnumSet` containing from two to five specified elements (overloads for a specific number of elements).
- **range(E from, E to)**:
  Creates an `EnumSet` containing all `enum` elements in the range from `from` to `to` (inclusive).
- **copyOf(EnumSet<E> s)**:
  Creates a copy of an existing `EnumSet`.
- **copyOf(Collection<E> c)**:
  Creates an `EnumSet` containing all elements of the specified collection. If the collection `c` is also an `EnumSet`, this method behaves identically to the method `copyOf(EnumSet<E> s)`.
- **complementOf(EnumSet<E> s)**:
  Creates an `EnumSet` containing all the elements of the element type of the specified `EnumSet` that are not present in `s` itself (i.e., the complement of `s`).

These methods allow for easy and efficient creation and manipulation of `EnumSets`, making it the ideal choice for working with sets of enumeration types.

Example of using `EnumSet`:


```
// Пример перечисления
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}


public class EnumSetExample {
    public static void main(String[] args) {
        // Создание EnumSet со всеми элементами
        EnumSet<Day> daysOff = EnumSet.allOf(Day.class);

        // Удаление элементов
        daysOff.remove(Day.MONDAY);
        daysOff.remove(Day.TUESDAY);

        // Создание EnumSet с частью элементов
        EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);

        // Создание EnumSet с диапазоном элементов
        EnumSet<Day> workDays = EnumSet.range(Day.MONDAY, Day.FRIDAY);

       
        // Объединение двух EnumSet
        EnumSet<Day> allDays = EnumSet.copyOf(daysOff);
        allDays.addAll(weekend);

    }
}
```

`EnumSet` is the preferred choice when you need to work with a set of enumerable type elements because it provides better performance compared to regular `HashSet` or `TreeSet`.


</details>