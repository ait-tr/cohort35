<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Stream API

**Stream API** в Java позволяет обрабатывать последовательности элементов (например, коллекции) в функциональном стиле. Stream API введено в Java 8 и является частью Java Collections Framework. Основной интерфейс Stream предоставляет множество методов для выполнения операций с данными.

### Основные определения:

- **Stream** - последовательность элементов, поддерживающая параллельные и последовательные агрегатные операции.
- **Pipeline** - последовательность операций, выполняемых на потоке данных.
- **Intermediate operation (Промежуточная операция)** - операция, преобразующая поток и возвращающая новый поток, например, `filter`, `map`.
- **Terminal operation (Терминальная операция)** - операция, завершающая работу с потоком и возвращающая результат, например, `collect`, `forEach`.

### Промежуточные методы
Промежуточные операции в Stream API Java являются ключевыми элементами для создания цепочек обработки данных в потоках. Эти операции обрабатывают данные и возвращают новый поток для дальнейшего использования, но не запускают фактическую обработку данных до вызова терминальной операции.

- `filter(Predicate<? super T> predicate)`: Отфильтровывает элементы, соответствующие заданному предикату.

- `map(Function<? super T, ? extends R> mapper)`: Преобразует элементы потока с использованием заданной функции.
  - `mapToInt(ToIntFunction<? super T> mapper)`: Преобразует объекты потока в `IntStream`.
  - `mapToLong(ToLongFunction<? super T> mapper)`: Преобразует объекты потока в `LongStream`.
  - `mapToDouble(ToDoubleFunction<? super T> mapper)`: Преобразует объекты потока в `DoubleStream`.

- `flatMap(Function<? super T, ? extends Stream<? extends R>> mapper)`**: Преобразует каждый элемент потока в поток других объектов и "сглаживает" все эти потоки в один.
  - `flatMapToInt(Function<? super T, ? extends IntStream> mapper)`: Аналогично `flatMap`, но для `IntStream`.
  - `flatMapToLong(Function<? super T, ? extends LongStream> mapper)`: Аналогично `flatMap`, но для `LongStream`.
  - `flatMapToDouble(Function<? super T, ? extends DoubleStream> mapper)`: Аналогично `flatMap`, но для `DoubleStream`.
- Метод `mapToObj` используется для преобразования потока примитивных типов (`IntStream`, `LongStream`, `DoubleStream`) в поток объектов (`Stream<T>`)
  - `Stream<T> mapToObj(IntFunction<? extends T> mapper)`
  - `Stream<T> mapToObj(LongFunction<? extends T> mapper)`
  - `Stream<T> mapToObj(DoubleFunction<? extends T> mapper)`
- `distinct()`**: Удаляет дублирующие элементы, возвращая поток с уникальными элементами.
- `sorted()`**: Сортирует элементы потока в естественном порядке.
- `sorted(Comparator<? super T> comparator)`**: Сортирует элементы потока с использованием заданного компаратора.
- `peek(Consumer<? super T> action)`**: Выполняет заданное действие для каждого элемента потока, возвращая поток с теми же элементами (часто используется для отладки).
- `limit(long maxSize)`**: Ограничивает количество элементов потока заданным значением.
- `skip(long n)`**: Пропускает первые `n` элементов потока.

Эти операции позволяют создавать сложные цепочки обработки данных, используя декларативный подход программирования, что упрощает написание чистого и эффективного кода.

### Статические методы
Класс `Stream` имеет несколько статических методов, которые позволяют создавать потоки различными способами. Вот основные из них:

- `of(T... values)`**:
    - Создаёт поток из переданных значений.
    - Например: `Stream.of("a", "b", "c")` создаст поток, содержащий строки "a", "b" и "c".

- `of(T value)`**:
    - Создаёт поток из одного элемента.
    - Например: `Stream.of("hello")` создаст поток, содержащий одну строку "hello".

- `empty()`**:
    - Создаёт пустой поток.
    - Например: `Stream.empty()` создаст пустой поток.

- `builder()`**:
    - Создаёт строитель (`Builder`) для потока.
    - Это более сложный способ создания потоков, который позволяет добавлять элементы в поток динамически.

- `concat(Stream<? extends T> a, Stream<? extends T> b)`:
    - Объединяет два потока в один.
    - Например: `Stream.concat(Stream.of("a"), Stream.of("b"))` создаст поток, содержащий "a" и "b".

- `iterate(final T seed, final UnaryOperator<T> f)`:
    - Создаёт поток, в котором каждый последующий элемент генерируется путём повторного применения функции к предыдущему элементу, начиная с начального значения `seed`.
    - Например: `Stream.iterate(0, n -> n + 2)` создаст поток чётных чисел.

- `iterate(T seed, Predicate<? super T> hasNext, UnaryOperator<T> next)` (добавлен в Java 9):
    - Похож на `iterate`, но также включает предикат `hasNext`, который определяет, когда итерация должна остановиться.

- `generate(Supplier<T> s)`:
    - Создает бесконечный поток, генерируя элементы с помощью предоставленной функции.
    - Например: `Stream.generate(Math::random)` создаст бесконечный поток случайных чисел.

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