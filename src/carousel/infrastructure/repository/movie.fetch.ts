import { MovieFetchPort } from "../../domain/movie-fetch.port";
import { MovieDetail } from "../../domain/movie.domain";
import { MovieFetchService } from "./movie-fetch.service";

export class MovieFetch implements MovieFetchPort {

	constructor(private movieFetch: MovieFetchService) {}

	fetchMovies = async (): Promise<MovieDetail[]> => {
		return this.movieFetch.fetchMovies();
	}

}
