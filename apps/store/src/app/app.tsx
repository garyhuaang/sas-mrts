// import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Layout } from '@sas-mrts/layout';
import { Button } from '@sas-mrts/ui';

export function App() {
  return (
    <div>
      <h1 className="text-3xl text-red-600">LOLOLO</h1>
      <Button>LOLOLO</Button>
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
