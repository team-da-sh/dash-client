import { lazy } from 'react';
import Home from '@/pages/home/Home';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Search = lazy(() => import('@/pages/search/Search'));
const Dancer = lazy(() => import('@/pages/dancer/Dancer'));

export const publicRoutes = [
  { path: ROUTES_CONFIG.home.path, element: <Home /> },
  { path: ROUTES_CONFIG.search.path, element: <Search /> },
  { path: ROUTES_CONFIG.dancer.path(':id'), element: <Dancer /> },
];
