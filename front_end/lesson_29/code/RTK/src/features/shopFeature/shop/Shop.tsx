import { FC, useEffect } from 'react'
// import cn from 'classnames'
import styles from './Shop.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { loadItems } from '../shopAction';

const Shop: FC = () => {
  const dispatch = useAppDispatch()

  const { items } = useAppSelector(state => state.shop)

  useEffect(() => {
    dispatch(loadItems())
  }, [])

  console.log(items);

  return (
    <div>
      <h1>Shop</h1>
      {items.map(el => (
        <div>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  )
}

export default Shop
