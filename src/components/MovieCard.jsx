import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
      <img src={movie.img} alt={movie.title} className="w-full h-64 sm:h-80 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-base sm:text-lg mb-1">{movie.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{movie.year}</span>
          <span className="flex items-center space-x-1">
            <i className="fas fa-star text-yellow-500"></i>
            <span>{movie.rating}</span>
          </span>
        </div>
      </div>
    </div>
  );
}