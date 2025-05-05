import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './app/App'

import './styles.css'

import { fetchProducts, rStore } from '@sas-mrts/rStore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

rStore.dispatch(fetchProducts())

root.render(
  <StrictMode>
    <Provider store={rStore}>
      <App />
    </Provider>
  </StrictMode>
)
