import { Outlet } from 'react-router-dom'

import { NavBar, UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <>
      <UserAuthHeader />
      <NavBar routes={userShopRoutes} />
      <Outlet />
    </>
  )
}

export { Layout }
