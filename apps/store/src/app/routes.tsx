import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { Auth, Layout, userShopRoutes } from '@sas-mrts/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: userShopRoutes.map(
      (route): RouteObject => ({
        index: route.path === '/',
        path: route.path === '/' ? undefined : route.path,
        element: route.element,
      })
    ),
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])

export default router
