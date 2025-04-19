import { useCarousel } from "../../application/hooks/useCarousel";
import { MovieFetch } from "../repository/movie.fetch";
import { MovieFetchService } from "../repository/movie-fetch.service";
import { MovieRepository } from "../repository/movie-repository";
import { MovieStoreRepository } from "../repository/movie-store.repository";

const movieAdapter = new MovieFetch(new MovieFetchService());
const movieRepository = new MovieRepository(new MovieStoreRepository());

export const Carousel = () => {

	 useCarousel(movieAdapter, movieRepository);

	return (
		<div></div>
	);

};
