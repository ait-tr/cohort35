console.log('hello');

const getFilmBtn = document.getElementById('getFilm')
const filmContainer = document.getElementById('filmContainer')
const el = document.getElementById('el')
const ul = document.getElementById('ul')


getFilmBtn.addEventListener('click', () => {
  getFilm()
})

getFilm()


async function getFilm() {
  const res = await fetch('https://dmitrii-kuvaldin.github.io/star-wars/film.json')
  const data = await res.json()
  // через деструктуризацию можно в одну строчку достать сразу несколько значений из объекта по их ключам и положить в переменную
  // имя переменной по умолчанию - это имя ключа, но можно выбрать свое имя - как в случае с ключом 'poster'
  // синтаксис 'poster: banner'
  // через двоеточие указываете новое имя переменной

  const {cast, director, poster: banner, title, year} = data

  // добавляем картинку
  const bannerImg = document.createElement('img')
  bannerImg.src = banner
  bannerImg.style.width = '300px'
  filmContainer.append(bannerImg)

  // добавляем заголовок
  const titleText = document.createElement('h4')
  titleText.id = 'titleText'
  titleText.innerText = title + '  🪐'


  filmContainer.append(titleText)

  // добавляем описание
  const description = document.createElement('h5')
  description.innerText = `Director: ${director}, year: ${year}`
  filmContainer.append(description)

  console.log(cast);

  cast.map(el => {
    let actorLink = document.createElement('a')
    actorLink.innerText = el.name
    actorLink.href = el.link
    actorLink.target = "_blank"
    filmContainer.append(actorLink)
  })
}

el.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('clack!');
  el.style.color = 'red'
})

ul.addEventListener('click', ()=> {
  ul.style.backgroundColor = 'blue'
  console.log('click!');
})

