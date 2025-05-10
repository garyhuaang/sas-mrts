import { RouterProvider } from 'react-router-dom'

import { Toaster } from '@sas-mrts/ui'

import router from './routes'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
