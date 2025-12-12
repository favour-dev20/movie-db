// src/components/SearchResultCard.jsx
import React from "react";

/**
 * SearchResultCard - matches the MovieCard visual style but oriented for results
 * Props:
 *   movie: { id, title, year, rating, img }
 */
export default function SearchResultCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer flex flex-col md:flex-row">
      <img src={movie.img} alt={movie.title} className="w-full md:w-40 h-56 md:h-auto object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">{movie.title}</h3>
          <div className="text-sm text-gray-400 mb-3">
            <span>{movie.year}</span> • <span>{movie.rating}</span>
          </div>
          <p className="text-gray-300 text-sm line-clamp-3">
            A gripping story that explores identity, fate and consequence — a must-watch film that blends stunning visuals with an unforgettable score.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm font-medium">View</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-sm">Add</button>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <i className="fas fa-star text-yellow-500"></i>
            <span>{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}