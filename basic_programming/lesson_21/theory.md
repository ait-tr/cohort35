## Статические члены в Java
В языке программирования Java ключевым словом **static** помечают члены (поля или методы), которые принадлежат классу, а не экземпляру этого класса.
Это означает, что какое бы количество объектов вы не создали, всегда будет создан только один член, доступный для использования всеми экземплярами класса.
Ключевое слово **static** применимо к переменным, методам, блокам инициализации, импорту и вложенным классам (nested classes).

### Статические поля (переменные класса)

В языке Java, если поле объявляется статическим (путем добавления модификатора static), то в независимости от количества созданных объектов класса — всегда будет существовать только один экземпляр статического поля. Значение такого поля будет единым и общим для всех объектов класса, содержащих это поле.

Предположим, у нас есть класс Car с несколькими атрибутами (полями). Каждый экземпляр данного класса будет иметь свою, отличающуюся от других копию этих переменных экземпляра. Значения таких полей можно менять в объектах независимо друг от друга.

А теперь предположим, что нам требуется переменная-счетчик для хранения количества созданных объектов Car, которая являлась бы общей для всех его экземпляров. При этом необходимо, чтобы каждый из них имел к ней доступ и мог изменять.

Тут-то нам и пригодится статическая переменная

## Static Members in Java

In the Java programming language, the keyword **static** is used to mark members (fields or methods) that belong to the class itself, rather than to instances of the class. This means that, regardless of how many objects you create, there will always be only one static member that is accessible by all instances of the class. The **static** keyword can be applied to variables, methods, initialization blocks, imports, and nested classes.

### Static Fields (Class Variables)

In Java, when a field is declared as static (by adding the **static** modifier), there will always exist only one instance of that static field, regardless of how many objects of the class are created. The value of such a field is common and shared among all instances of the class that contain this field.

Let's say we have a class called `Car` with several attributes (fields). Each instance of this class will have its own copy of these instance variables, which can have different values. These instance variables can be modified independently within objects.

Now, imagine that we need a counter variable to keep track of the number of `Car` objects created, and this counter should be shared among all instances of the class. At the same time, we want each instance to have access to this counter and be able to update it.

This is where static variables come in handy.


```
public class Car {
   
   static int numberOfCars;
   
   String name;
   int powerPS;

   public Car(String name, int powerPS) {
       this.name = name;
       this.powerPS = powerPS;
       numberOfCars++;
   }

   public static void main(String[] args) {
       Car car1 = new Car("BMW", 220);
       Car car2 = new Car("Seat", 95);

       System.out.println("Всего машин: " + Car.numberOfCars);
      
       // OUTPUT: Всего машин: 2
   }
}
```

Для каждого объекта этого класса будет увеличиваться один и тот же экземпляр переменной `numberOfCars`

For each object of this class, the same instance of the variable `numberOfCars` will increase.


Причины использовать статические поля:

- Когда значение поля должно быть общим для всех объектов класса, в котором оно определено 
- Когда значение поля не зависит от наличия объектов класса, в котором оно определено 
- Когда значение поля может быть изменено из любого объекта класса, в котором оно определено

Особенности использования:
- Статические переменные могут быть созданы только, как переменные класса. 
- К статическим полям класса можно получить доступ без создания объекта, используя имя класса (ссылка на объект не нужна)
- Несмотря на то, что получить доступ к статическим полям можно с помощью ссылки на объект (например, `car1.numberOfCars`), мы должны воздерживаться от её применения, поскольку в этом случае становится не совсем понятно, является ли эта переменная переменной экземпляра или же переменной класса. Вместо этого всегда необходимо ссылаться на статические переменные, используя имя класса (например, Car.numberOfCars)

### Reasons to Use Static Fields:

- When a field's value should be common among all objects of the class where it's defined.
- When a field's value doesn't depend on the presence of objects of the class where it's defined.
- When a field's value can be modified from any object of the class where it's defined.

### Key Points about Using Static Fields:

- Static variables can only be created as class variables.
- Access to static fields of a class can be obtained without creating an object, using the class name (no need for an object reference).
- Despite being able to access static fields using an object reference (e.g., `car1.numberOfCars`), it is generally advisable to avoid doing so because it can become unclear whether the variable is an instance variable or a class variable. Instead, it's recommended to always refer to static variables using the class name (e.g., `Car.numberOfCars`).


### Статические методы (методы классов)

Подобно статическим полям, статические методы также принадлежат классу, а не объекту, поэтому их можно вызывать без создания экземпляра класса, в котором они находятся. При этом следует помнить, что из статического метода можно получить доступ только к статическим членам (переменным или к другим статическим методам.)


### Static Methods (Class Methods)

Similar to static fields, static methods also belong to the class, not to an object. Therefore, they can be called without creating an instance of the class in which they are located. It's important to note that from a static method, you can only access static members (variables or other static methods).

```
public class Test {
   int x;

   public static void main(String[] args) {
       x = 0;
   }
}
```
**Ошибка компиляции**: java: non-static variable x cannot be referenced from a static context / **Compilation Error**: java: non-static variable x cannot be referenced from a static context


Статические методы обычно используются для выполнения операции, не зависящей от создания экземпляра. При этом, они широко используются для создания служебных (утилитных) или вспомогательных классов, поскольку их можно вызывать без создания нового объекта этих классов.


Static methods are typically used to perform operations that do not depend on the creation of an instance. They are widely used for creating utility or helper classes because they can be invoked without creating a new object of those classes.

```
public class MathUtils {
   public static int sumOfInts(int i, int...nums) {
       int sum = i;
       for(int num : nums) {
           sum += num;
       }
       return sum;
   }
}

public class Main19 {
   public static void main(String[] args) {
       System.out.println("Сумма: " + MathUtils.sumOfInts(1, 2, 3));
   }
}
```

В JDK служебные классы активно используются: Collections, Math, Arrays; StringUtils из Apache или CollectionUtils из Spring framework. Все методы этих классов являются статическими.

Причины использовать статические методы 
- Для доступа / управления статическими переменными и другими статическими методами, которые не зависят от объектов 
- Для служебных, вспомогательных классов и интерфейсов, поскольку не требуют создания объектов и соответственно, обеспечивают большую производительность 
- Когда методу требуется доступ лишь к статическим полям класса

Особенности использования:
- Статические методы не могут использовать ключевые слова `this` или `super` 
- Методы экземпляра могут обращаться непосредственно как к методам экземпляра, так и к переменным экземпляра 
- Методы экземпляра также могут непосредственно обращаться к статическим переменным и статическим методам 
- Статические методы могут обращаться ко всем статическим переменным и другим статическим методам 
- Статические методы не могут напрямую обращаться к переменным экземпляра и методам экземпляра. Для этого им нужна ссылка на объект 
- Статические поля и методы не являются потокобезопасными. 
- Статические методы связываются во время компиляции, в отличие от не статических методов, которые связываются во время исполнения. 
- Абстрактные методы не могут быть статическими

In the JDK, utility classes are actively used, such as Collections, Math, Arrays, StringUtils from Apache, or CollectionUtils from the Spring framework. All methods of these classes are static.

Reasons for using static methods:
- For accessing/managing static variables and other static methods that are independent of objects.
- For utility and helper classes and interfaces, as they do not require the creation of objects and thus provide better performance.
- When a method needs access only to the static fields of a class.

Usage specifics:
- Static methods cannot use the keywords 'this' or 'super'.
- Instance methods can directly access both instance methods and instance variables.
- Instance methods can also directly access static variables and static methods.
- Static methods can access all static variables and other static methods.
- Static methods cannot directly access instance variables and instance methods. They require an object reference for that.
- Static fields and methods are not thread-safe.
- Static methods are bound during compile-time, unlike non-static methods that are bound during runtime.
- Abstract methods cannot be static.


### Статический блок инициализации / Static Initialization Block
Статический блок используется для инициализации статических переменных. Хотя статические переменные могут быть инициализированы непосредственно во время объявления, бывают ситуации, когда нам требуется выполнить многострочную обработку.
В таких случаях пригодятся статические блоки.
Либо, если статические переменные во время инициализации требуют дополнительной логики, состоящей из нескольких операторов, то также можно использовать статический блок.


A static initialization block is used to initialize static variables.
 Although static variables can be initialized directly when declared, there are situations where we need to perform multi-line processing. In such cases, static blocks come in handy. Or if static variables require additional logic consisting of multiple statements during initialization, you can also use a static initialization block.
```
public class StaticBlockDemo {
   static String[] strings;

   static {
       strings = new String[4];
       strings[0] = "Max";
       strings[1] = "John";
       strings[2] = "Alex";
       strings[3] = strings[2] + " / " + strings[1];
   }
}
```

Особенность статических блоков — они **выполняются раньше конструкторов** и при создании нескольких объектов класса, статический блок выполняется только один раз.

Причины использовать статические блоки
- Если для инициализации статических переменных требуется дополнительная логика, за исключением операции присваивания 
- Если инициализация статических переменных подвержена ошибкам и требует обработки исключений

Особенности использования:

- У класса может быть несколько статических блоков
- Статические поля и статические блоки выполняются в том же порядке, в котором они присутствуют в классе
- Из статического блока нельзя получить доступ к не статическим членам класса
- Статический блок не может пробросить дальше перехваченные исключения, но может их выбросить. При этом всегда будет выкидываться только java.lang.ExceptionInInitializerError
- Статические поля или переменные инициализируются после загрузки класса в память в том же порядке, в каком они описаны в классе


One special feature of static blocks is that they are executed **before constructors**, and when multiple objects of a class are created, the static block is executed only once.

### Reasons to Use Static Initialization Blocks

Static initialization blocks are useful in the following scenarios:

- When initializing static variables requires additional logic beyond simple assignment.
- When the initialization of static variables is prone to errors and requires exception handling.

### Usage Guidelines

Here are some important points to keep in mind when using static initialization blocks:

- A class can have multiple static initialization blocks.
- Static fields and static blocks are executed in the order they appear in the class.
- You cannot access non-static members of the class from within a static block.
- A static block cannot propagate caught exceptions further, but it can throw them. In such cases, it always throws a `java.lang.ExceptionInInitializerError`.
- Static fields or variables are initialized after the class is loaded into memory, following the order of declaration in the class.

Static initialization blocks provide a way to perform complex static variable initialization or error-prone initialization logic before the class is used. They are executed only once, ensuring that the initialization code runs reliably for all instances of the class.



### final
В java есть ключевое слово – **final**. Оно может применяться к классам, методам, переменным (в том числе аргументам методов).

Для переменных **примитивного типа** это означает, что однажды присвоенное значение не может быть изменено.

Для **ссылочных переменных** это означает, что после присвоения объекта, нельзя изменить ссылку на данный объект. Это важно! Ссылку изменить нельзя, но состояние объекта изменять можно.


*Для класса это означает, что класс не сможет иметь подклассов, т.е. запрещено наследование. Это полезно при создании immutable (неизменяемых) объектов, например, класс String объявлен, как final.*

*Следует также отметить, что к абстрактным классам (с ключевым словом abstract), нельзя применить модификатор final, т.к. это взаимоисключающие понятия.*

*Для метода final означает, что он не может быть переопределен в подклассах. Это полезно, когда мы хотим, чтобы исходную реализацию нельзя было переопределить.*

## The "final" Keyword in Java

In Java, the keyword **final** can be applied to classes, methods, and variables, including method arguments.

#### For Primitive Type Variables

For primitive type variables, it means that once a value is assigned to the variable, it cannot be changed.

#### For Reference Type Variables

For reference type variables, it means that after an object is assigned to the variable, you cannot change the reference to a different object. However, it's important to note that the state of the object itself can still be modified.

#### For Classes

When applied to a class, it means that the class cannot have any subclasses, effectively prohibiting inheritance. This is useful when creating immutable objects. For example, the `String` class is declared as final.

It's worth noting that you cannot apply the **final** modifier to abstract classes since it contradicts the concept of abstraction.

#### For Methods

When applied to a method, it means that the method cannot be overridden in subclasses. This is useful when you want to prevent the original implementation from being changed.

Using the **final** keyword provides a way to enforce constraints on how classes, methods, and variables can be extended or modified, which can be valuable in maintaining the integrity and behavior of your code.




### Константы / Constants

Говоря о ключевом слове `static`, нельзя не упомянуть о его применении в определении констант — переменных, которые никогда не изменяются.
Для определения константы необходимо добавить модификаторы «**`static final`**» к полю класса.

Константы — это статические финальные поля, содержимое которых неизменно. Это относится к примитивам, `String`, неизменяемым типам и неизменяемым коллекциям неизменяемых типов. Если состояние объекта может измениться, он не является константой.

Модификатор `static` делает переменную доступной без создания экземпляра класса, а `final` делает ее неизменяемой. При этом нужно помнить, что если мы сделаем переменную только static, то ее легко можно будет изменить, обратившись к ней через имя класса. Если переменная будет иметь только модификатор final, то при создании каждого экземпляра класса она может быть проинициализирована своим значением. Соответственно, используя совместно модификаторы static и final, переменная остается статической и может быть проинициализирована только один раз. 

В Java **константой считается** не та переменная, которую нельзя изменить в рамках одного объекта, а та, которую не могут изменить ни один экземпляр класса в котором она находится (такая переменная создается и инициализируется один раз для всех экземпляров, сколько бы их не было).

 

When discussing the `static` keyword, it's impossible not to mention its usage in defining constants—variables that never change. 
To define a constant, you need to add the modifiers "**`static final`**" to a class field.

Constants are static final fields with immutable content. This applies to primitives, `String`, immutable types, and immutable collections of immutable types. If an object's state can change, it is not considered a constant.

The `static` modifier makes the variable accessible without creating an instance of the class, and `final` makes it immutable. However, it's essential to remember that if you make a variable only `static`, it can still be changed by accessing it through the class name. If a variable has only the `final` modifier, it can be initialized with its value for each instance of the class. Therefore, using both `static` and `final` modifiers, a variable remains static and can be initialized only once.

In Java, a variable is considered a constant when no instance of the class it resides in can change it (it's created and initialized only once for all instances, no matter how many there are).








