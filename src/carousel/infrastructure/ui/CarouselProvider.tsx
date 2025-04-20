import { MovieFetch } from "../http/movie.fetch";
import { MovieRepository } from "../repository/movie-repository";
import { Carousel } from "./Carousel";

export const CarouselProvider = () => {
	const movieFetch = new MovieFetch();
	const movieRepository = new MovieRepository();


	return (
		<Carousel movieFetchAdapter={movieFetch} movieRepositoryAdapter={movieRepository} />
	);
};
