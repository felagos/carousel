import { MovieDetail } from "../../movie.domain";

/**
 * Port interface for fetching movie data from external sources.
 * This outgoing port defines the contract for retrieving movie information from
 * external APIs, databases, or other data sources.
 */
export interface MovieFetchPort {
  /**
   * Fetches movies from the data source.
   * Implementations should handle network requests, data transformation,
   * and any necessary error handling when retrieving movie data.
   *
   * @returns {Promise<MovieDetail[]>} A promise that resolves to an array of MovieDetail objects
   * @throws {Error} May throw network errors or parsing errors if data retrieval fails
   */
  fetchMovies: () => Promise<MovieDetail[]>;
}
