import { Outlet } from 'react-router-dom'

import { NavBar, SofaBackDrop, UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col w-full top-0 z-50">
        <UserAuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>

      <div className="flex flex-col h-full">
        <Outlet />
      </div>
      <SofaBackDrop />
    </div>
  )
}

export { Layout }
