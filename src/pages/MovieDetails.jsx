import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export default function MovieDetails() {
  const { imdbID } = useParams(); // get movie ID from URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`);
        const data = await res.json();
        if (data.Response === "False") {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [imdbID]);

  if (loading) return <p className="text-center text-gray-400 py-20">Loading movie...</p>;
  if (error) return <p className="text-center text-red-500 py-20">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Nav />

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img src={movie.Poster} alt={movie.Title} className="w-full md:w-64 rounded-lg shadow-lg" />

        {/* Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{movie.Title} ({movie.Year})</h1>
          <p className="text-gray-400"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="text-gray-400"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="text-gray-400"><strong>Director:</strong> {movie.Director}</p>
          <p className="text-gray-400"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="text-gray-400"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold w-fit"
          >
            Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}