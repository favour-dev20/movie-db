import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  // local input state
  const [q, setQ] = useState("");

  const doSearch = () => {
    // call optional callback passed by App
    if (onSearch) onSearch(q);
  };

  // allow Enter key to submit
  const handleKey = (e) => {
    if (e.key === "Enter") doSearch();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search for movies, actors, genres..."
          className="w-full bg-gray-900 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none"
        />
      </div>
      <button
        onClick={doSearch}
        className="btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
      >
        Search
      </button>
    </div>
  );
}