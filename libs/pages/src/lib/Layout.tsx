import { Outlet } from 'react-router-dom';

import { navigationRoutes } from '@sas-mrts/common';
import { NavBar } from '@sas-mrts/ui';

function Layout() {
  return (
    <div>
      <Outlet />
      <NavBar routes={navigationRoutes} />
    </div>
  );
}

export { Layout };
