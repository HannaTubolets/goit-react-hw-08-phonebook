import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
// import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ width: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;
