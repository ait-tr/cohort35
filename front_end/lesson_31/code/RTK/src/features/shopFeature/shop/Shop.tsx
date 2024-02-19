import { FC, useEffect } from 'react'
// import cn from 'classnames'
import styles from './Shop.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { loadItems } from '../shopAction';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import MySwiper from '../../../components/swiper/MySwiper';
import ProductCard from '../../products/productCard/ProductCard';

const Shop: FC = () => {
  const dispatch = useAppDispatch()

  const { items } = useAppSelector(state => state.shop)
  const { user } = useAppSelector(state => state.user)


  useEffect(() => {
    dispatch(loadItems())
  }, [])

  console.log(user);

  return (
    <div>
      {user ? (
        <div className={styles.shopContainer}>
          {items.map(el => (
            <ProductCard images={el.images} title={el.title} price={el.price} id={el.id}  />
          ))}
        </div>
      ) : (
        <>
          <p>Вы не авторизированы!</p>
          <Link to='login'>Войдите в свой профиль</Link>

        </>
      )}


    </div>
  )
}

export default Shop
