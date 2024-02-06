import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// import cn from 'classnames'
import styles from './Header.module.css'

const Header: FC = () => {
  console.log('Header сработал!');
  return (
    <div className={styles.navbar}>
      {/* встречаем путь в элементах <NavLink> с аттрибутом 'to', который соответствует path в <Route> */}
      <NavLink to='/'>Product page</NavLink>
      <NavLink to='products'>Products</NavLink>
      <NavLink to='fox-card'>Get fox</NavLink>
      <NavLink to='city-toggle'>Change city</NavLink>
      <NavLink to='sandwich'>Make a sandwich</NavLink>
    </div>
  )
}

export default Header
