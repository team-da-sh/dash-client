import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;