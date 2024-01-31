import { FC, useState } from 'react'




const Counter: FC = () => {

  // let counter = 10

  // хук useState нужен для хранения и изменения данных (состояния) в react
  // при его вызове мы определяем переменную, функцию, которая ее изменяет
  // и начальное значение переменной в скобках

  const [counter, setCounter] = useState<number>(0)
  const [name, setName] = useState<string>('Ivan')


  function Minus(): void {
    setCounter(counter - 1)
    setName(name + ' minus..')
    console.log('minus');
  }
  function handlePlus(): void {
    setCounter(counter + 1)
    setName(name + ' plus')
    console.log('plus');
  }

  console.log(counter);
  console.log(name);


  return (
    <div>
      <h1>Counter</h1>
      <button type='button' onClick={Minus}>-</button>
      <span>{counter}</span>
      <button type='button' onClick={handlePlus}>+</button>
    </div>
  )
}

export default Counter
