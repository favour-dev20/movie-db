// src/pages/SearchResults.jsx
import React, { useState, useEffect, useCallback } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SearchResultCard from "../components/SearchResultCard";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // from .env
const BASE_URL = "https://www.omdbapi.com/";

export default function SearchResults({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const performSearch = useCallback(
    async (searchText, pageNumber = 1) => {
      if (!searchText.trim()) return;

      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `${BASE_URL}?s=${encodeURIComponent(searchText)}&page=${pageNumber}&apikey=${API_KEY}`
        );
        const data = await res.json();

        if (data.Response === "False") {
          setResults([]);
          setTotalResults(0);
          setError(data.Error);
        } else {
          setResults(data.Search);
          setTotalResults(Number(data.totalResults));
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (initialQuery) performSearch(initialQuery, 1);
  }, [initialQuery, performSearch]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Nav />

      {/* Search Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          {query && (
            <p className="text-gray-400">
              Showing results for <span className="text-white">"{query}"</span>
            </p>
          )}

          <div className="mt-4 flex gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies..."
              className="flex-1 bg-gray-900 border border-gray-700 px-4 py-2 rounded-lg"
              onKeyDown={(e) => e.key === "Enter" && performSearch(query, 1)}
            />
            <button
              onClick={() => { setPage(1); performSearch(query, 1); }}
              className="bg-red-600 px-6 py-2 rounded-lg font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {loading && <p className="text-center text-gray-400">Loading...</p>}

        {error && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">{error}</h2>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((movie) => (
                <SearchResultCard key={movie.imdbID} movie={movie} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex justify-center gap-4">
                <button
                  disabled={page === 1}
                  onClick={() => { setPage(page - 1); performSearch(query, page - 1); }}
                  className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="text-gray-400">Page {page} of {totalPages}</span>

                <button
                  disabled={page === totalPages}
                  onClick={() => { setPage(page + 1); performSearch(query, page + 1); }}
                  className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}