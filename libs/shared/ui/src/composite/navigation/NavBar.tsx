import NavActions from './actions/NavActions'
import { NavLinks } from './NavLinks'
import { NavLogo } from './NavLogo'

import { Route } from '@sas-mrts/rStore'

type NavBarProps = {
  routes: Route[]
  className?: string
  onLinkClick?: () => void
  onCartClick?: () => void
}

function NavBar({ routes, className, onLinkClick, onCartClick }: NavBarProps) {
  return (
    <div
      className={`flex h-20 items-center justify-between bg-muted px-8 py-4 ${className}`}
    >
      <NavLogo />
      <NavLinks onLinkClick={onLinkClick} routes={routes} />
      <NavActions onCartClick={onCartClick} />
    </div>
  )
}

export default NavBar
