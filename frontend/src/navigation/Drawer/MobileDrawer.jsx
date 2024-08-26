import React from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export default function MobileDrawer({ paths, open, onClose }) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onClose(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform bg-gray-800 bg-opacity-75 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        {...swipeHandlers}
        className="w-64 h-full bg-white shadow-xl flex flex-col p-4"
      >
        <button
          onClick={onClose}
          className="text-gray-800 self-end focus:outline-none"
        >
          Close
        </button>
        <nav className="mt-8">
          {paths.map((path) => (
            <Link key={path} to={`/${path}`}>
              <a className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
                {path}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
