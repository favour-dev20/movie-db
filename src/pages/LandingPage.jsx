import Nav from "../components/Nav";
import Hero from "../components/Hero";
import MovieGrid from "../components/MovieGrid";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section (LOGO SHOULD BE INSIDE HERO) */}
      <Hero />

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 mb-12">
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Trending Movies */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <MovieGrid variant="trending" />
      </div>

      {/* Popular Movies */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Popular This Week</h2>
        <MovieGrid variant="popular" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}