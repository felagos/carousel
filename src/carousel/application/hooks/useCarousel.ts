import { MovieFetchPort } from "../../domain/movie-fetch.port";
import { useFetch } from "../../../common/hooks/useFetch";

export const useCarousel = (moviePort: MovieFetchPort) => {

	const [data, loading, error] = useFetch(moviePort.fetchMovies);

	return {
		data,
		loading,
		error,
	} as const;

};
