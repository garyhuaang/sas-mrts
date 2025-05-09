import { Outlet } from 'react-router-dom'

import { NavBar, SofaBackDrop, UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-col w-full sticky top-0 z-50 ">
        <UserAuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>

      <div className="flex flex-col flex-grow h-0">
        <Outlet />
      </div>
      <SofaBackDrop />
    </div>
  )
}

export { Layout }
