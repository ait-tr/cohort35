console.log('Hello typescript!');

// 7 примитивный типов данных в JS, такие же и в TypeScript
// string, number, boolean, undefined, null, bigint, symbol

// неявное присвоение типа
let x = 'User'

// x = 100 - переопределить тип в TS не получится

// явно присвоение типа данных происходит через ':'
let y: number = 1000
y = 10

console.log(y);

// вы можете указать в типе для переменной сразу несколько значений
// например здесь myAge может быть и строкой и числом

// '|' этот синтаксис называется union type

let myAge: number | string = '18 лет'
myAge = 99

// мы можем назначить свой собственный тип с помощью ключевого слова type
// название собственных типов мы пишем с большой буквы

type Age = number | string
let yourAge: Age = 30

// можно в качестве типа указывать не только тип данных, но и ограничивать его до определенного значения
// например 'cat' | 'dog' | 'parrot'

// в переменной Pet может лежать только строка с одним из трех значений: 'cat' | 'dog' | 'parrot'
// можно думать про типизацию в ts как про ограничение, и оно может быть ограничением до набора значений

let myPet: 'cat' | 'dog' | 'parrot'
myPet = 'parrot'



type HomePet = 'cat' | 'dog'
let newAnimal: HomePet = 'cat'

// через union type мы можем наследовать другие типы
type ExtendedPet = HomePet | 'rat'
let animal: ExtendedPet = 'rat'

// другой пример
type Gender = 'male' | 'female'
type ExtendedGender = Gender | 'non-binary person'
let personGender: ExtendedGender = 'non-binary person'


// типизация массивов
// * пишем значение элемента и указываем после '[]'

// запись внизу значит:
// 'объявление переменной fruits с типом массив из строк и значением'
let fruits: string[] = ['apple', 'orange', 'lime']
fruits.push('dragon fruit')
// fruits.push(String(133))

console.log(fruits);

let numbers: number[] = [12, 133, 144]


// типизация объектов

type User = {
  name: string
  age: number
  isMarried: boolean
  pet: HomePet
}


// пример наследования типа объекта
// через ключевое слово type

type EmployedUser = User & {
  job: 'worker' | 'employer'
}

let Peter: EmployedUser = {
  name: 'Peter',
  age: 40,
  isMarried: false,
  pet: 'dog',
  job: 'worker'
}

// другой синтаксис указания типов через ключевое слово interface
// ранее был более предпочтительным из-за удобного наследования

interface IMagician {
  name: string
  hasWand: boolean
  age: number
  faculty: string
}

interface IBlackMagician extends IMagician {
  hasBlackMagic: true
}

let Voldemort: IBlackMagician = {
  name: 'Tom Riddle',
  hasWand: true,
  age: 80,
  faculty: 'Slizerine',
  hasBlackMagic: true
}


// ? создайте интерфейс ICity у которого будет
// title
// population
// hasRiver
// riverName

// создайте несколько объектов с этим типом

// создайте интерфейс ITouristicCity, который наследует ICity,
// и у которого будет свой ключ isTouristic со значением true

//создайте один объект с типом ITouristicCity
// ключи которых может не быть в объекте
// мы пишем при создании типа с символом '?' после ':'



interface ICity {
  title: string
  population: number | string
  // два ключа внизу не обязательны в объекте с данным типом
  hasRiver?: boolean
  riverName?: string
}

interface ITouristicCity extends ICity {
  isTouristic: true
}

let berlin: ITouristicCity = {
  isTouristic: true,
  title: 'Berlin',
  population: '1000000 people'
}


let cities: ITouristicCity[] = [
  berlin,
  {
    isTouristic: true,
    title: 'Paris',
    population: 200000,
    hasRiver: true,
    riverName: 'Сена'
  }
]

console.log('cities:   ', cities);



/// типизация функций

// через двоеточие после каждого параметра вы указываете его тип
// также можно типизировать возвращаемое значение но не обязательно


function sum(a: number, b: number): string {
  return `Сумма двух чисел: ${a * b}`
}

console.log(sum(12, 48));

// если функция ничего не возвращает, но вы хотите указать возвращаемое значение
// то в TS есть слово :void для таких случаев

function northGermanGreeting(): void {
  console.log('Moin!');
}

northGermanGreeting()


const getWeather = (code: 'strm' | 'fg' | 'rn'):string  => {
  switch (code) {
    case 'strm':
     return 'storm'
    case 'fg':
     return 'fog'
    case 'rn':
     return 'rain'
  }
}

console.log(getWeather('rn'));


// создайте стрелочную функцию которая принимает в себя
// строковое значение цвета
// красный
// зеленый
// синий
// и возвращает их значение в виде строки 'rgb()' с указанием соответствующий каналов цвета
// а если передается другое значение
// выводит 'no such color in pallet'

//максимальное значение в канале rgb() - это 255
//rgb(255, 0, 255)


// тип any - обозначает, что тип можно присвоить любой тип
// ! так лучше не делать, потому что все преимущества TS пропадают



function getSecondStringElement(arr: any):string {
  return arr[1]
}

console.log(getSecondStringElement(fruits));
