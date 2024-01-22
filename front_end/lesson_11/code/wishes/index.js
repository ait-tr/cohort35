const wishForm = document.getElementById('form')
const wishList = document.getElementById('wishList')
const btnClear = document.getElementById('btnClearList')
const btnDelLast = document.getElementById('btnDelLast')


// const wishes = []


function clearInputs(event) {
  event.target.wish.value = ""
  event.target.amount.value = ""
}

// мы проверяем наличие нужного нам css стиля и добавляем, если его нет
function changeStatus(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = 'none'
  } else {
    event.target.style.textDecoration = "line-through"
  }
}

// функция удаления первого элемента из wishList,
// пока wishList.hasChildNodes() === true

function clearList() {
  while (wishList.hasChildNodes()) {
    wishList.firstChild.remove()
  }
}

//функция удаления последнего добавленного элемента
// в верстке он первый ребенок у родительского элемента

function delLast() {
  if (wishList.hasChildNodes()) {
    wishList.firstChild.remove()
  }
}


btnDelLast.addEventListener('click', delLast)

btnClear.addEventListener('click', clearList)

wishForm.addEventListener('submit', event => {
  // чтобы не происходила перезагрузка страницы по умолчанию - мы применяем к событию
  // метод .preventDefault()
  event.preventDefault()

  //забираем значения из инпутов формы по имени
  const wish = {
    wish: event.target.wish.value,
    amount: event.target.amount.value
  }
  // wishes.push(wish)

  // создаем новый элемент
  const textItem = document.createElement('p')

  //в шаблонной строке добавляем значения из формы
  textItem.innerText = `Я хочу ${wish.wish} и их ${wish.amount} шт`

  // меняем стили элементов
  textItem.style.cursor = 'pointer'
  textItem.style.color = 'purple'

  // добавляем функцию к элементу по нажатию клика (аналог слушателя событий)
  textItem.onclick = changeStatus

  //добавляем элемент к контейнеру wishList
  wishList.append(textItem)

  // чистим форму после того, как создадим элементы 
  clearInputs(event)
})

