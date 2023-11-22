<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Stream API

**Stream API** в Java позволяет обрабатывать последовательности элементов (например, коллекции) в функциональном стиле. Stream API введено в Java 8 и является частью Java Collections Framework. Основной интерфейс Stream предоставляет множество методов для выполнения операций с данными.

### Основные определения:

- **Stream** - последовательность элементов, поддерживающая параллельные и последовательные агрегатные операции.
- **Pipeline** - последовательность операций, выполняемых на потоке данных.
- **Intermediate operation (Промежуточная операция)** - операция, преобразующая поток и возвращающая новый поток, например, `filter`, `map`.
- **Terminal operation (Терминальная операция)** - операция, завершающая работу с потоком и возвращающая результат, например, `collect`, `forEach`.

Промежуточные методы можно условно разделить на следующие категории:
- фильтрация данных
- изменение данных
- упорядочивания данных

Терминальные методы можно разделить по функциональности на:
- аккумулирующие данные
- выполняющие действия с данными
- сохраняющие данные
- генерирующие результат на основе данных

### Основные методы для знакомства с потоками:
#### Промежуточные. Все возвращают поток.
- **`filter(Predicate<? super T> predicate)`**: Отфильтровывает элементы, соответствующие заданному предикату.
- **`sorted()`**: Сортирует элементы потока в естественном порядке.
- **`sorted(Comparator<? super T> comparator)`**: Сортирует элементы потока с использованием заданного компаратора.
- **`map(Function<? super T, ? extends R> mapper)`**: Преобразует элементы потока с использованием заданной функции.
- **`peek(Consumer<? super T> action)`**: Выполняет заданное действие для каждого элемента потока, возвращая поток с теми же элементами (часто используется для отладки).

#### Терминальные методы:
- **`void forEach(Consumer<? super T> action)`**: Выполняет заданное действие для каждого элемента потока
- **`R collect(Collector<? super T, A, R> collector)`**: Преобразует элементы потока в разные типы коллекций или другие структуры данных. Collector - интерфейс.
- **`Optional<T>min(Comparator<? super T> comparator)`**: Возвращает минимальный элемент потока в соответствии с предоставленным компаратором.
- **`Optional<T> max(Comparator<? super T> comparator)`**: Возвращает максимальный элемент потока.

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Stream API
**Stream API** in Java allows for processing sequences of elements (for example, collections) in a functional style. Stream API was introduced in Java 8 and is part of the Java Collections Framework. The primary Stream interface provides many methods for data operations.

### Basic Definitions:

- **Stream**: A sequence of elements supporting parallel and sequential aggregate operations.
- **Pipeline**: A sequence of operations performed on a stream of data.
- **Intermediate Operation**: An operation that transforms the stream and returns a new stream, for example, `filter`, `map`.
- **Terminal Operation**: An operation that finishes the processing of the stream and returns a result, for example, `collect`, `forEach`.


</details>