import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { useFetch } from "../../../common/hooks/useFetch";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { useCallback, useEffect } from "react";
import { CarouselUseCase } from "../../domain/ports/incoming/carousel-use-case.port";
import { MovieDetail } from "../../domain/movie.domain";

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

	const [data, loading, error, refetch] = useFetch(moviePort.fetchMovies);

	useEffect(() => {
		if (data !== null) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository]);

	/**
	 * Loads or reloads movies from the data source
	 * @returns A promise that resolves when data is fetched
	 */
	const loadMovies = useCallback(() => {
		return refetch();
	}, [refetch]);

	/**
	 * Retrieves the current list of movies from the repository
	 * @returns An array of {@link MovieDetail} objects
	 */
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
