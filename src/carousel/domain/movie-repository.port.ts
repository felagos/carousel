import { MovieDetail } from "./movie.domain";

export interface MovieRepositoryPort {

	fetchMovies: () => Promise<MovieDetail[]>;

}
