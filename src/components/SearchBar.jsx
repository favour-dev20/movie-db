import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          placeholder="Search for movies, actors, genres..."
          className="w-full bg-gray-900 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none"
        />
      </div>
      <button className="btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
        Search
      </button>
    </div>
  );
}