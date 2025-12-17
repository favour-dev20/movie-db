import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  const [query, setQuery] = useState("");

  const handleLandingSearch = (q) => {
    setQuery(q || "");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Hero />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
                  <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
                    <SearchBar onSearch={handleLandingSearch} />
                  </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Now</h2>
                  <MovieGrid variant="trending" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Popular This Week</h2>
                  <MovieGrid variant="popular" />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/search" element={<SearchResults initialQuery={query} />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}