import { MovieDetail } from "../../movie.domain";

/**
 * Port interface for storing and retrieving movie data
 */
export interface MovieRepositoryPort {
  /**
   * Retrieves the current list of movies from the repository
   * @returns An array of MovieDetail objects
   */
  getMovies: () => MovieDetail[];

  /**
   * Stores movies in the repository
   * @param movies - Array of MovieDetail objects to store
   */
  setMovies: (movies: MovieDetail[]) => void;
}
