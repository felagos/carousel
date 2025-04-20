import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { Movie, MovieDetail } from "../../domain/movie.domain";
import { HttpClient } from "../../../common/api/http.config";

export class MovieFetch implements MovieFetchPort {

	constructor(private httpClient: HttpClient) { }

	fetchMovies = async (): Promise<MovieDetail[]> => {
		const response = await this.httpClient.get<Movie>('/movie/now_playing?language=en-US&page=1');
		return response.data.results;
	}

}
