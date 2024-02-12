import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Products from './features/products/Products'


ReactDOM.createRoot(document.getElementById("root")!).render(
  // мы оборачиваем react приложение в компонент <Provider> и предаем в него store
  // без этого у вас не заработает redux на проекте
  <Provider store={store}>
    {/* <App /> */}
    <Products />
  </Provider>
)
