import { MovieRepositoryPort } from "../../domain/movie-repository.port";
import { MovieDetail } from "../../domain/movie.domain";
import { MovieFetchService } from "./movie-fetch.service";

export class MovieRepository implements MovieRepositoryPort {

	constructor(private movieFetch: MovieFetchService) {}

	fetchMovies = async (): Promise<MovieDetail[]> => {
		return this.movieFetch.fetchMovies();
	}

}
