<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Интерфейсы

Механизм наследования очень удобен, но он имеет свои ограничения. В частности мы можем наследовать только от одного класса.

В языке Java подобную проблему частично позволяют решить интерфейсы. Интерфейсы определяют некоторый функционал, не имеющий конкретной реализации, который затем реализуют классы, применяющие эти интерфейсы.
Ключевое отличие от наследования - один класс может применить множество интерфейсов.

**Интерфейс** – это ссылочный тип в Java. Он схож с классом. Это совокупность абстрактных методов.
Класс реализует интерфейс, таким образом наследуя абстрактные методы интерфейса.

Написание интерфейса схоже с написанием абстрактного класса. Но класс описывает атрибуты и поведения объекта.
А интерфейс **содержит поведения**, которые класс реализует.

Если класс, реализующий интерфейс, не является абстрактным, **все методы интерфейса должны быть определены в классе**.

Вместе с абстрактными методами интерфейс в Java может содержать константы, обычные методы, статические методы и вложенные типы.


Для объявления интерфейса используется ключевое слово `interface`.

```
public interface Printable {
    void print();
}
```

```
public class Book implements Printable {

    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    @Override
    public void print() {
        System.out.printf("Book: %s (%s)\n", title, author);
    }
}
```

Интерфейсы имеют следующие свойства:

- Интерфейс абстрактный косвенно. Вам не нужно использовать ключевое слово abstract во время объявления интерфейса. 
- Каждый метод в интерфейсе косвенно абстрактным, поэтому ключевое слово abstract не нужно. 
- Методы в интерфейсе косвенно публичны.

### Реализация интерфейса
Когда класс реализует интерфейс, вы можете представить себе, что класс словно **подписывает контракт** с интерфейсом,
соглашаясь совершить конкретные его поведения.
Если класс не исполняет все поведения интерфейса, то класс должен объявить себя абстрактным.

Класс использует ключевое слово `implements` для реализации интерфейса.

### Расширение интерфейсов
Интерфейс может расширять другой интерфейс так же, как класс другой класс. Ключевое слово `extends` используется для расширения интерфейса, и дочерний интерфейс наследует методы родительского интерфейса.

### Методы по умолчанию
Ранее до JDK 8 при реализации интерфейса мы должны были обязательно реализовать все его методы в классе.
А сам интерфейс мог содержать только определения методов без конкретной реализации.
В JDK 8 была добавлена такая функциональность как **методы по умолчанию**. 
И теперь интерфейсы кроме определения методов могут иметь их реализацию по умолчанию, которая используется, если класс, реализующий данный интерфейс, не реализует метод.

Например, создадим метод по умолчанию в интерфейсе Printable:

```
public interface Printable {
     
    default void print(){
        System.out.println("Undefined printable");
    }
}

```


Метод по умолчанию - это обычный метод без модификаторов, который помечается ключевым словом `default`.
Затем в классе нам необязательно этот метод реализовать, хотя мы можем его и переопределить.

### Статические методы
Начиная с JDK 8 в интерфейсах доступны статические методы - они аналогичны методам класса.
Чтобы обратиться к статическому методу интерфейса также, как и в случае с классами, пишут название интерфейса и метод.


### Приватные методы
По умолчанию все методы в интерфейсе фактически имеют модификатор public.
Однако начиная с Java 9 мы также можем определять в интерфейсе методы с модификатором private.
Они могут быть статическими и нестатическими, но они не могут быть переопределены в классе.

### Константы в интерфейсах
Кроме методов в интерфейсах могут быть определены статические константы:

```
interface Statusable {
    int OPEN = 1;
    int CLOSE = 0;
    void printStatus(int status);
}

public class Shop implements Statusable{
    @Override
    public void printStatus(int status) {
        if (status == OPEN ){
            System.out.println("Status: Open");
        } else if (status == CLOSE) {
            System.out.println("Status: Close");
        } else {
            System.out.println("Status incorrect");
        }
    }
}

```

### Множественная реализация интерфейсов
Если нам надо применить в классе несколько интерфейсов, то они все перечисляются через запятую после слова `implements`.

</details>

<hr>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Interfaces

The inheritance mechanism is very convenient, but it has its limitations. In particular, we can inherit from only one class.

In the Java language, interfaces help partially overcome this limitation. Interfaces define functionality without providing concrete implementations, which classes implementing these interfaces will later implement. One key distinction from inheritance is that a class can implement multiple interfaces.

**Interface** is a reference type in Java, similar to a class. It consists of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.

Writing an interface is similar to writing an abstract class, but a class describes attributes and behaviors of an object. An interface **contains behaviors** that a class implements.

If a class that implements an interface is not abstract, **all methods of the interface must be defined in the class**.

Along with abstract methods, a Java interface can contain constants, regular methods, static methods, and nested types.

To declare an interface, the `interface` keyword is used.

```
public interface Printable {
    void print();
}
```

```
public class Book implements Printable {

    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    @Override
    public void print() {
        System.out.printf("Book: %s (%s)\n", title, author);
    }
}
```


### Interfaces have the following properties:

- An interface is indirectly abstract. You don't need to use the `abstract` keyword when declaring an interface.
- Each method in an interface is indirectly abstract, so the `abstract` keyword is not required.
- Methods in an interface are indirectly public.

### Implementing an Interface

When a class implements an interface, you can think of it as the class **signing a contract** with the interface, agreeing to perform specific behaviors. If a class doesn't perform all the behaviors defined by the interface, it should declare itself as abstract.

The `implements` keyword is used by a class to implement an interface.

### Extending Interfaces

An interface can extend another interface just like a class extends another class. The `extends` keyword is used to extend an interface, and the child interface inherits methods from the parent interface.

### Default Methods

Before JDK 8, when implementing an interface, we were required to implement all its methods in the class. The interface itself could only contain method declarations without concrete implementations. JDK 8 introduced a feature called **default methods**. Now, interfaces, in addition to declaring methods, can provide default implementations for those methods. These default implementations are used if a class implementing the interface doesn't provide its own implementation.

For example, let's create a default method in the `Printable` interface:


```
public interface Printable {
     
    default void print(){
        System.out.println("Undefined printable");
    }
}

```

### Default Methods

A default method is a regular method without any modifiers, marked with the `default` keyword. In a class that implements an interface with a default method, you are not obligated to provide an implementation for that method. However, you have the option to override it in your class.

### Static Methods

Starting from JDK 8, interfaces can also contain static methods, which are similar to static methods in classes. To access a static method of an interface, you use the interface's name followed by the method name.

### Private Methods

By default, all methods in an interface are effectively public. However, starting from Java 9, you can define private methods in interfaces. These private methods can be either static or non-static but cannot be overridden in implementing classes.

### Constants in Interfaces

In addition to methods, interfaces can also define static constants:

```
interface Statusable {
    int OPEN = 1;
    int CLOSE = 0;
    void printStatus(int status);
}

public class Shop implements Statusable{
    @Override
    public void printStatus(int status) {
        if (status == OPEN ){
            System.out.println("Status: Open");
        } else if (status == CLOSE) {
            System.out.println("Status: Close");
        } else {
            System.out.println("Status incorrect");
        }
    }
}

```

### Multiple Interface Implementation

If you need to apply multiple interfaces to a class, you can list them all by separating them with commas after the `implements` keyword.


</details>