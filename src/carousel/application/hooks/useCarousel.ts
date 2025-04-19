import { MovieRepositoryPort } from "../../domain/movie-repository.port";
import { useFetch } from "../../../common/hooks/useFetch";

export const useCarousel = (moviePort: MovieRepositoryPort) => {

	const [data, loading, error] = useFetch(moviePort.fetchMovies);

	return {
		data,
		loading,
		error,
	} as const;

};
