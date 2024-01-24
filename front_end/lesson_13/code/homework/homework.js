// * задание 1
// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента

function getStudent() {
  return new Promise ((resolve, reject)=> {
    setTimeout(()=> {
      resolve({name: "Anri", age: 32})
    }, 4000)
  })
}


// getStudent().then(data => console.log(data.name))


// задание 2

// Напишите функцию getDriverLicence, которая принимает в себя два аргумента success и failure.
// Сделайте внутри этой функции проверку: если выпадет какое-то число, которое будет > 0.1, то вызовется success со строкой "успех!". В иных случаях вызови failure со строкой "упс, неудача :("
// Подсказка: используйте Math.random()
// Ниже, под этой функцией, опишите аргументы success и failure, которые, в свою очередь, тоже являются функциями.
// Функция success принимает в себя аргумент, например result, и выводит в консоль текст "Успешно завершено с результатом (и указать, каким результатом)".
// Функция failure принимает в себя аргумент, например error, и выводит в консоль текст "Завершено с ошибкой(и указать, какой ошибкой)".
// Ниже вызвать функцию getDriverLicence, передав в нее аргументами две другие функции.

function getDriverLicence(success, failure) {
  if (Math.random() > 0.1) {
    success('успех!')
  } else {
    failure("упс, неудача :(")
  }
}

function success(res) {
  console.log(`Завершено с успехом: ${res}`);
}

function failure(res) {
  console.log(`Завершено с ошибкой: ${res}`);
}

getDriverLicence(success, failure)

// console.log(Math.random());

// * метод Math.floor() округляет числа с плавающей точкой до целого

// любое случайное число от 1 до 10
console.log(Math.floor(Math.random() * 10));
