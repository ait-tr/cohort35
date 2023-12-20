<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Multithreading
Многопоточность в Java — это механизм, позволяющий выполнять две или более части программы одновременно. Она используется для повышения эффективности использования ресурсов компьютера, ускорения работы программ и обработки нескольких задач параллельно.

### Атомарные Классы
Атомарные операции в Java представлены классами из пакета `java.util.concurrent.atomic`. Эти классы обеспечивают примитивы для выполнения потокобезопасных операций на одном переменном значении без использования `synchronized`. Атомарные классы очень полезны в многопоточных приложениях, когда множество потоков должно безопасно выполнять операции над одним и тем же значением.

#### Основные Атомарные Классы:

- **`AtomicInteger`, `AtomicLong`, `AtomicBoolean`**:
   - Предоставляют атомарные операции для работы с целыми числами (`int`, `long`) и логическими (`boolean`) значениями соответственно.
   - Методы включают `get()`, `set()`, `getAndIncrement()`, `getAndDecrement()`, `getAndAdd()`, `compareAndSet()` и многие другие.

- **`AtomicReference`**:
   - Позволяет атомарно работать с объектными ссылками.
   - Включает методы `get()`, `set()`, `compareAndSet()` и `getAndSet()`.

- **`AtomicIntegerArray`, `AtomicLongArray`, `AtomicReferenceArray`**:
   - Представляют массивы, элементы которых можно безопасно обновлять и получать в многопоточной среде.

### Особенности и Преимущества:

- **Потокобезопасность**: Атомарные классы гарантируют, что операции над переменными будут выполнены атомарно, то есть потокобезопасно и без вмешательства других потоков.
- **Эффективность**: Во многих случаях атомарные операции более эффективны, чем использование блокировок `synchronized`, особенно когда речь идет о простых операциях над отдельными переменными.
- **Блокировки и Контекстные Переключения**: Атомарные классы позволяют избежать блокировок и связанных с ними затрат, таких как контекстные переключения, которые могут быть дорогостоящими в многопоточных приложениях.

### Пример использования `AtomicInteger`:

```
import java.util.concurrent.atomic.AtomicInteger;

public class Counter {
    private final AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet(); // Атомарно увеличивает значение на 1
    }

    public int getCount() {
        return count.get(); // Возвращает текущее значение
    }
}
```

В этом примере `AtomicInteger` используется для создания потокобезопасного счетчика. Метод `incrementAndGet()` атомарно увеличивает значение счетчика, гарантируя, что каждый поток будет видеть актуальное значение.

Атомарные классы наиболее полезны, когда необходимо выполнять простые атомарные операции над одиночными переменными или элементами массива в многопоточной среде. Они помогают упростить код и увеличить его производительность за счет уменьшения необходимости в блокировках.
___

### Класс `AtomicInteger`
Класс `AtomicInteger` в Java предоставляет набор атомарных операций для работы с целыми числами (`int`). Эти операции гарантируют корректное поведение в многопоточной среде без необходимости синхронизации.

### Основные методы `AtomicInteger`:

1. **`get()`**: - Возвращает текущее значение. (`int val = atomicInt.get();`)

2. **`set(int newValue)`**: - Устанавливает заданное значение. (`atomicInt.set(123);`)

3. **`getAndSet(int newValue)`**: - Атомарно устанавливает новое значение и возвращает предыдущее. (`int oldValue = atomicInt.getAndSet(123);`)

4. **`compareAndSet(int expect, int update)`**: - Если текущее значение равно `expect`, атомарно устанавливает значение на `update`. Возвращает `true`, если успешно. (`boolean isSuccess = atomicInt.compareAndSet(123, 234);`)

5. **`getAndIncrement()`**, **`getAndDecrement()`**, **`getAndAdd(int delta)`**:
   - `getAndIncrement()`: Атомарно увеличивает текущее значение на 1 и возвращает предыдущее значение.
   - `getAndDecrement()`: Атомарно уменьшает на 1 и возвращает предыдущее значение.
   - `getAndAdd(int delta)`: Атомарно добавляет `delta` и возвращает предыдущее значение. (`int oldValue = atomicInt.getAndAdd(5);`)

6. **`incrementAndGet()`**, **`decrementAndGet()`**, **`addAndGet(int delta)`**: - Аналогично предыдущим методам, но возвращают новое значение. (`int newVal = atomicInt.addAndGet(5);`)

7. **`lazySet(int newValue)`**: - Устанавливает значение, как `set()`, но может иметь задержку в "видимости" этого изменения для других потоков. (`atomicInt.lazySet(123);`)

8. **`weakCompareAndSet(int expect, int update)`**: - Похож на `compareAndSet()`, но может не обеспечивать полную гарантию успеха операции в многопроцессорных системах. Он может быть эффективнее на некоторых архитектурах. (`atomicInt.weakCompareAndSet(123, 234);`)
___

### AtomicReference

`AtomicReference` в Java - это класс из пакета `java.util.concurrent.atomic`, который предоставляет способ безопасно работать с ссылками на объекты в многопоточной среде. `AtomicReference` обеспечивает атомарные операции для ссылок на объекты, что позволяет избежать проблем с согласованностью данных, которые могут возникнуть при использовании обычных ссылок в многопоточных приложениях.

```
import java.util.concurrent.atomic.AtomicReference;

public class Main {
    static class SharedObject {
        private String value;

        public SharedObject(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }

    public static void main(String[] args) throws InterruptedException {
        AtomicReference<SharedObject> atomicRef = new AtomicReference<>(new SharedObject("Initial"));

        Thread updater = new Thread(() -> {
            SharedObject current = atomicRef.get();
            SharedObject updated = new SharedObject("Updated");
            atomicRef.compareAndSet(current, updated);
        });

        updater.start();
        updater.join();

        System.out.println("New Value: " + atomicRef.get().getValue());
    }
}
```

В этом примере `AtomicReference` используется для атомарного обновления ссылки на `SharedObject`. Поток `updater` атомарно обновляет значение, используя `compareAndSet()`.
Главный поток затем выводит обновленное значение после того, как `updater` завершил свою работу.
___

### AtomicIntegerArray
`AtomicIntegerArray` - это класс в пакете `java.util.concurrent.atomic` в Java, предназначенный для безопасного выполнения атомарных операций на массиве целых чисел (`int[]`) в многопоточной среде. Этот класс обеспечивает атомарное обновление элементов массива, что позволяет избежать проблем с согласованностью данных и блокировками, характерными для многопоточных приложений.

```
import java.util.concurrent.atomic.AtomicIntegerArray;

public class Main {
    public static void main(String[] args) {
        AtomicIntegerArray atomicArray = new AtomicIntegerArray(10); // массив из 10 элементов

        // Установка значения
        atomicArray.set(0, 123);

        // Атомарное увеличение значения
        atomicArray.incrementAndGet(0);

        // Получение и вывод значения
        int value = atomicArray.get(0);
        System.out.println("Value: " + value);
    }
}
```

В этом примере создается `AtomicIntegerArray` размером 10 элементов. Демонстрируется установка значения, его атомарное увеличение и получение значения элемента массива.
___

### Класс Semaphore
Класс `Semaphore` в Java является частью пакета `java.util.concurrent` и представляет собой один из механизмов синхронизации. Основная функция семафора - управление доступом к общим ресурсам при параллельном выполнении кода в многопоточной среде.

### Основные Характеристики и Методы:

1. **Счетчик Разрешений (Permits)**:
   - `Semaphore` инициализируется определенным количеством "разрешений" (permits).
   - Количество разрешений указывает на то, сколько потоков может одновременно использовать общий ресурс.

2. **`acquire()` и `release()`**:
   - Метод `acquire()` используется потоком для получения разрешения. Если разрешение доступно, семафор уменьшает количество доступных разрешений и позволяет потоку продолжить выполнение. Если разрешения нет, поток блокируется до его освобождения.
   - Метод `release()` освобождает разрешение, возвращая его семафору. Это увеличивает количество доступных разрешений, и другой ожидающий поток может его захватить.

3. **Справедливость (Fairness)**:
   - `Semaphore` можно создать как справедливый (fair) или несправедливый (unfair). В справедливом режиме разрешения предоставляются ожидающим потокам в порядке их запросов.

4. **`tryAcquire()`**:
   - Этот метод позволяет потоку попытаться получить разрешение без блокировки. Он возвращает `true`, если разрешение было получено, и `false` в противном случае.

### Пример использования:

```
import java.util.concurrent.Semaphore;

public class SharedResource {
    private final Semaphore semaphore = new Semaphore(2); // Семафор с 2 разрешениями

    public void useResource() throws InterruptedException {
        semaphore.acquire(); // Запрос на получение разрешения
        try {
            // Действия с ресурсом
        } finally {
            semaphore.release(); // Освобождение разрешения
        }
    }
}
```

В этом примере семафор инициализирован двумя разрешениями, что означает, что два потока могут одновременно использовать общий ресурс. Другие потоки будут ожидать, пока одно из разрешений не будет освобождено.


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Multithreading
Multithreading in Java is a mechanism that allows executing two or more parts of a program simultaneously. It is used to enhance the efficiency of computer resource usage, speed up program execution, and handle multiple tasks in parallel.

## Atomic Classes
Atomic operations in Java are represented by classes from the `java.util.concurrent.atomic` package. These classes provide primitives for performing thread-safe operations on a single variable value without using `synchronized`. Atomic classes are very useful in multithreaded applications where multiple threads need to safely perform operations on the same value.

#### Main Atomic Classes:

- **`AtomicInteger`, `AtomicLong`, `AtomicBoolean`**:
   - Provide atomic operations for working with integer (`int`, `long`) and boolean (`boolean`) values, respectively.
   - Methods include `get()`, `set()`, `getAndIncrement()`, `getAndDecrement()`, `getAndAdd()`, `compareAndSet()`, and many more.

- **`AtomicReference`**:
   - Allows atomic operations on object references.
   - Includes methods `get()`, `set()`, `compareAndSet()`, and `getAndSet()`.

- **`AtomicIntegerArray`, `AtomicLongArray`, `AtomicReferenceArray`**:
   - Represent arrays whose elements can be safely updated and retrieved in a multithreaded environment.

### Features and Advantages:

- **Thread Safety**: Atomic classes ensure that operations on variables are performed atomically, meaning thread-safe and without interference from other threads.
- **Efficiency**: In many cases, atomic operations are more efficient than using `synchronized` locks, especially when dealing with simple operations on individual variables.
- **Locks and Context Switching**: Atomic classes help avoid locks and associated costs such as context switching, which can be expensive in multithreaded applications.

### Example of Using `AtomicInteger`:

```java
import java.util.concurrent.atomic.AtomicInteger;

public class Counter {
    private final AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet(); // Atomically increments the value by 1
    }

    public int getCount() {
        return count.get(); // Returns the current value
    }
}
```

In this example, `AtomicInteger` is used to create a thread-safe counter. The `incrementAndGet()` method atomically increases the counter's value, ensuring that each thread will see the updated value.

Atomic classes are most useful when simple atomic operations need to be performed on single variables or array elements in a multithreaded environment. They help simplify the code and enhance performance by reducing the need for locks.
___

### Class `AtomicInteger`
The `AtomicInteger` class in Java provides a set of atomic operations for working with integer (`int`) values. These operations ensure correct behavior in a multithreaded environment without the need for synchronization.

### Main Methods of `AtomicInteger`:

1. **`get()`**: - Returns the current value. (`int val = atomicInt.get();`)

2. **`set(int newValue)`**: - Sets the given value. (`atomicInt.set(123);`)

3. **`getAndSet(int newValue)`**: - Atomically sets the new value and returns the old one. (`int oldValue = atomicInt.getAndSet(123);`)

4. **`compareAndSet(int expect, int update)`**: - If the current value equals `expect`, atomically sets the value to `update`. Returns `true` if successful. (`boolean isSuccess = atomicInt.compareAndSet(123, 234);`)

5. **`getAndIncrement()`**, **`getAndDecrement()`**, **`getAndAdd(int delta)`**:
   - `getAndIncrement()`: Atomically increases the current value by 1 and returns the old value.
   - `getAndDecrement()`: Atomically decreases by 1 and returns the old value.
   - `getAndAdd(int delta)`: Atomically adds `delta` and returns the old value. (`int oldValue = atomicInt.getAndAdd(5);`)

6. **`incrementAndGet()`**, **`decrementAndGet()`**, **`addAndGet(int delta)`**: - Similar to the previous methods but return the new value. (`int newVal = atomicInt.addAndGet(5);`)

7. **`lazySet(int newValue)`**: - Sets the value, like `set()`, but may have a delay in the visibility of this change to other threads. (`atomicInt.lazySet(123);`)

8. **`weakCompareAndSet(int expect, int update)`**: - Similar to `compareAndSet()`, but may not provide a full guarantee of operation success in multiprocessor systems. It can be more efficient on some architectures. (`atomicInt.weakCompareAndSet(123, 234);`)
___

### AtomicReference

`AtomicReference` in Java is a class from the `java.util.concurrent.atomic` package that provides a way to safely work with object references in a multithreaded environment. `AtomicReference` ensures atomic operations for object references, allowing to avoid consistency issues that might arise when using regular references in multithreaded applications.

```
import java.util.concurrent.atomic.AtomicReference;

public class Main {
    static class SharedObject {
        private String value;

        public SharedObject(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }

    public static void main(String[] args) throws InterruptedException {
        AtomicReference<SharedObject> atomicRef = new AtomicReference<>(new SharedObject("Initial"));

        Thread updater = new Thread(() -> {
            SharedObject current = atomicRef.get();
            SharedObject updated = new SharedObject("Updated");
            atomicRef.compareAndSet(current, updated);
        });

        updater.start();
        updater.join();

        System.out.println("New Value: " + atomicRef.get().getValue());
    }
}
```

In this example, `AtomicReference` is used for atomically updating the reference to `SharedObject`. The `updater` thread atomically updates the value using `compareAndSet()`.
The main thread then prints the updated value after `updater` has completed its work.
___

### AtomicIntegerArray
`AtomicIntegerArray` is a class in the `java.util.concurrent.atomic` package in Java, designed for safe execution of atomic operations on an array of integers (`int[]`) in a multithreaded environment. This class provides atomic update of array elements, allowing to avoid consistency issues and locks typical for multithreaded applications.

```
import java.util.concurrent.atomic.AtomicIntegerArray;

public class Main {
    public static void main(String[] args) {
        AtomicIntegerArray atomicArray = new AtomicIntegerArray(10); // array of 10 elements

        // Setting a value
        atomicArray.set(0, 123);

        // Atomically incrementing the value
        atomicArray.incrementAndGet(0);

        // Retrieving and printing the value
        int value = atomicArray.get(0);
        System.out.println("Value: " + value);
    }
}
```

In this example, an `AtomicIntegerArray` of 10 elements is created. It demonstrates setting a value, atomically incrementing it, and retrieving the value of an array element.
___

### Class Semaphore
The `Semaphore` class in Java is part of the `java.util.concurrent` package and represents one of the synchronization mechanisms. The main function of a semaphore is to manage access to shared resources when executing code in parallel in a multithreaded environment.

### Main Characteristics and Methods:

1. **Permit Counter**:
   - A `Semaphore` is initialized with a certain number of "permits".
   - The number of permits indicates how many threads can simultaneously use a shared resource.

2. **`acquire()` and `release()`**:
   - The `acquire()` method is used by a thread to obtain a permit. If a permit is available, the semaphore decrements the number of available permits and allows the thread to proceed. If no permit is available, the thread is blocked until a permit is released.
   - The `release()` method releases a permit, returning it to the semaphore. This increases the number of available permits, and another waiting thread can capture it.

3. **Fairness**:
   - A `Semaphore` can be created as fair (fair) or unfair (unfair). In a fair mode, permits are granted to waiting threads in the order of their requests.

4. **`tryAcquire()`**:
   - This method allows a thread to attempt to obtain a permit without blocking. It returns `true` if the permit was obtained, and `false` otherwise.

### Example of Usage:

```
import java.util.concurrent.Semaphore;

public class SharedResource {
    private final Semaphore semaphore = new Semaphore(2); // Semaphore with 2 permits

    public void useResource() throws InterruptedException {
        semaphore.acquire(); // Request to obtain a permit
        try {
            // Actions with the resource
        } finally {
            semaphore.release(); // Releasing the permit
        }
    }
}
```

In this example, the semaphore is initialized with two permits, meaning two threads can simultaneously use the shared resource. Other threads will wait until one of the permits is released.

</details>