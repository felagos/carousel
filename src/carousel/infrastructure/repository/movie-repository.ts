import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { MovieDetail } from "../../domain/movie.domain";
import { MovieStoreState } from "./movie.store";

export class MovieRepository implements MovieRepositoryPort {

	constructor(private store: MovieStoreState) { }

	setMovies = (movies: MovieDetail[]): void => {
		this.store().setMovies(movies);
	}

	getMovies = (): MovieDetail[] => {
		return this.store().movies;
	}
}
