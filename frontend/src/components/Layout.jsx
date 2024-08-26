import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation, { Drawer, Navbar } from '../navigation'

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar open={drawerOpen} toggleMenu={toggleDrawer} />

      <div className="flex flex-grow">
        <div className="w-64">
          <Drawer open={drawerOpen} onClose={closeDrawer} />
        </div>

        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
