import { RouterProvider } from 'react-router-dom'

import userRoutes from './routes'

export function App() {
  return <RouterProvider router={userRoutes} />
}

export default App
