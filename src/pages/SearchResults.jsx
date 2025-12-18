// src/pages/SearchResults.jsx
import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SearchResultCard from "../components/SearchResultCard";
import SearchBar from "../components/SearchBar";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);
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
          `${BASE_URL}?s=${searchText}&page=${pageNumber}&apikey=${API_KEY}`
        );
        const data = await res.json();

        if (data.Response === "False") {
          setResults([]);
          setError(data.Error);
        } else {
          setResults(data.Search);
          setTotalResults(Number(data.totalResults));
        }
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Run search when URL query changes
  useEffect(() => {
    if (urlQuery) {
      setQuery(urlQuery);
      setPage(1);
      performSearch(urlQuery, 1);
    }
  }, [urlQuery, performSearch]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Search Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-3">Search Results</h1>

          {query && (
            <p className="text-gray-400 mb-4">
              Showing results for <span className="text-white">"{query}"</span>
            </p>
          )}

          <div className="mt-4">
            <SearchBar
              initialValue={query}
              onSearch={(value) => {
                setQuery(value);
                setPage(1);
                performSearch(value, 1);
              }}
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {loading && (
          <p className="text-center text-gray-400 text-lg">
            Loading movies...
          </p>
        )}

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
                  onClick={() => {
                    setPage(page - 1);
                    performSearch(query, page - 1);
                  }}
                  className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-40"
                >
                  Previous
                </button>

                <span className="text-gray-400">
                  Page {page} of {totalPages}
                </span>

                <button
                  disabled={page === totalPages}
                  onClick={() => {
                    setPage(page + 1);
                    performSearch(query, page + 1);
                  }}
                  className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {!loading && !error && results.length === 0 && (
          <div className="text-center py-24">
            <h2 className="text-2xl font-semibold mb-2">No movies found</h2>
            <p className="text-gray-400">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}