import {
  BrowserRouter,
  Route,
  Routes as Router,
  Navigate,
} from 'react-router-dom';

import { Home } from 'pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Router>
    </BrowserRouter>
  );
};
