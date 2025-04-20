import { MovieFetchPort } from "../../domain/out/movie-fetch.port";
import { useFetch } from "../../../common/hooks/useFetch";
import { MovieRepositoryPort } from "../../domain/out/movie-repository.port";
import { useEffect } from "react";

export const useCarousel = (moviePort: MovieFetchPort, movieRepository: MovieRepositoryPort) => {

	const [data, loading, error] = useFetch(moviePort.fetchMovies);

	useEffect(() => {
		if(data) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository])

	return {
		data,
		loading,
		error,
	} as const;

};
