// src/components/SearchBar.jsx
import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doSearch = async () => {
    if (!q.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${BASE_URL}?s=${encodeURIComponent(q)}&page=1&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "False") {
        setError(data.Error);
        if (onSearch) onSearch([], q, data.Error);
      } else {
        if (onSearch) onSearch(data.Search, q, "");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      if (onSearch) onSearch([], q, "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
        disabled={loading}
        className="btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}