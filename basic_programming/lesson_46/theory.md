<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Set

Интерфейс `Set` в Java является частью Java Collections Framework и представляет собой коллекцию, которая не содержит повторяющихся элементов. Это один из фундаментальных интерфейсов в Java, который используется для хранения уникальных элементов.

### Основные характеристики интерфейса Set:

1. **Уникальность элементов:** Коллекция не может содержать дублирующиеся элементы.
2. **Нет гарантии порядка:** Элементы в `Set` обычно не упорядочены; порядок их хранения может не соответствовать порядку добавления.
3. **Равенство элементов:** Равенство элементов определяется через методы `equals` и `hashCode`.

### Основные методы интерфейса Set:

- `add(E e)`: Добавляет указанный элемент в Set (если он ещё не присутствует в коллекции).
- `remove(Object o)`: Удаляет указанный элемент из Set, если он присутствует.
- `contains(Object o)`: Возвращает `true`, если Set содержит указанный элемент.
- `size()`: Возвращает количество элементов в Set.
- `isEmpty()`: Проверяет, пуст ли Set.
- `iterator()`: Возвращает итератор для элементов в Set.
- `clear()`: Удаляет все элементы из Set.

### Основные реализации интерфейса Set:

1. **HashSet:**
  - Основан на хэш-таблице (HashMap).
  - Хорошая производительность: операции `add`, `remove`, и `contains` имеют постоянное время выполнения (в среднем случае).
  - Не гарантирует порядок элементов.

2. **LinkedHashSet:**
  - Сохраняет порядок добавления элементов.
  - Немного медленнее, чем `HashSet` из-за дополнительных затрат на поддержание порядка элементов.

3. **TreeSet:**
  - Реализован в виде красно-черного дерева.
  - Элементы упорядочены в соответствии с их естественным порядком или компаратором, переданным при создании.
  - Операции `add`, `remove`, и `contains` выполняются за время O(log n).

### Когда использовать Set:

- Когда нужно хранить набор уникальных элементов.
- Когда важна производительность при проверке наличия элемента в коллекции.
- Когда не требуется сохранение порядка элементов, можно использовать `HashSet`.
- Когда требуется сохранить порядок вставки, следует использовать `LinkedHashSet`.
- Когда необходим упорядоченный набор данных, следует использовать `TreeSet`.

### Пример использования Set:

```
Set<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Cherry");

// Попытка добавить дублирующийся элемент
boolean isAdded = hashSet.add("Apple"); // вернет false

// Пройтись по элементам
for (String fruit : hashSet) {
    System.out.println(fruit);
}
```

Класс `Collections` также предоставляет статические методы, такие как `unmodifiableSet(Set<? extends T>)`, для создания неизменяемых версий `Set`. Это может быть полезно, когда вы хотите предоставить доступ к своей коллекции, не позволяя изменять её содержимое.


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Set
The `Set` interface in Java is part of the Java Collections Framework and represents a collection that contains no duplicate elements. It is one of the fundamental interfaces in Java used for storing unique elements.

### Key Characteristics of the Set Interface:

1. **Uniqueness of Elements:** The collection cannot contain duplicate elements.
2. **No Guarantee of Order:** Elements in a `Set` are generally unordered; the storage order may not correspond to the order of addition.
3. **Equality of Elements:** Equality of elements is determined through the `equals` and `hashCode` methods.

### Core Methods of the Set Interface:

- `add(E e)`: Adds the specified element to the Set if it is not already present in the collection.
- `remove(Object o)`: Removes the specified element from the Set if it is present.
- `contains(Object o)`: Returns `true` if the Set contains the specified element.
- `size()`: Returns the number of elements in the Set.
- `isEmpty()`: Checks whether the Set is empty.
- `iterator()`: Returns an iterator for the elements in the Set.
- `clear()`: Removes all elements from the Set.

### Main Implementations of the Set Interface:

1. **HashSet:**
  - Based on a hash table (HashMap).
  - Good performance: operations `add`, `remove`, and `contains` have constant time complexity (on average).
  - Does not guarantee the order of elements.

2. **LinkedHashSet:**
  - Maintains the order of elements as they were added.
  - Slightly slower than `HashSet` due to the additional costs of maintaining element order.

3. **TreeSet:**
  - Implemented as a red-black tree.
  - Elements are ordered according to their natural order or by a comparator provided at set creation.
  - Operations `add`, `remove`, and `contains` are executed in O(log n) time.

### When to Use Set:

- When a collection of unique elements is needed.
- When performance is important when checking for the presence of an element in a collection.
- When the order of elements is not needed, `HashSet` can be used.
- When the insertion order needs to be maintained, `LinkedHashSet` should be used.
- When an ordered set of data is required, `TreeSet` should be used.

### Example of Using Set:

```
Set<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Cherry");

// Attempt to add a duplicate element
boolean isAdded = hashSet.add("Apple"); // will return false

// Iterate through the elements
for (String fruit : hashSet) {
    System.out.println(fruit);
}
```

The `Collections` class also provides static methods, such as `unmodifiableSet(Set<? extends T>)`, to create immutable versions of `Set`. This can be useful when you want to provide access to your collection without allowing its content to be modified.

</details>