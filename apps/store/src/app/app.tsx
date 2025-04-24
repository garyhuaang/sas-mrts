// import NxWelcome from './nx-welcome';

import { RouterProvider } from 'react-router-dom';

import routes from './routes';

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
