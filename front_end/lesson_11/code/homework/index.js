
const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const copyCars = [...cars]

// метод для глубокого копирования
const deepCopyCars = structuredClone(cars)

// Создайте на основе старого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const newCars = cars.map(el => {
  return {brand: el.brand, isDiesel: el.isDiesel}
})
console.log(newCars);

// Создайте новый массив, где оставьте только машины с дизельным двигателем.

// const dieselCars = cars.filter(el => el.isDiesel === true)
const dieselCars = cars.filter(el => el.isDiesel) // то же самое, что и выше, но короче
console.log(dieselCars);

// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

// const notDieselCars = cars.filter(el => el.isDiesel === false)
const notDieselCars = cars.filter(el => !el.isDiesel) // ставим логическое 'нет перед выражением'
console.log(notDieselCars);


// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const sum = cars
              .filter(el => !el.isDiesel) // массив всех не дизельных
              .map(car => car.price) //массив из цен
              .reduce((acc, price) => acc + price, 0) // поочередно сложили все цены и получили общее значение
console.log(sum);


// const newPrice = cars.forEach(el => el.price *= 1.2) // возвращает undefined
cars.forEach(el => el.price *= 1.2)

console.log(cars);


// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const cars2 = cars.map(el => {
  if (el.isDiesel) {
    return  {brand: "Tesla", price: 25000, isDiesel: false }
  }
  return el
})

// console.table() выводит в консоль таблицу со значениями
console.table(cars2);

// * глубокая копия массива

// spread оператор '...arr' подходит для поверхностного копирования массивов
// без вложенности

let colors = ['blue', 'white', 'red', 'pink', ['cyan', 'violet']]
let copyColors = ['yellow', ...colors, 'black', ...cars]

// colors.pop()

// на этой строчке мы изменим элементы для обоих массивов из-за вложенности
colors[4][0] = 'NOC0LOR'

// здесь изменения применятся только к массиву colors
colors[0] = 'purple'

console.log(colors);
console.log(copyColors);

// ! для глубокого копирования используйте метод structuredClone()

// console.table(cars);
// console.table(copyCars);
// console.table(deepCopyCars);
