// импорты нужных данных до тела функции компонента
import { FC, useEffect, useState } from 'react'
import MyButton from '../myButton/MyButton';

import styles from './FoxCard.module.css'

// не забываем указать тип для функционального компонента
const FoxCard: FC = () => {
  // чтобы хранить и изменять данные используем хук useState()
  // здесь это значение - адрес картинки для src
  const [url, setUrl] = useState<string>('');

  // создаем функцию с асинхронной операцией
  function fetchFox() {
    // fetch запрос вернет promise, его нужно зарезолвить (дождаться данных с успехом или нет)
    fetch('https://randomfox.ca/floof/')
      //обрабатываем первый раз через .then
      .then(obj => obj.json())
      //обрабатываем второй promise после операции по парсингу json в js объект
      .then(data => {
        //меняем состояние для адреса картинки
        setUrl(data.image)
      })
  }

  // создаем функцию обработчик (handler), они же 'ручки'
  function handleUpdFox() {
    //в функции вызываем нашу функцию с fetch запросом
    fetchFox()
    console.log('upd fox!');
  }

  // * useEffect - здесь нужен чтобы сработать при первой загрузке компонента и не срабатывать
  // при его изменениях
  useEffect(() => {
    fetchFox()
    console.log('use effect!');
  }, [])

  console.log('upd');

  return (
    <div className={styles.container}>
      <h1>FoxCard</h1>
      {/* передаем значение переменной через фигурные скобки в src */}
      <div className={styles.imgWrapper}>
        <img className={styles.imgFox} src={url} alt="лиса!" />
      </div>
      <img src="https://cataas.com/cat/gif" alt="" />
      <div>
        <MyButton onClick={handleUpdFox} text='хочу новую лису!' />
      </div>

    </div>
  )
}

export default FoxCard
