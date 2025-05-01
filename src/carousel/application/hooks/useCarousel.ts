import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { useCallback, useEffect } from "react";
import { CarouselUseCase } from "../../domain/ports/incoming/carousel-use-case.port";
import { MovieDetail } from "../../domain/movie.domain";
import { useQuery } from "@tanstack/react-query";

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

	const { data, isLoading, error } = useQuery({
		queryKey: ['movies'],
		queryFn: moviePort.fetchMovies,
	});

	useEffect(() => {
		if (data !== null && data !== undefined) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository]);

	/**
	 * Retrieves the current list of movies from the repository
	 * @returns An array of {@link MovieDetail} objects
	 */
	const getMovies = useCallback((): MovieDetail[] => {
		return movieRepository.getMovies();
	}, [movieRepository]);

	return {
		getMovies,
		isLoading,
		error,
	};
};
