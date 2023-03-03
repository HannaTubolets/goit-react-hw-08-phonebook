import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <div style={{ width: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
