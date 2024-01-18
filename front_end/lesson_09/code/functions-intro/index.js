// spread syntax

console.log(printHello());

const fruits = ['apple', 'orange']

//с помощью spread syntax можно делать копию массива
const fruits2 = [...fruits]

fruits2[0] = 'pineapple'

console.log(fruits);
console.log(fruits2);

const fruits3 = ['strawberry', ...fruits2, ...fruits]
console.log(fruits3);

// array destructuring
const cities = ['Berlin', 'Hamburg', 'Brandenburg', 'Potsdam']

// в одну строчку можем объявить несколько переменных из элементов массива и присвоить им значение
// значения можно пропускать, важно знать индекс, порядок элементов
const [capital, , otherGermanCity] = cities

console.log(capital);
// console.log(hamburg);
console.log(otherGermanCity);




/// Functions
// объявление функций в js

// функция без return возвращает undefined
function printHello() {
  console.log('Hello!');
}

// вызов функции и вывод в консоль
console.log(printHello());

// функция не ограничивает параметры по типам данных
// эту функцию сложения можно использовать и для строк и для чисел
// function declaration
function sum(a, b) {
  return a + b
}

const sum1 = sum(10, 15)
const greeting = sum('Glad', ' to see you!')

console.log(sum1);
console.log(greeting);

// второй способ объявления функции
const subtraction = function (a,b) {
  return a - b
}

console.log(subtraction(100, 99))

// в качестве параметра в функцию мы можем передать другую функцию
function mathMinus(a, b, subtraction) {
  return subtraction(a, b)
}

console.log(mathMinus(1000, 600, subtraction));



// напишем две функции приветствия

// greetingGermanNorth
// одну которая принимает два параметра имя и фамилию
// и возвращать строку "Moin, John Snow!"

// greetingGermanSouth
// тоже принимает два параметра имя и фамилию
// и возвращать строку "Servus, Peter Parker!"

// greetingUniversal
// универсальная функция, которая принимает три параметра, имя, фамилия
// и функция вывода приветствия

// если объявить функцию через function declaration - ее можно вызвать до объявления
console.log('Южное немецкое приветствие: ',greetingUniversal('John', 'Snow', greetingGermanSouth));


function greetingGermanNorth(name, surname) {
  return `Moin, ${name} ${surname}!`
}

function greetingGermanSouth(name, surname) {
  return "Servus, " + name + " " + surname + "!"
}

function greetingUniversal(name, surname, func) {
  return func(name, surname)
}


//arrow function - стрелочные функции

// если мы записываем стрелочную функцию в круглых скобках
// она возвращает значение выражения без return
// но нужно будет записать его одной строкой

const multiply = (a, b) => (a * b)
console.log(multiply(3,3));

// запись с фигурными скобками требует написания return
// иначе она будет возвращать undefined
const multiplyVer2 = (a, b) => {
  return a * b
}
console.log(multiplyVer2(6,7));

const multiplyVer3 = (a, b) => a * b

console.log(multiplyVer3(88, 2));

// стрелочная функция может быть анонимной, не забудьте вызвать ее в той же строчке
// записывается в двойных скобках
(() => { console.log('я анонимная функция') })()



// напишите функцию printArray, который принимает массив c двумя элементами строками
// и выведите их в строке использую синтаксис шаблонных строк
// "<первый> - я сначала, <второй> после меня"


function printArray(arr) {
  const [first, second] = arr
  console.log(`${first} - я сначала, ${second} после меня`);
}

printArray(['Apple', 'Second apple'])



// объекты objects

const user = {
  name: 'John',
  age: 30,
  isMale: true,
  "has dog": false,
  siblings: ['Mary', 'Ron'],
  hello() {
    console.log('hello, I am John!');
  }
}

console.log('his name is',user.name);
console.log('has he got a dog? - ',user["has dog"]);

// вызов метода объекта
user.hello()

console.log(user.siblings[0] + " is John's sister");

// деструктуризация объектов

// в одной строчке мы объявляем переменные и присваиваем им значения по ключу
const {name, age} = user

console.log(name, age);


// * метод массива map()
// не изменяет исходный массив
// итерируется по всем элементам массива

const brothers = [
  {name: 'Aragorn', age: 150, race: 'humans', hasMagic: false},
  {name: 'Galadriel', age: 1000, race: 'elf', hasMagic: true},
  {name: 'Gendalf', age:10000, race: 'maiar', hasMagic: true},
  {name: 'Ghimly', age: 800, race: 'dwarf', hasMagic: false}
]

let names = []
let races = []
let halfBrothers = []

// добавление элементов в новый массив
brothers.map(el => names.push(el.name))
console.log(names);

brothers.map(race => races.push(race.race))
console.log(races);

const young = []

// добавление элементов по какому-то условию
brothers.map(brother => {
  if (brother.age <= 1000) {
    young.push(brother.age)
  }
})

console.log(young);


// метод forEach()
// этот метод изменяет исходный массив
brothers.forEach((brother)=> brother.age += 1)
console.log(brothers);


// toUpperCase() - приводит строки к верхнему регистру
brothers.forEach(el => el.race = el.race.toUpperCase())
console.log(brothers);

// toLowerCase() - обратное действие, привод к нижнему регистру
brothers.forEach(el => el.name = el.name.toLowerCase())
console.log(brothers);


let newBrothers = [];
let newReverseBrothers = []

brothers.map((el) => {
  // создаете новый объект, обращаясь по ключам к значениям в старом
  // добавляете этот новый объект в новый массив
  newBrothers.push({name: el.name, age: el.age});
  newReverseBrothers.unshift({name:el.name, hasMagic: el.hasMagic})
});

console.log(newBrothers);
console.log(newReverseBrothers);

let ages = []
brothers.map(el => ages.push(el.age))
console.log(ages);



// * как можно сделать сумму чисел из элементов массива
// можно сделать через цикл или использовать reduce()


// вариант решения через цикл

let sum2 = 0
for (let i = 0; i < ages.length; i++) {
  sum2 += ages[i]
}
console.log(sum2);

// reduce() поэтапно производит действия с соседними элементами в массиве
// мы можем указать вторым параметром начальное значение
// метод немутирующий и возвращает новый массив

const sum3 = ages.reduce((a, b)=> a + b, 10)
console.log(sum3);


// получение случайного числа в JS

const randomNumber = Math.random()
console.log(randomNumber);
