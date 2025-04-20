import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { useFetch } from "../../../common/hooks/useFetch";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { useCallback, useEffect } from "react";
import { CarouselUseCase } from "../../domain/ports/incoming/carousel-use-case.port";
import { MovieDetail } from "../../domain/movie.domain";

export const useCarousel = (
	moviePort: MovieFetchPort,
	movieRepository: MovieRepositoryPort
): CarouselUseCase => {

	const [data, loading, error, refetch] = useFetch(moviePort.fetchMovies);

	useEffect(() => {
		if (data) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository]);

	const loadMovies = useCallback(() => {
		return refetch();
	}, [refetch]);

	const getMovies = useCallback((): MovieDetail[] => {
		return movieRepository.getMovies();
	}, [movieRepository]);

	return {
		loadMovies,
		getMovies,
		isLoading: loading,
		error,
	};
};
