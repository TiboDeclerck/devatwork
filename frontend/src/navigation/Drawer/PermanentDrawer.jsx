import React from "react";
import { Link } from "react-router-dom";

export default function PermanentDrawer({ paths }) {
  return (
    <div className="w-64 h-full bg-white shadow-xl flex flex-col p-4 fixed inset-y-0 left-0">
      <nav className="mt-8">
        {paths.map((path) => (
          <Link key={path} to={`/${path.toLowerCase()}`}>
            <a className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
              {path}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
