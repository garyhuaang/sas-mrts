import { About, Cart, Checkout, Hero, Orders, Products } from '../lib/index'

const userShopRoutes = [
  { path: '/', name: 'Home', element: <Hero /> },
  { path: 'about', name: 'About', element: <About /> },
  { path: 'products', name: 'Products', element: <Products /> },
  { path: 'cart', name: 'Cart', element: <Cart /> },
  { path: 'checkout', name: 'Checkout', element: <Checkout /> },
  { path: 'orders', name: 'Orders', element: <Orders /> },
]

const nonUserShopRoutes = [
  { path: '/', name: 'Home', element: <Hero /> },
  { path: 'about', name: 'About', element: <About /> },
  { path: 'products', name: 'Products', element: <Products /> },
]

export { userShopRoutes, nonUserShopRoutes }
