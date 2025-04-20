import apiClient from "../../../common/api/http.config";
import { Movie } from "../../domain/movie.domain";

export class MovieFetchService {

	async fetchMovies() {
		const response = await apiClient.get<Movie>('/movie/now_playing?language=en-US&page=1');
		return response.data.results;
	}

}
