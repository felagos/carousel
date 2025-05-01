import { MovieDetail } from "../../movie.domain";

/**
 * Port interface for storing and retrieving movie data.
 * This outgoing port defines the contract for persisting movie information
 * in a data store, providing a layer of abstraction over the actual storage mechanism.
 */
export interface MovieRepositoryPort {
  /**
   * Retrieves the current list of movies from the repository.
   * Implementations should handle returning cached movie data and fallbacks
   * if no data is available.
   *
   * @returns {MovieDetail[]} An array of MovieDetail objects currently stored in the repository
   */
  getMovies: () => MovieDetail[];

  /**
   * Stores movies in the repository.
   * Implementations should handle caching logic, data validation,
   * and any persistence operations required.
   *
   * @param {MovieDetail[]} movies - Array of MovieDetail objects to store in the repository
   */
  setMovies: (movies: MovieDetail[]) => void;
}
