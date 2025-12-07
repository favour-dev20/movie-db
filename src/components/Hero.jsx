import React from "react";

export default function Hero() {
  return (
    <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&h=900&fit=crop"
        alt="Featured Movie"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">The Dark Knight</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-semibold text-sm">IMDb 9.0</span>
            <span className="text-gray-300">2008</span>
            <span className="text-gray-300">2h 32m</span>
            <span className="text-gray-300">Action, Crime, Drama</span>
          </div>
          <p className="text-gray-300 text-base sm:text-lg mb-6 line-clamp-3">
            When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
              <i className="fas fa-play"></i>
              <span>Watch Trailer</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
              <i className="fas fa-plus"></i>
              <span>My List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}