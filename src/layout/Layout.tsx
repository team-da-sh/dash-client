import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '@/shared/components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
