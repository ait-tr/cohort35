console.log('hello, js!');

// объявление переменных
// через let можно переприсваевать новое значение
// через const переприсвоить их не получится

let x;
x = 9;
const y = 12
// y = 144
//можно присваивать переменной значение другого типа
x = 'строка'
// c помощью оператора typeof мы можем узнать тип данных
console.log(typeof x, x);


// тип sting - строка
let str1 = 'можно в одинарных'
let str2 = "можно и в двойных"
let str3 = `и в косых кавычках (backticks)`


//тип number - число
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
let num1 = 12
let num2 = 2
console.log(typeof num1);
//число с плавающей точкой float - тоже тип number
console.log(typeof 12.5);
// NaN - Not A Number, специальное значение, не отдельный тип данных
console.log(typeof NaN);
//то же самое, но через обращение к глобальному объекту-обертке Number
//эти объекты есть у примитивных типов и они хранят наборы методов и значений (вызываются обращением через точку)
console.log(typeof Number.NaN);


// арифметические операции

// сложение
let sum = num1 + num2
console.log('сумма чисел ',sum);
// вычитание
let dif = num1 - num2
console.log(dif);
// умножение
let mtl = 4*4
console.log(mtl);
// деление
let dev = num1 / num2
console.log(dev);
// остаток
let rem = 7 % 2
console.log(rem);
// возведение в степень
let pow = 2 ** 3
console.log(pow);



// тип boolean

// операторы сравнения
let cond1 = 9 > 10

// результат логического выражения
console.log(cond1); //false

// '!' оборачивает булевое значение на обратное
console.log(!cond1); //true

let cond2 = 10 >= 10 //true
let cond3 = 10 <= 9 //false
const cond4 = 5 < 7 //true

let isClever = true
let isDrunk = false


console.log(isDrunk);
console.log(typeof isDrunk.toString());


//тип bigint
let bigInt = 121233n
console.log(bigInt);


// undefined - или ничего

let variable
// неназначенная переменная равна undefined
console.log(variable);

// * мы не можем обращаться к ключу переменной с undefined - это приведет к ошибке
// но мы можем поставить перед обращением знак '?' и тогда значением будет undefined
console.log(variable?.name);

// symbol
let symbol = Symbol("slovo")
console.log(symbol);


//операторы сравнения

// Сравнения '==' и '==='

console.log(9 == '9');
console.log(9 === '9');

// приведение типов

// неявное приведение типов
let c1 = 9 + '15'
console.log(c1);

let c2 = 11 + 9 + '15'
console.log(c2);

const c4 = 1 + false
console.log(c4);

const c5 = false + 'javaScript'
console.log(c5);

let = c6 = 5 + ''
console.log(typeof c6, c6);

let с7 = +"12"
console.log('приведение через символ "+"',typeof с7 === 'number');


// явное преобразование типов
console.log(typeof Number('66')); //превращение строки в число
console.log(typeof String(66)); // преобразование числа в строку

// строки равны true - только пустая строка равна false
let c8 = Boolean("Apple")
console.log(c8);

let с9 = Boolean("")
console.log(с9);

// положительные и отрицательные числа при приведении к boolean равны true
let c10 = Boolean(13)
console.log(c10);

let c11 = Boolean(-13)
console.log(c11);

// 0 равен false
let c12 = Boolean(0)
console.log(c12);

let c13 = Boolean(null)
console.log(c13);


// * расширение Better Comments дает возможность
// ? стилизовать
// ! комментарии
// по цветам
// TODO и по смыслу


// Массивы или Arrays

const arr = [1, 2, 3, 4, 5]
const arr1 = [11, true, 'строка', ['John', 'Peter']]
const arr3 = [1, 2, 3, 4, 5]

//первый элемент массива
console.log(arr1[0]);
//получаем длину массива через .length
console.log(arr.length);

//второй элемент вложенного массива
console.log(arr1[3][1]);


// два массива не будут равны друг другу, даже если кажется что у них одинаковое содержимое
// это ссылочный тип данных, переменная хранит ссылку на объект
console.log(arr === arr3);


const arr4 = ['Audi', 'Opel', 'Ford', 'Tesla']
//перезаписываем элемент в массиве через обращение по индексу
arr4[2] = 'Buick'

console.log(arr4);


for (let i = 0; i < arr4.length; i++) {
  // условный оператор if
  if (arr4[i] === 'Buick') {
    arr4[i] += ' is an old car'
  } else if (arr4[i] === 'Buick') {
    arr4[i] += ' is Audi'
  } else {
    arr4[i] += ' is a new car'
  }
  console.log(arr4[i]);
}

//применяем мутирующий метод push, он изменяет исходный массив
//при этом возвращает (результат вызова) - длину нового массива, т.е число 5
console.log(arr4.push('Ferrari'));

// а если хотите использовать измененный массив, то можно просто обратиться к нему
console.log(arr4);


// создание элементов через конструктор
const arr5 = new Array(10).fill("hey")
console.log(arr5);

console.log(arr5[12]);

// метод pop() мутирует исходный массив, удаляет последний элемент с конца
console.log("метод pop() возвращает удаленный элемент с конца:      ", arr4.pop());
// метод shift() мутирует исходный массив, удаляет последний элемент с конца
console.log("метод shift() возвращает удаленный элемент из начала:      ", arr4.shift());
// метод unshift() добавляет элемент в начало массива
console.log('метод unshift() возвращает длину нового массива', arr4.unshift('brand new Tesla Truck'));


console.log(arr4);

//синтаксис шаблонных строк
