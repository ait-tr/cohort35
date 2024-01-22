const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const counterElement = document.getElementById('counterElement')
const container = document.getElementById('container')

const plusHandler = () => {
  counterElement.innerText++
}

const minusHandler = () => {
  counterElement.innerText--
}


// назначаем на обработчик событий
plusBtn.addEventListener('click', plusHandler)
minusBtn.addEventListener('click', minusHandler)
