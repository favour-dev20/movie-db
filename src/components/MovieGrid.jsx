import React from "react";
import MovieCard from "./MovieCard";

const sampleTrending = [
  { id: 1, title: "Inception", year: "2010", rating: "8.8", img: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop" },
  { id: 2, title: "Interstellar", year: "2014", rating: "8.6", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
  { id: 3, title: "The Matrix", year: "1999", rating: "8.7", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop" },
  { id: 4, title: "Pulp Fiction", year: "1994", rating: "8.9", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop" },
  { id: 5, title: "Fight Club", year: "1999", rating: "8.8", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
];

const samplePopular = [
  { id: 11, title: "Gladiator", year: "2000", rating: "8.5", img: "https://images.unsplash.com/photo-1574267432644-f610f5b7e8e7?w=400&h=600&fit=crop" },
  { id: 12, title: "Shawshank", year: "1994", rating: "9.3", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop" },
  { id: 13, title: "Forrest Gump", year: "1994", rating: "8.8", img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop" },
  { id: 14, title: "The Godfather", year: "1972", rating: "9.2", img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop" },
  { id: 15, title: "Goodfellas", year: "1990", rating: "8.7", img: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop" },
];

export default function MovieGrid({ variant = "trending" }) {
  const data = variant === "trending" ? sampleTrending : samplePopular;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {data.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}