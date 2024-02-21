import { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import cn from 'classnames'
import styles from './Header.module.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loginToken } from '../../features/auth/authAction'
import { logoutUser } from '../../features/auth/authSlice'
import { HeaderBurger } from '../headerBurger/HeaderBurger'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { products, favorites } = useAppSelector(state => state.products)

  // забираем данные по юзеру из redux
  const { user } = useAppSelector(state => state.user)

  const handleLogout = () => {
    // logout чистит local storage
    localStorage.setItem('token', '')
    // вызывает синхронный экшн чистящий стейт
    dispatch(logoutUser())
  }
  // этот useEffect сработает, если в localStorage есть токен
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    if (token && token.length > 0) {
      // обращаемся к action и передаем токен
      dispatch(loginToken(token))
    }
  }, [])


  return (
    <div className={styles.header}>
      <HeaderBurger />
      <div className={styles.navbar}>
        <NavLink to='/'>{user ? 'Product page' : 'Main page'}</NavLink>
        {/* если есть user в redux то мы показываем один интерфейс, а если нет предлагаем пройти авторизацию */}
        {user ? (
          <>
            <NavLink to='products'>Products</NavLink>
            <NavLink to='city-toggle'>Change city</NavLink>
            <NavLink to='sandwich'>Make a sandwich</NavLink>
            <NavLink to='youtube'>Youtube video</NavLink>
            <NavLink onClick={handleLogout} to='/'>Logout</NavLink>
          </>
        ) : (
          <NavLink to='login'>Login</NavLink>
        )}
      </div>
      <div>
        {user && (
          <>
            <span>товары в магазине: <span style={{ color: 'white' }}>{products.length}</span>  </span>
            <span>/  любимые: <span style={{ color: 'white' }}>{favorites.length}</span></span>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
