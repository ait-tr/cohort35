<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Multithreading
Многопоточность в Java — это механизм, позволяющий выполнять две или более части программы одновременно. Она используется для повышения эффективности использования ресурсов компьютера, ускорения работы программ и обработки нескольких задач параллельно.

### Основные Понятия и Определения:

1. **Поток (Thread)**: Это наименьшая единица обработки, которая может быть выполнена операционной системой. В Java поток представляется классом `Thread`.

2. **Процесс**: Это выполнение программы. Процесс может содержать несколько потоков.

3. **Многопоточность (Multithreading)**: Поддержка множества потоков в программе.

4. **Конкуренция (Concurrency)**: Позволяет нескольким потокам работать одновременно, но не обязательно параллельно.

5. **Параллелизм (Parallelism)**: Параллельная обработка нескольких задач.

6. **Синхронизация (Synchronization)**: Механизм, обеспечивающий, что только один поток может выполнять определенный блок кода в один и тот же момент времени.

7. **Deadlock**: Ситуация в многопоточной среде, когда два или более потоков блокируют друг друга, ожидая ресурсы, которые занимает другой поток.

8. **Race Condition**: Ошибка в многопоточном коде, когда несколько потоков пытаются одновременно изменить общие данные, что приводит к непредсказуемым результатам.

### Использование многопоточности:

- **Параллельная обработка данных**: Распределение данных по разным потокам для параллельной обработки, что ускоряет выполнение.
- **Отзывчивый пользовательский интерфейс**: Выполнение длительных операций (например, сетевых запросов) в отдельном потоке для предотвращения "заморозки" интерфейса.
- **Асинхронное программирование**: Выполнение задач в фоновом режиме, позволяя основному потоку продолжать работу без блокировки.

Работа с многопоточностью требует внимательного управления ресурсами и синхронизации, чтобы избежать проблем с безопасностью потоков. 

Неправильное использование многопоточности может привести к ошибкам, сложным для отладки, таким как deadlocks и race conditions.

### Thread
В мире многопоточности Java ключевую роль играет класс `java.lang.Thread`. Потоки в Java представляются именно экземплярами этого класса. Каждый поток — это отдельный экземпляр `Thread`, выполняющий определенную задачу.

Чтобы начать работу с потоками, нужно сначала создать класс, который является подклассом `java.lang.Thread`. В этом классе вы переопределяете метод `run()`, который определяет действия, выполняемые потоком при его запуске.

```
class MyTask extends Thread {
    @Override
    public void run() {
        // Здесь код, который нужно выполнить в потоке
    }
}
```

Для запуска потока вы создаете экземпляр вашего класса и вызываете метод `start()`, который автоматически вызовет `run()`:

```
MyTask task = new MyTask();
task.start(); // Запускает выполнение кода в методе run() в новом потоке
```

Порядок выполнения потоков в многопоточной программе **не является** гарантированным.

Ключевые аспекты, которые следует учитывать:
- **Конкуренция за процессорное время**;
- **Недетерминированный порядок выполнения**;
- **Доступ к ресурсам**;
- **Синхронизация и блокировка**;

### Интерфейс `Runnable`
В Java, помимо наследования от класса `Thread`, существует другой популярный и гибкий способ создания потоков — реализация интерфейса `Runnable`. Этот подход предпочтителен, поскольку он поддерживает концепцию разделения задачи и механизма её выполнения.

`Runnable` — это функциональный интерфейс в Java, который имеет один метод без аргументов:
   ```
   public interface Runnable {
       void run();
   }
   ```

**Метод `run()`**:
Метод `run()` определяет код, который будет выполняться в новом потоке. Когда вы реализуете `Runnable`, вам нужно предоставить реализацию для этого метода.

**Создание класса, реализующего `Runnable`**:
   ```
   class MyRunnable implements Runnable {
       @Override
       public void run() {
           // Код, который должен выполняться в потоке
           System.out.println("Поток запущен с использованием Runnable");
       }
   }
   ```

Для запуска потока с вашей реализацией `Runnable`, вы должны передать экземпляр вашего класса в конструктор `Thread` и затем вызвать `start()`:
   ```
   Thread thread = new Thread(new MyRunnable());
   thread.start();
   ```


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

### Multithreading in Java

Multithreading in Java is a mechanism that allows executing multiple parts of a program simultaneously. It's used to maximize the efficiency of resource utilization, speed up program execution, and handle multiple tasks concurrently.

#### Key Concepts and Definitions:

1. **Thread**: The smallest unit of processing that can be performed by an operating system. In Java, a thread is represented by the `Thread` class.

2. **Process**: The execution of a program. A process can contain multiple threads.

3. **Multithreading**: Support for multiple threads within a program.

4. **Concurrency**: Allows multiple threads to work simultaneously but not necessarily in parallel.

5. **Parallelism**: Parallel processing of multiple tasks.

6. **Synchronization**: A mechanism that ensures only one thread can execute a specific code block at a time.

7. **Deadlock**: A situation in a multithreaded environment where two or more threads block each other, waiting for resources held by the other thread.

8. **Race Condition**: An error in multithreaded code where multiple threads try to modify shared data simultaneously, leading to unpredictable outcomes.

#### Using Multithreading:

- **Parallel Data Processing**: Distributing data across different threads for parallel processing, accelerating execution.
- **Responsive User Interfaces**: Performing long operations (like network requests) in a separate thread to prevent UI "freezing."
- **Asynchronous Programming**: Performing tasks in the background, allowing the main thread to continue working without blocking.

Proper management of resources and synchronization is required to avoid thread safety issues when working with multithreading.

Incorrect use of multithreading can lead to hard-to-debug errors such as deadlocks and race conditions.

#### Thread Class
In the world of Java multithreading, the `java.lang.Thread` class plays a key role. Each thread in Java is an instance of this class, executing a specific task.

To start working with threads, you first create a class that extends `java.lang.Thread`. In this class, you override the `run()` method, which defines the actions performed by the thread when it starts.

```
class MyTask extends Thread {
    @Override
    public void run() {
        // Code to be executed in the thread
    }
}

MyTask task = new MyTask();
task.start(); // Starts executing the code in the run() method in a new thread
```

The order of execution of threads in a multithreaded program is **not guaranteed**.

Key aspects to consider:
- **Competition for CPU time**;
- **Non-deterministic execution order**;
- **Resource access**;
- **Synchronization and locking**;

#### Runnable Interface
In Java, besides inheriting from the `Thread` class, there's another popular and flexible way to create threads - implementing the `Runnable` interface. This approach is preferable as it supports the concept of separating the task and the execution mechanism.

`Runnable` is a functional interface in Java with a single method without arguments:

```
public interface Runnable {
    void run();
}
```

**`run()` Method**:
The `run()` method defines the code that will run in the new thread. When you implement `Runnable`, you provide an implementation for this method.

**Creating a Class Implementing `Runnable`**:
```
class MyRunnable implements Runnable {
    @Override
    public void run() {
        // Code to be executed in the thread
        System.out.println("Thread started using Runnable");
    }
}

Thread thread = new Thread(new MyRunnable());
thread.start();
```

Using the `Runnable` interface allows more flexibility in the design of your multithreaded applications, and it's generally the preferred method for creating threads in Java.

</details>