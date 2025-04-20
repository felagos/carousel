import { MovieDetail } from "../../domain/movie.domain";
import { useMovieStore } from "./movie.store";

export class MovieStoreRepository {

	setMovies = (movies: MovieDetail[]): void => {
		useMovieStore.setState({ movies });
	}

	getMovies = (): MovieDetail[] => {
		return useMovieStore.getState().movies;
	}

}
