import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 mb-12">
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
          <SearchBar />
        </div>
      </div>

      {/* Trending */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <MovieGrid variant="trending" />
      </div>
    </>
  );
}