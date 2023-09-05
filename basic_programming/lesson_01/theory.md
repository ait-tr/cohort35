# Lesson 01

## 01. Базовые понятия и определения
___
- **Программа** - Програ́мма (от греч. προ — пред, греч. γράμμα — запись) — термин, в переводе означающий «предписание», то есть заданную последовательность действий.
  Компью́терная програ́мма — комбинация компьютерных инструкций и данных, позволяющая аппаратному обеспечению вычислительной системы выполнять вычисления или функции управления;
- Компьютерную программу должен понимать компьютер. Следовательно, программа должна быть написана на понятном для компьютера языке. 
- Какой язык понятен компьютеру? **Бинарный код (двоичный код)**. 
Как и каждый язык, двоичный код имеет свой алфавит. Алфавит включает в себя только две «буквы» / символа: 0 и 1. 
- Программа на двоичном коде – это строка, состоящая из **0** и **1**.
- **Язык программирования** — язык, понятный человеку, предназначенный для записи компьютерных программ, который может быть преобразован («переведен») на понятный для компьютера язык .

## 01. Basic Concepts and Definitions
___
- **Program** - Program (from Greek προ - before, Greek γράμμα - writing) is a term that translates to "prescription," meaning a specified sequence of actions.
  A computer program is a combination of computer instructions and data that enables the hardware of a computational system to perform calculations or control functions.
- The computer must understand a computer program. Therefore, the program must be written in a language that is understandable by the computer.
- What language is understandable by the computer? **Binary code**.
  Like any language, binary code has its alphabet. The alphabet consists of only two "letters" / symbols: 0 and 1.
- A program in binary code is a string consisting of **0** and **1**.
- **Programming language** - a language understandable by humans, designed for writing computer programs, which can be transformed ("translated") into a language understandable by the computer.

## 02. Языки программирования
___
Со времени создания первых программируемых машин человечество придумало более восьми тысяч языков программирования. Каждый год их число увеличивается. Некоторыми языками умеет пользоваться только небольшое число их собственных разработчиков, другие становятся известны миллионам людей. Профессиональные программисты могут владеть несколькими языками программирования.

В сфере IT есть разные направления разработки, вот самые распространенные:
- **Веб-разработка** — это разработка сервисов и инструментов, которыми мы пользуемся в интернете;
- **Системная разработка** — разработка программ, с помощью которых компьютер выполняет задачи: операционных систем, драйверов; 
- **Десктоп-разработка** — разработка программ для запуска под управлением операционной системы; 
- **Геймдев** — разработка игр; 
- **Мобильная разработка** — разработка приложений для телефонов и планшетов; 
- **Data Science и анализ данных** — хранение, обработка и анализ больших объемов данных.

## 02. Programming Languages
___
Since the creation of the first programmable machines, humanity has devised over eight thousand programming languages. Their number increases every year. Some languages are only used by a small number of their own developers, while others become known to millions of people. Professional programmers can master several programming languages.

In the IT field, there are various development directions, here are the most common ones:
- **Web Development** - the development of services and tools that we use on the Internet;
- **System Development** - the development of programs that allow a computer to perform tasks: operating systems, drivers;
- **Desktop Development** - the development of programs to run under the operating system;
- **Game Development (Gamedev)** - the development of games;
- **Mobile Development** - the development of applications for phones and tablets;
- **Data Science and Data Analysis** - storage, processing, and analysis of large volumes of data.


Мир веб-разработки — если говорить только о программистах (без околоайтишных специальностей) — делится на две категории: **фронтенд** и **бэкенд**. Фронтенд (англ. frontend — «внешняя часть») — это всё, что видит пользователь на экране или чего касается курсором мыши, например кнопка на сайте. Когда пользователь нажимает на кнопку, в игру вступает бэкенд (англ. backend — «внутренняя часть»). Его задача — организовать взаимодействие с базами данных и другими серверами, настроить поиск нужной информации и отправить её обратно пользователю.

**Frontend - визуальная сторона, Backend – все, что под капотом.**

### Рейтинг языков программирования 2023. Коммерческое использование.

The world of web development — when speaking solely about programmers (excluding adjacent IT specialties) — can be divided into two categories: **frontend** and **backend**. Frontend (from English "frontend" — "the visible part") includes everything that the user sees on the screen or interacts with using the mouse cursor, such as buttons on a website. When a user clicks a button, the backend (from English "backend" — "the hidden part") comes into play. Its task is to organize interactions with databases and other servers, configure the search for the necessary information, and send it back to the user.

**Frontend** - the visual side; **Backend** - everything under the hood.

### Programming Language Rankings 2023. Commercial Usage.



![Programming Language Rankings 2023 / Рейтинг языков программирования 2023](img/raiting2023.png)



- **JavaScript** — самый используемый язык программирования. Это язык-монополист во фронтенд-разработке. С его помощью программисты оживляют страницы, добавляя динамический контент: по щелчку мыши меняется фон, при скролле вниз подгружается новый контент, проверяются данные в формах при покупке авиабилетов и всплывают уведомления в соцсетях. 
С развитием фреймворков и библиотек, таких как React, Angular и Vue.js, JavaScript стал неотъемлемой частью современной веб‑разработки.
Появление TypeScript (TS) (усовершенствованного JS с безопасностью типов) тоже увеличило количество разработчиков, которые ежедневно в своей работе используют JavaScript.

Сильные стороны:
- Простой и понятный синтаксис 
- Язык прост в освоении и реализации 
- Широкая сфера применения 
- Подходит для клиентской и серверной стороны 
- Огромное количество библиотек 
- Много ресурсов и отличная поддержка сообщества 
- Быстрота — не требует компиляции и может работать сразу в браузере на стороне клиента

Слабые стороны:
- Может интерпретироваться по-разному разными браузерами, что затрудняет написание кросс-браузерного кода-
- Слабая типизация, которая позволяет складывать строку с числом. Эта особенность породила огромное количество мемов 
- Веб-браузеры могут отключать выполнение кода JavaScript 
- Низкая надежность 
- Плохо подходит для разработки мобильных приложений

___
- **JavaScript** — the most widely used programming language. It's a monopoly in frontend development. With its help, programmers bring web pages to life by adding dynamic content: clicking the mouse changes the background, scrolling down loads new content, it verifies data in forms for purchasing airplane tickets, and notifications pop up on social media.
  With the evolution of frameworks and libraries like React, Angular, and Vue.js, JavaScript has become an integral part of modern web development.
  The emergence of TypeScript (TS) (an enhanced JS with type safety) has also increased the number of developers who use JavaScript daily in their work.

**Strengths:**
- Simple and understandable syntax
- Easy to learn and implement
- Wide range of applications
- Suitable for both client and server-side development
- Abundance of libraries
- Plenty of resources and excellent community support
- Speed - doesn't require compilation and can work directly in the browser on the client side

**Weaknesses:**
- Can be interpreted differently by different browsers, making writing cross-browser code challenging
- Weak typing, which allows combining a string with a number. This characteristic has led to a plethora of memes
- Web browsers can disable the execution of JavaScript code
- Low reliability
- Not well-suited for mobile app development



___
- **Java** — мультифункциональный кроссплатформенный объектно-ориентированный язык  со строгой типизацией. 
Этот язык очень популярен с момента его создания в 1995 году, и остается в тройке лидеров. При этом на Java и Spring уже написано огромное количество кода, поэтому этот язык программирования продолжает активно использоваться крупнейшими корпорациями.
Не путайте его с JavaScript, у них похожи только названия, но на практике они во многом противоположны друг другу.
На Java пишут сложное ПО: промышленные и банковские системы — как раз то, что не пишут на JavaScript. Помимо этого, огромное количество десктопных приложений, приложений на Android и серверных программ написано именно на Java.

Сильные стороны:
- Кроссплатформенность — Java работает практически на всех операционных системах 
- Наличие ООП 
- Большое сообщество 
- Понятный синтаксис 
- Можно писать ПО любой сложности: от небольших утилит до огромных программных комплексов с миллионами строка кода 
- Повышенная производительность и надежность 
- Поддерживает многопоточность

Слабые стороны:
- Дополнительный слой в виде виртуальной машины немного снижает производительность. Программы на Java часто работают медленнее, чем написанные на С++ 
- Многословный код — иногда нужно написать больше кода, чем на других языках. Код можно сравнить с юридическим документом, где все подробно расписано 
- Ресурсоемкое управление памятью


___
- **Java** — a versatile cross-platform object-oriented language with strong typing. This language has been very popular since its creation in 1995 and remains among the top three. Java and Spring have accumulated a vast amount of code over the years, making this programming language actively used by major corporations.
  Don't confuse it with JavaScript; they only share similar names but are quite different in practice.
  Java is used for developing complex software, including industrial and banking systems — precisely what isn't typically written in JavaScript. Additionally, a significant number of desktop applications, Android apps, and server programs are written in Java.

**Strengths:**
- Cross-platform compatibility — Java works on nearly all operating systems
- Object-oriented programming (OOP) capabilities
- Large community
- Understandable syntax
- Capable of developing software of any complexity: from small utilities to massive software complexes with millions of lines of code
- Enhanced performance and reliability
- Supports multi-threading

**Weaknesses:**
- Additional layer in the form of a virtual machine slightly affects performance. Java programs often run slower than those written in C++
- Verbosity — sometimes requires more code compared to other languages. The code can be likened to a legal document with extensive details
- Resource-intensive memory management


___
**Python** — язык программирования общего назначения с простым синтаксисом, что делает его идеальным для начинающих. Востребован в разработке веб‑приложений, научных исследований, машинного обучения и искусственного интеллекта. Это один из самых популярных языков для анализа данных и в Data Science
Вы встретите Python в разработке веб-сайтов и утилит, в машинном обучении и в работе с нейросетями. 
Благодаря богатой экосистеме библиотек и инструментов, Python продолжает удерживать лидирующие позиции. 
Аналитики считают, что универсальность — от написания скриптов, до запуска серверов или анализа данных, стала ключом к достижению популярности 

Сильные стороны:
- Легко освоить 
- Интуитивно простое чтение и написание кода 
- Интерпретируемый язык выполняет код построчно и сообщает об ошибках последовательно, что упрощает отладку. 
- Развитая официальная документация и учебные пособия 
- Создано множество полезных библиотек и фреймворков 
- Универсальность

Слабые стороны:
- Низкая скорость. Построчное выполнение кода часто приводит к его медленному выполнению 
- Возможны ошибки выполнения (Runtime Error), связанные с динамической типизацией. 
- Машинное обучение и наука о данных требуют знания соответствующих разделов математики 
- Плохая поддержка многопоточности 
- Из-за повышенного потребления памяти и низкой скорости, не подходит для разработки мобильных и фронтэнд приложений
- 
___
**Python** — a general-purpose programming language with a simple syntax, making it ideal for beginners. It is in demand for web application development, scientific research, machine learning, and artificial intelligence. Python is one of the most popular languages for data analysis and Data Science. You'll encounter Python in web development, utilities, machine learning, and neural network work.
Thanks to its rich ecosystem of libraries and tools, Python continues to hold leading positions. Analysts believe that its versatility — from scripting to running servers or analyzing data — has been key to its popularity.

**Strengths:**
- Easy to learn
- Intuitively simple code reading and writing
- An interpreted language executes code line by line and reports errors sequentially, making debugging easier
- Developed official documentation and learning resources
- Numerous useful libraries and frameworks have been created
- Versatility

**Weaknesses:**
- Low speed. Line-by-line code execution often results in slower performance
- Runtime errors can occur due to dynamic typing
- Machine learning and data science require knowledge of relevant mathematics sections
- Poor support for multi-threading
- Due to higher memory consumption and lower speed, not suitable for mobile and frontend application development


___
**C# или «си-шарп»** — разрабатывался Microsoft как часть платформы .NET и считается одним из самых универсальных языков программирования. Это мультипарадигменный объектно-ориентированный язык программирования общего назначения, созданный главным образом для устранения некоторых недостатков C++.
Применяется для создания десктопных, веб‑ и мобильных приложений, а также игр на платформе Unity, пишут программы для экосистемы Microsoft.
C# – уверенный середнячок с большим потенциалом.

Сильные стороны:
- Относительно прост в освоении и понимании, особенно для тех, кто знаком с основами объектно-ориентированного программирования. 
- Идеально подходит для всех типов разработки под Windows 
- Много библиотек и готовых решений 
- Быстрое время компиляции и выполнения 
- Поддерживает безопасность типов

Слабые стороны:
- C# менее гибкий, так как в основном зависит от платформы .NET 
- Почти все переменные являются ссылками, а освобождение памяти осуществляется с помощью сборщика мусора 
- Устранение ошибок требует серьезного опыта и знаний


___
**C# or "C-sharp"** — developed by Microsoft as part of the .NET platform and is considered one of the most versatile programming languages. It's a multi-paradigm general-purpose object-oriented programming language, primarily created to address some of the drawbacks of C++.
It's used for creating desktop, web, and mobile applications, as well as games on the Unity platform and programs for the Microsoft ecosystem.
C# is a solid middle-ground language with significant potential.

**Strengths:**
- Relatively easy to learn and understand, especially for those familiar with the basics of object-oriented programming.
- Ideal for all types of development on Windows.
- Many libraries and ready-made solutions.
- Fast compilation and execution times.
- Supports type safety.

**Weaknesses:**
- C# is less flexible as it heavily relies on the .NET platform.
- Almost all variables are references, and memory management is done using a garbage collector.
- Resolving errors requires significant experience and knowledge.



## 03. Архитектура ЭВМ
Архитектура ЭВМ, построенной на принципах фон Неймана (1946г).
- Устройство ввода – (input) – клавиатура 
- Устройство вывода – (output) -  монитор, принтер 
- Процессор (Processor) - основное вычислительное устройство ЭВМ. Программа передает инструкции процессору 
- RAM (Random Access Memory) - оперативная память, малый объем, быстрая скорость, энергозависимая 
- HDD / SSD – постоянная энергонезависимая память. Большой объем. По сравнению с RAM – медленная.

## 03. Computer Architecture
Computer architecture based on von Neumann principles (1946).
- Input device – keyboard
- Output device – monitor, printer
- Processor - the main computing unit of a computer. The program sends instructions to the processor.
- RAM (Random Access Memory) - volatile memory, small capacity, fast speed, power-dependent.
- HDD / SSD - non-volatile memory. Large capacity. Slower compared to RAM.


## 04. Компиляция vs Интерпретация
**Транслятор** представляет собой программу, на основе которой компьютер преобразует вводимые в него программы на машинный язык, поскольку он может выполнять программы, записанные только на языке его процессора, и алгоритмы, заданные на другом языке, должны быть перед их выполнением переведены на машинный язык.
Трансляторы реализуются в виде компиляторов или интерпретаторов. С точки зрения выполнения работы компилятор и интерпретатор существенно различаются.
- Компилятор (англ. compiler - составитель, собиратель) читает всю программу целиком, делает ее перевод и создает законченный вариант программы на машинном языке, который затем и выполняется. Результат работы компилятора — бинарный исполняемый файл.
- Интерпретатор (англ. interpreter - истолкователь, устный переводчик) переводит и выполняет программу строка за строкой.

После того, как программа откомпилирована, ни исходный текст программы, ни компилятор более не нужны для исполнения программы. В то же время программа, обрабатываемая интерпретатором, должна заново переводиться на машинный язык при каждом очередном запуске программы. То есть исходный файл является непосредственно исполняемым.

У интерпретаторов и компиляторов есть ряд различий — теоретических и чисто практических:

- Интерпретатор работает с кодом построчно, а компилятор переводит весь блок кода целиком. 
- Интерпретатор исполняет код, как только «прочтет» нужную строку, а компилятор отдает его на выполнение системе — сам он только переводит.

Откомпилированные программы работают быстрее, но интерпретируемые проще исправлять и изменять. Но… особенность компилируемых языков - для каждой ОС или архитектуры компьютера программу нужно перекомпилировать. Для часто-переносимых прикладных программ это плохо - нужно перекомпилировать, а это потенциально долгая операция. 

Для достижения большей скорости работы программ на интерпретируемых языках программирования может использоваться трансляция в промежуточный байт-код. 
Языком, позволяющим данную хитрость, например, является Java.


## 04. Compilation vs Interpretation
A **translator** is a program that allows a computer to convert programs entered into it into machine language, as it can only execute programs written in its processor's language, and algorithms written in another language must be translated into machine language before execution.
Translators are implemented as compilers or interpreters. From an execution standpoint, compilers and interpreters differ significantly.
- A **compiler** reads the entire program, translates it, and generates a complete version of the program in machine language, which is then executed. The compiler's result is a binary executable file.
- An **interpreter** translates and executes the program line by line.

Once a program is compiled, neither the source code nor the compiler is needed for program execution. However, a program processed by an interpreter must be translated into machine language again each time the program is launched. In other words, the source file is directly executable.

Interpreters and compilers have several theoretical and practical differences:
- An interpreter works with code line by line, while a compiler translates entire code blocks at once.
- An interpreter executes code as soon as it "reads" the relevant line, while a compiler hands it over to the system for execution – it only performs the translation.

Compiled programs run faster, but interpreted ones are easier to fix and modify. However, a characteristic of compiled languages is that a program needs to be recompiled for each operating system or computer architecture. For frequently portable applications, this is inconvenient, as recompilation is potentially time-consuming.

To achieve higher program execution speeds in interpreted languages, intermediate bytecode translation can be utilized. Java, for instance, is a language that allows for this trick.



## 05. Hello, World

```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}
```

```
javac HelloWorld.java
```

```
java HelloWorld

```