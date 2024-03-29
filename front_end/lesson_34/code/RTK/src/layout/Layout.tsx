import { FC } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Layout.module.css'
import { motion } from 'framer-motion';
import { useAppSelector } from '../app/hooks';
import Loader from '../components/loader/Loader';

const initialVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
}

const Layout: FC = () => {
  const { isLoading } = useAppSelector(state => state.user)
  return (
    <>
      {isLoading ? <Loader /> : (<>
        <motion.div
          className={styles.container}
          animate='visible'
          initial='hidden'
          variants={initialVariant}
        >
          <Header />
          <main className={styles.main}>
            <Outlet />
          </main>
          <Footer />
        </motion.div>
      </>
      )}

    </>
  )
}

export default Layout
