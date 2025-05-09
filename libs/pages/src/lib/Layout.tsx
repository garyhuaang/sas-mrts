import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { nonUserShopRoutes, userShopRoutes } from '../routes'

import { type Route, rStore, setUser } from '@sas-mrts/rStore'

function Layout() {
  const store = rStore.getState()
  const [_, setLinkRoutes] = useState<Route[]>(nonUserShopRoutes)

  useEffect(() => {
    if (store.user.confirmed || localStorage.getItem('user')) {
      rStore.dispatch(setUser(store.user))
      setLinkRoutes(userShopRoutes)
    } else {
      setLinkRoutes(nonUserShopRoutes)
    }
  }, [store.user.confirmed])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex flex-col flex-1 overflow-hidden">
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { Layout }
