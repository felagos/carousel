import { useCarousel } from "../../application/hooks/useCarousel";
import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";
import { ListMovies } from "./ListMovies/ListMovies";

interface Props {
	movieFetchAdapter: MovieFetchPort;
	movieRepositoryAdapter: MovieRepositoryPort;
}

export const Carousel: React.FC<Props> = ({ movieFetchAdapter, movieRepositoryAdapter }) => {
	const { movies, isLoading } = useCarousel(movieFetchAdapter, movieRepositoryAdapter);

	if (isLoading) return <div>Loading...</div>;

	return (
		<ListMovies movies={movies} />
	);
};
