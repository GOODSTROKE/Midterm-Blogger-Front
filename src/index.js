import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './app/store'
import reportWebVitals from './reportWebVitals'
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Provider store={store}>
      <Toaster position='top-right' reverseOrder={false} />
      <App />
    </Provider>
  </>
)

reportWebVitals()
