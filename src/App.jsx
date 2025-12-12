import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

// SearchResults is the page component you added
import SearchResults from "./pages/SearchResults";

export default function App() {
  const [page, setPage] = useState("landing"); // "landing" | "search"

  // shared query between landing and results
  const [query, setQuery] = useState("");

  // called from SearchBar on landing page
  const handleLandingSearch = (q) => {
    setQuery(q || "");
    setPage("search");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* DEV: small switcher to toggle pages during development */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => setPage("landing")}
          className={`px-3 py-1 rounded ${page === "landing" ? "bg-red-600" : "bg-gray-800"}`}
        >
          Landing
        </button>
        <button
          onClick={() => setPage("search")}
          className={`px-3 py-1 rounded ${page === "search" ? "bg-red-600" : "bg-gray-800"}`}
        >
          Search
        </button>
      </div>

      {page === "landing" ? (
        <>
          <Nav />
          <Hero />

          {/* Search Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
              {/* pass onSearch so SearchBar triggers navigation */}
              <SearchBar onSearch={handleLandingSearch} />
            </div>
          </div>

          {/* Trending / Featured */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>
            <MovieGrid variant="trending" />
          </div>

          {/* Popular This Week */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Popular This Week</h2>
            <MovieGrid variant="popular" />
          </div>

          <Footer />
        </>
      ) : (
        // pass the shared query to SearchResults via prop so it starts with the searched term
        <SearchResults initialQuery={query} />
      )}
    </div>
  );
}