import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { AuthHeader, NavBar } from '@sas-mrts/ui'

import { nonUserShopRoutes, userShopRoutes } from '../routes'

import { PageLoading } from './loaders'

import { type Route, rStore, setUser } from '@sas-mrts/rStore'

function Layout() {
  const store = rStore.getState()
  const [loading, setLoading] = useState(true)
  const [routes, setLinkRoutes] = useState<Route[]>(nonUserShopRoutes)

  const handleLoadPage = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      if (document.readyState === 'complete') handleLoadPage()
    })

    window.removeEventListener('load', () => setLoading(false))

    if (document.readyState === 'complete') {
      handleLoadPage()
    }
  }, [loading])

  useEffect(() => {
    if (localStorage.getItem('username')) {
      rStore.dispatch(setUser(store.user))
      setLinkRoutes(userShopRoutes)
    } else {
      setLinkRoutes(nonUserShopRoutes)
    }
  }, [localStorage.getItem('username')])

  return (
    <section className="no-scrollbar min-w-fit">
      <nav className="sticky top-0 z-50 flex w-full flex-col">
        <AuthHeader />
        <NavBar
          onCartClick={() => setLoading(true)}
          onLinkClick={() => setLoading(true)}
          routes={routes}
        />
      </nav>

      <section className="no-scrollbar relative flex flex-1 flex-col">
        <PageLoading loading={loading} />
        {!loading && (
          <div className="motion-preset-fade-sm">
            <Outlet />
          </div>
        )}
      </section>
    </section>
  )
}

export { Layout }
