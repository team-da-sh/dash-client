import { createBrowserRouter } from 'react-router-dom';
// page components
import Home from '@/pages/home';
import { ROUTES_CONFIG } from './routesConfig';

export const router = createBrowserRouter([
  {
    path: ROUTES_CONFIG.home.path,
    element: <Home />,
  },
]);
