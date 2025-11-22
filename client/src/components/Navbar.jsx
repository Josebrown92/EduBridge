// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Brand */}
      <Link to="/" className="text-2xl font-bold text-blue-700">
        EduBridge
      </Link>

      {/* Navigation Links */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link
          to="/"
          className={`hover:text-blue-700 transition ${
            location.pathname === "/" ? "text-blue-700 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/opportunities"
          className={`hover:text-blue-700 transition ${
            location.pathname === "/opportunities" ? "text-blue-700 font-semibold" : ""
          }`}
        >
          Opportunities
        </Link>

        <Link
          to="/login"
          className={`hover:text-blue-700 transition ${
            location.pathname === "/login" ? "text-blue-700 font-semibold" : ""
          }`}
        >
          Login
        </Link>

        <Link
          to="/register"
          className={`bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition ${
            location.pathname === "/register" ? "bg-blue-800" : ""
          }`}
        >
          Register
        </Link>
      </nav>
    </header>
  );
}

