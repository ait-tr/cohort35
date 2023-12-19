<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Multithreading
Многопоточность в Java — это механизм, позволяющий выполнять две или более части программы одновременно. Она используется для повышения эффективности использования ресурсов компьютера, ускорения работы программ и обработки нескольких задач параллельно.

### Методы wait() и notify()

Методы `wait()` и `notify()` в Java используются в многопоточном программировании для обеспечения синхронизации между потоками. Они часть класса `Object`, что означает, что каждый объект в Java имеет эти методы. Эти методы должны вызываться в синхронизированном контексте, то есть внутри блока `synchronized`.

### wait()
Метод `wait()` заставляет текущий поток ожидать до тех пор, пока другой поток не вызовет `notify()` или `notifyAll()` для того же объекта. При вызове `wait()`:
1. Текущий поток освобождает блокировку объекта (отпускает монитор объекта) и переходит в состояние ожидания.
2. Поток остается в состоянии ожидания до тех пор, пока:
    - Другой поток не вызовет `notify()` на том же объекте.
    - Другой поток не вызовет `notifyAll()`.
    - Истечет время ожидания (если указано).
3. Когда поток выходит из состояния ожидания, он пытается снова захватить монитор объекта и продолжить выполнение.

### notify() и notifyAll()
`notify()` и `notifyAll()` используются для уведомления потоков, которые ожидают на объекте (вызвали `wait()` на этом объекте).
- `notify()`: Пробуждает один из ожидающих потоков. Выбор потока происходит произвольно и зависит от реализации JVM.
- `notifyAll()`: Пробуждает все ожидающие потоки, которые ждут на этом объекте.

### Пример использования
Рассмотрим классический пример производителя и потребителя:

```
class Buffer {
    private int data;
    private boolean empty = true;

    public synchronized void put(int newData) {
        while (!empty) {
            try {
                wait(); // Ожидает, пока данные не будут извлечены
            } catch (InterruptedException e) { }
        }
        data = newData;
        empty = false;
        notifyAll(); // Уведомляет потребителей о наличии новых данных
    }

    public synchronized int get() {
        while (empty) {
            try {
                wait(); // Ожидает, пока данные не будут помещены
            } catch (InterruptedException e) { }
        }
        empty = true;
        notifyAll(); // Уведомляет производителей, что данные были извлечены
        return data;
    }
}
```

В этом примере `Buffer` представляет собой общий ресурс между производителем и потребителем. Производитель вызывает `put()` для помещения данных в буфер и использует `wait()` для ожидания, пока потребитель не извлечет данные. Потребитель вызывает `get()` для извлечения данных и также использует `wait()`, если буфер пуст. Методы `notifyAll()` используются обоими для уведомления друг друга о изменении состояния буфера.

### Важные замечания
- Методы `wait()`, `notify()`, и `notifyAll()` могут вызываться только внутри синхронизированного блока или метода.
- Неправильное использование этих методов может привести к проблемам, таким как взаимные блокировки (deadlocks) или чрезмерное ожидание (livelocks).

___

### Класс `CountDownLatch`

Класс `CountDownLatch` в Java - это утилита для синхронизации, которая позволяет одному или нескольким потокам ждать до тех пор, пока не будет выполнено определенное количество операций в других потоках. Он входит в пакет `java.util.concurrent` и представляет собой мощный инструмент для управления параллельной обработкой.

### Основные Характеристики:

1. **Счетчик**: `CountDownLatch` инициализируется счетчиком. Счетчик представляет количество операций, которые должны быть выполнены, прежде чем потоки могут продолжить выполнение.

2. **Метод `await()`**: Потоки, вызывающие `await()`, блокируются до тех пор, пока счетчик `CountDownLatch` не станет равным нулю.

3. **Метод `countDown()`**: Каждый раз, когда вызывается `countDown()`, счетчик уменьшается на единицу. Когда счетчик достигает нуля, все ожидающие потоки одновременно разблокируются.

4. **Одноразовое использование**: После того, как счетчик достигает нуля, `CountDownLatch` становится неиспользуемым. Нет возможности сбросить или изменить его значение, в отличие от `CyclicBarrier`.

### Пример использования:

```
import java.util.concurrent.CountDownLatch;

public class Main {
    public static void main(String[] args) {
        int count = 3;
        CountDownLatch latch = new CountDownLatch(count);

        for (int i = 0; i < count; i++) {
            new Thread(new Worker(latch)).start();
        }

        try {
            latch.await(); // Ожидание, пока рабочие потоки не выполнены
            System.out.println("Все рабочие потоки завершили выполнение.");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class Worker implements Runnable {
    private final CountDownLatch latch;

    Worker(CountDownLatch latch) {
        this.latch = latch;
    }

    @Override
    public void run() {
        // Работа потока
        System.out.println("Поток выполнен");
        latch.countDown(); // Уменьшение счетчика
    }
}
```

В этом примере создается `CountDownLatch` с начальным значением счетчика 3. Затем запускаются три рабочих потока, каждый из которых уменьшает счетчик на 1. Основной поток ожидает на `latch.await()`, пока все рабочие потоки не вызовут `countDown()` и счетчик не станет равным нулю.

### Применение:
`CountDownLatch` часто используется в сценариях, где один поток должен ждать завершения серии операций, выполняемых другими потоками, прежде чем продолжить выполнение. Это может быть полезно в случаях, таких как инициализация ресурсов, параллельная обработка задач или ожидание завершения всех задач перед продолжением выполнения основной программы.

___

### ReentrantLock

`ReentrantLock` в Java является одним из механизмов синхронизации, который предоставляет больше возможностей и гибкости по сравнению со стандартным синхронизированным блоком (`synchronized`). Он входит в пакет `java.util.concurrent.locks`.

### Основные характеристики `ReentrantLock`:

1. **Возможность Прерывания и Ожидания**: `ReentrantLock` позволяет потокам ожидать блокировки с возможностью прерывания (interruptibly wait), что невозможно с обычными синхронизированными блоками.

2. **Повторное Захватывание (Reentrancy)**: Это означает, что поток, уже владеющий блокировкой, может повторно входить в блок кода, контролируемый этой блокировкой, не блокируясь.

3. **Попытка Захвата Блокировки**: `ReentrantLock` предоставляет возможность попытаться захватить блокировку, не входя в состояние блокировки, если она недоступна.

4. **Справедливость**: Можно создать экземпляр `ReentrantLock` как "справедливый" (`fair`). В этом случае потоки будут получать блокировку в порядке их запросов (FIFO), что снижает вероятность "голодания" потоков, но может уменьшить производительность.

### Использование:

```
import java.util.concurrent.locks.ReentrantLock;

public class SharedResource {
    private final ReentrantLock lock = new ReentrantLock();

    public void perform() {
        lock.lock();  // Захват блокировки
        try {
            // Код, требующий синхронизации
        } finally {
            lock.unlock(); // Важно разблокировать в finally блоке
        }
    }
}
```

### Преимущества `ReentrantLock`:

- **Большая Гибкость**: Позволяет определять справедливый или несправедливый порядок захвата блокировки, позволяет прерывать ожидающие потоки и пытаться захватить блокировку без блокирования.
- **Улучшенное Управление**: Дает программисту полный контроль над блокировкой и разблокировкой.
- **Условные Переменные**: `ReentrantLock` позволяет работать с одной или несколькими `Condition` инстансами, которые связаны с блокировкой и могут быть использованы для управления потоками, ожидающими на определенных условиях.

### Недостатки `ReentrantLock`:

- **Сложность**: Использование `ReentrantLock` требует более аккуратного управления, чтобы избежать ошибок (например, забыть разблокировать блокировку).
- **Риск Deadlock**: Неправильное использование может привести к взаимной блокировке.

`ReentrantLock` подходит для сложных многопоточных задач, где необходим улучшенный контроль над механизмами синхронизации по сравнению со стандартными синхронизированными блоками.

### Основные Методы `ReentrantLock`:

1. **`lock()`**:
   - Захватывает блокировку.
   - Если блокировка не доступна (уже захвачена другим потоком), текущий поток блокируется до тех пор, пока блокировка не станет доступной.
   - Относится к несправедливым блокировкам, если не указано иное при создании экземпляра `ReentrantLock`.

2. **`unlock()`**:
   - Освобождает блокировку.
   - Если есть другие потоки, ожидающие блокировку, один из них будет выбран для получения блокировки.
   - Должен вызываться в блоке `finally` для обеспечения того, чтобы блокировка была освобождена даже в случае исключений.

3. **`tryLock()`**:
   - Пытается захватить блокировку без ожидания.
   - Возвращает `true`, если блокировка была успешно захвачена, и `false`, если блокировка недоступна.
   - Полезно, когда нужно избежать блокировки потока.

4. **`tryLock(long timeout, TimeUnit unit)`**:
   - Пытается захватить блокировку в течение заданного времени.
   - Возвращает `true`, если блокировка была захвачена за указанное время, и `false`, если время ожидания истекло.

5. **`lockInterruptibly()`**:
   - Захватывает блокировку, если она доступна, и позволяет текущему потоку быть прерванным во время ожидания блокировки.
   - Этот метод делает поток чувствительным к прерываниям во время ожидания блокировки.

6. **`newCondition()`**:
   - Возвращает объект `Condition`, связанный с текущим экземпляром `ReentrantLock`.
   - `Condition` предоставляет методы типа `await()`, `signal()`, и `signalAll()`, которые работают аналогично методам `wait()`, `notify()` и `notifyAll()` объекта монитора.


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Multithreading
Multithreading in Java is a mechanism that allows executing two or more parts of a program simultaneously. It is used to enhance the efficiency of computer resource usage, speed up program execution, and handle multiple tasks in parallel.

### Methods wait() and notify()

The `wait()` and `notify()` methods in Java are used in multithreaded programming to ensure synchronization between threads. They are part of the `Object` class, meaning every object in Java has these methods. They must be called within a synchronized context, i.e., inside a `synchronized` block.

### wait()
The `wait()` method makes the current thread wait until another thread calls `notify()` or `notifyAll()` on the same object. When `wait()` is called:
1. The current thread releases the lock on the object (releases the object's monitor) and enters a waiting state.
2. The thread remains in a waiting state until:
   - Another thread calls `notify()` on the same object.
   - Another thread calls `notifyAll()`.
   - The waiting time expires (if specified).
3. When the thread exits the waiting state, it attempts to re-acquire the monitor of the object and continue execution.

### notify() and notifyAll()
`notify()` and `notifyAll()` are used to notify threads waiting on an object (called `wait()` on this object).
- `notify()`: Wakes up one of the waiting threads. The choice of thread is arbitrary and depends on the JVM's implementation.
- `notifyAll()`: Wakes up all the threads waiting on this object.

### Usage Example
Consider the classic producer-consumer example:

```
class Buffer {
    private int data;
    private boolean empty = true;

    public synchronized void put(int newData) {
        while (!empty) {
            try {
                wait(); // Waits until data is extracted
            } catch (InterruptedException e) { }
        }
        data = newData;
        empty = false;
        notifyAll(); // Notifies consumers of new data availability
    }

    public synchronized int get() {
        while (empty) {
            try {
                wait(); // Waits until data is placed
            } catch (InterruptedException e) { }
        }
        empty = true;
        notifyAll(); // Notifies producers that data has been extracted
        return data;
    }
}
```

In this example, `Buffer` represents a shared resource between producer and consumer. The producer calls `put()` to place data into the buffer and uses `wait()` to wait until the consumer extracts the data. The consumer calls `get()` to extract data and also uses `wait()` if the buffer is empty. Both use `notifyAll()` methods to notify each other about changes in the buffer's state.

### Important Notes
- The `wait()`, `notify()`, and `notifyAll()` methods can only be called within a synchronized block or method.
- Improper use of these methods can lead to issues like deadlocks or livelocks.

___

### Class `CountDownLatch`

The `CountDownLatch` class in Java is a synchronization utility that allows one or multiple threads to wait until a certain number of operations are performed in other threads. It is part of the `java.util.concurrent` package and represents a powerful tool for managing parallel processing.

### Main Characteristics:

1. **Task Counter**: `CountDownLatch` is initialized with a task counter. This counter indicates the number of tasks or events that must be completed or occur before the threads waiting on the `latch` can proceed.

2. **Method `await()`**: Threads calling the `await()` method on a `CountDownLatch` instance will wait until the counter reaches zero.

3. **Method `countDown()`**: Each call to `countDown()` decreases the counter by one. When the counter reaches zero, all waiting threads are released simultaneously.

4. **One-time Use**: Once the counter reaches zero, the `CountDownLatch` becomes unusable. There is no way to reset or reuse it, unlike `CyclicBarrier`.

### Usage Example:

```
import java.util.concurrent.CountDownLatch;

public class Main {
    public static void main(String[] args) {
        int count = 3;
        CountDownLatch latch = new CountDownLatch(count);

        for (int i = 0; i < count; i++) {
            new Thread(new Worker(latch)).start();
        }

        try {
            latch.await(); // Main thread waits for all tasks to be completed
            System.out.println("All worker threads have completed execution.");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class Worker implements Runnable {
    private final CountDownLatch latch;

    Worker(CountDownLatch latch) {
        this.latch = latch;
    }

    @Override
    public void run() {
        // Task execution...
        System.out.println("Thread completed");
        latch.countDown(); // Decrease task counter by 1
    }
}


```

In this example, the main thread creates a `CountDownLatch` with an initial counter of 3 and starts three worker threads. Each thread decreases the counter by 1. The main thread waits on `latch.await()` until the counter reaches zero, indicating the completion of all tasks.

### Application:
`CountDownLatch` is often used in scenarios where one thread needs to wait for the completion of certain operations performed by other threads. This can include scenarios such as resource initialization, simultaneous start of multiple threads, waiting for the completion of stages in distributed data processing, etc.

___

### ReentrantLock

`ReentrantLock` in Java is a synchronization mechanism that provides more features and flexibility compared to the standard synchronized block (`synchronized`). It is part of the `java.util.concurrent.locks` package.

### Main Characteristics of `ReentrantLock`:

1. **Interruptibility and Waiting Capability**: `ReentrantLock` allows threads to wait for a lock with the ability to be interrupted (interruptibly wait), which is not possible with regular synchronized blocks.

2. **Reentrancy**: This means that a thread already holding the lock can re-enter a block of code controlled by that lock without being blocked.

3. **Lock Acquisition Attempt**: `ReentrantLock` provides the ability to attempt to acquire the lock without entering a blocked state if it is unavailable.

4. **Fairness**: It's possible to create a `ReentrantLock` instance as "fair" (`fair`). In this case, threads will acquire the lock in the order of their requests (FIFO), reducing the likelihood of thread starvation but possibly reducing performance.

### Usage:

```
import java.util.concurrent.locks.ReentrantLock;

public class SharedResource {
    private final ReentrantLock lock = new ReentrantLock();

    public void perform() {
        lock.lock();  // Acquire the lock
        try {
            // Code requiring synchronization
        } finally {
            lock.unlock(); // Important to unlock in a finally block
        }
    }
}
```

### Advantages of `ReentrantLock`:

- **Greater Flexibility**: Allows defining fair or unfair lock acquisition order, permits interrupting waiting threads, and attempts to acquire the lock without blocking.
- **Enhanced Control**: Gives the programmer full control over locking and unlocking.
- **Conditional Variables**: `ReentrantLock` allows working with one or more `Condition` instances associated with the lock, which can be used to manage threads waiting on specific conditions.

### Disadvantages of `ReentrantLock`:

- **Complexity**: Using `ReentrantLock` requires more careful management to avoid mistakes, such as forgetting to unlock the lock.
- **Deadlock Risk**: Incorrect use can lead to deadlocks.

`ReentrantLock` is suitable for complex multithreaded tasks where enhanced control over synchronization mechanisms is needed compared to standard synchronized blocks.

### Main Methods of `ReentrantLock`:

1. **`lock()`**:
   - Acquires the lock.
   - If the lock is unavailable (already captured by another thread), the current thread is blocked until the lock becomes available.
   - Applies to unfair locks unless specified otherwise when creating a `ReentrantLock` instance.

2. **`unlock()`**:
   - Releases the lock.
   - If there are other threads waiting for the lock, one of them will be chosen to acquire the lock.
   - Should be called in a `finally` block to ensure the lock is released even in case of exceptions.

3. **`tryLock()`**:
   - Attempts to acquire the lock without waiting.
   - Returns `true` if the lock was successfully captured, and `false` if the lock is unavailable.
   - Useful when avoiding thread blocking is necessary.

4. **`tryLock(long timeout, TimeUnit unit)`**:
   - Attempts to acquire the lock within a specified time.
   - Returns `true` if the lock was captured within the given time, and `false` if the waiting time elapsed.

5. **`lockInterruptibly()`**:
   - Acquires the lock if available and allows the current thread to be interrupted while waiting for the lock.
   - This method makes the thread sensitive to interruptions while waiting for the lock.

6. **`newCondition()`**:
   - Returns a `Condition` object associated with the current `ReentrantLock` instance.
   - `Condition` provides methods like `await()`, `signal()`, and `signalAll()`, which function similarly to the `wait()`, `notify()`, and `notifyAll()` methods of the object monitor.
</details>