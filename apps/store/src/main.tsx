import { StrictMode } from 'react'
import { CookiesProvider } from 'react-cookie'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './app/app'

import './styles.css'

import { apiSlice, rStore } from '@sas-mrts/rStore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

rStore.dispatch(apiSlice.endpoints.getProducts.initiate())

root.render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <Provider store={rStore}>
        <App />
      </Provider>
    </CookiesProvider>
  </StrictMode>
)
