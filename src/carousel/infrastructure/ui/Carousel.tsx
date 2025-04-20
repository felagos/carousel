import { useCarousel } from "../../application/hooks/useCarousel";
import { MovieFetchPort } from "../../domain/ports/outgoing/movie-fetch.port";
import { MovieRepositoryPort } from "../../domain/ports/outgoing/movie-repository.port";

interface Props {
	movieFetchAdapter: MovieFetchPort;
	movieRepositoryAdapter: MovieRepositoryPort;
}

export const Carousel: React.FC<Props> = ({ movieFetchAdapter, movieRepositoryAdapter }) => {
	useCarousel(movieFetchAdapter, movieRepositoryAdapter);

	return (
		<div>
		</div>
	);
};
