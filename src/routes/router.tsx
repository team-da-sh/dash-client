import { createBrowserRouter } from 'react-router-dom';
// page components
import Home from '../pages/home';
import { ROUTES_CONFIG } from './routesConfig';

export const router = createBrowserRouter([
  {
    path: ROUTES_CONFIG.home.path, // 경로
    element: <Home />, // 렌더링할 컴포넌트
  },
]);
