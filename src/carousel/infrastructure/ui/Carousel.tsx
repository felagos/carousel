import { useCarousel } from "../../application/hooks/useCarousel";
import { MovieFetch } from "../repository/movie.fetch";
import { MovieFetchService } from "../repository/movie-fetch.service";

const movieAdapter = new MovieFetch(new MovieFetchService());

export const Carousel = () => {

	 useCarousel(movieAdapter);

	return (
		<div></div>
	);

};
