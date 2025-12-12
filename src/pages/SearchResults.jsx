// src/pages/SearchResults.jsx
import React, { useState, useEffect, useCallback } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SearchResultCard from "../components/SearchResultCard";

/**
 * Search Results Page
 * - Accepts initialQuery prop
 * - Automatically runs a search when mounted if initialQuery is provided
 * - Uses a safe performSearch(q) function (easy to replace with real API)
 */

const MOCK_RESULTS = [
  { id: "r1", title: "Inception", year: "2010", rating: "8.8", img: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop" },
  { id: "r2", title: "Interstellar", year: "2014", rating: "8.6", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
  { id: "r3", title: "The Matrix", year: "1999", rating: "8.7", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
  { id: "r4", title: "Pulp Fiction", year: "1994", rating: "8.9", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
  { id: "r5", title: "Fight Club", year: "1999", rating: "8.8", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
  { id: "r6", title: "Gladiator", year: "2000", rating: "8.5", img: "https://images.unsplash.com/photo-1574267432644-f610f5b7e8e7?w=400&h=600&fit=crop" },
  { id: "r7", title: "Shawshank", year: "1994", rating: "9.3", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
  { id: "r8", title: "Forrest Gump", year: "1994", rating: "8.8", img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop" },
];

export default function SearchResults({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // performSearch is parameterized so it doesn't close over stale state.
  // You can replace the body with a real fetch/axios call to OMDB later.
  const performSearch = useCallback(async (q) => {
    const trimmed = (q || "").trim();
    setLoading(true);

    // Simulate network latency for demo
    await new Promise((res) => setTimeout(res, 450));

    if (!trimmed) {
      // empty query -> clear results
      setResults([]);
    } else if (trimmed.toLowerCase().includes("nothing")) {
      // deliberate "no results" sentinel for demo/testing
      setResults([]);
    } else {
      // demo: return mock data (in real app, filter or fetch)
      // Optionally, you could filter MOCK_RESULTS by title to feel dynamic:
      const filtered = MOCK_RESULTS.filter((m) =>
        m.title.toLowerCase().includes(trimmed.toLowerCase())
      );
      setResults(filtered.length ? filtered : MOCK_RESULTS);
    }

    setLoading(false);
    setPage(1);
  }, []);

  // Run search automatically on mount if initialQuery exists
  useEffect(() => {
    if (initialQuery && initialQuery.trim() !== "") {
      // Ensure state shows the initial query then run search
      setQuery(initialQuery);
      performSearch(initialQuery);
    } else {
      // If there's no initialQuery we might want to show popular by default:
      setResults(MOCK_RESULTS);
    }
    // run once on mount; performSearch is stable because of useCallback
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty deps to run on mount only

  // handlers for UI buttons/inputs
  const handleSearchClick = () => performSearch(query);
  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  const totalPages = 3;
  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Nav />

      {/* Search Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Search Results</h1>
              <p className="text-gray-400">
                Showing results for <span className="text-white font-semibold">"{query}"</span>
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search movies, actors or genres..."
                  className="w-full sm:w-96 bg-gray-900 text-white pl-4 pr-3 py-2 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearchClick();
                  }}
                />
                <button onClick={handleSearchClick} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold">Search</button>
                <button onClick={handleClear} className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="text-gray-400 text-lg">Loading results...</div>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-2xl font-semibold mb-2">No results found</h2>
            <p className="text-gray-400 mb-6">
              We couldn't find anything for <span className="text-white font-medium">"{query}"</span>. Try a different keyword.
            </p>
            <button
              onClick={() => { setQuery(""); setResults(MOCK_RESULTS); }}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
            >
              Show popular
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-400">{results.length} results • page {page} of {totalPages}</p>
              <div className="flex items-center gap-3">
                <select className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2">
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg">Filter</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((r) => (
                <SearchResultCard key={r.id} movie={r} />
              ))}
            </div>

            {/* Pagination (static demo) */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button onClick={goPrev} className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Previous</button>
              <div className="text-gray-400">Page {page} of {totalPages}</div>
              <button onClick={goNext} className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">Next</button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}