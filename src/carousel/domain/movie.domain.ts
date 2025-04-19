/**
 * Main interface representing movie data response from API
 * Contains pagination information and an array of movie details
 */
export interface Movie {
  /** Date range for the current movie results */
  dates: Dates
  /** Current page number of results */
  page: number
  /** Array of individual movie information */
  results: MovieDetail[]
  /** Total available pages of results */
  total_pages: number
  /** Total count of movies matching the criteria */
  total_results: number
}

/**
 * Represents date boundaries for movie results
 * Often used for filtering content by release dates
 */
export interface Dates {
  /** Latest date in the date range */
  maximum: string
  /** Earliest date in the date range */
  minimum: string
}

/**
 * Detailed information about an individual movie
 * Contains all essential metadata for displaying movie information
 */
export interface MovieDetail {
  /** Indicates if the movie is adults-only content */
  adult: boolean
  /** Path to the backdrop image */
  backdrop_path: string
  /** Array of genre identifiers associated with the movie */
  genre_ids: number[]
  /** Unique identifier for the movie */
  id: number
  /** Original language code (ISO 639-1) */
  original_language: string
  /** Original title in the movie's native language */
  original_title: string
  /** Plot summary or description */
  overview: string
  /** Popularity score (higher numbers indicate more popular movies) */
  popularity: number
  /** Path to the poster image */
  poster_path: string
  /** Movie release date in ISO format (YYYY-MM-DD) */
  release_date: string
  /** Display title, possibly localized for the current region */
  title: string
  /** Indicates if video content is available */
  video: boolean
  /** Average vote score on a scale of 0-10 */
  vote_average: number
  /** Number of votes that have been cast */
  vote_count: number
}
