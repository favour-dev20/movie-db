import { useNavigate } from "react-router-dom";

export default function SearchResultCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="bg-gray-800 rounded-lg cursor-pointer hover:scale-105 transition"
    >
      <img src={movie.Poster} alt={movie.Title} />
      <div className="p-4">
        <h3 className="font-semibold">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}