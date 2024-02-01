import { FC, useState } from 'react'
import MyButton from '../myButton/MyButton'


const CityToggle: FC = (): JSX.Element => {

  //создали два объекта
  const berlin = {
    name: 'Berlin',
    title: 'Capital of Germany',
    imgUrl: 'https://www.tip-berlin.de/wp-content/uploads/2021/08/imago0103706141h-scaled.jpg'
  }
  const paris = {
    name: 'Paris',
    title: 'Capital of France',
    imgUrl: 'https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1500/v1/ADAC-eV/KOR/Bilder/RF/sehenwuerdig-paris-eiffelturm-2105_b6pwxb.jpeg'
  }

  //создали два стейта (две переменные и функции для их изменения)

  // переменая isBerlin, и функция, которая ее меняет: начальное значение true
  const [isBerlin, setIsBerlin] = useState(true)
  // переменая cityData, и функция, которая ее меняет: начальное значение переменная berlin
  const [cityData, setCityData] = useState(berlin)

  //функция переключающая данные в cityData

  // const toggleCity = () => {
  //   setIsBerlin((isBerlin) => {
  //     if (isBerlin) {
  //       setCityData(paris)
  //     } else {
  //       setCityData(berlin)
  //     }
  //     return !isBerlin
  //   })
  // }

  const toggleCity = (): void => {
    if (isBerlin) {
      setCityData(paris);
    } else {
      setCityData(berlin);
    }
    setIsBerlin(!isBerlin);
  }


  return (
    <div className='App'>
      <h1>{cityData.name}</h1>
      <p>{cityData.title}</p>
      <img width={300} src={cityData.imgUrl} alt="" />
      <div>
        {/* <button onClick={toggleCity}>Изменить город</button> */}
        {/* мы передаем значения пропсов через синтаксис похожий на добавление аттрибутов */}
        {/* если данные обязательные TS выдаст вам ошибку */}
        <MyButton text={'Изменить город'} onClick={toggleCity} />
      </div>
    </div>
  )
}

export default CityToggle
