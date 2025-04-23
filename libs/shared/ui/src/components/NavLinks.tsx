import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '../base/NavigationMenu';
import { Route } from '@sas-mrts/common';
import { Button } from '../base/Button';
import { Link } from 'react-router-dom';

function NavLinks({ routes }: { routes: Route[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.name}>
            <Button asChild>
              <Link to={route.path}>{route.name}</Link>
            </Button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { NavLinks };
