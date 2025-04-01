import React, { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
// import fetchMovies from "./api/fetchMovies.js";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const DISCOVER_MOVIE_URL = "https://api.themoviedb.org/3/discover/movie";

const url = `${DISCOVER_MOVIE_URL}?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieCount, setMovieCount] = useState("1000000+");
  // const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await res.json();
      if (data.results?.length > 0) {
        setMovies(data.results);
        setMovieCount(data.total_results);
        console.log(data);
      } else {
        setErrorMessage("No movies found.");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(fetchMovies, 1000);
  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              without Hassle
            </h1>
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              movieCount={movieCount}
            />
          </header>
          <section className="all-movies">
            {isLoading ? (
              <div className="loading">
                <p>Please wait while we fetch the movies...</p>
                <Spinner />
              </div>
            ) : errorMessage ? (
              <div className="error-message">
                <h2>Error</h2>
                <p>{errorMessage}</p>
              </div>
            ) : (
              <div className="movie_list">
                {movies
                  .filter((movie) =>
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((movie) => (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      vote_average={movie.vote_average}
                      poster_path={movie.poster_path}
                    />
                  ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
