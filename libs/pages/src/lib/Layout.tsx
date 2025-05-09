import { Outlet } from 'react-router-dom'

import { AuthHeader, NavBar, SofaBackDrop } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col  w-full sticky top-0 z-50 ">
        <AuthHeader />
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
