import { createBrowserRouter } from 'react-router-dom'

import {
  About,
  Auth,
  Cart,
  Checkout,
  Landing,
  Layout,
  Orders,
  Products,
} from '@sas-mrts/pages'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  { path: '/auth', element: <Auth /> },
])

export default routes
