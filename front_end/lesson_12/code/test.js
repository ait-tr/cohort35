// * Приоритет выполнения операций
// 1. синхронны код
// 2. асинхронные microtasks
// 3. асинхронные macrotasks


console.log('console.log 1');

//macrotasks / макрозадачи - (setTimeout / setInterval)
setTimeout(()=> {
  console.log('Set timeout');
}, 0)

// microtasks / микрозадачи - (Promises)
Promise.resolve('Promise 1').then(data => console.log(data))

const arr = [1, 2, 3, 4]


arr.map((currentValue) => {

});

arr.map()
