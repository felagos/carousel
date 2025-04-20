import { MovieRepositoryPort } from "../../domain/out/movie-repository.port";
import { MovieDetail } from "../../domain/movie.domain";
import { MovieStoreRepository } from "./movie-store.repository";

export class MovieRepository implements MovieRepositoryPort {

	constructor(private movieStore: MovieStoreRepository) {}

	setMovies = (movies: MovieDetail[]): void => {
		this.movieStore.setMovies(movies);
	}

	getMovies = (): MovieDetail[] => {
		return this.movieStore.getMovies();
	}

}
