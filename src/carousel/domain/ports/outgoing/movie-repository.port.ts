import { MovieDetail } from "../../movie.domain";

export interface MovieRepositoryPort {
	setMovies: (movies: MovieDetail[]) => void;
	getMovies: () => MovieDetail[];
}
