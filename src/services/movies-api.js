import { BASE_URL, API_KEY } from './constList';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
}

export function fetchCastsById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function fetchReviewsById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}
// `https://api.themoviedb.org/3/trending/get-trending`
// `https://api.themoviedb.org/3/search/search-movies`
// `https://api.themoviedb.org/3/movies/get-movie-details`
// `https://api.themoviedb.org/3/movies/get-movie-credits`
// `https://api.themoviedb.org/3/movies/get-movie-reviews`
export function fetchSearchMovie(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
}
