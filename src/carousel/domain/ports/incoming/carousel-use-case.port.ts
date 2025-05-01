import { MovieDetail } from "../../movie.domain";

/**
 * Interface defining the use case operations for the carousel component
 */
export interface CarouselUseCase {
	/**
	 * Gets the current list of movies
	 * @returns An array of MovieDetail objects
	 */
	getMovies: () => MovieDetail[];

	/**
	 * Indicates if movies are currently being loaded
	 */
	isLoading: boolean;

	/**
	 * Contains error information if loading movies failed
	 */
	error: Error | null;
}
