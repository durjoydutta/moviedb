import React from "react";

const MovieCard = ({movie: id, title, vote_average, poster_path }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold truncate">{title}</h2>
        <p className="text-gray-400">Rating: {vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
