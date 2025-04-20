import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { MovieDetail } from "../../domain/movie.domain";
import { HttpClient } from "../../../common/api/http.config";
import { MovieEntity } from "../entity/movie.entity";

/**
 * Implementation of the MovieFetchPort interface for fetching movie data from an API
 */
export class MovieFetch implements MovieFetchPort {

	constructor(private httpClient: HttpClient) { }

	/**
	 * Fetches movies from the API
	 * @returns A promise that resolves to an array of MovieDetail objects
	 */
	fetchMovies = async (): Promise<MovieDetail[]> => {
		const response = await this.httpClient.get<MovieEntity>('/movie/now_playing?language=en-US&page=1');

		// Convert each MovieDetailEntity to a MovieDetail class instance
		return response.data.results.map(movie => new MovieDetail(
			movie.adult,
			movie.backdrop_path,
			movie.genre_ids,
			movie.id,
			movie.original_language,
			movie.original_title,
			movie.overview,
			movie.popularity,
			movie.poster_path,
			movie.release_date,
			movie.title,
			movie.video,
			movie.vote_average,
			movie.vote_count
		));
	}

}
