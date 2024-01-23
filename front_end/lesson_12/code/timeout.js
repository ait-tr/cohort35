console.log('hello!');

// ! любой асинхронный код срабатывает позже синхронного

// setTimeout выполняет код через заданный промежуток времени
// первый параметр это стрелочная функция, второй - числовое значение в миллисекундах
// 1000мс = 1с

setTimeout(()=> {
  console.log('hello over 5 sec');
}, 5000)

// * даже если время выполнения будет стоять 0с - то это будет асинхронный код
// * и он выполнится позже

// setTimeout(()=> {
//   console.log('hello from timeout');
// }, 0)

// console.log('hello from console.log!');


function clapHands() {
  setTimeout(()=> {
    console.log('Bravo!');
  }, 7000)
  setTimeout(()=> {
    console.log('Clap!');
  }, 6000)

}

clapHands()

