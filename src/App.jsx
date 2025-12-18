import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Nav />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              <div className="max-w-7xl mx-auto px-4 -mt-6 mb-12">
                <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
                  <SearchBar />
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
                <MovieGrid variant="trending" />
              </div>

              <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-6">Popular This Week</h2>
                <MovieGrid variant="popular" />
              </div>
            </>
          }
        />

        {/* Search Results */}
        <Route path="/search" element={<SearchResults />} />

        {/* Movie Details */}
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}