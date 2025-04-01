/**
 * Fetches movie data from the given URL.
 *
 * @param {string} url - The URL to fetch the movie data from.
 * @param {object} [options] - Optional fetch options such as headers or method.
 * @returns {Promise<object>} - A promise that resolves to the fetched movie data.
 */
const fetchMovies = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw err;
  }
};

export default fetchMovies;
