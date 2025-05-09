import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { AuthHeader, NavBar, SofaBackDrop } from '@sas-mrts/ui'

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
    <div className=" w-full">
      <div className="flex flex-col w-full sticky top-0 z-50">
        <AuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>
      <SofaBackDrop />
      <div className="flex flex-col">
        <div className="relative flex flex-col flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { Layout }
