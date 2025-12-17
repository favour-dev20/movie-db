import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResultCard({ movie }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer flex flex-col md:flex-row hover:scale-105 transition-transform"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full md:w-40 h-56 md:h-auto object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">{movie.Title}</h3>
          <div className="text-sm text-gray-400 mb-3">
            <span>{movie.Year}</span> • <span>{movie.imdbRating || "N/A"}</span>
          </div>
          <p className="text-gray-300 text-sm line-clamp-3">
            {movie.Plot || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}