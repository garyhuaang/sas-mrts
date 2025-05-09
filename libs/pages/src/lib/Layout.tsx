import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { AuthHeader, NavBar, SofaBackDrop } from '@sas-mrts/ui'

import { nonUserShopRoutes, userShopRoutes } from '@sas-mrts/common'
import { type Route, rStore, setUser } from '@sas-mrts/rStore'

function Layout() {
  const [routes, setRoutes] = useState<Route[]>(nonUserShopRoutes)
  const store = rStore.getState()

  useEffect(() => {
    if (store.user.confirmed || localStorage.getItem('user')) {
      rStore.dispatch(setUser(store.user))

      return setRoutes(userShopRoutes)
    }

    return setRoutes(nonUserShopRoutes)
  }, [store.user.confirmed])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col  w-full sticky top-0 z-50 ">
        <AuthHeader />
        <NavBar routes={routes} />
      </div>

      <div className="flex flex-col flex-grow h-0">
        <Outlet />
      </div>
      <SofaBackDrop />
    </div>
  )
}

export { Layout }
