<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Comparable, Comparator

### Зачем сравнивать объекты?
Сравнение объектов необходимо для того, чтобы мы могли организовать их в определенном порядке, что полезно для сортировки и поиска.

## Интерфейс Comparable
`Comparable` - это интерфейс, который должен реализовать объект для того, чтобы его можно было сравнивать с другими объектами того же типа.

```
public interface Comparable<T> {
    int compareTo(T o);
}
```

#### Использование Comparable в сортировках

Классы, реализующие интерфейс `Comparable`, должны реализовать метод `compareTo()`, который сравнивает объект с другим объектом того же типа.

```
public class Person implements Comparable<Person> {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Person o) {
        return Integer.compare(this.age, o.age);
    }
}
```

#### Пример сортировки объектов с использованием Comparable
Давайте рассмотрим пример сортировки массива объектов класса `Person`:

```
Person[] persons = {
    new Person("Alice", 30),
    new Person("Bob", 25),
    new Person("Charlie", 35)
};

Arrays.sort(persons);
```

## Интерфейс Comparator

`Comparator` - это интерфейс, который определяет метод `compare()` для сравнения двух объектов.

```
public interface Comparator<T> {
    int compare(T o1, T o2);
}
```

### Использование Comparator в сортировках
Создадим собственный компаратор для класса `Person`, который будет сравнивать объекты по имени:

```
public class NameComparator implements Comparator<Person> {
    @Override
    public int compare(Person o1, Person o2) {
        return o1.name.compareTo(o2.name);
    }
}
```

### Реализация собственного Comparator

#### Пример сравнения пользовательских объектов
Создадим собственный компаратор для сортировки объектов класса `Person` по убыванию возраста:

```
public class AgeDescComparator implements Comparator<Person> {
    @Override
    public int compare(Person o1, Person o2) {
        return Integer.compare(o2.age, o1.age);
    }
}
```

#### Пример использования созданного компаратора для сортировки массива объектов `Person`:

```
Arrays.sort(persons, new AgeDescComparator());
```

## Анонимные классы

**Анонимный класс** в Java — это класс, который используется для создания объекта на лету, без явного объявления нового класса. Анонимные классы часто используются для реализации интерфейсов или расширения классов.
Анонимные классы часто используются, когда необходим одноразовый объект, и нет необходимости создавать отдельный именованный класс.


## Comparator как функциональный интерфейс
## Введение в функциональные интерфейсы

**Функциональные интерфейсы** - это особый тип интерфейсов в Java, которые имеют ровно один абстрактный метод. Они предоставляют абстрактное описание функции, которую можно реализовать в классе. В Java функциональные интерфейсы играют важную роль в контексте лямбда-выражений и функционального программирования.

- **Один абстрактный метод:**
  Главная особенность функциональных интерфейсов - наличие только одного абстрактного метода. Остальные методы могут быть как абстрактными, так и дефолтными или статическими, но их наличие не нарушает правило.


### Функциональный интерфейс Comparator
С Java 8 `Comparator` стал функциональным интерфейсом, что позволяет использовать лямбда-выражения для его реализации.

С Java 8 интерфейс `Comparator` был изменен для того, чтобы стать функциональным интерфейсом. Это означает, что теперь он имеет только один абстрактный метод `compare(T o1, T o2)`. Ранее `Comparator` содержал также методы для сравнения с null и для создания компараторов с различными сортировками, но все они стали методами по умолчанию (default methods), чтобы интерфейс оставался функциональным.

С изменением в Java 8, интерфейс `Comparator` теперь имеет только один абстрактный метод `compare(T o1, T o2)`, который принимает два объекта и возвращает целое число, указывающее на их отношение.


## Лямбда-выражения и Comparator


### Введение в лямбда-выражения:
- **Лямбда-выражения** - это способ краткой записи анонимных функций в Java.
- В лямбда-выражениях используется более компактный синтаксис для определения функций. Он включает параметры, стрелку **(->)** и тело функции.
- Лямбда-выражения были введены в Java 8 и являются одним из ключевых элементов функционального программирования в языке.

```
(parameters) -> expression
```

или

```
(parameters) -> { statements; }
```

Лямбда-выражения во многих случаях могут **заменить анонимные классы**, делая код более кратким и читаемым.

### Использование лямбда-выражений для создания компараторов:
- Лямбда-выражения могут упростить создание компараторов для сортировки объектов в Java.
- Вместо традиционного создания экземпляров анонимных классов компараторов, вы можете использовать лямбда-выражения для определения функции сравнения в одной строке.
- Лямбда-выражения позволяют передать компактные и читаемые правила сравнения объектов.


Пример использования лямбда-выражения для создания компаратора:

```
Comparator<Person> ageComparator = (p1, p2) -> Integer.compare(p1.age, p2.age);
Arrays.sort(persons, ageComparator);
```
Таким образом, мы можем создать компараторы на лету, что делает код более лаконичным и читаемым.


### Роль в лямбда-выражениях:
**Функциональные интерфейсы** предоставляют возможность создавать объекты, которые представляют собой реализацию одного абстрактного метода. Эти объекты могут быть переданы как аргументы методов, возвращены из методов, или использованы для создания лямбда-выражений.

### Роль в функциональном программировании:
Функциональные интерфейсы являются основой функционального программирования в Java. Они позволяют писать компактный и выразительный код с использованием лямбда-выражений, а также облегчают параллельное и асинхронное программирование.

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>


## Anonymous Classes

An **anonymous class** in Java is a class that is used to create an object on-the-fly, without explicitly declaring a new class. Anonymous classes are often used for implementing interfaces or extending classes.

## Comparator as a Functional Interface
## Introduction to Functional Interfaces

**Functional interfaces** are a special type of interface in Java that have exactly one abstract method. They provide an abstract description of a function that can be implemented in a class. In Java, functional interfaces play a crucial role in the context of lambda expressions and functional programming.

- **One abstract method:**
  The main feature of functional interfaces is the presence of only one abstract method. Other methods can be either abstract, default, or static, but their presence doesn't violate the rule.

### Functional Interface Comparator
With Java 8, the `Comparator` became a functional interface, allowing the use of lambda expressions for its implementation.

From Java 8, the `Comparator` interface was modified to become a functional interface. This means it now has only one abstract method `compare(T o1, T o2)`. Previously, `Comparator` also had methods for comparing with null and for creating comparators with different sortings, but they all became default methods so that the interface remained functional.

With the change in Java 8, the `Comparator` interface now has only one abstract method `compare(T o1, T o2)`, which takes two objects and returns an integer indicating their relation.

## Lambda Expressions and Comparator

### Introduction to Lambda Expressions:
- **Lambda expressions** are a way to briefly record anonymous functions in Java.
- Lambda expressions use a more compact syntax to define functions. It includes parameters, an arrow **(->)**, and a function body.
- Lambda expressions were introduced in Java 8 and are one of the key elements of functional programming in the language.

```
(parameters) -> expression
```

or

```
(parameters) -> { statements; }
```

### Using Lambda Expressions to Create Comparators:
- Lambda expressions can simplify the creation of comparators for sorting objects in Java.
- Instead of traditionally creating instances of anonymous class comparators, you can use lambda expressions to define a comparison function in one line.
- Lambda expressions allow you to pass compact and readable object comparison rules.

Example of using a lambda expression to create a comparator:

```
Comparator<Person> ageComparator = (p1, p2) -> Integer.compare(p1.age, p2.age);
Arrays.sort(persons, ageComparator);
```
Thus, we can create comparators on-the-fly, making the code more concise and readable.

### Role in Lambda Expressions:
**Functional interfaces** provide the ability to create objects that represent the implementation of one abstract method. These objects can be passed as method arguments, returned from methods, or used to create lambda expressions.

### Role in Functional Programming:
Functional interfaces are the foundation of functional programming in Java. They allow for writing compact and expressive code using lambda expressions, as well as facilitating parallel and asynchronous programming.

</details>