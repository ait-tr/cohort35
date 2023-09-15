**Task 00**
- Создайте переменную типа int. 
- Получите произвольное значение переменной из консоли (используем Scanner)
- Выведите строку в формате:
```
Число: 6 четное: true; кратно 3: true; четное и кратное 3: true
Число: 3 четное: false, кратно 3: true, четное и кратное 3: false
```

* (опционально) - учесть, что случайное число может оказаться 0

**Task 01** со звездочкой
Построчно сократить логическое выражения (соблюдая приоритетность операций)
```
System.out.println((true | false) | (45 < 70) & !(true) ^ (6 == 5));
```

Пример выполнения:
```
System.out.println(true || false ^ true && !true);
System.out.println(true || false ^ true && false);
System.out.println(true || true && false);
System.out.println(true || false);
System.out.println(true);
```

Убедиться, что во всех выведенных строчках выводится одинаковое значение типа boolean
