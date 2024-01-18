// * 1. задание
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
// Создайте еще один массив с возрастами: 18, 27, 74, 34;
// Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const names = [ "Семен", "Иван", "Петр", "Татьяна"]
const ages = [18, 27, 74, 34]
const namesAndAges = []

for (let i = 0; i < names.length; i++) {
  namesAndAges.push(names[i] + " " + ages[i] + " лет/годов")
}

console.log(namesAndAges);


// * 2. задание
// Используя пройденные на занятии методы массива получите из этого массива новый массив,
// в котором элементы идут в обратной последовательности.

// метод reverse меняет элементы местами, но мутирует исходный массив
// console.log(namesAndAges.reverse());

const namesAndAgesReverse = []

for (let i=0; i < namesAndAges.length; i++) {
  namesAndAgesReverse.unshift(namesAndAges[i])
}

console.log(namesAndAgesReverse);

