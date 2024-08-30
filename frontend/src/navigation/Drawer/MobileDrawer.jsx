import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import useCurrentPath from "../../hooks/useCurrentPath";

export default function MobileDrawer({ paths, open, onClose }) {
  const drawerRef = useRef(null);
  const currentPath = useCurrentPath();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onClose(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform bg-gray-800 bg-opacity-75 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={handleClickOutside} 
    >
      <div
        ref={drawerRef}
        {...swipeHandlers}
        className="w-64 h-full bg-white shadow-xl flex flex-col p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-gray-800 self-end focus:outline-none"
        >
          Close
        </button>
        <nav className="mt-8">
          {paths.map((path) => (
            <Link
              key={path}
              className={`block py-2 px-4 text-gray-800 hover:bg-gray-200 ${currentPath.path === path.toLowerCase() ? "font-bold" : ""
                }`}
              onClick={onClose}
              to={`/${path.toLowerCase()}`}
            >
              {path}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
