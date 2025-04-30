import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import userRoutes from './routes'

import { rStore } from '@sas-mrts/rStore'

export function App() {
  return (
    <Provider store={rStore}>
      <RouterProvider router={userRoutes} />
    </Provider>
  )
}

export default App
