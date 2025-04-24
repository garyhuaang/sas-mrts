import { Link } from 'react-router-dom'

import { Button } from '../base/Button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../base/NavigationMenu'

import { Route } from '@sas-mrts/common'

function NavLinks({ routes }: { routes: Route[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.name}>
            <Button asChild variant="outline">
              <Link to={route.path}>{route.name}</Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { NavLinks }
