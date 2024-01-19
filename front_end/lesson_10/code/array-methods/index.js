// Array methods

const brothers = [
  {name: 'Aragorn', age: 150, race: 'humans', hasMagic: false},
  {name: 'Galadriel', age: 1000, race: 'elf', hasMagic: true},
  {name: 'Gendalf', age:10000, race: 'maiar', hasMagic: true},
  {name: 'Ghimly', age: 800, race: 'dwarf', hasMagic: false}
]

// * 1 хотим объединить в одну строку и вывести в консоль все имена


const allNames = brothers.map(el => el.name).reduce((sum, name)=> sum + name + ' ', '')
const allAges = brothers
  .map(el => el.age)
  .reduce((sum, age) => sum + age, 0)


console.log(allNames);
console.log('Все возраста: ',allAges);

// * 2 forEach - мутирует значения исходного массива
// проводит поэтапно операции с каждым элементом массива по порядку

brothers.forEach(brother => brother.age += 10)
// brothers.forEach(brother => brother.age = brother.age + 10) то же самое, но длиннее

console.log(brothers);
console.log(allNames);


// * метод split() - создает новый массив из строки - разделяет ее на элементы
// в качестве параметра принимает элемент, который будет искать в строке и разделять по нему
// сам разделитель не пойдет в новый массив
// если указать пустую строку в качестве разделителя, то элементами массива станут все значки в строке

const namesArr = allNames.split(' ')
namesArr.pop()
console.log(namesArr.push('Bilbo'));
console.log(namesArr);



// * join()
// объединяет элементы массива в одну строку, в качестве параметра принимает разделитель (тоже строка)

const newString = namesArr.join('; ')
console.log(newString);
console.log(typeof newString);

// сделать строку наоборот через запятую из этой строки
// "Ghimly, Gendalf, Galadriel, Aragorn"
const names = "Aragorn, Galadriel, Gendalf, Ghimly"
const namesReversed = names.split(', ').reverse().join(', ')
console.log(names);
console.log(namesReversed);


// * метод find()
// find() возвращает первые элемент удовлетворяющий условию
// если ни один из элементов не удовлетворяет условию - возвращает undefined

console.log(brothers);

const person = brothers.find((brother)=> brother.hasMagic === false)
const personUndefined = brothers.find((brother)=> brother.hasMagic === '1') // вернет undefined
console.log(person);


// * метод filter()
// filter возвращает массив из элементов, удовлетворяющих условию
// если ни один из элементов не удовлетворяет условию - возвращает пустой массив


const magicBrothers = brothers.filter(el => el.hasMagic === true)
const magicBrothers1 = brothers.filter(el => el.hasMagic === '1') //вернет пустой массив
console.log(magicBrothers);
console.log(magicBrothers1);



// * методы для работы с длинной массива

const cities = ['London', 'Paris', 'Berlin', 'Madrid', 'New York', 'Lisbon']

// * метод slice()
// создает новый массив, оставляет вырезанную часть
// в скобках мы указываем индекс элементов, с первого включительно и второй НЕ включительно мы вырезаем


const cutCities = cities.slice(0, 1)
const cutCities1 = cities.slice(-1)
// короткая запись чтобы оставить первый элемент массива


console.log(cutCities);
console.log(cities);


// * метод splice()
// метод мутирующий и изменяет исходный массив
// первый элемент - индекс включительно, с которого удаляем
// второй - кол-во удаляемых элементов
//возвращает удаленные элементы

// можем работать с возвращенными значениями
console.log(cities.splice(1, 4)); // удаляет 4 элемента начиная с элемента с индексом [1]

// исходный массив
console.log(cities);



// * ParseInt()

let str = '1223ab6767'
console.log(parseInt(str));
// ParseInt() сработает до первого знака, который не сможет превратить в число
console.log(Number(str));
// Number() вернет NaN, если встретит знак, который не сможет сделать числом


// * Логические операторы
// && - логическое 'и', сработает, если верны и первое и второе условия
// || - логическое 'или', сработает, если верно одно из условий


let age = 30
let hasLicense = true

if (age >= 18 && hasLicense) {
  console.log('Можно водить');
} else {
  console.log('Не садись за руль');
}

// через тернарный оператор мы можем хранить динамическое значение в переменной
// значение будет зависеть от того выполняется ли условие (true/ false), написанное до знака '?'
// let /const <переменная> = <условие> ? <значение, если условие верное> : <если неверное>

let myAge = 10
let canVote = myAge >= 16 ? 'super' : 'no'


console.log(`My age is ${myAge}; Can I vote? ${canVote}`);


const variable = 4*4 === 16 && 'строка сработает!'
// если первое выражение равно true - в переменной будет лежать второе выражение
// console.log(false && 'строка не отобразится') - здесь будет false


console.log(variable);

const person2 = {name: 'Peter', age: 40}

const me = person2?.name || 'Jack'
// вернет первое значение, если оно верное

console.log('возвращенное значение из логического или:    ', me);




// * цикл while
// нужно следить, чтобы условие в какой-то момент стало соблюдаться
// чтобы не попасть в бесконечный цикл

let i = 0
let arr = []

while (i < 5) {
  arr.push(i)
  i++
}

console.log(arr);



// * метод .sort()
// со строками в массиве сработает просто
// с цифрами по умолчанию тоже будет работать, как со строками - отсортирует по первому (gпо порядку) числу в цифре
// но можно передав '(a, b)=> a - b)' добиться желаемой сортировки, как чисел

let nums = [1, 200, 3, 26, 16]
let fruits = ['apple', 'orange', 'banana', 'grapefruit']

console.log(fruits.sort());
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort());
