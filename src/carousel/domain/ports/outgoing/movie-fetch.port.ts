import { MovieDetail } from "../../movie.domain";

/**
 * Port interface for fetching movie data from external sources
 */
export interface MovieFetchPort {
  /**
   * Fetches movies from the data source
   * @returns A promise that resolves to an array of MovieDetail objects
   */
  fetchMovies: () => Promise<MovieDetail[]>;
}
