import { Link } from 'react-router-dom'

import { Button } from '../../base/Button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../../base/NavigationMenu'

import { Route } from '@sas-mrts/rStore'

function NavLinks({ routes }: { routes: Route[] }) {
  return (
    <NavigationMenu className="fade">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.name}>
            <Button asChild variant="link">
              <Link viewTransition to={`../${route.path}`}>
                {route.name}
              </Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { NavLinks }
