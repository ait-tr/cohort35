
function getUser() {
  setTimeout(()=> {
    return "User!"
  }, 3000)
}

let user = getUser()

// мы не можем синхронными методами напрямую работать с асинхронными данными
// console.log(user);


function getUserPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(()=> {
      resolve("user!!")
    }, 3000)
  })
}

const promise = getUserPromise()

// console.log(promise);
// три состояния Promise
// Promise { <pending> }  - ожидание ответа
// resolve - успешное завершение
// reject - ошибка

function iWantToKnowEverything(answer) {
  return new Promise(function (resolve, reject) {
    if (String(answer) === "42") {
      setTimeout(()=> {
        console.log('success!');
        resolve("Now you now everything about the universe!")
      }, 2000)
    } else {
      setTimeout(() => {
        console.log('error!');
        reject(new Error (`Wrong answer! ${answer} is incorrect`))
      }, 2000)
    }
  })
}

// так нам снова вернется promise
// console.log(iWantToKnowEverything(41));
// чтобы забрать успешный ответ нам нужно обратиться через .then
// если мы хотим обработать ошибку нам нужно обратиться через .catch

iWantToKnowEverything(41)
  .then(data => console.log("пришел из .then", data))
  .catch(error => console.log("пришел из .catch", error))
