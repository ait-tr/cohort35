<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Полиморфизм

Полиморфизм - одно из четырёх основных понятий объектно-ориентированного программирования (ООП) наряду с инкапсуляцией, наследованием и абстракцией. Это понятие происходит от греческих слов: "поли" (много) и "морф" (форма), и, действительно, **полиморфизм позволяет объектам принимать множество форм**.

А дальше, как говорится, "возможны варианты".
Существует множество определений для явления полиморфизма. Включая очень мудреные и не понятных, даже после 5го прочтения этого определения.

**Полиморфизм** — это концепция объектно-ориентированного программирования (ООП), которая позволяет рассматривать объекты разных классов как объекты общего класса. В Java полиморфизм означает, что метод может иметь несколько реализаций в зависимости от типа объекта, с которым выполняется операция.

**Полиморфизмом** называется возможность работать с несколькими типами так, как будто это один и тот же тип и в то же время поведение каждого типа будет уникальным в зависимости от его реализации.

**Полиморфизм** — одна из четырех фундаментальных концепций объектно-ориентированного программирования, которая позволяет выполнять определенную задачу(действие) несколькими способами.

Полиморфизм позволяет рассматривать объекты как объекты их базового класса, что позволяет писать общий код, делая его более гибким и пригодным для повторного использования. Это позволяет создавать более многоразовый и удобный в сопровождении код, а также повышает читаемость кода.



- **Статический полиморфизм (компиляционный)**: реализуется с помощью перегрузки методов. Компилятор определяет, какой метод нужно вызывать на основе объявления метода (имя метода и список параметров).

- **Динамический полиморфизм (времени выполнения)**: реализуется с помощью переопределения методов. Время выполнения (JVM) определяет, какой метод вызывать на основе фактического объекта, на котором вызывается метод.

"Динамический полиморфизм" (полиморфизм времени выполнения, который реализуется через переопределение методов) часто называется "истинным полиморфизмом". Это потому, что во время выполнения решение о том, какой метод вызвать, принимается на основе реального типа объекта, что и является ключевой особенностью полиморфизма в объектно-ориентированном программировании.

---

Да, полиморфизм - это точно про гибкость. Основной механизм в Java, делающий наш код гибким.

Т.к. класс содержит все методы класса, от которого он был унаследован, то объект этого класса можно сохранить в переменную любого из его типов родителей.

Если в результате присваивания мы двигаемся по цепочке наследования вверх (к типу Object), то это — расширение типа (оно же — восходящее преобразование или upcasting), а если вниз, к типу объекта, то это — сужение типа (оно же — нисходящее преобразование или down-casting).
</details>


<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

## Polymorphism

Polymorphism is one of the four main concepts of object-oriented programming (OOP) alongside encapsulation, inheritance, and abstraction. The term stems from Greek words: "poly" (many) and "morph" (form). Indeed, **polymorphism allows objects to take on many forms**.

From here, as they say, "there are variations".
There are many definitions for the phenomenon of polymorphism. Including some that are very intricate and still not understood even after reading them five times.

**Polymorphism** is a concept of object-oriented programming (OOP) that allows treating objects of different classes as objects of a common class. In Java, polymorphism means that a method can have multiple implementations depending on the type of the object with which the operation is performed.

**Polymorphism** is the ability to work with several types as if they were the same type, while at the same time, the behavior of each type will be unique depending on its implementation.

**Polymorphism** is one of the four fundamental concepts of object-oriented programming that allows accomplishing a particular task (action) in several ways.

Polymorphism enables treating objects as objects of their base class, allowing for the writing of general code, making it more flexible and reusable. It allows for the creation of more reusable and maintainable code and also enhances the readability of the code.

- **Static Polymorphism (compile-time)**: implemented through method overloading. The compiler determines which method to call based on the method declaration (method name and parameter list).

- **Dynamic Polymorphism (run-time)**: implemented through method overriding. The runtime (JVM) determines which method to call based on the actual object on which the method is called.

"Dynamic polymorphism" (runtime polymorphism achieved through method overriding) is often termed "true polymorphism". This is because the decision on which method to call during runtime is based on the actual object type, which is the key feature of polymorphism in object-oriented programming.

---

Yes, polymorphism is indeed about flexibility. It's the primary mechanism in Java that renders our code flexible.

Since a class contains all methods of the class it inherits from, an object of this class can be stored in a variable of any of its parent types.

If, as a result of assignment, we move up the inheritance chain (towards the `Object` type), it's termed type widening (also known as upcasting). Conversely, if we move down, towards the object type, it's termed type narrowing (or downcasting).

---

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>Код</b></summary>

```
public class Main24 {
   public static void main(String[] args) {
       Cat cat = new Cat();
       Dog dog = new Dog();
       Hamster hamster = new Hamster();
   }
}
```

```
public class Main24 {
   public static void main(String[] args) {
       Animal cat = new Cat();
       Animal dog = new Dog();
       Animal hamster = new Hamster();
   }
}
```

</details>

