import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// import cn from 'classnames'
import styles from './Header.module.css'

const Header: FC = () => {
  console.log('Header сработал!');
  return (
    <div className={styles.navbar}>
      {/* встречаем путь в элементах <NavLink> с аттрибутом 'to', который соответствует path в <Route> */}
      <NavLink to='/'>Home page</NavLink>
      <NavLink to='cityToggle'>ToggleCity</NavLink>
      <NavLink to='sandwich'>Sandwich</NavLink>
    </div>
  )
}

export default Header
