<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>


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


- Дополнительная задача: Имплементировать второй интерфейс, который будет содержать следующие методы:
  - `void addLast(T value);`
  - `void addFirst(T value);` 
  - `T getFirst();` 
  - `T getLast();`
  - `T remove();` // Удаляет первый элемент списка
  - `T removeFirst();` 
  - `T removeLast();` //Удаляет последний элемент списка




## Итераторы в Java

**Что такое итераторы?**
- Инструменты для последовательного доступа к элементам коллекции без раскрытия её внутреннего представления.

**Почему они важны?**
- Позволяют унифицированно работать с различными типами коллекций.
- Обеспечивают безопасный доступ к элементам коллекции.

---

## Концепция итератора

### Свойства итератора**:
- Предоставляет механизм для прохода по элементам коллекции.
- Указывает на конкретный элемент в коллекции в данный момент времени.

### Основные методы интерфейса `Iterator`**:
- `boolean hasNext()`: возвращает true, если итератор имеет еще элементы.
- `E next()`: возвращает следующий элемент из коллекции.
- `void remove()`: удаляет текущий элемент из коллекции.

---

## Использование итераторов в Java

### Проход по элементам коллекции с использованием итератора**:
   ```
   while(iterator.hasNext()) {
       String element = iterator.next();
       System.out.println(element);
   }
   ```

### Удаление элементов во время итерации**:
   ```
   while(iterator.hasNext()) {
       String element = iterator.next();
       if(someCondition) {
           iterator.remove();
       }
   }
   ```

### Улучшенный цикл for-each:
- Java предоставляет "for-each" цикл, который внутри себя использует итератор, но делает код более читаемым.
   ```
   for(String element : collection) {
       System.out.println(element);
   }
   ```

---

## Другие типы итераторов**

### ListIterator:
- Специализированный итератор для списков (`List`).
- Позволяет итерировать в обе стороны и получать индекс элемента.

### Spliterator:
- Интродукция в Java 8.
- Поддерживает параллельную итерацию.

---

## Потенциальные проблемы и рекомендации

### ConcurrentModificationException:
- Возникает, если коллекция была модифицирована во время итерации.

### Безопасная итерация с Concurrent Collections:
- Некоторые коллекции (например, `CopyOnWriteArrayList` или `ConcurrentHashMap`) обеспечивают безопасное поведение при одновременной модификации и итерации.

---

### 
- Итераторы предоставляют унифицированный способ работы с коллекциями в Java.
- Понимание работы итераторов поможет эффективно и безопасно манипулировать данными в коллекциях.



</details>

<hr>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

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