## Список уже полученных знаний и умений:
## List of Acquired Knowledge and Skills:

### 1 **Типы переменных (ТИП, имя, значение)**
int, double, long, char, float, short, byte, boolean - примитивные типы
String - сложный тип (ссылочный тип данных)

Вопрос: для чего нужны типы?
Ответ: Уменьшить/оптимизировать размер памяти под данные.


### 1. **Variable Types (TYPE, name, value)**
    - int, double, long, char, float, short, byte, boolean - primitive types
    - String - complex type (reference data type)

**Question:** Why are types necessary?
**Answer:** To reduce/optimize memory size for data storage.


### 2 **Математические действия**
    
    + , - , * , / - целочисленное для int, % - остататок от деления (деление с остатком)
    Math.method - класс с изобилием математических функций.


### 2 **Mathematical Operations**

    + , - , * , / - integer arithmetic for int
    % - modulus operator (remainder of division, integer division with remainder)
    Math methods - a class with a variety of mathematical functions.


### 3 **Накопление суммы/значения в переменной**

    sum = sum + 1; // так писали раньше
    sum++; // увеличение на 1
    sum--; // уменьшение на 1
    sum += 6 //увеличить на 6



### 3 **Accumulating Sum/Value in a Variable**

    - `sum = sum + 1;` // used to write like this
    - `sum++;` // increment by 1
    - `sum--;` // decrement by 1
    - `sum += 6;` // increment by 6

### 4 **Вывод текста и "результатов" на экран**

    sout => System.out.println()
    System.out.println("Текст" + имя_переменной);

    System.out.printf("Текст %.2f (это шаблон)", имя_переменной); - это для форматированного вывода
    шаблон %.2f - числа с двумя знаками после запятой
    задаем формат вывода числа

### 4 **Displaying Text and "Results" on the Screen**

    `sout` => `System.out.println()`
    `System.out.println("Text" + variable_name);`

    `System.out.printf("Text %.2f (this is a template)", variable_name);` - for formatted output
    Template `%.2f` - numbers with two decimal places
    Setting the output format for numbers

### 5 **Запрос данных от пользователя** - число, строка, символ

    Шаг 1.
```
Scanner scanner = new Scanner(System.in);
```
    Шаг 2.
    Создать переменную (задать тип и имя), куда поступит то, что будет набирать пользователь на клавиатуре

    Шаг 3.
    Выбрать правильный метод для приема данных от пользователя.

Не забывать писать приглашение пользователю для ввода данных!


### 5 **Requesting Data from the User** - number, string, character

    - Step 1.
```
Scanner scanner = new Scanner(System.in);
```
    - Step 2.
      Create a variable (specify type and name) to store what the user will input via the keyboard.

    - Step 3.
      Choose the appropriate method for receiving data from the user.

Remember to provide a prompt to the user for data input!


### 6 **Проверка условия**

    выбор - if (логическое выражение) { ... } else { ... }  

    switch () {case: ...}

Тернарный оператор

    [первый операнд c условием] ? [второй операнд] : [третий операнд];
третьего НЕ ДАНО!!! , boolean может быть только true, false


### 6 **Condition Checking**

    - Selection - `if (logical expression) { ... } else { ... }`
    - `switch () {case: ...}`

**Ternary Operator**

    [first operand with condition] ? [second operand] : [third operand];`
Third operand is NOT PROVIDED!!! Boolean can only be true or false.


### 7 **Формальная логика, логические операторы**

### Таблица логических операторов

    & - И (AND)
    && - тоже И, но если первое условие не выполнилось, то второе и не проверяется
    Пример: x > 0 && x < 10

    | - ИЛИ (OR)
    || - тоже ИЛИ, но если первое условие выполнилось, то второе и далее не проверяется

    ! - логическое отрицание
    !x означает “не x”. Меняет значение на противоположное
    
    ^ - Логическое исключающее ИЛИ (XOR)
    По сути, возвращает true, если операнды — разные.

Как и в математике, в программировании у операторов есть определённый порядок выполнения, если они встречаются в одном выражении:

    ! -> & -> ^ -> | -> && -> ||

Если одинаковые операции стоят по соседству, то раньше выполняется та, что левее.

### 7. Formal Logic, Logical Operators

### Logical Operators Table

    `&` - AND
    `&&` - also AND, but if the first condition is not satisfied, the second one is not checked. Example: `x > 0 && x < 10`
    `|` - OR
    `||` - also OR, but if the first condition is satisfied, the following ones are not checked.
    `!` - logical negation. `!x` means "not x". Changes the value to its opposite.
    `^` - Exclusive OR (XOR). Essentially returns true if the operands are different.

Just like in mathematics, in programming, operators have a specific order of execution when they appear in the same expression:

    `!` -> `&` -> `^` -> `|` -> `&&` -> `||`

If identical operations are adjacent, the one on the left is executed first.



### 8 Проверка делимости нацело

    if ( i % 2 == 0) - это делимость на 2
    число % 3 == 0, число % 5 == 0 - это делимость нацело на 3, 5

### 8 Checking for Divisibility

    if (i % 2 == 0) - this checks for divisibility by 2
    if (number % 3 == 0) and (number % 5 == 0) - this checks for divisibility by 3 and 5 respectively


### 9 Циклы / Loops:

    while() {...}, 
    do {...} while(), 
    for (int i; i < ...; i++)


fori - часто применяемый,

### 10 Массивы - объявление и наполнение

        int[] array = new int[10]; // объявление и иннициализация массив целых чисел
        есть индекс у элемента массива, а есть сам элемент массива(значение) под этим индеском
        array[i] - это элемент массива, i - это его индекс, индексы начинаются с 0,
        array.length - это длина (размер / кол-во элементов) массива
        array.length - 1 -> это последний индекс в массиве
        array - это имя массива
        array[i] - это текущий элемент массива в цикле,
        array[i + 1] - это следующий за текущим элементом
        array[i - 1] - это предыдущий элемент перед текущим

### 10 Arrays - Declaration and Initialization

    int[] array = new int[10]; // Declaration and initialization of an integer array
    Each element in an array has an index and a corresponding value.
    array[i] is an array element, where i is its index. Indexing starts at 0.
    array.length is the length (size/number of elements) of the array.
    array.length - 1 is the last index in the array.
    array is the name of the array.
    In a loop, array[i] represents the current element in the array,
    array[i + 1] represents the element after the current one,
    and array[i - 1] represents the element before the current one.


### 11 **Генератор случайных чисел**

#### 1.

     Random random = new Random();
     int var = random.nextInt(); // получаем случайное число в диапазоне всех значений типа int
     var = random.nextInt(50); // получаем случайное число в диапазоне от 0(включительно) до 50 (не включительно)
     var = random.nextInt(15) + 5; //получаем случайное число в диапазоне от 5(включительно) до 20 (не включительно)
     
     double varDouble = random.nextDouble();
     float varFloat = random.nextFloat();

#### 2.

     int n = (int)(Math.random() * (m - n + 1) + n) - целые числа в интервале от n до m включительно!  
     кубик из 6 граней n = (int)(Math.random() * (6 - 1 + 1) + 1)
     орел и решка n = (int)(Math.random() * (1 - 0 + 1) + 0)

### 11 Random Number Generator

#### 1.
    Random random = new Random();
    int var = random.nextInt(); // Get a random number in the entire range of int values.
    var = random.nextInt(50); // Get a random number in the range from 0 (inclusive) to 50 (exclusive).
    var = random.nextInt(15) + 5; // Get a random number in the range from 5 (inclusive) to 20 (exclusive).

    double varDouble = random.nextDouble();
    float varFloat = random.nextFloat();

#### 2.
    int n = (int)(Math.random() * (m - n + 1) + n); // Generate random integers in the range from n to m (inclusive).
    // Example: A 6-sided die
    int dieRoll = (int)(Math.random() * (6 - 1 + 1) + 1);
    // Example: Coin flip (0 for heads, 1 for tails)
    int coinFlip = (int)(Math.random() * (1 - 0 + 1) + 0);

These code snippets demonstrate how to generate random numbers and integers within specified ranges using the Random class and the `Math.random()` method in Java.

### 12 Операции со строками:

        st.length(); // получить длину строки
        st.equals(st1); // сравнить две строки по значению
        st.charAt() // получить символ из строки по его индексу
        st.substring(с какого места включительно, до какого места не включительно)

### 12 Операции со строками:

    `st.length();` - получить длину строки.
    `st.equals(st1);` - сравнить две строки по значению.
    `st.charAt(index);` - получить символ из строки по его индексу.
    `st.substring(с какого места включительно, до какого места не включительно);` - получить подстроку из строки.



### 13 Методы

Методы - основные "строительные кирпичики" Java, для реализации различный функциональностей.

DRY (Don’t repeat yourself - не повторяйся) - основной принцип разработки программного обеспечения.
Методы позволяют реализовать этот принцип.

**Сигнатура метода** это совокупность имени метода и его параметров. Порядок параметров тоже важен в сигнатуре:

        [модификаторы] тип_возвращаемого_значения  название_метода (тип1 параметр1, тип2 параметр2){
        
        // тело метода
        
        }

Модификаторы и параметры не являются обязательными элементами в строке объявления метода, то есть могут отсутствовать.
Следует отметить, что существует некоторая путаница в определениях. Часто можно услышать, что строку объявления метода также называют сигнатура метода.
Но, все-таки, сигнатура метода - это то, что определяет уникальность метода при его вызове. Т.е. имя метода + набор параметров.


По умолчанию главный класс любой программы на Java содержит метод main, который служит точкой входа в программу.

Ключевые слова **public** и **static** являются модификаторами (альтернатива public - **private**,
отсутствие модификаторов - "по умолчанию", protected).

Далее идет **тип возвращаемого значения**.

Ключевое слово **void** указывает на то, что метод **ничего не возвращает**, он выполняет то, что в нем написано.

Вызов метода осуществляется в форме:

        имя_метода(аргументы);
        myMethod();

После имени метода обязательно указываются скобки, в которых перечисляются аргументы - значения для параметров метода.


Метод, если он не void, возвращает значение того типа, которое определено в его сигнатуре.
Для этого применяется оператор **return**.  
После оператора return указывается возвращаемое значение, которое является результатом метода.

Это может быть:
- значение переменной, которая вычислена в методе // return array;
- вычисляемое "на лету" выражение // return str + str1 -> будет сначала произведена конкатенация строк, потом возвращен результат
- литеральное значение (константа)

### 13 Methods

Methods are fundamental building blocks in Java for implementing various functionalities.

**DRY** (Don't Repeat Yourself) is a fundamental software development principle. Methods enable you to implement this principle.

The **method signature** is a combination of the method name and its parameters. The order of parameters also matters in the signature:

```
[modifiers] return_type method_name (type1 parameter1, type2 parameter2) {

// method body

}
```

Modifiers and parameters are not mandatory elements in a method declaration and can be omitted.

There is some confusion in terminology. You may often hear that the method declaration line is also called the method signature. However, the method signature is what uniquely identifies a method when it is called. That is, it's the method name along with its parameter list.

By default, the main class of any Java program contains a `main` method, which serves as the entry point to the program.

The keywords **public** and **static** are modifiers (alternatively, you can use **private**, or no modifiers, which is "default," or **protected**).

Next comes the **return type**.

The keyword **void** indicates that the method **does not return anything**; it performs the actions specified within it.

A method can be called in the following form:

```
method_name(arguments);
myMethod();
```

After the method name, parentheses are mandatory and should list the arguments—values for the method's parameters.

If a method is not of type `void`, it returns a value of the type defined in its signature. To achieve this, you use the **return** statement. After the return statement, you specify the value to be returned, which becomes the result of the method. This value can be:

- A variable's value computed within the method (e.g., `return array;`).
- An expression computed on the fly (e.g., `return str + str1;` will first concatenate strings and then return the result).
- A literal value (constant).
