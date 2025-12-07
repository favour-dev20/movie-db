import React from "react";

export default function Nav() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <i className="fas fa-film text-red-600 text-2xl"></i>
              <span className="text-2xl font-bold text-white">MovieDB</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="nav-link text-white font-medium">Home</a>
              <a href="#" className="nav-link text-gray-400 font-medium">Browse</a>
              <a href="#" className="nav-link text-gray-400 font-medium">Genres</a>
              <a href="#" className="nav-link text-gray-400 font-medium">My List</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <i className="fas fa-search text-xl"></i>
            </button>
            <button className="text-gray-400 hover:text-white">
              <i className="fas fa-bell text-xl"></i>
            </button>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">FO</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}