import { createBrowserRouter } from 'react-router-dom'

import { Auth, Layout, userShopRoutes } from '@sas-mrts/pages'

import TransitionWrapper from './TransitionWrapper'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TransitionWrapper />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: userShopRoutes.map((route) => ({
          index: route.path === '/',
          path: route.path === '/' ? undefined : route.path,
          element: route.element,
        })),
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
])

export default router
