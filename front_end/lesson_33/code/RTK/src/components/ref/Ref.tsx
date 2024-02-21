import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
// import cn from 'classnames'
// import styles from './Ref.module.css'

const Ref: FC = () => {
  const [text, setText] = useState('')
  // const [count, setCount] = useState(0)

  let count: MutableRefObject<number> = useRef<number>(1)
  let input = useRef<HTMLInputElement>(null)


  useEffect(() => {
    count.current++
  })

  useEffect(() => {
    input.current?.focus()
  }, [])

  return (
    <div >
      <h1>Ref</h1>
      <input ref={input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <div>
        <span>{count.current}</span>
      </div>
    </div>
  )
}

export default Ref
