import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { Auth, Checkout, Layout, Return, userShopRoutes } from '@sas-mrts/pages'

const router = createBrowserRouter(
  [
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
    { path: '/checkout', element: <Checkout /> },
    { path: '/return', element: <Return /> },
    { path: '/auth', element: <Auth /> },
  ],
  {
    basename: '/sas-mrts/',
  }
)

export default router
