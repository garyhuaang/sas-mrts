import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Layout } from '@sas-mrts/layout';

export function App() {
  return (
    <div>
      <NxWelcome title="store" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/layout">Layout</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/layout" element={<Layout />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
