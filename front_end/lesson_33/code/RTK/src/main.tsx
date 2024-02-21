import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Ref from './components/ref/Ref'
import Optimisation from './components/optimisation/Optimisation'
import Composition from './components/composition/Composition'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <Ref /> */}
    <Composition func={()=> console.log('hello!')} isOk={true} color='yellow'>
      <Optimisation />
    </Composition>
  </Provider>
)
