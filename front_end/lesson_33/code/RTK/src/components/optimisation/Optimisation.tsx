import { FC, useCallback, useMemo, useState } from 'react'
import Square from '../square/Square'
// import cn from 'classnames'
// import styles from './Optimisation.module.css'

const Optimisation: FC = () => {
  const [renderIndex, setRenderIndex] = useState(1);
  const [color, setColor] = useState('red')

  // мемоизирует значение, в массиве  указываем зависимость от парметра (если он изменится, то компонент перерендрится)
  const params = useMemo(() => ({ color }), [color])

  // мемоизирует функцию, если она не меняется - компонент не ререндрится
  const func = useCallback(() => { }, [])


  console.log(`parent render ${renderIndex}`);
  return (
    <div>
      <button onClick={() => setRenderIndex(renderIndex + 1)}>rerender parent</button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>change color</button>
      <Square do={func} params={params} />
      <Square do={func} params={params} />

    </div>
  )
}

export default Optimisation
