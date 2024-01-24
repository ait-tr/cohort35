// Fetch запрос
// посылает запрос на сервер
// также на сторонние API сервисы
// API - application programming interface
// JSON JavaScript Object Notation - формат данных, которые мы получем с сервера через fetch


fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => console.log(data.message))

