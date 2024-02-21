import { FC, useState, ReactNode } from 'react'
import Optimisation from '../optimisation/Optimisation';
// import cn from 'classnames'
// import styles from './Composition.module.css'

interface ICompositionProps {
  children: ReactNode
  color: string
  func: () => void
  isOk: boolean
}



const Composition: FC<ICompositionProps> = ({ children, color, func, isOk }) => {


  const [renderIndex, setRenderIndex] = useState(199);

  // const result = useState(199);
  // const renderIndex = result[0]
  // const setRenderIndex = result[1]

  function setNumber() {
    setRenderIndex(renderIndex + 1)
  }

  console.log(renderIndex);

  console.log('composition rerender');
  return (
    <div>
      <h1>Composition</h1>
      <span>{color}</span>
      <button onClick={func}>Поздороваться</button>
      <button onClick={setNumber}>Изменить стейт</button>
      {/* <span>{хостел['детская комната']}</span> */}
      {children}
      {/* <Optimisation/> */}
      <button onClick={() => setRenderIndex(renderIndex + 1)}>rerender composition</button>
    </div>
  )
}

export default Composition
