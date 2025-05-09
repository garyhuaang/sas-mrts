import { RouterProvider } from 'react-router-dom'

import userRoutes from './routes'

export function App() {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={userRoutes}
    />
  )
}

export default App
