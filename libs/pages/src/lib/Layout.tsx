import { Outlet } from 'react-router-dom'

import { NavBar, SofaBackDrop, UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div className="flex flex-col">
      <div className="fixed w-full z-50">
        <UserAuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>

      <div className="mt-[132px]">
        <Outlet />
      </div>
      <SofaBackDrop />
    </div>
  )
}

export { Layout }
