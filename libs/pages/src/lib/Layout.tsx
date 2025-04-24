import { Outlet } from 'react-router-dom'

import { NavBar } from '@sas-mrts/ui'

import { navigationRoutes } from '@sas-mrts/common'

function Layout() {
  return (
    <div>
      <Outlet />
      <NavBar routes={navigationRoutes} />
    </div>
  )
}

export { Layout }
