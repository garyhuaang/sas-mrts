import { createBrowserRouter } from 'react-router-dom';

import {
  About,
  Cart,
  Checkout,
  Landing,
  Layout,
  Login,
  Orders,
  Products,
  Register,
} from '@sas-mrts/pages';

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
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

export default routes;
