import { MovieFetchPort } from "../../domain/out/movie-fetch.port";
import { Movie, MovieDetail } from "../../domain/movie.domain";
import apiClient from "../../../common/api/http.config";

export class MovieFetch implements MovieFetchPort {

	fetchMovies = async (): Promise<MovieDetail[]> => {
		const response = await apiClient.get<Movie>('/movie/now_playing?language=en-US&page=1');
		return response.data.results;
	}

}
