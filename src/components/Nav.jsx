import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaBars, FaTimes, FaFilm } from "react-icons/fa";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / App Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaFilm className="text-red-600 text-2xl" />
          <span className="text-2xl font-bold text-white">
            Movie<span className="text-red-600">DB</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/search" className="hover:text-white">Browse</Link>
          <span className="opacity-60 cursor-not-allowed">Genre</span>
          <span className="opacity-60 cursor-not-allowed">My List</span>

          <FaBell title="Notifications (coming soon)" className="cursor-pointer hover:text-white" />
          <FaUserCircle title="Login (coming soon)" className="cursor-pointer hover:text-white text-2xl" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-6 space-y-5 text-gray-300">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-white">Home</Link>
          <Link to="/search" onClick={() => setOpen(false)} className="block hover:text-white">Browse</Link>
          <span className="block opacity-60">Genre (coming soon)</span>
          <span className="block opacity-60">My List (coming soon)</span>

          {/* Icons on Mobile */}
          <div className="flex gap-6 pt-4">
            <FaBell title="Notifications (coming soon)" className="text-xl" />
            <FaUserCircle title="Login (coming soon)" className="text-2xl" />
          </div>

          {/* Home Button */}
          <button
            onClick={() => {
              setOpen(false);
              navigate("/");
            }}
            className="mt-4 w-full bg-red-600 py-2 rounded-lg text-white font-semibold"
          >
            Go to Home
          </button>
        </div>
      )}
    </nav>
  );
}