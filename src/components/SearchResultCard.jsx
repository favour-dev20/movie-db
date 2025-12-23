// src/components/SearchResultCard.jsx
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchResultCard({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      onClick={() =>
        navigate(`/movie/${movie.imdbID}`, {
          state: {
            fromSearch: `/search${location.search}`,
          },
        })
      }
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      {/* Poster */}
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white truncate">
          {movie.Title}
        </h3>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}