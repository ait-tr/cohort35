## Массивы
**Массив** — это структура данных, в которой хранятся элементы **одного** типа.
Его можно представить, как набор пронумерованных ячеек, в каждую из которых можно поместить какие-то данные (один элемент данных в одну ячейку). Доступ к конкретной ячейке осуществляется через её номер. 
Номер элемента в массиве также называют **индексом**.

В случае с Java массив однороден, то есть во всех его ячейках будут храниться элементы одного типа. Так, массив целых чисел содержит только целые числа (например, типа int), массив строк — только строки, массив из элементов созданного нами класса Dog будет содержать только объекты Dog.
То есть в Java мы не можем поместить в первую ячейку массива целое число, во вторую String, а в третью — “собаку”.


## Arrays
An **array** is a data structure that holds elements of the **same** type.
You can envision it as a collection of numbered cells, each capable of holding some data (one data element in one cell). Access to a specific cell is achieved using its number, also known as an **index**.

In the context of Java, arrays are homogeneous, meaning all cells store elements of the same type. For instance, an array of integers contains only integers (e.g., of type int), an array of strings contains only strings, and an array of objects of a custom class like Dog contains only Dog objects.
In Java, we cannot place an integer in the first cell of an array, a string in the second, and a "dog" in the third cell.


## Объявление массива
**Как объявить массив?**\
Как и любую переменную, массив в Java нужно объявить. Сделать это можно одним из двух способов. Они равноправны, но первый из них лучше соответствует стилю Java.


## Declaring an Array
**How to Declare an Array?**  
Just like any variable, you need to declare an array in Java. You can do it in one of two ways. They are equivalent, but the first one aligns better with Java's style.


```
dataType[] arrayName;    ->     int[] myArray;
dataType arrayName[];    ->     int myArray[];
```

## Создание массива
Как и любой другой объект, создать массив Java, то есть зарезервировать под него место в памяти, можно с помощью оператора new.

Делается это так:


## Creating an Array
Similar to creating any other object, you can allocate memory for a Java array using the **new** operator.

This is done as follows:

```
new arrayType [length];
```

`arrayType` — это тип массива, а `length` — его длина (то есть, количество ячеек), выраженная в целых числах (int)

`arrayType` is the array type, and `length` is its length, expressed in integers (`int`).


```
int[] myArray; // объявление массива -- Array declaration
myArray = new int[10]; // создание, то есть, выделение памяти для массива на 10 элементов типа int
                       // Creation, i.e., memory allocation for an array of 10 elements of type int
```

Однако гораздо чаще массив создают сразу после объявления с помощью такого сокращённого синтаксиса:

However, more often arrays are created immediately after declaration using this shorthand syntax:
```
int[] myArray = new int[10]; // объявление и выделение памяти в одной строке кода
int[] myArray = new int[10]; // Array creation and memory allocation for an array of 10 elements of type int

```

При подобной инициализации все элементы массива имеют **значение по умолчанию**.\
Для числовых типов (в том числе для типа char) это число 0, для типа boolean это значение false, а для остальных объектов это значение null.

Однако также можно задать конкретные значения для элементов массива при его создании:

When initialized this way, all array elements have a **default value**.  
For numerical types (including the `char` type), this value is 0. For the `boolean` type, it's `false`, and for other objects, it's `null`.

However, you can also assign specific values to array elements during its creation:

```
int[] numbers = new int[] { 1, 2, 3, 5 };
String[] strings = { “One”, “Two”, “Twenty five” };
```

Обращение к элементу массива происходит по его индексу:
Accessing an array element is done using its index:
```
myArray[0];
```

Важнейшее свойство, которым обладают массивы, является свойство(метод) `length`, возвращающее длину массива, то есть количество его элементов:
An essential property that arrays possess is the `length` property (method), which returns the length of the array, i.e., the number of its elements:
```
int[] numbers = {1, 2, 3, 4, 5};
int length = numbers.length;   // 5
```

Для работы с массивами в Java есть класс `java.util.Arrays`

To work with arrays in Java, there is the `java.util.Arrays` class

