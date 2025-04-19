import { MovieDetail } from "./movie.domain";

export interface MovieFetchPort {

	fetchMovies: () => Promise<MovieDetail[]>;

}
