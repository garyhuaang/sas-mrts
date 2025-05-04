import { Outlet } from 'react-router-dom'

import { NavBar, UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div className="flex flex-col h-screen box-border">
      <div className="sticky top-0 z-10">
        <UserAuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>
      <Outlet />
    </div>
  )
}

export { Layout }
