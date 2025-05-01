import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { LoadCarouselUseCase } from "../../domain/ports/incoming/carousel-use-case.port";

/**
 * Custom React hook for managing the carousel functionality.
 * This hook bridges the domain layer with the UI components by implementing the CarouselUseCase port.
 * It handles data fetching, caching, and state management for the movie carousel, providing a
 * clean abstraction for UI components to consume.
 *
 * @param {MovieFetchPort} moviePort - Port implementation for fetching movies data from external source
 * @param {MovieRepositoryPort} movieRepository - Repository implementation for storing and retrieving movie data
 * @returns {LoadCarouselUseCase} A LoadCarouselUseCase implementation with properties for accessing movie data,
 *          loading state, and error information
 */
export const useCarousel = (
	moviePort: MovieFetchPort,
	movieRepository: MovieRepositoryPort
): LoadCarouselUseCase => {

	/**
	 * Uses react-query to fetch movies and manage the loading state and caching.
	 * This provides automatic retries, caching, and stale data management.
	 */
	const { data, isLoading, error } = useQuery({
		queryKey: ['movies'],
		queryFn: moviePort.fetchMovies,
	});

	/**
	 * Syncs fetched data with the repository when data changes.
	 * This effect ensures that the repository always has the latest movie data
	 * once it has been successfully fetched.
	 */
	useEffect(() => {
		if (data !== null && data !== undefined) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository]);

	return {
		movies: movieRepository.getMovies(),
		isLoading,
		error,
	};
};
