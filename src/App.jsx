import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Pagination from "./components/Pagination.jsx";
import AgeVerificationModal from "./components/AgeVerificationModal.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const DISCOVER_URL = (page, isAdult) =>
  `${TMDB_BASE_URL}/discover/movie?include_adult=${isAdult}&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
const SEARCH_URL = (query, isAdult) =>
  `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
    query
  )}&include_adult=${isAdult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieCount, setMovieCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isAdult, setIsAdult] = useState(false); // Tracks if adult content is allowed
  const [showModal, setShowModal] = useState(true); // Tracks if the modal is visible

  const fetchMovies = useCallback(
    async (query = "") => {
      try {
        const url = query
          ? SEARCH_URL(query, isAdult)
          : DISCOVER_URL(page, isAdult);
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        };
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await res.json();
        if (data.results?.length > 0) {
          setMovies(data.results);
          setMovieCount(data.total_results);
        } else {
          setMovies([]);
          setErrorMessage("No movies found.");
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setMovies([]);
        setErrorMessage("Failed to fetch movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
    [page, isAdult]
  );

  useEffect(() => {
    if (!showModal) {
      setIsLoading(true);
      fetchMovies(searchTerm);
    }
  }, [searchTerm, page, fetchMovies, showModal]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {showModal && (
        <AgeVerificationModal
          setIsAdult={setIsAdult}
          setShowModal={setShowModal}
        />
      )}
      {!showModal && (
        <>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Find <span className="text-red-500">Movies</span> You'll Enjoy
              </h1>
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                movieCount={movieCount}
              />
            </header>
            <Pagination page={page} setPage={setPage} />
            <section className="mt-8">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <p className="text-lg mb-4">Fetching movies...</p>
                  <Spinner />
                </div>
              ) : errorMessage ? (
                <div className="text-center text-red-500">
                  <h2 className="text-2xl font-bold">Error</h2>
                  <p>{errorMessage}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      vote_average={movie.vote_average}
                      poster_path={movie.poster_path}
                      release_date={movie.release_date}
                      genre_ids={movie.genre_ids}
                      overview={movie.overview}
                      adult={movie.adult}
                    />
                  ))}
                </div>
              )}
            </section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
