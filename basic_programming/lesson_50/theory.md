<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Исключительные ситуации (ошибки и исключения)

Исключения в Java — это важный аспект программирования, обеспечивающий обработку ошибок и других нештатных (исключительных) ситуаций в программе.

В иерархии исключений Java класс `Throwable` является корневым для всех ошибок и исключений. От него наследуются два основных подкласса:

- **`Exception`**: Этот класс представляет все проверяемые исключения, которые должны быть обработаны в программе. `Exception` далее делится на:
    - **Проверяемые исключения (Checked Exceptions)**: Например, `IOException`, `SQLException`.
    - **Непроверяемые исключения (Unchecked Exceptions)**: Эти исключения наследуются от `RuntimeException`, например, `ArithmeticException`, `NullPointerException`.

- **`Error`**: Этот класс представляет серьёзные ошибки, которые обычно связаны с работой виртуальной машины Java, и их не предполагается обрабатывать в обычных приложениях. Примеры включают `OutOfMemoryError`, `StackOverflowError`.

<img src="https://raw.githubusercontent.com/ait-tr/cohort35/main/basic_programming/lesson_50/img/Exeptions.jpeg" width="1200">


В Java исключения делятся на две основные категории:

1. **Проверяемые исключения (Checked Exceptions)**: Эти исключения должны быть явно обработаны в программе. Компилятор Java проверяет, правильно ли обработаны эти исключения, и если нет, он выдаёт ошибку компиляции. Примеры включают `IOException`, `SQLException`.

2. **Непроверяемые исключения (Unchecked Exceptions)**: Эти исключения не требуют явной обработки. Они в основном указывают на ошибки в программе, такие как деление на ноль (`ArithmeticException`) или обращение к элементу за пределами массива (`ArrayIndexOutOfBoundsException`). Непроверяемые исключения наследуются от `RuntimeException`.

Всего в Java классов-исключений почти 400! Зачем так много? Именно для того, чтобы программистам было удобнее с ними работать.


Проверяемые исключения (checked exceptions) — это тип исключений, наличие которых вы обязаны проверить в своём коде и обработать их.
В Java компилятор требует, чтобы все методы, которые могут выбросить проверяемое исключение, либо обрабатывали это исключение с помощью блока `try-catch`, либо объявляли это исключение в своей сигнатуре с помощью ключевого слова `throws`.

Пример с `FileNotFoundException`:

```
public class CheckedExceptionExample {
    public void readFile(String filePath) throws FileNotFoundException {
        FileReader file = new FileReader(filePath); // FileReader выбрасывает FileNotFoundException
    }
    
    public static void main(String[] args) {
        CheckedExceptionExample example = new CheckedExceptionExample();
        try {
            example.readFile("somefile.txt");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

В примере выше, метод `readFile` объявляет, что он может выбросить `FileNotFoundException`, которое является проверяемым исключением. Это означает, что любой код, вызывающий `readFile`, должен либо обработать это исключение (использовать `try-catch`), либо также объявить `throws FileNotFoundException` в своей сигнатуре.

#### Обработка исключений
Обработка исключений в Java включает в себя несколько ключевых концепций и конструкций:

- **try-catch**: Блок `try` используется для оборачивания кода, который может вызвать исключение, а `catch` для перехвата и обработки исключения.

```
try {
    // код, который может вызвать исключение
} catch (ExceptionType name) {
    // код для обработки исключения
}
```

- **finally**: Блок `finally` используется для кода, который должен выполниться независимо от того, было ли исключение перехвачено.

```
try {
    // код, который может вызвать исключение
} catch (ExceptionType name) {
    // код для обработки исключения
} finally {
    // код, который выполнится в любом случае
}
```

- **throws**: Ключевое слово `throws` используется в сигнатуре метода для указания, что метод может выбросить исключение.

```
public void myMethod() throws ExceptionType {
    // если здесь произойдет исключение, оно будет выброшено
}
```

- **throw**: Ключевое слово `throw` используется для явного выброса исключения.

```
public void myMethod() {
    if (someCondition) {
        throw new ExceptionType("Сообщение об ошибке");
    }
}
```

### Создание собственных исключений
Вы можете создать свой класс исключений, наследуя от класса `Exception` (для проверяемых) или `RuntimeException` (для непроверяемых).

```
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
```

**Переопределение методов при наследовании от `RuntimeException`**:

Когда вы наследуетесь от `RuntimeException`, вы можете переопределить несколько методов, чтобы обеспечить более детальную информацию об исключении, например:

- `getMessage()`: Возвращает строку с описанием исключения.
- `getCause()`: Возвращает исключение, которое вызвало текущее исключение.
- `toString()`: Возвращает строковое представление объекта исключения.
- `printStackTrace()`: Выводит трассировку стека исключения.

```
public class MyRuntimeException extends RuntimeException {
    public MyRuntimeException(String message) {
        super(message);
    }

    @Override
    public String getMessage() {
        return "Дополнительное сообщение: " + super.getMessage();
    }

    // Другие методы можно переопределить по необходимости
}
```

Каждый из этих методов может быть переопределен для предоставления специализированной информации о вашем исключении. Однако стоит отметить, что переопределение методов `RuntimeException` не обязательно; это делается только для добавления функциональности или информации к вашему собственному исключению.

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

Exception handling in Java is a crucial aspect of programming that ensures the handling of errors and other non-standard (exceptional) situations in a program.

In the Java exception hierarchy, the `Throwable` class is the root for all errors and exceptions. It has two main subclasses:

- **`Exception`**: This class represents all the checked exceptions that must be handled within the program. `Exception` further divides into:
  - **Checked Exceptions**: For example, `IOException`, `SQLException`.
  - **Unchecked Exceptions**: These exceptions are derived from `RuntimeException`, for example, `ArithmeticException`, `NullPointerException`.

- **`Error`**: This class represents serious issues that are usually related to the operation of the Java Virtual Machine, and they are not expected to be handled by regular applications. Examples include `OutOfMemoryError`, `StackOverflowError`.

![Exception Hierarchy](https://raw.githubusercontent.com/ait-tr/cohort35/main/basic_programming/lesson_50/img/Exeptions.jpeg)

In Java, exceptions are divided into two main categories:

1. **Checked Exceptions**: These exceptions must be explicitly handled within the program. The Java compiler checks to ensure these exceptions are properly handled, and if not, it will throw a compilation error. Examples include `IOException`, `SQLException`.

2. **Unchecked Exceptions**: These exceptions do not require explicit handling. They mostly indicate errors in the program, such as division by zero (`ArithmeticException`) or accessing an element beyond the bounds of an array (`ArrayIndexOutOfBoundsException`). Unchecked exceptions are derived from `RuntimeException`.

There are almost 400 exception classes in Java! Why so many? It's precisely to make it more convenient for programmers to work with them.

Checked exceptions are the type of exceptions that you are obligated to check for in your code and handle them.
In Java, the compiler requires that all methods that can throw a checked exception either handle this exception using a `try-catch` block or declare this exception in their signature with the `throws` keyword.

Example with `FileNotFoundException`:

```
public class CheckedExceptionExample {
    public void readFile(String filePath) throws FileNotFoundException {
        FileReader file = new FileReader(filePath); // FileReader throws FileNotFoundException
    }
    
    public static void main(String[] args) {
        CheckedExceptionExample example = new CheckedExceptionExample();
        try {
            example.readFile("somefile.txt");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

In the example above, the `readFile` method declares that it may throw `FileNotFoundException`, which is a checked exception. This means that any code calling `readFile` must either handle this exception (use `try-catch`) or also declare `throws FileNotFoundException` in its own signature.

#### Exception Handling
Exception handling in Java involves several key concepts and constructs:

- **try-catch**: The `try` block is used to wrap code that may cause an exception, and `catch` is used to intercept and handle the exception.

```
try {
    // code that may cause an exception
} catch (ExceptionType name) {
    // code to handle the exception
}
```

- **finally**: The `finally` block is used for code that must execute regardless of whether an exception was caught.

```
try {
    // code that may cause an exception
} catch (ExceptionType name) {
    // code to handle the exception
} finally {
    // code that will execute in any case
}
```

- **throws**: The `throws` keyword is used in a method's signature to indicate that the method may throw an exception.

```
public void myMethod() throws ExceptionType {
    // if an exception occurs here, it will be thrown
}
```

- **throw**: The `throw` keyword is used to explicitly throw an exception.

```
public void myMethod() {
    if (someCondition) {
        throw new ExceptionType("Error message");
    }
}
```

### Creating Custom Exceptions
You can create your own exception class by inheriting from the `Exception` class (for checked exceptions) or `RuntimeException` (for unchecked exceptions).

```
public class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
```

**Overriding Methods When Inheriting from `RuntimeException`**:

When you inherit from `RuntimeException`, you can override several methods to provide more detailed information about the exception, for example:

- `getMessage()`: Returns a string describing the exception.
- `getCause()`: Returns the exception that caused the current exception.
- `toString()`: Returns the string representation of the exception object.
- `printStackTrace()`: Prints the exception's stack trace.

```
public class MyRuntimeException extends RuntimeException {
    public MyRuntimeException(String message) {
        super(message);
    }

    @Override
    public String getMessage() {
        return "Additional message: " + super.getMessage();
    }

    // Other methods can be overridden as needed


}
```

Each of these methods can be overridden to provide specialized information about your exception. However, it should be noted that overriding methods from `RuntimeException` is not mandatory; it is done only to add functionality or information to your own exception.

</details>