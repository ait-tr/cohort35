const catImg = document.getElementById('cat-img')
const catInfo = document.getElementById("cat-info")


// * вариант на .then()

function getCat() {
  fetch('https://cataas.com/cat')
  // здесь нам не нужен второй .then
  // потому что так устроена эта API
  // она отдает не JSON а готовую картинку
  .then(response => {
    console.log(response);
    catImg.src = response.url
  })
}

async function getCatFact() {
  // fetch запрос на сервер
  const result = await fetch('https://catfact.ninja/fact')
  // обработка JSON и превращение данных в JS
  const data = await result.json()
  // добавление данных в верстку
  catInfo.innerText = data.fact
}

getCatFact()
getCat()
