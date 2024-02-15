import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"

import "./index.css"

import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Error from './components/error/Error'
import CityToggle from './components/cityToggle/CityToggle'
import Sandwich from './components/sandwich/Sandwich'
import Product from './features/products/product/Product'
import Loader from './components/loader/Loader'
import Shop from './features/shopFeature/shop/Shop'
// import ProductPage from './features/products/productPage/ProductPage'

// чтобы сделать динамический импорт вы используете встроенную в react функцию lazy()
// передаете в нее стрелочную функцию и импортируете компонент
const ProductPage = lazy(() => import('./features/products/productPage/ProductPage'))

ReactDOM.createRoot(document.getElementById("root")!).render(
  // мы оборачиваем react приложение в компонент <Provider> и предаем в него store
  // без этого у вас не заработает redux на проекте
  <Provider store={store}>
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<Layout />}> */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path='products/' element={
            //импортируемый динамически компонент вы оборачиваете в специальный компонент  <Suspense> из React и ему передаете значение fallback - верстки которую увидет пользователь пока компонент будет загружаться
            <Suspense fallback={<Loader />}>
              <ProductPage />
            </Suspense>
          } />
          <Route path='city-toggle/' element={<CityToggle />} />
          <Route path='sandwich/' element={<Sandwich />} />
          <Route path='products/:id' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
)
