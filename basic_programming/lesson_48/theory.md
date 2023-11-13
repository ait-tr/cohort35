<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

Иерархия коллекций:

<img src="https://raw.githubusercontent.com/ait-tr/cohort35/main/basic_programming/lesson_48/img/CollectionSB_N.jpeg" width="1200">

---

### Методы merge, compute

Можно сказать, что методы `merge` и `compute` являются формами синтаксического сахара, так как они упрощают некоторые общие операции, связанные с картами в Java. Они предназначены для уменьшения количества шаблонного кода и делают код более читаемым и компактным, особенно при выполнении сложных операций.


### map.compute, computeIfAbsent, computeIfPresent
Эти три метода используются для вычисления новых значений в карте на основе ключей и текущих значений.:

#### compute(K key, BiFunction<? super K,? super V,? extends V> remappingFunction)
Метод `compute` позволяет вычислить новое значение для указанного ключа, используя заданную функцию пересчёта. Новое значение зависит от текущего ключа и его значения.
Если функция возвращает `null`, то запись удаляется из карты (если она существовала).


   ```
   Map<String, Integer> map = new HashMap<>();
   map.put("Ключ1", 1);

   map.compute("Ключ1", (key, val) -> val == null ? 42 : val + 41);
   // Карта теперь содержит "Ключ1" -> 42
   ```

#### computeIfAbsent(K key, Function<? super K,? extends V> mappingFunction)
Этот метод вычисляет значение для ключа только если **ключ ещё не ассоциирован** со значением или ассоциирован с `null`. Функция отображения применяется для генерации значения.

```
Map<String, Integer> map = new HashMap<>();
map.put("Ключ1", 1);

map.computeIfAbsent("Ключ2", key -> 42);
// Карта теперь содержит "Ключ1" -> 1 и "Ключ2" -> 42
```

#### computeIfPresent(K key, BiFunction<? super K,? super V,? extends V> remappingFunction)**
Метод `computeIfPresent` вычисляет новое значение для ключа только если **ключ уже ассоциирован** с ненулевым значением. Функция пересчёта применяется **только если** ключ присутствует.

```
   Map<String, Integer> map = new HashMap<>();
   map.put("Ключ1", 1);

   map.computeIfPresent("Ключ1", (key, val) -> val + 41);
   // Карта теперь содержит "Ключ1" -> 42
```

Все три метода позволяют более гибко управлять значениями в карте, используя лямбда-выражения для определения логики вычисления новых значений.

#### merge(K key, V value, BiFunction<? super V,? super V,? extends V> remappingFunction)
Метод `merge` из интерфейса `Map` в Java используется для объединения значений по ключу. Вот как он работает:

- Если ключ **не существует** в карте или **ассоциирован с null**, новое значение просто вставляется в карту.
- Если ключ **уже существует** и ассоциирован с ненулевым значением, применяется функция объединения (remapping function) к старому и новому значению для получения значения, которое будет ассоциировано с этим ключом.
- Если результат функции объединения **null**, пара ключ-значение **удаляется** из карты.

Функция объединения имеет вид `(oldValue, newValue) -> { /* вычисление нового значения */ }`, где `oldValue` - текущее значение для ключа в карте, а `newValue` - значение, переданное в метод `merge`.

**Пример использования**:

Допустим, у вас есть карта `Map<String, Integer>`, которая хранит количество появлений слов в тексте.

```
Map<String, Integer> wordCounts = new HashMap<>();
wordCounts.put("Слово1", 1);

// Добавим еще одно вхождение "Слово1". Если оно уже есть, увеличим количество на 1.
wordCounts.merge("Слово1", 1, (oldValue, value) -> oldValue + value);

// Добавим "Слово2", которого нет в карте.
wordCounts.merge("Слово2", 1, (oldValue, value) -> oldValue + value);

// После этих операций карта будет содержать:
// "Слово1" -> 2 (так как 1 + 1)
// "Слово2" -> 1 (так как ключа "Слово2" не было, и он добавлен с 1)
```

В этом примере для "Слово1" применяется функция объединения, которая суммирует старое и новое значения (1 + 1 = 2), а для "Слово2", которого нет в карте, просто устанавливается новое значение 1.



Все эти 4 метода можно реализовать, используя методы более стандартные и понятные `get`, `getOrDefault` и последующие проверки / присвоения новых значений для value

Пример с использованием `getOrDefault` и последующими операциями может быть альтернативой использованию `merge` или `compute`. Вот ваш первоначальный код:

```
for (char ch : text.toCharArray()) {
// берем значение по ключу. Если значение отсутствует - присваиваем 0	
    Integer count = result.getOrDefault(ch, 0);
// помещаем в карту ключ с новым значением
    result.put(ch, ++count);
}
```

Или совсем "в лоб":
```
for (char ch : text.toCharArray()) {
    Integer count = result.get(ch);

    if (count == null) {
        count = 0;
    }
    count = count + 1;
    result.put(ch, count);
}
```

Этот код можно переписать, используя `merge`:

```
for (char ch : text.toCharArray()) {
    result.merge(ch, 1, Integer::sum);
}
```

В этом случае `merge` автоматически обрабатывает ситуации, когда ключ есть в карте или отсутствует, и применяет функцию суммирования (`Integer::sum`), если ключ уже существует.

Аналогично, можно использовать `compute` для тех же целей:

```
for (char ch : text.toCharArray()) {
    result.compute(ch, (key, val) -> (val == null) ? 1 : val + 1);
}
```

Таким образом, методы `merge` и `compute` обеспечивают **более выразительный и сжатый способ** достижения той же цели, что и традиционные подходы с `getOrDefault` и условными операторами.

---
## Collections
Класс `Collections` в Java — это утилитный класс, который предоставляет статические методы для работы с коллекциями, включая списки (List), множества (Set) и отображения (Map). Он не предназначен для создания объектов (т.е., нельзя создать экземпляр `Collections`), а содержит только статические методы, которые могут использоваться для выполнения различных операций над коллекциями.

Вот некоторые из ключевых методов, предоставляемых классом `Collections`:

#### Сортировка и поиск:
    - `sort(List<T> list)`: сортирует указанный список по возрастанию, используя естественный порядок элементов.
    - `sort(List<T> list, Comparator<? super T> c)`: сортирует список в соответствии с порядком, заданным указанным компаратором.
    - `binarySearch(List<? extends Comparable<? super T>> list, T key)`: использует алгоритм двоичного поиска для нахождения ключа в отсортированном списке.
    - `binarySearch(List<? extends T> list, T key, Comparator<? super T> c)`: аналогично предыдущему, но с компаратором.

#### **Обращение, перемешивание и замена**:
    - `reverse(List<?> list)`: обращает порядок элементов в списке.
    - `shuffle(List<?> list)`: случайным образом перемешивает элементы в списке.
    - `fill(List<? super T> list, T obj)`: заменяет все элементы в списке на указанный объект.
    - `copy(List<? super T> dest, List<? extends T> src)`: копирует все элементы из одного списка в другой.
    - `swap(List<?> list, int i, int j)`: обменивает элементы на позициях `i` и `j`.

#### **Поиск экстремальных значений**:
    - `max(Collection<? extends T> coll)`: возвращает максимальный элемент коллекции, используя естественный порядок.
    - `max(Collection<? extends T> coll, Comparator<? super T> comp)`: возвращает максимальный элемент коллекции, используя заданный компаратор.
    - `min(Collection<? extends T> coll)`: возвращает минимальный элемент.
    - `min(Collection<? extends T> coll, Comparator<? super T> comp)`: возвращает минимальный элемент с использованием компаратора.

#### **Добавление и удаление**:
    - `addAll(Collection<? super T> c, T... elements)`: добавляет все указанные элементы в коллекцию.
    - `disjoint(Collection<?> c1, Collection<?> c2)`: возвращает `true`, если две коллекции не имеют общих элементов.

#### **Синхронизация**:
    - `synchronizedCollection(Collection<T> c)`: возвращает потокобезопасную коллекцию, обернутую в синхронизированный (synchronized) оболочку.
    - Аналогичные методы существуют для `List`, `Set`, `Map` и др.

#### **Неизменяемые коллекции**:
    - `unmodifiableCollection(Collection<? extends T> c)`: возвращает неизменяемую (unmodifiable) коллекцию.
    - Подобные методы существуют для `List`, `Set`, `Map` и других интерфейсов коллекций.

#### **Одиночные элементы**:
    - `singleton(T o)`: возвращает неизменяемое множество, содержащее только указанный объект.
    - `singletonList(T o)`: возвращает неизменяемый список, содержащий только указанный объект.
    - `singletonMap(K key, V value)`: возвращает неизменяемую карту, содержащую только указанную пару ключ-значение.

Эти методы полезны для многих общих задач программирования и позволяют разработчикам экономить время, избегая необходимости реализации этих операций вручную. Класс `Collections` является одним из наиболее часто используемых утилитных классов в Java благодаря своей полезности и удобству использования.

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

### Methods merge, compute

It can be said that the `merge` and `compute` methods are forms of syntactic sugar as they simplify some common operations related to maps in Java. They are designed to reduce the amount of boilerplate code and make the code more readable and compact, especially when performing complex operations.

### map.compute, computeIfAbsent, computeIfPresent
These three methods are used to compute new values in a map based on keys and current values:

#### compute(K key, BiFunction<? super K,? super V,? extends V> remappingFunction)
The `compute` method allows computing a new value for a specified key using a given remapping function. The new value depends on the current key and its value.
If the function returns `null`, the entry is removed from the map (if it existed).

   ```
   Map<String, Integer> map = new HashMap<>();
   map.put("Key1", 1);

   map.compute("Key1", (key, val) -> val == null ? 42 : val + 41);
   // The map now contains "Key1" -> 42
   ```

#### computeIfAbsent(K key, Function<? super K,? extends V> mappingFunction)
This method computes a value for a key only if **the key is not yet associated** with a value or is associated with `null`. The mapping function is applied to generate the value.

```
Map<String, Integer> map = new HashMap<>();
map.put("Key1", 1);

map.computeIfAbsent("Key2", key -> 42);
// The map now contains "Key1" -> 1 and "Key2" -> 42
```

#### computeIfPresent(K key, BiFunction<? super K,? super V,? extends V> remappingFunction)
The `computeIfPresent` method computes a new value for a key only if **the key is already associated** with a non-null value. The remapping function is applied **only if** the key is present.

```
   Map<String, Integer> map = new HashMap<>();
   map.put("Key1", 1);

   map.computeIfPresent("Key1", (key, val) -> val + 41);
   // The map now contains "Key1" -> 42
```

All three methods allow more flexible management of values in the map, using lambda expressions to define the logic for computing new values.

#### merge(K key, V value, BiFunction<? super V,? super V,? extends V> remappingFunction)
The `merge` method from the `Map` interface in Java is used for combining values by key. Here's how it works:

- If the key **does not exist** in the map or **is associated with null**, the new value is simply inserted into the map.
- If the key **already exists** and is associated with a non-null value, the merging function is applied to the old and new values to obtain the value that will be associated with this key.
- If the result of the merging function is **null**, the key-value pair is **removed** from the map.

The merging function takes the form `(oldValue, newValue) -> { /* calculation of the new value */ }`, where `oldValue` is the current value for the key in the map, and `newValue` is the value passed to the `merge` method.

**Example of use**:

Suppose you have a `Map<String, Integer>` that stores the number of occurrences of words in a text.

```
Map<String, Integer> wordCounts = new HashMap<>();
wordCounts.put("Word1", 1);

// Add another occurrence of "Word1". If it already exists, increase the count by 1.
wordCounts.merge("Word1", 1, (oldValue, value) -> oldValue + value);

// Add "Word2", which is not in the map.
wordCounts.merge("Word2", 1, (oldValue, value) -> oldValue + value);

// After these operations, the map will contain:
// "Word1" -> 2 (since 1 + 1)
// "Word2" -> 1 (since the "Word2" key was not there, and it is added with 1)
```

In this example, for "Word1" the merging function is applied, which sums the old and new values (1 + 1 = 2), and for "Word2", which is not in the map, a new value of 1 is simply set.


All these four methods can be implemented using more standard and understandable methods like `get`, `getOrDefault` followed by subsequent checks/assignments of new values for value.

An example using `getOrDefault` and subsequent operations can be an alternative to using `merge` or `compute`. Here is your original code:

```
for (char ch : text.toCharArray()) {
// take the value by the key. If the value is absent - assign 0
    Integer count = result.getOrDefault(ch, 0);
// put the key with the new value into the map
    result.put(ch, ++count);
}
```

This code can be rewritten using `merge`:

```
for (char ch : text.toCharArray()) {
    result.merge(ch, 1, Integer::sum);
}
```

In this case, `merge` automatically handles situations when a key exists in the map or is absent, and applies the sum function (`Integer::sum`) if the key already exists.

Similarly, you can use `compute` for the same purposes:

```
for (char ch : text.toCharArray()) {
    result.compute(ch, (key, val) -> (val == null) ? 1 : val + 1);
}
```

Thus, the `merge` and `compute` methods provide a **more expressive and concise way** of achieving the same goal as traditional approaches with `getOrDefault` and conditional statements.

</details>