import { FC, memo } from 'react'
// import cn from 'classnames'
// import styles from './Square.module.css'

interface squareProps {
  params: { color: string }
  color?: string
  do?: () => void
}

const Square: FC<squareProps> = memo(({ color, params }) => {
  // console.log(`square render ${color}`);
  console.log(`square render ${params?.color}`);
  return (
    <div>
      <div style={{ width: '200px', height: '200px', margin: '5px', backgroundColor: params?.color }}></div>
    </div>
  )
})

export default Square
