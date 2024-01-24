// ? реализация на .then()

function getUser() {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=> {
      resolve('Tom Hanks')
    }, 1000)
  })
}

// getUser().then(res =>{
//   console.log('My name is '+ res);
// })

// ? async/await синтаксис

async function getUserAsyncAwait() {
  const response = await getUser()
  console.log('My name is '+ response);
}

getUserAsyncAwait()
