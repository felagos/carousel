import { useCarousel } from "../../application/hooks/useCarousel";
import { MovieRepository } from "../repository/movie.repository";
import { MovieFetchService } from "../repository/movie-fetch.service";

const movieAdapter = new MovieRepository(new MovieFetchService());

export const Carousel = () => {

	 useCarousel(movieAdapter);

	return (
		<div></div>
	);

};
