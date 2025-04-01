import React, { useState } from "react";
import StarIcon from "./StarIcon.jsx";

const MovieCard = ({
  title,
  vote_average,
  poster_path,
  release_date,
  genre_ids,
  overview,
  adult,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const genreNames = genre_ids.map((id) => genres[id] || "Unknown").join(", ");

  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-lg overflow-scroll transition-all duration-300 ${
        isExpanded ? "max-h-screen" : "max-h-[500px]"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 relative">
        <h2 className="text-lg font-bold truncate">{title}</h2>
        {/* Adult Tag */}
        {adult && (
          <div className="absolute top-4 right-4 bg-black text-gold-500 border border-gold-500 text-xs font-bold px-2 py-1 rounded">
            A
          </div>
        )}
        <div className="flex items-center text-gray-400 mt-2">
          <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
          <span>{vote_average.toFixed(1)}</span>
        </div>
        <p className="text-gray-400 mt-2">Release Date: {release_date}</p>
        <p className="text-gray-400 mt-2">Genres: {genreNames}</p>
        {isExpanded && (
          <div className="mt-4">
            <h3 className="text-white font-bold mb-2">Overview</h3>
            <p className="text-gray-300">{overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
