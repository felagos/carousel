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

	const [data, loading, error] = useFetch(moviePort.fetchMovies);

	useEffect(() => {
		if(data) {
			movieRepository.setMovies(data);
		}
	}, [data, movieRepository]);

	const loadMovies = useCallback(() => {
		// This will trigger the useFetch hook to refetch data
		// In a real implementation, we would need to add a refetch function to useFetch
		// For now, this is a placeholder
	}, []);

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
