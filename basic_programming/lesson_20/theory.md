Сегодня мы поговорим об инкапсуляции в Java.
И начнем с примеров :)

Представьте, перед вами кофемашина.

И у меня парочка вопросов? А как это работает? Какая температура воды нужна для приготовления кофе? А сколько воды, молока? А как в нашу чашку попадает молочная пена, а не молоко? А как вообще варится кофе, прямо из целых зерен, которые мы засыпали? А сколько кофе нужно для 1 порции кофе?

Вероятнее всего, ответов на эти вопросы у вас нет. Хорошо, возможно не все пользуются такими автоматами. Попробую привести другой пример. Что-нибудь, чем вы точно пользуетесь много раз каждый день.
Например, Google.

Расскажите, как работает поисковик Google. Как именно он ищет информацию по тем словам, которые вы ввели? Почему наверху находятся эти результаты, а не другие?

Хотя вы пользуетесь гуглом каждый день, скорее всего, вы этого не знаете. Но это не важно. Ведь **нам и не нужно этого знать**.

Вы можете вводить запросы в поисковик не задумываясь, как именно он работает. Вы можете выпить чашечку кофе, не зная как устроена кофемашина. Вы можете водить машину, не вникая в работу двигателя, и вообще не зная физику и механику.

Все это возможно благодаря одному из принципов объектно-ориентированного программирования — **инкапсуляции**

В программировании есть два распространенных понятия — **инкапсуляция** и **сокрытие**. И под словом «инкапсуляция» авторы понимают то одно, то другое (так уж сложилось).
Мы разберем оба понятия.

Изначальное значение слова **«инкапсуляция»** в программировании — объединение данных и методов работы с этими данными в одной упаковке («капсуле»)

В Java в роли упаковки-капсулы выступает **класс**. Класс содержит в себе и данные (поля класса), и методы для работы с этими данными.

В ООП программы состоят из классов-капсул, которые являются одновременно и данными, и методами для работы с ними. И наш резиновый массив, который мы писали на прошлом уроке - типичный пример класса-капсулы.

Теперь поговорим о **сокрытии**.

Как же так получается, что мы пользуемся всякими сложными механизмами без понимания, как они устроены и на чем основана их работа? Все просто: их создатели предоставили простой и удобный интерфейс.
На кофемашине интерфейс — это кнопки на панели. Нажав одну кнопку, вы получаете эспрессо. Нажав вторую, выбираете капучино. Третья отвечает за больший объем порции. И это все, что нам нужно сделать.

Неважно, как именно кофемашина устроена внутри. Главное — она устроена так, что **для получения порции кофе пользователю нужно нажать кнопку**.

Именно в этом заключается суть сокрытия. Все «внутренности» программы скрываются от пользователя. Для него эта информация является лишней, ненужной. Пользователю необходим конечный результат, а не внутренний процесс.

Давайте для примера напишем класс Auto:

```
// Тут будет код класса Auto

```

Вот как выглядит сокрытие реализации в Java-программе. Все как в реальной жизни: пользователю предоставлен интерфейс (методы). Если ему нужно, чтобы автомобиль в программе выполнил действие, достаточно вызвать нужный метод. А уж что там происходит внутри этих методов — информация лишняя, главное, чтобы все работало как надо.

Здесь мы говорили про сокрытие реализации. Кроме него в Java есть еще сокрытие данных.

Давайте потренируемся на кошках. Напишем класс Cat2:

```
public class Cat2 {
   
   public String name;
   public int age;
   public int weight;


   public Cat2(String name, int age, int weight) {
       this.name = name;
       this.age = age;
       this.weight = weight;
   }

   public Cat2() {
   }

   public void sayMeow() {
       System.out.println("Мяу!");
   }
}
```

Проблема класса в том, что его данные (поля) открыты для всех, и другой программист легко может создать в программе кота без имени с весом 0 и возрастом -1000 лет

```
public static void main(String[] args) {
  
   Cat2 cat = new Cat2();

   cat.name = "";
   cat.age = -1000;
   cat.weight = 0;
}
```

С **сокрытием данных** нам помогают:

- модификаторы доступа (private, protected, package default);
- геттеры и сеттеры

В Java используются следующие модификаторы доступа:

- **public**: публичный, общедоступный класс или член класса. Поля и методы, объявленные с модификатором public, видны всем классам из текущего пакета и из внешних пакетов.
- **private**: закрытый класс или член класса, противоположность модификатору public. Закрытый класс или член класса доступен только из кода в том же классе.
- **protected**: такой класс или член класса доступен из любого места в текущем классе или пакете или в производных классах, даже если они находятся в других пакетах
- **package default** - Модификатор по умолчанию. Отсутствие модификатора у поля или метода класса предполагает применение к нему модификатора по умолчанию. Такие поля или методы видны всем классам в текущем пакете.

Авторы разных статей об инкапсуляции имеют в виду либо инкапсуляцию (объединение данных и методов), либо сокрытие, либо **и то, и другое**. В Java присутствуют оба механизма (в других ООП-языках это не обязательно так), так что последний вариант будет наиболее правильным.

Использование инкапсуляции дает нам несколько важных преимуществ:

- Контроль за корректным состоянием объекта. Примеры этому были выше: благодаря сеттеру и модификатору private, мы обезопасили нашу программу от котов с весом 0.
- Удобство для пользователя за счет интерфейса. Мы оставляем «снаружи» для доступа пользователя только методы. Ему достаточно вызвать их, чтобы получить результат, и совсем не нужно вникать в детали их работы.
- Изменения в коде не отражаются на пользователях. Все изменения мы проводим внутри методов. На пользователя это не повлияет: он как писал auto.gas() для газа машины, так и будет писать. А то, что мы поменяли что-то в работе метода gas() для него останется незаметным: он, как и раньше, просто будет получать нужный результат.



# Encapsulation in Java

Today we will talk about encapsulation in Java.
Let's start with some examples :)

Imagine you have a coffee machine in front of you.

And I have a couple of questions. How does it work? What is the required water temperature for making coffee? How much water, milk? How does milk froth get into our cup instead of just milk? How is coffee brewed directly from whole beans that we put in? How much coffee is needed for one serving?

Most likely, you don't have answers to these questions. Well, perhaps not everyone uses such machines. Let me try to provide another example. Something you definitely use many times every day.
For example, Google.

Explain how the Google search engine works. How does it search for information based on the words you entered? Why are these results at the top, and not others?

Even though you use Google every day, you probably don't know this. But that's not important. After all, **we don't need to know**.

You can enter queries in the search engine without thinking about how it works. You can have a cup of coffee without knowing how the coffee machine is designed. You can drive a car without delving into the workings of the engine, without knowing physics and mechanics.

All of this is possible thanks to one of the principles of object-oriented programming - **encapsulation**.

In programming, there are two common concepts - **encapsulation** and **abstraction**. The term "encapsulation" is used to refer to both (that's how it turned out). Let's discuss both concepts.

The original meaning of the word **"encapsulation"** in programming is the combination of data and methods for working with this data in one package or "capsule".

In Java, the role of the capsule is played by a **class**. A class contains both data (class fields) and methods for working with this data.

In OOP, programs consist of capsule classes, which are both data and methods for working with them. And our flexible array, which we wrote in the previous lesson, is a typical example of a capsule class.

Now let's talk about **abstraction**.

How is it possible that we use various complex mechanisms without understanding how they are built and what their work is based on? It's simple: their creators provided a simple and convenient interface.
On the coffee machine, the interface is the buttons on the panel. By pressing one button, you get espresso. By pressing the second, you choose cappuccino. The third is responsible for a larger portion. And that's all we need to do.

It doesn't matter how the coffee machine is designed inside. The main thing is that **to get a portion of coffee, the user needs to press a button**.

This is the essence of abstraction. All the "insides" of the program are hidden from the user. This information is superfluous and unnecessary for them. The user needs the end result, not the internal process.

Let's write a class `Auto` for example:

```
// Here will be the code of the Auto class
```

This is what encapsulation of implementation looks like in a Java program. It's just like in real life: the user is provided with an interface (methods). If the user needs the car in the program to perform an action, it is enough to call the necessary method. And what happens inside these methods is extraneous information; the main thing is that everything works as it should.

Here we talked about encapsulation of implementation. Besides it, in Java there is also data hiding.

Let's practice with cats. We'll write a class `Cat2`:


```
public class Cat2 {
   
   public String name;
   public int age;
   public int weight;


   public Cat2(String name, int age, int weight) {
       this.name = name;
       this.age = age;
       this.weight = weight;
   }

   public Cat2() {
   }

   public void sayMeow() {
       System.out.println("Мяу!");
   }
}
```

The problem with the class is that its data (fields) are open to everyone, and another programmer can easily create a cat in the program without a name, with a weight of 0, and an age of -1000 years.

```
public static void main(String[] args) {
  
   Cat2 cat = new Cat2();

   cat.name = "";
   cat.age = -1000;
   cat.weight = 0;
}
```

## Data Hiding in Java

In Java, data hiding is achieved through the following mechanisms:

- Access modifiers (private, protected, package default).
- Getters and setters.

### Access Modifiers in Java

In Java, the following access modifiers are used:

- **public**: This modifier makes a class or class member public and accessible to all classes, both in the current package and in external packages. Fields and methods declared with the public modifier are visible to all classes.

- **private**: This modifier signifies a closed class or class member, opposite to the public modifier. A private class or class member is accessible only from within the same class's code.

- **protected**: This modifier makes a class or class member accessible from anywhere in the current class or package, as well as in derived classes, even if they are located in different packages.

- **package default**: This is the default modifier. If no modifier is applied to a class field or method, it implies the use of the package default modifier. Fields or methods with the package default modifier are visible to all classes within the current package.

### Encapsulation and Data Hiding

Authors of various articles on encapsulation may refer to either encapsulation (the combination of data and methods) or data hiding, or **both**. In Java, both mechanisms are present (unlike in some other object-oriented programming languages), so the latter approach is the most appropriate.

### Advantages of Encapsulation

Utilizing encapsulation provides us with several important advantages:

- **Control over Object State**: Encapsulation allows us to maintain control over the proper state of an object. For example, we can prevent instances of a class, such as cats, from having a weight of 0.

- **User Convenience Through Interface**: By exposing only methods to the user, we leave the "inside" hidden. Users simply need to call these methods to obtain results without delving into the details of their operation.

- **Code Changes Don't Affect Users**: Any changes we make to the internal workings of methods remain unnoticed by users, ensuring backward compatibility. Users can continue using the same method calls as before.





