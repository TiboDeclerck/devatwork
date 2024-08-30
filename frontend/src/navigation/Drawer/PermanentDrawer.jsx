import React from "react";
import { Link } from "react-router-dom";
import useCurrentPath from "../../hooks/useCurrentPath";

export default function PermanentDrawer({ paths }) {
  const currentPath = useCurrentPath()
  return (
    <div className="w-64 h-full bg-white shadow-xl flex flex-col p-4 fixed inset-y-0 left-0">
      <nav className="mt-8">
        {paths.map((path) => (
          <Link key={path} className={`block py-2 px-4 text-gray-800 hover:bg-gray-200 ${currentPath.path === path.toLowerCase() ? "font-bold": ""}`} to={`/${path.toLowerCase()}`}>
           {path}
          </Link>
        ))}
      </nav>
    </div>
  );
}
