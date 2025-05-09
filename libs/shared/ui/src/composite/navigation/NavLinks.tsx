import { Link } from 'react-router-dom'

import { Button } from '../../base/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../../base/navigationMenu'

import { Route } from '@sas-mrts/rStore'

function NavLinks({ routes }: { routes: Route[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.name}>
            <Button asChild variant="link">
              <Link to={`../${route.path}`}>{route.name}</Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { NavLinks }
