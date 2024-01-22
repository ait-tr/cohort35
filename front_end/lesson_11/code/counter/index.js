// до всех действий с элементами удобно объявить переменные

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const counterElement = document.getElementById('counterElement')
const container = document.getElementById('container')

// заводим переменную counter
let counter = 0


// * можем повесить все действия на обработчик событий сразу
// * а можно сначала сделать соответствующие функции обработчики
// * и после повесить их через обработчик на элемент
// plusBtn.addEventListener('click', () => {
//   // приращиваем значение
//   counter ++
//   // переопределяем значения сво-ва innerText у counterElement
//   counterElement.innerText = counter
// })


// handler - функция обработчик на интерактивном элементе

const plusHandler = () => {
  counter ++
  counterElement.innerText = counter
}

const minusHandler = () => {
  counterElement.innerText = --counter
}


// назначаем на обработчик событий
plusBtn.addEventListener('click', plusHandler)
minusBtn.addEventListener('click', minusHandler)


