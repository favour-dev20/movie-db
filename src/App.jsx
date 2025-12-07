import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />
      <Hero />

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
          <SearchBar />
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
    </div>
  );
}