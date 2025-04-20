import { MovieFetchPort } from "../../domain/out/movie-fetch.port";
import { MovieDetail } from "../../domain/movie.domain";
import { MovieFetchService } from "../http/movie-fetch.service";

export class MovieFetch implements MovieFetchPort {

	constructor(private movieFetch: MovieFetchService) {}

	fetchMovies = async (): Promise<MovieDetail[]> => {
		return this.movieFetch.fetchMovies();
	}

}
