import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Drawer, Navbar } from '../navigation';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar open={drawerOpen} toggleMenu={toggleDrawer} />

      <div className="flex flex-grow overflow-hidden">
        <div className={`lg:w-64 h-full transition-width duration-300`}>
          <Drawer open={drawerOpen} onClose={closeDrawer} />
        </div>

        <div className="flex-grow h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
