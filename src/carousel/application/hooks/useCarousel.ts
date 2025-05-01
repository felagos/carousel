import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { useFetch } from "../../../common/hooks/useFetch";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { useEffect } from "react";
import { CarouselUseCase } from "../../domain/ports/incoming/carousel-use-case.port";

/**
 * Custom hook for managing the carousel functionality
 *
 * @param moviePort - Port to fetch movies data from external source
 * @param movieRepository - Repository for storing and retrieving movie data
 * @returns A {@link CarouselUseCase} implementation with functions for loading and getting movies,
 *          loading state, and error information
 */
export const useCarousel = (
	moviePort: MovieFetchPort,
	movieRepository: MovieRepositoryPort
): CarouselUseCase => {

	const [data, loading, error] = useFetch(moviePort.fetchMovies);

	useEffect(() => {
		if (data !== null) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository]);


	return {
		movies: data ?? [],
		isLoading: loading,
		error,
	};
};
