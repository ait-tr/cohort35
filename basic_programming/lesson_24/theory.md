<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

С вероятностью 99,9% между классами в наших приложениях будут существовать некая связь

В ООП выделяют два вида связей между классами:
- IS-A является
- HAS-A имеет



```
Autobus IS-A Vehicle
Driver IS-A Person
Passenger IS-A Person
```

```
Autobus HAS-A RegistrationDoc
Autobus HAS-A Driver
Autobus HAS-A Passengers
```

В объектно-ориентированных языках программирования существует три способа организации взаимодействия между классами

- Наследование
- Агрегация
- Композиция

**Наследование** — это когда класс-наследник имеет все поля и методы родительского класса, и, как правило, добавляет какой-то новый функционал и/или поля. 
Наследование – это один из основных принципов объектно-ориентированного программирования, который позволяет создавать новый класс на основе существующего класса.
Наследование основывается на связи IS-A «является».

Наследование в коде программы обозначается ключевым словом `extends`.  Также следует знать, что класс, от которого наследуются, называется родителем (родительским классом, класс-родитель). Класс, который наследует, соответственно класс-потомок.

```
public class Car extends Vehicle{

   private final int passengersCount;
   private int  mileage;

   public Car(String model, int year, int passengersCount) {
       super(model, year);
       this.passengersCount = passengersCount;
       this.mileage = 10000;
   }
```



Вынесение общих состояний и поведения (полей и методов) в класс-родитель позволит нам сэкономить кучу времени и места.

Если же у какого-то типа есть свойства или методы, уникальные только для него и отсутствующие у других типов машин, — не беда. Их всегда можно создать в классе-потомке, отдельно от всех остальных.

**Важно! В Java нет множественного наследования.**
**Каждый класс может наследоваться только от одного класса**

</details>

<hr>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>


With a probability of 99.9%, there will be some relationship between classes in our applications.

In OOP, two types of relationships are distinguished between classes:
- IS-A relationship
- HAS-A relationship

```
Autobus IS-A Vehicle
Driver IS-A Person
Passenger IS-A Person
```

```
Autobus HAS-A RegistrationDoc
Autobus HAS-A Driver
Autobus HAS-A Passengers
```

In object-oriented programming languages, there are three ways to organize the interaction between classes:

- **Inheritance**
- **Aggregation**
- **Composition**

**Inheritance** is when a subclass inherits all fields and methods of the parent class and typically adds some new functionality and/or fields. Inheritance is based on the IS-A relationship.

Inheritance in code is indicated by the keyword `extends`. It's important to note that the class from which another class is inherited is called the parent (or superclass), and the class that inherits is called the child (or subclass).

```
public class Car extends Vehicle{

   private final int passengersCount;
   private int  mileage;

   public Car(String model, int year, int passengersCount) {
       super(model, year);
       this.passengersCount = passengersCount;
       this.mileage = 10000;
   }
```

Extracting common states and behaviors (fields and methods) into a parent class allows us to save a lot of time and space.

If a particular type has properties or methods unique to it and not present in other types of vehicles, that's not a problem. You can always create them in a child class, separate from all the others.

**Important! In Java, there is no multiple inheritance.**
**Each class can only inherit from one class.**
</details>