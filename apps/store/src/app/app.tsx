// import NxWelcome from './nx-welcome';

import routes from './routes';
import { RouterProvider } from 'react-router-dom';

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
