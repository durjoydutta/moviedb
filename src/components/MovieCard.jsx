import React from "react";

const MovieCard = ({id, title, vote_average, poster_path}) => {
  return (
    <div className="movie-card bg-stone-900 rounded-lg shadow-lg p-2 m-2">
      <div className="movie-card-image">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
          className="rounded-t-lg p-2"
        />
      </div>
      <div className="movie-card-content text-white">
        <h2>{title}</h2>
        <p>Rating: {vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
