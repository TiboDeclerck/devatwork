import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

export default function Navigation() {
  const [open, setOpen] = useState(true);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Navbar open={open} toggleMenu={toggleMenu} />
      <Drawer open={open} onClose={onClose} />
    </Fragment>
  );
}

export { Navbar, Drawer}