import { ROUTES_CONFIG } from '@/routes/routesConfig';

export const publicRoutes = [
  ROUTES_CONFIG.home.path,
  ROUTES_CONFIG.login.path,
  ROUTES_CONFIG.auth.path,
  ROUTES_CONFIG.onboarding.path,
  ROUTES_CONFIG.search.path,
  ROUTES_CONFIG.class.path(':id'),
  ROUTES_CONFIG.dancer.path(':id'),
  ROUTES_CONFIG.error.path,
];
