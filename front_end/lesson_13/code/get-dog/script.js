console.log('dog!');

const img = document.getElementById("dog-image")

fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        const {message} = data
        img.src = message
        img.style.width = "800px"
      })





