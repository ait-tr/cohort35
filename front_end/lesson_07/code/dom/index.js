// вывод в консоли браузера
console.log('Hello, JavaScript!');

// слово let мы объявляем переменную
let word = 'я слово'

word = 'другое слово'

console.log(word)

// при объявлении переменной через const мы не сожем ее переопределить
const something = "другой текст"

// something = 'other text'

console.log("тип данных до переопределения - ",typeof word);

// можно переопределить значение переменной на другой тип данных
word = 5

// в консоль мы можем выводить несколько значений / переменных через запятую
console.log("тип данных переменной word -", typeof word);

// console.log(document);

// getElementById позволяет получить элемент по id
const btn = document.getElementById("btn1")
console.log(btn);

// getElementsByClassName поиск элементов по названию класса, ответом приходит массив элементов
let text = document.getElementsByClassName("heading")
console.log(text);

//чтобы обратиться к одному из элементов массива нужно указать его порядковый номер в квадратных скобках
// console.log(text[0]);

//можем найти элементы по имени тега
let mdnLink = document.getElementsByTagName("a")
console.log(mdnLink);
console.log(mdnLink[0]);


//создание элемента с помощью метода createElement
const heading2 = document.createElement("h2")
console.log(heading2);
console.log('предпоследний');

//добавление на страницу c помощью метода appendChild
document.body.appendChild(heading2);

//создание текстового узла (ноды) и добавления в нее текста
const textNode = document.createTextNode('Добавленный из JavaScript H1')

// добавляем текстовый узел к элементу на странице
heading2.appendChild(textNode)
console.log(heading2);

//этими строчками мы готовим элемент к отправке в body 🎒
const newDiv = document.createElement('div')
// создаем текстовую ноду, кладем в нее текст
const newText = document.createTextNode('знакомство с DOM')
// объединяем div и текстовую ноду
newDiv.appendChild(newText)
console.log(newDiv);

//этой строчкой добавляем готовый элемент к body
document.body.appendChild(newDiv)

let secondDiv = document.createElement('div')
// второй способ добавления текста, обращение к свойство элемента
secondDiv.innerText = 'другой способ добавления текста'

console.log(secondDiv);
document.body.appendChild(secondDiv)

// метод getAttribute возвращает значение аттрибута выбранного элемента
let attribute = document.getElementById('btn1').getAttribute('class')
console.log(attribute);

let btn1 = document.getElementById("btn1")
console.log(btn1);

// обращение к свойствам элемента через style
btn1.style.color = "white";
btn1.style.fontWeight = "bold"
btn1.style.backgroundColor = "blue"


//слушатель событий addEventListener
//код который написан внутри слушателя событий срабатывает только при определенных условиях и может быть вызван многократно

btn1.addEventListener('click', () => {
  // меняем цвет кнопки
  btn1.style.backgroundColor = "red"
  // создаем элемент
  let thirdDiv = document.createElement('div')
  //перезаписываем значение свойства innerText
  thirdDiv.innerText = 'результат нажатия на кнопку'
  // добавление элемент в body
  document.body.appendChild(thirdDiv)
  // метод применяем к родителю элемента, чтобы удалить дочерний (в данном случае к 'containerDoc') - параметром передаем сам элемент, который хотим удалить
  document.getElementById('containerDoc').removeChild(document.getElementById('doc'))
})

//счетчик
let counter = 0

document.getElementById('btn2').addEventListener('click', ()=> {
  //увеличиваем счетчик по нажатию
  counter += 1
  let container = document.getElementById('container')
  // через синтаксис шаблонных строк мы можем вставлять переменные в текстовые элементы
  container.innerHTML = `<p>Добавлен после нажатия второй кнопки (будет перезаписываться раз за разом) ${counter} раз</p> `
  document.getElementById('containerDoc').removeChild(document.getElementById('doc'))

})






