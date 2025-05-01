import { MovieDetail } from "../../movie.domain";

/**
 * Interface defining the use case operations for the carousel component.
 * This port represents the primary way for UI components to interact with movie data.
 */
export interface LoadCarouselUseCase {
	/**
	 * Current collection of movie details to be displayed in the carousel.
	 * @readonly The array is typically populated after data fetching operations.
	 * @returns {MovieDetail[]} An array of MovieDetail objects containing information about each movie.
	 */
	movies: MovieDetail[];

	/**
	 * Flag indicating whether a movie loading operation is currently in progress.
	 * @readonly UI components should check this before attempting to display content.
	 * @returns {boolean} True when movies are being fetched/loaded, false otherwise.
	 */
	isLoading: boolean;

	/**
	 * Error information if the most recent movie loading operation failed.
	 * @readonly Will be null when there are no errors.
	 * @returns {Error | null} Error object containing details about what went wrong, or null if no error occurred.
	 */
	error: Error | null;
}
