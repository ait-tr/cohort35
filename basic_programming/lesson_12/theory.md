## Цикл for
Цикл **for** является наиболее распространённым циклом в программировании, поэтому его следует изучить. Цикл for проводит инициализацию перед первым шагом цикла. Затем выполняется проверка условия цикла, и в конце каждой итерации происходит изменение управляющей переменной.

```
for(<начальная точка>; <условие выхода>; <изменение счетчика>) {
	// Тело цикла
}
```

## The "for" Loop
The **for** loop is the most commonly used loop in programming, so it's crucial to understand. The **for** loop performs initialization before the first loop step. Then, it checks the loop condition, and at the end of each iteration, the control variable is modified.
```
for (<initialization>; <exit condition>; <counter modification>) {
    // Loop body
}
```


Пример перебора цифр от 0 до 5 и вывод каждой в консоль:\
Example of iterating through numbers from 0 to 5 and printing each one to the console:
```
for(int i = 0; i < 5; i++) {
   System.out.println(i);
}
```

Счетчик цикла не обязательно должен быть целочисленным. Вполне допустим, например, тип double. И даже тип String:\
The loop counter doesn't necessarily have to be an integer. It's perfectly acceptable, for instance, to use the double type. Even the String type can be used:

```
 for (String str = "Hello"; str.length() < 10; str = str + "1") {
      System.out.println(str);
  }
```

Такой счетчик цикла допустим, но практически не используется. За ненадобностью.

Все три блока <начальная точка>; <условие выхода>; <изменение счетчика> - не обязательны. 
Программа вполне себе скомпилируется и запустит бесконечный цикл:

While such a loop counter is permissible, it's rarely used due to its impracticality.

All three blocks, <initialization>; <exit condition>; <counter modification>, are not mandatory. A program will successfully compile and run with an infinite loop:
```
for( ; ; ){
    System.out.println("Hello");
}
```

Если при обработке цикла нужно его прервать, используйте оператор `break`, который останавливает работу текущего тела цикла.
Все последующие итерации также пропускаются

Оператор `continue` завершает текущую итерацию цикла и переходит к следующей. 


If you need to interrupt a loop's processing, use the `break` statement, which stops the execution of the current loop body. All subsequent iterations are also skipped.

The `continue` statement terminates the current iteration of the loop and proceeds to the next one.
