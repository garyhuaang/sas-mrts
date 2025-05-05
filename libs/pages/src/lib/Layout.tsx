import { Outlet } from 'react-router-dom'

import { NavBar, SofaBackDrop, UserAuthHeader } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div className="flex flex-col h-screen box-border">
      <div className="top-0 z-10 fixed w-full">
        <UserAuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>
      <Outlet />
      <SofaBackDrop />
    </div>
  )
}

export { Layout }
