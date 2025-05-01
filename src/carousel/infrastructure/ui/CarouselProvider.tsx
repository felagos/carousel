import apiClient from "../../../common/api/http.config";
import { MovieFetch } from "../http/movie.fetch";
import { MovieRepository } from "../repository/movie-repository";
import { useMovieStore } from "../repository/movie.store";
import { Carousel } from "./Carousel";

export const CarouselProvider = () => {
	const movieFetch = new MovieFetch(apiClient);
	const movieRepository = new MovieRepository(useMovieStore.getState);


	return (
		<Carousel movieFetchAdapter={movieFetch} movieRepositoryAdapter={movieRepository} />
	);
};
