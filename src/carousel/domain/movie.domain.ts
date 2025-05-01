/**
 * Main class representing movie data response from API.
 * Contains pagination information and an array of movie details.
 * This is typically the top-level response structure from movie database APIs.
 */
export class Movie {
  /**
   * Date range for the current movie results.
   * Used for filtering content based on release dates.
   */
  dates: Dates
  /**
   * Current page number of results.
   * Useful for pagination implementation.
   */
  page: number
  /**
   * Array of individual movie information.
   * The core data containing details about each movie.
   */
  results: MovieDetail[]
  /**
   * Total available pages of results.
   * Indicates how many pages can be fetched with the current query parameters.
   */
  total_pages: number
  /**
   * Total count of movies matching the criteria.
   * The absolute number of movies available across all pages.
   */
  total_results: number

  /**
   * Creates a new Movie instance.
   *
   * @param {Dates} dates - The date boundaries for movie results
   * @param {number} page - Current page number
   * @param {MovieDetail[]} results - Array of movie details
   * @param {number} total_pages - Total number of available pages
   * @param {number} total_results - Total count of movies across all pages
   */
  constructor(
    dates: Dates,
    page: number,
    results: MovieDetail[],
    total_pages: number,
    total_results: number
  ) {
    this.dates = dates;
    this.page = page;
    this.results = results;
    this.total_pages = total_pages;
    this.total_results = total_results;
  }
}

/**
 * Represents date boundaries for movie results.
 * Often used for filtering content by release dates or defining time windows
 * for collections like "now playing" or "upcoming releases".
 */
export class Dates {
  /**
   * Latest date in the date range.
   * Format: YYYY-MM-DD
   */
  maximum: string
  /**
   * Earliest date in the date range.
   * Format: YYYY-MM-DD
   */
  minimum: string

  /**
   * Creates a new Dates instance.
   *
   * @param {string} maximum - The latest date in ISO format (YYYY-MM-DD)
   * @param {string} minimum - The earliest date in ISO format (YYYY-MM-DD)
   */
  constructor(maximum: string, minimum: string) {
    this.maximum = maximum;
    this.minimum = minimum;
  }
}

/**
 * Detailed information about an individual movie.
 * Contains all essential metadata for displaying movie information
 * in the carousel and detail views.
 */
export class MovieDetail {
  /**
   * Indicates if the movie is adults-only content.
   * Used for content filtering.
   */
  adult: boolean
  /**
   * Path to the backdrop image.
   * Typically a URL fragment that needs to be combined with a base URL.
   */
  backdrop_path: string
  /**
   * Array of genre identifiers associated with the movie.
   * These IDs correspond to specific genres in the movie database.
   */
  genre_ids: number[]
  /**
   * Unique identifier for the movie.
   * Used for fetching additional details or tracking selections.
   */
  id: number
  /**
   * Original language code (ISO 639-1).
   * Two-letter language code representing the movie's original language.
   */
  original_language: string
  /**
   * Original title in the movie's native language.
   * May differ from the display title if the movie was released under different names.
   */
  original_title: string
  /**
   * Plot summary or description.
   * Brief synopsis of the movie's storyline.
   */
  overview: string
  /**
   * Popularity score (higher numbers indicate more popular movies).
   * Used for ranking and sorting content.
   */
  popularity: number
  /**
   * Path to the poster image.
   * Typically a URL fragment that needs to be combined with a base URL.
   */
  poster_path: string
  /**
   * Movie release date in ISO format (YYYY-MM-DD).
   * The official release date for the movie.
   */
  release_date: string
  /**
   * Display title, possibly localized for the current region.
   * The title that should be shown to users.
   */
  title: string
  /**
   * Indicates if video content is available.
   * When true, trailers or clips may be available for this movie.
   */
  video: boolean
  /**
   * Average vote score on a scale of 0-10.
   * Represents the movie's rating based on user votes.
   */
  vote_average: number
  /**
   * Number of votes that have been cast.
   * Indicates how many users have rated this movie.
   */
  vote_count: number

  /**
   * Creates a new MovieDetail instance.
   *
   * @param {boolean} adult - Whether the movie is adults-only content
   * @param {string} backdrop_path - Path to the backdrop image
   * @param {number[]} genre_ids - Array of genre identifiers
   * @param {number} id - Unique identifier for the movie
   * @param {string} original_language - Original language code (ISO 639-1)
   * @param {string} original_title - Original title in native language
   * @param {string} overview - Plot summary or description
   * @param {number} popularity - Popularity score
   * @param {string} poster_path - Path to the poster image
   * @param {string} release_date - Release date in ISO format
   * @param {string} title - Display title for the movie
   * @param {boolean} video - Whether video content is available
   * @param {number} vote_average - Average vote score (0-10)
   * @param {number} vote_count - Number of votes cast
   */
  constructor(
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  ) {
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.genre_ids = genre_ids;
    this.id = id;
    this.original_language = original_language;
    this.original_title = original_title;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.title = title;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
