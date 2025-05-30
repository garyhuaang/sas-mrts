import { memo } from 'react'

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
      className={`flex h-20 py-4 px-8 bg-muted justify-between items-center
         ${className}`}
    >
      <NavLogo />
      <NavLinks onLinkClick={onLinkClick} routes={routes} />
      <NavActions onCartClick={onCartClick} />
    </div>
  )
}

export default NavBar
