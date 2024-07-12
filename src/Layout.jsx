// Layout.jsx
import { Outlet } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { PromoBar } from "./components/PromoBar";

function Layout() {
  return (
    <div>
      <PromoBar />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;