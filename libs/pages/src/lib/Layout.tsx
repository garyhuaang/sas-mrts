import { Outlet } from 'react-router-dom';
import { NavLinks } from '@sas-mrts/ui';
import { navigationRoutes } from '@sas-mrts/common';

function Layout() {
  return (
    <div>
      <Outlet />
      <NavLinks routes={navigationRoutes} />
    </div>
  );
}

export { Layout };
