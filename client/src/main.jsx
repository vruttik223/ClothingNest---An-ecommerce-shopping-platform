import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import Store, { persistor } from './Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>
)
