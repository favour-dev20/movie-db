import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="flex gap-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700"
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 px-6 rounded-lg font-semibold"
      >
        Search
      </button>
    </div>
  );
}