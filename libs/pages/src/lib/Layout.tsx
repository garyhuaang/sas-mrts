import { Outlet } from 'react-router-dom'

import { NavBar } from '@sas-mrts/ui'
import { UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div>
      <UserAuthHeader />
      <NavBar routes={userShopRoutes} />
      <Outlet />
    </div>
  )
}

export { Layout }
