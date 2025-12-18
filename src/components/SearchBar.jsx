import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="flex gap-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="flex-1 bg-gray-900 px-4 py-3 rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 px-8 py-3 rounded-lg font-semibold"
      >
        Search
      </button>
    </div>
  );
}