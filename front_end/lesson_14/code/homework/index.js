const form = document.getElementById('genderForm')
const list = document.getElementById('genderData')


form.addEventListener('submit', (event)=>{
  event.preventDefault()
  // забираем значение из формы
  const name = event.target.input.value
  loadGender(name)
  event.target.input.value = ''
})


async function loadGender(smth) {
  try {
    const res = await fetch(`https://api.gendrize.io/?name=${smth}`)
    if (!res.ok) {
      throw new Error('Что-то сломалось')
    }
     console.log('успех!');
    const obj = await res.json()
    const liGender = document.createElement('li')
    liGender.innerText = `Gender of ${obj.name} is ${obj.gender}`
    genderData.append(liGender)
  } catch (error) {
    console.error(error.message)
    const el = document.createElement('h1')
    el.innerText = error.message
    document.body.append(error.message)

  }
}
