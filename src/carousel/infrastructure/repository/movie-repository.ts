import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { MovieDetail } from "../../domain/movie.domain";
import { useMovieStore } from "./movie.store";

export class MovieRepository implements MovieRepositoryPort {

	private readonly store = useMovieStore

	setMovies = (movies: MovieDetail[]): void => {
		this.store.setState({ movies });
	}

	getMovies = (): MovieDetail[] => {
		return this.store.getState().movies;
	}
}
