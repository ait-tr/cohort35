// * 1. Создайте стрелочную функцию, которая бы принимала массив и цифру,
// * возвращала бы элемент массива под этим индексом.

const getElementByIndex = (arr, index) => arr[index]

// const getElementByIndex = (arr, index) => (arr[index]) - то же самое, но с круглыми скобками
// const getElementByIndex = (arr, index) => {return arr[index])} - то же самое, но с фигурными и return

const multiplyByFive = (a) => a * 5
const multiply = (a, b) => a * b


function getElementByIndex1(arr, index) {
  return arr[index]
}


function giveUsFirstEl(arr) {
  return arr[0]
}

// const getElementByIndex = (arr, index) => {return arr[index]} - с фигурными скобками нужен return

const arr = ['one','two','three']
let result = getElementByIndex(arr, 1)
console.log(result);

console.log(getElementByIndex1(arr, 0));


// * 2 Создайте функцию, которая бы принимала бы следующие параметры:
// * код погоды функция decode, которая дает расшифровку погоды по коду.
// * Функция должна возвращать строку, описывающую погоду.

// SQ – шквал
// PO – пыльный вихрь
// FC - торнадо
// BR – дымка (видимость от 1 до 9 км)
// HZ – мгла (видимость менее 10 км)
// FU – дым (видимость менее 10 км)
// DS - пыльная буря (видимость менее 10 км)
// SS - песчаная буря (видимость менее 10 км)

const decode = (code) => {
  switch(code) {
    case 'SQ':
      return 'шквал'
    case 'PO':
      return 'пыльный вихрь'
    case 'FC':
      return 'торнадо'
    case 'BR':
      return 'дымка (видимость от 1 до 9 км)'
    case 'HZ':
      return 'мгла (видимость менее 10 км)'
    case 'FU':
      return 'дым (видимость менее 10 км)'
    case 'DS':
      return 'пыльная буря (видимость менее 10 км)'
    case 'SS':
      return 'песчаная буря (видимость менее 10 км)'
  }
}

// функции можно передавать в качестве параметра в другие функции
const getWeather = (decode, code) => {
  return decode(code)
}

console.log(getWeather(decode, 'FU'));
