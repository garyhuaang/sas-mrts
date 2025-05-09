import NavActions from './actions/NavActions'
import { NavLinks } from './NavLinks'
import { NavLogo } from './NavLogo'

import { Route } from '@sas-mrts/rStore'

function NavBar({
  routes,
  className,
}: {
  routes: Route[]
  className?: string
}) {
  return (
    <div
      className={`flex h-20 py-4 px-8 bg-muted justify-between items-center ${className}`}
    >
      <NavLogo />
      <NavLinks routes={routes} />
      <NavActions />
    </div>
  )
}

export { NavBar }
