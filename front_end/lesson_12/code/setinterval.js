// setInterval будет воспроизводить одно и то же действие через заданное
// вторым параметром время
// пока его не остановить с помощью clearInterval

// чтобы иметь доступ к интервалу и остановить его
// важно завести под него переменную
const interval = setInterval(()=> {
  console.log('Tick!');
}, 995)

setTimeout(()=> {
  console.log('clearInterval!');
  // в clearInterval передаем переменную с setInterval
  clearInterval(interval)
}, 5000)


