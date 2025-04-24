import { NavLinks } from './NavLinks'
import { NavLogo } from './NavLogo'

import { Route } from '@sas-mrts/common'

function NavBar({ routes }: { routes: Route[] }) {
  return (
    <div className="flex h-20 py-4 bg-muted justify-between items-center">
      <NavLogo />
      <NavLinks routes={routes} />
    </div>
  )
}

export { NavBar }
