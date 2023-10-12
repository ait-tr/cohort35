<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Абстрактные классы
Абстрактный класс похож на обычный класс. В абстрактном классе также можно определить поля и методы, но в то же время **нельзя создать объект или экземпляр абстрактного класса**.

**Абстрактный класс** — это максимально абстрактная, о-о-о-чень приблизительная «заготовка» для группы будущих классов. Но она описывает некое общее состояние и поведение, которым будут обладать будущие классы — наследники абстрактного класса.
Абстрактные классы призваны предоставлять базовый функционал для классов-наследников. А производные классы уже реализуют этот функционал.

При определении абстрактных классов используется ключевое слово `abstract`

Кроме обычных методов абстрактный класс может содержать абстрактные методы.
Такие методы определяются с помощью ключевого слова `abstract` и не имеют никакой реализации:

```
abstract class Animal {
    abstract void info();
}
```

Производный класс обязан переопределить и реализовать все абстрактные методы, которые имеются в базовом абстрактном классе.
Также следует учитывать, что если класс имеет хотя бы один абстрактный метод, то данный класс должен быть определен как абстрактный.

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Abstract Classes

An abstract class is similar to a regular class. It can define fields and methods, but at the same time, **you cannot create an object or instance of an abstract class**.

An **abstract class** is an extremely abstract "template" for a group of future classes. However, it describes some common state and behavior that future classes—its subclasses—will possess. Abstract classes are intended to provide a base functionality for their subclasses, which will implement this functionality.

To define abstract classes, you use the `abstract` keyword.

In addition to regular methods, an abstract class can also contain abstract methods. These methods are defined with the `abstract` keyword and have no implementation.

```
abstract class Animal {
    abstract void info();
}
```

A derived class is required to override and implement all abstract methods that exist in the base abstract class.

It's important to note that if a class has at least one abstract method, that class must also be declared as abstract.

</details>