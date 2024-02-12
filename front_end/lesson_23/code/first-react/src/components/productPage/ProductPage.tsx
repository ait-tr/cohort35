import { FC, useEffect, useState } from 'react'
// import cn from 'classnames'
import styles from './ProductPage.module.css'
import IProduct from './types/Product'
import MyButton from '../myButton/MyButton'
import { Link } from 'react-router-dom'

const ProductPage: FC = () => {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function GetProducts() {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProducts(data)
    }
    GetProducts()
  }, [])

  return (
    <div>
      <ul className={styles.productList}>
        {products.map(el => (
          <li key={el.id} className={styles.productCard}>
            <span className={styles.title}>{el.title}</span>
            <div className={styles.imgWrapper}>
              <img src={el.image} alt="" />
            </div>
            <Link to={String(el.id)}><MyButton text='To product' /></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductPage
