import { FC, useState } from 'react'

// import style from './Counter.module.css'
import MyButton from '../myButton/MyButton'


const Counter: FC = () => {

  // let counter = 8

  // хук useState нужен для хранения и изменения данных (состояния) в react
  // при его вызове мы определяем переменную, функцию, которая ее изменяет
  // и начальное значение переменной в скобках

  const [counter, setCounter] = useState<number>(0)
  const [name, setName] = useState<string>('Petr')


  function Minus(): void {
    setCounter(counter - 1)
    setName(name + ' minus')
    console.log('minus');
  }
  function Plus(): void {
    setCounter(counter + 1)
    setName(name + ' plus')
    console.log('plus');
  }

  console.log(counter);
  console.log(name);


  return (
    <div>
      <h1>Counter</h1>
      <MyButton onClick={Minus} text={'minus'}/>
      {/* <button className={style.btn1} type='button' onClick={Minus}>-</button> */}
      <span>{counter}</span>
      <MyButton onClick={Plus} text={'plus'}/>
      {/* <button type='button' onClick={handlePlus}>+</button> */}
    </div>
  )
}

export default Counter
