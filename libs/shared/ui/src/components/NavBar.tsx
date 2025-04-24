import { Route } from '@sas-mrts/common';
import { NavLinks } from './NavLinks';
import { NavLogo } from './NavLogo';

function NavBar({ routes }: { routes: Route[] }) {
  return (
    <div className="flex h-12">
      <NavLogo />
      <NavLinks routes={routes} />
    </div>
  );
}

export { NavBar };
