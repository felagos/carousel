import { MovieDetail } from "../../movie.domain";

export interface CarouselUseCase {
  /**
   * Loads movies for the carousel
   */
  loadMovies: () => void;

  /**
   * Returns loaded movie data
   */
  getMovies: () => MovieDetail[];

  /**
   * Current loading state
   */
  isLoading: boolean;

  /**
   * Error state if any
   */
  error: Error | null;
}
