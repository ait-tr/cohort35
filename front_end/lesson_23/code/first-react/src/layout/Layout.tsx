import { FC } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Layout.module.css'

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      {/* все что не <Outlet /> не будет изменятся */}
      <Header />
      {/* <span>Я буду на странице всегда, потому что я не outlet</span> */}
      <main className={styles.main}>
        {/* на место <Outlet /> из <Route /> приходит то, к чему мы обращаемся через path */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
