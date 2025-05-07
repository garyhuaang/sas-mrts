import { Outlet } from 'react-router-dom'

import {
  NavBar,
  SmoothScroller,
  SofaBackDrop,
  UserAuthHeader,
} from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <>
      <SmoothScroller ignoreMobileResize={true}>
        <div className="flex flex-col w-full top-0" id="nav-auth">
          <UserAuthHeader />
          <NavBar routes={userShopRoutes} />
        </div>

        <div className="relative -z-1">
          <Outlet />
        </div>
      </SmoothScroller>

      <SofaBackDrop />
    </>
  )
}

export { Layout }
